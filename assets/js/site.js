(function () {
  // Menu mobile
  var menuBtn = document.querySelector('.menu-btn');
  var nav = document.getElementById('site-nav');
  if (menuBtn && nav) {
    menuBtn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        nav.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Filtro de projetos: cada item declara suas tags em data-tags
  var filters = document.querySelectorAll('.filter');
  var items = document.querySelectorAll('[data-tags]');
  var moreSection = document.querySelector('.more');
  var featured = document.querySelector('.featured');
  filters.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var tag = btn.getAttribute('data-filter');
      filters.forEach(function (b) { b.setAttribute('aria-pressed', String(b === btn)); });
      items.forEach(function (item) {
        var tags = item.getAttribute('data-tags').split(' ');
        item.hidden = tag !== 'all' && tags.indexOf(tag) === -1;
      });
      if (featured) featured.hidden = !featured.querySelector('[data-tags]:not([hidden])');
      if (moreSection) moreSection.hidden = !moreSection.querySelector('[data-tags]:not([hidden])');
    });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
