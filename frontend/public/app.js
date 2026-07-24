/* eslint-disable no-undef */
/* global DATA */
/* ================= Página de categoría — solo grid de piezas ================= */
(function () {
  const params = new URLSearchParams(window.location.search);
  let prodKey = params.get('producto');
  if (!DATA[prodKey]) prodKey = 'paneles';
  const product = DATA[prodKey];
const HIDE_HERO = ['antivuelco', 'ajustables', 'cubiertas'];
if (HIDE_HERO.includes(prodKey)) {
  const catHero = document.querySelector('.cat-hero');
  if (catHero) catHero.style.display = 'none';
}

  document.getElementById('bcCurrent').textContent = product.title;
  document.getElementById('catEyebrow').textContent = product.eyebrow;
  document.getElementById('catTitle').textContent = product.title;
  document.getElementById('catIntro').textContent = product.intro;
  document.getElementById('catHeroBg').style.backgroundImage = "linear-gradient(120deg, rgba(10,44,92,.55), rgba(24,87,168,.35)), url('" + product.hero + "')";
  const BANNER_TEXTS = {
    antivuelco: 'Sistemas de fijación antivuelco diseñados para garantizar la estabilidad y seguridad de paneles prefabricados de hormigón, con soluciones estándar y a medida para todo tipo de estructuras.',
    ajustables: 'Fijaciones ajustables que permiten un montaje preciso y una regulación sencilla durante la instalación, garantizando un ajuste perfecto entre el panel y la estructura.',
    cubiertas: 'Soluciones para la fijación de cubiertas, correas y canalones en estructuras prefabricadas de hormigón, diseñadas para ofrecer resistencia, durabilidad y un montaje eficiente.'
  };
  const bannerEl = document.querySelector('.highlight-banner p');
  if (bannerEl) bannerEl.textContent = BANNER_TEXTS[prodKey] || 'Los más novedosos y rápidos sistemas de fijación para el prefabricado de hormigón.';
  document.getElementById('piecesTitle').textContent = product.title;
  document.title = product.title + ' | Talleres M. Iniesta';

  const grid = document.getElementById('piecesGrid');
  grid.innerHTML = product.pieces.map((p) => {
    const hoverText = (p.lead || p.short || '').replace(/<[^>]+>/g,'');
    return (
    '<a class="piece-card reveal' + (p.id === 'placa-medida' ? ' piece-placas' : '') + '" href="pieza.html?id=' + p.id + '">' +
      '<div class="piece-card-img">' +
        '<img src="' + p.img + '" alt="' + p.name + '" loading="lazy" onerror="this.style.opacity=.25">' +
        '<div class="piece-card-hover">' +
          '<h4>¿Qué es y para qué sirve?</h4>' +
          '<p>' + hoverText + '</p>' +
        '</div>' +
      '</div>' +
      '<div class="piece-card-body"><h3>' + p.name + '<span class="piece-underline"></span></h3>' +
      '<span>' + p.short + '</span>' +
      (p.code ? '<span class="piece-code">Ref: ' + p.code + '</span>' : '') +
      '</div>' +
    '</a>'
  );}).join('');

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
