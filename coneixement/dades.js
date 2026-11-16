/* Dades inventades de la demo. Estudi Exemple no existeix, ni la seva gent, ni els seus clients, ni els seus proveïdors. */
window.DADES = {
  estudi: { nom: "Estudi Exemple", actualitzat: "2026-11-10" },

  arees: [
    { id: "projectes", nom: "Projectes",           prefix: "PRJ", lema: "Els nou encàrrecs tancats o en marxa des del 2023, un per un." },
    { id: "disseny",   nom: "Disseny i acabats",   prefix: "DIS", lema: "Acabats provats, alçades que repetim i què no tornaríem a posar." },
    { id: "obra",      nom: "Obra i industrials",  prefix: "OBR", lema: "Proveïdors amb preu i data, industrials i què revisem abans de tapar." },
    { id: "decisions", nom: "Decisions",           prefix: "DEC", lema: "Què es va decidir, qui ho va decidir, quan i per què." },
    { id: "legal",     nom: "Legal i contractes",  prefix: "LEG", lema: "El contracte tipus, les garanties i què fem davant d'un problema." },
    { id: "processos", nom: "Com treballem",       prefix: "PRO", lema: "Com portem un encàrrec, de la primera visita a la postvenda." },
    { id: "equip",     nom: "Equip i acollida",    prefix: "EQP", lema: "Qui som, com s'organitza el dia a dia i què cal saber el primer dia." },
    { id: "clients",   nom: "Clients i encàrrecs", prefix: "CLI", lema: "Com ens arriben, com cobrem i com els atenem un cop acabada l'obra." }
  ],

  fulls: [

    /* ================= PROJECTES ================= */

    { id: "prj-001", codi: "PRJ-001", area: "projectes", tipus: "projecte",
      titol: "Pis a l'Eixample",
      resum: "Reforma completa de 148 m² del 2023, amb mosaic recuperat, parquet en espiga i una illa de cuina de calcària.",
      cos: [
        "Es va recuperar el mosaic hidràulic del passadís i tota la resta del pis es va fer amb parquet de roure en espiga. Era la primera planta sencera que fèiem en espiga i vam demanar una mostra de 2 m² abans de comprar res.",
        "A la cuina hi ha una illa amb taulell de pedra calcària. El client volia marbre i el vam descartar per les taques.",
        "El segon bany, de 3,6 m², porta dutxa a ras amb desguàs lineal a la paret del fons. Va ser el primer cop que ho resolíem així i d'aquí va néixer el criteri de la dutxa d'obra.",
        "Repetiríem el mosaic i la calcària. El roure acabat a l'oli davant la pica, no: a la visita de garantia del novembre del 2024 aquella zona tenia taques d'aigua i es va envernissar."
      ],
      camps: [
        { et: "Tipus", val: "Reforma completa d'habitatge" },
        { et: "Any", val: "2023" },
        { et: "Superfície", val: "148 m²" },
        { et: "Espais", val: "Cuina oberta al menjador, 2 banys (el segon de 3,6 m²), 3 dormitoris, galeria" }
      ],
      etiquetes: ["reforma completa", "parquet", "calcaria", "cuina oberta"],
      estat: "vigent",
      origen: { doc: "Acta de visita núm. 9 i acta de la visita de garantia", lloc: "Servidor, Projectes, 2023 Eixample" },
      autor: "Núria Demo, interiorisme", data: "2024-11-22", rev: "B",
      relacionats: ["dis-001", "dis-002", "dis-011", "obr-004", "obr-001", "dec-011"] },

    { id: "prj-002", codi: "PRJ-002", area: "projectes", tipus: "projecte",
      titol: "Àtic a Sarrià",
      resum: "Àtic de 112 m² del 2024 amb porcellànic de 120x120 a tota la planta i el microciment que no repetiríem.",
      cos: [
        "Porcellànic de 120x120 a tota la planta i a la terrassa, amb acabat antilliscant a fora, perquè el terra seguís d'una peça de dins a fora. És el que repetiríem sense pensar-hi.",
        "Al bany principal vam posar microciment dins la dutxa. Als 8 mesos hi havia taques de cal i una fissura a la trobada amb el desguàs. No el repetiríem.",
        "Pujar peces de 120 per una escala estreta va sortir car: se'n va trencar un 8 %. Des d'aquí comptem un 10 % de sobrant i mirem el recorregut abans de comprar.",
        "Els endolls de capçalera es van baixar a 55 cm a petició del client, per unes tauletes baixes. Va quedar a l'acta núm. 4, del febrer del 2024."
      ],
      camps: [
        { et: "Tipus", val: "Reforma d'àtic amb terrassa" },
        { et: "Any", val: "2024" },
        { et: "Superfície", val: "112 m²" },
        { et: "Espais", val: "Sala i cuina oberta, terrassa de 40 m², 2 banys, 2 dormitoris" }
      ],
      etiquetes: ["atic", "porcellanic", "microciment", "terrassa"],
      estat: "vigent",
      origen: { doc: "Memòria d'acabats i acta de la visita de garantia", lloc: "Servidor, Projectes, 2024 Sarrià" },
      autor: "Núria Demo, interiorisme", data: "2025-03-21", rev: "B",
      relacionats: ["dis-004", "dis-005", "dec-001", "obr-005", "obr-007", "dis-010", "cli-010"] },

    { id: "prj-003", codi: "PRJ-003", area: "projectes", tipus: "projecte",
      titol: "Casa a Sant Cugat",
      resum: "Casa unifamiliar de 260 m² del 2024, amb terratzo a la planta baixa, marbre als banys i fusteria a mida.",
      cos: [
        "Terratzo de gra mitjà a tota la planta baixa, cuina inclosa, i marbre blanc de veta grisa als dos banys de dalt. A tota la casa hi ha fusteria a mida, amb el mateix lacat mat a la cuina i als armaris.",
        "La llicència d'obres majors es va presentar el setembre del 2023 i l'obra va començar a la primavera del 2024.",
        "El terratzo va bé, però a les zones de pas va perdre brillantor i el client va demanar abrillantar-lo als 18 mesos. Ara avisem del desgast abans que triï.",
        "Durant l'obra el client va demanar de paraula allargar l'illa de la cuina 40 cm. Ens va costar tres setmanes i una discussió de preu. D'aquí va sortir la norma que els canvis només valen per escrit."
      ],
      camps: [
        { et: "Tipus", val: "Casa unifamiliar, reforma i ampliació" },
        { et: "Any", val: "2024" },
        { et: "Superfície", val: "260 m²" },
        { et: "Espais", val: "Sala, cuina amb office, 4 banys, jardí" }
      ],
      etiquetes: ["casa", "terratzo", "marbre", "fusteria a mida"],
      estat: "vigent",
      origen: { doc: "Expedient de llicència i correu amb el client", lloc: "Servidor, Projectes, 2024 Sant Cugat" },
      autor: "Pau Exemple, projectes", data: "2026-04-03", rev: "C",
      relacionats: ["dis-006", "dis-003", "dis-008", "obr-001", "obr-004", "leg-009", "dec-003", "cli-008"] },

    { id: "prj-004", codi: "PRJ-004", area: "projectes", tipus: "projecte",
      titol: "Pis a Gràcia",
      resum: "Reforma de 86 m² del 2025 amb un bany de 3,2 m² resolt amb dutxa a ras, porta corredissa i rajola verda feta a mà.",
      cos: [
        "La dutxa és d'obra, a ras de terra: es va treure el recrescut antic i el bany va quedar a nivell amb el passadís. A la porta, una corredissa encastada a la paret per no perdre el gir de la batent.",
        "A les parets hi ha rajola feta a mà de color verd. És el que més es veu a les fotos del bany i el client n'està content. Al col·locador li va costar el doble del previst, i ara aquesta partida la pressupostem a part.",
        "Repetiríem la dutxa, la porta i la rajola. El que ja no fem és ficar la rajola feta a mà dins la partida general de revestiments.",
        "L'obra es va tramitar amb una comunicació d'obres presentada el desembre del 2024. La carpeta d'entrega va sortir el 18 de juliol del 2025."
      ],
      camps: [
        { et: "Tipus", val: "Reforma d'habitatge" },
        { et: "Any", val: "2025" },
        { et: "Superfície", val: "86 m²" },
        { et: "Espais", val: "Bany de 3,2 m², cuina oberta, 2 dormitoris" }
      ],
      etiquetes: ["bany petit", "dutxa a ras", "rajola", "porta corredissa"],
      estat: "vigent",
      origen: { doc: "Plànol de detall de la dutxa D-07 i índex de la carpeta d'entrega", lloc: "Servidor, Projectes, 2025 Gràcia" },
      autor: "Núria Demo, interiorisme", data: "2025-07-18", rev: "B",
      relacionats: ["dis-007", "dis-011", "obr-005", "obr-002", "cli-006", "leg-006"] },

    { id: "prj-005", codi: "PRJ-005", area: "projectes", tipus: "projecte",
      titol: "Habitatge a Pedralbes",
      resum: "Reforma completa de 210 m² del 2025, amb marbre als banys, llicència de 7 mesos i mobiliari que va arribar tard.",
      cos: [
        "El bany principal és de marbre blanc de veta grisa, amb el lavabo tallat de la mateixa pedra, i tots els banys porten aixetes de llautó envellit. A la sala hi ha un sofà modular de tres mòduls i dues butaques giratòries de Mobles Mostra, amb el teixit triat pel client: lli rentat de color sorra al sofà i vellut verd oliva a les butaques.",
        "Va ser l'expedient més llarg que hem tingut: 7 mesos de llicència d'obres majors, per un requeriment de l'Ajuntament sobre el forjat que vam rebre l'octubre del 2024.",
        "El mobiliari va arribar en 14 setmanes, quan n'havien dit 10. El teixit es va endarrerir a fàbrica i ens ho van avisar tard. L'acta de recepció es va signar el 30 de maig del 2025.",
        "Repetiríem el bany sense canviar-hi res. Del mobiliari, tornaríem a demanar el termini per escrit i hi comptaríem quatre setmanes més si el teixit no és d'estoc."
      ],
      camps: [
        { et: "Tipus", val: "Reforma completa amb llicència d'obres majors" },
        { et: "Any", val: "2025" },
        { et: "Superfície", val: "210 m²" },
        { et: "Espais", val: "3 banys, vestidor, cuina tancada amb rebost, sala de 45 m²" }
      ],
      etiquetes: ["reforma completa", "marbre", "llicencia", "mobiliari"],
      estat: "vigent",
      origen: { doc: "Expedient de llicència, pressupost de mobiliari i acta de recepció", lloc: "Servidor, Projectes, 2025 Pedralbes" },
      autor: "Pau Exemple, projectes", data: "2025-05-30", rev: "B",
      relacionats: ["dis-003", "dis-009", "obr-001", "obr-003", "obr-006", "leg-009", "pro-007"] },

    { id: "prj-006", codi: "PRJ-006", area: "projectes", tipus: "projecte",
      titol: "Casa a la Cerdanya",
      resum: "Segona residència de 190 m² del 2023, amb parquet sobre terra radiant, llar de foc de pedra i banyera curta.",
      cos: [
        "Parquet de roure multicapa sobre terra radiant a totes les plantes. Tres hiverns després no s'ha mogut ni ens ha fet cap trucada.",
        "La llar de foc va folrada de pedra calcària apomassada. L'apomassat no ha agafat marques, i el polit sí que en té als taulells d'altres cases.",
        "Al bany de convidats, de 3,8 m², hi ha una banyera curta de 140 cm. Ho tenim apuntat per a quan un client demani banyera en poc espai.",
        "Repetiríem les tres coses. El que sí canviaríem és la planificació: a la muntanya els terminis de transport s'allarguen a l'hivern i ho comptem a part."
      ],
      camps: [
        { et: "Tipus", val: "Segona residència" },
        { et: "Any", val: "2023" },
        { et: "Superfície", val: "190 m²" },
        { et: "Espais", val: "Sala amb llar de foc, 3 banys (el de convidats de 3,8 m²), 4 dormitoris" }
      ],
      etiquetes: ["segona residencia", "parquet", "terra radiant", "banyera"],
      estat: "vigent",
      origen: { doc: "Plànol de planta reformada P-05", lloc: "Servidor, Projectes, 2023 Cerdanya" },
      autor: "Pau Exemple, projectes", data: "2023-04-12", rev: "A",
      relacionats: ["dis-001", "dis-002", "dis-011", "obr-004", "obr-001"] },

    { id: "prj-007", codi: "PRJ-007", area: "projectes", tipus: "projecte",
      titol: "Pis al Born",
      resum: "Pis de 74 m² del 2025 amb el bany més petit que hem fet, de 2,9 m², pujat 2 cm perquè el forjat no deixava rebaixar.",
      cos: [
        "El forjat no tenia gruix per rebaixar, així que es va pujar tot el bany 2 cm i la dutxa a ras es va resoldre amb un llindar rebaixat a la porta. Mampara fixa de vidre, sense perfil a terra.",
        "Lavabo de 50 cm i inodor suspès per deixar pas lliure davant. Terra de porcellànic gris.",
        "A l'acta núm. 5, del 9 de juny del 2025, es va fer la prova d'estanquitat de la dutxa. Hi va haver una fuga petita al desguàs i es va repetir la prova (vegeu la lliçó d'obra).",
        "Repetiríem tot. Només ho canviem si el forjat té gruix: aleshores rebaixem en lloc de pujar."
      ],
      camps: [
        { et: "Tipus", val: "Reforma d'habitatge" },
        { et: "Any", val: "2025" },
        { et: "Superfície", val: "74 m²" },
        { et: "Espais", val: "Bany de 2,9 m², cuina en línia oberta a la sala, 1 dormitori" }
      ],
      etiquetes: ["bany petit", "dutxa a ras", "porcellanic", "forjat"],
      estat: "vigent",
      origen: { doc: "Plànol del bany D-03 i acta de visita núm. 5", lloc: "Servidor, Projectes, 2025 Born" },
      autor: "Núria Demo, interiorisme", data: "2025-06-09", rev: "B",
      relacionats: ["dis-004", "dis-011", "obr-002", "obr-011", "obr-005", "cli-007"] },

    { id: "prj-008", codi: "PRJ-008", area: "projectes", tipus: "projecte",
      titol: "Dúplex a Sant Gervasi",
      resum: "Dúplex de 165 m² del 2026, obra en curs, amb calcària a la cuina, porcellànic gran i mobles sense tirador.",
      cos: [
        "A la cuina, taulell de pedra calcària amb la pica encastada per sota, i mobles lacats sense tirador amb una gola d'alumini. A la planta de dia, porcellànic gris de gran format.",
        "El preu de la pedra és de l'oferta 26-118 de Pedres Mostra, del 14 de maig del 2026. Segons el criteri de l'estudi, el tornarem a demanar abans d'encarregar la pedra. El pressupost dels banys és de l'1 d'octubre.",
        "Els mobles sense tirador deixen marques de dits i ho hem dit al client per escrit. A Poblenou, pel mateix motiu, hem posat tiradors de llautó.",
        "El setembre, abans de tancar el fals sostre, vam trobar el conducte d'extracció de la cuina amb un colze de més. S'ha arreglat i queda explicat a les lliçons d'obra."
      ],
      camps: [
        { et: "Tipus", val: "Reforma de dúplex, obra en curs" },
        { et: "Any", val: "2026" },
        { et: "Superfície", val: "165 m²" },
        { et: "Espais", val: "Cuina oberta al menjador, 2 banys i un lavabo, terrassa" }
      ],
      etiquetes: ["duplex", "calcaria", "porcellanic", "obra en curs"],
      estat: "vigent",
      origen: { doc: "Pressupost de Pedres Mostra, oferta 26-118, i pressupost de banys", lloc: "Servidor, Projectes, 2026 Sant Gervasi" },
      autor: "Jordi Mostra, obra", data: "2026-10-01", rev: "A",
      relacionats: ["dis-002", "dis-004", "dis-008", "obr-001", "obr-005", "obr-004", "obr-002", "obr-012"] },

    { id: "prj-009", codi: "PRJ-009", area: "projectes", tipus: "projecte",
      titol: "Pis a Poblenou",
      resum: "Pis de 98 m² del 2026, obra en curs, amb terratzo 60x60, cuina lacada amb tiradors de llautó i un estudi tancat amb vidre.",
      cos: [
        "Terratzo en peça de 60x60 a la zona de dia, cuina inclosa. Mobles de cuina lacats en blanc trencat, amb tiradors de llautó.",
        "Els tiradors hi són perquè a Sant Gervasi sabem que sense tirador es veuen els dits. El client ja ha estat avisat també del desgast del terratzo a les zones de pas.",
        "L'estudi es tanca amb una fusteria de vidre per no perdre llum. Fusteria Exemple ha de lliurar el plànol de taller abans de fabricar, com sempre."
      ],
      camps: [
        { et: "Tipus", val: "Reforma d'habitatge, obra en curs" },
        { et: "Any", val: "2026" },
        { et: "Superfície", val: "98 m²" },
        { et: "Espais", val: "Cuina oberta a la sala, 2 banys, estudi" }
      ],
      etiquetes: ["terratzo", "cuina", "fusteria de vidre", "obra en curs"],
      estat: "vigent",
      origen: { doc: "Memòria d'acabats", lloc: "Servidor, Projectes, 2026 Poblenou" },
      autor: "Núria Demo, interiorisme", data: "2026-09-14", rev: "A",
      relacionats: ["dis-006", "dis-008", "obr-004", "obr-005", "cli-008"] },

    /* ================= DISSENY I ACABATS ================= */

    { id: "dis-001", codi: "DIS-001", area: "disseny", tipus: "acabat",
      titol: "Parquet de roure en espiga",
      resum: "Dona calidesa i aguanta el pas, però a la cuina oberta va envernissat i no a l'oli.",
      cos: [
        "Per a terres de sala, dormitoris i cuina oberta. Dona calidesa i aguanta bé el pas. Sobre terra radiant, en multicapa, no s'ha mogut (Cerdanya).",
        "Acabat a l'oli davant la pica va agafar taques d'aigua en menys d'un any, a l'Eixample. A la cuina ara el posem envernissat i ho diem al client des de la primera proposta."
      ],
      camps: [
        { et: "Proveïdor", val: "Fusteria Exemple S.L." },
        { et: "Preu de referència", val: "98 €/m² col·locat, del 18/06/2026" },
        { et: "Projectes", val: "Pis a l'Eixample, Casa a la Cerdanya" }
      ],
      color: "#b48a5e",
      etiquetes: ["parquet", "roure", "espiga", "cuina oberta"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat i acta de la visita de garantia", lloc: "Servidor, Estudi, Acabats, Parquet" },
      autor: "Núria Demo, interiorisme", data: "2024-12-03", rev: "B",
      relacionats: ["prj-001", "prj-006", "obr-004", "dec-011"] },

    { id: "dis-002", codi: "DIS-002", area: "disseny", tipus: "acabat",
      titol: "Pedra calcària beige",
      resum: "Color que agrada a tothom i combina amb fusta clara, sempre amb tractament antitaques i acabat apomassat.",
      cos: [
        "La fem servir en taulells de cuina i en llars de foc. El color agrada a tothom i combina amb la fusta clara.",
        "Polida i sense tractar, al taulell li van quedar marques d'oli i de llimona. Ara la demanem amb tractament antitaques i acabat apomassat, i ho apuntem al pressupost."
      ],
      camps: [
        { et: "Proveïdor", val: "Pedres Mostra S.L." },
        { et: "Preu de referència", val: "340 €/m² en 2 cm, polit, del 14/05/2026" },
        { et: "Projectes", val: "Eixample, Cerdanya, Sant Gervasi" }
      ],
      color: "#ded3bd",
      etiquetes: ["calcaria", "pedra natural", "taulell", "llar de foc"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat", lloc: "Servidor, Estudi, Acabats, Pedra" },
      autor: "Núria Demo, interiorisme", data: "2024-11-22", rev: "B",
      relacionats: ["prj-001", "prj-006", "prj-008", "obr-001"] },

    { id: "dis-003", codi: "DIS-003", area: "disseny", tipus: "acabat",
      titol: "Marbre blanc de veta grisa",
      resum: "Per a parets i lavabos de banys principals; mai al terra de la dutxa.",
      cos: [
        "Al bany, amb poca aigua a sobre i ben segellat, es manté com el primer dia. L'hem posat a parets i a lavabos tallats de la mateixa pedra (Pedralbes, Sant Cugat).",
        "No el posaríem al terra de la dutxa: rellisca i s'hi marquen els productes de neteja."
      ],
      camps: [
        { et: "Proveïdor", val: "Pedres Mostra S.L." },
        { et: "Preu de referència", val: "520 €/m² en 2 cm, del 14/05/2026" },
        { et: "On va", val: "Parets i lavabos de banys principals" }
      ],
      color: "#f2f0ec",
      etiquetes: ["marbre", "banys", "lavabo", "pedra natural"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat", lloc: "Servidor, Estudi, Acabats, Pedra" },
      autor: "Núria Demo, interiorisme", data: "2025-05-30", rev: "A",
      relacionats: ["prj-005", "prj-003", "obr-001", "dis-011"] },

    { id: "dis-004", codi: "DIS-004", area: "disseny", tipus: "acabat",
      titol: "Porcellànic gris pedra 120x120",
      resum: "El paviment que menys trucades de postvenda ens ha donat; compte amb les escales estretes.",
      cos: [
        "Per a terres de planta de dia, terrasses i banys. Permet seguir el mateix terra de dins a fora i és el paviment que menys trucades de postvenda ens ha donat.",
        "El problema és pujar peces de 120 per una escala estreta: a Sarrià se'n van trencar un 8 %. Ara comptem un 10 % de sobrant i mirem el recorregut abans de comprar."
      ],
      camps: [
        { et: "Proveïdor", val: "Ceràmiques Mostra" },
        { et: "Preu de referència", val: "74 €/m² sense col·locar, del 10/10/2026" },
        { et: "Projectes", val: "Sarrià, Born, Sant Gervasi" }
      ],
      color: "#bdb9b2",
      etiquetes: ["porcellanic", "gran format", "terra", "terrassa"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat", lloc: "Servidor, Estudi, Acabats, Ceràmica" },
      autor: "Núria Demo, interiorisme", data: "2024-01-10", rev: "B",
      relacionats: ["prj-002", "prj-007", "prj-008", "obr-005"] },

    { id: "dis-005", codi: "DIS-005", area: "disseny", tipus: "acabat",
      titol: "Microciment",
      resum: "Només a parets fora de l'aigua i a mobles; dins la dutxa va fallar als 8 mesos.",
      cos: [
        "Només l'hem fet servir a l'Àtic a Sarrià, a la dutxa i a les parets del bany principal. A les parets fora de l'aigua i al moble del lavabo ha aguantat bé.",
        "Dins la dutxa van sortir taques de cal i una fissura a la trobada amb el desguàs als 8 mesos. No el tornarem a posar dins d'una dutxa."
      ],
      camps: [
        { et: "Aplicador", val: "Revestiments Exemple" },
        { et: "Preu de referència", val: "95 €/m² aplicat i segellat, del 20/11/2023" },
        { et: "Decisió", val: "DEC-001" }
      ],
      color: "#b3aea6",
      etiquetes: ["microciment", "banys", "dutxa", "parets"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat i correu amb l'aplicador", lloc: "Servidor, Estudi, Acabats, Revestiments" },
      autor: "Núria Demo, interiorisme", data: "2025-03-21", rev: "C",
      relacionats: ["prj-002", "dec-001", "obr-007"] },

    { id: "dis-006", codi: "DIS-006", area: "disseny", tipus: "acabat",
      titol: "Terratzo de gra mitjà",
      resum: "No es veuen les taques i va molt bé a la cuina, però perd brillantor a les zones de pas.",
      cos: [
        "Per a planta baixa i cuina oberta. No se li veuen les taques i a la cuina va molt bé.",
        "A les zones de pas perd la brillantor. A Sant Cugat es va tornar a abrillantar als 18 mesos. Cal dir-ho al client abans de triar, no després."
      ],
      camps: [
        { et: "Proveïdor", val: "Ceràmiques Mostra" },
        { et: "Preu de referència", val: "89 €/m² en peça de 60x60, sense col·locar, del 10/10/2026" },
        { et: "Projectes", val: "Sant Cugat, Poblenou" }
      ],
      color: "#e7e1d6",
      etiquetes: ["terratzo", "terra", "cuina", "abrillantat"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat i correu amb el client", lloc: "Servidor, Estudi, Acabats, Ceràmica" },
      autor: "Núria Demo, interiorisme", data: "2026-04-03", rev: "B",
      relacionats: ["prj-003", "prj-009", "obr-005"] },

    { id: "dis-007", codi: "DIS-007", area: "disseny", tipus: "acabat",
      titol: "Rajola feta a mà verda, 6,5x20",
      resum: "El que més es veu a les fotos del bany, però el col·locador triga el doble i es pressuposta a part.",
      cos: [
        "Per a parets de bany. El client n'està molt content i a les fotos del bany és el que més es veu.",
        "Cada peça té un gruix diferent i el col·locador va trigar el doble del previst. Ara ho pressupostem a part i demanem tres peces de mostra per veure el to i el gruix."
      ],
      camps: [
        { et: "Proveïdor", val: "Ceràmiques Mostra" },
        { et: "Preu de referència", val: "118 €/m² sense col·locar, del 10/10/2026" },
        { et: "Termini", val: "5 setmanes, no 2" }
      ],
      color: "#4f6b55",
      etiquetes: ["rajola", "feta a ma", "banys", "verd"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat", lloc: "Servidor, Estudi, Acabats, Ceràmica" },
      autor: "Núria Demo, interiorisme", data: "2025-07-18", rev: "A",
      relacionats: ["prj-004", "obr-005", "pro-011"] },

    { id: "dis-008", codi: "DIS-008", area: "disseny", tipus: "acabat",
      titol: "Lacat mat blanc trencat",
      resum: "Amb el mat no es veuen les ratlles fines, però sense tirador queden marques de dits.",
      cos: [
        "Per a portes de cuina i armaris a mida. Amb el mat no es veuen les ratlles fines.",
        "A les portes sense tirador queden marques de dits. Quan el client cuina molt, millor amb tirador: a Poblenou hi hem posat tiradors de llautó i a Sant Gervasi ho hem avisat per escrit."
      ],
      camps: [
        { et: "Proveïdor", val: "Fusteria Exemple S.L." },
        { et: "Preu de referència", val: "1.180 €/ml mòdul baix i 860 €/ml mòdul alt, del 18/06/2026" },
        { et: "Projectes", val: "Sant Cugat, Sant Gervasi, Poblenou" }
      ],
      color: "#efebe3",
      etiquetes: ["lacat", "cuina", "fusteria", "tirador"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat", lloc: "Servidor, Estudi, Acabats, Fusteria" },
      autor: "Núria Demo, interiorisme", data: "2026-06-18", rev: "B",
      relacionats: ["prj-003", "prj-008", "prj-009", "obr-004"] },

    { id: "dis-009", codi: "DIS-009", area: "disseny", tipus: "acabat",
      titol: "Aixetes de llautó envellit",
      resum: "Envelleixen bé i no es nota la cal, però els productes antical se les mengen.",
      cos: [
        "Per a lavabos i dutxes. Envelleix amb el temps i no es nota la cal.",
        "Els productes antical se'l mengen. S'ha de dir al client i deixar-ho escrit a la carpeta d'entrega. Es fa sota comanda, així que comptem 6 setmanes."
      ],
      camps: [
        { et: "Proveïdor", val: "Aixetes Exemple" },
        { et: "Preu de referència", val: "480 € el monocomandament de lavabo, del 12/12/2024" },
        { et: "Projectes", val: "Pedralbes" }
      ],
      color: "#a8854a",
      etiquetes: ["llauto", "aixetes", "banys", "antical"],
      estat: "vigent",
      origen: { doc: "Fitxa de l'acabat i correu amb el proveïdor", lloc: "Servidor, Estudi, Acabats, Aixeteria" },
      autor: "Núria Demo, interiorisme", data: "2024-12-12", rev: "A",
      relacionats: ["prj-005", "obr-006"] },

    { id: "dis-010", codi: "DIS-010", area: "disseny", tipus: "criteri",
      titol: "Endolls, llums i alçades",
      resum: "Les alçades que fem servir sempre a endolls, interruptors i cuina, i com plantegem la llum.",
      cos: [
        "Endolls de capçalera a 70 cm del terra acabat. Interruptors a 105 cm. Endolls generals a 30 cm i a la cuina a 110 cm, a 20 cm com a mínim de la pica i dels fogons. Abans de fer regates, preguntem l'alçada de les tauletes: a Sarrià el client en tenia de baixes i els de capçalera van quedar a 55 cm.",
        "Altres mides que no canviem: taulell de cuina a 92 cm, lavabo a 85 cm i mirall del bany a 110 cm des del terra.",
        "Llum càlida de 2700 K a sala i dormitoris, una mica més neutra, de 3000 K, a cuina i bany. Tot el que es pugui, regulable. Als banys, dos circuits: un per al sostre i un per al mirall. Els punts de llum es marquen a l'obra amb el client abans de picar."
      ],
      camps: [
        { et: "Revisió dels criteris", val: "Instal·lacions, revisió 3, del 8 de gener del 2026" },
        { et: "Qui ho pregunta al client", val: "Núria Demo, abans de les regates" }
      ],
      etiquetes: ["endolls", "alcades", "llum", "mecanismes"],
      estat: "vigent",
      origen: { doc: "Criteris de l'estudi, instal·lacions, revisió 3", lloc: "Servidor, Estudi, Criteris" },
      autor: "Núria Demo, interiorisme", data: "2026-01-08", rev: "C",
      relacionats: ["prj-002", "prj-004", "obr-012", "pro-004"] },

    { id: "dis-011", codi: "DIS-011", area: "disseny", tipus: "criteri",
      titol: "Dutxa d'obra i bany petit",
      resum: "Dutxa a ras amb pendent del 2 % i desguàs lineal, i com guanyem espai a banys de menys de 4 m².",
      cos: [
        "Si el forjat ho permet, dutxa a ras sense plat, amb un 2 % de pendent cap a un desguàs lineal de 80 cm tocant a la paret del fons. Mampara fixa de vidre de 8 mm, sense perfil a terra. Si el forjat no té gruix per rebaixar, es puja el bany, com es va fer al Born (2 cm) amb un llindar rebaixat.",
        "En un bany petit guanyem espai amb una porta corredissa encastada, un lavabo de 50 cm i un inodor suspès per deixar pas lliure. Si el client demana banyera en poc espai, n'hi ha de curtes, de 140 cm (Cerdanya).",
        "Abans de posar rajola a una dutxa, prova d'estanquitat. Al terra de la dutxa, porcellànic o pedra: ni marbre ni microciment."
      ],
      camps: [
        { et: "Pendent", val: "2 % cap al desguàs" },
        { et: "Desguàs", val: "Lineal de 80 cm, tocant a paret" },
        { et: "Exemples", val: "Gràcia (3,2 m²), Born (2,9 m²), Eixample (3,6 m²)" }
      ],
      etiquetes: ["dutxa", "bany petit", "desguas", "mampara"],
      estat: "vigent",
      origen: { doc: "Criteris de l'estudi, banys i plànols D-07 i D-03", lloc: "Servidor, Estudi, Criteris" },
      autor: "Núria Demo, interiorisme", data: "2026-01-08", rev: "C",
      relacionats: ["prj-004", "prj-007", "prj-006", "obr-011", "dec-001"] },

    /* ================= OBRA I INDUSTRIALS ================= */

    { id: "obr-001", codi: "OBR-001", area: "obra", tipus: "proveidor",
      titol: "Pedres Mostra S.L.",
      resum: "Proveïdor de pedra natural per a taulells, llars de foc i marbre de banys; sempre triguen una setmana més del que diuen.",
      cos: [
        "Hi treballem des del Pis a l'Eixample, el 2023: calcària per a taulells i llars de foc, marbre per als banys. Fan la presa de plantilla a l'obra, així que els mobles baixos ja han d'estar col·locats.",
        "El termini és la queixa de sempre. Diuen 3 setmanes des de la plantilla i en triguen 4. Als calendaris ho comptem així.",
        "L'últim preu és l'oferta 26-118, del 14 de maig del 2026, per al Dúplex a Sant Gervasi. Passats sis mesos des de la data, es torna a demanar abans de donar-lo a cap client."
      ],
      camps: [
        { et: "Què fan", val: "Pedra natural: taulells, llars de foc i marbre per a banys" },
        { et: "Termini", val: "Diuen 3 setmanes des de la plantilla. Triguen 4" },
        { et: "Contacte a l'estudi", val: "Núria Demo" }
      ],
      preus: [
        { concepte: "Taulell de calcària de 2 cm, polit", preu: "340 €/m²", data: "2026-05-14" },
        { concepte: "Cantell recte", preu: "45 €/ml", data: "2026-05-14" },
        { concepte: "Forat per a pica encastada", preu: "180 € per forat", data: "2026-05-14" },
        { concepte: "Marbre blanc de veta grisa, 2 cm", preu: "520 €/m²", data: "2026-05-14" }
      ],
      etiquetes: ["pedra", "marbre", "calcaria", "taulell"],
      estat: "vigent",
      origen: { doc: "Pressupost de Pedres Mostra, oferta 26-118, i correu del proveïdor", lloc: "Servidor, Proveïdors, Pedres Mostra" },
      autor: "Núria Demo, interiorisme", data: "2026-05-14", rev: "B",
      relacionats: ["dis-002", "dis-003", "prj-008", "dec-004"] },

    { id: "obr-002", codi: "OBR-002", area: "obra", tipus: "proveidor",
      titol: "Sanitaris Exemple",
      resum: "Inodors, lavabos, cisternes encastades i plats; tarifa amb descompte d'estudi i termini que compleixen.",
      cos: [
        "És el proveïdor de sanitaris de Gràcia, Born i Sant Gervasi. La tarifa que tenim ja porta el 30 % de descompte que ens fan com a estudi, així que els preus d'aquí són els que veu el client.",
        "Diuen 2 setmanes i les compleixen. Quan lliuren a l'obra, revisem les caixes davant del transportista, perquè un lavabo de ceràmica trencat és de qui no ho ha dit a temps."
      ],
      camps: [
        { et: "Què fan", val: "Inodors, lavabos, cisternes encastades i plats de dutxa" },
        { et: "Termini", val: "Diuen 2 setmanes. Compleixen" },
        { et: "Descompte", val: "30 % d'estudi, ja aplicat" }
      ],
      preus: [
        { concepte: "Inodor suspès sense brida, amb seient de tancament suau", preu: "690 €", data: "2026-09-22" },
        { concepte: "Cisterna encastada amb placa", preu: "410 €", data: "2026-09-22" },
        { concepte: "Lavabo de sobre taulell de 60 cm, ceràmica mat", preu: "520 €", data: "2026-09-22" }
      ],
      etiquetes: ["sanitaris", "inodor", "lavabo", "cisterna"],
      estat: "vigent",
      origen: { doc: "Tarifa amb descompte d'estudi", lloc: "Servidor, Proveïdors, Sanitaris Exemple" },
      autor: "Oriol Prova, obra", data: "2026-09-22", rev: "A",
      relacionats: ["prj-004", "prj-007", "prj-008", "dis-011"] },

    { id: "obr-003", codi: "OBR-003", area: "obra", tipus: "proveidor",
      titol: "Mobles Mostra",
      resum: "Sofàs, butaques i mobiliari de sala amb teixit a triar; el termini real és de 14 setmanes si el teixit no és d'estoc.",
      cos: [
        "Ens van fer el sofà modular i les dues butaques de l'Habitatge a Pedralbes. El pressupost va ser del 3 de febrer del 2025.",
        "Van dir 10 setmanes i van trigar 14, per un retard del teixit a fàbrica que ens van avisar tard, el 28 de març. Amb ells, si el teixit no és d'estoc, comptem 14 setmanes i truquem cada dues setmanes per saber com va."
      ],
      camps: [
        { et: "Què fan", val: "Sofàs, butaques i mobiliari de sala, amb teixit a triar" },
        { et: "Termini", val: "Diuen 10 setmanes. Van trigar 14" },
        { et: "Projectes", val: "Pedralbes" }
      ],
      preus: [
        { concepte: "Sofà modular de 3 mòduls, 310 cm (IVA a part)", preu: "7.850 €", data: "2025-02-03" },
        { concepte: "Butaca giratòria (IVA a part)", preu: "2.150 €", data: "2025-02-03" }
      ],
      etiquetes: ["mobiliari", "sofa", "butaques", "terminis"],
      estat: "vigent",
      origen: { doc: "Pressupost de mobiliari i correu d'avís de retard", lloc: "Servidor, Proveïdors, Mobles Mostra" },
      autor: "Núria Demo, interiorisme", data: "2025-03-28", rev: "A",
      relacionats: ["prj-005", "pro-006"] },

    { id: "obr-004", codi: "OBR-004", area: "obra", tipus: "proveidor",
      titol: "Fusteria Exemple S.L.",
      resum: "Cuines i armaris a mida, parquet i portes; 8 setmanes dites des del plànol de taller aprovat, 9 reals.",
      cos: [
        "Fan les cuines, els armaris i els parquets de gairebé tots els nostres projectes. Compten les 8 setmanes des del dia que el plànol de taller està aprovat per escrit, i ni un dia abans.",
        "L'última vegada van trigar 9 setmanes, una de més. Ho apuntem als calendaris com a 9.",
        "El preu del parquet és col·locat, el de la cuina és per metre lineal de mòdul."
      ],
      camps: [
        { et: "Què fan", val: "Cuines i armaris a mida, parquet i portes" },
        { et: "Termini", val: "Diuen 8 setmanes des del plànol de taller aprovat. Van trigar 9" },
        { et: "Contacte a l'estudi", val: "Oriol Prova" }
      ],
      preus: [
        { concepte: "Cuina lacada mat a mida, mòdul baix", preu: "1.180 €/ml", data: "2026-06-18" },
        { concepte: "Cuina lacada mat a mida, mòdul alt", preu: "860 €/ml", data: "2026-06-18" },
        { concepte: "Parquet de roure en espiga col·locat", preu: "98 €/m²", data: "2026-06-18" }
      ],
      etiquetes: ["fusteria", "cuina", "parquet", "planol de taller"],
      estat: "vigent",
      origen: { doc: "Pressupost de Fusteria Exemple", lloc: "Servidor, Proveïdors, Fusteria Exemple" },
      autor: "Oriol Prova, obra", data: "2026-06-18", rev: "B",
      relacionats: ["dis-001", "dis-008", "obr-012", "prj-009"] },

    { id: "obr-005", codi: "OBR-005", area: "obra", tipus: "proveidor",
      titol: "Ceràmiques Mostra",
      resum: "Porcellànic, terratzo en peça i rajola feta a mà; la rajola a mà tarda tres setmanes més que la resta.",
      cos: [
        "Ens serveixen el porcellànic de 120x120, el terratzo de 60x60 i la rajola feta a mà. Tots els preus són sense col·locar.",
        "Diuen 2 setmanes, i les compleixen amb el porcellànic i el terratzo. La rajola feta a mà en va trigar 5, i demanem sempre tres peces de mostra abans de l'encàrrec."
      ],
      camps: [
        { et: "Què fan", val: "Porcellànic, terratzo en peça i rajola feta a mà" },
        { et: "Termini", val: "Diuen 2 setmanes. La rajola feta a mà en va trigar 5" },
        { et: "Projectes", val: "Sarrià, Gràcia, Born, Sant Gervasi, Poblenou" }
      ],
      preus: [
        { concepte: "Porcellànic 120x120 (sense col·locar)", preu: "74 €/m²", data: "2026-10-10" },
        { concepte: "Terratzo 60x60 (sense col·locar)", preu: "89 €/m²", data: "2026-10-10" },
        { concepte: "Rajola feta a mà (sense col·locar)", preu: "118 €/m²", data: "2026-10-10" }
      ],
      etiquetes: ["ceramica", "porcellanic", "terratzo", "rajola"],
      estat: "vigent",
      origen: { doc: "Tarifa de Ceràmiques Mostra", lloc: "Servidor, Proveïdors, Ceràmiques Mostra" },
      autor: "Núria Demo, interiorisme", data: "2026-10-10", rev: "A",
      relacionats: ["dis-004", "dis-006", "dis-007", "prj-002"] },

    { id: "obr-006", codi: "OBR-006", area: "obra", tipus: "proveidor",
      titol: "Aixetes Exemple",
      resum: "Aixeteria de bany i cuina, també en llautó; el llautó envellit es fa sota comanda i triga 6 setmanes.",
      cos: [
        "Les aixetes de llautó envellit de Pedralbes són seves. Van dir 4 setmanes i van trigar 6, perquè el llautó envellit es fa sota comanda.",
        "El preu que tenim és del 12 de desembre del 2024. Abans de passar-lo a un client el tornarem a demanar."
      ],
      camps: [
        { et: "Què fan", val: "Aixeteria de bany i cuina, també en llautó" },
        { et: "Termini", val: "Diuen 4 setmanes. Van trigar 6" },
        { et: "Projectes", val: "Pedralbes" }
      ],
      preus: [
        { concepte: "Monocomandament de lavabo en llautó envellit", preu: "480 €", data: "2024-12-12" },
        { concepte: "Equip de dutxa encastat", preu: "1.240 €", data: "2024-12-12" }
      ],
      etiquetes: ["aixetes", "llauto", "banys", "comanda"],
      estat: "vigent",
      origen: { doc: "Correu amb el proveïdor", lloc: "Servidor, Proveïdors, Aixetes Exemple" },
      autor: "Núria Demo, interiorisme", data: "2024-12-12", rev: "A",
      relacionats: ["dis-009", "prj-005", "dec-004"] },

    { id: "obr-007", codi: "OBR-007", area: "obra", tipus: "proveidor",
      titol: "Revestiments Exemple",
      resum: "Aplicadors de microciment; preu de fa tres anys i amb una reparació en garantia a l'Àtic a Sarrià.",
      cos: [
        "Només els hem fet servir a l'Àtic a Sarrià. Van dir 1 setmana i van complir.",
        "Quan van sortir les taques i la fissura a la dutxa, van venir a reparar-ho en garantia, però el client ha de tornar a segellar cada any. Per això hi ha la decisió de no fer microciment dins la dutxa."
      ],
      camps: [
        { et: "Què fan", val: "Aplicació de microciment" },
        { et: "Termini", val: "Van dir 1 setmana. Van complir" },
        { et: "Decisió relacionada", val: "DEC-001" }
      ],
      preus: [
        { concepte: "Microciment en parets de bany, aplicat i segellat", preu: "95 €/m²", data: "2023-11-20" }
      ],
      etiquetes: ["microciment", "aplicador", "garantia", "banys"],
      estat: "vigent",
      origen: { doc: "Correu amb l'aplicador", lloc: "Servidor, Proveïdors, Revestiments Exemple" },
      autor: "Núria Demo, interiorisme", data: "2025-03-21", rev: "A",
      relacionats: ["dis-005", "dec-001", "prj-002"] },

    { id: "obr-008", codi: "OBR-008", area: "obra", tipus: "industrial",
      titol: "Constructora Prova S.L.",
      resum: "La constructora de les obres grans des del 2023: estructura, enderrocs i coordinació, però amb l'agenda plena fins al març.",
      cos: [
        "Han fet l'Eixample, Sant Cugat, Pedralbes, la Cerdanya i ara Sant Gervasi. Treballem amb ells des del 2023. Porten bé l'estructura, els enderrocs i la coordinació de la resta d'industrials.",
        "Compleixen els terminis quan el client no canvia res. Amb els canvis necessiten l'annex signat abans de moure una paret. Accepten la reunió setmanal del dimarts i la retenció del 5 %.",
        "L'agenda és el problema: ara mateix no poden començar res abans del març del 2027. Per això la decisió sobre constructores està en revisió."
      ],
      camps: [
        { et: "Especialitat", val: "Obra general en habitatges i cases" },
        { et: "Treballa amb nosaltres des de", val: "2023" },
        { et: "Termini habitual", val: "5 a 6 mesos per a una obra de 150 a 200 m²" },
        { et: "Interlocutors", val: "Ferran Prova (constructora) i Jordi Mostra (estudi)" }
      ],
      etiquetes: ["constructora", "obra gran", "terminis", "retencio"],
      estat: "vigent",
      origen: { doc: "Fitxa de industrials i actes de reunió d'obra", lloc: "Servidor, Estudi, Industrials" },
      autor: "Jordi Mostra, obra", data: "2026-10-20", rev: "B",
      relacionats: ["dec-007", "leg-003", "leg-002", "prj-005", "prj-003"] },

    { id: "obr-009", codi: "OBR-009", area: "obra", tipus: "industrial",
      titol: "Reformes Mostra S.C.P.",
      resum: "Quatre persones que fan els pisos petits: ràpids als banys, però no per a obres de més de 120 m².",
      cos: [
        "Són quatre. Han fet l'Àtic a Sarrià, el Pis a Gràcia, el Pis al Born i ara el Pis a Poblenou. Un bany de 3 m² el tenen enllestit en tres setmanes.",
        "No tenen mans per a una obra de més de 120 m² ni per a estructura. Quan els passem una cosa gran, ho diuen de seguida i ho agraïm.",
        "La retenció del 5 % l'accepten sense discutir i les actes de les reunions setmanals les contesten el mateix dia."
      ],
      camps: [
        { et: "Especialitat", val: "Reformes de pisos fins a uns 110 m²" },
        { et: "Treballa amb nosaltres des de", val: "2024" },
        { et: "Termini d'un bany", val: "3 setmanes per a un bany de 3 m²" }
      ],
      preus: [
        { concepte: "Col·locació de porcellànic de 120x120", preu: "46 €/m²", data: "2026-03-12" },
        { concepte: "Col·locació de rajola feta a mà", preu: "74 €/m²", data: "2026-03-12" }
      ],
      etiquetes: ["reformes", "pisos", "banys", "retencio"],
      estat: "vigent",
      origen: { doc: "Fitxa de industrials i pressupost de col·locació", lloc: "Servidor, Estudi, Industrials" },
      autor: "Jordi Mostra, obra", data: "2026-03-12", rev: "A",
      relacionats: ["dec-007", "prj-004", "prj-007", "prj-009", "dis-007"] },

    { id: "obr-010", codi: "OBR-010", area: "obra", tipus: "industrial",
      titol: "Instal·lacions Demo S.L.",
      resum: "Electricitat, fontaneria i extracció: deixen fotos de cada recorregut abans de tancar i entreguen el butlletí.",
      cos: [
        "Fan les instal·lacions de tots els projectes, tant amb Constructora Prova com amb Reformes Mostra. Quan els demanem fotos abans de tapar, les porten sense que els ho recordem.",
        "Presenten el butlletí elèctric al final de l'obra i ens el donen per a la carpeta d'entrega. Si hi ha un canvi d'endolls, volen el plànol E actualitzat abans de picar.",
        "La prova de pressió de la fontaneria la fan ells; la d'estanquitat de la dutxa és del col·locador."
      ],
      camps: [
        { et: "Especialitat", val: "Electricitat, fontaneria i extracció" },
        { et: "Treballa amb nosaltres des de", val: "2023" },
        { et: "Interlocutor", val: "Marc Demo (instal·lacions) i Oriol Prova (estudi)" }
      ],
      preus: [
        { concepte: "Punt de llum o endoll nou", preu: "42 €/punt", data: "2026-04-20" },
        { concepte: "Muntatge de cisterna encastada", preu: "150 €", data: "2026-04-20" }
      ],
      etiquetes: ["instalacions", "electricitat", "fontaneria", "butlleti"],
      estat: "vigent",
      origen: { doc: "Pressupost d'instal·lacions", lloc: "Servidor, Estudi, Industrials" },
      autor: "Oriol Prova, obra", data: "2026-04-20", rev: "A",
      relacionats: ["obr-012", "dis-010", "pro-007"] },

    { id: "obr-011", codi: "OBR-011", area: "obra", tipus: "llico",
      titol: "Prova d'estanquitat de la dutxa",
      resum: "Prova d'aigua de 24 hores abans de posar rajola; al Born va fallar a les 10 hores.",
      cos: [
        "Abans de posar rajola a una dutxa, prova d'aigua de 24 hores amb foto a l'acta de visita. El nivell es marca a la paret amb retolador i la prova la dona per bona en Jordi o l'Oriol, no la constructora.",
        "Al Pis al Born, a l'acta núm. 5 del 9 de juny del 2025, el nivell havia baixat gairebé un centímetre a les 10 hores. La fuga era a la unió entre el desguàs lineal i la làmina. Es va refer la unió i es va repetir la prova sencera.",
        "Si ho haguéssim trobat amb la rajola posada, hauríem hagut de picar el terra d'un bany de 2,9 m². Ara la prova no es negocia, ni quan algú diu que ja la va fer."
      ],
      camps: [
        { et: "Durada", val: "24 hores" },
        { et: "Què es fa constar", val: "Foto del nivell inicial i final a l'acta" },
        { et: "Qui la dona per bona", val: "Jordi Mostra o Oriol Prova" }
      ],
      etiquetes: ["dutxa", "estanquitat", "acta", "fuites"],
      estat: "vigent",
      origen: { doc: "Acta de visita núm. 5, Pis al Born", lloc: "Servidor, Projectes, 2025 Born" },
      autor: "Jordi Mostra, obra", data: "2025-06-09", rev: "B",
      relacionats: ["prj-007", "dis-011", "pro-004", "obr-009"] },

    { id: "obr-012", codi: "OBR-012", area: "obra", tipus: "llico",
      titol: "Abans de tapar i abans de fabricar",
      resum: "Fotos amb cinta de cada recorregut abans de tancar i cap moble a mida sense plànol de taller aprovat.",
      cos: [
        "Abans de tancar un fals sostre, un envà o una regata, anem a l'obra amb el metre i fem fotos de cada recorregut amb una cinta de mesurar al costat: tubs, caixes de registre, conductes i cables. Les fotos van a l'acta i després serveixen per als plànols tal com s'ha construït.",
        "Mirem tres coses: que tot el que s'ha de poder obrir tingui registre accessible, que els recorreguts coincideixin amb els plànols d'instal·lacions i que els tubs i els cables estiguin retolats.",
        "El 17 de setembre del 2026, a Sant Gervasi, el conducte d'extracció de la cuina portava un colze de més i perdia secció. Es va refer el recorregut perquè passés recte per sobre de la biga i el fals sostre es va tancar tres dies després.",
        "Amb els mobles a mida passa igual: cap moble a mida es fabrica sense el plànol de taller aprovat per escrit. Les 8 setmanes de Fusteria Exemple compten des d'aquell dia."
      ],
      camps: [
        { et: "Quan", val: "Abans de tancar sostres, envans i regates" },
        { et: "Qui ho comprova", val: "Jordi Mostra o Oriol Prova" },
        { et: "Incidència", val: "Sant Gervasi, 17/09/2026, conducte d'extracció" }
      ],
      etiquetes: ["instalacions", "fotos", "planol de taller", "fals sostre"],
      estat: "vigent",
      origen: { doc: "Acta de visita de Sant Gervasi i criteri del plànol de taller", lloc: "Servidor, Projectes, 2026 Sant Gervasi" },
      autor: "Jordi Mostra, obra", data: "2026-09-17", rev: "A",
      relacionats: ["prj-008", "obr-004", "obr-010", "dis-010"] },

    /* ================= DECISIONS ================= */

    { id: "dec-001", codi: "DEC-001", area: "decisions", tipus: "decisio",
      titol: "No fem microciment dins la dutxa",
      resum: "Després de les taques i la fissura de l'Àtic a Sarrià, el microciment només va fora de l'aigua.",
      cos: [
        "Al bany principal de l'Àtic a Sarrià vam posar microciment dins la dutxa. Als 8 mesos hi havia taques de cal que no marxaven i una fissura fina a la trobada amb el desguàs. L'aplicador ho va reparar en garantia, però el client ha de tornar a segellar cada any.",
        "Vam decidir no fer microciment dins una dutxa, en cap projecte. A les parets fora de l'aigua i als mobles, sí. Dins la dutxa fem porcellànic o pedra.",
        "El motiu és el manteniment. El que va fallar no va ser l'aplicació: va ser demanar al client que repetís cada any una feina que ningú espera d'un bany."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple i Núria Demo" },
        { et: "Data de la decisió", val: "28 de març del 2025, set dies després del correu de l'aplicador" },
        { et: "Alternatives descartades", val: "Segellat doble a l'entrega i microciment amb epoxi dins la dutxa. Es van descartar sense provar-les en obra" },
        { et: "Es revisa", val: "Cada gener, amb els criteris. Només es reobre si un aplicador ens ensenya una dutxa de tres anys sense problemes" }
      ],
      etiquetes: ["microciment", "dutxa", "banys", "manteniment"],
      estat: "vigent",
      origen: { doc: "Correu amb l'aplicador i acta de la visita de garantia", lloc: "Servidor, Estudi, Actes, 2025" },
      autor: "Clara Exemple, direcció", data: "2025-03-28", rev: "B",
      relacionats: ["prj-002", "dis-005", "obr-007", "dis-011"] },

    { id: "dec-002", codi: "DEC-002", area: "decisions", tipus: "decisio",
      titol: "No comencem cap encàrrec sense contracte signat",
      resum: "Des del juny del 2023 res no arrenca sense contracte, ni el primer plànol.",
      cos: [
        "Al maig del 2023 vam fer tres setmanes d'estudi previ per a un client que va deixar de contestar abans de signar res. Teníem plànols fets, una visita feta i cap contracte.",
        "Des d'aleshores no comencem cap encàrrec sense contracte signat. La primera visita i la proposta d'honoraris no es cobren. Tot el que ve després, sí, i només comença amb la signatura i el primer pagament, del 15 %.",
        "Si el client té pressa, li diem que el contracte el tenim a punt en dos dies hàbils i que l'estudi previ comença el dia que el signa."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple" },
        { et: "Data de la decisió", val: "20 de juny del 2023" },
        { et: "Alternatives descartades", val: "Acceptar un correu del client com a confirmació i començar l'estudi previ per cortesia" },
        { et: "Es revisa", val: "No. Es manté tal com està" }
      ],
      etiquetes: ["contracte", "encarrec", "honoraris", "inici"],
      estat: "vigent",
      origen: { doc: "Acta de la reunió de direcció de juny", lloc: "Servidor, Estudi, Actes, 2023" },
      autor: "Clara Exemple, direcció", data: "2023-06-20", rev: "A",
      relacionats: ["leg-001", "cli-002", "pro-002"] },

    { id: "dec-003", codi: "DEC-003", area: "decisions", tipus: "decisio",
      titol: "Els canvis del client només valen per escrit i signats",
      resum: "Cap canvi s'executa ni es compra sense un annex signat pel client, amb cost i dies.",
      cos: [
        "A Sant Cugat, el setembre del 2024, el client va demanar de paraula, a l'obra, allargar l'illa de la cuina 40 cm. Fusteria Exemple ja tenia el plànol de taller aprovat i va haver de refer-lo. Es van perdre tres setmanes i després el client va dir que mai no havia acordat cap preu.",
        "Des d'aquell dia cap canvi s'executa ni es compra sense un annex signat pel client, que porta el cost i els dies que afecta. Un missatge de mòbil no val com a prova.",
        "Es va provar abans de deixar els canvis només a l'acta de visita, però l'acta no la signa el client."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple i Jordi Mostra" },
        { et: "Data de la decisió", val: "17 de setembre del 2024" },
        { et: "Alternatives descartades", val: "Acceptar missatges de mòbil com a prova i deixar els canvis a l'acta de visita" },
        { et: "Es revisa", val: "Quan es canviï el contracte tipus" }
      ],
      etiquetes: ["canvis", "annex", "sant cugat", "signatura"],
      estat: "vigent",
      origen: { doc: "Acta de visita de Sant Cugat i acta de direcció de setembre", lloc: "Servidor, Estudi, Actes, 2024" },
      autor: "Jordi Mostra, obra", data: "2024-09-17", rev: "B",
      relacionats: ["leg-004", "pro-005", "prj-003", "cli-005"] },

    { id: "dec-004", codi: "DEC-004", area: "decisions", tipus: "decisio",
      titol: "Un preu de proveïdor de més de sis mesos es torna a demanar",
      resum: "Tot preu es guarda amb la seva data i, passats sis mesos, no el donem a cap client sense tornar-lo a demanar.",
      cos: [
        "A l'Àtic a Sarrià vam passar al client un preu de porcellànic de feia nou mesos. Quan es va comprar, havia pujat un 7 % i la diferència la va assumir l'estudi.",
        "Des de llavors, tot preu de proveïdor es guarda amb la seva data. Si té més de sis mesos, es torna a demanar abans de passar-lo al client. A les fitxes de proveïdor, la data és sempre a la vista.",
        "Ho porta en Jordi a les obres i la Marta quan el preu surt als pressupostos de l'estudi."
      ],
      camps: [
        { et: "Decidit per", val: "Jordi Mostra i Marta Prova" },
        { et: "Data de la decisió", val: "15 de maig del 2024" },
        { et: "Alternatives descartades", val: "Renovar cada 12 mesos i afegir un 5 % de marge a tots els preus. Amb el marge el client veu números inflats" },
        { et: "Es revisa", val: "Cada gener, amb la llista de proveïdors" }
      ],
      etiquetes: ["preus", "proveidors", "pressupost", "dates"],
      estat: "vigent",
      origen: { doc: "Criteris de l'estudi, revisió 3", lloc: "Servidor, Estudi, Criteris" },
      autor: "Jordi Mostra, obra", data: "2024-05-15", rev: "B",
      relacionats: ["prj-002", "obr-001", "obr-006", "pro-003", "pro-006"] },

    { id: "dec-005", codi: "DEC-005", area: "decisions", tipus: "decisio",
      titol: "Reunió d'obra cada quinze dies",
      resum: "Va valer del 2023 al gener del 2025; la va substituir la reunió setmanal.",
      cos: [
        "Del 2023 al gener del 2025 fèiem la reunió d'obra cada quinze dies, el dimarts a les 9, amb la constructora i en Jordi. Entre reunions, el que sortia es resolia per telèfon.",
        "A Pedralbes, al desembre del 2024, es van acumular dues setmanes de decisions pendents, entre elles la rajola de l'office i el forat de la campana, i la comanda de la rajola va sortir tard. Aquesta decisió ja no val: la substitueix DEC-006."
      ],
      camps: [
        { et: "Decidit per", val: "Jordi Mostra" },
        { et: "Data de la decisió", val: "3 d'abril del 2023" },
        { et: "Alternatives descartades", val: "Reunió mensual, per massa espaiada" },
        { et: "Es revisa", val: "Substituïda el 14 de gener del 2025 per DEC-006" }
      ],
      etiquetes: ["reunions", "obra", "calendari", "pedralbes"],
      estat: "substituit", substituitPer: "dec-006",
      origen: { doc: "Acta de direcció d'abril", lloc: "Servidor, Estudi, Actes, 2023" },
      autor: "Jordi Mostra, obra", data: "2025-01-14", rev: "C",
      relacionats: ["dec-006", "prj-005"] },

    { id: "dec-006", codi: "DEC-006", area: "decisions", tipus: "decisio",
      titol: "Reunió d'obra cada setmana",
      resum: "Cada dimarts a les 9, a l'obra, 45 minuts i acta el mateix dia.",
      cos: [
        "La reunió d'obra és cada setmana, el dimarts a les 9, a l'obra. Dura 45 minuts i hi som en Jordi o l'Oriol i el cap d'obra de la constructora. El client no hi ha de ser, però hi pot venir si ens ho diu el dia abans.",
        "L'acta surt el mateix dia i porta les tasques per industrial amb data. És la resposta al que va passar a Pedralbes, quan dues setmanes de decisions pendents van endarrerir la rajola."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple i Jordi Mostra" },
        { et: "Data de la decisió", val: "14 de gener del 2025" },
        { et: "Alternatives descartades", val: "Setmanal només en fase d'estructura, perquè la rajola i la fusteria s'acumulen igual. Reunió per telèfon, perquè no es veu res" },
        { et: "Es revisa", val: "Cada gener, amb el balanç de l'any" }
      ],
      etiquetes: ["reunions", "obra", "acta", "dimarts"],
      estat: "vigent",
      origen: { doc: "Acta de direcció de gener", lloc: "Servidor, Estudi, Actes, 2025" },
      autor: "Clara Exemple, direcció", data: "2025-01-14", rev: "A",
      relacionats: ["dec-005", "pro-004", "obr-008"] },

    { id: "dec-007", codi: "DEC-007", area: "decisions", tipus: "decisio",
      titol: "Amb quines constructores treballem",
      resum: "Dues, una per a obra gran i una per a pisos petits, però la primera té l'agenda plena i ho estem revisant.",
      cos: [
        "Treballem amb dues constructores: Constructora Prova S.L. per a obres grans i Reformes Mostra S.C.P. per a pisos petits. Les proposem al client i és el client qui contracta.",
        "Les vam triar perquè coneixen els nostres plànols, compleixen els terminis que diuen, accepten la reunió setmanal i la retenció del 5 %. Si un client en vol una altra, ho acceptem si passa la mateixa revisió: referències, contracte d'obra del model de l'estudi i retenció.",
        "Està en revisió perquè Constructora Prova no pot començar res abans del març del 2027 i no tenim alternativa per a obra gran. Ho hem de resoldre abans que entri el projecte següent."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple i Jordi Mostra" },
        { et: "Data de la decisió", val: "4 de setembre del 2025" },
        { et: "Alternatives descartades", val: "Demanar tres pressupostos de constructora a cada obra, perquè perdem dues setmanes i cada una llegeix els plànols a la seva manera. Una sola constructora per a tot" },
        { et: "Es revisa", val: "Ara mateix: es busca una tercera constructora per a obra gran, abans de finals d'any" }
      ],
      etiquetes: ["constructores", "industrials", "agenda", "obra gran"],
      estat: "revisar",
      origen: { doc: "Acta de direcció de setembre i fitxa d'industrials", lloc: "Servidor, Estudi, Actes, 2025" },
      autor: "Clara Exemple, direcció", data: "2026-10-20", rev: "B",
      relacionats: ["obr-008", "obr-009", "leg-003", "leg-002"] },

    { id: "dec-008", codi: "DEC-008", area: "decisions", tipus: "decisio",
      titol: "Teletreball: un dia per setmana",
      resum: "Va valer entre el setembre del 2023 i el setembre del 2025; ara són dos dies.",
      cos: [
        "Entre el setembre del 2023 i el setembre del 2025 hi havia un dia de teletreball per setmana, a escollir i avisant el dia abans. L'equip d'obra no en feia els dies de visita.",
        "Es va quedar curta: el 2025 tres persones en demanaven dos dies i vam fer una prova de tres mesos, de juny a setembre, sense que els lliuraments empitjoressin. La substitueix DEC-009."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple" },
        { et: "Data de la decisió", val: "1 de setembre del 2023" },
        { et: "Alternatives descartades", val: "Cap dia de teletreball, que era el que feia l'estudi abans" },
        { et: "Es revisa", val: "Substituïda el 22 de setembre del 2025 per DEC-009" }
      ],
      etiquetes: ["teletreball", "horari", "equip", "prova"],
      estat: "substituit", substituitPer: "dec-009",
      origen: { doc: "Acta de direcció de setembre", lloc: "Servidor, Estudi, Actes, 2023" },
      autor: "Clara Exemple, direcció", data: "2025-09-22", rev: "B",
      relacionats: ["dec-009", "eqp-006"] },

    { id: "dec-009", codi: "DEC-009", area: "decisions", tipus: "decisio",
      titol: "Teletreball: dos dies per setmana",
      resum: "Dos dies per a l'equip d'oficina, mai el dimarts ni els dies de lliurament.",
      cos: [
        "L'equip d'oficina pot fer fins a dos dies de teletreball per setmana, a escollir, però mai el dimarts, que és el dia de les reunions d'obra, ni els dies de lliurament. L'equip d'obra no en fa els dies de visita.",
        "Va sortir d'una prova de tres mesos, entre juny i setembre del 2025. En aquell temps no es va endarrerir cap lliurament i les trucades dels clients es van atendre igual. Es va deixar fix el 22 de setembre."
      ],
      camps: [
        { et: "Decidit per", val: "Clara Exemple, amb Marta Prova i Jordi Mostra" },
        { et: "Data de la decisió", val: "22 de setembre del 2025" },
        { et: "Alternatives descartades", val: "Teletreball lliure, perquè el servidor i la taula de plànols necessiten gent a l'estudi" },
        { et: "Es revisa", val: "Cada setembre, amb el balanç dels lliuraments" }
      ],
      etiquetes: ["teletreball", "horari", "equip", "dimarts"],
      estat: "vigent",
      origen: { doc: "Acta de direcció de setembre", lloc: "Servidor, Estudi, Actes, 2025" },
      autor: "Clara Exemple, direcció", data: "2025-09-22", rev: "A",
      relacionats: ["dec-008", "eqp-006", "eqp-005"] },

    { id: "dec-010", codi: "DEC-010", area: "decisions", tipus: "decisio",
      titol: "Acta a totes les visites d'obra, sigui quina sigui la mida",
      resum: "Fins al 2024 només fèiem acta a obres de més de 100 m²; ara en fem a totes.",
      cos: [
        "Fins al 2024, l'acta de cada visita només es feia a obres de més de 100 m². A les petites ho resolíem amb un correu.",
        "El 2023, en una obra d'un bany de 5 m², el client va dir que ningú no li havia explicat que es movia la pica, i no teníem res escrit. Des de l'abril del 2024, qualsevol obra, sigui quina sigui la mida, acaba cada visita amb una acta.",
        "L'acta és curta: fotos, tasques per industrial amb data i la data de la propera visita. En una obra petita ocupa una pàgina."
      ],
      camps: [
        { et: "Decidit per", val: "Jordi Mostra i Clara Exemple" },
        { et: "Data de la decisió", val: "9 d'abril del 2024" },
        { et: "Alternatives descartades", val: "Acta resumida per sota de 100 m². Eren dues maneres de fer-ho i la que es perd és la petita" },
        { et: "Es revisa", val: "No" }
      ],
      etiquetes: ["acta", "visites", "obra petita", "registre"],
      estat: "vigent",
      origen: { doc: "Acta de direcció d'abril", lloc: "Servidor, Estudi, Actes, 2024" },
      autor: "Jordi Mostra, obra", data: "2024-04-09", rev: "A",
      relacionats: ["pro-004", "dec-006"] },

    { id: "dec-011", codi: "DEC-011", area: "decisions", tipus: "decisio",
      titol: "La fusta de la cuina oberta va envernissada",
      resum: "Després de l'Eixample, si el client vol fusta a la cuina oberta la posem envernissada des del principi.",
      cos: [
        "A l'Eixample, el parquet de roure acabat a l'oli va agafar taques d'aigua davant la pica en menys d'un any. A la visita de garantia, el 22 de novembre del 2024, es va envernissar aquella zona.",
        "Hem decidit que, si el client vol fusta a la cuina oberta, la posem envernissada des del principi. Ho expliquem a la primera proposta: l'oli és més bonic i es toca més, però demana un manteniment que no volem deixar a mans del client."
      ],
      camps: [
        { et: "Decidit per", val: "Núria Demo i Clara Exemple" },
        { et: "Data de la decisió", val: "3 de desembre del 2024" },
        { et: "Alternatives descartades", val: "Oli amb manteniment anual i porcellànic imitació fusta, que no ha convençut cap client que l'ha vist" },
        { et: "Es revisa", val: "Si Fusteria Exemple ens proposa un acabat nou ja provat" }
      ],
      etiquetes: ["parquet", "cuina", "envernissat", "eixample"],
      estat: "vigent",
      origen: { doc: "Acta de la visita de garantia de l'Eixample", lloc: "Servidor, Estudi, Actes, 2024" },
      autor: "Núria Demo, interiorisme", data: "2024-12-03", rev: "A",
      relacionats: ["prj-001", "dis-001", "obr-004"] },

    /* ================= LEGAL I CONTRACTES ================= */

    { id: "leg-001", codi: "LEG-001", area: "legal", tipus: "contracte",
      titol: "Contracte tipus d'encàrrec",
      resum: "El contracte que signa tot client abans de començar: set clàusules, honoraris per fases i annexos.",
      cos: [
        "El nostre contracte tipus d'encàrrec té set clàusules: objecte i fases, honoraris i calendari de pagaments, canvis, propietat intel·lectual, imatges i dades, desistiment i resolució de desacords. Es revisa cada gener amb l'assessor de l'estudi.",
        "Els honoraris es reparteixen per fases i es paguen amb els percentatges de la proposta. La fase següent no comença si l'anterior no està pagada.",
        "Els plànols i la resta de documents del projecte són de l'estudi. El client els pot fer servir per construir i viure aquesta obra. Si els vol reutilitzar en un altre lloc o passar-los a un tercer, ho parlem abans i queda per escrit.",
        "Si el client deixa l'encàrrec, paga les fases fetes i la que està en curs. És el que diu el nostre contracte, no una regla general."
      ],
      camps: [
        { et: "Versió", val: "4" },
        { et: "Última revisió", val: "15 de gener del 2026" },
        { et: "Annexos", val: "Honoraris per fases, annex de canvis i full de permís d'imatges" }
      ],
      etiquetes: ["contracte", "encarrec", "clausules", "propietat intelectual"],
      estat: "vigent",
      origen: { doc: "Contracte tipus d'encàrrec, versió 4", lloc: "Servidor, Estudi, Legal, Contractes" },
      autor: "Clara Exemple, direcció", data: "2026-01-15", rev: "D",
      relacionats: ["dec-002", "leg-004", "leg-006", "leg-007", "cli-002", "cli-003"] },

    { id: "leg-002", codi: "LEG-002", area: "legal", tipus: "contracte",
      titol: "Què posem al contracte si l'obra s'endarrereix",
      resum: "Una penalització per dia de retard al contracte d'obra, que és una clàusula nostra i no una obligació legal.",
      cos: [
        "Al model de contracte d'obra que proposem hi posem una penalització per cada dia natural de retard sobre la data d'acabament pactada. No és una obligació legal: és una clàusula del contracte de l'estudi i es negocia amb la constructora abans de signar.",
        "L'import per dia s'acorda a cada obra segons la seva mida i es descompta de l'última certificació. El contracte porta sempre una data d'inici i una d'acabament escrites, mai un mes aproximat.",
        "Queden fora de la penalització els retards que no són de la constructora: un canvi demanat pel client amb annex signat, un permís que encara no ha arribat, el material que ha de portar el client i les causes que es puguin documentar, com un temporal en una obra exterior.",
        "Amb Constructora Prova no ens ha calgut aplicar-la mai. El que fem és mirar el calendari a cada reunió setmanal, perquè un retard es veu tres setmanes abans que toqui cobrar."
      ],
      camps: [
        { et: "Tipus de clàusula", val: "Contractual, no legal" },
        { et: "On és", val: "Model de contracte d'obra, clàusula de terminis" },
        { et: "Import per dia", val: "Es fixa a cada obra" }
      ],
      etiquetes: ["retard", "penalitzacio", "contracte d'obra", "terminis"],
      estat: "vigent",
      origen: { doc: "Model de contracte d'obra, clàusula de terminis", lloc: "Servidor, Estudi, Legal, Contractes" },
      autor: "Clara Exemple, direcció", data: "2025-06-02", rev: "C",
      relacionats: ["obr-008", "dec-006", "leg-004"] },

    { id: "leg-003", codi: "LEG-003", area: "legal", tipus: "contracte",
      titol: "Retenció del 5 % als industrials",
      resum: "Retenim el 5 % de cada certificació fins a l'acta de recepció, perquè els repassos es tanquin.",
      cos: [
        "El nostre model de contracte d'obra retén el 5 % de cada certificació fins a la recepció. No és una obligació legal: és una clàusula nostra i serveix perquè els repassos es tanquin.",
        "La retenció s'allibera quan els repassos són a l'acta de recepció, tancats i signats. Si en queda un d'obert, la retenció no es mou.",
        "Constructora Prova, Reformes Mostra i Instal·lacions Demo l'han acceptada sempre sense discutir-la."
      ],
      camps: [
        { et: "Percentatge", val: "5 % de cada certificació" },
        { et: "S'allibera", val: "Quan l'acta de recepció té els repassos tancats" },
        { et: "Tipus de clàusula", val: "Contractual, no legal" }
      ],
      etiquetes: ["retencio", "garantia", "industrials", "repassos"],
      estat: "vigent",
      origen: { doc: "Model de contracte d'obra, clàusula de pagaments", lloc: "Servidor, Estudi, Legal, Contractes" },
      autor: "Clara Exemple, direcció", data: "2025-02-10", rev: "B",
      relacionats: ["pro-007", "obr-008", "obr-009", "obr-010"] },

    { id: "leg-004", codi: "LEG-004", area: "legal", tipus: "contracte",
      titol: "Canvis d'obra signats: l'annex",
      resum: "Cada canvi va en un annex d'una pàgina amb cost i dies, signat abans d'executar-lo.",
      cos: [
        "Tot canvi d'obra va en un annex d'una pàgina, amb cinc coses: què es canvia, un plànol o una foto, el cost amb IVA, els dies que afecta al termini i la data. El signen el client i la constructora abans que s'executi res.",
        "Si el canvi toca un acabat o un moble a mida, hi adjuntem el preu del proveïdor amb la seva data, que no pot tenir més de sis mesos.",
        "Un canvi que s'ha executat sense annex no el certifiquem: se'n parla a l'acta de visita i es regularitza amb una signatura. Va ser el cas de Sant Cugat, amb l'illa de cuina allargada 40 cm."
      ],
      camps: [
        { et: "Plantilla", val: "Annex de canvis, versió 2" },
        { et: "Qui el signa", val: "El client i la constructora" },
        { et: "Quan", val: "Abans d'executar el canvi" }
      ],
      etiquetes: ["canvis", "annex", "signatura", "cost"],
      estat: "vigent",
      origen: { doc: "Annex de canvis, versió 2", lloc: "Servidor, Estudi, Legal, Plantilles" },
      autor: "Jordi Mostra, obra", data: "2024-09-24", rev: "B",
      relacionats: ["dec-003", "pro-005", "prj-003", "cli-005"] },

    { id: "leg-005", codi: "LEG-005", area: "legal", tipus: "norma",
      titol: "Què fem si un client no paga",
      resum: "Cinc passos amb dates, de l'endemà del venciment a la reclamació formal per l'assessor.",
      cos: [
        "Això és el que fem a l'estudi, no un procediment legal. Ens serveix per no perdre el fil i per tractar tots els clients igual. Les factures vencen a 15 dies i els dies dels passos es compten des del venciment.",
        "Cap pas se salta. I amb un client no parlem mai d'un deute sense tenir la factura davant."
      ],
      passos: [
        { titol: "L'endemà del venciment", text: "La Marta comprova que la factura és correcta i que va arribar, i envia un recordatori curt amb la factura adjunta." },
        { titol: "Al dia 8", text: "La Clara truca al client. Una factura sense pagar sovint és un oblit o un dubte sobre el que es factura." },
        { titol: "Al dia 15", text: "Segon recordatori per escrit, signat per direcció, amb la factura i una data límit." },
        { titol: "Al dia 30", text: "S'atura la fase següent, perquè el contracte tipus diu que no comença si l'anterior no està pagada. Ho diem per escrit." },
        { titol: "Al dia 45", text: "L'expedient passa a l'assessor de l'estudi per a la reclamació formal. Si hi ha obra en marxa, ho decidim amb ell abans d'aturar res." }
      ],
      camps: [
        { et: "Primer pas", val: "Marta Prova, administració" },
        { et: "Escalat", val: "Clara Exemple, direcció" },
        { et: "Venciment", val: "15 dies des de la data de factura" }
      ],
      etiquetes: ["impagament", "cobrament", "factures", "reclamacio"],
      estat: "vigent",
      origen: { doc: "Protocol de cobrament", lloc: "Servidor, Estudi, Legal, Procediments" },
      autor: "Marta Prova, administració", data: "2025-11-04", rev: "B",
      relacionats: ["leg-001", "pro-010", "cli-003"] },

    { id: "leg-006", codi: "LEG-006", area: "legal", tipus: "norma",
      titol: "Fotos de la casa d'un client i permís per publicar-les",
      resum: "Només publiquem fotos amb el permís del client per escrit, i mai amb l'adreça.",
      cos: [
        "Publicar fotos de l'habitatge d'un client demana el seu permís per escrit. A l'estudi no en pengem cap, ni a la web ni a les xarxes ni a premsa, sense el full de permís signat.",
        "El full diu quines fotos són, on es publiquen i si hi surt res personal, com quadres, fotos de família o la placa del nom. No posem mai l'adreça: com a molt, el barri. Si un client ens demana treure una foto, la traiem.",
        "Al Pis a Gràcia, el client va signar el permís per a quatre fotos del bany el 12 de setembre del 2025. De Sant Cugat i de Pedralbes no n'hi ha cap de publicada."
      ],
      camps: [
        { et: "Qui ho demana", val: "Núria Demo, després de l'entrega" },
        { et: "On es guarda", val: "Carpeta 05_Entrega de cada projecte" },
        { et: "Fotos publicades", val: "Quatre del bany de Gràcia" }
      ],
      etiquetes: ["fotos", "permis", "publicacio", "imatge"],
      estat: "vigent",
      origen: { doc: "Full de permís d'imatges, Pis a Gràcia", lloc: "Servidor, Projectes, 2025 Gràcia, 05_Entrega" },
      autor: "Núria Demo, interiorisme", data: "2025-09-12", rev: "A",
      relacionats: ["prj-004", "leg-001", "leg-007"] },

    { id: "leg-007", codi: "LEG-007", area: "legal", tipus: "norma",
      titol: "Dades personals dels clients",
      resum: "Guardem només el que necessitem, al servidor, i no passem dades a ningú que no les hagi de fer servir.",
      cos: [
        "Guardem el nom, l'adreça de l'obra, el telèfon, el correu i el document d'identitat per al contracte i les factures. Tot va al servidor de l'estudi, a la carpeta 01_Encàrrec de cada projecte.",
        "No passem dades a tercers, excepte a la constructora i als proveïdors quan els cal per entregar a l'obra. Plànols amb el nom del client no surten a les xarxes.",
        "Un client ens pot demanar veure les seves dades o que les esborrem. Ho porta la Marta Prova. Guardem l'expedient complet tant de temps com duren les responsabilitats de l'obra, que arriben fins als 10 anys."
      ],
      camps: [
        { et: "Responsable", val: "Marta Prova" },
        { et: "On són", val: "Servidor, carpeta 01_Encàrrec" },
        { et: "Conservació", val: "Fins que acabin les responsabilitats de l'obra" }
      ],
      etiquetes: ["dades personals", "clients", "servidor", "privacitat"],
      estat: "vigent",
      origen: { doc: "Norma interna de dades de clients", lloc: "Servidor, Estudi, Legal, Normes" },
      autor: "Marta Prova, administració", data: "2025-11-20", rev: "B",
      relacionats: ["leg-001", "leg-006", "pro-009", "eqp-009"] },

    { id: "leg-008", codi: "LEG-008", area: "legal", tipus: "norma",
      titol: "Assegurança de responsabilitat civil",
      resum: "Pòlissa de responsabilitat civil professional de l'estudi, renovada cada gener, i còpia de la de cada constructora.",
      cos: [
        "L'estudi té una pòlissa de responsabilitat civil professional a nom de la societat, contractada amb Asseguradora Exemple. Es renova cada gener i la Marta Prova guarda el certificat vigent a Legal.",
        "Si un client demana el certificat, se li dona. A la constructora, abans de començar l'obra, li demanem la còpia de la seva pòlissa i de l'últim rebut i ho deixem a la carpeta de l'obra.",
        "En aquest document no hi ha imports ni cobertures: són a la pòlissa."
      ],
      camps: [
        { et: "Companyia", val: "Asseguradora Exemple" },
        { et: "Renovació", val: "Cada gener" },
        { et: "Qui ho guarda", val: "Marta Prova" }
      ],
      etiquetes: ["assegurances", "responsabilitat civil", "polissa", "constructora"],
      estat: "vigent",
      origen: { doc: "Certificat de la pòlissa vigent", lloc: "Servidor, Estudi, Legal, Assegurances" },
      autor: "Marta Prova, administració", data: "2026-01-12", rev: "B",
      relacionats: ["leg-001", "obr-008", "leg-011"] },

    { id: "leg-009", codi: "LEG-009", area: "legal", tipus: "norma",
      titol: "Llicències i comunicats d'obra",
      resum: "A Barcelona hi ha més d'un règim i quin toca es consulta a cada obra; les nostres mitjanes són de 5 setmanes i 5,5 mesos.",
      cos: [
        "A Barcelona hi ha més d'un règim municipal per a les obres (assabentat, comunicat i llicència) i quin toca depèn de l'obra. A l'estudi no ho donem per fet mai: a cada encàrrec ho consulta en Pau Exemple abans de dir cap data al client.",
        "Del que sí tenim experiència és dels temps. Des del 2023 tenim 7 expedients tancats: 4 comunicacions d'obres, que van trigar de mitjana 5 setmanes des que es van presentar fins que vam poder començar, i 3 llicències d'obres majors, que van trigar 5,5 mesos de mitjana.",
        "La més llarga va ser la de l'Habitatge a Pedralbes, 7 mesos, per un requeriment de l'Ajuntament sobre el forjat. Els expedients del Dúplex a Sant Gervasi i del Pis a Poblenou encara són oberts i no compten a la mitjana.",
        "No comencem cap obra sense tenir al dossier el document que correspon, ni prometem una data d'inici abans de saber-ho."
      ],
      camps: [
        { et: "Qui ho porta", val: "Pau Exemple" },
        { et: "Seguiment", val: "Full de càlcul d'expedients, actualitzat el 30/09/2026" },
        { et: "Expedients oberts", val: "Sant Gervasi i Poblenou" }
      ],
      etiquetes: ["llicencia", "comunicat", "ajuntament", "expedients"],
      estat: "vigent",
      origen: { doc: "Seguiment d'expedients, full de càlcul de l'estudi", lloc: "Servidor, Estudi, Legal, Expedients" },
      autor: "Pau Exemple, projectes", data: "2026-09-30", rev: "C",
      relacionats: ["prj-005", "prj-003", "prj-004", "leg-010"] },

    { id: "leg-010", codi: "LEG-010", area: "legal", tipus: "norma",
      titol: "Obres que afecten la comunitat de propietaris",
      resum: "Si l'obra toca elements comuns, es demana el permís de la comunitat per escrit abans de començar.",
      cos: [
        "Les obres que toquen elements comuns necessiten el permís de la comunitat de propietaris. A l'estudi ho mirem a la primera visita: façana, patis de llums, baixants, coberta, escala o ascensor.",
        "Demanem el permís per escrit a l'administrador de la finca, amb una descripció curta i un plànol, abans de començar. Si s'ha de votar en junta, ho diem al client des del primer dia, perquè allarga el calendari.",
        "A l'Eixample, la galeria donava al pati de llums i va caldre el vistiplau de la comunitat. La junta ho va aprovar tres setmanes després de la petició. Els horaris de soroll es pengen al tauler de l'escala abans de la primera setmana d'obra."
      ],
      camps: [
        { et: "Qui ho porta", val: "Pau Exemple" },
        { et: "Primera acció", val: "Escriure a l'administrador de la finca" },
        { et: "Exemple", val: "Eixample, 3 setmanes per a l'aprovació" }
      ],
      etiquetes: ["comunitat", "elements comuns", "permis", "veins"],
      estat: "vigent",
      origen: { doc: "Correu a l'administrador de la finca i acta de la junta", lloc: "Servidor, Projectes, 2023 Eixample" },
      autor: "Pau Exemple, projectes", data: "2024-10-03", rev: "B",
      relacionats: ["prj-001", "leg-009"] },

    { id: "leg-011", codi: "LEG-011", area: "legal", tipus: "norma",
      titol: "Garanties després de lliurar l'obra",
      resum: "La LOE fixa 1 any per acabats, 3 per defectes d'habitabilitat i 10 per estructura; nosaltres comptem des de l'acta de recepció.",
      cos: [
        "La LOE fixa responsabilitats d'1 any per acabats, 3 anys per defectes que afecten l'habitabilitat i 10 anys per estructura.",
        "A l'estudi comptem els terminis des de la data de l'acta de recepció i ho deixem escrit a la carpeta d'entrega. Als 12 mesos fem la visita de garantia: ho vam fer a l'Eixample el 22 de novembre del 2024 i a l'Àtic a Sarrià el 14 de març del 2025.",
        "Els fabricants tenen la seva pròpia garantia, a part. Les còpies de les garanties i dels manuals van a la carpeta d'entrega perquè el client no les hagi de buscar."
      ],
      camps: [
        { et: "Acabats", val: "1 any" },
        { et: "Habitabilitat", val: "3 anys" },
        { et: "Estructura", val: "10 anys" },
        { et: "Visita de garantia", val: "Als 12 mesos de l'acta de recepció" }
      ],
      etiquetes: ["garantia", "loe", "recepcio", "terminis"],
      estat: "vigent",
      origen: { doc: "Model de carpeta d'entrega i actes de garantia", lloc: "Servidor, Estudi, Legal, Normes" },
      autor: "Clara Exemple, direcció", data: "2025-05-30", rev: "B",
      relacionats: ["pro-007", "pro-008", "leg-003", "prj-005"] },

    { id: "leg-012", codi: "LEG-012", area: "legal", tipus: "norma",
      titol: "Seguretat i salut en obra",
      resum: "Quan hi intervé més d'una empresa o autònom hi ha d'haver coordinador de seguretat i salut, i a nosaltres gairebé sempre.",
      cos: [
        "Quan en una obra intervé més d'una empresa o autònom, cal un coordinador de seguretat i salut. A l'estudi gairebé totes les obres són així, així que el proposem al client abans de començar.",
        "El coordinador pot ser en Jordi Mostra, que té la formació, o un tècnic extern. El nom queda escrit a l'acta de la primera reunió i el client el rep per correu.",
        "La coordinació no la deleguem a la constructora. Qualsevol incident d'obra el recull el coordinador i es mira a la reunió setmanal."
      ],
      camps: [
        { et: "Quan es proposa", val: "Abans de la primera reunió d'obra" },
        { et: "Qui ho porta", val: "Jordi Mostra" },
        { et: "Seguiment", val: "Reunió setmanal del dimarts" }
      ],
      etiquetes: ["seguretat", "salut", "coordinador", "obra"],
      estat: "vigent",
      origen: { doc: "Norma interna de coordinació de seguretat", lloc: "Servidor, Estudi, Legal, Normes" },
      autor: "Jordi Mostra, obra", data: "2025-02-17", rev: "A",
      relacionats: ["dec-006", "obr-008", "obr-009"] },

    { id: "leg-013", codi: "LEG-013", area: "legal", tipus: "norma",
      titol: "IVA del 10 % a la reforma d'habitatge",
      resum: "Només si es compleixen tres condicions, el factura qui executa l'obra, i sempre es confirma amb la gestoria.",
      cos: [
        "L'IVA del 10 % en obres de reforma d'habitatge el factura qui executa l'obra, no l'estudi, i demana tres coses: que el client sigui un particular que fa servir l'habitatge o una comunitat de propietaris, que faci dos anys com a mínim que l'habitatge es va acabar de construir o de rehabilitar, i que qui fa l'obra no hi posi materials per més del 40 % de la base.",
        "Els honoraris de l'estudi van sempre al 21 %.",
        "Abans d'aplicar-lo a res, ho confirmem amb la gestoria. Ho preguntem per escrit, amb l'adreça i la data d'acabat de l'habitatge, i guardem la resposta a la carpeta de l'obra."
      ],
      camps: [
        { et: "Honoraris de l'estudi", val: "21 %" },
        { et: "Obra de reforma", val: "10 % si es compleixen les tres condicions" },
        { et: "Qui ho confirma", val: "La gestoria" }
      ],
      etiquetes: ["iva", "reforma", "gestoria", "factura"],
      estat: "vigent",
      origen: { doc: "Nota de la gestoria sobre l'IVA de reformes", lloc: "Servidor, Estudi, Legal, Fiscal" },
      autor: "Marta Prova, administració", data: "2026-02-09", rev: "B",
      relacionats: ["pro-010", "cli-002", "cli-003"] },

    /* ================= COM TREBALLEM ================= */

    { id: "pro-001", codi: "PRO-001", area: "processos", tipus: "proces",
      titol: "Les fases d'un projecte, de la primera visita a la postvenda",
      resum: "Sis fases, sempre en el mateix ordre, i les quatre fites a què van lligats els pagaments.",
      cos: [
        "Tots els encàrrecs passen per les mateixes sis fases, tinguin 50 o 250 m². Canvia el temps de cada una, no l'ordre.",
        "Els honoraris van lligats a quatre fites: la signatura, l'anteprojecte, el projecte executiu i la direcció d'obra."
      ],
      passos: [
        { titol: "Primera visita i encàrrec", text: "Visita a la casa, resum per escrit i proposta d'honoraris. Si l'accepta, contracte signat i primer pagament." },
        { titol: "Estudi previ i anteprojecte", text: "Plànols de l'estat actual, com a màxim tres distribucions i una proposta d'acabats amb mostres. El client en tria una." },
        { titol: "Projecte i tràmits", text: "Projecte bàsic i la documentació per a l'Ajuntament. En Pau consulta quin règim toca abans de dir cap data." },
        { titol: "Projecte executiu i pressupostos", text: "Plànols de detall, instal·lacions, amidaments i preus dels industrials. El client signa el pressupost." },
        { titol: "Obra", text: "Reunió cada dimarts, acta de cada visita i canvis amb annex signat. Dura entre 2 i 8 mesos segons la mida." },
        { titol: "Recepció, entrega i postvenda", text: "Repassos, carpeta d'entrega, acta de recepció i visita de garantia als 12 mesos." }
      ],
      camps: [
        { et: "Fites de pagament", val: "15 %, 20 %, 30 % i 35 %" },
        { et: "Porta el procés", val: "Clara Exemple" }
      ],
      etiquetes: ["fases", "projecte", "calendari", "pagaments"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 1", lloc: "Servidor, Estudi, Procediments" },
      autor: "Clara Exemple, direcció", data: "2025-11-12", rev: "C",
      relacionats: ["pro-002", "pro-003", "pro-007", "cli-003"] },

    { id: "pro-002", codi: "PRO-002", area: "processos", tipus: "proces",
      titol: "La primera visita",
      resum: "Una hora i mitja a casa del client, sense cobrar, i un resum per escrit en 48 hores.",
      cos: [
        "La primera visita no es cobra i dura una hora i mitja. Hi va en Pau o la Núria, i els dos si l'obra passa dels 100 m².",
        "No donem cap preu en aquesta visita. Si el client insisteix, diem un ordre de magnitud i deixem clar que no és una oferta."
      ],
      passos: [
        { titol: "Abans de la visita", text: "Demanem plànols vells, fotos i el que vol fer. Mirem l'edifici i el carrer." },
        { titol: "A la casa", text: "Mesurem amb un mesurador làser, fotografiem tots els racons i preguntem per l'ús: qui cuina, quanta gent hi viu, què molesta cada dia." },
        { titol: "Al cap de 48 hores", text: "El client rep un resum d'una pàgina amb el que hem entès i el que ens falta." },
        { titol: "En cinc dies hàbils", text: "Proposta d'honoraris amb l'abast per fases." }
      ],
      camps: [
        { et: "Durada", val: "1 h 30" },
        { et: "Cost", val: "Cap" },
        { et: "Qui hi va", val: "Pau Exemple o Núria Demo" }
      ],
      etiquetes: ["visita", "client", "resum", "proposta"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 2", lloc: "Servidor, Estudi, Procediments" },
      autor: "Pau Exemple, projectes", data: "2024-02-14", rev: "B",
      relacionats: ["dec-002", "cli-001", "cli-002", "pro-001"] },

    { id: "pro-003", codi: "PRO-003", area: "processos", tipus: "proces",
      titol: "Com fem un pressupost d'obra",
      resum: "Amidaments partida per partida, preus amb data, dos preus a les partides grans i un 5 % d'imprevistos.",
      cos: [
        "Els amidaments els fa l'Oriol Prova sobre els plànols del projecte executiu, partida per partida: enderrocs, paletaria, instal·lacions, paviments, fusteria i acabats. Cada partida porta el preu d'un industrial o d'un proveïdor amb la seva data.",
        "A les partides grans demanem dos preus. Els preus de proveïdor de més de sis mesos es tornen a demanar. Als paviments hi sumem un 10 % de sobrant, i la col·locació de la rajola feta a mà va a part.",
        "Hi afegim una partida d'imprevistos del 5 %. L'IVA va separat, segons qui executi l'obra. El pressupost val 60 dies."
      ],
      camps: [
        { et: "Fa els amidaments", val: "Oriol Prova" },
        { et: "Revisa", val: "Jordi Mostra" },
        { et: "Validesa", val: "60 dies" }
      ],
      etiquetes: ["pressupost", "amidaments", "preus", "imprevistos"],
      estat: "vigent",
      origen: { doc: "Plantilla de pressupost d'obra, versió 6", lloc: "Servidor, Estudi, Procediments, Plantilles" },
      autor: "Oriol Prova, obra", data: "2025-04-16", rev: "C",
      relacionats: ["dec-004", "obr-004", "obr-005", "leg-013"] },

    { id: "pro-004", codi: "PRO-004", area: "processos", tipus: "plantilla",
      titol: "Acta de visita d'obra",
      resum: "Cinc blocs, fotos amb peu i tasques per industrial amb data; surt el mateix dia i es numera per obra.",
      cos: [
        "L'acta d'una visita d'obra fa d'una a quatre pàgines i es numera per obra: a Sarrià, l'acta núm. 4 és del 27 de febrer del 2024.",
        "Té cinc blocs: capçalera amb obra, data, hora i qui hi era; estat de l'obra amb fotos i peu a cada foto; acords presos; tasques per industrial amb data límit; i la data de la propera visita. Si el client demana un canvi, no s'escriu a l'acta: se'n fa un annex.",
        "S'envia el mateix dia a la constructora i al client. Qui l'ha feta la signa. El client no ha de signar l'acta."
      ],
      camps: [
        { et: "Qui l'escriu", val: "Jordi Mostra o Oriol Prova" },
        { et: "Quan surt", val: "El mateix dia de la visita" },
        { et: "Plantilla", val: "Acta de visita, versió 5" }
      ],
      etiquetes: ["acta", "visita", "plantilla", "fotos"],
      estat: "vigent",
      origen: { doc: "Plantilla d'acta de visita, versió 5", lloc: "Servidor, Estudi, Procediments, Plantilles" },
      autor: "Jordi Mostra, obra", data: "2025-01-20", rev: "D",
      relacionats: ["dec-006", "dec-010", "obr-011", "obr-012"] },

    { id: "pro-005", codi: "PRO-005", area: "processos", tipus: "proces",
      titol: "Com gestionem un canvi",
      resum: "Sis passos curts, de l'apunt a l'actualització dels plànols, sempre portats per en Jordi.",
      cos: [
        "El canvi més car és el que s'executa sense passar per aquí. Per això el procés és curt i el fa sempre la mateixa persona, en Jordi."
      ],
      passos: [
        { titol: "Apuntar", text: "El que demana el client, amb les seves paraules, el dia que ho demana." },
        { titol: "Mirar què toca", text: "Si ja està comprat, fabricat o instal·lat. Si afecta el permís o els terminis." },
        { titol: "Demanar preu", text: "A l'industrial o al proveïdor, per escrit i amb data." },
        { titol: "Fer l'annex", text: "Cost amb IVA, dies que afecta i un plànol o una foto." },
        { titol: "Signatura", text: "Del client i de la constructora, abans d'executar res." },
        { titol: "Actualitzar", text: "Plànols, pressupost i calendari." }
      ],
      camps: [
        { et: "Porta el procés", val: "Jordi Mostra" },
        { et: "Document", val: "Annex de canvis, versió 2" },
        { et: "Si ja està fabricat", val: "Es parla amb la Clara abans de respondre" }
      ],
      etiquetes: ["canvis", "annex", "obra", "pressupost"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 6", lloc: "Servidor, Estudi, Procediments" },
      autor: "Jordi Mostra, obra", data: "2024-09-24", rev: "B",
      relacionats: ["leg-004", "dec-003", "cli-005"] },

    { id: "pro-006", codi: "PRO-006", area: "processos", tipus: "proces",
      titol: "Compres i comandes",
      resum: "Mostra signada, preu amb data i termini per escrit abans de comprar res.",
      cos: [
        "No es demana cap acabat sense mostra signada pel client, ni cap moble a mida sense el plànol de taller aprovat per escrit. El preu que va a la comanda no té més de sis mesos.",
        "La comanda va per escrit i amb el termini del proveïdor posat. Fem seguiment cada dues setmanes, sobretot en teixits i peces sota comanda, com les aixetes de llautó (6 setmanes) i la rajola feta a mà (5).",
        "Quan arriba el material a l'obra, es revisa davant del transportista i es fan fotos de les peces trencades. Comprem un 10 % més de paviment i en guardem un 5 % etiquetat per al client."
      ],
      camps: [
        { et: "Qui compra", val: "Oriol Prova (obra) i Núria Demo (interiorisme)" },
        { et: "Seguiment", val: "Cada dues setmanes" },
        { et: "Sobrant", val: "10 % a la compra, 5 % guardat per al client" }
      ],
      etiquetes: ["compres", "comandes", "terminis", "sobrants"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 5", lloc: "Servidor, Estudi, Procediments" },
      autor: "Oriol Prova, obra", data: "2025-04-16", rev: "B",
      relacionats: ["dec-004", "pro-011", "obr-012", "obr-003"] },

    { id: "pro-007", codi: "PRO-007", area: "processos", tipus: "proces",
      titol: "Com es tanca una obra",
      resum: "Vuit passos en ordre, de la llista de repassos a la visita de garantia als 12 mesos.",
      cos: [
        "Una obra no es dona per tancada fins que els vuit passos són fets, en aquest ordre. A Pedralbes l'acta de recepció es va signar el 30 de maig del 2025 i a Gràcia la carpeta va sortir el 18 de juliol del 2025."
      ],
      passos: [
        { titol: "Llista de repassos", text: "Visita amb la constructora, habitació per habitació. Cada repàs, amb foto i data límit." },
        { titol: "Prova final de les instal·lacions", text: "Llum, aigua, extracció i climatització. Instal·lacions Demo lliura el butlletí elèctric." },
        { titol: "Neteja final", text: "La fa la constructora i es revisa amb llum natural." },
        { titol: "Carpeta d'entrega", text: "En paper i en digital: plànols tal com s'ha construït, llista d'acabats amb referència, color i proveïdor, garanties, manuals d'electrodomèstics, aixetes i climatització, butlletí elèctric i instruccions de manteniment de la pedra i la fusta." },
        { titol: "Sobrants", text: "Un 5 % de cada paviment i rajola, etiquetat, al traster del client." },
        { titol: "Acta de recepció", text: "Signada pel client, la constructora i l'estudi. Des d'aquesta data comptem les garanties." },
        { titol: "Retenció", text: "S'allibera el 5 % quan els repassos de l'acta estan tancats." },
        { titol: "Visita de garantia", text: "Als 12 mesos, a casa del client." }
      ],
      camps: [
        { et: "Porta el procés", val: "Jordi Mostra" },
        { et: "Document", val: "Carpeta d'entrega, versió 3" },
        { et: "Es dona per tancada", val: "Amb l'acta de recepció signada" }
      ],
      etiquetes: ["tancament", "entrega", "recepcio", "repassos"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 8, i índex de la carpeta d'entrega", lloc: "Servidor, Estudi, Procediments" },
      autor: "Jordi Mostra, obra", data: "2025-07-18", rev: "C",
      relacionats: ["leg-003", "leg-011", "pro-008", "prj-004", "prj-005"] },

    { id: "pro-008", codi: "PRO-008", area: "processos", tipus: "proces",
      titol: "Postvenda",
      resum: "Trucada a la segona setmana, visita de garantia als 12 mesos i resposta a qualsevol incidència en dos dies hàbils.",
      cos: [
        "La postvenda comença el dia de l'acta de recepció. A la segona setmana truquem al client per saber si tot funciona. Als 12 mesos fem la visita de garantia, amb la llista de coses que el client ha anat apuntant.",
        "Les incidències es responen en dos dies hàbils. Si és un defecte d'acabat o d'obra, avisem l'industrial i en fem el seguiment. Si és un tema d'ús o de manteniment, ho expliquem per escrit.",
        "A l'Eixample, la visita del 22 de novembre del 2024 va servir per envernissar la zona de la pica. A l'Àtic a Sarrià, la del 14 de març del 2025 va deixar oberta la queixa de la dutxa."
      ],
      camps: [
        { et: "Trucada", val: "A la segona setmana" },
        { et: "Visita de garantia", val: "Al mes 12" },
        { et: "Resposta a una incidència", val: "2 dies hàbils" }
      ],
      etiquetes: ["postvenda", "garantia", "incidencies", "seguiment"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 9", lloc: "Servidor, Estudi, Procediments" },
      autor: "Clara Exemple, direcció", data: "2025-03-21", rev: "B",
      relacionats: ["leg-011", "cli-010", "cli-011", "prj-001", "prj-002"] },

    { id: "pro-009", codi: "PRO-009", area: "processos", tipus: "norma",
      titol: "Noms de fitxers, carpetes i còpies de seguretat",
      resum: "La data primer, sis carpetes numerades per projecte i una còpia cada nit que es prova de restaurar cada mes.",
      cos: [
        "Els fitxers es diuen amb la data primer: AAAA-MM-DD_Projecte_Document_rX. Cada projecte té sis carpetes numerades: 01_Encàrrec, 02_Estudi, 03_Projecte, 04_Obra, 05_Entrega i 06_Postvenda.",
        "Els plànols porten un codi: P per a planta reformada, D per a detall i E per a instal·lacions, amb el número darrere (P-03, D-07, E-02). Les versions velles no s'esborren: van a la subcarpeta Arxiu.",
        "El servidor fa una còpia automàtica cada nit en un disc de l'estudi i una altra cada setmana fora de l'estudi. El primer dilluns de cada mes la Laia prova de restaurar un projecte d'una de les còpies, per saber que funciona de debò."
      ],
      camps: [
        { et: "Responsable", val: "Laia Mostra" },
        { et: "Còpies", val: "Cada nit i cada setmana" },
        { et: "Prova de restauració", val: "El primer dilluns de cada mes" }
      ],
      etiquetes: ["fitxers", "carpetes", "copies", "servidor"],
      estat: "vigent",
      origen: { doc: "Norma de noms i còpies, versió 3", lloc: "Servidor, Estudi, Procediments, Normes" },
      autor: "Laia Mostra, plànols", data: "2026-03-02", rev: "C",
      relacionats: ["leg-007", "eqp-008", "eqp-009"] },

    { id: "pro-010", codi: "PRO-010", area: "processos", tipus: "proces",
      titol: "Com facturem",
      resum: "Una factura per fita, dins dels cinc dies següents i amb l'IVA del 21 % als honoraris.",
      cos: [
        "La Marta emet les factures d'honoraris amb el programa de facturació dins els cinc dies següents a cada fita del contracte: signatura, anteprojecte, projecte executiu i, durant l'obra, una al mes. Venciment a 15 dies.",
        "Els honoraris van amb l'IVA del 21 %. Les factures de l'obra no passen per nosaltres: la constructora i els industrials les envien al client directament, i nosaltres en revisem la certificació abans del pagament.",
        "La numeració és correlativa per any. Si una factura s'ha d'anul·lar, es fa una rectificativa. Mai s'esborra."
      ],
      camps: [
        { et: "Qui factura", val: "Marta Prova" },
        { et: "Quan", val: "Dins els 5 dies de cada fita" },
        { et: "Venciment", val: "15 dies" }
      ],
      etiquetes: ["factures", "honoraris", "iva", "venciment"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 10", lloc: "Servidor, Estudi, Procediments" },
      autor: "Marta Prova, administració", data: "2025-11-04", rev: "B",
      relacionats: ["leg-013", "leg-005", "cli-003"] },

    { id: "pro-011", codi: "PRO-011", area: "processos", tipus: "norma",
      titol: "Mostres signades",
      resum: "Cap acabat es demana sense una mostra física que el client hagi vist i signat.",
      cos: [
        "Cap acabat es demana sense una mostra física que el client hagi vist i signat. La mostra es veu a casa del client, amb la llum de l'espai, i no al mostrari de l'estudi.",
        "Cada mostra porta un full amb referència, color, proveïdor, mida, data i una foto. Amb la rajola feta a mà i el terratzo demanem tres peces, perquè el to i el gruix canvien d'una a l'altra.",
        "El full signat es guarda a 02_Estudi i és el que s'envia al proveïdor amb la comanda."
      ],
      camps: [
        { et: "Qui ho porta", val: "Núria Demo" },
        { et: "On es guarda", val: "Carpeta 02_Estudi" },
        { et: "Quan", val: "Abans de la comanda" }
      ],
      etiquetes: ["mostres", "acabats", "signatura", "comandes"],
      estat: "vigent",
      origen: { doc: "Criteris de l'estudi, mostres", lloc: "Servidor, Estudi, Criteris" },
      autor: "Núria Demo, interiorisme", data: "2025-07-18", rev: "A",
      relacionats: ["dis-007", "dis-006", "pro-006"] },

    /* ================= EQUIP I ACOLLIDA ================= */

    { id: "eqp-001", codi: "EQP-001", area: "equip", tipus: "persona",
      titol: "Qui és qui a l'estudi",
      resum: "Som set. Qui porta què, i a qui preguntar cada tipus de dubte.",
      cos: [
        "La Clara dirigeix, signa contractes i propostes i decideix criteris. En Pau porta projectes i llicències, i la Núria porta l'interiorisme: acabats, mostres i mobiliari.",
        "L'obra és d'en Jordi, cap d'obra, amb l'Oriol als amidaments i al seguiment. La Laia fa els plànols i porta el servidor, i la Marta porta l'administració, la facturació i els accessos.",
        "Un dubte d'un acabat va a la Núria. Un de preu o de termini d'un proveïdor, a l'Oriol. Un de llicència, a en Pau. Un de cobrament, a la Marta. I tot el que no estigui decidit, a la Clara."
      ],
      camps: [
        { et: "Direcció", val: "Clara Exemple" },
        { et: "Projectes i llicències", val: "Pau Exemple" },
        { et: "Interiorisme", val: "Núria Demo" },
        { et: "Obra", val: "Jordi Mostra (cap d'obra) i Oriol Prova" },
        { et: "Plànols i servidor", val: "Laia Mostra" },
        { et: "Administració", val: "Marta Prova" }
      ],
      etiquetes: ["equip", "organigrama", "responsables", "contactes"],
      estat: "vigent",
      origen: { doc: "Organigrama de l'estudi", lloc: "Servidor, Estudi, Equip" },
      autor: "Clara Exemple, direcció", data: "2026-09-07", rev: "C",
      relacionats: ["eqp-002", "eqp-003", "eqp-004"] },

    { id: "eqp-002", codi: "EQP-002", area: "equip", tipus: "persona",
      titol: "Clara Exemple, direcció",
      resum: "Dirigeix l'estudi, signa els contractes i decideix els criteris.",
      cos: [
        "La Clara signa els contractes i les propostes d'honoraris, fa la visita d'inici i la de recepció de cada obra i decideix els criteris que després queden a la carpeta de l'estudi.",
        "Se li porta tot el que no està decidit i qualsevol client que estigui incòmode. Per telèfon, només per urgències. La resta, per correu."
      ],
      camps: [
        { et: "Rol", val: "Direcció" },
        { et: "Porta", val: "Contractes, propostes, criteris i queixes" },
        { et: "Se la troba", val: "Dilluns i dijous a l'estudi, dimarts a l'obra" }
      ],
      etiquetes: ["direccio", "contractes", "criteris", "queixes"],
      estat: "vigent",
      origen: { doc: "Organigrama de l'estudi", lloc: "Servidor, Estudi, Equip" },
      autor: "Clara Exemple, direcció", data: "2025-09-22", rev: "A",
      relacionats: ["eqp-001", "dec-002", "leg-001"] },

    { id: "eqp-003", codi: "EQP-003", area: "equip", tipus: "persona",
      titol: "Jordi Mostra, cap d'obra",
      resum: "Porta la reunió del dimarts, les actes, els repassos i la relació amb les constructores.",
      cos: [
        "En Jordi és arquitecte tècnic i cap d'obra. Porta la reunió del dimarts, les actes, la relació amb les constructores i els industrials, els repassos i la coordinació de seguretat i salut.",
        "Els dimarts és a l'obra tot el dia. Si necessites alguna cosa d'ell, deixa-ho escrit abans de dilluns a les 18."
      ],
      camps: [
        { et: "Rol", val: "Cap d'obra" },
        { et: "Porta", val: "Reunió setmanal, actes, repassos i seguretat" },
        { et: "Se'l troba", val: "Dimarts a l'obra" }
      ],
      etiquetes: ["obra", "reunio", "actes", "seguretat"],
      estat: "vigent",
      origen: { doc: "Organigrama de l'estudi", lloc: "Servidor, Estudi, Equip" },
      autor: "Clara Exemple, direcció", data: "2026-10-20", rev: "A",
      relacionats: ["eqp-001", "dec-006", "leg-012", "obr-008"] },

    { id: "eqp-004", codi: "EQP-004", area: "equip", tipus: "proces",
      titol: "El primer dia",
      resum: "Quatre moments de la jornada: targeta, accessos, mitja hora amb la direcció i lectura.",
      cos: [
        "El primer dia no s'espera res de tu, només que arribis i miris. A la tarda tens temps per llegir."
      ],
      passos: [
        { titol: "A les 9", text: "La Marta et dona la targeta d'accés i el portàtil i t'ensenya on és tot." },
        { titol: "A les 10", text: "La Laia t'obre els accessos al servidor i als programes i t'explica com estan ordenades les carpetes." },
        { titol: "A les 11", text: "Mitja hora amb la Clara: què fem, com ho fem i què no es discuteix." },
        { titol: "Després de dinar", text: "Un tros de tarda per llegir el full de qui és qui i les fases d'un projecte." }
      ],
      camps: [
        { et: "Hora d'arribada", val: "9:00" },
        { et: "Qui t'espera", val: "Marta Prova" }
      ],
      etiquetes: ["primer dia", "acollida", "accessos", "horari"],
      estat: "vigent",
      origen: { doc: "Guia d'acollida, pàgina 1", lloc: "Servidor, Estudi, Equip, Acollida" },
      autor: "Marta Prova, administració", data: "2026-02-02", rev: "B",
      relacionats: ["eqp-001", "eqp-009", "pro-001"] },

    { id: "eqp-005", codi: "EQP-005", area: "equip", tipus: "norma",
      titol: "Horari, calendari i vacances",
      resum: "De 9 a 18, divendres fins a les 15, vacances al calendari abans del 31 de març i tancament dues setmanes d'agost.",
      cos: [
        "L'estudi obre de 9 a 18, amb una hora per dinar, i els divendres plega a les 15. Els dimarts, l'equip d'obra és a l'obra des de les 8:30.",
        "Les vacances s'apunten al calendari compartit abans del 31 de març. No poden coincidir més de dues persones i no es poden agafar en setmana de lliurament. L'estudi tanca les dues primeres setmanes d'agost.",
        "Si necessites un dia per un tràmit o per anar al metge, avisa la Marta amb el temps que puguis i apunta-ho al calendari compartit."
      ],
      camps: [
        { et: "Horari", val: "De 9 a 18, divendres fins a les 15" },
        { et: "Vacances", val: "Calendari compartit, abans del 31 de març" },
        { et: "Tancament", val: "Les dues primeres setmanes d'agost" }
      ],
      etiquetes: ["horari", "calendari", "vacances", "permisos"],
      estat: "vigent",
      origen: { doc: "Normes d'equip, versió 4", lloc: "Servidor, Estudi, Equip" },
      autor: "Marta Prova, administració", data: "2026-01-15", rev: "B",
      relacionats: ["eqp-006", "dec-009"] },

    { id: "eqp-006", codi: "EQP-006", area: "equip", tipus: "norma",
      titol: "Teletreball",
      resum: "Fins a dos dies per setmana, mai el dimarts ni els dies de lliurament.",
      cos: [
        "L'equip d'oficina pot fer fins a dos dies de teletreball per setmana, mai el dimarts ni els dies de lliurament. L'equip d'obra no en fa els dies de visita. Fins al setembre del 2025 era només un dia.",
        "Es treballa connectat al servidor de l'estudi pel mètode que et dona la Laia, i no s'envien fitxers de client a correus personals.",
        "Si un d'aquests dies et truca un client, l'atens com si fossis a l'estudi i ho apuntes a la carpeta del projecte."
      ],
      camps: [
        { et: "Dies", val: "Fins a dos per setmana" },
        { et: "Excepcions", val: "Dimarts i dies de lliurament" },
        { et: "Decisió", val: "DEC-009, del 22 de setembre del 2025" }
      ],
      etiquetes: ["teletreball", "horari", "equip", "servidor"],
      estat: "vigent",
      origen: { doc: "Normes d'equip, versió 4", lloc: "Servidor, Estudi, Equip" },
      autor: "Clara Exemple, direcció", data: "2025-09-22", rev: "A",
      relacionats: ["dec-009", "dec-008", "eqp-009"] },

    { id: "eqp-007", codi: "EQP-007", area: "equip", tipus: "norma",
      titol: "Despeses de l'estudi",
      resum: "Tiquet a la carpeta del mes, revisió el dia 5 i compres de més de 150 € parlades abans.",
      cos: [
        "Les despeses de l'estudi (transport a l'obra, material de mostra, impressió de plànols) es porten amb el tiquet a la carpeta del mes. La Marta les revisa el dia 5 del mes següent.",
        "Una compra de més de 150 € es parla abans amb la Marta. Les mostres de proveïdor que s'han de pagar les demana en Oriol o la Núria i es carreguen al projecte, no a l'estudi.",
        "Un tiquet sense data o sense el nom del projecte no es passa i torna a qui el va deixar."
      ],
      camps: [
        { et: "Qui ho porta", val: "Marta Prova" },
        { et: "Dia de revisió", val: "El 5 de cada mes" },
        { et: "Compres grans", val: "Més de 150 €, amb avís" }
      ],
      etiquetes: ["despeses", "tiquets", "compres", "mostres"],
      estat: "vigent",
      origen: { doc: "Normes d'equip, versió 4", lloc: "Servidor, Estudi, Equip" },
      autor: "Marta Prova, administració", data: "2025-10-06", rev: "A",
      relacionats: ["eqp-001", "pro-006"] },

    { id: "eqp-008", codi: "EQP-008", area: "equip", tipus: "eina",
      titol: "Programes i eines de l'estudi",
      resum: "AutoCAD per als plànols, Revit als projectes grans, SketchUp per a les proves i Excel per als amidaments.",
      cos: [
        "Plànols en 2D amb AutoCAD. Revit als projectes grans, que és on ens va fer falta el model (Sant Cugat i Pedralbes). SketchUp per a les proves d'interiorisme amb el client, que veu l'espai abans de triar. Excel per als amidaments, els pressupostos i el seguiment d'expedients.",
        "Hi ha dos programes més, sense nom aquí: el de facturació, que porta la Marta, i el servidor de l'estudi, que porta la Laia.",
        "Les versions les actualitza la Laia a l'hivern, mai en plena obra. Ja ens va passar que un fitxer no s'obria amb la versió vella."
      ],
      camps: [
        { et: "Plànols", val: "AutoCAD" },
        { et: "Model", val: "Revit, als projectes grans" },
        { et: "Visualització", val: "SketchUp" },
        { et: "Càlcul i seguiment", val: "Excel" },
        { et: "Qui ho porta", val: "Laia Mostra" }
      ],
      etiquetes: ["autocad", "revit", "sketchup", "excel"],
      estat: "vigent",
      origen: { doc: "Llista de programes de l'estudi", lloc: "Servidor, Estudi, Equip" },
      autor: "Laia Mostra, plànols", data: "2026-01-12", rev: "B",
      relacionats: ["pro-009", "eqp-009", "leg-009"] },

    { id: "eqp-009", codi: "EQP-009", area: "equip", tipus: "norma",
      titol: "Accessos: qui els dona i com es tanquen",
      resum: "La Marta i la Laia els donen el primer dia, cada persona té els seus i les baixes es tanquen el mateix dia.",
      cos: [
        "Els accessos els donen la Marta (targeta, correu, programa de facturació) i la Laia (servidor i programes de dibuix), el primer dia. Cada persona té els seus. No hi ha accessos compartits.",
        "Cap contrasenya s'escriu en un paper, ni en un correu, ni en cap document de l'estudi. Si en perds una, la Laia la restableix i et demana que la canviïs.",
        "Quan algú marxa de l'estudi, la Marta i la Laia tanquen tots els seus accessos el mateix dia."
      ],
      camps: [
        { et: "Targeta, correu i facturació", val: "Marta Prova" },
        { et: "Servidor i programes", val: "Laia Mostra" },
        { et: "Quan algú marxa", val: "Es tanca tot el mateix dia" }
      ],
      etiquetes: ["accessos", "seguretat", "servidor", "baixes"],
      estat: "vigent",
      origen: { doc: "Normes d'equip, versió 4", lloc: "Servidor, Estudi, Equip" },
      autor: "Laia Mostra, plànols", data: "2026-02-02", rev: "B",
      relacionats: ["eqp-004", "leg-007", "pro-009"] },

    { id: "eqp-010", codi: "EQP-010", area: "equip", tipus: "norma",
      titol: "Formació i sessions internes",
      resum: "Fins a quatre dies de formació a l'any i una sessió interna l'últim dijous de cada mes.",
      cos: [
        "El primer mes tens acompanyament: una obra amb en Jordi i una visita de client amb en Pau o la Núria. Després, cada persona té fins a quatre dies de formació a l'any, que es demanen a la Clara amb un mes d'antelació.",
        "L'últim dijous de cada mes, a les 16:00, una persona explica un projecte tancat en 45 minuts: què va anar bé, què no i què canviaríem. A l'acta queda apuntat el que passa a ser criteri.",
        "Un cop l'any visitem la fàbrica d'un proveïdor. El 2026 va ser la de Fusteria Exemple, a l'abril."
      ],
      camps: [
        { et: "Dies de formació", val: "Fins a 4 a l'any" },
        { et: "Sessió interna", val: "L'últim dijous de cada mes, a les 16:00" },
        { et: "Qui ho coordina", val: "Clara Exemple" }
      ],
      etiquetes: ["formacio", "sessions", "proveidors", "aprenentatge"],
      estat: "vigent",
      origen: { doc: "Normes d'equip, versió 4", lloc: "Servidor, Estudi, Equip" },
      autor: "Clara Exemple, direcció", data: "2026-04-24", rev: "A",
      relacionats: ["eqp-004", "obr-004"] },

    { id: "eqp-011", codi: "EQP-011", area: "equip", tipus: "norma",
      titol: "Com escrivim als clients",
      resum: "Mirem tot l'historial abans d'escriure, un correu un tema i resposta en dos dies hàbils.",
      cos: [
        "Abans d'escriure a un client, mirem tot el que s'ha dit a la carpeta del projecte: correus, actes, plànols. Un correu, un tema. Frases curtes i sense paraules d'obra que el client no hagi sentit mai.",
        "Responem en dos dies hàbils. Si hi ha una decisió, es repeteix al final del correu i es demana confirmació. No donem mai un preu sense data. Els canvis no es tanquen per correu: van a l'annex.",
        "El telèfon és per avisar o aclarir, no per decidir. El que s'acorda per telèfon queda escrit el mateix dia."
      ],
      camps: [
        { et: "Resposta", val: "2 dies hàbils" },
        { et: "Per decidir", val: "Correu o annex, no telèfon" },
        { et: "Correus delicats", val: "Els revisa la Clara" }
      ],
      etiquetes: ["correus", "clients", "comunicacio", "historial"],
      estat: "vigent",
      origen: { doc: "Normes d'equip, versió 4", lloc: "Servidor, Estudi, Equip" },
      autor: "Clara Exemple, direcció", data: "2026-05-18", rev: "B",
      relacionats: ["dec-003", "leg-004", "cli-010"] },

    /* ================= CLIENTS I ENCÀRRECS ================= */

    { id: "cli-001", codi: "CLI-001", area: "clients", tipus: "client",
      titol: "Com ens arriben els encàrrecs",
      resum: "Dels nou projectes des del 2023, cinc van venir de recomanació, dos d'industrials i dos de la web.",
      cos: [
        "Mirant els nou projectes que tenim guardats, cinc encàrrecs van arribar per recomanació d'un client anterior, dos per un industrial que treballa amb nosaltres i dos per la web. A Poblenou el client és de la mateixa família que el de Sant Cugat, i el comptem com a recomanació.",
        "El que ve d'un industrial sol tenir pressa i ja porta un preu al cap, i abans de res hem de parlar d'abast. El que ve de la web demana més coses per escrit i marxa més fàcilment si no contestem aviat.",
        "No fem publicitat de pagament. Quan un client acaba, li demanem permís per escrit per ensenyar les fotos i, si ens recomana, li fem arribar el nostre agraïment sense cap descompte ni comissió."
      ],
      camps: [
        { et: "Recomanació", val: "5 de 9" },
        { et: "Per un industrial", val: "2 de 9" },
        { et: "Per la web", val: "2 de 9" }
      ],
      etiquetes: ["origen", "recomanacio", "web", "industrials"],
      estat: "vigent",
      origen: { doc: "Quadre d'encàrrecs 2023-2026", lloc: "Servidor, Estudi, Clients" },
      autor: "Clara Exemple, direcció", data: "2026-10-05", rev: "A",
      relacionats: ["pro-002", "cli-004", "cli-008", "leg-006"] },

    { id: "cli-002", codi: "CLI-002", area: "clients", tipus: "plantilla",
      titol: "La proposta d'honoraris",
      resum: "Una proposta d'unes quatre pàgines, amb l'abast per fases i el que queda fora, valida 30 dies.",
      cos: [
        "La proposta fa unes quatre pàgines i va signada per la Clara. Diu el que hem entès del cas, què inclou cada fase, què queda fora (per exemple, el mobiliari solt o l'ajut amb la comunitat) i el pla de pagaments per fites.",
        "Els honoraris van sempre separats de l'obra. Si el client vol que li portem també la constructora, li ho expliquem per escrit: nosaltres dirigim, no som la constructora. Valida 30 dies i després es revisa.",
        "Una proposta no s'envia sense haver mirat tot l'historial del client, inclosos els correus antics."
      ],
      camps: [
        { et: "Extensió", val: "Unes 4 pàgines" },
        { et: "Valida", val: "30 dies" },
        { et: "Signa", val: "Clara Exemple" },
        { et: "Plantilla", val: "Proposta d'honoraris, versió 5" }
      ],
      etiquetes: ["proposta", "honoraris", "abast", "fases"],
      estat: "vigent",
      origen: { doc: "Plantilla de proposta d'honoraris, versió 5", lloc: "Servidor, Estudi, Plantilles" },
      autor: "Clara Exemple, direcció", data: "2026-02-23", rev: "C",
      relacionats: ["cli-003", "pro-002", "dec-002", "leg-001"] },

    { id: "cli-003", codi: "CLI-003", area: "clients", tipus: "norma",
      titol: "Com es cobren els honoraris, fase per fase",
      resum: "Quatre pagaments: 15 % a la signatura, 20 % a l'anteprojecte, 30 % al projecte executiu i 35 % durant la direcció d'obra.",
      cos: [
        "El pla de pagaments és el mateix a totes les propostes: el 15 % en signar el contracte, el 20 % en entregar l'anteprojecte, el 30 % en entregar el projecte executiu i el 35 % restant repartit durant l'obra, una factura al mes.",
        "El percentatge ve de fer coincidir els cobraments amb la feina que ja s'ha fet. Així cap fase queda per cobrar quan el client ja ha rebut els plànols.",
        "Si una factura no es paga al venciment, seguim el procediment d'impagament. Al dia 30 la fase següent no comença."
      ],
      camps: [
        { et: "Signatura", val: "15 %" },
        { et: "Anteprojecte", val: "20 %" },
        { et: "Projecte executiu", val: "30 %" },
        { et: "Direcció d'obra", val: "35 %, en factures mensuals" },
        { et: "Impagament", val: "Procediment de LEG-005" }
      ],
      etiquetes: ["cobrament", "fases", "honoraris", "factures"],
      estat: "vigent",
      origen: { doc: "Contracte d'encàrrec tipus, annex econòmic", lloc: "Servidor, Estudi, Legal, Contractes" },
      autor: "Marta Prova, administració", data: "2025-11-04", rev: "B",
      relacionats: ["pro-010", "leg-005", "leg-001", "cli-002"] },

    { id: "cli-004", codi: "CLI-004", area: "clients", tipus: "client",
      titol: "Tipus de client que atenem",
      resum: "Particulars amb una casa, famílies que repeteixen i propietaris petits que reformen per llogar.",
      cos: [
        "Tenim tres perfils. El particular que reforma el seu habitatge és el més freqüent. La família que ja ens ha fet un encàrrec i en torna a fer un altre (Sant Cugat i Poblenou) és el que dona més feina d'acompanyar i menys de convèncer. I el propietari petit, com Immobles Demo, reforma pisos per llogar.",
        "Tots tres demanen coses diferents. El particular vol saber què passa cada setmana, la família vol que es recordi el que ja ha dit, i el propietari petit vol un pressupost tancat i un termini que respectem.",
        "No treballem amb grans promotors ni amb comunitats senceres de més de deu veïns, perquè no tenim equip per això."
      ],
      camps: [
        { et: "Particular", val: "Habitatge propi" },
        { et: "Família", val: "Repeteix encàrrec" },
        { et: "Propietari petit", val: "Reforma per llogar" }
      ],
      etiquetes: ["perfils", "particulars", "families", "propietaris"],
      estat: "vigent",
      origen: { doc: "Quadre d'encàrrecs 2023-2026", lloc: "Servidor, Estudi, Clients" },
      autor: "Clara Exemple, direcció", data: "2026-10-05", rev: "A",
      relacionats: ["cli-006", "cli-007", "cli-008", "cli-009"] },

    { id: "cli-005", codi: "CLI-005", area: "clients", tipus: "norma",
      titol: "Quan el client demana un canvi gran a mitja obra",
      resum: "Parem, calculem el cost i els dies i el client decideix amb la xifra a la mà.",
      cos: [
        "Si el canvi toca una cosa que ja està comprada, fabricada o instal·lada, parem la partida afectada. No s'executa res fins que hi hagi annex signat.",
        "Li diem al client, en una pàgina, tres coses: quant costa, quants dies afegeix i què es pot fer si no vol pagar-ho. Normalment hi ha una alternativa més barata, i la posem a la taula.",
        "A Sant Cugat vam aprendre que una conversa sense paper surt més cara que qualsevol canvi. El client va demanar de paraula allargar l'illa de la cuina 40 cm. Ho vam resoldre, però ens va costar tres setmanes i una discussió de preu."
      ],
      camps: [
        { et: "Primer pas", val: "Parar la partida afectada" },
        { et: "Segon pas", val: "Cost, dies i alternativa en una pàgina" },
        { et: "Tercer pas", val: "Annex signat, i llavors s'executa" }
      ],
      etiquetes: ["canvis", "obra", "annex", "client"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 6", lloc: "Servidor, Estudi, Procediments" },
      autor: "Jordi Mostra, obra", data: "2024-09-24", rev: "B",
      relacionats: ["pro-005", "leg-004", "dec-003", "prj-003"] },

    { id: "cli-006", codi: "CLI-006", area: "clients", tipus: "client",
      titol: "Anna i Roger Prova, el pis de Gràcia",
      resum: "Parella jove, primer habitatge, bany petit. Ens van signar el permís de les fotos el 12 de setembre del 2025.",
      cos: [
        "L'Anna i en Roger tenien 86 m² i un pressupost ajustat, i el bany els preocupava més que res. Van venir per una amiga que ja havia estat clienta. Van triar la rajola feta a mà verda després de veure tres peces a casa seva, no al mostrari.",
        "Són clients d'escriure poc i llegir-ho tot. Els funcionava un correu setmanal amb tres línies i dues fotos.",
        "El 12 de setembre del 2025 ens van signar el permís per publicar fotos del bany, sense l'adreça. Són les que fem servir per a la dutxa a ras."
      ],
      camps: [
        { et: "Projecte", val: "Pis a Gràcia, 2025" },
        { et: "Com ens van trobar", val: "Recomanació d'una clienta" },
        { et: "Permís de fotos", val: "Signat el 12/09/2025" },
        { et: "Comunicació", val: "Un correu setmanal" }
      ],
      etiquetes: ["gracia", "parella", "bany petit", "permis fotos"],
      estat: "vigent",
      origen: { doc: "Carpeta del client, 01_Encàrrec i 05_Entrega", lloc: "Servidor, Projectes, 2025 Gràcia" },
      autor: "Núria Demo, interiorisme", data: "2025-09-12", rev: "A",
      relacionats: ["prj-004", "leg-006", "dis-007", "cli-011"] },

    { id: "cli-007", codi: "CLI-007", area: "clients", tipus: "client",
      titol: "Immobles Demo S.L., el pis del Born",
      resum: "Propietari petit que reforma per llogar. Pressupost tancat, termini que cal respectar i fuga a l'acta 5.",
      cos: [
        "Immobles Demo és una societat de dos socis que compra pisos petits per reformar-los i llogar-los. Ens va arribar per un industrial. El pis del Born era de 74 m² i el bany, de 2,9 m².",
        "Demanen pressupost tancat i una data d'acabament, perquè cada setmana de retard és una setmana sense lloguer. Per això a aquest encàrrec vam mirar el calendari cada dimarts.",
        "A l'acta 5 (9 de juny del 2025) va sortir una fuga a la unió del desguàs i la làmina de la dutxa. La vam trobar abans de col·locar el paviment i ens va costar dos dies. D'aquí va néixer la prova d'estanquitat que fem ara a tots els banys."
      ],
      camps: [
        { et: "Projecte", val: "Pis al Born, 2025" },
        { et: "Superfície", val: "74 m²" },
        { et: "Com ens van trobar", val: "Per un industrial" },
        { et: "Què demanen", val: "Pressupost tancat i data" }
      ],
      etiquetes: ["born", "propietari", "lloguer", "termini"],
      estat: "vigent",
      origen: { doc: "Carpeta del client, 04_Obra", lloc: "Servidor, Projectes, 2025 Born" },
      autor: "Jordi Mostra, obra", data: "2025-06-09", rev: "A",
      relacionats: ["prj-007", "obr-011", "cli-004"] },

    { id: "cli-008", codi: "CLI-008", area: "clients", tipus: "client",
      titol: "Família Mostra, Sant Cugat i Poblenou",
      resum: "Dos encàrrecs seguits: la casa de Sant Cugat del 2024 i el pis de Poblenou del 2026.",
      cos: [
        "La Família Mostra ens va trobar per la web i ens va encarregar la casa de Sant Cugat, de 260 m². Va ser l'obra amb més canvis, i d'allà va sortir la norma de l'annex. Quan van tornar, el 2026, per al pis de Poblenou de 98 m², ja sabien com treballem.",
        "En un segon encàrrec ja ens coneixen i saben quan voler un annex. El que no hem de fer és donar per fet que se'n recorden del que es va acordar al primer.",
        "El terratzo de Sant Cugat va perdre brillantor a les zones de pas i el vam abrillantar als 18 mesos. A Poblenou n'hem parlat abans de triar-lo."
      ],
      camps: [
        { et: "Projectes", val: "Sant Cugat (2024) i Poblenou (2026)" },
        { et: "Com ens van trobar", val: "Per la web" },
        { et: "Què aprenem", val: "Un segon encàrrec no és un primer amb descompte" }
      ],
      etiquetes: ["familia", "sant cugat", "poblenou", "repeticio"],
      estat: "vigent",
      origen: { doc: "Carpeta del client, 01_Encàrrec", lloc: "Servidor, Projectes, 2024 Sant Cugat" },
      autor: "Pau Exemple, projectes", data: "2026-09-14", rev: "A",
      relacionats: ["prj-003", "prj-009", "dis-006", "cli-005"] },

    { id: "cli-009", codi: "CLI-009", area: "clients", tipus: "norma",
      titol: "Encàrrecs que no acceptem",
      resum: "Obres sense contracte, terminis impossibles, projectes d'un sol dibuix i obres de més de deu veïns.",
      cos: [
        "No acceptem una obra sense contracte signat, per molt que sigui d'un amic. Tampoc una obra amb un termini que la constructora no pot complir: si l'agenda de Constructora Prova no arriba fins al març del 2027, no ho prometem abans.",
        "No fem projectes de només dibuixar, sense direcció d'obra, perquè després el que es construeix no és el que hem dibuixat. I no portem comunitats de més de deu veïns, perquè no tenim l'equip.",
        "Quan diem que no, ho fem per escrit i dient el motiu, i si podem recomanem algú. Al llarg del 2025 vam dir que no a quatre encàrrecs."
      ],
      camps: [
        { et: "Sense contracte", val: "No" },
        { et: "Només dibuix", val: "No" },
        { et: "Comunitats de més de 10 veïns", val: "No" },
        { et: "Els refusos del 2025", val: "4 encàrrecs" }
      ],
      etiquetes: ["refusar", "limits", "contracte", "agenda"],
      estat: "vigent",
      origen: { doc: "Criteris d'acceptació d'encàrrecs", lloc: "Servidor, Estudi, Clients" },
      autor: "Clara Exemple, direcció", data: "2026-03-30", rev: "B",
      relacionats: ["dec-002", "dec-007", "cli-004"] },

    { id: "cli-010", codi: "CLI-010", area: "clients", tipus: "norma",
      titol: "Queixes: com les registrem i com les tanquem",
      resum: "Es registren el dia que arriben, les respon la Clara en dos dies i només es tanquen quan el client ho confirma.",
      cos: [
        "Una queixa s'apunta el mateix dia que arriba, amb el que diu el client amb les seves paraules. La contesta la Clara en dos dies hàbils, no el que ha portat l'obra.",
        "Es tanca quan el client ho confirma per escrit, no quan nosaltres creiem que ja està. Si el client no contesta, es repeteix el recordatori als 15 dies.",
        "Ara mateix no en tenim cap d'oberta. L'última va ser la de la dutxa de microciment de Sarrià, que va sortir a la visita de garantia del 14 de març del 2025. L'aplicador la va reparar en garantia, el client ho va confirmar per escrit i d'aquí va néixer la decisió de no fer microciment dins la dutxa."
      ],
      camps: [
        { et: "Qui contesta", val: "Clara Exemple" },
        { et: "Termini de resposta", val: "2 dies hàbils" },
        { et: "Última tancada", val: "Sarrià, dutxa de microciment (març del 2025)" }
      ],
      etiquetes: ["queixes", "garantia", "sarria", "microciment"],
      estat: "vigent",
      origen: { doc: "Registre de queixes", lloc: "Servidor, Estudi, Clients" },
      autor: "Clara Exemple, direcció", data: "2026-10-20", rev: "B",
      relacionats: ["prj-002", "dec-001", "dis-005", "pro-008"] },

    { id: "cli-011", codi: "CLI-011", area: "clients", tipus: "proces",
      titol: "Seguiment després de l'obra: tres anys",
      resum: "Trucada a les dues setmanes, visita al mes 12 i una trucada a l'any 3, quan acaba la garantia dels defectes.",
      cos: [
        "El seguiment dura tres anys perquè és el termini que marca la LOE per als defectes que afecten l'habitabilitat. A la segona setmana truquem, al mes 12 visitem i a l'any 3 tornem a trucar abans que acabi aquell termini.",
        "No és venda: és el moment en què el client ens diu el que ha vist. Si veiem un defecte que és de la constructora, l'hi diem per escrit i ho seguim fins que es repari.",
        "Qualsevol cosa que surti de la garantia del contracte de l'estudi la deixem clara abans de tocar res. Els acabats tenen un any i l'estructura deu, i ho posem a la carpeta d'entrega."
      ],
      passos: [
        { titol: "Segona setmana", text: "Trucada per saber si tot funciona." },
        { titol: "Mes 12", text: "Visita de garantia amb la llista del client." },
        { titol: "Any 3", text: "Trucada abans que acabi el termini dels defectes d'habitabilitat." }
      ],
      camps: [
        { et: "Durada", val: "3 anys" },
        { et: "Visita", val: "Al mes 12" },
        { et: "Garanties de referència", val: "1, 3 i 10 anys segons el defecte" }
      ],
      etiquetes: ["seguiment", "garantia", "postobra", "loe"],
      estat: "vigent",
      origen: { doc: "Manual de procediments, capítol 9", lloc: "Servidor, Estudi, Procediments" },
      autor: "Clara Exemple, direcció", data: "2026-03-30", rev: "A",
      relacionats: ["pro-008", "leg-011", "cli-006"] },

  ],

  /* Preguntes preparades. paraules: arrels que es busquen al text escrit. Amb * compten doble.
     Les concretes van primer: en cas d'empat de punts guanya la que surt abans. */
  preguntes: [
    { id: "q-dutxa", text: "Com vam resoldre la dutxa a ras de terra en banys petits?", destacada: false,
      paraules: ["*dutx", "plat", "desgua", "nivell", "petit", "bany", "pendent", "mampara", "estanquitat", "*duch", "plato", "desague"],
      resposta: [
        "Als banys petits fem la dutxa d'obra, sense plat, amb un 2 % de pendent cap a un desguàs lineal de 80 cm tocant a la paret del fons. El terra va d'una peça de cap a cap i el bany sembla més gran. [1]",
        "Al Pis a Gràcia, amb un bany de 3,2 m², es va treure el recrescut antic i el bany va quedar a nivell amb el passadís. [2]",
        "Al Pis al Born, de 2,9 m², el forjat no tenia gruix per rebaixar. Es va pujar tot el bany 2 cm i es va resoldre amb un llindar rebaixat a la porta. [3]",
        "En tots dos, mampara fixa de vidre de 8 mm sense perfil a terra i prova d'estanquitat de 24 hores abans de posar la rajola. Al Born aquesta prova va trobar una fuga a les 10 hores. [4]"
      ],
      fonts: ["dis-011", "prj-004", "prj-007", "obr-011"] },

    { id: "q-microciment", text: "Per què no fem microciment dins la dutxa i què ens va passar?", destacada: true,
      paraules: ["*microcim", "*microcem", "dutx", "problem", "humid", "repetir", "fissur", "taca", "revestiments", "duch"],
      resposta: [
        "A l'Àtic a Sarrià, del 2024, vam posar microciment dins la dutxa del bany principal. Als 8 mesos hi havia taques de cal que no marxaven i una fissura fina a la trobada amb el desguàs. [3]",
        "L'aplicador ho va reparar en garantia, però el client havia de tornar a segellar-lo cada any. L'aplicació estava ben feta. El que va fallar va ser demanar-li una feina anual que ningú espera d'un bany. El 28 de març del 2025 vam decidir no fer-ne dins cap dutxa, en cap projecte. [1]",
        "A les parets fora de l'aigua i al moble del lavabo ha aguantat bé, i allà el seguim fent. Dins la dutxa posem porcellànic o pedra. [2]",
        "El preu que tenim del microciment és de 95 €/m² en parets de bany, aplicat i segellat, del 20 de novembre del 2023. Passats sis mesos es torna a demanar abans de donar-lo a un client. [4]"
      ],
      fonts: ["dec-001", "dis-005", "prj-002", "obr-007"] },

    { id: "q-paviment", text: "Quin paviment hem posat a les cuines obertes al menjador i com ha envellit?", destacada: false,
      paraules: ["*pavim", "terra", "*cuin", "*obert", "menjador", "*envell", "parquet", "fusta", "terratzo", "porcellanic", "*suelo", "*cocin", "*abiert", "comedor"],
      resposta: [
        "Al Pis a l'Eixample, del 2023, vam posar parquet de roure en espiga acabat a l'oli. Davant la pica va agafar taques d'aigua en menys d'un any i a la visita de garantia del 22 de novembre del 2024 vam envernissar aquella zona. [1]",
        "A l'Àtic a Sarrià, del 2024, el porcellànic gris de 120x120 està com el primer dia. És el paviment que menys trucades de postvenda ens ha donat. [2]",
        "A la Casa a Sant Cugat el terratzo va molt bé a la cuina, però a les zones de pas va perdre brillantor i el vam tornar a abrillantar als 18 mesos. Ara ho diem al client abans que triï. [3]",
        "Des de llavors, si el client vol fusta a la cuina oberta, la posem envernissada i ho expliquem des de la primera proposta. [4]"
      ],
      fonts: ["prj-001", "dis-004", "dis-006", "dis-001"] },

    { id: "q-pedra", text: "Quin proveïdor de pedra natural fem servir i quin és l'últim preu que ens va donar?", destacada: true,
      paraules: ["*pedr", "*marbre", "*calcari", "proveid", "preu", "taulell", "natural", "*piedr", "*marmol", "proveedor", "precio", "encimera"],
      resposta: [
        "Fem servir Pedres Mostra S.L. des del Pis a l'Eixample, el 2023. Fan la presa de plantilla a l'obra, així que els mobles baixos ja han d'estar col·locats. Diuen 3 setmanes des de la plantilla i en triguen 4, i als calendaris ho comptem així. [1]",
        "L'últim preu és l'oferta del 14 de maig del 2026: taulell de calcària de 2 cm, polit, a 340 €/m²; cantell recte a 45 €/ml; forat per a pica encastada a 180 € per forat; i marbre blanc de veta grisa de 2 cm a 520 €/m². Passats sis mesos des d'aquesta data, no el donem a cap client sense tornar-lo a demanar. [1]",
        "La calcària la demanem amb tractament antitaques i acabat apomassat: polida i sense tractar, un taulell va agafar marques d'oli i de llimona. [2]",
        "El marbre va a parets i a lavabos de banys principals, amb poca aigua a sobre i ben segellat. No el posem al terra de la dutxa. [3]"
      ],
      fonts: ["obr-001", "dis-002", "dis-003"] },

    { id: "q-sofa", text: "Quin sofà i quines butaques vam posar a l'Habitatge a Pedralbes i quant van trigar a arribar?", destacada: false,
      paraules: ["*sofa", "*butac", "*mobl", "*mobiliari", "termini", "trig", "arrib", "pedralbes", "tapiss", "*mueble", "*sillon", "tardaron"],
      resposta: [
        "A l'Habitatge a Pedralbes hi ha un sofà modular de tres mòduls de Mobles Mostra, de 310 cm, tapissat en lli rentat de color sorra, i dues butaques giratòries del mateix proveïdor, en vellut verd oliva. [1]",
        "Al pressupost del 3 de febrer del 2025, el sofà sortia a 7.850 € i cada butaca a 2.150 €, IVA a part. És un preu antic: se'n demana un de nou abans de donar-lo a un client. [2]",
        "Van dir 10 setmanes i van arribar en 14. El teixit es va endarrerir a fàbrica i ens ho van avisar tard, el 28 de març. Amb aquest proveïdor, si el teixit no és d'estoc, comptem 14 setmanes i truquem cada dues setmanes per saber com va. [2]",
        "La regla és general: tot preu de proveïdor es guarda amb la seva data i, passats sis mesos, no el donem a cap client sense tornar-lo a demanar. [3]"
      ],
      fonts: ["prj-005", "obr-003", "dec-004"] },

    { id: "q-sanitaris", text: "Quant ens costen ara un inodor suspès i un lavabo de gama alta?", destacada: false,
      paraules: ["*sanitar", "*inodor", "lavabo", "*cistern", "aixet", "preu", "gama", "costen", "cost", "*grifo", "precio", "cuesta", "cuestan"],
      resposta: [
        "L'última tarifa és de Sanitaris Exemple, del 22 de setembre del 2026, amb el 30 % de descompte que ens fan com a estudi. [1]",
        "Inodor suspès sense brida amb seient de tancament suau: 690 €. Cisterna encastada amb placa: 410 €. Lavabo de sobre taulell en ceràmica mat, de 60 cm: 520 €. [1]",
        "Per a les aixetes, l'últim preu és d'Aixetes Exemple, del 12 de desembre del 2024: monocomandament de lavabo en llautó envellit a 480 € i equip de dutxa encastat a 1.240 €. Aquest preu ja té més de sis mesos, així que es torna a demanar abans de passar-lo a ningú. [2]",
        "El llautó envellit es fa sota comanda i triga 6 setmanes. Els productes antical se'l mengen. [3]"
      ],
      fonts: ["obr-002", "obr-006", "dis-009"] },

    { id: "q-endolls", text: "A quina alçada posem els endolls de capçalera i els mecanismes?", destacada: false,
      paraules: ["*endoll", "*mecanism", "*interruptor", "*alcada", "capcal", "electric", "tauleta", "regat", "*enchuf", "*altura", "cabecero"],
      resposta: [
        "El criteri de l'estudi és posar els endolls de capçalera a 70 cm del terra acabat, per sobre de la tauleta. Interruptors i mecanismes a 105 cm. [1]",
        "Endolls generals a 30 cm. A la cuina, a 110 cm i a 20 cm com a mínim de la pica i dels fogons. [1]",
        "A l'Àtic a Sarrià el client va demanar els de capçalera a 55 cm perquè tenia tauletes baixes. Va quedar a l'acta núm. 4, del 27 de febrer del 2024, i des de llavors preguntem l'alçada de les tauletes abans de fer regates. [2]"
      ],
      fonts: ["dis-010", "prj-002"] },

    { id: "q-banys4", text: "Quins projectes tenen un bany de menys de 4 m² per ensenyar-lo de referència?", destacada: false,
      paraules: ["*quatre", "*metre", "*menys", "petit", "bany", "*referenc", "projecte", "ensenyar", "*cuatro", "*metros", "*menos", "pequeno", "bano"],
      resposta: [
        "N'hi ha quatre. El més petit és el Pis al Born, de 2,9 m²: dutxa a ras, lavabo de 50 cm i inodor suspès. És el més petit que hem fet. [1]",
        "Pis a Gràcia, 3,2 m²: dutxa a ras, porta corredissa encastada i rajola feta a mà verda. [2]",
        "Pis a l'Eixample, 3,6 m²: segon bany, amb dutxa a ras i desguàs lineal. Va ser el primer on ho vam resoldre així. [3]",
        "Casa a la Cerdanya, 3,8 m²: bany de convidats amb banyera curta de 140 cm, per si us demanen banyera en poc espai. [4]"
      ],
      fonts: ["prj-007", "prj-004", "prj-001", "prj-006"] },

    { id: "q-impagament", text: "Què fem si un client no paga?", destacada: true,
      paraules: ["*impag", "*paga", "*pago", "*deut", "cobr", "client", "recordatori", "venciment", "factura", "*deud", "cobrar"],
      resposta: [
        "Això és el que fem a l'estudi, no un procediment legal. Les factures vencen als 15 dies i els passos es compten des del venciment. L'endemà, la Marta comprova que la factura és correcta i que va arribar, i envia un recordatori curt amb la factura adjunta. [1]",
        "Al dia 8, la Clara truca al client: una factura sense pagar sovint és un oblit o un dubte sobre el que es factura. Al dia 15, segon recordatori per escrit, signat per direcció, amb la factura i una data límit. [1]",
        "Al dia 30 s'atura la fase següent, perquè el contracte tipus diu que no comença si l'anterior no està pagada, i ho diem per escrit. Al dia 45 l'expedient passa a l'assessor de l'estudi per a la reclamació formal. Si hi ha obra en marxa, ho decidim amb ell abans d'aturar res. [1]",
        "Els honoraris es cobren per fases (15 %, 20 %, 30 % i 35 %), perquè cap fase quedi per cobrar quan el client ja ha rebut els plànols. [2]"
      ],
      fonts: ["leg-005", "cli-003"] },

    { id: "q-retard", text: "Què posem al contracte si l'obra s'endarrereix?", destacada: false,
      paraules: ["*endarrer", "*retard", "*penalitz", "*contracte", "obra", "termini", "acabament", "clausula", "tard", "*retras", "*penaliz", "*contrato", "plazo"],
      resposta: [
        "Una penalització per cada dia natural de retard sobre la data d'acabament pactada. No és una obligació legal: és una clàusula del model de contracte d'obra de l'estudi, i es negocia amb la constructora abans de signar. [1]",
        "L'import per dia s'acorda a cada obra segons la seva mida i es descompta de l'última certificació. El contracte porta sempre una data d'inici i una d'acabament escrites, mai un mes aproximat. [1]",
        "Queden fora els retards que no són de la constructora: un canvi demanat pel client amb annex signat, un permís que encara no ha arribat, el material que ha de portar el client i les causes que es puguin documentar, com un temporal en una obra exterior. [1]",
        "Amb Constructora Prova no ens ha calgut aplicar-la mai. Mirem el calendari a cada reunió setmanal del dimarts, perquè un retard es veu tres setmanes abans que toqui cobrar. [2]"
      ],
      fonts: ["leg-002", "dec-006"] },

    { id: "q-permis", text: "Quant triga de mitjana el permís d'obres, segons els nostres expedients?", destacada: false,
      paraules: ["*mitjana", "*expedient", "permis", "ajuntament", "tramit", "comunicacio", "triga", "*media", "*tarda", "permiso", "*trig", "llicenc", "licenc"],
      resposta: [
        "Tenim 7 expedients tancats des del 2023. Les 4 comunicacions d'obres van trigar de mitjana 5 setmanes des que es van presentar fins que vam poder començar. Les 3 llicències d'obres majors, 5,5 mesos de mitjana. Els expedients del Dúplex a Sant Gervasi i del Pis a Poblenou encara són oberts i no compten a la mitjana. [1]",
        "La més llarga va ser la de l'Habitatge a Pedralbes, 7 mesos, per un requeriment de l'Ajuntament sobre el forjat que vam rebre l'octubre del 2024. [2]",
        "A Sant Cugat la llicència d'obres majors es va presentar el setembre del 2023 i l'obra va començar a la primavera del 2024. [3]",
        "A Gràcia, la comunicació d'obres es va presentar el desembre del 2024. Són temps nostres, no terminis garantits: a cada obra es consulta quin règim toca. [4]"
      ],
      fonts: ["leg-009", "prj-005", "prj-003", "prj-004"] },

    { id: "q-llicencia", text: "Com demanem el permís d'obres a l'Ajuntament?", destacada: false,
      paraules: ["*permis", "*llicenc", "*ajuntament", "*tramit", "*solicit", "dema", "obres", "assabentat", "comunicat", "dossier", "*licenc", "*ayuntamiento", "pedir", "permiso"],
      resposta: [
        "A Barcelona hi ha més d'un règim municipal per a les obres (assabentat, comunicat i llicència) i quin toca depèn de l'obra. A l'estudi no ho donem per fet mai: a cada encàrrec ho consulta en Pau Exemple abans de dir cap data al client. [1]",
        "Un cop sabem quin toca, en Pau prepara el dossier i fa el seguiment en un full de càlcul d'expedients, actualitzat l'últim cop el 30 de setembre del 2026. No comencem cap obra sense tenir al dossier el document que correspon. [1]",
        "Si l'obra toca elements comuns de l'edifici, abans cal el permís de la comunitat per escrit. Ho mirem a la primera visita. [2]",
        "És la fase 3 de les sis que té un projecte, i la ubiquem al calendari perquè allarga el temps fins que s'hi pot començar. [3]"
      ],
      fonts: ["leg-009", "leg-010", "pro-001"] },

    { id: "q-comunitat", text: "Quan cal el permís de la comunitat de veïns per fer obres?", destacada: false,
      paraules: ["*comunitat", "*veins", "*finca", "*administrador", "*junta", "*comuns", "facana", "obres", "*comunidad", "*vecin", "fachada"],
      resposta: [
        "Quan l'obra toca elements comuns de l'edifici: façana, patis de llums, baixants, coberta, escala o ascensor. A l'estudi ho mirem a la primera visita. [1]",
        "Demanem el permís per escrit a l'administrador de la finca, amb una descripció curta i un plànol, abans de començar. Si s'ha de votar en junta, ho diem al client des del primer dia, perquè allarga el calendari. [1]",
        "A l'Eixample, la galeria donava al pati de llums i va caldre el vistiplau de la comunitat. La junta ho va aprovar tres setmanes després de la petició. [2]",
        "Els horaris de soroll es pengen al tauler de l'escala abans de la primera setmana d'obra. [1]"
      ],
      fonts: ["leg-010", "prj-001"] },

    { id: "q-fotos", text: "Podem publicar les fotos de la casa d'un client?", destacada: false,
      paraules: ["*foto", "*public", "*fotograf", "*xarxes", "*instagram", "premsa", "client", "casa", "*redes", "prensa"],
      resposta: [
        "Només amb el permís del client per escrit. A l'estudi no en pengem cap, ni a la web ni a les xarxes ni a premsa, sense el full de permís signat. [1]",
        "El full diu quines fotos són, on es publiquen i si hi surt res personal, com quadres, fotos de família o la placa del nom. No posem mai l'adreça: com a molt, el barri. Si un client ens demana treure una foto, la traiem. [1]",
        "A Gràcia, l'Anna i en Roger Prova ens van signar el permís el 12 de setembre del 2025 per a les fotos del bany, sense l'adreça. [2]",
        "El full de permís d'imatges és un dels annexos del contracte tipus. [3]"
      ],
      fonts: ["leg-006", "cli-006", "leg-001"] },

    { id: "q-iva", text: "Quan podem aplicar l'IVA del 10 % a una reforma?", destacada: false,
      paraules: ["*iva", "*gestoria", "*reduit", "*impost", "reforma", "aplicar", "*impuest", "*reducid"],
      resposta: [
        "L'IVA del 10 % en obres de reforma d'habitatge el factura qui executa l'obra, no l'estudi. Demana tres coses: que el client sigui un particular que fa servir l'habitatge o una comunitat de propietaris, que faci dos anys com a mínim que l'habitatge es va acabar de construir o de rehabilitar, i que qui fa l'obra no hi posi materials per més del 40 % de la base. [1]",
        "Els honoraris de l'estudi van sempre al 21 %. [1]",
        "Abans d'aplicar-lo a res, ho confirmem amb la gestoria. Ho preguntem per escrit, amb l'adreça i la data d'acabat de l'habitatge, i guardem la resposta a la carpeta de l'obra. [1]",
        "Les factures d'honoraris les emet la Marta, i les de l'obra les envien la constructora i els industrials al client directament. [2]"
      ],
      fonts: ["leg-013", "pro-010"] },

    { id: "q-honoraris", text: "Com es calculen els honoraris d'un encàrrec?", destacada: false,
      paraules: ["*honorari", "*calcul", "*quota", "fase", "*percentatge", "*proposta", "cobrem", "*porcentaj", "cobramos"],
      resposta: [
        "Cada encàrrec té una proposta d'honoraris d'unes quatre pàgines, signada per la Clara, amb el que hem entès del cas, què inclou cada fase, què queda fora i el pla de pagaments. Valida 30 dies. [1]",
        "El pagament va lligat a quatre fites: el 15 % en signar el contracte, el 20 % en entregar l'anteprojecte, el 30 % amb el projecte executiu i el 35 % restant durant l'obra, en una factura al mes. [2]",
        "Les fases són sempre les mateixes, de la primera visita a la postvenda. El que canvia d'un encàrrec a un altre és l'abast i el temps de cada una, no l'ordre. [3]",
        "Els honoraris van separats de l'obra. Si el client vol que li portem també la constructora, li ho expliquem per escrit: nosaltres dirigim, no som la constructora. [1]"
      ],
      fonts: ["cli-002", "cli-003", "pro-001"] },

    { id: "q-canvis", text: "Què fem si el client demana un canvi gran a mitja obra?", destacada: false,
      paraules: ["*canvi", "*canviar", "*modific", "annex", "mitja", "demana", "*cambi", "anexo", "pide"],
      resposta: [
        "No s'executa res fins que hi ha un annex signat. Apuntem el que demana el client amb les seves paraules, mirem si ja està comprat, fabricat o instal·lat, demanem preu per escrit a l'industrial i fem l'annex. [1]",
        "L'annex és d'una pàgina: què es canvia, un plànol o una foto, el cost amb IVA, els dies que afecta al termini i la data. El signen el client i la constructora abans que s'executi res. [2]",
        "Si el canvi toca una cosa ja comprada o fabricada, parem la partida afectada. Al client li expliquem en una pàgina quant costa, quants dies afegeix i quina alternativa més barata hi ha. [3]",
        "La norma ve de Sant Cugat: el setembre del 2024 el client va demanar de paraula allargar l'illa de la cuina 40 cm, el plànol de taller ja estava aprovat i es van perdre tres setmanes. Un missatge de mòbil no val com a prova, i l'acta tampoc, perquè no la signa el client. [4]"
      ],
      fonts: ["pro-005", "leg-004", "cli-005", "dec-003"] },

    { id: "q-constructores", text: "Amb quines constructores treballem i per què?", destacada: false,
      paraules: ["*constructor", "*contractista", "*industrial", "agenda", "reformes", "treball", "*contratista", "trabajamos"],
      resposta: [
        "Treballem amb dues: Constructora Prova S.L. per a obres grans i Reformes Mostra S.C.P. per a pisos petits. Les proposem al client i és el client qui contracta. Les vam triar perquè coneixen els nostres plànols, compleixen els terminis que diuen, accepten la reunió setmanal i la retenció del 5 %. [1]",
        "Constructora Prova ha fet l'Eixample, Sant Cugat, Pedralbes, la Cerdanya i ara Sant Gervasi, i porta bé l'estructura, els enderrocs i la coordinació de la resta d'industrials. El problema és l'agenda: no pot començar res abans del març del 2027, i per això la decisió està en revisió. [2]",
        "Reformes Mostra són quatre persones. Han fet Sarrià, Gràcia, el Born i ara Poblenou, i un bany de 3 m² el tenen enllestit en tres setmanes. No tenen mans per a una obra de més de 120 m² ni per a estructura. [3]",
        "Les instal·lacions de tots els projectes les fa Instal·lacions Demo S.L., amb una constructora o l'altra. Deixen fotos de cada recorregut abans de tancar i entreguen el butlletí elèctric. [4]"
      ],
      fonts: ["dec-007", "obr-008", "obr-009", "obr-010"] },

    { id: "q-garanties", text: "Quines garanties té el client quan lliurem l'obra?", destacada: false,
      paraules: ["*garanti", "*defect", "*habitabilitat", "*estructura", "loe", "client", "lliur"],
      resposta: [
        "La LOE fixa responsabilitats d'1 any per acabats, 3 anys per defectes que afecten l'habitabilitat i 10 anys per estructura. [1]",
        "A l'estudi comptem els terminis des de la data de l'acta de recepció i ho deixem escrit a la carpeta d'entrega. Als 12 mesos fem la visita de garantia: ho vam fer a l'Eixample el 22 de novembre del 2024 i a l'Àtic a Sarrià el 14 de març del 2025. [1]",
        "Els fabricants tenen la seva pròpia garantia, a part. Les còpies de les garanties i dels manuals van a la carpeta d'entrega perquè el client no les hagi de buscar. [1]",
        "Al nostre contracte d'obra hi ha a més una retenció del 5 % de cada certificació fins a l'acta de recepció. No és una obligació legal: és una clàusula nostra perquè els repassos es tanquin. [2]"
      ],
      fonts: ["leg-011", "leg-003"] },

    { id: "q-tancar", text: "Com es tanca una obra, pas a pas?", destacada: true,
      paraules: ["*tanc", "*recepci", "*repass", "obra", "retencio", "sobrant", "*cerrar", "*cierr", "*repaso"],
      resposta: [
        "Una obra no es dona per tancada fins que es fan vuit passos, en aquest ordre: llista de repassos, prova final de les instal·lacions, neteja, carpeta d'entrega, sobrants, acta de recepció, retenció i visita de garantia. [1]",
        "Primer, visita amb la constructora habitació per habitació, amb cada repàs en foto i amb data límit. Després, prova de llum, aigua, extracció i climatització, i Instal·lacions Demo lliura el butlletí elèctric. La neteja final la fa la constructora i la revisem amb llum natural. [1]",
        "Un 5 % de cada paviment i rajola, etiquetat, va al traster del client. L'acta de recepció la signen el client, la constructora i l'estudi, i des d'aquesta data comptem les garanties. La retenció del 5 % s'allibera quan els repassos de l'acta estan tancats. [2]",
        "L'últim pas és la visita de garantia, als 12 mesos, a casa del client. A Pedralbes l'acta de recepció es va signar el 30 de maig del 2025. [1]"
      ],
      fonts: ["pro-007", "leg-003"] },

    { id: "q-entrega", text: "Què li donem al client quan acabem l'obra?", destacada: false,
      paraules: ["*entreg", "client", "*acabem", "*acabar", "*carpeta", "documentacio", "donem", "manual", "*acabamos", "damos"],
      resposta: [
        "Al client li donem una carpeta en paper i la mateixa en digital. [1]",
        "Hi ha els plànols tal com s'ha construït, amb el recorregut de les instal·lacions, i la llista d'acabats amb la referència, el color i el proveïdor de cada un. [1]",
        "També hi van les garanties i els manuals d'electrodomèstics, aixetes i climatització, i el butlletí elèctric. Hi afegim les instruccions de manteniment de la pedra i la fusta. [1]",
        "Deixem al traster un 5 % de cada paviment i rajola, etiquetat. Amb la signatura de l'acta de recepció comença a comptar la visita de garantia, que fem als 12 mesos. [2]"
      ],
      fonts: ["pro-007", "leg-011"] },

    { id: "q-equip", text: "Qui fa què a l'estudi i a qui he de preguntar cada cosa?", destacada: false,
      paraules: ["*equip", "*estudi", "*tasca", "*responsable", "*organigrama", "*pregunt", "*persones", "*quien", "*equipo"],
      resposta: [
        "Som set. La Clara dirigeix i signa contractes i propostes. En Pau porta projectes i llicències, i la Núria porta l'interiorisme: acabats, mostres i mobiliari. [1]",
        "L'obra és d'en Jordi, cap d'obra, amb l'Oriol als amidaments i al seguiment. La Laia fa els plànols i porta el servidor, i la Marta porta l'administració, la facturació i els accessos. [1]",
        "Un dubte d'un acabat va a la Núria. Un de preu o de termini d'un proveïdor, a l'Oriol. Un de llicència, a en Pau. Un de cobrament, a la Marta. I tot el que no estigui decidit, a la Clara. [1]",
        "En Jordi és a l'obra tots els dimarts. Si necessites alguna cosa d'ell, deixa-ho escrit abans de dilluns a les 18. [2]"
      ],
      fonts: ["eqp-001", "eqp-003"] },

    { id: "q-vacances", text: "Com funcionen les vacances i el teletreball?", destacada: false,
      paraules: ["*vacanc", "*vacacion", "*teletreball", "*horari", "*calendari", "*remot", "*teletrabaj"],
      resposta: [
        "Les vacances s'apunten al calendari compartit abans del 31 de març. No poden coincidir més de dues persones i no es poden agafar en setmana de lliurament. L'estudi tanca les dues primeres setmanes d'agost. [1]",
        "L'horari és de 9 a 18, amb una hora per dinar, i els divendres plegem a les 15. Si necessites un dia per un tràmit o per anar al metge, avisa la Marta i apunta-ho al calendari. [1]",
        "L'equip d'oficina pot fer fins a dos dies de teletreball per setmana, mai el dimarts ni els dies de lliurament. Fins al setembre del 2025 era només un dia. [2]",
        "La decisió dels dos dies va ser del 22 de setembre del 2025 i va substituir la regla d'un sol dia. [3]"
      ],
      fonts: ["eqp-005", "eqp-006", "dec-009"] },

    { id: "q-acollida", text: "Acabo d'entrar a l'estudi: per on començo?", destacada: true,
      paraules: ["*acabo", "*entrar", "*entro", "*comenc", "*primer", "*acolli", "*incorpor", "*novell", "*empiez", "*empez", "*nuev"],
      resposta: [
        "El primer dia no s'espera res de tu. A les 9 la Marta et dona la targeta d'accés i el portàtil, a les 10 la Laia t'obre els accessos, i a les 11 tens mitja hora amb la Clara. A la tarda, a llegir. [1]",
        "Comença pel full de qui és qui: som set i cada tipus de dubte té una persona. Acabats, a la Núria; preus i terminis de proveïdors, a l'Oriol; llicències, a en Pau; cobraments, a la Marta. [2]",
        "Després, les sis fases d'un projecte, de la primera visita a la postvenda. Totes les obres passen pel mateix camí, tinguin 50 o 250 m². [3]",
        "El primer mes tens acompanyament: una obra amb en Jordi i una visita de client amb en Pau o la Núria. L'últim dijous de cada mes hi ha una sessió interna on algú explica un projecte tancat. [4]"
      ],
      fonts: ["eqp-004", "eqp-001", "pro-001", "eqp-010"] },

    /* Va l'última perquè, en cas d'empat de punts, guanyin les preguntes més concretes de dalt. */
    { id: "q-acabats", text: "Com hem fet els últims banys i quins acabats hi vam posar?", destacada: true,
      paraules: ["*acabat", "*material", "*bany", "*lavabo", "resol", "utilitz", "servir", "posa", "ultim", "*acabad", "*bano", "hicimos", "hecho"],
      resposta: [
        "Al Pis a Gràcia, del 2025, el bany de 3,2 m² porta rajola feta a mà de color verd a les parets, dutxa d'obra a ras de terra i porta corredissa encastada. [1]",
        "A l'Habitatge a Pedralbes, del 2025, el bany principal és de marbre blanc de veta grisa, amb el lavabo tallat de la mateixa pedra i aixetes de llautó envellit. [2]",
        "Al Pis al Born, del 2025, porcellànic gris a terra, mampara fixa de vidre sense perfil, lavabo de 50 cm i inodor suspès. [3]",
        "El microciment de l'Àtic a Sarrià no el repetim dins la dutxa. Allà ara fem porcellànic o pedra. [4]"
      ],
      fonts: ["prj-004", "prj-005", "prj-007", "dec-001"] }
  ],

  acollida: {
    titol: "Acabes d'arribar a l'estudi",
    intro: "Aquest és el camí que fem fer a una persona nova. No cal llegir-ho tot: cada pas té el seu full i només hi ha una cosa que fer cada vegada.",
    passos: [
      { quan: "Primer dia", titol: "Targeta, portàtil i accessos", text: "La Marta et dona la targeta i el portàtil, i la Laia t'obre el servidor i els programes. Cap contrasenya s'apunta en cap paper.", ref: "eqp-004" },
      { quan: "Primer dia", titol: "Qui és qui", text: "Som set. Mira de memòria només això: acabats a la Núria, proveïdors a l'Oriol, llicències a en Pau, cobraments a la Marta.", ref: "eqp-001" },
      { quan: "Primer dia", titol: "Mitja hora amb la Clara", text: "Què fem, com ho fem i què no es discuteix. Pots preguntar el que vulguis.", ref: "eqp-002" },
      { quan: "Primera setmana", titol: "Les sis fases d'un projecte", text: "De la primera visita a la postvenda. Tots els encàrrecs passen pel mateix ordre, siguin de 50 o de 250 m².", ref: "pro-001" },
      { quan: "Primera setmana", titol: "Un dimarts a l'obra", text: "Acompanya en Jordi a la reunió d'obra. Mira com fa l'acta i com es parla amb la constructora.", ref: "dec-006" },
      { quan: "Primera setmana", titol: "Horari, vacances i teletreball", text: "De 9 a 18, divendres fins a les 15. Fins a dos dies de teletreball, mai el dimarts.", ref: "eqp-005" },
      { quan: "Primera setmana", titol: "Les tres regles que no es toquen", text: "Cap encàrrec sense contracte signat, cap canvi sense annex signat i cap acabat sense mostra signada.", ref: "dec-003" },
      { quan: "Primer mes", titol: "Els acabats que repetim i els que no", text: "Llegeix la història del microciment: és la manera més ràpida d'entendre com decidim a l'estudi.", ref: "dec-001" },
      { quan: "Primer mes", titol: "Preus amb data", text: "Tot preu de proveïdor va amb la seva data i, passats sis mesos, es torna a demanar.", ref: "dec-004" },
      { quan: "Primer mes", titol: "Una sessió interna", text: "L'últim dijous de cada mes una persona explica un projecte tancat. El primer mes, només cal escoltar.", ref: "eqp-010" }
    ]
  }
};
