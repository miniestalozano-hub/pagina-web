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
  document.getElementById('pzImg').src = piece.img;
  document.getElementById('pzImg').alt = piece.name;
  document.getElementById('pzBackCat').href = 'producto-detalle.html?producto=' + piece.categoryKey;

  // Descripción
  document.getElementById('detailText').innerHTML = piece.desc.map(t => '<p>' + t + '</p>').join('');

  // Features
  document.getElementById('featuresTitle').textContent = 'Ficha técnica · ' + piece.name;
  document.getElementById('featuresList').innerHTML = piece.features.map(f =>
    '<li><svg class="chev" viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4L13.2 12z"/></svg>' +
    '<span><strong>' + f[0] + ':</strong> ' + f[1] + '</span></li>'
  ).join('');

  // Galería adicional del catálogo
  const galleryImgs = (typeof GALLERY !== 'undefined' && GALLERY[piece.id]) || [];
  if (galleryImgs.length) {
    const gEl = document.getElementById('galleryBlock');
    if (gEl) {
      gEl.style.display = 'block';
      gEl.innerHTML = '<h3>Más imágenes de esta pieza</h3><div class="piece-gallery">' +
        galleryImgs.map((src, i) =>
          '<div class="pg-item" data-i="'+i+'"><img src="'+src+'" alt="'+piece.name+'" loading="lazy" onerror="this.parentElement.style.display=\'none\'"></div>'
        ).join('') + '</div>';
      // Lightbox
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
    { title: 'Materiales',               body: acc.materiales },
    { title: 'Dimensiones',              body: acc.dimensiones },
    { title: 'Instrucciones de uso',     body: acc.instrucciones },
    { title: piece.whatTitle,            body: piece.whatBody }
  ];
  document.getElementById('whatisBox').innerHTML = '<div class="accordions">' + items.map((it, idx) =>
    '<div class="acc-item' + (idx === 0 ? ' open' : '') + '">' +
      '<button class="acc-head" type="button" aria-expanded="' + (idx===0?'true':'false') + '">' +
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
