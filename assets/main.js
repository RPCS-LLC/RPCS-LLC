(function () {
  var navToggle = document.querySelector('[data-nav-toggle]');
  var mainNav = document.querySelector('[data-main-nav]');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var links = document.querySelectorAll('[data-nav-link]');
  var path = window.location.pathname.split('/').pop() || 'index.html';

  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === path) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  var yearTargets = document.querySelectorAll('[data-year]');
  var year = String(new Date().getFullYear());
  yearTargets.forEach(function (node) {
    node.textContent = year;
  });
})();
