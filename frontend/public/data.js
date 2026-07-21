/* ================= Datos de productos y piezas =================
   Basado en el catálogo real de Talleres M. Iniesta (talleresiniesta.es) */

const IMG = {
  angulo:      "https://talleresiniesta.es/wp-content/uploads/2024/01/Angulo-75x100x100x10.png",
  fabricacion: "https://talleresiniesta.es/wp-content/uploads/2024/01/fabricacion-piezas.jpg",
  herrajes:    "https://talleresiniesta.es/wp-content/uploads/2024/01/herrajes-de-hormigon-a-medida.png",
  escuadras:   "https://talleresiniesta.es/wp-content/uploads/2024/02/categoria-escuadras-dentadas.webp",
  anclajes:    "https://talleresiniesta.es/wp-content/uploads/2024/02/Categoria-anclajes-ocultos.webp",
  correas:     "https://talleresiniesta.es/wp-content/uploads/2024/02/sujecion-de-correas-vigas-delta.webp",
  placas:      "https://talleresiniesta.es/wp-content/uploads/2024/02/Categoria-placas-de-anclaje-150x150.webp",
  canalon:     "https://talleresiniesta.es/wp-content/uploads/2024/02/sujecion-de-canalon-y-otros-150x150.webp",
  // Imágenes específicas por pieza (paneles)
  escuadra50:  "https://talleresiniesta.es/wp-content/uploads/2024/10/Screenshot_297.png",
  anguloColiso:"https://talleresiniesta.es/wp-content/uploads/2024/10/Screenshot_290.png",
  bayoneta:    "https://talleresiniesta.es/wp-content/uploads/2024/10/Screenshot_266.png",
  esc150x100:  "https://talleresiniesta.es/wp-content/uploads/2024/02/Escuadra-150x150x100x10.webp",
  tornillo:    "https://talleresiniesta.es/wp-content/uploads/2024/02/Tornilleria.webp",
  esc150x80:   "https://talleresiniesta.es/wp-content/uploads/2024/02/Escuadra-150x150x80x8-con-cartela.webp",
  guiaPerfil:  "https://talleresiniesta.es/wp-content/uploads/2024/02/Screenshot_258.png",
  esc200x100:  "https://talleresiniesta.es/wp-content/uploads/2024/01/Talleres-Iniesta-Escuadra-200x100x80x8.png",
  // Otras
  dentadaS:    "https://talleresiniesta.es/wp-content/uploads/2024/02/categoria-escuadras-dentadas.webp",
  anclajeC:    "https://talleresiniesta.es/wp-content/uploads/2024/02/Categoria-anclajes-ocultos.webp"
};

const GALLERY = [IMG.fabricacion, IMG.herrajes, IMG.angulo, IMG.escuadras];

function makeDownloads(name){
  return [
    { title: "Ficha de producto",          type: "PDF" },
    { title: "Catálogo Sistema " + name,   type: "PDF" },
    { title: "Manual de uso " + name,      type: "PDF" },
    { title: "Archivo CAD " + name,        type: "DWG" },
    { title: "Catálogo " + name,           type: "PDF" },
    { title: "Declaración de prestaciones",type: "PDF" }
  ];
}

const VIDEOS = [
  { text: "Proceso de fabricación de herrajes a medida en Talleres Iniesta", url: "https://www.youtube.com/results?search_query=fabricacion+herrajes+prefabricado+hormigon" },
  { text: "Montaje de piezas en prefabricado de hormigón. ¡En solo 60 segundos!", url: "https://www.youtube.com/results?search_query=montaje+prefabricado+hormigon" }
];

