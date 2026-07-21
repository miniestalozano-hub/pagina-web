/* eslint-disable no-undef */
/* ================= Datos completos del catálogo TMI 2024 =================
   Fuente: CATÁLOGO TMI 2024 (Talleres M. Iniesta SL) */

const IMG = {
  hero:        "https://talleresiniesta.es/wp-content/uploads/2024/01/fabricacion-piezas.jpg",
  fabricacion: "https://talleresiniesta.es/wp-content/uploads/2024/01/fabricacion-piezas.jpg",
  herrajes:    "https://talleresiniesta.es/wp-content/uploads/2024/01/herrajes-de-hormigon-a-medida.png",
  logo:        "https://talleresiniesta.es/wp-content/uploads/2024/01/Talleres-Iniesta-blanco.png",
  cat_paneles: "https://talleresiniesta.es/wp-content/uploads/2024/01/Angulo-75x100x100x10.png",
  cat_dentadas:"https://talleresiniesta.es/wp-content/uploads/2024/02/categoria-escuadras-dentadas.webp",
  cat_anclajes:"https://talleresiniesta.es/wp-content/uploads/2024/02/Categoria-anclajes-ocultos.webp",
  cat_correas: "https://talleresiniesta.es/wp-content/uploads/2024/02/sujecion-de-correas-vigas-delta.webp",
  cat_placas:  "https://talleresiniesta.es/wp-content/uploads/2024/02/Categoria-placas-de-anclaje-150x150.webp",
  cat_canalon: "https://talleresiniesta.es/wp-content/uploads/2024/02/sujecion-de-canalon-y-otros-150x150.webp",
  // Piezas
  guia:        "https://talleresiniesta.es/wp-content/uploads/2024/02/Screenshot_258.png",
  tornillo:    "https://talleresiniesta.es/wp-content/uploads/2024/02/Tornilleria.webp",
  escuadra50:  "https://talleresiniesta.es/wp-content/uploads/2024/10/Screenshot_297.png",
  anguloColiso:"https://talleresiniesta.es/wp-content/uploads/2024/10/Screenshot_290.png",
  bayoneta:    "https://talleresiniesta.es/wp-content/uploads/2024/10/Screenshot_266.png",
  esc150x100:  "https://talleresiniesta.es/wp-content/uploads/2024/02/Escuadra-150x150x100x10.webp",
  esc150x80:   "https://talleresiniesta.es/wp-content/uploads/2024/02/Escuadra-150x150x80x8-con-cartela.webp",
  esc200x100:  "https://talleresiniesta.es/wp-content/uploads/2024/01/Talleres-Iniesta-Escuadra-200x100x80x8.png",
  angulo:      "https://talleresiniesta.es/wp-content/uploads/2024/01/Angulo-75x100x100x10.png"
};

const CERTIFICATIONS = ["Marcado CE 1239", "EN 1090-1:2009+A1:2011", "Tecnalia Certification", "Bureau Veritas WPQR"];

const COMPANY = {
  name: "Talleres M. Iniesta SL",
  address: "C/ Baco 22, Pol. Ind. de Fortuna, Murcia, 30620",
  phone: "629 747 960",
  email: "iniesta@talleresiniesta.es",
  orders: "pedidos@talleresiniesta.es",
  years: 40,
  specialized: 30,
  linkedin: "https://es.linkedin.com/company/talleres-m-iniesta",
  whatsapp: "https://wa.me/34629747960"
};

/* ---------------- Definición de piezas ----------------
   Cada pieza tiene: id, name, code, shape (mapea al visor 3D),
   img, short, lead, desc[], features[], accordion data, whatTitle/whatBody */
function pieceBase(o) {
  return Object.assign({
    features: [],
    desc: [],
    sistema: null,
    materiales: null,
    dimensiones: null,
    instrucciones: null,
    whatTitle: '¿Qué es esta pieza?',
    whatBody: []
  }, o);
}

