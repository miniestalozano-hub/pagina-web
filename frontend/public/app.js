/* eslint-disable no-undef */
/* global DATA, VIDEOS, GALLERY, Viewer3D, makeDownloads, defaultAccordions */
/* ================= Lógica de la página de detalle ================= */
(function () {
  const params = new URLSearchParams(window.location.search);
  let prodKey = params.get('producto');
  if (!DATA[prodKey]) prodKey = 'paneles';
  const product = DATA[prodKey];
  let pieceId = params.get('pieza');
  let activeIndex = product.pieces.findIndex(p => p.id === pieceId);
  if (activeIndex < 0) activeIndex = 0;

  /* ---------- Category header ---------- */
  document.getElementById('bcCurrent').textContent = product.title;
  document.getElementById('catEyebrow').textContent = product.eyebrow;
  document.getElementById('catTitle').textContent = product.title;
  document.getElementById('catIntro').textContent = product.intro;
  document.getElementById('catHeroBg').style.backgroundImage = "url('" + product.hero + "')";
  document.getElementById('piecesTitle').textContent = 'Piezas de ' + product.title;
  document.getElementById('downloadsHeroImg').src = product.hero;
  document.title = product.title + ' | Talleres M. Iniesta';

  /* ---------- Pieces grid ---------- */
  const grid = document.getElementById('piecesGrid');
  grid.innerHTML = '';
  product.pieces.forEach((p, i) => {
    const card = document.createElement('div');
    card.className = 'piece-card reveal' + (i === activeIndex ? ' active' : '');
    card.dataset.index = i;
    card.innerHTML =
      '<div class="piece-card-img"><img src="' + p.img + '" alt="' + p.name + '" onerror="this.style.opacity=.25"></div>' +
      '<div class="piece-card-body"><h3>' + p.name + '<span class="piece-underline"></span></h3>' +
      '<span>' + p.short + '</span></div>';
    card.addEventListener('click', function () { selectPiece(i, true); });
    grid.appendChild(card);
  });

  /* ---------- Accordions ---------- */
  function accordionHTML(items) {
    // items: [{title, body: [html strings]}]
    return '<div class="accordions">' + items.map((it, idx) =>
      '<div class="acc-item" data-idx="' + idx + '">' +
        '<button class="acc-head" type="button" aria-expanded="false">' +
          '<span>' + it.title + '</span>' +
          '<svg class="acc-chev" viewBox="0 0 24 24" width="18" height="18"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
        '</button>' +
        '<div class="acc-body">' + it.body.map(t => '<p>' + t + '</p>').join('') + '</div>' +
      '</div>'
    ).join('') + '</div>';
  }

  function bindAccordions(container) {
    container.querySelectorAll('.acc-head').forEach(btn => {
      btn.addEventListener('click', function () {
        const item = this.parentElement;
        const open = item.classList.toggle('open');
        this.setAttribute('aria-expanded', open ? 'true' : 'false');
      });
    });
  }

  /* ---------- Render piece detail ---------- */
  function renderDetail(p) {
    document.getElementById('detailTitle').textContent = p.name;
    document.getElementById('detailLeadText').textContent = p.lead;

    document.getElementById('detailText').innerHTML = p.desc.map(t => '<p>' + t + '</p>').join('');

    document.getElementById('videosList').innerHTML = VIDEOS.map(v =>
      '<a class="video-link" href="' + v.url + '" target="_blank" rel="noopener">' +
      '<svg class="chev" viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4L13.2 12z"/></svg>' + v.text + '</a>'
    ).join('');

    document.getElementById('featuresTitle').textContent = 'Características esenciales de ' + p.name;
    document.getElementById('featuresList').innerHTML = p.features.map(f =>
      '<li><svg class="chev" viewBox="0 0 24 24"><path d="M8.6 16.6 10 18l6-6-6-6-1.4 1.4L13.2 12z"/></svg>' +
      '<span><strong>' + f[0] + ':</strong> ' + f[1] + '</span></li>'
    ).join('');

    // Acordeones adicionales: Descripción del sistema, Materiales, Dimensiones, Instrucciones de uso, ¿Qué es?
    const acc = defaultAccordions(p);
    const items = [
      { title: 'Descripción del sistema',  body: acc.sistema },
      { title: 'Materiales',               body: acc.materiales },
      { title: 'Dimensiones',              body: acc.dimensiones },
      { title: 'Instrucciones de uso',     body: acc.instrucciones },
      { title: p.whatTitle,                body: p.whatBody }
    ];
    const whatis = document.getElementById('whatisBox');
    whatis.innerHTML = accordionHTML(items);
    bindAccordions(whatis);

    document.getElementById('galleryGrid').innerHTML = GALLERY.map(g =>
      '<img src="' + g + '" alt="' + p.name + '" loading="lazy">'
    ).join('');

    // descargas
    const dls = makeDownloads(p.name.split(' ')[0]);
    document.getElementById('downloadsList').innerHTML = dls.map((d) =>
      '<div class="download-card" data-title="' + d.title + '" data-type="' + d.type + '">' +
      '<svg class="doc" viewBox="0 0 24 24" stroke-width="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/></svg>' +
      '<h4>' + d.title + '</h4>' +
      '<span class="dl"><svg viewBox="0 0 24 24"><path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"/></svg></span>' +
      '</div>'
    ).join('');
    document.querySelectorAll('.download-card').forEach(c => {
      c.addEventListener('click', function () {
        downloadDummy(this.dataset.title, this.dataset.type);
      });
    });

    // 3D
    Viewer3D.load(p.shape);
    setTimeout(Viewer3D.resize, 60);
  }

  function selectPiece(i, scroll) {
    activeIndex = i;
    const p = product.pieces[i];
    document.querySelectorAll('.piece-card').forEach(c =>
      c.classList.toggle('active', +c.dataset.index === i));
    renderDetail(p);
    const url = new URL(window.location.href);
    url.searchParams.set('producto', prodKey);
    url.searchParams.set('pieza', p.id);
    history.replaceState(null, '', url);
    if (scroll) {
      document.getElementById('detailSection').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    requestAnimationFrame(observeReveals);
  }

  function downloadDummy(title, type) {
    const content = 'TALLERES M. INIESTA\n' + product.title + '\n' + title + '\n\n' +
      'Documento de demostración (' + type + ').\nContacto: pedidos@talleresiniesta.es · 629 747 960';
    const blob = new Blob([content], { type: 'text/plain' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = title.replace(/[^a-z0-9]+/gi, '_') + '.' + type.toLowerCase() + '.txt';
    document.body.appendChild(a); a.click(); a.remove();
    showToast('Descargando: ' + title);
  }

  function showToast(msg) {
    const t = document.getElementById('toast');
    document.getElementById('toastMsg').textContent = msg;
    t.classList.add('show');
    clearTimeout(t._tm);
    t._tm = setTimeout(() => t.classList.remove('show'), 2600);
  }

  /* ---------- 3D viewer init + controls ---------- */
  Viewer3D.init(document.getElementById('viewerCanvas'));

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
    if (navigator.share) { navigator.share({ title: product.title, url }); }
    else if (navigator.clipboard) { navigator.clipboard.writeText(url); showToast('Enlace copiado al portapapeles'); }
  });

  renderDetail(product.pieces[activeIndex]);

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
  prodDropdown.querySelector('a').addEventListener('click', (e) => {
    if (window.innerWidth <= 980) { e.preventDefault(); prodDropdown.classList.toggle('open'); }
  });

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
