/* ===================================================
   SEASHORE HYDE PARK — North Coast
   Main JavaScript
   =================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ── NAV SCROLL ── */
  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  });

  /* ── HAMBURGER MENU ── */
  window.toggleMenu = function () {
    const m = document.getElementById('mob');
    m.style.display = m.style.display === 'flex' ? 'none' : 'flex';
  };
  window.closeMenu = function () {
    document.getElementById('mob').style.display = 'none';
  };

  /* ── SMOOTH SCROLL ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const t = document.querySelector(a.getAttribute('href'));
      if (t) {
        e.preventDefault();
        closeMenu();
        t.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── SCROLL REVEAL ── */
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('on');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.rv, .rvl, .rvr').forEach(el => io.observe(el));

  /* ── FORM SUBMIT ── */
  window.submitForm = function (e) {
    e.preventDefault();
    const btn = document.getElementById('fbtn');
    btn.textContent = "✓ Sent! We'll be in touch soon.";
    btn.style.background = '#059669';
    btn.style.color = '#fff';
    setTimeout(() => {
      btn.textContent = 'Send Enquiry →';
      btn.style.background = '';
      btn.style.color = '';
    }, 4000);
  };

  /* ── COUNTER ANIMATION ── */
  function animateCounter(el, target, duration = 1500) {
    let start = 0;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = Math.floor(progress * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
      else el.textContent = target.toLocaleString();
    };
    requestAnimationFrame(step);
  }

  const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const el = e.target;
        const val = el.dataset.count;
        if (val) animateCounter(el, parseInt(val));
        statObserver.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => statObserver.observe(el));

});
