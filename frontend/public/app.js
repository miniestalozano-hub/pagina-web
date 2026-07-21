/* eslint-disable no-undef */
/* global DATA */
/* ================= Página de categoría — solo grid de piezas ================= */
(function () {
  const params = new URLSearchParams(window.location.search);
  let prodKey = params.get('producto');
  if (!DATA[prodKey]) prodKey = 'paneles';
  const product = DATA[prodKey];

  document.getElementById('bcCurrent').textContent = product.title;
  document.getElementById('catEyebrow').textContent = product.eyebrow;
  document.getElementById('catTitle').textContent = product.title;
  document.getElementById('catIntro').textContent = product.intro;
  document.getElementById('catHeroBg').style.backgroundImage = "linear-gradient(120deg, rgba(10,44,92,.55), rgba(24,87,168,.35)), url('" + product.hero + "')";
  document.getElementById('piecesTitle').textContent = 'Piezas de ' + product.title;
  document.title = product.title + ' | Talleres M. Iniesta';

  const grid = document.getElementById('piecesGrid');
  grid.innerHTML = product.pieces.map((p) =>
    '<a class="piece-card reveal" href="pieza.html?id=' + p.id + '">' +
      '<div class="piece-card-img"><img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.opacity=.25"></div>' +
      '<div class="piece-card-body"><h3>' + p.name + '<span class="piece-underline"></span></h3>' +
      '<span>' + p.short + '</span>' +
      (p.code ? '<span class="piece-code">Ref: ' + p.code + '</span>' : '') +
      '</div>' +
    '</a>'
  ).join('');

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
