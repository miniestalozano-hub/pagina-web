# PRD — Talleres M. Iniesta (Web réplica + rework)

## Iteración 3 (correcciones visuales solicitadas por usuario)

### Cambios aplicados
- **Hero rediseñado**: layout con 3 tarjetas flotantes con animación suave (translateY + rotación) y difuminado en el borde inferior para que no invada la sección siguiente
- **Reveal fix**: los elementos ya no arrancan con `opacity:0`, evita las secciones "vacías" cuando el observer no dispara (fallo notable en "Más que fabricación")
- **Fotos de piezas sin zoom**: `object-fit:contain` + padding, hover reducido a scale 1.02
- **Solo fotos de piezas** (no diagramas): categoría "Ajustables" ahora usa foto real de escuadra fresada, Antivuelco usa ángulo largo, Cubiertas usa Z Cubierta, Placas usa foto real
- **Galería adicional en cada pieza** (`pieza.html`): 3 fotos extra del catálogo debajo de las características, con lightbox al pulsar
- **Contador animado** en las 4 estadísticas del catálogo (dispara al scroll)
- **Iconos mejorados en imágenes de categoría** con onerror fallback

### Contenido dinámico añadido
- Contador animado stats (+40, 40+, 6, 1) al entrar en viewport
- 3 imágenes flotantes en cada slide del hero, cada una con animación de flotación distinta
- Lightbox modal para ver fotos de pieza a gran tamaño
- Galería adicional (3 fotos por pieza extraídas del catálogo PDF)

## Historial resumido (iteraciones 1-3)
- **Iter 1**: base HTML + backend contact + pieza.html + LinkedIn/WhatsApp reales
- **Iter 2**: catálogo TMI 2024 completo (40+ piezas, 6 categorías) + mix-blend-mode + fix hamburguesa
- **Iter 3**: hero rediseñado + galería + contadores + fix reveal + imágenes categoría corregidas

## Rutas activas
- `/` — Home
- `/producto-detalle.html?producto=<antivuelco|ajustables|cubiertas|placas|medida|mecanizado>`
- `/pieza.html?id=<40+ piezas>`
- `POST /api/contact` · `GET /api/contact`

## Backlog
- [ ] Modelos 3D específicos por pieza usando fotos del catálogo como referencia
- [ ] Sección "Quiénes Somos" con datos completos
- [ ] Comparativa interactiva de piezas (Bayoneta vs Bayoneta Fresada, etc.)
- [ ] Envío real de email cuando el usuario lo pida (Resend/SendGrid)
- [ ] Panel admin para leer los mensajes recibidos