// Bloques por defecto de acordeones (Descripción del sistema, Materiales, Dimensiones, Instrucciones)
function defaultAccordions(p){
  return {
    sistema: p.sistema || [
      "El sistema de <strong>" + p.name + "</strong> forma parte del conjunto de herrajes para prefabricado de hormigón fabricados por Talleres M. Iniesta.",
      "Se emplea junto con el resto de piezas de la gama para completar la fijación entre el panel y la estructura, garantizando una <strong>unión segura y regulable</strong> en obra."
    ],
    materiales: p.materiales || [
      "<strong>Material base:</strong> acero certificado S275-JR.",
      "<strong>Acabado:</strong> galvanizado en caliente según norma UNE EN ISO 1461 (opcional inoxidable AISI 304 bajo pedido).",
      "<strong>Tornillería:</strong> clase 8.8 zincada / galvanizada."
    ],
    dimensiones: p.dimensiones || [
      "<strong>Fabricación:</strong> a medida según el plano del cliente.",
      "<strong>Tolerancias:</strong> ajustadas a norma UNE EN ISO 2768-mK.",
      "<strong>Pedido mínimo:</strong> desde 1 pieza."
    ],
    instrucciones: p.instrucciones || [
      "Revise que el <strong>plano de replanteo</strong> coincide con las medidas de la pieza recibida antes de comenzar el montaje.",
      "Coloque la pieza en su posición y apriete la tornillería al par indicado en la ficha técnica.",
      "Compruebe el <strong>aplomado</strong> y el par de apriete final. Para dudas contacte con pedidos@talleresiniesta.es."
    ]
  };
}

