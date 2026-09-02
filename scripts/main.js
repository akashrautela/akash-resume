// ---- AOS Animations ----
AOS.init({
  duration: 700,
  once: true,
  offset: 60
});

// ---- Sticky Navbar scroll class ----
(function () {
  var nav = document.getElementById('mainNav');
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 40) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ---- Mobile Nav Toggle ----
(function () {
  var toggle = document.getElementById('navToggle');
  var links = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // Close nav when a link is clicked
  links.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      links.classList.remove('open');
    });
  });
})();

// ---- Download CV (Print to PDF) ----
function generatePDF() {
  window.print();
}
