(function () {
  // Scroll fade-in
  const fadeTargets = document.querySelectorAll(
    '.section-title, .section-lead, .eyebrow, .story__text, .stats, ' +
    '.menu-card, .seasons-item, .seasons-quote, .timeline, ' +
    '.access__grid, .reserve-panel'
  );
  if ('IntersectionObserver' in window) {
    fadeTargets.forEach(el => el.classList.add('fade-in'));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    fadeTargets.forEach(el => observer.observe(el));
  }

  // Mobile nav
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  const links = nav.querySelectorAll('a');

  function closeNav() {
    toggle.classList.remove('is-active');
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.classList.toggle('is-active', isOpen);
    toggle.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
  });

  links.forEach((link) => {
    link.addEventListener('click', closeNav);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeNav();
  });
})();
