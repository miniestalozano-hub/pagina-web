# PRD — Talleres M. Iniesta (Web réplica + rework)

## Problema original
Réplica de talleresiniesta.es con catálogo TMI 2024 completo, correcciones y mejoras.

## Historial de correcciones aplicadas

### Iteración 1 (base)
- Copia + rework total de la web original desde preview
- Hero rediseñado en 2 columnas (texto + imagen)
- Página propia por pieza (`pieza.html?id=<id>`) con visor 3D + acordeones
- 5 acordeones interactivos (Sistema, Materiales, Dimensiones, Instrucciones, ¿Qué es?)
- LinkedIn/WhatsApp reales
- Formulario contacto → POST `/api/contact` (guarda en MongoDB)
- Sección Servicios (6 tarjetas)
- Menú hamburguesa funcional
- Sección Descargas eliminada

### Iteración 2 (correcciones catálogo)
- **Imágenes sin cuadrado blanco**: `mix-blend-mode: multiply` en todas las fotos de piezas
- **Catálogo TMI 2024 completo**: 88 páginas PDF procesadas, ~40 productos añadidos con imágenes extraídas del PDF
- **6 categorías** completas:
  1. Fijaciones Antivuelco (21 piezas)
  2. Fijaciones Ajustables (10 piezas)
  3. Fijación de Cubiertas (8 piezas)
  4. Placas de Anclaje (1 a medida)
  5. Soluciones a Medida (1)
  6. Mecanizado (1)
- **Sección Catálogo redesign**: gradient azul + tarjeta rotada -2deg + fila de 4 stats (+40 años, 40+ piezas, 6 CNC, 1 pieza mínimo)
- **Menú hamburguesa** reforzado con CSS y JS
- **Imágenes reales del PDF** extraídas a `/catalog_img/` (Guía, Tornillo TCA, Bayoneta, Anclaje oculto, Escuadras, Fresadas, U Correa, Z Cubierta, Argollas, etc.)

## Arquitectura
- **Frontend estático** HTML/JS en `/app/frontend/public/`
- **Backend FastAPI** en `/app/backend/server.py`
- **Imágenes catálogo** extraídas del PDF a `/app/frontend/public/catalog_img/`
- **PDF fuente** guardado en `/app/memory/catalog.pdf`

## Rutas
- `/` — Home con hero + 6 categorías + servicios + catálogo TMI 2024 + contacto
- `/producto-detalle.html?producto=antivuelco|ajustables|cubiertas|placas|medida|mecanizado`
- `/pieza.html?id=guia-4022|tornillo-tca|bayoneta|...` (40+ piezas)
- `POST /api/contact` — guarda solicitud presupuesto
- `GET /api/contact` — lista solicitudes

## Backlog / Próximas mejoras
- [ ] Modelos 3D específicos por cada pieza (con dentados y taladros reales del catálogo)
- [ ] Sección "Quiénes Somos" con datos completos (40 años, certificaciones)
- [ ] Envío real de email al form (Resend/SendGrid) — usuario dijo no de momento
- [ ] Panel admin para consultar mensajes de `/api/contact`
- [ ] Filtros por carga admisible / dimensiones en cada categoría
- [ ] Datos técnicos: tabla de capacidad portante por pieza
- [ ] Mostrar acabados disponibles como toggles en la ficha
