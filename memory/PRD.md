# PRD — Talleres M. Iniesta (Web)

## Iteración 6 (22 Feb 2026) — Ingeniería FEA + Comparador + limpieza integral

### Nuevas secciones/páginas
- **Sección "Ingeniería y Simulación"** en homepage entre "Nuestras capacidades" y "Servicios":
  - Grid 2 columnas: texto explicativo (Solid Edge + NX Nastran, FEA) + visor con 4 pestañas ("Modelo CAD", "Malla FEM", "Análisis de tensiones", "Deformaciones") con auto-rotación cada 5s.
  - 3 tarjetas: Diseño CAD paramétrico, Simulación FEM, Optimización estructural.
  - Logos de Siemens · NX Nastran · Solid Edge en escala de grises con color al hover.
  - Imágenes FEA reales extraídas del catálogo TMI (`fea_cad.png`, `fea_mesh.png`, `fea_stress.png`, `fea_deform.png`).
- **Página `comparar.html`** — Comparador interactivo lado a lado:
  - 2 selectores agrupados por categoría (optgroup).
  - Tarjetas con foto + código + descripción de cada pieza seleccionada.
  - Tabla comparativa con todas las características (Categoría, Referencias, Longitudes, Material, Acabado, etc.). Filas coincidentes destacadas.
  - CTA final para presupuesto.
  - Accesible desde menú principal ("Comparar") y desde submenú Productos.

### Fixes aplicados
- **Hover de piezas**: ahora muestra "¿Qué es y para qué sirve?" con el texto largo `lead` (distinto al `short` que aparece bajo la tarjeta).
- **Acordeones de pieza**: todos cerrados por defecto (no auto-abre el primero). Añadido nuevo bloque **"Capacidad de carga y normativa"** con referencias UNE-EN 1993-1-1/8, CE 1239, Tecnalia y Bureau Veritas. Todos los acordeones tienen texto por defecto enriquecido cuando la pieza no define contenido específico.
- **Blog "Sigue leyendo"**: thumbs con `object-fit:contain` sobre fondo blanco + padding (elimina zoom exagerado).
- **`blog.html` (índice)**: thumbs también con `contain` para mostrar la pieza entera.
- **Galería de pieza**: filtro `GALLERY_IGNORE` ampliado a 84 rutas de logos CE (5155 bytes) y TMI (24595 bytes) + dedupe automático de rutas repetidas.
- **Z Correa**: galería limpia — 2 fotos (real + plano cotado).
- **Z Cubierta**: cambia a `p72_img03.png` (foto Z distinta a la ZCC) para no duplicar la imagen del ZCC.
- **Z Cubierta Coliso**: foto real (`p73_img26.jpeg`) en lugar del plano técnico.
- **SCE**: usa `sce_real.png` (imagen facilitada por el cliente) — pieza en L completa con taladro.
- **Menú principal**: enlaces "Ingeniería" y "Comparar" añadidos en index, pieza y producto-detalle.

## Arquitectura actual
```
/app/frontend/public/
├── index.html            # Landing (nueva sección Ingeniería + link Comparar en Productos)
├── blog.html             # Índice del blog
├── articulo.html         # Detalle de artículo (fix zoom en sigue-leyendo)
├── comparar.html         # NUEVO — Comparador lado a lado
├── producto-detalle.html # Categoría — hover "¿Qué es y para qué sirve?" con lead
├── pieza.html            # Detalle de pieza (5 acordeones + normativa)
├── pieza.js              # Acordeones cerrados por defecto + dedupe galería
├── data.js               # DATA + ARTICLES + GALLERY (con IGNORE ampliado) + accordionsFor
├── app.js                # Render piezas con hover.lead
├── viewer.js             # Three.js 3D viewer
└── catalog_img/          # Fotos + fea_cad/mesh/stress/deform.png + sce_real.png
```

## Historial
- Iter 1: Base HTML + backend contact + LinkedIn/WhatsApp
- Iter 2: Catálogo TMI 2024 (40+ piezas), 6 categorías
- Iter 3: Hero 2-col, reveal, galería, contadores
- Iter 4: Hero fix, noxifer hover, fotos corregidas, procesos
- Iter 5: Blog dedicado (4 artículos + articulo.html + blog.html), sin catálogo 80 páginas
- Iter 6: Ingeniería FEA + Comparador + acordeones cerrados + hover lead + limpieza galerías

## Backlog / Próximos pasos
- P1: Historia "Quiénes Somos" con timeline de 40 años y fotos históricas
- P2: Envío real de email vía Resend/SendGrid (backend `/api/contact` ya guarda)
- P2: Buscador y filtro por categoría en `blog.html`
- P2: Preselección URL en comparador (`comparar.html?a=guia-4022&b=tornillo-tca`) — ya soportado, falta enlace desde ficha
- P3: RSS del blog para SEO
