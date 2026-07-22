# PRD — Talleres M. Iniesta (Web)

## Iteración 7 (22 Feb 2026) — Pulido integral: FEA, hovers, mensajes

### Fixes aplicados
- **Sección Ingeniería y Simulación (FEA)**:
  - Re-cropeadas las 4 imágenes FEA (`fea_cad`, `fea_mesh`, `fea_stress`, `fea_deform`) con ImageMagick — eliminados textos residuales del catálogo y la barra vertical azul artefacto.
  - Quitado `mix-blend-mode:multiply` sobre las imágenes FEA (preserva la escala de color).
  - Contenedor `.eng-canvas` con más padding (30px × 40px) para dar aire a las imágenes.
  - Aspect ratio pasa a 16/10 (era 16/11) para acomodar mejor las 4 tabs.
- **Cat-card hover (categorías de productos)**:
  - Contenido totalmente distinto al que aparece debajo: aplicación/caso de uso · lista de facts técnicos con bullets · CTA en pill.
  - Cada tarjeta con icono lucid diferente (compass, tuning knob, house, grid, hex, gear).
  - Nueva animación: **clip-path radial** desde esquina inferior-derecha (0% → 155%), con fade+slide escalonado de icon → eyebrow → h4 → facts → CTA. Radicalmente distinta al slide-up de las tarjetas de pieza.
- **"Pedido mínimo desde 1 pieza" eliminado en toda la web**:
  - Topbars de las 6 páginas (`index`, `pieza`, `producto-detalle`, `blog`, `articulo`, `comparar`).
  - Meta description del index.
  - Badge del hero (3 → 2 badges).
  - Strip de stats bajo el hero.
  - Sección "Por qué elegirnos" (lista de bullets).
  - CTA del catálogo (stat "1 Pieza mínimo" → "100% A medida").
  - Texto del accordion "Dimensiones y referencias" (helper por defecto en `data.js`).
  - Artículo del blog "Fabricación desde 1 pieza" renombrado a "Cómo fabricamos herrajes sobre plano del cliente en 10-15 días" (mismo contenido técnico, título distinto).
  - Mención residual en el body del artículo "Sistema antivuelco 40/22 + TCA".

## Arquitectura actual
```
/app/frontend/public/
├── index.html            # Landing (cat-card hover reworked · Ingeniería reworked)
├── blog.html             # Índice blog
├── articulo.html         # Detalle artículo (thumbs contain)
├── comparar.html         # Comparador lado a lado
├── producto-detalle.html # Categoría con hover ¿Qué es y para qué sirve? (piece-cards)
├── pieza.html            # Detalle pieza con 5 acordeones + normativa (cerrados)
├── pieza.js              # Acordeones cerrados por defecto
├── data.js               # DATA + ARTICLES + GALLERY (filtro 84 rutas logos)
├── app.js                # Render piezas con hover lead
├── viewer.js             # Three.js viewer
└── catalog_img/          # + fea_cad/mesh/stress/deform (recroppeadas) + sce_real.png
```

## Historial
- Iter 1-4: Base + catálogo + hover noxifer + procesos
- Iter 5: Blog dedicado (4 artículos + páginas) + limpieza landing
- Iter 6: Ingeniería FEA + Comparador + acordeones cerrados + hover lead
- Iter 7: Pulido FEA + hover cat-card reworked + eliminación mensaje "1 pieza"

## Backlog / Próximos pasos
- P1: Historia "Quiénes Somos" con timeline de 40 años y fotos históricas
- P2: Envío real de email vía Resend/SendGrid
- P2: Buscador y filtro por categoría en blog.html
- P2: Botón "Comparar con otra pieza" en la ficha de pieza (comparar.html?a=xxx)
- P3: RSS del blog para SEO
