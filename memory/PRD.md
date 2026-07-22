# PRD — Talleres M. Iniesta (Web)

## Iteración 9 (22 Feb 2026) — Análisis 80 páginas + fotos principales pieza-sola

### Cambios aplicados (6 swaps)
Se auditaron las 43 piezas del catálogo TMI y se corrigieron las que NO cumplían el criterio "pieza sola sobre fondo blanco":

| Producto | Antes | Ahora | Motivo |
|---|---|---|---|
| Anclaje Oculto | `p18_img03.jpeg` | `p17_img02.jpeg` | Estaba en hormigón — ahora pieza sola sin corcho |
| AOculto 100 | `p22_img03.jpeg` | `p21_img03.jpeg` | Estaba en hormigón con panel — ahora pieza sola |
| Argollas de Elevación | `p81_img03.png` | `argolla_real.png` (extraído del PDF p81) | Era un plano técnico — ahora foto real ARG-220 |
| Solución a Medida | `p85_img01.jpeg` | `p85_img04.jpeg` | Render sobre fondo oscuro — ahora foto real fondo blanco |
| Z Cubierta | `p72_img03.png` | `p75_img03.jpeg` | Igual que Z Correa — ahora foto propia de p75 |
| Escuadra Fresada 50x8 | `p51_img01.png` | `p47_img01.jpeg` | Compartía imagen con Interior 80x8 — ahora foto propia p47 |
| Escuadra Fresada Refuerzo 80x8 | `p63_img03.png` | `p61_img01.jpeg` | Compartía imagen con "a Medida" — ahora foto propia p61 |

### Verificación
- Testing agent (iteration_1.json): 100% éxito para el requisito ("todas las tarjetas piezas solas sobre fondo blanco/gris claro, sin planos, sin renders en contexto")
- Sin errores JS en las 6 páginas de categoría ni en el homepage

## Arquitectura actual
```
/app/frontend/public/
├── index.html · blog.html · articulo.html · comparar.html
├── producto-detalle.html · pieza.html
├── data.js (43 piezas, todas con foto pieza-sola verificada)
├── app.js · pieza.js · viewer.js
└── catalog_img/ (+ argolla_real.png)
```

## Historial
- Iter 1-5: Base + catálogo + blog dedicado + hover noxifer
- Iter 6: Ingeniería FEA + Comparador + acordeones
- Iter 7: Pulido FEA + hover cat minimalista
- Iter 8: Leads enriquecidos + fotos Guía/TCA + anclajes sin corcho
- Iter 9: Auditoría 88 páginas del PDF + 7 imágenes principales corregidas + testing agent OK

## Backlog / Próximos pasos
- P1: Historia "Quiénes Somos" con timeline de 40 años
- P2: Envío real de email vía Resend/SendGrid
- P2: Buscador y filtro por categoría en blog.html
- P2: Botón "Comparar con otra pieza" en pieza.html
