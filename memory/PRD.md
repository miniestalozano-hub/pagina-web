# PRD — Talleres M. Iniesta (Web)

## Iteración 11 (22 Feb 2026) — Conjuntos "a medida" + arandelas + cycle hero

### Cambios aplicados

**Imágenes principales:**
- Escuadra 60x8 → `escuadra_60x8_real.png` (nueva foto cliente)
- Plantilla a Medida → `plantilla_medida_real.png` (foto cliente)
- Z Cubierta → `z_cubierta_real.png` (foto cliente)
- Anclajes Ocultos a Medida → `conjunto_aocultos_medida.png` (composición 6 piezas de p23)
- Ángulo a Medida → `conjunto_angulo_medida.png` (composición p26)
- Pletina a Medida → `conjunto_pletina_medida.png` (composición p31)
- Escuadras 80x8 a Medida → `conjunto_esc80_medida.png` (composición p63)
- Placa de Anclaje → `conjunto_placas.png` (composición p83)
- Solución a Medida → `conjunto_soluciones.png` (composición p85)
- Mecanizado → `conjunto_mecanizado.png` (composición p87)

Los conjuntos se han generado con `pdftoppm 200dpi` + PIL crop para captar todas las piezas de cada página con nitidez.

**Galería Arandelas Dentadas**: 5 imágenes individuales recortadas de la imagen cliente:
- `arandela_1.png`, `arandela_2.png`, `arandela_3.png`, `arandela_perfil.png`, `arandela_plano.png`

**Galerías vacías** en piezas "a medida" (Más imágenes oculto): aocultos-medida, angulo-medida, pletina-medida, plantilla-medida, esc-fresada-medida, placa-medida, solucion-medida, mecanizado.

**Enlaces directos desde homepage** (saltando `producto-detalle.html`):
- Tarjeta Placas → `pieza.html?id=placa-medida`
- Tarjeta Soluciones a Medida → `pieza.html?id=solucion-medida`
- Tarjeta Mecanizado → `pieza.html?id=mecanizado`

**Auto-cycle hero con fade + blur** en las 3 categorías single-piece:
- Objeto `HERO_CYCLE` en data.js con arrays de 6-7 imágenes por pieza
- pieza.js aplica setInterval 1500ms con transición opacity + blur .35s
- Preload de todas las imágenes al montar la página

## Historial
- Iter 1-10: Base + catálogo + hover + FEA + Comparador + galerías md5-filtradas
- Iter 11: Conjuntos "a medida" + arandelas troceadas + HERO_CYCLE animation

## Backlog / Próximos pasos
- P1: Historia "Quiénes Somos" con timeline de 40 años
- P2: Envío real de email vía Resend/SendGrid
- P2: Buscador y filtro por categoría en blog.html
