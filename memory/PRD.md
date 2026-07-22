# PRD — Talleres M. Iniesta (Web)

## Iteración 8 (22 Feb 2026) — Hover en todas las categorías + fotos Guía/TCA + anclajes sin corcho

### Cambios aplicados
- **Hover "¿Qué es y para qué sirve?"** enriquecido en las 12 piezas donde el `lead` coincidía con el `short`:
  - Escuadras (60x8, refuerzo 50, doble refuerzo 50, refuerzo 60): descripción de aplicación específica según carga y refuerzo.
  - Escuadras Fresadas (ref-50, drefz-50, ref-60, drefz-60, ref-80, medida): descripción del bloqueo antideslizamiento + arandela dentada + capacidad.
  - Z Cubierta Coliso: descripción del coliso para regulación horizontal.
  - Argollas de Elevación: descripción del izado seguro con eslinga.
- **Guía Perfil 40/22**: añadido `guia_plano.png` (plano técnico con cotas 40±0.5, 22, Ø10, 18±1, 4×Ø5) al gallery. Removidos `p11_img03.png` y `p11_img05.png` (logos).
- **Tornillo TCA**: añadido `tca_montaje.png` (secuencia de 3 pasos del montaje: colar, girar 90°, apretar) al gallery. Removidos logos.
- **Anclaje Oculto**: `IMG.anclaje` pasa de `p17_img01.png` (con corcho blanco) a `p18_img03.jpeg` (render sin corcho, muestra la pieza embebida con el coliso Ø19×79 interior).
- **AOculto 100**: `IMG.anclaje100` pasa de `p21_img03.jpeg` (con corcho) a `p22_img03.jpeg` (render sin corcho, muestra la pieza en hormigón con panel + tornillo TCA visible).

## Arquitectura actual
```
/app/frontend/public/
├── index.html            # Landing con Ingeniería FEA + cat-hover minimalista
├── blog.html             # Índice blog
├── articulo.html         # Detalle artículo
├── comparar.html         # Comparador
├── producto-detalle.html # Grid categoría con hover ¿Qué es y para qué sirve? (todas las piezas)
├── pieza.html            # Detalle pieza + 5 acordeones (cerrados)
├── pieza.js              # Dedupe galería
├── data.js               # DATA + ARTICLES + GALLERY (43 piezas, todas con lead distintivo)
├── app.js
├── viewer.js
└── catalog_img/          # + guia_plano.png + tca_montaje.png + fea_*.png + sce_real.png
```

## Historial
- Iter 1-4: Base + catálogo + hover noxifer + procesos
- Iter 5: Blog dedicado
- Iter 6: Ingeniería FEA + Comparador + acordeones cerrados
- Iter 7: Pulido FEA + hover cat minimalista + eliminación "1 pieza"
- Iter 8: Leads enriquecidos + fotos Guía/TCA + Anclajes ocultos sin corcho

## Backlog / Próximos pasos
- P1: Historia "Quiénes Somos" con timeline de 40 años y fotos históricas
- P2: Envío real de email vía Resend/SendGrid
- P2: Buscador y filtro por categoría en blog.html
- P2: Botón "Comparar con otra pieza" en la ficha de pieza
- P3: RSS del blog para SEO
