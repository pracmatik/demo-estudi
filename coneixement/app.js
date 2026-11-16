/* Base de coneixement, demo. Sense servidor: les respostes són a dades.js. */
(function () {
  "use strict";
  var D = window.DADES;
  var $ = function (id) { return document.getElementById(id); };

  /* Índex de tot el que es pot enllaçar */
  var tot = {};
  D.projectes.forEach(function (p) { tot[p.id] = { tipus: "projectes", nom: p.nom }; });
  D.acabats.forEach(function (a) { tot[a.id] = { tipus: "acabats", nom: a.nom }; });
  D.proveidors.forEach(function (v) { tot[v.id] = { tipus: "proveidors", nom: v.nom }; });
  D.criteris.forEach(function (c) { tot[c.id] = { tipus: "criteris", nom: c.titol }; });

  /* Projectes on surt cada acabat i cada proveïdor, tret de les fitxes de projecte */
  function projectesAmb(camp, id) {
    return D.projectes.filter(function (p) { return p[camp].indexOf(id) > -1; }).map(function (p) { return p.id; });
  }
  D.acabats.forEach(function (a) { a.projectes = projectesAmb("acabats", a.id); });
  D.proveidors.forEach(function (v) { v.projectes = projectesAmb("proveidors", v.id); });

  function norm(s) {
    return String(s).normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
  }
  function dataCurta(iso) { var p = iso.split("-"); return p[2] + "/" + p[1] + "/" + p[0]; }
  function mesosDes(iso) {
    var p = iso.split("-").map(Number), ara = new Date();
    var m = (ara.getFullYear() - p[0]) * 12 + (ara.getMonth() + 1 - p[1]);
    return ara.getDate() < p[2] ? m - 1 : m;
  }
  function textFa(iso) {
    var m = mesosDes(iso);
    if (m < 1) return "aquest mes";
    return m === 1 ? "fa 1 mes" : "fa " + m + " mesos";
  }
  function enllac(id) {
    return tot[id] ? '<a href="#' + id + '" data-ves="' + id + '">' + tot[id].nom + "</a>" : "";
  }
  function llistaEnllacos(ids) { return ids.map(enllac).join(", "); }

  /* Preguntes */
  function puntua(pregunta, paraules) {
    return pregunta.paraules.reduce(function (s, k) {
      var pes = k.charAt(0) === "*" ? 2 : 1, arrel = norm(k);
      var hi = paraules.some(function (w) { return w.indexOf(arrel) === 0; });
      return hi ? s + pes : s;
    }, 0);
  }
  function busca(text) {
    var paraules = norm(text).split(" ").filter(Boolean), millor = null, punts = 1;
    D.preguntes.forEach(function (q) {
      var s = puntua(q, paraules);
      if (s > punts) { punts = s; millor = q; }
    });
    return millor;
  }

  function font(f) {
    var parts = [];
    if (f.ref) parts.push(enllac(f.ref));
    parts.push(f.doc);
    return "<li>" + parts.join(" · ") + ' · <span class="data">' + dataCurta(f.data) + "</span></li>";
  }

  function mostraResposta(q, escrit) {
    var r = $("resposta"), h = "";
    if (escrit) h += '<p class="on">La pregunta preparada que més s\'hi acosta:</p>';
    h += "<h3>" + q.text + '</h3><div class="text">' + q.resposta.map(function (t) { return "<p>" + t + "</p>"; }).join("") + "</div>";
    if (q.avis) h += '<div class="prova">' + q.avis.text.replace("{fa}", textFa(q.avis.data)) + "</div>";
    h += "<div class=\"fonts\"><b>D'on surt</b><ol>" + q.fonts.map(font).join("") + "</ol></div>";
    r.innerHTML = h;
    r.hidden = false;
    marcaSuggerida(q.id);
    acostaResposta();
    if (window.oxTrack) window.oxTrack("coneixement " + q.id);
  }

  function mostraNoTrobat(text) {
    var r = $("resposta");
    r.innerHTML = "";
    var t = document.createElement("h3");
    t.textContent = text;
    var p1 = document.createElement("p");
    p1.textContent = "En aquesta mostra només hi ha les preguntes preparades de sobre. Proveu-ne una o escriviu-la amb altres paraules.";
    var p2 = document.createElement("p");
    p2.className = "on";
    p2.textContent = "A la versió real, si no ho troba als vostres documents, us diu que no ho ha trobat i no s'inventa la resposta.";
    r.appendChild(t); r.appendChild(p1); r.appendChild(p2);
    r.hidden = false;
    marcaSuggerida("");
    acostaResposta();
    if (window.oxTrack) window.oxTrack("coneixement sense resposta");
  }

  /* Al mòbil la resposta queda sota les preguntes: hi baixem si no es veu */
  function acostaResposta() {
    var r = $("resposta");
    if (r.getBoundingClientRect().top > window.innerHeight * 0.6) r.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function marcaSuggerida(id) {
    Array.prototype.forEach.call(document.querySelectorAll(".sug"), function (b) {
      b.setAttribute("aria-pressed", b.dataset.q === id ? "true" : "false");
    });
  }

  $("sug").innerHTML = D.preguntes.map(function (q) {
    return '<button type="button" class="sug" aria-pressed="false" data-q="' + q.id + '">' + q.text + "</button>";
  }).join("");
  $("sug").addEventListener("click", function (e) {
    var b = e.target.closest(".sug");
    if (b == null) return;
    var q = D.preguntes.filter(function (x) { return x.id === b.dataset.q; })[0];
    $("q").value = q.text;
    mostraResposta(q, false);
  });
  $("form").addEventListener("submit", function (e) {
    e.preventDefault();
    var text = $("q").value.trim();
    if (text === "") return;
    var q = busca(text);
    if (q) mostraResposta(q, norm(text) === norm(q.text) ? false : true);
    else mostraNoTrobat(text);
  });

  /* Fitxes */
  function fitxaProjecte(p) {
    return '<article class="fitxa" id="' + p.id + '" data-temes="' + p.temes.join(" ") + '" data-projs="' + p.id + '">' +
      "<h3>" + p.nom + '</h3><p class="meta">' + p.tipus + " · " + p.any + " · " + p.m2 + " m²</p>" +
      '<p><span class="et">Espais:</span> ' + p.espais + "</p>" +
      '<p class="et">Decisions que es van prendre</p><ul>' + p.decisions.map(function (d) { return "<li>" + d + "</li>"; }).join("") + "</ul>" +
      '<p><span class="et">Acabats:</span> ' + llistaEnllacos(p.acabats) + "</p>" +
      '<p><span class="et">Proveïdors:</span> ' + llistaEnllacos(p.proveidors) + "</p></article>";
  }
  function fitxaAcabat(a) {
    return '<article class="fitxa" id="' + a.id + '" data-temes="' + a.temes.join(" ") + '" data-projs="' + a.projectes.join(" ") + '">' +
      '<div class="mostra" style="background:' + a.mostra + '"></div>' +
      "<h3>" + a.nom + '</h3><p class="meta">' + a.on + "</p>" +
      '<p><span class="et">Va bé:</span> ' + a.be + "</p>" +
      '<p><span class="et">No ho repetiríem:</span> ' + a.no + "</p>" +
      '<p><span class="et">Proveïdor:</span> ' + enllac(a.proveidor) + "</p>" +
      '<p><span class="et">Projectes:</span> ' + llistaEnllacos(a.projectes) + "</p></article>";
  }
  function fitxaProveidor(v) {
    var vell = mesosDes(v.data) > 6 ? '<span class="vell">Té més de 6 mesos, cal tornar-lo a demanar</span>' : "";
    return '<article class="fitxa" id="' + v.id + '" data-temes="' + v.temes.join(" ") + '" data-projs="' + v.projectes.join(" ") + '">' +
      "<h3>" + v.nom + '</h3><p class="meta">' + v.que + "</p>" +
      '<p><span class="et">Últim preu:</span> ' + v.preu + "</p>" +
      '<p class="on">Del ' + dataCurta(v.data) + ", " + textFa(v.data) + ". " + vell + "</p>" +
      '<p style="margin-top:8px"><span class="et">Termini real:</span> ' + v.termini + "</p>" +
      '<p><span class="et">Projectes:</span> ' + llistaEnllacos(v.projectes) + "</p></article>";
  }
  function fitxaCriteri(c, i) {
    return '<article class="fitxa criteri" id="' + c.id + '" data-temes="' + c.temes.join(" ") + '" data-projs="*">' +
      '<span class="num">' + (i + 1) + "</span><h3>" + c.titol + "</h3><p style=\"margin-top:6px\">" + c.text + "</p></article>";
  }
  $("panell-projectes").innerHTML = D.projectes.map(fitxaProjecte).join("");
  $("panell-acabats").innerHTML = D.acabats.map(fitxaAcabat).join("");
  $("panell-proveidors").innerHTML = D.proveidors.map(fitxaProveidor).join("");
  $("panell-criteris").innerHTML = D.criteris.map(fitxaCriteri).join("");

  /* Pestanyes i filtres */
  var estat = { panell: "projectes", tema: "", proj: "" };
  $("xips").innerHTML = [{ id: "", nom: "Tots" }].concat(D.temes).map(function (t) {
    return '<button type="button" class="xip" data-tema="' + t.id + '" aria-pressed="' + (t.id === "" ? "true" : "false") + '">' + t.nom + "</button>";
  }).join("");
  $("selProj").innerHTML += D.projectes.map(function (p) { return '<option value="' + p.id + '">' + p.nom + "</option>"; }).join("");

  function aplica() {
    Array.prototype.forEach.call(document.querySelectorAll(".pest"), function (b) {
      var on = b.dataset.panell === estat.panell;
      b.setAttribute("aria-selected", on ? "true" : "false");
      $("panell-" + b.dataset.panell).hidden = on === false;
    });
    Array.prototype.forEach.call(document.querySelectorAll(".xip"), function (b) {
      b.setAttribute("aria-pressed", b.dataset.tema === estat.tema ? "true" : "false");
    });
    $("selProj").value = estat.proj;
    var panell = $("panell-" + estat.panell), visibles = 0;
    var vell = panell.querySelector(".buit");
    if (vell) vell.remove();
    Array.prototype.forEach.call(panell.querySelectorAll(".fitxa"), function (f) {
      var temaOk = estat.tema === "" || f.dataset.temes.split(" ").indexOf(estat.tema) > -1;
      var projOk = estat.proj === "" || f.dataset.projs === "*" || f.dataset.projs.split(" ").indexOf(estat.proj) > -1;
      f.hidden = (temaOk && projOk) === false;
      if (temaOk && projOk) visibles++;
    });
    $("compte").textContent = visibles === 1 ? "1 fitxa" : visibles + " fitxes";
    if (visibles === 0) panell.insertAdjacentHTML("beforeend", '<p class="buit">Cap fitxa amb aquest filtre.</p>');
  }

  $("pestanyes").addEventListener("click", function (e) {
    var b = e.target.closest(".pest");
    if (b) { estat.panell = b.dataset.panell; aplica(); }
  });
  $("xips").addEventListener("click", function (e) {
    var b = e.target.closest(".xip");
    if (b) { estat.tema = b.dataset.tema; aplica(); }
  });
  $("selProj").addEventListener("change", function () { estat.proj = this.value; aplica(); });

  /* Enllaços a fitxes: obre la pestanya, treu filtres i marca la fitxa */
  function ves(id) {
    var el = $(id);
    if (el == null || tot[id] == null) return;
    estat = { panell: tot[id].tipus, tema: "", proj: "" };
    aplica();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    el.classList.add("marcat");
    setTimeout(function () { el.classList.remove("marcat"); }, 2200);
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("a[data-ves]");
    if (a == null) return;
    e.preventDefault();
    ves(a.dataset.ves);
  });

  aplica();
})();
