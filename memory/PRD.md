# PRD — Talleres M. Iniesta (Web réplica + rework)

## Problema original
Rehacer la web `woodcraft-demo.preview.emergentagent.com` (réplica de talleresiniesta.es) con las siguientes correcciones y mejoras:
1. Imágenes de piezas específicas (ya no la genérica de logo)
2. LinkedIn / WhatsApp reales
3. Formulario "Solicitar presupuesto" funcional (backend)
4. Desplegables faltantes en la descripción (Descripción del sistema, Materiales, Dimensiones, Instrucciones de uso, ¿Qué es?)
5. Página propia por producto (no misma página)
6. Hero rediseñado con 2 columnas (texto + imagen) sin espacios vacíos
7. Datos y fotos del catálogo TMI 2024 (adjunto PDF)
8. Vista 3D para cada pieza
9. Sección de servicios
10. Menú hamburguesa funcional
11. Descargas: descartadas por ahora

## Arquitectura
- **Frontend estático** HTML/JS servido desde `/app/frontend/public/` por webpack-dev-server
  - `index.html` — home con hero 2-col, categorías, servicios, contacto
  - `producto-detalle.html` — página de categoría con grid de piezas → navega a `pieza.html`
  - `pieza.html` — página propia por pieza con visor 3D, ficha técnica y 5 acordeones
  - `data.js` — catálogo completo TMI 2024 (4 categorías, 21 piezas)
  - `app.js` — lógica de página categoría
  - `pieza.js` — lógica de página individual con acordeones interactivos + relacionadas
  - `viewer.js` — visor 3D Three.js con shapes: escuadra, bracket, escuadra_dentada, channel, bolt, bayoneta, bayoneta_fresada, arandela, u_correa, z_piece, s_piece, anclaje, argolla, placa, canalon
- **Backend FastAPI** en `/app/backend/server.py`
  - `POST /api/contact` — guarda solicitud de presupuesto en MongoDB
  - `GET /api/contact` — lista contactos guardados

## Implementado (2026-07-21)
- [x] Copia + rework total de la web original desde preview
- [x] Data catálogo TMI 2024 completo con nombres, códigos, materiales, cargas
- [x] Hero rediseñado en 2 columnas (texto izquierda + imagen producto derecha)
- [x] Página propia por pieza (`pieza.html?id=<id>`) con visor 3D + acordeones
- [x] 5 acordeones interactivos (Sistema, Materiales, Dimensiones, Instrucciones, ¿Qué es?)
- [x] LinkedIn → `https://es.linkedin.com/company/talleres-m-iniesta`
- [x] WhatsApp → `https://wa.me/34629747960`
- [x] Formulario contacto → POST `/api/contact` (guarda en MongoDB)
- [x] Sección Servicios (6 tarjetas: Diseño, CNC, A medida, Calidad, Logística, Asesoría)
- [x] Menú hamburguesa funcional con overlay y dropdown de productos
- [x] Nuevas categorías (Fijaciones Antivuelco, Ajustables, Cubiertas, Placas)
- [x] Nuevos shapes 3D: bayoneta, arandela, u_correa, z_piece, s_piece
- [x] Sección Descargas eliminada
- [x] Responsive móvil verificado

## Backlog / Próximas mejoras (P1)
- [ ] Añadir 1 pieza más a "Fijaciones Antivuelco" para llegar a 12 según catálogo
- [ ] Modelos 3D más detallados con dentados y taladros mecanizados
- [ ] `data-testid` en todos los interactive elements para QA
- [ ] Envío real de email al form (Resend/SendGrid) cuando el usuario lo pida
- [ ] Sección "Quiénes Somos" con datos reales del catálogo (40 años, certificaciones)
- [ ] Página propia por categoría con filtros (por tipo, por carga admisible)
- [ ] Panel admin para consultar los mensajes de `/api/contact` sin curl

## Rutas
- `/` — Home
- `/producto-detalle.html?producto=paneles|ajustables|cubiertas|placas`
- `/pieza.html?id=guia-4022|tornillo-tca|bayoneta|...`
- `/api/contact` (POST/GET)
