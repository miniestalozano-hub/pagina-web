# PRD — Talleres M. Iniesta (Web)

## Iteración 4 (correcciones finales)

### Cambios aplicados
- **Hero completamente rediseñado**: se añade `padding-top:96px` para respetar el header fijo y ya no se corta la parte superior. Las tarjetas flotantes se ven perfectas.
- **Animación estilo noxifer**: las tarjetas de categoría ahora tienen overlay que se desliza desde abajo (transform:translateY 100%→0), gradient azul intenso, con el título+descripción emergiendo. Mismo efecto en piece-cards del listado.
- **Fotos incorrectas corregidas**:
  - Bayoneta/Bayoneta fresada → `p14_img03.jpeg` (foto real en contexto de guía embebida)
  - Pletina 250x50x8 / Pletina a Medida → `p31_img04.png` (foto real de la pletina con 4 taladros)
- **Nueva sección "Nuestras capacidades"** con 3 tarjetas (Mecanizado CNC, Torneado, Soldadura homologada) usando fotos reales del catálogo (p87_img42, p87_img43, p87_img47) + fila de 5 badges de certificaciones (CE 1239, EN 1090-1, Tecnalia, Bureau Veritas, UNE-EN 1993-1-1/8).

### Contenido dinámico
- Contador animado en stats (+40, 40+, 6, 1)
- Tarjetas flotantes en hero (3 animaciones distintas)
- Lightbox modal en galería de piezas
- Hover slide-up con gradient en categorías y piezas (estilo noxifer)
- Nueva sección de procesos con imágenes reales del catálogo TMI

## Historial resumido
- Iter 1: Base HTML + backend contact + LinkedIn/WhatsApp
- Iter 2: Catálogo TMI 2024 (40+ piezas), 6 categorías, mix-blend-mode
- Iter 3: Hero 2-col, reveal fix, galería pieza con lightbox, contadores
- Iter 4: Hero fix (no cutoff), noxifer hover, fotos corregidas, sección procesos

## Backlog
- Modelos 3D específicos por pieza con detalle industrial exacto
- Sección "Quiénes Somos" con historia completa 40 años
- Comparativa interactiva entre piezas
- Envío real de email (Resend/SendGrid cuando el usuario lo pida)
