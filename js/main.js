/* ============================================
   Ashima Sitaula Portfolio — Main JS
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

  // --- Navbar scroll behavior ---
  const navbar = document.getElementById('navbar');
  if (navbar) {
    const onScroll = () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // --- Mobile menu toggle ---
  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuClose = document.getElementById('menu-close');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', () => {
      mobileMenu.classList.add('open');
      document.body.style.overflow = 'hidden';
      menuToggle.setAttribute('aria-expanded', 'true');

      // Move focus to the close button (or first menu link) when menu opens
      const firstFocusable = menuClose || mobileMenu.querySelector('a');
      if (firstFocusable) {
        firstFocusable.focus();
      }
    });

    const closeMenu = () => {
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
      menuToggle.setAttribute('aria-expanded', 'false');
      menuToggle.focus(); // Return focus to hamburger button
    };

    if (menuClose) {
      menuClose.addEventListener('click', closeMenu);
    }

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenu.classList.contains('open')) {
        closeMenu();
        return;
      }

      // Focus trap: only when menu is open and Tab is pressed
      if (e.key === 'Tab' && mobileMenu.classList.contains('open')) {
        const focusableEls = mobileMenu.querySelectorAll(
          'a[href], button, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableEls.length === 0) return;

        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (e.shiftKey) {
          // Shift+Tab: if on first element, wrap to last
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          // Tab: if on last element, wrap to first
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    });
  }

  // --- Scroll reveal (IntersectionObserver) ---
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('visible'));
  }

  // --- Stats counter animation ---
  const statNumbers = document.querySelectorAll('.stat-number[data-target]');

  if (statNumbers.length > 0 && 'IntersectionObserver' in window) {
    statNumbers.forEach(el => { el.textContent = '0'; });
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statNumbers.forEach(el => counterObserver.observe(el));
  }

  function animateCounter(el) {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    const duration = 2000;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(target * eased);

      el.textContent = current.toLocaleString() + suffix;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // --- Active nav link highlighting ---
  const navLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (navLinks.length > 0) {
    // Build list of sections that have matching nav links
    const navSections = [];
    navLinks.forEach(link => {
      const id = link.getAttribute('href').substring(1);
      const section = document.getElementById(id);
      if (section) navSections.push({ id, el: section, link });
    });

    const highlightNav = () => {
      const scrollY = window.scrollY + 120; // offset for fixed navbar

      // Find the last section whose top is above the scroll position
      let current = null;
      for (const s of navSections) {
        if (s.el.offsetTop <= scrollY) {
          current = s;
        }
      }

      navLinks.forEach(link => link.classList.remove('active'));
      if (current) {
        current.link.classList.add('active');
      }
    };

    window.addEventListener('scroll', highlightNav, { passive: true });
    highlightNav();
  }

  // --- Back to top button ---
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 500) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    }, { passive: true });

    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

});
