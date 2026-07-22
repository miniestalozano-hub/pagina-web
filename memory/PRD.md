# PRD — Talleres M. Iniesta (Web)

## Iteración 10 (22 Feb 2026) — 3 fotos cliente + galerías reconstruidas

### Cambios aplicados

**3 imágenes principales facilitadas por cliente:**
| Producto | Imagen |
|---|---|
| Escuadra 60x8 | `escuadra_60x8_real.png` (silver L-bracket con 3 taladros) |
| Plantilla a Medida | `plantilla_medida_real.png` (trapezoidal wedge con hueco) |
| Z Cubierta | `z_cubierta_real.png` (Z-shape con hueco oval) |

**Galerías reconstruidas de forma exhaustiva:**
- Script Python analiza los 235 archivos del `catalog_img/` y calcula MD5 de cada uno.
- Detecta **3 hashes de logo** que aparecen ≥4 veces en el catálogo (CE de 5155 bytes + 2 variantes TMI de 24543 y 24595 bytes) — se excluyen automáticamente por hash sin importar el nombre de archivo.
- Filtros adicionales: aspect ratio > 2.8 con size < 40KB (banners), size < 8KB (fragmentos).
- Total: 199 ficheros excluidos, 156 fotos válidas de producto distribuidas en 43 galerías.
- Argollas ampliada con `argolla_plano.png` (plano técnico con cotas H, B, A, E, Ø13, 80°) extraído directamente del PDF con `pdftoppm` + `convert crop`.
- Verificación programática: **0 logos** en cualquier galería (auditado por md5).
- Verificación visual: galerías de Guía Perfil 40/22, Bayoneta y Argollas revisadas — todo son fotos de producto o planos, ningún logo.

## Historial
- Iter 1-8: Base + Blog + Ingeniería FEA + Comparador
- Iter 9: Auditoría 88 páginas + 7 fotos principales corregidas
- Iter 10: 3 fotos cliente + galerías reconstruidas con filtro MD5 (156 imgs limpias)

## Backlog / Próximos pasos
- P1: Historia "Quiénes Somos" con timeline de 40 años
- P2: Envío real de email vía Resend/SendGrid
- P2: Buscador y filtro por categoría en blog.html
- P2: Botón "Comparar con otra pieza" en pieza.html