const DATA = {
  paneles: {
    title: "Fijaciones Antivuelco",
    subtitle: "Retención de fachadas · Sujeción de paneles",
    eyebrow: "Catálogo · Sistema Antivuelco",
    hero: IMG.cat_paneles,
    intro: "Guías perfil 40/22, tornillería TCA M-12 y M-16, bayonetas, ángulos de montaje, anclajes ocultos y escuadras con refuerzo. Todo para la fijación segura de paneles de hormigón prefabricado.",
    pieces: [
      pieceBase({ id:"guia-4022", name:"Guía Perfil 40/22", code:"GUIA-240 / GUIA-500", shape:"channel", img:IMG.guia,
        short:"Perfil de canal 40x22 embebido en el panel.",
        lead:"Guía perfil 40/22 embebida en el panel para alojar la tornillería de sujeción de forma deslizante.",
        desc:[
          "La <strong>guía perfil 40/22</strong> se hormigona embebida en el panel prefabricado durante su fabricación. Su geometría en canal permite alojar los tornillos TCA de cabeza de martillo, que quedan retenidos y pueden desplazarse a lo largo del perfil.",
          "Este sistema permite <strong>regular la posición</strong> de la fijación en obra sin necesidad de taladrar sobre el hormigón, garantizando una unión limpia, segura y reversible entre el panel y la estructura portante."
        ],
        features:[
          ["Referencia","GUIA-240 / GUIA-500"],
          ["Perfil","40 x 22 mm"],
          ["Longitudes","Hasta 2000 mm"],
          ["Material","Acero laminado S235JR"],
          ["Acabado","Zincado electrolítico"],
          ["Tornillería compatible","TCA M-12 y M-16"],
          ["Carga admisible","Hasta 8 KN"]
        ],
        sistema:[
          "La guía forma parte del <strong>sistema antivuelco</strong> junto con los tornillos TCA, arandelas dentadas y escuadras de sujeción.",
          "Se instala en la fase de fabricación del panel, embebida en el hormigón, dejando accesible únicamente la ranura para la tornillería."
        ],
        materiales:[
          "<strong>Cuerpo:</strong> acero laminado en frío S235JR según EN 10025-2.",
          "<strong>Acabado:</strong> zincado electrolítico según EN ISO 2081.",
          "<strong>Tapas de cierre:</strong> plástico para evitar la entrada de hormigón durante el hormigonado."
        ],
        dimensiones:[
          "<strong>Sección:</strong> 40 x 22 mm.",
          "<strong>Longitudes estándar:</strong> 240 mm y 500 mm. Fabricación hasta 2000 mm bajo pedido.",
          "<strong>Espesor de acero:</strong> 2,5 mm."
        ],
        instrucciones:[
          "Fije la guía a la armadura del panel en la posición prevista antes del hormigonado, cuidando de mantener la ranura hacia el encofrado exterior.",
          "Coloque las tapas plásticas de cierre para evitar que entre lechada de hormigón dentro de la guía.",
          "Tras el desencofrado retire las tapas e introduzca los tornillos TCA en la posición requerida, girando 90° para bloquearlos."
        ],
        whatTitle:"¿QUÉ ES LA GUÍA PERFIL 40/22?",
        whatBody:[
          "La guía perfil 40/22 <strong>es un canal de acero laminado</strong> que se hormigona embebido en el panel prefabricado. Su geometría permite introducir tornillos de cabeza de martillo que quedan retenidos y pueden desplazarse a lo largo del perfil.",
          "Este sistema permite <strong>regular la posición</strong> de la fijación en obra sin necesidad de taladrar, garantizando una unión limpia y segura entre el panel y la estructura."
        ]
      }),
      pieceBase({ id:"tornillo-tca", name:"Tornillo TCA (M-12 / M-16)", code:"TCA-12 / TCA-16", shape:"bolt", img:IMG.tornillo,
        short:"Tornillo de cabeza de martillo para guía 40/22.",
        lead:"Tornillería especial TCA de cabeza de martillo templada, elemento de conexión entre la guía y la escuadra.",
        desc:[
          "El <strong>tornillo TCA</strong> (Tornillo Cabeza de Ala) es el elemento de conexión entre la guía perfil 40/22 y las escuadras, bayonetas o ángulos de sujeción.",
          "Se fabrica en acero templado clase 8.8 con acabado zincado electrolítico. Se suministra completo con tuerca, arandela dentada y sellado antihumedad."
        ],
        features:[
          ["Referencia","TCA-12 / TCA-16"],
          ["Métrica","M-12 y M-16"],
          ["Longitudes","M-12x40 hasta M-16x80"],
          ["Material","Acero templado clase 8.8"],
          ["Acabado","Zincado electrolítico + sellado"],
          ["Carga admisible","27 KN (M-12) / 50 KN (M-16)"]
        ],
        sistema:["Elemento fundamental del sistema de fijación en <strong>guía perfil 40/22</strong>. Se introduce en la guía y se gira 90° para bloquearse."],
        materiales:["<strong>Cuerpo:</strong> acero templado y revenido calidad 8.8, según EN ISO 898-1.","<strong>Acabado:</strong> zincado electrolítico + sellado antihumedad."],
        dimensiones:["<strong>Métricas:</strong> M-12 y M-16.","<strong>Longitudes:</strong> desde 40 mm hasta 80 mm.","<strong>Cabeza:</strong> rectangular tipo martillo, diseñada para la guía 40/22."],
        instrucciones:["Introduzca el tornillo con la cabeza alineada con la ranura de la guía.","Gire 90° para bloquear la cabeza dentro del canal.","Apriete la tuerca al par indicado en el proyecto (recomendado 60 Nm para M-12, 120 Nm para M-16)."],
        whatTitle:"¿QUÉ ES LA TORNILLERÍA TCA?",
        whatBody:[
          "Es un <strong>tornillo con cabeza rectangular</strong> que se introduce y gira 90° dentro de la guía perfil, quedando retenido en su interior.",
          "Permite fijar herrajes en cualquier punto del perfil <strong>sin necesidad de taladrar</strong>, con total libertad de posicionamiento y capacidad de reajuste en obra."
        ]
      }),
      pieceBase({ id:"bayoneta", name:"Bayoneta", code:"B120358 – B250358", shape:"bayoneta", img:IMG.bayoneta,
        short:"Anclaje antivuelco 35x8 mm.",
        lead:"Bayoneta antivuelco para la fijación provisional y definitiva de paneles verticales.",
        desc:[
          "La <strong>bayoneta</strong> es una pletina plegada de 35x8 mm que absorbe los esfuerzos horizontales del panel durante el montaje y en su vida útil, evitando el basculamiento.",
          "Fabricada en acero S275JR con acabado cincado electrolítico. Disponible en varias longitudes (120 a 250 mm) codificadas mediante la referencia."
        ],
        features:[
          ["Referencia","B120358 – B250358"],
          ["Sección","35 x 8 mm"],
          ["Longitudes","120, 150, 200, 250 mm"],
          ["Material","Acero S275JR"],
          ["Acabado","Cincado electrolítico"],
          ["Carga admisible","10 KN"]
        ],
        sistema:["Trabaja solidariamente con la guía perfil 40/22 y el tornillo TCA. Restringe el vuelco del panel en su borde superior."],
        materiales:["<strong>Cuerpo:</strong> acero S275JR laminado en caliente, EN 10025-2.","<strong>Acabado:</strong> cincado electrolítico según EN ISO 2081."],
        dimensiones:["<strong>Sección:</strong> 35 x 8 mm.","<strong>Longitudes:</strong> 120, 150, 200 y 250 mm.","<strong>Taladro:</strong> Ø13 mm para tornillo M-12."],
        instrucciones:["Introduzca el tornillo TCA en la guía y monte la bayoneta sobre él.","Oriente la bayoneta hacia el punto de anclaje en la estructura portante.","Apriete la tuerca con arandela dentada al par indicado."],
        whatTitle:"¿QUÉ ES LA BAYONETA?",
        whatBody:["Es una <strong>pletina plegada de acero</strong> que actúa como brazo de sujeción antivuelco del panel. Se fija por un extremo al panel mediante tornillo TCA y por el otro a la estructura.","Es el elemento habitual para <strong>arriostrar la parte alta</strong> del panel frente a las cargas de viento."]
      }),
      pieceBase({ id:"bayoneta-fresada", name:"Bayoneta Fresada", code:"BF120358 – BF250358", shape:"bayoneta_fresada", img:IMG.bayoneta,
        short:"Bayoneta con dentado antideslizante.",
        lead:"Versión fresada de la bayoneta, con dentado antideslizante en la zona de contacto.",
        desc:["Idéntica a la bayoneta estándar pero con la cara de contacto <strong>fresada con dentado</strong> que engrana con la arandela dentada, garantizando la ausencia de deslizamiento tras el apriete."],
        features:[["Referencia","BF120358 – BF250358"],["Sección","35 x 8 mm"],["Longitudes","120 – 250 mm"],["Material","Acero S275JR"],["Acabado","Zincado electrolítico"],["Extra","Dentado antideslizante"],["Carga admisible","10 KN"]],
        sistema:["Se instala igual que la bayoneta estándar pero garantiza <strong>bloqueo mecánico</strong> por engrane entre dentados."],
        materiales:["<strong>Cuerpo:</strong> S275JR con superficie fresada.","<strong>Acabado:</strong> zincado electrolítico."],
        dimensiones:["<strong>Sección:</strong> 35 x 8 mm.","<strong>Dentado:</strong> paso 3 mm en la zona de apoyo."],
        instrucciones:["Combine siempre con una <strong>arandela dentada</strong> del mismo paso.","Al apretar la tuerca, los dentados engranan e impiden el deslizamiento."],
        whatTitle:"¿QUÉ ES LA BAYONETA FRESADA?",
        whatBody:["Es una <strong>bayoneta con dentado</strong> mecanizado en su superficie de contacto, para bloquear la unión frente a deslizamientos por vibración o cargas cíclicas."]
      }),
      pieceBase({ id:"anclaje-oculto", name:"Anclaje Oculto", code:"AOCULTO-10 / AOCULTO-35", shape:"anclaje", img:IMG.cat_anclajes,
        short:"Retención oculta embebida en el panel.",
        lead:"Anclaje embebido en el hormigón sin elementos vistos en la cara exterior del panel.",
        desc:["El <strong>anclaje oculto</strong> se embebe totalmente en el espesor del panel, ofreciendo una fijación resistente sin herrajes visibles en la fachada."],
        features:[["Referencia","AOCULTO-10 / AOCULTO-35 / a medida"],["Sección","50 x 10 mm / 3 mm chapa"],["Material","S275JR / S235JR / redondo B500S"],["Acabado","Zincado electrolítico"],["Carga admisible","18 KN"]],
        sistema:["Alternativa a la fijación con guía + tornillo cuando la estética del panel exige que <strong>no se vean herrajes</strong>."],
        materiales:["<strong>Placa:</strong> S275JR o S235JR.","<strong>Barras corrugadas:</strong> B500S soldadas a la placa.","<strong>Acabado:</strong> zincado electrolítico."],
        dimensiones:["<strong>Placa:</strong> 50x10 mm.","<strong>Chapa auxiliar:</strong> 3 mm.","<strong>Fabricación:</strong> a medida según espesor del panel (12, 14, 16 cm o especial)."],
        instrucciones:["Coloque el anclaje embebido en la armadura del panel antes del hormigonado.","Compruebe la orientación y el recubrimiento mínimo antes de verter el hormigón."],
        whatTitle:"¿QUÉ ES EL ANCLAJE OCULTO?",
        whatBody:["Es un <strong>herraje que queda embebido</strong> en el espesor del panel de hormigón, transmitiendo las cargas a la estructura sin aparecer en la cara vista.","Ofrece un <strong>acabado limpio</strong> muy valorado en arquitectura de hormigón prefabricado."]
      }),
      pieceBase({ id:"angulo-montaje", name:"Ángulo Montaje 100x10", code:"AM-100x10", shape:"bracket", img:IMG.angulo,
        short:"Ángulo de sujeción antivuelco 100x10.",
        lead:"Ángulo de montaje estándar 100x10 para anclaje antivuelco de paneles.",
        desc:["Ángulo en L de <strong>100 x 10 mm</strong> para la sujeción del panel a la estructura mediante tornillería TCA."],
        features:[["Referencia","AM-100x10"],["Dimensiones","100 x 10 mm"],["Material","S275JR"],["Acabado","Cincado electrolítico"],["Carga admisible","10 KN"]],
        sistema:["Trabaja unido a la guía perfil 40/22 mediante tornillo TCA. Su segunda ala se fija al pilar o forjado."],
        materiales:["<strong>Cuerpo:</strong> acero S275JR plegado.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Ala vertical:</strong> 100 mm.","<strong>Ala horizontal:</strong> 100 mm.","<strong>Espesor:</strong> 10 mm."],
        instrucciones:["Fije un extremo con tornillo TCA a la guía del panel.","Fije el otro extremo al pilar mediante taco químico o mecánico."],
        whatTitle:"¿QUÉ ES EL ÁNGULO DE MONTAJE?",
        whatBody:["Es una <strong>escuadra en L de 100x10 mm</strong> que sirve de conexión rígida entre el panel y la estructura vertical."]
      }),
      pieceBase({ id:"angulo-coliso", name:"Ángulo Montaje Coliso 100x10", code:"AMC-100x10", shape:"bracket_coliso", img:IMG.anguloColiso,
        short:"Ángulo con coliso de regulación.",
        lead:"Ángulo de montaje con coliso para absorber tolerancias en obra.",
        desc:["Variante del ángulo de montaje con <strong>coliso ovalado</strong> en una de sus alas para regular la posición del tornillo y absorber las tolerancias de obra."],
        features:[["Referencia","AMC-100x10"],["Dimensiones","100 x 100 x 10 mm"],["Coliso","Regulación integrada"],["Material","S275JR"],["Acabado","Cincado electrolítico"],["Carga admisible","9 KN"]],
        sistema:["Se emplea cuando la <strong>tolerancia de la estructura</strong> no permite el uso del ángulo estándar."],
        materiales:["<strong>Cuerpo:</strong> S275JR con coliso mecanizado.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Ala vertical:</strong> 100 mm.","<strong>Ala horizontal:</strong> 100 mm.","<strong>Coliso:</strong> ranura oval 15x30 mm."],
        instrucciones:["Presente el ángulo en obra y ajuste la posición del tornillo TCA a lo largo del coliso.","Apriete con arandela dentada para asegurar el bloqueo por rozamiento."],
        whatTitle:"¿QUÉ ES EL ÁNGULO CON COLISO?",
        whatBody:["Es un <strong>ángulo con ranura ovalada</strong> que permite regular la posición del tornillo dentro del propio ángulo, muy útil cuando existen tolerancias entre el panel y la estructura."]
      }),
      pieceBase({ id:"escuadra-refuerzo", name:"Escuadra con Refuerzo", code:"E150 – E300", shape:"escuadra_cartela", img:IMG.esc150x80,
        short:"Escuadras 50x8 / 60x8 con cartela.",
        lead:"Escuadra de sujeción con cartela soldada para aumentar la capacidad de carga.",
        desc:["Escuadras estándar de <strong>50x8 y 60x8 mm</strong> con cartela triangular soldada, para uniones sometidas a momentos elevados."],
        features:[["Referencia","E150 – E300"],["Sección","50x8 / 60x8 mm"],["Refuerzo","Cartela soldada"],["Material","S275JR"],["Acabado","Zincado electrolítico + sellado"],["Carga admisible","5 – 7,5 KN"]],
        sistema:["Se emplea en <strong>uniones sometidas a momentos</strong>, donde la escuadra simple no basta."],
        materiales:["<strong>Cuerpo:</strong> S275JR.","<strong>Cartela:</strong> soldada según procedimiento homologado Bureau Veritas.","<strong>Acabado:</strong> zincado electrolítico + sellado."],
        dimensiones:["<strong>Secciones:</strong> 50x8 y 60x8 mm.","<strong>Longitudes:</strong> desde 150 hasta 300 mm."],
        instrucciones:["Compruebe que la cartela queda en la cara de compresión de la unión.","Apriete la tornillería al par especificado en el proyecto."],
        whatTitle:"¿QUÉ ES LA ESCUADRA CON REFUERZO?",
        whatBody:["Es una escuadra estándar a la que se le suelda una <strong>cartela triangular</strong> que aumenta su inercia y capacidad frente a flexión."]
      }),
      pieceBase({ id:"escuadra-50x8", name:"Escuadra 50x8", code:"E50-8", shape:"escuadra", img:IMG.escuadra50,
        short:"Escuadra compacta 50x8.",
        lead:"Escuadra compacta de sección 50x8 para uniones auxiliares.",
        desc:["<strong>Escuadra en L de 50x8 mm</strong> para uniones ligeras y remates de fachada."],
        features:[["Referencia","E50-8"],["Sección","50 x 8 mm"],["Material","S275JR"],["Acabado","Zincado electrolítico"]],
        sistema:["Se emplea en <strong>uniones auxiliares</strong> y elementos de remate donde el ángulo estándar es excesivo."],
        materiales:["<strong>Cuerpo:</strong> S275JR laminado en caliente.","<strong>Acabado:</strong> zincado electrolítico."],
        dimensiones:["<strong>Sección:</strong> 50 x 8 mm.","<strong>Longitudes:</strong> a medida."],
        instrucciones:["Coloque la escuadra en la posición prevista y fije con la tornillería TCA correspondiente."],
        whatTitle:"¿QUÉ ES LA ESCUADRA 50x8?",
        whatBody:["Es la <strong>escuadra más ligera</strong> del catálogo, empleada en sujeciones auxiliares."]
      }),
      pieceBase({ id:"escuadra-150x100", name:"Escuadra 150x150x100x10", code:"E150-100-10", shape:"bracket", img:IMG.esc150x100,
        short:"Escuadra estándar 150x150x100x10.",
        lead:"Formato más habitual para la fijación de paneles a pilar.",
        desc:["Escuadra en L de <strong>150 x 150 x 100 x 10 mm</strong>, uno de los formatos más habituales del catálogo TMI."],
        features:[["Referencia","E150-100-10"],["Dimensiones","150 x 150 x 100 mm"],["Espesor","10 mm"],["Material","S275JR"],["Acabado","Galvanizado en caliente"]],
        sistema:["Solución <strong>estándar</strong> para la conexión entre panel y pilar de hormigón."],
        materiales:["<strong>Cuerpo:</strong> S275JR laminado en caliente.","<strong>Acabado:</strong> galvanizado en caliente EN ISO 1461."],
        dimensiones:["<strong>Alas:</strong> 150 x 150 mm.","<strong>Anchura:</strong> 100 mm.","<strong>Espesor:</strong> 10 mm."],
        instrucciones:["Fije la escuadra a la guía del panel con tornillo TCA y al pilar mediante anclaje químico."],
        whatTitle:"¿QUÉ ES LA ESCUADRA 150x150x100x10?",
        whatBody:["Es la <strong>escuadra estándar de referencia</strong> para uniones convencionales panel–pilar."]
      }),
      pieceBase({ id:"escuadra-200x100", name:"Escuadra 200x100x80x8", code:"E200-80-8", shape:"bracket", img:IMG.esc200x100,
        short:"Escuadra alargada 200x100x80x8.",
        lead:"Escuadra alargada para uniones con mayor separación entre panel y estructura.",
        desc:["Formato alargado <strong>200 x 100 x 80 x 8 mm</strong> para salvar mayores distancias."],
        features:[["Referencia","E200-80-8"],["Dimensiones","200 x 100 x 80 mm"],["Espesor","8 mm"],["Material","S275JR"],["Acabado","Galvanizado en caliente"]],
        sistema:["Alternativa al ángulo prolongado cuando la <strong>separación panel–pilar</strong> supera los 15 cm."],
        materiales:["<strong>Cuerpo:</strong> S275JR.","<strong>Acabado:</strong> galvanizado en caliente."],
        dimensiones:["<strong>Ala 1:</strong> 200 mm.","<strong>Ala 2:</strong> 100 mm.","<strong>Anchura:</strong> 80 mm.","<strong>Espesor:</strong> 8 mm."],
        instrucciones:["Presente la escuadra con el ala larga hacia el pilar y fije con anclaje químico o mecánico."],
        whatTitle:"¿QUÉ ES LA ESCUADRA 200x100x80x8?",
        whatBody:["Es una <strong>escuadra alargada</strong> para uniones con mayor separación entre panel y estructura."]
      })
    ]
  },

  ajustables: {
    title: "Fijaciones Ajustables",
    subtitle: "Sistema antideslizante",
    eyebrow: "Catálogo · Antideslizante",
    hero: IMG.cat_dentadas,
    intro: "Escuadras fresadas y arandelas dentadas para uniones antideslizantes de alta fiabilidad. Ajuste sencillo en obra sin necesidad de taladrar.",
    pieces: [
      pieceBase({ id:"escuadra-fresada", name:"Escuadra Fresada", code:"EF150 – EF300", shape:"escuadra_dentada", img:IMG.cat_dentadas,
        short:"Escuadra con superficie dentada 50/60/80 x 8.",
        lead:"Escuadra fresada con dentado antideslizante para uniones que no admiten deslizamiento.",
        desc:["Las <strong>escuadras fresadas</strong> incorporan un dentado en la cara de contacto que engrana con la arandela dentada correspondiente, garantizando la ausencia de deslizamiento en la unión."],
        features:[["Referencia","EF150 – EF300"],["Secciones","50x8, 60x8, 80x8 mm"],["Material","S275JR"],["Acabado","Zincado electrolítico + sellado"],["Carga admisible","5 – 8 KN"]],
        sistema:["Combinada con <strong>arandela dentada</strong>, forma el sistema antideslizante que sustituye a la unión con dentado hormigonado."],
        materiales:["<strong>Cuerpo:</strong> S275JR con superficie fresada.","<strong>Acabado:</strong> zincado electrolítico + sellado antihumedad."],
        dimensiones:["<strong>Secciones disponibles:</strong> 50x8, 60x8, 80x8 mm.","<strong>Longitudes:</strong> de 150 a 300 mm."],
        instrucciones:["Combine siempre con arandela dentada del mismo paso.","Apriete la tuerca al par indicado (60 Nm M-12 / 120 Nm M-16)."],
        whatTitle:"¿QUÉ ES LA ESCUADRA FRESADA?",
        whatBody:["Es una escuadra con <strong>dentado mecanizado</strong> en la superficie de apoyo, para bloquear la unión frente a deslizamientos."]
      }),
      pieceBase({ id:"arandela-dentada", name:"Arandela Dentada", code:"F50508 / F40358 / F55358 / F60608", shape:"arandela", img:IMG.tornillo,
        short:"Arandela con dentado antideslizante.",
        lead:"Arandela dentada complementaria de la escuadra fresada para garantizar el bloqueo.",
        desc:["Arandela mecanizada con dentado en su cara inferior, que engrana con la escuadra fresada o bayoneta fresada para impedir el deslizamiento tras el apriete."],
        features:[["Referencias","F50508 / F40358 / F55358 / F60608"],["Dimensiones","40x35 – 60x60 mm"],["Material","S275JR"],["Acabado","Zincado electrolítico + sellado"]],
        sistema:["Complemento imprescindible de los <strong>elementos fresados</strong> (escuadras y bayonetas)."],
        materiales:["<strong>Cuerpo:</strong> S275JR.","<strong>Acabado:</strong> zincado electrolítico + sellado."],
        dimensiones:["<strong>Modelos:</strong> desde 40x35 hasta 60x60 mm.","<strong>Espesor:</strong> 6-8 mm."],
        instrucciones:["Coloque la arandela dentada con el dentado en contacto con la superficie fresada de la escuadra."],
        whatTitle:"¿QUÉ ES LA ARANDELA DENTADA?",
        whatBody:["Es una <strong>arandela con dentado</strong> mecanizado que, al apretar la tuerca, engrana con la escuadra fresada y bloquea la unión frente a deslizamientos."]
      })
    ]
  },

  cubiertas: {
    title: "Fijación de Cubiertas",
    subtitle: "Correas, canalones y argollas",
    eyebrow: "Catálogo · Cubiertas",
    hero: IMG.cat_correas,
    intro: "U Correa, SCE, Z Correa, Z Cubierta, S Montaje, S Canalón y argollas de elevación. Piezas para la fijación de correas y canalones sobre vigas prefabricadas.",
    pieces: [
      pieceBase({ id:"u-correa", name:"U Correa", code:"UCORREA-333", shape:"u_correa", img:IMG.herrajes,
        short:"Pieza en U de 333 mm para correas.",
        lead:"Sujeción en forma de U para correas sobre vigas de hormigón prefabricado.",
        desc:["Pieza en U de <strong>333 mm de desarrollo</strong> que abraza el ala de la viga y proporciona la fijación de la correa metálica."],
        features:[["Referencia","UCORREA-333"],["Desarrollo","333 mm"],["Material","S235JR"],["Acabado","Cincado electrolítico"],["Carga admisible","8 KN"]],
        sistema:["Forma parte del <strong>sistema de cubiertas</strong>, junto con Z Cubierta y S Montaje."],
        materiales:["<strong>Chapa:</strong> S235JR de 3-4 mm.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Desarrollo:</strong> 333 mm.","<strong>Espesor:</strong> 3-4 mm."],
        instrucciones:["Presente la U sobre el ala de la viga y fije los tornillos por ambos lados de la correa."],
        whatTitle:"¿QUÉ ES LA U CORREA?",
        whatBody:["Es una <strong>pieza en forma de U</strong> que abraza el ala de la viga sin taladrarla, fijando la correa por presión."]
      }),
      pieceBase({ id:"sce", name:"Sujeción Correa Extremo", code:"SCE", shape:"escuadra", img:IMG.cat_correas,
        short:"Escuadra SCE 50x8 para extremos.",
        lead:"Escuadra para la sujeción de correas en el extremo del faldón.",
        desc:["Escuadra especial de <strong>50 x 8 mm</strong> diseñada para la fijación de la correa en los extremos donde no puede montarse la U."],
        features:[["Referencia","SCE"],["Sección","50 x 8 mm"],["Material","S275JR"],["Acabado","Cincado electrolítico"],["Carga admisible","1,5 KN"]],
        sistema:["Complemento del <strong>sistema U Correa</strong> para los extremos del faldón de cubierta."],
        materiales:["<strong>Cuerpo:</strong> S275JR.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Sección:</strong> 50 x 8 mm.","<strong>Longitud:</strong> según proyecto."],
        instrucciones:["Fije la SCE en el extremo del faldón y atornille la correa a ella."],
        whatTitle:"¿QUÉ ES LA SUJECIÓN CORREA EXTREMO?",
        whatBody:["Es una <strong>escuadra específica</strong> para los extremos del faldón, donde no cabe la U Correa estándar."]
      }),
      pieceBase({ id:"z-correa", name:"Z Correa", code:"ZCORREA-100 / 200", shape:"z_piece", img:IMG.herrajes,
        short:"Pieza en Z para retención de viguetas.",
        lead:"Pieza en Z para la retención de viguetas tubulares en cubiertas.",
        desc:["Pieza en <strong>forma de Z</strong> de chapa 3 mm para la retención de viguetas tubulares."],
        features:[["Referencia","ZCORREA-100 / 200"],["Chapa","3 mm"],["Material","S235JR"],["Acabado","Cincado electrolítico"],["Carga admisible","1 – 2 KN"]],
        sistema:["Retiene lateralmente las viguetas tubulares en el <strong>sistema de cubierta</strong>."],
        materiales:["<strong>Chapa:</strong> S235JR de 3 mm plegada.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Modelos:</strong> 100 y 200 mm de ancho.","<strong>Espesor:</strong> 3 mm."],
        instrucciones:["Fije la Z al soporte y presione la vigueta contra ella para su retención lateral."],
        whatTitle:"¿QUÉ ES LA Z CORREA?",
        whatBody:["Es una <strong>chapa plegada en forma de Z</strong> para retener lateralmente las viguetas tubulares."]
      }),
      pieceBase({ id:"z-cubierta", name:"Z Cubierta", code:"Z-150 / 200 / 250", shape:"z_piece", img:IMG.herrajes,
        short:"Fijación de correas a vigas.",
        lead:"Pieza en Z para la fijación directa de correas a vigas.",
        desc:["Pieza en Z de <strong>chapa de 4 mm</strong> para la fijación de correas sobre vigas de hormigón."],
        features:[["Referencia","Z-150 / 200 / 250"],["Chapa","4 mm"],["Material","S235JR"],["Acabado","Cincado electrolítico"],["Carga admisible","4 KN"]],
        sistema:["Solución <strong>simple y económica</strong> para la fijación de correas a viga."],
        materiales:["<strong>Chapa:</strong> S235JR de 4 mm plegada.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Modelos:</strong> 150, 200 y 250 mm.","<strong>Espesor:</strong> 4 mm."],
        instrucciones:["Fije la Z a la viga y atornille la correa al otro extremo."],
        whatTitle:"¿QUÉ ES LA Z CUBIERTA?",
        whatBody:["Es una <strong>Z de chapa</strong> que sirve de interfaz entre la viga de hormigón y la correa metálica."]
      }),
      pieceBase({ id:"s-montaje", name:"S Montaje", code:"SMONTAJE", shape:"s_piece", img:IMG.herrajes,
        short:"Pieza en S para correas y canalones.",
        lead:"Pieza en S para la fijación combinada de correas y canalones.",
        desc:["Pieza en <strong>forma de S</strong> de chapa gruesa (6 o 10 mm) para uniones combinadas correa–canalón."],
        features:[["Referencia","SMONTAJE"],["Chapa","6 mm / 10 mm"],["Material","S275JR"],["Acabado","Cincado electrolítico"],["Carga admisible","8 KN"]],
        sistema:["Une <strong>correa y canalón</strong> con una única pieza plegada."],
        materiales:["<strong>Chapa:</strong> S275JR de 6 o 10 mm.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Espesores:</strong> 6 mm y 10 mm.","<strong>Desarrollo:</strong> según proyecto."],
        instrucciones:["Coloque la S entre correa y canalón y fije ambas alas."],
        whatTitle:"¿QUÉ ES LA S MONTAJE?",
        whatBody:["Es una <strong>chapa en S</strong> que resuelve la unión entre correa y canalón con una única pieza."]
      }),
      pieceBase({ id:"s-canalon", name:"S Canalón", code:"SCANALON", shape:"s_piece", img:IMG.cat_canalon,
        short:"Fijación de paneles a viga canalón.",
        lead:"S de gran espesor para la fijación de paneles a la viga canalón.",
        desc:["Versión reforzada de la S de montaje para <strong>fijar paneles</strong> a la viga canalón."],
        features:[["Referencia","SCANALON"],["Chapa","6 mm / 10 mm"],["Material","S275JR"],["Acabado","Cincado electrolítico"],["Carga admisible","3 – 10 KN"]],
        sistema:["Se emplea cuando el <strong>panel apoya sobre la viga canalón</strong> de la cubierta."],
        materiales:["<strong>Chapa:</strong> S275JR de 6 o 10 mm.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Espesores:</strong> 6 mm y 10 mm.","<strong>Desarrollo:</strong> a medida."],
        instrucciones:["Fije la S a la viga canalón y al panel con la tornillería correspondiente."],
        whatTitle:"¿QUÉ ES LA S CANALÓN?",
        whatBody:["Es una <strong>S reforzada</strong> para transmitir las cargas del panel a la viga canalón."]
      }),
      pieceBase({ id:"argollas", name:"Argollas de Elevación", code:"ARG-90 / 160 / 220", shape:"argolla", img:IMG.fabricacion,
        short:"Punto de izado embebido en la pieza.",
        lead:"Argollas de elevación embebidas para el izado seguro de piezas prefabricadas.",
        desc:["Argollas embebidas en las piezas de hormigón para servir como <strong>punto de izado</strong> durante el transporte y montaje."],
        features:[["Referencia","ARG-90 / 160 / 220"],["Diámetros","90 / 160 / 220 mm"],["Material","S235JR / S275JR / S355JR"],["Acabado","Cincado electrolítico"]],
        sistema:["Elemento indispensable en el <strong>manejo y montaje</strong> de piezas de hormigón prefabricado."],
        materiales:["<strong>Cuerpo:</strong> aceros calidad S235JR, S275JR o S355JR según carga.","<strong>Acabado:</strong> cincado electrolítico."],
        dimensiones:["<strong>Diámetros disponibles:</strong> 90, 160 y 220 mm.","<strong>Fabricación:</strong> a medida para cargas superiores."],
        instrucciones:["Embuta la argolla en la pieza durante el hormigonado, respetando la orientación de izado.","Verifique la carga máxima antes del izado."],
        whatTitle:"¿QUÉ ES LA ARGOLLA DE ELEVACIÓN?",
        whatBody:["Es un <strong>herraje embebido</strong> en la pieza de hormigón que permite engancharla con seguridad para su transporte y montaje."]
      })
    ]
  },

  placas: {
    title: "Placas de Anclaje",
    subtitle: "A medida sobre plano",
    eyebrow: "Catálogo · Estructura",
    hero: IMG.cat_placas,
    intro: "Placas de anclaje fabricadas 100% a medida en cualquier espesor (6 a 35 mm) y acabado. Con o sin pernos soldados y rigidizadores según proyecto.",
    pieces: [
      pieceBase({ id:"placa-medida", name:"Placa a Medida", code:"PLACA-XX", shape:"placa", img:IMG.cat_placas,
        short:"Placa fabricada a medida sobre plano.",
        lead:"Placa de anclaje fabricada 100% a medida en cualquier espesor y acabado.",
        desc:["<strong>Placas de anclaje</strong> fabricadas íntegramente a medida a partir del plano del cliente, en cualquier espesor y acabado."],
        features:[["Espesor","6 – 35 mm"],["Material","S275JR / S355JR"],["Acabados","Negro / Zincado / Galvanizado / Inox"],["Fabricación","100% a medida"]],
        sistema:["Elemento fundamental de <strong>conexión entre estructura y cimentación</strong> o entre elementos estructurales."],
        materiales:["<strong>Cuerpo:</strong> S275JR o S355JR.","<strong>Pernos:</strong> soldables al material base.","<strong>Acabados disponibles:</strong> negro, zincado, galvanizado o inoxidable."],
        dimensiones:["<strong>Espesores:</strong> desde 6 hasta 35 mm.","<strong>Dimensiones:</strong> cualquier medida a partir del plano."],
        instrucciones:["Envíe el plano con dimensiones, taladros, pernos y acabado deseados a pedidos@talleresiniesta.es para presupuesto."],
        whatTitle:"¿QUÉ ES LA PLACA DE ANCLAJE?",
        whatBody:["Es una <strong>plancha de acero perforada</strong> que sirve de interfaz entre un elemento estructural y su cimentación o entre dos elementos estructurales.","Fabricamos <strong>cualquier geometría</strong> sobre plano, con o sin pernos soldados y con o sin rigidizadores."]
      })
    ]
  }
};

