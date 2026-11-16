/* Arxiu de l'estudi: mostra estàtica. Totes les dades surten de dades.js i són inventades.
   No hi ha cap IA: les respostes són preparades i la cerca mira paraules dins dels fulls. */
(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);
  const reduit = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const TIPUS = {
    projecte: ["Projecte", "Projectes"], acabat: ["Acabat", "Acabats"], criteri: ["Criteri", "Criteris"],
    proveidor: ["Proveïdor", "Proveïdors"], industrial: ["Industrial", "Industrials"],
    llico: ["Lliçó d'obra", "Lliçons d'obra"], decisio: ["Decisió", "Decisions"],
    contracte: ["Contracte", "Contractes"], norma: ["Norma", "Normes"], proces: ["Procés", "Processos"],
    plantilla: ["Plantilla", "Plantilles"], persona: ["Persona", "Persones"], eina: ["Eina", "Eines"],
    client: ["Client", "Clients"]
  };
  const MESOS = ["de gener", "de febrer", "de març", "d'abril", "de maig", "de juny", "de juliol", "d'agost",
    "de setembre", "d'octubre", "de novembre", "de desembre"];
  const BUIDES = new Set(("a al als amb com de del dels el els en es fem fer ha han hem hi i la les lo los las o per " +
    "que quan quin quina quins quines se si un una uns unes va vam van y su sus nos ho he son esta estan mes molt tot").split(" "));
  const GIRS = [-1.8, 1.2, -0.7, 1.9, 1.1, -1.5, 0.8, -1.2];
  const CLAU_FETS = "arxiu-exemple-passos-fets";

  let D, fullPerId, areaPerId, index, deDins = false, rellotgeTanca = 0;

  /* ---------- Eines ---------- */

  function avaria(text) {
    const a = $("avaria");
    a.textContent = "La mostra no s'ha carregat bé: " + text;
    a.hidden = false;
    console.error(text);
  }

  function h(tag, props, ...fills) {
    const n = document.createElement(tag);
    for (const [k, v] of Object.entries(props || {})) {
      if (v === false || v == null) continue;
      if (k === "class") n.className = v;
      else if (k === "text") n.textContent = v;
      else if (k.startsWith("on")) n.addEventListener(k.slice(2), v);
      else n.setAttribute(k, v === true ? "" : v);
    }
    for (const f of fills.flat(Infinity)) if (f != null && f !== false) n.append(f);
    return n;
  }

  function norm(s) {
    return String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "")
      .replace(/·/g, "").replace(/[^a-z0-9]+/g, " ").trim();
  }
  const mots = (s) => norm(s).split(" ").filter(Boolean);

  function trossosData(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso || "");
    if (!m) console.error("Data mal escrita: " + iso);
    return m;
  }
  function dataCurta(iso) { const m = trossosData(iso); return m ? `${m[3]}/${m[2]}/${m[1]}` : String(iso); }
  function dataLlarga(iso) {
    const m = trossosData(iso);
    return m ? `${Number(m[3])} ${MESOS[Number(m[2]) - 1]} de ${m[1]}` : String(iso);
  }
  function esVell(iso) {
    const limit = new Date();
    limit.setMonth(limit.getMonth() - 6);
    return new Date(iso + "T00:00:00") < limit;
  }
  const nomTipus = (t, plural) => (TIPUS[t] || [t, t])[plural ? 1 : 0];

  function transicio(canvi) {
    if (reduit || !document.startViewTransition) { canvi(); return Promise.resolve(); }
    return document.startViewTransition(canvi).finished.catch(() => {});
  }
  function reanima(node, classe) {
    node.classList.remove(classe);
    void node.offsetWidth;
    node.classList.add(classe);
  }
  function portaA(node) { node.scrollIntoView({ block: "start", behavior: reduit ? "auto" : "smooth" }); }

  function enllacFull(f) {
    return h("a", { class: "enllac-full", href: "#" + f.id }, h("span", { class: "codi", text: f.codi }), " ", f.titol);
  }

  /* ---------- Preguntes preparades i cerca per paraules ---------- */

  function puntua(p, ms) {
    let punts = 0;
    for (const paraula of p.paraules || []) {
      const doble = paraula.startsWith("*");
      const arrel = doble ? paraula.slice(1) : paraula;
      if (ms.some((m) => m.startsWith(arrel))) punts += doble ? 2 : 1;
    }
    return punts;
  }
  function preguntaPreparada(text) {
    const ms = mots(text);
    let millor = null, max = 1;
    for (const p of D.preguntes) {
      const n = puntua(p, ms);
      if (n > max) { max = n; millor = p; }
    }
    return millor;
  }

  function creaIndex() {
    return D.fulls.map((f) => ({
      full: f,
      fort: mots([f.codi, f.titol, (f.etiquetes || []).join(" ")].join(" ")),
      mig: mots(f.resum),
      fluix: mots([(f.cos || []).join(" "), (f.camps || []).map((c) => c.et + " " + c.val).join(" "),
        (f.passos || []).map((p) => p.titol + " " + p.text).join(" "),
        (f.preus || []).map((p) => p.concepte).join(" "), f.autor, (f.origen || {}).doc].join(" "))
    }));
  }
  function arrelDe(mot) {
    let a = mot.replace(/(es|os|s)$/, "");
    if (a.length > 3) a = a.replace(/[aeiou]$/, "");
    return a.length >= 3 ? a : mot;
  }
  function arrelsDe(text) {
    return [...new Set(mots(text).filter((m) => m.length > 2 && !BUIDES.has(m)).map(arrelDe))];
  }
  function pesDe(entrada, arrel) {
    const hiEs = (llista) => llista.some((m) => m.startsWith(arrel));
    return hiEs(entrada.fort) ? 3 : hiEs(entrada.mig) ? 2 : hiEs(entrada.fluix) ? 1 : 0;
  }
  function cerca(text, exclosos) {
    const arrels = arrelsDe(text);
    const trobats = index.map((e) => {
      const pesos = arrels.map((a) => pesDe(e, a));
      return { full: e.full, quants: pesos.filter(Boolean).length, punts: pesos.reduce((x, y) => x + y, 0) };
    }).filter((t) => t.quants && !exclosos.has(t.full.id))
      .sort((x, y) => y.quants - x.quants || y.punts - x.punts);
    return { arrels, fulls: trobats.slice(0, 6).map((t) => t.full) };
  }
  function ressalta(text, arrels) {
    return String(text).split(/([\p{L}\p{N}·]+)/u).map((tros, i) =>
      (i % 2 && arrels.some((a) => norm(tros).startsWith(a)) ? h("mark", { text: tros }) : tros));
  }

  /* ---------- Resposta ---------- */

  function paragrafAmbNotes(text, fonts) {
    return h("p", null, text.replace(/\s+\[/g, "[").split(/\[(\d+)\]/).map((tros, i) => {
      if (i % 2 === 0) return tros;
      const id = fonts[Number(tros) - 1];
      if (!fullPerId.has(id)) { console.error("Nota sense font: " + tros); return null; }
      return h("a", { class: "nota", href: "#" + id, "aria-label": "Font " + tros, text: tros });
    }));
  }
  function liFont(id) {
    const f = fullPerId.get(id);
    if (!f) { console.error("Font que no existeix: " + id); return h("li", { text: "Falta el full " + id }); }
    return h("li", null, enllacFull(f),
      h("span", { class: "font-doc", text: (f.origen || {}).doc + ", revisat el " + dataCurta(f.data) }));
  }
  function cosResposta(p) {
    return [
      h("h2", { class: "resposta-titol", text: p.text }),
      h("div", { class: "resposta-text" }, p.resposta.map((t) => paragrafAmbNotes(t, p.fonts))),
      h("h3", { text: "D'on surt" }),
      h("ol", { class: "fonts" }, p.fonts.map(liFont))
    ];
  }
  function cosSenseResposta(quants) {
    const text = quants
      ? "En aquesta mostra només hi ha resposta escrita per a algunes preguntes. La cerca sí que ha trobat aquests fulls."
      : "La cerca tampoc ha trobat cap full que en parli. Proveu amb una altra paraula o mireu l'arxiu pila per pila.";
    return [h("h2", { class: "resposta-titol", text: "No hi ha cap resposta preparada per a això" }),
      h("div", { class: "resposta-text" }, h("p", { text })) ];
  }
  function llistaTroballes(fulls, arrels, ambResposta) {
    if (!fulls.length) return null;
    return [h("h3", { text: ambResposta ? "Altres fulls que en parlen" : "Fulls que en parlen" }),
      h("ul", { class: "troballes" }, fulls.map((f) => h("li", null, h("a", { class: "troballa", href: "#" + f.id },
        h("span", { class: "codi", text: f.codi }), " ", h("b", null, ressalta(f.titol, arrels)),
        h("span", { class: "resum" }, ressalta(f.resum, arrels))))))];
  }
  function pintaResposta(p, text) {
    const { arrels, fulls } = cerca(text, new Set(p ? p.fonts : []));
    $("q").value = text;
    $("resposta").replaceChildren(h("article", { class: "paper resposta" },
      p ? cosResposta(p) : cosSenseResposta(fulls.length), llistaTroballes(fulls, arrels, !!p)));
    document.querySelectorAll("#sug button[data-id]").forEach((b) =>
      b.setAttribute("aria-pressed", String(!!p && b.dataset.id === p.id)));
    portaA($("form"));
  }
  function consulta(text) {
    const net = String(text).trim();
    if (!net) return $("q").focus();
    pintaResposta(preguntaPreparada(net), net);
  }

  function pintaSuggerides(totes) {
    const destacades = D.preguntes.filter((p) => p.destacada);
    const llista = totes || !destacades.length ? D.preguntes : destacades;
    const botons = llista.map((p) => h("li", null, h("button", { type: "button", "data-id": p.id,
      "aria-pressed": "false", text: p.text, onclick: () => pintaResposta(p, p.text) })));
    if (llista.length < D.preguntes.length) {
      botons.push(h("li", null, h("button", { type: "button", onclick: () => pintaSuggerides(true),
        text: "Veure les " + D.preguntes.length + " preguntes preparades" })));
    }
    $("sug").replaceChildren(...botons);
  }

  /* ---------- Les piles i el llistat de fulls ---------- */

  function pintaPiles() {
    $("piles").replaceChildren(...D.arees.map((a, i) => {
      const quants = D.fulls.filter((f) => f.area === a.id).length;
      return h("button", { class: "pila", type: "button", "data-area": a.id, "aria-expanded": "false",
        "aria-controls": "llistat", style: `--gir:${GIRS[i % GIRS.length]}deg;--i:${i}`, onclick: () => obrePila(a.id) },
        h("span", { class: "pila-full" },
          h("span", { class: "pila-dalt" }, h("span", { class: "pila-codi", text: a.prefix }),
            h("span", { class: "pila-n", text: quants === 1 ? "1 full" : quants + " fulls" })),
          h("span", { class: "pila-nom", text: a.nom }), h("span", { class: "pila-lema", text: a.lema })));
    }));
  }
  function marcaEstat(f) {
    if (f.estat === "substituit") return h("span", { class: "marca substituit", text: "Substituït" });
    if (f.estat === "revisar") return h("span", { class: "marca revisar", text: "Per revisar" });
    return null;
  }
  function filaFull(f, i) {
    return h("li", { style: "--i:" + Math.min(i, 14) }, h("a", { class: "fila " + f.estat, href: "#" + f.id },
      h("span", { class: "codi", text: f.codi }),
      h("span", { class: "fila-cos" }, h("span", { class: "fila-titol", text: f.titol }), marcaEstat(f),
        h("span", { class: "fila-resum", text: f.resum })),
      h("span", { class: "fila-rev", text: "rev. " + f.rev }),
      h("span", { class: "fila-data", text: dataCurta(f.data) })));
  }
  function botoTipus(area, tipus, nom, actiu) {
    return h("button", { type: "button", "aria-pressed": String(tipus === actiu), text: nom, onclick: () => {
      $("llistat").replaceChildren(pintaLlistat(area, tipus));
      $("llistat").querySelector('.tipus [aria-pressed="true"]').focus();
    } });
  }
  function pintaLlistat(area, tipus) {
    const tots = D.fulls.filter((f) => f.area === area.id);
    const presents = [...new Set(tots.map((f) => f.tipus))];
    const filtres = presents.length > 1 && h("div", { class: "tipus", role: "group", "aria-label": "Triar tipus de full" },
      botoTipus(area, "", "Tot", tipus), presents.map((t) => botoTipus(area, t, nomTipus(t, true), tipus)));
    return h("section", { class: "paper llistat", "aria-label": "Fulls de " + area.nom },
      h("header", { class: "llistat-cap" }, h("h3", { text: area.nom }), h("p", { text: area.lema })),
      filtres,
      h("ol", { class: "files" }, tots.filter((f) => !tipus || f.tipus === tipus).map(filaFull)));
  }
  function obrePila(id) {
    const boto = document.querySelector(`.pila[data-area="${id}"]`);
    const tancar = boto.getAttribute("aria-expanded") === "true";
    const vell = $("llistat").firstElementChild;
    if (vell && !tancar) vell.style.viewTransitionName = "none";
    if (!tancar) boto.style.viewTransitionName = "llistat";
    transicio(() => {
      boto.style.viewTransitionName = "";
      document.querySelectorAll(".pila").forEach((b) => b.setAttribute("aria-expanded", String(b === boto && !tancar)));
      $("llistat").replaceChildren(...(tancar ? [] : [pintaLlistat(areaPerId.get(id), "")]));
    }).then(() => {
      /* En pantalla ampla es deixen les piles a la vista per poder canviar; en estreta es va directe al llistat. */
      if (!tancar) portaA($(matchMedia("(max-width:980px)").matches ? "llistat" : "piles"));
    });
  }
  function reparteix() {
    const piles = $("piles");
    if (reduit || !("IntersectionObserver" in window)) return piles.classList.add("repartit");
    const ull = new IntersectionObserver((vist) => {
      if (!vist.some((v) => v.isIntersecting)) return;
      piles.classList.add("repartit");
      ull.disconnect();
    }, { threshold: 0.12 });
    ull.observe(piles);
  }

  /* ---------- El full obert ---------- */

  function blocEstat(f) {
    if (f.estat === "substituit") {
      const nou = fullPerId.get(f.substituitPer);
      return [h("p", { class: "segell substituit", text: "Substituït" }),
        h("p", { class: "avis-estat" }, "Aquest full ja no val. El substitueix ", nou ? enllacFull(nou) : "un altre full", ".")];
    }
    if (f.estat === "revisar") {
      return [h("p", { class: "segell revisar", text: "Per revisar" }),
        h("p", { class: "avis-estat revisar", text: "Aquest full està pendent de revisar." })];
    }
    return [null, null];
  }
  function blocColor(f) {
    if (!f.color) return null;
    if (!/^#[0-9a-f]{6}$/i.test(f.color)) { console.error("Color mal escrit a " + f.id); return null; }
    return [h("div", { class: "mostra-color", style: "background:" + f.color }),
      h("p", { class: "peu-mostra", text: "Mostra de color aproximada." })];
  }
  function blocPreus(f) {
    if (!(f.preus || []).length) return null;
    const fila = (p) => h("tr", { class: esVell(p.data) ? "vell" : "" }, h("td", { text: p.concepte }),
      h("td", { class: "preu", text: p.preu }),
      h("td", null, dataCurta(p.data), esVell(p.data) && h("span", { class: "avis-vell", text: "Té més de sis mesos: torneu-lo a demanar" })));
    return [h("h3", { text: "Preus que ens han donat" }), h("table", { class: "preus" },
      h("thead", null, h("tr", null, h("th", { text: "Concepte" }), h("th", { text: "Preu" }), h("th", { text: "Quan ens el van donar" }))),
      h("tbody", null, f.preus.map(fila)))];
  }
  function blocRelacionats(f) {
    const vells = D.fulls.filter((x) => x.substituitPer === f.id);
    const ids = [...new Set([...(f.relacionats || []), ...vells.map((x) => x.id)])].filter((id) => fullPerId.has(id));
    if (!ids.length) return null;
    return [h("h3", { text: "Fulls relacionats" }), h("ul", { class: "relacionats" }, ids.map((id) => {
      const r = fullPerId.get(id);
      return h("li", null, enllacFull(r), r.substituitPer === f.id && " (el full que aquest substitueix)");
    }))];
  }
  function blocEtiquetes(f) {
    if (!(f.etiquetes || []).length) return null;
    return h("p", { class: "etiquetes" }, "Etiquetes: ", f.etiquetes.map((e, i) =>
      [i ? ", " : "", h("button", { type: "button", text: e, onclick: () => buscaEtiqueta(e) })]));
  }
  function pintaFull(f) {
    const [segell, avis] = blocEstat(f);
    return [
      h("p", { class: "full-on", text: (areaPerId.get(f.area) || {}).nom + ", " + nomTipus(f.tipus).toLowerCase() }),
      segell,
      h("h2", { id: "fullTitol", text: f.titol }),
      h("p", { class: "full-resum", text: f.resum }),
      avis,
      blocColor(f),
      h("div", { class: "full-text" }, (f.cos || []).map((t) => h("p", { text: t }))),
      (f.camps || []).length && h("dl", { class: "camps" }, f.camps.map((c) => [h("dt", { text: c.et }), h("dd", { text: c.val })])),
      (f.passos || []).length && [h("h3", { text: "Pas a pas" }), h("ol", { class: "passos" },
        f.passos.map((p) => h("li", null, h("b", { text: p.titol }), h("p", { text: p.text }))))],
      blocPreus(f), blocRelacionats(f), blocEtiquetes(f)
    ].flat(Infinity).filter(Boolean);
  }
  function pintaCaixeti(f) {
    const origen = f.origen || {};
    const cella = (et, val, classe) => h("div", { class: classe || "" }, h("dt", { text: et }), h("dd", { text: val || "No consta" }));
    return [cella("Full", f.codi, "c-codi"), cella("Revisió", f.rev, "c-rev"), cella("Revisat", dataLlarga(f.data)),
      cella("Autor", f.autor), cella("Surt de", origen.doc, "c-ample"), cella("On és", origen.lloc, "c-ample")];
  }
  function mostraFull(f) {
    const d = $("full");
    clearTimeout(rellotgeTanca);
    d.classList.remove("surt");
    $("fullCos").replaceChildren(...pintaFull(f));
    $("caixeti").replaceChildren(...pintaCaixeti(f));
    if (d.open) reanima($("fullCos"), "canvia");
    else d.showModal();
    d.scrollTop = 0;
  }
  function amagaFull() {
    const d = $("full");
    if (!d.open) return;
    const fi = () => { d.classList.remove("surt"); d.close(); };
    clearTimeout(rellotgeTanca);
    if (reduit) return fi();
    d.classList.add("surt");
    rellotgeTanca = setTimeout(fi, 220);
  }
  /* Tancar torna enrere si el full s'ha obert des de la pàgina; si s'ha entrat directe amb l'enllaç, neteja l'adreça. */
  function tanca() {
    if (deDins) { deDins = false; history.back(); return; }
    history.replaceState(null, "", location.pathname + location.search);
    amagaFull();
  }
  function sincronitza() {
    const f = fullPerId.get(location.hash.slice(1));
    if (f) mostraFull(f);
    else { deDins = false; amagaFull(); }
  }
  function clicEnllac(e) {
    const a = e.target.closest ? e.target.closest('a[href^="#"]') : null;
    const id = a ? a.getAttribute("href").slice(1) : "";
    if (!fullPerId.has(id)) return;
    e.preventDefault();
    if ($("full").open) location.replace("#" + id);
    else { deDins = true; location.hash = id; }
  }
  function clicFora(e) {
    const r = $("full").getBoundingClientRect();
    const dins = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom;
    if (e.target === $("full") && !dins) tanca();
  }
  function buscaEtiqueta(etiqueta) {
    tanca();
    setTimeout(() => consulta(etiqueta.replace(/-/g, " ")), reduit ? 0 : 280);
  }

  /* ---------- Acollida ---------- */

  function llegeixFets() {
    try { return new Set(JSON.parse(localStorage.getItem(CLAU_FETS) || "[]")); }
    catch (e) { return new Set(); /* sense emmagatzematge, les marques duren només aquesta visita */ }
  }
  function desaFets(fets) {
    try { localStorage.setItem(CLAU_FETS, JSON.stringify([...fets])); }
    catch (e) { /* sense emmagatzematge, les marques duren només aquesta visita */ }
  }
  function comptaFets(fets) {
    const total = D.acollida.passos.length;
    $("acollidaFet").textContent = fets.size
      ? `${fets.size} de ${total} passos fets.`
      : `${total} passos, del primer dia al primer mes. Marqueu els que ja tingueu fets.`;
  }
  function liPas(p, i, fets) {
    const f = fullPerId.get(p.ref);
    const li = h("li", { class: fets.has(i) ? "fet" : "" });
    const caixa = h("input", { type: "checkbox", id: "pas" + i, checked: fets.has(i), onchange: () => {
      if (caixa.checked) fets.add(i); else fets.delete(i);
      li.classList.toggle("fet", caixa.checked);
      desaFets(fets);
      comptaFets(fets);
    } });
    li.append(caixa, h("div", null, h("label", { class: "pas-titol", for: "pas" + i, text: (i + 1) + ". " + p.titol }),
      h("p", { text: p.text }), f ? enllacFull(f) : null));
    return li;
  }
  function pintaAcollida() {
    const A = D.acollida, fets = llegeixFets();
    $("acollidaTitol").textContent = A.titol;
    $("acollidaIntro").textContent = A.intro;
    $("notaNou").replaceChildren(h("h2", { text: A.titol }), h("p", { text: A.intro }),
      h("a", { href: "#acollida", text: "Veure el recorregut dels primers dies" }));
    const etapes = [...new Set(A.passos.map((p) => p.quan))];
    $("etapes").replaceChildren(...etapes.map((quan, k) => h("section", { class: "paper etapa", style: `--gir:${[-0.6, 0.5, -0.4][k % 3]}deg` },
      h("h3", { text: quan }),
      h("ol", null, A.passos.map((p, i) => p.quan === quan && liPas(p, i, fets))))));
    comptaFets(fets);
  }

  /* ---------- Arrencada ---------- */

  function dadesBones() {
    return D && [D.arees, D.fulls, D.preguntes].every(Array.isArray) && D.acollida && Array.isArray(D.acollida.passos);
  }
  function arrenca() {
    D = window.DADES;
    if (!dadesBones()) return avaria("no s'han pogut llegir les dades.");
    fullPerId = new Map(D.fulls.map((f) => [f.id, f]));
    areaPerId = new Map(D.arees.map((a) => [a.id, a]));
    index = creaIndex();
    pintaSuggerides(false);
    pintaPiles();
    pintaAcollida();
    $("compte").textContent = `${D.fulls.length} fulls repartits en ${D.arees.length} piles. ` +
      `Última revisió de l'arxiu: ${dataLlarga((D.estudi || {}).actualitzat)}.`;
    $("form").addEventListener("submit", (e) => { e.preventDefault(); consulta($("q").value); });
    $("tanca").addEventListener("click", tanca);
    $("full").addEventListener("cancel", (e) => { e.preventDefault(); tanca(); });
    $("full").addEventListener("click", clicFora);
    document.addEventListener("click", clicEnllac);
    addEventListener("hashchange", sincronitza);
    sincronitza();
    reparteix();
  }

  try { arrenca(); } catch (e) { avaria(e.message); throw e; }
})();