const DATA = {
  paneles: {
    title: "Sujeción de Paneles de Hormigón",
    eyebrow: "Catálogo · Prefabricado",
    hero: IMG.angulo,
    intro: "Guías perfil 40/22 hasta 2000 mm, tornillería M-12 y M-16, escuadras, ángulos, bayonetas y plantillas para la fijación segura de paneles de hormigón prefabricado.",
    pieces: [
      { id:"guia-4022", name:"Guía Perfil 40/22", shape:"channel", img:IMG.guiaPerfil,
        short:"Perfil de canal 40/22 hasta 2000 mm.",
        lead:"Guía perfil 40/22 embebida en el panel para la sujeción y regulación de la fijación mediante tornillería especial.",
        desc:[
          "La <strong>guía perfil 40/22</strong> se embebe en el hormigón durante el fabricado del panel y permite alojar la tornillería de sujeción de forma deslizante, facilitando el ajuste en obra.",
          "Se fabrica en longitudes de hasta <strong>2000 mm</strong> en acero galvanizado, con las tapas de cierre y los tornillos de cabeza de martillo M-12 y M-16 correspondientes."
        ],
        features:[["Material","Acero galvanizado S275-JR"],["Longitud","Hasta 2000 mm"],["Tornillería compatible","M-12 y M-16 cabeza de martillo"],["Perfil","40 x 22 mm"],["Aplicación","Sujeción regulable de paneles"]],
        whatTitle:"¿Qué es la guía perfil 40/22?",
        whatBody:[
          "La guía perfil 40/22 <strong>es un canal de acero laminado</strong> que se hormigona embebido en el panel prefabricado. Su geometría permite introducir tornillos de cabeza de martillo que quedan retenidos y pueden desplazarse a lo largo del perfil.",
          "Este sistema permite <strong>regular la posición</strong> de la fijación en obra sin necesidad de taladrar, garantizando una unión limpia y segura entre el panel y la estructura."
        ]},
      { id:"escuadra-50x8", name:"Escuadra 50x8", shape:"escuadra", img:IMG.escuadra50,
        short:"Escuadra 50x8 mm de sujeción.",
        lead:"Escuadra plegada de 50x8 mm para uniones ligeras entre panel y estructura.",
        desc:["La <strong>escuadra 50x8</strong> es una pieza compacta empleada en uniones de menor carga y en zonas donde el espacio disponible es reducido."],
        features:[["Material","Acero S275-JR"],["Espesor","8 mm"],["Anchura","50 mm"],["Acabado","Galvanizado en caliente"],["Aplicación","Sujeciones ligeras"]],
        whatTitle:"¿Qué es la escuadra 50x8?",
        whatBody:["Es una <strong>escuadra en L</strong> de dimensiones reducidas, ideal para uniones auxiliares y remates."]},
      { id:"angulo-coliso-100x10", name:"Ángulo Montaje Coliso 100x10", shape:"escuadra", img:IMG.anguloColiso,
        short:"Ángulo con coliso para regulación.",
        lead:"Ángulo de montaje 100x10 con coliso para regulación fina en obra.",
        desc:["El <strong>ángulo con coliso</strong> permite ajustar la fijación en obra gracias a su ranura, absorbiendo tolerancias sin necesidad de taladrar sobre el hormigón."],
        features:[["Material","Acero S275-JR"],["Espesor","10 mm"],["Longitud","100 mm"],["Coliso","Regulación integrada"],["Acabado","Galvanizado en caliente"]],
        whatTitle:"¿Qué es el ángulo montaje coliso?",
        whatBody:["Es un <strong>ángulo con ranura oval (coliso)</strong> que permite regular la posición del tornillo dentro del propio ángulo, muy útil cuando existen tolerancias entre el panel y la estructura."]},
      { id:"bayoneta", name:"Bayoneta", shape:"bolt", img:IMG.bayoneta,
        short:"Bayoneta de sujeción antivuelco.",
        lead:"Bayoneta para la fijación provisional y antivuelco de paneles durante el montaje.",
        desc:["La <strong>bayoneta</strong> se emplea en las fases iniciales de montaje para arriostrar y evitar el vuelco del panel hasta su fijación definitiva."],
        features:[["Material","Acero de alta resistencia"],["Función","Antivuelco y arriostramiento"],["Acabado","Galvanizado"],["Fabricación","A medida"],["Aplicación","Montaje de paneles"]],
        whatTitle:"¿Qué es la bayoneta?",
        whatBody:["Es un <strong>elemento de sujeción provisional</strong> que se ancla al panel y al forjado o pilar, evitando el vuelco durante el montaje."]},
      { id:"escuadra-150x100", name:"Escuadra 150x150x100x10", shape:"bracket", img:IMG.esc150x100,
        short:"Escuadra reforzada 150x150x100x10.",
        lead:"Escuadra estándar 150x150x100x10 para uniones de carga media-alta.",
        desc:["Escuadra en L de <strong>150x150x100x10</strong> mm, uno de los formatos más habituales para la fijación de paneles a pilares o jácenas."],
        features:[["Material","Acero S275-JR"],["Espesor","10 mm"],["Dimensiones","150 x 150 x 100 mm"],["Acabado","Galvanizado en caliente"],["Aplicación","Sujeción estándar"]],
        whatTitle:"¿Qué es la escuadra 150x150x100x10?",
        whatBody:["Es una <strong>escuadra en L</strong> de tamaño estándar para la unión entre panel y pilar, con capacidad para cargas medias."]},
      { id:"tornillo-tca", name:"Tornillo TCA (M-12 / M-16)", shape:"bolt", img:IMG.tornillo,
        short:"Tornillo de cabeza de martillo.",
        lead:"Tornillería especial de cabeza de martillo TCA para guías perfil 40/22.",
        desc:[
          "El <strong>tornillo TCA</strong> (Cabeza de Martillo) de métricas M-12 y M-16 es el elemento de conexión entre la guía perfil 40/22 y la escuadra o herraje de sujeción.",
          "Se suministra con tuercas, arandelas y elementos antideslizamiento para garantizar el par de apriete."
        ],
        features:[["Métrica","M-12 y M-16"],["Tipo","Cabeza de martillo (TCA)"],["Material","Acero clase 8.8"],["Acabado","Zincado / galvanizado"],["Compatibilidad","Guía perfil 40/22"]],
        whatTitle:"¿Qué es la tornillería de cabeza de martillo?",
        whatBody:[
          "Es un <strong>tornillo con cabeza rectangular</strong> que se introduce y gira 90° dentro de la guía perfil, quedando retenido en su interior.",
          "Permite fijar herrajes en cualquier punto del perfil <strong>sin necesidad de taladrar</strong>, con total libertad de posicionamiento."
        ]},
      { id:"escuadra-150x80-cartela", name:"Escuadra 150x150x80x8 con cartela", shape:"escuadra_dentada", img:IMG.esc150x80,
        short:"Escuadra 150x150x80x8 con cartela.",
        lead:"Escuadra reforzada con cartela para aumentar la capacidad de carga.",
        desc:["La versión con <strong>cartela</strong> añade un rigidizador triangular soldado que incrementa la resistencia frente a esfuerzos elevados."],
        features:[["Material","Acero S275-JR"],["Refuerzo","Cartela soldada"],["Dimensiones","150 x 150 x 80 mm"],["Espesor","8 mm"],["Acabado","Galvanizado en caliente"]],
        whatTitle:"¿Qué es la escuadra con cartela?",
        whatBody:["Es una <strong>escuadra reforzada con cartela</strong> triangular soldada, indicada cuando la unión debe soportar momentos y cargas mayores."]},
      { id:"escuadra-200x80", name:"Escuadra 200x100x80x8", shape:"bracket", img:IMG.esc200x100,
        short:"Escuadra 200x100x80x8 alargada.",
        lead:"Escuadra alargada 200x100x80x8 para uniones con mayor brazo de palanca.",
        desc:["Formato de escuadra <strong>alargado</strong> que permite salvar mayores distancias entre el punto de fijación al panel y a la estructura."],
        features:[["Material","Acero S275-JR"],["Dimensiones","200 x 100 x 80 mm"],["Espesor","8 mm"],["Acabado","Galvanizado en caliente"],["Aplicación","Uniones alargadas"]],
        whatTitle:"¿Qué es la escuadra 200x100x80x8?",
        whatBody:["Es una escuadra en L <strong>de mayor longitud</strong> que la estándar, para resolver uniones con mayor separación."]},
      { id:"plantilla-montaje", name:"Plantilla para Montaje", shape:"placa", img:IMG.herrajes,
        short:"Plantilla auxiliar de montaje.",
        lead:"Plantilla para el replanteo y montaje preciso de herrajes en obra.",
        desc:["La <strong>plantilla de montaje</strong> facilita la colocación repetitiva y precisa de los herrajes en obra o en la planta de prefabricados."],
        features:[["Material","Acero"],["Fabricación","A medida"],["Función","Replanteo y montaje"],["Uso","Reutilizable"],["Acabado","Pintado / galvanizado"]],
        whatTitle:"¿Qué es la plantilla de montaje?",
        whatBody:["Es una <strong>pieza auxiliar</strong> que fija la posición relativa de los herrajes durante su colocación, garantizando la repetitividad de la fabricación."]},
      { id:"escuadra-100x50", name:"Escuadra 100x100x50x8", shape:"escuadra", img:IMG.escuadras,
        short:"Escuadra 100x100x50x8 compacta.",
        lead:"Escuadra compacta 100x100x50x8 para uniones estándar de menor carga.",
        desc:["Formato <strong>compacto</strong> ideal para uniones estándar donde el espacio disponible es reducido."],
        features:[["Material","Acero S275-JR"],["Dimensiones","100 x 100 x 50 mm"],["Espesor","8 mm"],["Acabado","Galvanizado en caliente"],["Aplicación","Sujeciones estándar"]],
        whatTitle:"¿Qué es la escuadra 100x100x50x8?",
        whatBody:["Es la <strong>escuadra en L más compacta</strong> del catálogo estándar de paneles."]},
      { id:"angulo-prolongado", name:"Ángulo Prolongado", shape:"bracket", img:IMG.angulo,
        short:"Ángulo prolongado a medida.",
        lead:"Ángulo con una de sus alas prolongada para salvar distancias mayores.",
        desc:["El <strong>ángulo prolongado</strong> resuelve uniones donde el punto de fijación al panel queda alejado del pilar, manteniendo la rigidez del conjunto."],
        features:[["Material","Acero S275-JR"],["Alma","Prolongada a medida"],["Espesor","De 8 a 15 mm"],["Acabado","Galvanizado en caliente"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es el ángulo prolongado?",
        whatBody:["Es una <strong>escuadra con una de sus alas más larga</strong>, fabricada a medida para cubrir vuelos y separaciones no estándar."]},
      { id:"angulo-200x100", name:"Ángulo 200x100x100x10", shape:"bracket", img:IMG.angulo,
        short:"Ángulo 200x100x100x10 de gran tamaño.",
        lead:"Ángulo de gran tamaño 200x100x100x10 para uniones muy solicitadas.",
        desc:["El <strong>ángulo 200x100x100x10</strong> es un formato reforzado para las uniones estructurales más exigentes entre panel y estructura."],
        features:[["Material","Acero S275-JR"],["Dimensiones","200 x 100 x 100 mm"],["Espesor","10 mm"],["Acabado","Galvanizado en caliente"],["Aplicación","Uniones de alta carga"]],
        whatTitle:"¿Qué es el ángulo 200x100x100x10?",
        whatBody:["Es una <strong>escuadra en L de gran formato</strong> para transmitir cargas elevadas entre panel y estructura."]}
    ]
  },

  escuadras: {
    title: "Escuadras Dentadas",
    eyebrow: "Catálogo · Antideslizamiento",
    hero: IMG.escuadras,
    intro: "Sistema antideslizamiento dentado de cualquier medida para la unión segura entre pilares, jácenas y paneles prefabricados de hormigón.",
    pieces: [
      { id:"dentada-simple", name:"Escuadra Dentada Simple", shape:"escuadra_dentada", img:IMG.escuadras,
        short:"Escuadra con dentado antideslizante.",
        lead:"Escuadra dentada estándar para la unión antideslizante entre elementos de hormigón.",
        desc:["La <strong>escuadra dentada</strong> incorpora un dentado en sus caras de contacto que engrana con el elemento opuesto, impidiendo el deslizamiento de la unión."],
        features:[["Material","Acero S275-JR"],["Dentado","Antideslizamiento mecánico"],["Espesor","De 8 a 20 mm"],["Acabado","Galvanizado en caliente"],["Medidas","A medida"]],
        whatTitle:"¿Qué es la escuadra dentada?",
        whatBody:["Es una <strong>escuadra en L con dentado</strong> en las superficies de apoyo. El dentado engrana con el dentado del panel o pieza contigua creando un bloqueo mecánico."]},
      { id:"dentada-reforzada", name:"Escuadra Dentada Reforzada", shape:"escuadra_dentada", img:IMG.escuadras,
        short:"Con rigidizadores para altas cargas.",
        lead:"Escuadra dentada con rigidizadores para uniones de alta capacidad de carga.",
        desc:["La versión <strong>reforzada</strong> añade rigidizadores triangulares que aumentan la capacidad portante de la escuadra."],
        features:[["Material","Acero S275-JR"],["Refuerzo","Rigidizadores soldados"],["Espesor","De 12 a 25 mm"],["Acabado","Galvanizado en caliente"],["Aplicación","Alta carga"]],
        whatTitle:"¿Qué es la escuadra dentada reforzada?",
        whatBody:["Es una escuadra dentada con <strong>cartelas soldadas</strong> que aumentan su inercia y capacidad de carga."]},
      { id:"dentada-medida", name:"Escuadra Dentada a Medida", shape:"escuadra_dentada", img:IMG.escuadras,
        short:"Fabricación 100% bajo plano.",
        lead:"Escuadra dentada fabricada íntegramente según el plano del cliente.",
        desc:["Fabricamos <strong>cualquier geometría de escuadra dentada</strong> a partir del plano o croquis del cliente."],
        features:[["Fabricación","100% a medida"],["Pedido mínimo","Desde 1 pieza"],["Material","Acero S275-JR"],["Acabado","Según especificación"],["Plazo","Comprometido"]],
        whatTitle:"¿Qué es la escuadra dentada a medida?",
        whatBody:["Es una escuadra dentada <strong>diseñada específicamente</strong> para las dimensiones y cargas de un proyecto concreto."]}
    ]
  },

  anclajes: {
    title: "Anclajes Ocultos",
    eyebrow: "Catálogo · Fijación oculta",
    hero: IMG.anclajes,
    intro: "Anclajes para paneles de 12, 14 y 16 cm que ofrecen una fijación limpia y resistente sin elementos visibles en fachada.",
    pieces: [
      { id:"oculto-12", name:"Anclaje Oculto 12 cm", shape:"anclaje", img:IMG.anclajes,
        short:"Para paneles de 12 cm de espesor.",
        lead:"Anclaje oculto para paneles de 12 cm sin elementos vistos.",
        desc:["El <strong>anclaje oculto de 12 cm</strong> se embebe en el interior del panel, ofreciendo una fijación resistente sin herrajes visibles en fachada."],
        features:[["Espesor de panel","12 cm"],["Material","Galvanizado / inox 304"],["Visibilidad","100% oculta"],["Acabado","Sin elementos vistos"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es el anclaje oculto?",
        whatBody:["Es un <strong>herraje embebido</strong> en el espesor del panel de hormigón, que transmite las cargas sin aparecer en la cara vista."]},
      { id:"oculto-14", name:"Anclaje Oculto 14 cm", shape:"anclaje", img:IMG.anclajes,
        short:"Para paneles de 14 cm de espesor.",
        lead:"Anclaje oculto dimensionado para paneles de 14 cm.",
        desc:["Variante del anclaje oculto adaptada a <strong>paneles de 14 cm</strong>, con la misma filosofía de fijación limpia."],
        features:[["Espesor de panel","14 cm"],["Material","Galvanizado / inox 304"],["Visibilidad","100% oculta"],["Acabado","Sin elementos vistos"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es el anclaje oculto de 14 cm?",
        whatBody:["Es la versión del anclaje oculto <strong>calculada para 14 cm</strong> de espesor de panel."]},
      { id:"oculto-16", name:"Anclaje Oculto 16 cm", shape:"anclaje", img:IMG.anclajes,
        short:"Para paneles de 16 cm de espesor.",
        lead:"Anclaje oculto para paneles de mayor espesor, 16 cm.",
        desc:["El <strong>anclaje oculto de 16 cm</strong> es la solución para paneles de mayor espesor y cargas más elevadas."],
        features:[["Espesor de panel","16 cm"],["Material","Galvanizado / inox 304"],["Visibilidad","100% oculta"],["Capacidad","Cargas elevadas"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es el anclaje oculto de 16 cm?",
        whatBody:["Es el anclaje oculto de <strong>mayor capacidad</strong>, dimensionado para paneles de 16 cm."]}
    ]
  },

  correas: {
    title: "Sujeción de Correas – Vigas Delta",
    eyebrow: "Catálogo · Cubiertas",
    hero: IMG.correas,
    intro: "Escuadras y abrazaderas para la sujeción de correas y vigas delta sobre soportes de hormigón prefabricado.",
    pieces: [
      { id:"abrazadera-delta", name:"Abrazadera Viga Delta", shape:"abrazadera", img:IMG.correas,
        short:"Abrazadera para viga delta.",
        lead:"Abrazadera diseñada para la sujeción de correas sobre vigas delta.",
        desc:["La <strong>abrazadera para viga delta</strong> ciñe el ala de la viga y proporciona el punto de fijación de la correa."],
        features:[["Material","Acero S275-JR"],["Aplicación","Vigas delta"],["Acabado","Galvanizado"],["Ajuste","Al perfil de la viga"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es la abrazadera para viga delta?",
        whatBody:["Es un <strong>herraje que abraza</strong> el ala inclinada de la viga delta sin necesidad de taladrarla."]},
      { id:"escuadra-correa", name:"Escuadra para Correa", shape:"escuadra", img:IMG.correas,
        short:"Escuadra de apoyo de correa.",
        lead:"Escuadra de apoyo y fijación para correas de cubierta.",
        desc:["La <strong>escuadra para correa</strong> proporciona la superficie de apoyo y los taladros necesarios para la fijación de la correa."],
        features:[["Material","Acero S275-JR"],["Espesor","De 6 a 12 mm"],["Acabado","Galvanizado"],["Taladros","Según correa"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es la escuadra para correa?",
        whatBody:["Es una <strong>pieza angular</strong> que crea el apoyo de la correa sobre la viga o soporte de hormigón."]}
    ]
  },

  placas: {
    title: "Placas de Anclaje",
    eyebrow: "Catálogo · Estructura",
    hero: IMG.placas,
    intro: "Placas de anclaje de cualquier medida, desde 5 hasta 50 mm de espesor. Perforadas, con rigidizadores o con pernos embebidos según proyecto.",
    pieces: [
      { id:"placa-estandar", name:"Placa de Anclaje Estándar", shape:"placa", img:IMG.placas,
        short:"Placa perforada a medida.",
        lead:"Placa de anclaje perforada para transmisión de cargas a la cimentación.",
        desc:["La <strong>placa de anclaje</strong> reparte las cargas de un pilar sobre el hormigón mediante pernos o taladros."],
        features:[["Material","Acero S275-JR"],["Espesor","De 5 a 50 mm"],["Perforación","A medida"],["Acabado","Galvanizado / pintado"],["Fabricación","Sobre plano"]],
        whatTitle:"¿Qué es la placa de anclaje?",
        whatBody:["Es una <strong>plancha de acero perforada</strong> que sirve de interfaz entre un elemento estructural y su cimentación."]},
      { id:"placa-rigidizada", name:"Placa con Rigidizadores", shape:"placa_rig", img:IMG.placas,
        short:"Placa con cartelas de refuerzo.",
        lead:"Placa de anclaje reforzada con rigidizadores para grandes esfuerzos.",
        desc:["La placa con <strong>rigidizadores</strong> incorpora cartelas soldadas que aumentan su rigidez frente a momentos elevados."],
        features:[["Material","Acero S275-JR"],["Refuerzo","Cartelas soldadas"],["Espesor","De 15 a 50 mm"],["Acabado","Galvanizado / pintado"],["Fabricación","Sobre plano"]],
        whatTitle:"¿Qué es la placa con rigidizadores?",
        whatBody:["Es una placa de anclaje a la que se sueldan <strong>rigidizadores triangulares</strong> para aumentar su capacidad frente a flexión."]},
      { id:"placa-pernos", name:"Placa con Pernos Embebidos", shape:"placa_pernos", img:IMG.placas,
        short:"Placa con pernos de anclaje.",
        lead:"Placa de anclaje con pernos soldados listos para embeber en el hormigón.",
        desc:["La <strong>placa con pernos embebidos</strong> se hormigona directamente en la cimentación, quedando los pernos anclados."],
        features:[["Material","Acero S275-JR"],["Pernos","Soldados a medida"],["Espesor","De 10 a 40 mm"],["Acabado","Galvanizado"],["Fabricación","Sobre plano"]],
        whatTitle:"¿Qué es la placa con pernos embebidos?",
        whatBody:["Es una placa de anclaje que lleva <strong>pernos soldados</strong> en su cara inferior para quedar embebida en el hormigón."]}
    ]
  },

  canalon: {
    title: "Sujeción de Canalón y Otros",
    eyebrow: "Catálogo · Piezas especiales",
    hero: IMG.canalon,
    intro: "Piezas para canalones de 80 y 120 mm, abrazaderas de correa, argollas de elevación y piezas especiales fabricadas bajo plano.",
    pieces: [
      { id:"canalon-80", name:"Sujeción Canalón 80 mm", shape:"canalon", img:IMG.canalon,
        short:"Soporte para canalón de 80 mm.",
        lead:"Soporte de sujeción para canalones de 80 mm en cubiertas.",
        desc:["El <strong>soporte de canalón de 80 mm</strong> fija y sostiene el canalón de recogida de aguas en la línea de cubierta."],
        features:[["Material","Acero galvanizado"],["Canalón","80 mm"],["Acabado","Galvanizado"],["Fijación","A hormigón"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es la sujeción de canalón?",
        whatBody:["Es un <strong>soporte metálico</strong> que sostiene el canalón de evacuación de aguas de la cubierta."]},
      { id:"canalon-120", name:"Sujeción Canalón 120 mm", shape:"canalon", img:IMG.canalon,
        short:"Soporte para canalón de 120 mm.",
        lead:"Soporte de sujeción para canalones de 120 mm.",
        desc:["Versión del soporte para <strong>canalones de 120 mm</strong>, con mayor capacidad de carga."],
        features:[["Material","Acero galvanizado"],["Canalón","120 mm"],["Acabado","Galvanizado"],["Fijación","A hormigón"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es la sujeción de canalón de 120 mm?",
        whatBody:["Es el soporte de canalón <strong>de mayor sección</strong> de la gama."]},
      { id:"argolla", name:"Argolla de Elevación", shape:"argolla", img:IMG.fabricacion,
        short:"Punto de izado para piezas.",
        lead:"Argolla de elevación embebida para el izado seguro de piezas prefabricadas.",
        desc:["La <strong>argolla de elevación</strong> se embebe en la pieza y sirve como punto de enganche durante el transporte y montaje."],
        features:[["Material","Acero alta resistencia"],["Función","Punto de izado"],["Acabado","Galvanizado"],["Carga","Según pieza"],["Fabricación","A medida"]],
        whatTitle:"¿Qué es la argolla de elevación?",
        whatBody:["Es un <strong>herraje de izado embebido</strong> en la pieza de hormigón que permite engancharla con seguridad."]}
    ]
  }
};