/* ---------------- Servicios adicionales ---------------- */
const SERVICES = [
  { icon:"design", title:"Diseño y cálculo", text:"Verificación de piezas mediante <strong>Siemens NX, Nastran y Solid Edge</strong>. Cumplimiento UNE-EN 1993-1-1/8." },
  { icon:"cnc",    title:"Mecanizado CNC",   text:"2 centros de mecanizado, 4 tornos automáticos, 2 tornos manuales, fresas y plegadoras propias." },
  { icon:"custom", title:"Fabricación a medida", text:"Diseño de piezas específicas, tratamientos térmicos y materiales especiales (F-114, Inox, S355JR)." },
  { icon:"cert",   title:"Calidad certificada", text:"Marcado <strong>CE 1239</strong>, EN 1090-1:2009+A1:2011, Tecnalia y homologaciones de soldeo Bureau Veritas." },
  { icon:"deliver",title:"Suministro nacional", text:"Entregas comprometidas en toda la península desde nuestro taller de Fortuna, Murcia." },
  { icon:"support",title:"Asesoría técnica",  text:"Más de <strong>40 años de experiencia</strong> a tu servicio para resolver cualquier proyecto." }
];

const VIDEOS = [
  { text: "Proceso de fabricación de herrajes a medida en Talleres Iniesta", url: "https://www.youtube.com/results?search_query=fabricacion+herrajes+prefabricado+hormigon" },
  { text: "Montaje de piezas en prefabricado de hormigón. ¡En solo 60 segundos!", url: "https://www.youtube.com/results?search_query=montaje+prefabricado+hormigon" }
];

function accordionsFor(p) {
  return {
    sistema: p.sistema || ["Esta pieza forma parte del catálogo de <strong>herrajes TMI</strong> para prefabricado de hormigón."],
    materiales: p.materiales || ["Acero certificado según EN 10025-2 con acabado zincado o galvanizado según especificación."],
    dimensiones: p.dimensiones || ["Fabricación a medida según plano. Pedido mínimo desde 1 pieza."],
    instrucciones: p.instrucciones || ["Consulte la ficha técnica del proyecto y el par de apriete recomendado."]
  };
}

// Índice de piezas por id para lookup rápido
const ALL_PIECES = (function(){
  const map = {};
  Object.keys(DATA).forEach(k => {
    DATA[k].pieces.forEach(p => { map[p.id] = { ...p, categoryKey: k, categoryTitle: DATA[k].title }; });
  });
  return map;
})();
