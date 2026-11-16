/* Dades inventades de la demo. Estudi Exemple no existeix, ni els seus proveïdors. */
window.DADES = {

  temes: [
    { id: "banys", nom: "Banys" },
    { id: "cuines", nom: "Cuines" },
    { id: "paviments", nom: "Paviments" },
    { id: "mobiliari", nom: "Mobiliari" },
    { id: "installacions", nom: "Instal·lacions" }
  ],

  projectes: [
    { id: "p-eixample", nom: "Pis a l'Eixample", tipus: "Reforma completa d'habitatge", any: 2023, m2: 148,
      espais: "Cuina oberta al menjador, 2 banys (el segon de 3,6 m²), 3 dormitoris, galeria",
      decisions: [
        "Es va recuperar el mosaic hidràulic del passadís i la resta es va fer amb parquet de roure en espiga.",
        "Illa de cuina amb taulell de pedra calcària. El client volia marbre i es va descartar per les taques.",
        "Segon bany amb dutxa a ras i desguàs lineal a la paret del fons."
      ],
      acabats: ["a-roure", "a-calcaria"], proveidors: ["v-fusteria", "v-pedres"],
      temes: ["cuines", "paviments", "banys"] },

    { id: "p-sarria", nom: "Àtic a Sarrià", tipus: "Reforma d'àtic amb terrassa", any: 2024, m2: 112,
      espais: "Sala i cuina oberta, terrassa de 40 m², 2 banys, 2 dormitoris",
      decisions: [
        "Porcellànic de 120x120 a tota la planta i a la terrassa, amb acabat antilliscant a fora, perquè el terra seguís d'una peça.",
        "Microciment dins la dutxa del bany principal. Va donar problemes i no el repetiríem.",
        "Els endolls de capçalera es van baixar a 55 cm a petició del client, per unes tauletes baixes."
      ],
      acabats: ["a-porcellanic", "a-microciment"], proveidors: ["v-ceramiques", "v-revestiments", "v-mobles"],
      temes: ["paviments", "banys", "installacions"] },

    { id: "p-santcugat", nom: "Casa a Sant Cugat", tipus: "Casa unifamiliar, reforma i ampliació", any: 2024, m2: 260,
      espais: "Sala, cuina amb office, 4 banys, jardí",
      decisions: [
        "Terratzo de gra mitjà a tota la planta baixa, cuina inclosa.",
        "Marbre blanc de veta grisa als dos banys de dalt.",
        "Fusteria a mida a tota la casa, amb el mateix lacat mat a cuina i armaris."
      ],
      acabats: ["a-terratzo", "a-marbre", "a-lacat"], proveidors: ["v-pedres", "v-fusteria"],
      temes: ["paviments", "banys", "cuines"] },

    { id: "p-gracia", nom: "Pis a Gràcia", tipus: "Reforma d'habitatge", any: 2025, m2: 86,
      espais: "Bany de 3,2 m², cuina oberta, 2 dormitoris",
      decisions: [
        "Dutxa d'obra a ras de terra: es va treure el recrescut antic i el bany va quedar a nivell amb el passadís.",
        "Porta corredissa encastada al bany per guanyar el gir de la porta.",
        "Rajola feta a mà de color verd a les parets del bany."
      ],
      acabats: ["a-rajola"], proveidors: ["v-ceramiques", "v-sanitaris"],
      temes: ["banys", "installacions"] },

    { id: "p-pedralbes", nom: "Habitatge a Pedralbes", tipus: "Reforma completa amb llicència d'obres majors", any: 2025, m2: 210,
      espais: "3 banys, vestidor, cuina tancada amb rebost, sala de 45 m²",
      decisions: [
        "Marbre blanc de veta grisa al bany principal, amb el lavabo tallat de la mateixa pedra.",
        "Aixetes de llautó envellit a tots els banys.",
        "Sofà modular i dues butaques de Mobles Mostra, amb teixit triat pel client."
      ],
      acabats: ["a-marbre", "a-llauto"], proveidors: ["v-pedres", "v-mobles", "v-aixetes"],
      temes: ["banys", "mobiliari"] },

    { id: "p-cerdanya", nom: "Casa a la Cerdanya", tipus: "Segona residència", any: 2023, m2: 190,
      espais: "Sala amb llar de foc, 3 banys (el de convidats de 3,8 m²), 4 dormitoris",
      decisions: [
        "Parquet de roure multicapa sobre terra radiant a totes les plantes.",
        "Llar de foc folrada de pedra calcària apomassada.",
        "Bany de convidats amb banyera curta de 140 cm."
      ],
      acabats: ["a-roure", "a-calcaria"], proveidors: ["v-fusteria", "v-pedres"],
      temes: ["paviments", "banys"] },

    { id: "p-born", nom: "Pis al Born", tipus: "Reforma d'habitatge", any: 2025, m2: 74,
      espais: "Bany de 2,9 m², cuina en línia oberta a la sala, 1 dormitori",
      decisions: [
        "Dutxa a ras amb el bany pujat 2 cm, perquè el forjat no tenia gruix per rebaixar.",
        "Mampara fixa de vidre sense perfil a terra.",
        "Lavabo de 50 cm i inodor suspès per deixar pas lliure davant."
      ],
      acabats: ["a-porcellanic"], proveidors: ["v-sanitaris", "v-ceramiques"],
      temes: ["banys"] },

    { id: "p-santgervasi", nom: "Dúplex a Sant Gervasi", tipus: "Reforma de dúplex, obra en curs", any: 2026, m2: 165,
      espais: "Cuina oberta al menjador, 2 banys i un lavabo, terrassa",
      decisions: [
        "Taulell de cuina de pedra calcària, amb pica encastada per sota.",
        "Porcellànic gris de gran format a la planta de dia.",
        "Mobles de cuina lacats sense tirador, amb gola d'alumini."
      ],
      acabats: ["a-porcellanic", "a-calcaria", "a-lacat"], proveidors: ["v-pedres", "v-ceramiques", "v-fusteria", "v-sanitaris"],
      temes: ["cuines", "banys", "paviments"] },

    { id: "p-poblenou", nom: "Pis a Poblenou", tipus: "Reforma d'habitatge, obra en curs", any: 2026, m2: 98,
      espais: "Cuina oberta a la sala, 2 banys, estudi",
      decisions: [
        "Terratzo en peça de 60x60 a la zona de dia, cuina inclosa.",
        "Mobles de cuina lacats en blanc trencat, amb tiradors de llautó.",
        "L'estudi es tanca amb una fusteria de vidre per no perdre llum."
      ],
      acabats: ["a-terratzo", "a-lacat"], proveidors: ["v-fusteria", "v-ceramiques"],
      temes: ["cuines", "paviments"] }
  ],

  acabats: [
    { id: "a-roure", nom: "Parquet de roure en espiga", proveidor: "v-fusteria",
      mostra: "repeating-linear-gradient(45deg,#b48a5e 0 14px,#a07649 14px 28px),#b48a5e",
      on: "Terres de sala, dormitoris i cuina oberta.",
      be: "Dona calidesa i aguanta bé el pas. Sobre terra radiant, en multicapa, no s'ha mogut.",
      no: "Acabat a l'oli davant la pica. Va agafar taques d'aigua en menys d'un any. A la cuina ara el posem envernissat.",
      temes: ["paviments", "cuines"] },

    { id: "a-calcaria", nom: "Pedra calcària beige", proveidor: "v-pedres",
      mostra: "radial-gradient(circle at 30% 40%,#e6dcc8 0 18%,transparent 19%),radial-gradient(circle at 75% 70%,#d9cdb5 0 12%,transparent 13%),#ded3bd",
      on: "Taulells de cuina i llar de foc.",
      be: "El color agrada a tothom i combina amb fusta clara.",
      no: "Polida i sense tractar, al taulell li van quedar marques d'oli i de llimona. Ara la demanem amb tractament antitaques i acabat apomassat.",
      temes: ["cuines"] },

    { id: "a-marbre", nom: "Marbre blanc de veta grisa", proveidor: "v-pedres",
      mostra: "linear-gradient(115deg,transparent 40%,#b9b6b0 41%,transparent 43%),linear-gradient(160deg,transparent 62%,#c9c6c0 63%,transparent 64.5%),#f2f0ec",
      on: "Parets i lavabos de banys principals.",
      be: "Al bany, amb poca aigua a sobre i ben segellat, es manté com el primer dia.",
      no: "No el posaríem al terra de la dutxa: rellisca i s'hi marquen els productes de neteja.",
      temes: ["banys"] },

    { id: "a-porcellanic", nom: "Porcellànic gris pedra 120x120", proveidor: "v-ceramiques",
      mostra: "linear-gradient(90deg,transparent 49.3%,#9d9a95 49.5%,transparent 50.7%),linear-gradient(0deg,transparent 49.3%,#9d9a95 49.5%,transparent 50.7%),#bdb9b2",
      on: "Terres de planta de dia, terrasses i banys.",
      be: "És el paviment que menys trucades de postvenda ens ha donat. Permet seguir el mateix terra de dins a fora.",
      no: "Pujar peces de 120 per una escala estreta: a Sarrià se'n van trencar un 8%. Ara comptem un 10% de sobrant i ho mirem abans.",
      temes: ["paviments", "banys"] },

    { id: "a-microciment", nom: "Microciment", proveidor: "v-revestiments",
      mostra: "radial-gradient(circle at 20% 30%,#a9a49c 0 20%,transparent 40%),radial-gradient(circle at 80% 60%,#9c978f 0 15%,transparent 45%),#b3aea6",
      on: "Dutxa i parets del bany principal de l'Àtic a Sarrià.",
      be: "A les parets fora de l'aigua i al moble del lavabo ha aguantat bé.",
      no: "Dins la dutxa: taques de cal i una fissura a la trobada amb el desguàs als 8 mesos. No el tornaríem a posar dins d'una dutxa.",
      temes: ["banys"] },

    { id: "a-terratzo", nom: "Terratzo de gra mitjà", proveidor: "v-ceramiques",
      mostra: "radial-gradient(circle at 20% 25%,#7d7466 0 4%,transparent 5%),radial-gradient(circle at 65% 40%,#c8b9a0 0 5%,transparent 6%),radial-gradient(circle at 40% 75%,#8f8676 0 3%,transparent 4%),radial-gradient(circle at 85% 80%,#a9987d 0 4%,transparent 5%),#e7e1d6",
      on: "Planta baixa i cuina oberta.",
      be: "No se li veuen les taques i a la cuina va molt bé.",
      no: "A les zones de pas perd la brillantor. A Sant Cugat es va tornar a abrillantar als 18 mesos. Cal dir-ho al client abans.",
      temes: ["paviments", "cuines"] },

    { id: "a-rajola", nom: "Rajola feta a mà verda, 6,5x20", proveidor: "v-ceramiques",
      mostra: "repeating-linear-gradient(0deg,#4f6b55 0 18px,#e9e4da 18px 20px),#4f6b55",
      on: "Parets de bany.",
      be: "El client n'està molt content i a les fotos del bany és el que més es veu.",
      no: "Cada peça té un gruix diferent i el col·locador va trigar el doble del previst. Ara ho pressupostem a part.",
      temes: ["banys"] },

    { id: "a-lacat", nom: "Lacat mat blanc trencat", proveidor: "v-fusteria",
      mostra: "linear-gradient(90deg,transparent 32%,#d8d3c9 32.5%,transparent 33.5%,transparent 66%,#d8d3c9 66.5%,transparent 67.5%),#efebe3",
      on: "Portes de cuina i armaris a mida.",
      be: "Amb el mat no es veuen les ratlles fines.",
      no: "A les portes sense tirador queden marques de dits. Quan el client cuina molt, millor amb tirador.",
      temes: ["cuines", "mobiliari"] },

    { id: "a-llauto", nom: "Aixetes de llautó envellit", proveidor: "v-aixetes",
      mostra: "linear-gradient(135deg,#a8854a,#7a5c2c 55%,#b8955a),#a8854a",
      on: "Lavabos i dutxes.",
      be: "Envelleix amb el temps i no es nota la cal.",
      no: "Els productes antical se'l mengen. S'ha de dir al client i deixar-ho escrit a la carpeta d'entrega.",
      temes: ["banys"] }
  ],

  proveidors: [
    { id: "v-pedres", nom: "Pedres Mostra S.L.", que: "Pedra natural: taulells, llars de foc i marbre per a banys.",
      preu: "Taulell de calcària de 2 cm, polit: 340 €/m² més 45 €/ml de cantell. Marbre blanc de veta grisa en 2 cm: 520 €/m².",
      data: "2026-05-14", termini: "Van dir 3 setmanes des de la plantilla. Van trigar 4.",
      temes: ["cuines", "banys"] },

    { id: "v-sanitaris", nom: "Sanitaris Exemple", que: "Inodors, lavabos, cisternes encastades i plats de dutxa.",
      preu: "Inodor suspès sense brida amb seient de tancament suau: 690 €. Cisterna encastada amb placa: 410 €. Lavabo de sobre taulell de 60 cm: 520 €.",
      data: "2026-09-22", termini: "Van dir 2 setmanes. Van complir.",
      temes: ["banys"] },

    { id: "v-mobles", nom: "Mobles Mostra", que: "Sofàs, butaques i mobiliari de sala, amb teixit a triar.",
      preu: "Sofà modular de 3 mòduls, 310 cm: 7.850 €. Butaca giratòria: 2.150 €. IVA a part.",
      data: "2025-02-03", termini: "Van dir 10 setmanes. Van trigar 14, per un retard del teixit a fàbrica.",
      temes: ["mobiliari"] },

    { id: "v-fusteria", nom: "Fusteria Exemple S.L.", que: "Cuines i armaris a mida, parquet, portes.",
      preu: "Cuina lacada mat a mida: 1.180 €/ml de mòdul baix i 860 €/ml d'alt. Parquet en espiga col·locat: 98 €/m².",
      data: "2026-06-18", termini: "Van dir 8 setmanes des del plànol de taller aprovat. Van trigar 9.",
      temes: ["cuines", "mobiliari", "paviments"] },

    { id: "v-ceramiques", nom: "Ceràmiques Mostra", que: "Porcellànic, terratzo en peça i rajola feta a mà.",
      preu: "Porcellànic 120x120: 74 €/m². Terratzo 60x60: 89 €/m². Rajola feta a mà: 118 €/m². Tot sense col·locar.",
      data: "2026-10-10", termini: "Van dir 2 setmanes. La rajola feta a mà en va trigar 5.",
      temes: ["paviments", "banys"] },

    { id: "v-aixetes", nom: "Aixetes Exemple", que: "Aixeteria de bany i cuina, també en llautó.",
      preu: "Monocomandament de lavabo en llautó envellit: 480 €. Equip de dutxa encastat: 1.240 €.",
      data: "2024-12-12", termini: "Van dir 4 setmanes. Van trigar 6: el llautó envellit es fa sota comanda.",
      temes: ["banys"] },

    { id: "v-revestiments", nom: "Revestiments Exemple", que: "Aplicació de microciment.",
      preu: "Microciment en parets de bany, aplicat i segellat: 95 €/m².",
      data: "2023-11-20", termini: "Van dir 1 setmana. Van complir.",
      temes: ["banys"] }
  ],

  criteris: [
    { id: "c-endolls", titol: "Endolls i mecanismes", temes: ["installacions"],
      text: "Endolls de capçalera a 70 cm del terra acabat. Interruptors a 105 cm. Endolls generals a 30 cm i a la cuina a 110 cm, a 20 cm com a mínim de pica i fogons. Abans de fer regates, preguntem l'alçada de les tauletes." },
    { id: "c-dutxa", titol: "Dutxa d'obra", temes: ["banys"],
      text: "Si el forjat ho permet, dutxa a ras sense plat, amb un 2% de pendent cap a un desguàs lineal tocant a paret." },
    { id: "c-estanquitat", titol: "Prova d'estanquitat", temes: ["banys", "installacions"],
      text: "Abans de posar rajola a una dutxa, prova d'aigua de 24 hores amb foto a l'acta de visita." },
    { id: "c-mostres", titol: "Mostres signades", temes: ["paviments", "banys", "cuines"],
      text: "Cap acabat es demana sense una mostra física que el client hagi vist i signat." },
    { id: "c-preus", titol: "Preus amb data", temes: ["mobiliari", "banys", "cuines"],
      text: "Tot preu de proveïdor es guarda amb la seva data. Si té més de 6 mesos, es torna a demanar abans de passar-lo al client." },
    { id: "c-taller", titol: "Plànol de taller", temes: ["mobiliari", "cuines"],
      text: "Cap moble a mida es fabrica sense el plànol de taller aprovat per escrit." },
    { id: "c-microciment", titol: "Microciment", temes: ["banys"],
      text: "Mai dins la dutxa. A parets fora de l'aigua i a mobles, sí." },
    { id: "c-sobrants", titol: "Sobrants", temes: ["paviments", "banys"],
      text: "Guardem un 5% de cada paviment i rajola, etiquetat, al traster del client." },
    { id: "c-actes", titol: "Una acta per visita", temes: ["installacions"],
      text: "Cada visita d'obra acaba amb una acta: fotos, tasques per industrial i data de la propera visita." },
    { id: "c-entrega", titol: "Entrega final", temes: ["installacions"],
      text: "Carpeta en paper i en digital: plànols tal com s'ha construït, llista d'acabats amb proveïdor, garanties, butlletí elèctric i instruccions de manteniment." }
  ],

  /* Preguntes preparades. paraules: arrels que es busquen al text escrit. Amb * compten doble. */
  preguntes: [
    { id: "q-dutxa", text: "Com vam resoldre la dutxa a ras de terra en banys petits?",
      paraules: ["*dutx", "*ras", "plat", "desgua", "nivell", "petit", "bany", "pendent", "mampara"],
      resposta: [
        "Als banys petits fem la dutxa d'obra, sense plat, amb un 2% de pendent cap a un desguàs lineal de 80 cm tocant a la paret del fons. El terra va d'una peça de cap a cap i el bany sembla més gran.",
        "Al Pis a Gràcia, amb un bany de 3,2 m², es va treure el recrescut antic i el bany va quedar a nivell amb el passadís.",
        "Al Pis al Born, de 2,9 m², el forjat no tenia gruix per rebaixar. Es va pujar tot el bany 2 cm i es va resoldre amb un llindar rebaixat a la porta.",
        "En tots dos, mampara fixa de vidre de 8 mm sense perfil a terra i prova d'estanquitat de 24 hores abans de posar la rajola."
      ],
      fonts: [
        { ref: "p-gracia", doc: "Plànol de detall de la dutxa, D-07", data: "2025-02-18" },
        { ref: "p-born", doc: "Acta de visita núm. 5, prova d'estanquitat", data: "2025-06-09" },
        { ref: "c-dutxa", doc: "Criteris de l'estudi", data: "2026-01-08" }
      ] },

    { id: "q-paviment", text: "Quin paviment hem posat a les cuines obertes al menjador i com ha envellit?",
      paraules: ["*pavim", "terra", "*cuin", "*obert", "salo", "menjador", "*envell", "parquet", "fusta", "sala"],
      resposta: [
        "Al Pis a l'Eixample, del 2023, es va posar parquet de roure en espiga acabat a l'oli. Davant la pica va agafar taques d'aigua en menys d'un any i a la visita de garantia es va envernissar aquella zona.",
        "A l'Àtic a Sarrià, del 2024, el porcellànic gris de 120x120 està com el primer dia. És el paviment que menys trucades de postvenda ens ha donat.",
        "A la Casa a Sant Cugat el terratzo va bé, però als 18 mesos el client va demanar tornar-lo a abrillantar a la zona de pas.",
        "Des de llavors, si el client vol fusta a la cuina oberta, la posem envernissada."
      ],
      fonts: [
        { ref: "p-eixample", doc: "Acta de la visita de garantia", data: "2024-11-22" },
        { ref: "p-sarria", doc: "Memòria d'acabats", data: "2024-01-10" },
        { ref: "p-santcugat", doc: "Correu amb el client", data: "2026-04-03" },
        { ref: "a-roure", doc: "Fitxa de l'acabat", data: "2024-11-22" }
      ] },

    { id: "q-pedra", text: "Quin proveïdor de pedra natural fem servir i quin és l'últim preu que ens va donar?",
      paraules: ["*pedr", "*marbre", "*calcari", "proveid", "preu", "taulell", "natural"],
      resposta: [
        "La pedra natural la fem amb Pedres Mostra S.L. des del Pis a l'Eixample: calcària per a taulells i llars de foc, marbre per als banys.",
        "L'últim preu és del 14/05/2026, per al Dúplex a Sant Gervasi: taulell de calcària beige de 2 cm, polit, a 340 €/m², més 45 €/ml de cantell recte i 180 € per cada forat de pica encastada.",
        "A la mateixa oferta, el marbre blanc de veta grisa en 2 cm sortia a 520 €/m².",
        "Van dir 3 setmanes des de la presa de plantilla i van trigar 4."
      ],
      avis: { data: "2026-05-14", text: "Aquest preu és de {fa}. Abans de passar-lo a un client, cal demanar-ne un de nou." },
      fonts: [
        { ref: "p-santgervasi", doc: "Pressupost de Pedres Mostra S.L., oferta 26-118", data: "2026-05-14" },
        { ref: "v-pedres", doc: "Correu amb el proveïdor", data: "2026-05-14" },
        { ref: "p-eixample", doc: "Acta de visita núm. 9", data: "2023-06-15" }
      ] },

    { id: "q-sofa", text: "Quin sofà i quines butaques vam posar a l'Habitatge a Pedralbes i quant van trigar a arribar?",
      paraules: ["*sofa", "*butac", "*mobl", "*mobiliari", "termini", "trig", "arrib", "pedralbes", "tapiss"],
      resposta: [
        "A l'Habitatge a Pedralbes es va posar un sofà modular de tres mòduls de Mobles Mostra, de 310 cm, tapissat en lli rentat de color sorra.",
        "Les dues butaques són giratòries, del mateix proveïdor, en vellut verd oliva.",
        "Al pressupost, el sofà sortia a 7.850 € i cada butaca a 2.150 €, IVA a part.",
        "Van dir 10 setmanes i van arribar en 14. El teixit es va endarrerir a fàbrica i ens ho van avisar tard.",
        "Amb aquest proveïdor, si el teixit no és d'estoc, comptem 14 setmanes."
      ],
      fonts: [
        { ref: "p-pedralbes", doc: "Pressupost de mobiliari", data: "2025-02-03" },
        { ref: "v-mobles", doc: "Correu amb el proveïdor, avís de retard", data: "2025-03-28" },
        { ref: "p-pedralbes", doc: "Acta de visita núm. 14, entrega del mobiliari", data: "2025-05-12" }
      ] },

    { id: "q-permis", text: "Quant triga de mitjana el permís d'obres, segons els nostres expedients?",
      paraules: ["*permis", "*llicenc", "*ajuntament", "*expedient", "mitjana", "tramit", "comunicacio"],
      resposta: [
        "Tenim 7 expedients tancats des del 2023.",
        "Les 4 comunicacions d'obres van trigar de mitjana 5 setmanes des que es van presentar fins que vam poder començar.",
        "Les 3 llicències d'obres majors van trigar 5,5 mesos de mitjana.",
        "La més llarga va ser la de l'Habitatge a Pedralbes, 7 mesos, per un requeriment sobre el forjat.",
        "Els expedients del Dúplex a Sant Gervasi i del Pis a Poblenou encara són oberts i no compten a la mitjana."
      ],
      fonts: [
        { ref: "", doc: "Seguiment d'expedients, full de càlcul de l'estudi", data: "2026-09-30" },
        { ref: "p-pedralbes", doc: "Expedient de llicència, requeriment de l'Ajuntament", data: "2024-10-11" },
        { ref: "p-santcugat", doc: "Expedient de llicència", data: "2023-09-05" },
        { ref: "p-gracia", doc: "Comunicació d'obres", data: "2024-12-02" }
      ] },

    { id: "q-endolls", text: "A quina alçada posem els endolls de capçalera i els mecanismes?",
      paraules: ["*endoll", "*mecanism", "*interruptor", "*alcada", "capcal", "electric", "llit"],
      resposta: [
        "El criteri de l'estudi és posar els endolls de capçalera a 70 cm del terra acabat, per sobre de la tauleta.",
        "Interruptors i mecanismes a 105 cm, a la mateixa altura que la maneta de la porta.",
        "Endolls generals a 30 cm. A la cuina, a 110 cm i a 20 cm com a mínim de la pica i dels fogons.",
        "A l'Àtic a Sarrià el client va demanar els de capçalera a 55 cm perquè tenia tauletes baixes. Va quedar a l'acta núm. 4, i des de llavors preguntem l'alçada de les tauletes abans de fer regates."
      ],
      fonts: [
        { ref: "c-endolls", doc: "Criteris de l'estudi, instal·lacions, revisió 3", data: "2026-01-08" },
        { ref: "p-sarria", doc: "Acta de visita núm. 4", data: "2024-02-27" },
        { ref: "p-gracia", doc: "Plànol d'instal·lacions E-02", data: "2025-01-20" }
      ] },

    { id: "q-microciment", text: "Quins problemes ens va donar el microciment a la dutxa i què no repetiríem?",
      paraules: ["*microcim", "*problem", "humid", "*repetir", "dutx", "fissur", "taca"],
      resposta: [
        "El microciment el vam posar dins la dutxa del bany principal de l'Àtic a Sarrià, aplicat per Revestiments Exemple.",
        "Als 8 mesos van sortir taques de cal que no marxaven i una fissura fina a la trobada amb el desguàs.",
        "L'aplicador ho va reparar en garantia, però el client ha de tornar a segellar cada any i no n'està content.",
        "A les parets de fora de la dutxa i al moble del lavabo ha aguantat bé.",
        "No el tornaríem a posar dins d'una dutxa. Allà ara fem porcellànic o pedra."
      ],
      fonts: [
        { ref: "p-sarria", doc: "Memòria d'acabats", data: "2024-01-10" },
        { ref: "p-sarria", doc: "Acta de la visita de garantia", data: "2025-03-14" },
        { ref: "v-revestiments", doc: "Correu amb l'aplicador", data: "2025-03-21" },
        { ref: "a-microciment", doc: "Fitxa de l'acabat", data: "2025-03-21" }
      ] },

    { id: "q-banys4", text: "Quins projectes tenen un bany de menys de 4 m² per ensenyar-lo de referència?",
      paraules: ["*4", "*quatre", "*metres", "*menys", "petit", "bany", "*referenc", "projecte", "ensenyar"],
      resposta: [
        "N'hi ha quatre.",
        "Pis al Born, 2,9 m²: dutxa a ras, lavabo de 50 cm i inodor suspès. És el més petit que hem fet.",
        "Pis a Gràcia, 3,2 m²: dutxa a ras, porta corredissa encastada i rajola feta a mà verda.",
        "Pis a l'Eixample, 3,6 m²: segon bany, amb dutxa a ras i desguàs lineal.",
        "Casa a la Cerdanya, 3,8 m²: bany de convidats amb banyera curta de 140 cm, per si us demanen banyera en poc espai."
      ],
      fonts: [
        { ref: "p-born", doc: "Plànol de planta reformada, P-03", data: "2025-03-04" },
        { ref: "p-gracia", doc: "Plànol de planta reformada, P-03", data: "2024-11-15" },
        { ref: "p-eixample", doc: "Plànol de planta reformada, P-02", data: "2023-02-20" },
        { ref: "p-cerdanya", doc: "Plànol de planta reformada, P-05", data: "2023-04-12" }
      ] },

    { id: "q-entrega", text: "Què li donem al client quan acabem l'obra?",
      paraules: ["*entreg", "client", "*final", "*acabem", "*acabar", "*carpeta", "*garanti", "documentacio", "donem"],
      resposta: [
        "Al client li donem una carpeta en paper i la mateixa en digital.",
        "Hi ha els plànols tal com s'ha construït, amb el recorregut de les instal·lacions, i la llista d'acabats amb la referència, el color i el proveïdor de cada un.",
        "També hi van les garanties i els manuals d'electrodomèstics, aixetes i climatització, i el butlletí elèctric.",
        "Hi afegim les instruccions de manteniment de la pedra i la fusta, i deixem al traster un 5% de cada paviment i rajola, etiquetat.",
        "Amb la signatura de l'acta de recepció comença a comptar la visita de garantia, que fem als 12 mesos."
      ],
      fonts: [
        { ref: "c-entrega", doc: "Criteris de l'estudi, entrega final", data: "2026-01-08" },
        { ref: "p-pedralbes", doc: "Acta de recepció", data: "2025-05-30" },
        { ref: "p-gracia", doc: "Índex de la carpeta d'entrega", data: "2025-07-18" }
      ] },

    { id: "q-sanitaris", text: "Quant ens costen ara un inodor suspès i un lavabo de gama alta?",
      paraules: ["*sanitar", "*inodor", "*lavabo", "*wc", "*cistern", "aixet", "preu", "gama", "costen", "cost"],
      resposta: [
        "L'última tarifa és de Sanitaris Exemple, del 22/09/2026, amb el 30% de descompte que ens fan com a estudi.",
        "Inodor suspès sense brida amb seient de tancament suau: 690 €. Cisterna encastada amb placa: 410 €.",
        "Lavabo de sobre taulell en ceràmica mat, de 60 cm: 520 €.",
        "Per a les aixetes, l'últim preu és d'Aixetes Exemple: monocomandament de lavabo en llautó envellit a 480 €."
      ],
      avis: { data: "2024-12-12", text: "El preu de les aixetes és de {fa}. Abans de passar-lo a un client, cal demanar-ne un de nou." },
      fonts: [
        { ref: "v-sanitaris", doc: "Tarifa amb descompte d'estudi", data: "2026-09-22" },
        { ref: "p-santgervasi", doc: "Pressupost de banys", data: "2026-10-01" },
        { ref: "v-aixetes", doc: "Correu amb el proveïdor", data: "2024-12-12" }
      ] },

    /* Va l'última perquè, en cas d'empat de punts, guanyin les preguntes més concretes de dalt. */
    { id: "q-acabats", text: "Com hem fet els últims banys i quins acabats hi vam posar?",
      paraules: ["*acabat", "*material", "*bany", "*lavabo", "fet", "fer", "fem", "resol", "utilitz", "servir", "posa", "ultim", "*acabad", "*bano", "hicimos", "hecho"],
      resposta: [
        "Al Pis a Gràcia, del 2025, el bany de 3,2 m² porta rajola feta a mà de color verd a les parets, dutxa d'obra a ras de terra i porta corredissa encastada.",
        "A l'Habitatge a Pedralbes, del 2025, el bany principal és de marbre blanc de veta grisa, amb el lavabo tallat de la mateixa pedra i aixetes de llautó envellit.",
        "Al Pis al Born, del 2025, porcellànic gris a terra, mampara fixa de vidre sense perfil, lavabo de 50 cm i inodor suspès.",
        "El microciment de l'Àtic a Sarrià no el repetim dins la dutxa. Allà ara fem porcellànic o pedra."
      ],
      fonts: [
        { ref: "p-gracia", doc: "Llista d'acabats de la carpeta d'entrega", data: "2025-07-18" },
        { ref: "p-pedralbes", doc: "Llista d'acabats de la carpeta d'entrega", data: "2025-05-30" },
        { ref: "p-born", doc: "Plànol del bany, D-03", data: "2025-05-12" },
        { ref: "c-microciment", doc: "Criteris de l'estudi", data: "2026-01-08" }
      ] }
  ]
};
