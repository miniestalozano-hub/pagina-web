# PRD — Talleres M. Iniesta (Web)

## Iteración 5 (22 Feb 2026) — Blog dedicado + limpieza landing

### Cambios aplicados
- **Eliminada** sección "Catálogo completo (80 páginas)" del homepage + borrado `catalog_pages.js`.
- **Blog reestructurado**: los 3 artículos genéricos del homepage se sustituyen por 4 artículos reales del sector escritos para Talleres M. Iniesta:
  1. Marcado CE 1239 y EN 1090-1 (Certificación · 12 Feb 2026)
  2. Sistema antivuelco Guía 40/22 + TCA (Producto · 28 Ene 2026)
  3. Escuadras fresadas con arandela dentada (Innovación · 15 Ene 2026)
  4. Fabricación a medida desde 1 pieza (Servicios · 3 Ene 2026)
- Cada tarjeta abre una **página dedicada** `articulo.html?slug=xxx` (no modal, no landing) con hero, portada, cuerpo formateado, CTA de presupuesto y sección "Sigue leyendo".
- Nueva **página índice `blog.html`** con listado completo, breadcrumb y diseño coherente.
- El item "Blog" del menú del homepage apunta ahora a la sección `#blog` (dentro del landing) y en el resto de páginas al índice `blog.html`.
- Datos de artículos en `data.js` (`ARTICLES = [...]`) fácilmente ampliables.

### Fixes visuales
- `object-fit:contain` universal y `background:#fff` para todos los contenedores de piezas y categorías (`.cat-card-img`, `.piece-card-img`).
- Alturas mínimas explícitas para prevenir recortes.
- Blog grid pasa a 4 columnas en desktop (2 en tablet, 1 en móvil).
- Filtro `GALLERY_IGNORE` en `data.js` para eliminar logos y snippets irrelevantes de las galerías por pieza.

## Arquitectura actual
```
/app/frontend/public/
├── index.html            # Landing principal
├── blog.html             # Índice del blog (nueva)
├── articulo.html         # Detalle de artículo (nueva)
├── producto-detalle.html # Categoría de producto
├── pieza.html            # Detalle de pieza (con visor 3D)
├── data.js               # DATA + SERVICES + GALLERY + ARTICLES
├── app.js                # Lógica de producto-detalle.html
├── pieza.js              # Lógica de pieza.html
└── viewer.js             # Three.js visor 3D

/app/backend/server.py    # FastAPI /api/contact
```

## Historial
- Iter 1: Base HTML + backend contact + LinkedIn/WhatsApp
- Iter 2: Catálogo TMI 2024 (40+ piezas), 6 categorías, mix-blend-mode
- Iter 3: Hero 2-col, reveal fix, galería pieza con lightbox, contadores
- Iter 4: Hero fix (no cutoff), noxifer hover, fotos corregidas, sección procesos
- Iter 5: Blog dedicado (4 artículos + articulo.html + blog.html), eliminación catálogo 80 páginas, fixes de imágenes

## Backlog / Próximos pasos
- P1: Modelos 3D específicos por pieza con detalle industrial exacto
- P1: Sección "Quiénes Somos" con historia completa 40 años
- P2: Comparativa interactiva entre piezas (tabla lado a lado)
- P2: Envío real de email vía Resend/SendGrid (backend `/api/contact` ya guarda pero no envía correo)
- P2: Buscador en el índice del blog + categorías filtrables
- P2: RSS del blog para SEO
