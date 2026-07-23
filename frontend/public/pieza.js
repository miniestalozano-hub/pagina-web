/* eslint-disable no-undef */
/* global DATA, ALL_PIECES, Viewer3D, accordionsFor */
/* ================= Página individual de pieza ================= */
(function () {
  const params = new URLSearchParams(window.location.search);
  const pieceId = params.get('id');
  const piece = ALL_PIECES[pieceId] || Object.values(ALL_PIECES)[0];
  const category = DATA[piece.categoryKey];

  // Header/breadcrumb
  document.getElementById('bcCurrent').textContent = piece.name;
  const bcCat = document.getElementById('bcCategory');
  bcCat.textContent = category.title;
  bcCat.href = 'producto-detalle.html?producto=' + piece.categoryKey;
  document.title = piece.name + ' | ' + category.title + ' | Talleres M. Iniesta';

  // Hero
  document.getElementById('pzEyebrow').textContent = category.eyebrow;
  document.getElementById('pzTitle').textContent = piece.name;
  document.getElementById('pzCode').textContent = piece.code ? 'Ref: ' + piece.code : '';
  document.getElementById('pzLead').textContent = piece.lead;
  const _cycleImgs = (typeof HERO_CYCLE !== 'undefined' && HERO_CYCLE[piece.id]) || null;
  const _pzImg = document.getElementById('pzImg');
  // Si la pieza tiene cycle → arrancar con la primera individual, si no → usar piece.img
  _pzImg.src = (_cycleImgs && _cycleImgs.length > 1) ? _cycleImgs[0] : piece.img;
  _pzImg.alt = piece.name;
  document.getElementById('pzBackCat').href = 'producto-detalle.html?producto=' + piece.categoryKey;

  // Auto-cycle hero image if pieza tiene HERO_CYCLE (placas / soluciones / mecanizado)
  const cycleImgs = _cycleImgs;
  if (cycleImgs && cycleImgs.length > 1) {
    const heroImg = _pzImg;
    heroImg.style.transition = 'opacity .4s cubic-bezier(.4,0,.2,1), filter .4s cubic-bezier(.4,0,.2,1)';
    heroImg.style.opacity = '1';
    heroImg.style.filter = 'blur(0)';
    // Preload todas las imágenes y guardar objetos Image
    const preloaded = cycleImgs.map(u => { const p = new Image(); p.src = u; return p; });
    // Solo arrancar el cycle cuando la primera esté totalmente cargada
    function startCycle() {
      let i = 0;
      let cycling = false;
      setInterval(() => {
        if (cycling) return;
        cycling = true;
        heroImg.style.opacity = '0';
        heroImg.style.filter = 'blur(6px)';
        setTimeout(() => {
          i = (i + 1) % cycleImgs.length;
          // Asegurar imagen precargada antes de asignar src
          const next = preloaded[i];
          const applyImg = () => {
            heroImg.src = cycleImgs[i];
            requestAnimationFrame(() => {
              heroImg.style.opacity = '1';
              heroImg.style.filter = 'blur(0)';
              setTimeout(() => { cycling = false; }, 400);
            });
          };
          if (next.complete && next.naturalWidth > 0) applyImg();
          else next.onload = applyImg;
        }, 400);
      }, 1500);
    }
    if (preloaded[0].complete && preloaded[0].naturalWidth > 0) startCycle();
    else preloaded[0].onload = startCycle;
  }

  // Descripción
  document.getElementById('detailText').innerHTML = piece.desc.map(t => '<p>' + t + '</p>').join('');

  // Features
  document.getElementById('featuresTitle').textContent = 'Ficha técnica · ' + piece.name;
  document.getElementById('featuresList').innerHTML = piece.features.map(f =>
    '<li><svg class="chev" viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4L13.2 12z"/></svg>' +
    '<span><strong>' + f[0] + ':</strong> ' + f[1] + '</span></li>'
  ).join('');

  // Galería adicional del catálogo (bajo los desplegables)
  const rawGallery = (typeof GALLERY !== 'undefined' && GALLERY[piece.id]) || [];
  // Dedupe + filter potential logo/CE tiny images
  const seen = new Set();
  const galleryImgs = rawGallery.filter(src => {
    if (seen.has(src)) return false;
    seen.add(src);
    return true;
  });
  if (galleryImgs.length) {
    const gEl = document.getElementById('galleryBlock');
    if (gEl) {
      gEl.style.display = 'block';
      gEl.innerHTML = '<h3>Más imágenes de ' + piece.name + '</h3>' +
        '<p style="color:var(--gray-500); font-size:.95rem; margin-bottom:24px;">Fotografías, planos y detalles de montaje extraídos del catálogo TMI 2024. Pulsa una imagen para ampliar.</p>' +
        '<div class="piece-gallery">' +
        galleryImgs.map((src) =>
          '<div class="pg-item"><img src="'+src+'" alt="'+piece.name+'" loading="lazy" onerror="this.parentElement.style.display=\'none\'"></div>'
        ).join('') + '</div>';
      gEl.querySelectorAll('.pg-item').forEach(it => it.addEventListener('click', function(){
        const src = this.querySelector('img').src;
        const lb = document.getElementById('lightbox');
        document.getElementById('lightboxImg').src = src;
        lb.classList.add('open');
      }));
    }
  }

  // Acordeones
  const acc = accordionsFor(piece);
  const items = [
    { title: 'Descripción del sistema',  body: acc.sistema },
    { title: 'Materiales y acabado',     body: acc.materiales },
    { title: 'Dimensiones y referencias',body: acc.dimensiones },
    { title: 'Instrucciones de montaje', body: acc.instrucciones },
    { title: 'Capacidad de carga y normativa', body: acc.normativa },
    { title: piece.whatTitle,            body: piece.whatBody }
  ];
  document.getElementById('whatisBox').innerHTML = '<div class="accordions">' + items.map((it) =>
    '<div class="acc-item">' +
      '<button class="acc-head" type="button" aria-expanded="false">' +
        '<span>' + it.title + '</span>' +
        '<svg class="acc-chev" viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
      '</button>' +
      '<div class="acc-body">' + it.body.map(t => '<p>' + t + '</p>').join('') + '</div>' +
    '</div>'
  ).join('') + '</div>';
  document.querySelectorAll('.acc-head').forEach(btn => {
    btn.addEventListener('click', function () {
      const item = this.parentElement;
      const open = item.classList.toggle('open');
      this.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  // Piezas relacionadas
  const related = category.pieces.filter(p => p.id !== piece.id).slice(0, 4);
  document.getElementById('relatedGrid').innerHTML = related.map(r =>
    '<a class="related-card" href="pieza.html?id=' + r.id + '">' +
      '<img src="' + r.img + '" alt="' + r.name + '" onerror="this.style.opacity=.25">' +
      '<span>' + r.name + '</span>' +
    '</a>'
  ).join('');

  // 3D viewer
  Viewer3D.init(document.getElementById('viewerCanvas'));
  Viewer3D.load(piece.shape);
  setTimeout(Viewer3D.resize, 60);

  const hint = document.getElementById('viewerHint');
  const canvas = document.getElementById('viewerCanvas');
  ['pointerdown', 'wheel', 'touchstart'].forEach(ev =>
    canvas.addEventListener(ev, () => hint.classList.add('hide'), { once: true, passive: true }));

  const autoBtn = document.getElementById('autoRotateBtn');
  autoBtn.addEventListener('click', function () {
    const active = this.classList.toggle('active');
    Viewer3D.setAutoRotate(active);
  });
  document.getElementById('resetView').addEventListener('click', Viewer3D.resetView);
  document.getElementById('fullscreenBtn').addEventListener('click', function () {
    const wrap = canvas.closest('.viewer-wrap');
    if (!document.fullscreenElement) {
      (wrap.requestFullscreen || wrap.webkitRequestFullscreen).call(wrap);
    } else { document.exitFullscreen(); }
    setTimeout(Viewer3D.resize, 200);
  });
  document.addEventListener('fullscreenchange', () => setTimeout(Viewer3D.resize, 200));
  document.getElementById('shareBtn').addEventListener('click', function () {
    const url = window.location.href;
    if (navigator.share) { navigator.share({ title: piece.name, url }); }
    else if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      const toast = document.getElementById('toast');
      document.getElementById('toastMsg').textContent = 'Enlace copiado';
      toast.classList.add('show');
      setTimeout(() => toast.classList.remove('show'), 2200);
    }
  });

  /* ================= Shared UI ================= */
  const header = document.getElementById('siteHeader');
  const toTop = document.getElementById('toTop');
  window.addEventListener('scroll', () => {
    header.classList.toggle('shrink', window.scrollY > 40);
    toTop.classList.toggle('show', window.scrollY > 600);
  });
  toTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  const burger = document.getElementById('burger');
  const mainNav = document.getElementById('mainNav');
  const navOverlay = document.getElementById('navOverlay');
  function closeNav() { burger.classList.remove('open'); mainNav.classList.remove('open'); navOverlay.classList.remove('open'); }
  burger.addEventListener('click', () => { burger.classList.toggle('open'); mainNav.classList.toggle('open'); navOverlay.classList.toggle('open'); });
  navOverlay.addEventListener('click', closeNav);
  const prodDropdown = document.getElementById('prodDropdown');
  if (prodDropdown) {
    prodDropdown.querySelector('a').addEventListener('click', (e) => {
      if (window.innerWidth <= 980) { e.preventDefault(); prodDropdown.classList.toggle('open'); }
    });
  }

  let io;
  function observeReveals() {
    if (!io) {
      io = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); io.unobserve(entry.target); } });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => io.observe(el));
  }
  observeReveals();
})();
