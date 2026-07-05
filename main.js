'use strict';

/* ============================================================
   NAV: LOAD ANIMATION
   ============================================================ */
setTimeout(() => {
  document.querySelector('.nav').classList.add('is-loaded');
}, 150);

/* ============================================================
   NAV: DARK VARIANT (tracks section background)
   ============================================================ */
const nav = document.querySelector('.nav');
const toneSections = document.querySelectorAll('[data-tone]');

function updateNav() {
  const navBottom = nav.getBoundingClientRect().bottom;
  let isDark = false;
  toneSections.forEach(s => {
    const r = s.getBoundingClientRect();
    if (r.top <= navBottom && r.bottom >= navBottom) {
      if (s.dataset.tone === 'dark') isDark = true;
    }
  });
  nav.classList.toggle('is-dark', isDark);
}

window.addEventListener('scroll', updateNav, { passive: true });
window.addEventListener('resize', updateNav, { passive: true });
updateNav();

/* ============================================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================================ */
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('is-in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12, rootMargin: '0px 0px -80px 0px' });

document.querySelectorAll('.reveal, .reveal-fade').forEach(el => io.observe(el));

/* ============================================================
   IMAGE REVEAL — waits for both: in-viewport AND loaded
   ============================================================ */
const ease = 'cubic-bezier(0.33, 1, 0.68, 1)';

function fadeInImage(img) {
  img.style.transition = `opacity 0.85s ${ease}`;
  img.style.opacity = '1';
}

const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    const img = entry.target;
    imgObserver.unobserve(img);
    if (img.complete && img.naturalWidth > 0) {
      fadeInImage(img);
    } else {
      img.addEventListener('load', () => fadeInImage(img), { once: true });
      img.addEventListener('error', () => fadeInImage(img), { once: true });
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.mezze-card-img img, .menu-card-thumb').forEach(img => {
  img.style.opacity = '0';
  imgObserver.observe(img);
});

/* ============================================================
   MOBILE DRAWER
   ============================================================ */
const burger = document.querySelector('.burger');
let drawer = null;

burger.addEventListener('click', () => {
  if (drawer) return;
  burger.setAttribute('aria-expanded', 'true');

  drawer = document.createElement('div');
  drawer.className = 'nav-drawer';
  drawer.setAttribute('role', 'dialog');
  drawer.setAttribute('aria-modal', 'true');
  drawer.setAttribute('aria-label', 'Navigation');
  drawer.innerHTML = `
    <button class="drawer-close" aria-label="Luk menu">&times;</button>
    <a href="#menukort">Menukort</a>
    <a href="https://restaurantoliven.nemtakeaway.dk/order.php" target="_blank" rel="noopener">Take Away</a>
    <a href="#om-os">Om os</a>
    <a href="#kontakt">Kontakt</a>
    <a href="https://restaurantoliven.booketbord.dk/onlinebooking?_gl=1%2a16asecp%2a_ga%2aNDEzNDAzMDEzLjE3Nzc4ODgyOTE.%2a_ga_HBD6HJJY4J%2aczE3NzgwNzMyNjYkbzEwJGcwJGQxNzc4MDczMjY4JGo1OCRsMCRoMA.." class="btn-solid" target="_blank" rel="noopener" style="margin-top: 16px;">Book Bord</a>
  `;
  document.body.appendChild(drawer);
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => drawer.classList.add('is-open'));

  function closeDrawer() {
    drawer.classList.remove('is-open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
    setTimeout(() => {
      if (drawer) { drawer.remove(); drawer = null; }
    }, 400);
  }

  drawer.querySelector('.drawer-close').addEventListener('click', closeDrawer);
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  drawer.addEventListener('click', e => { if (e.target === drawer) closeDrawer(); });
});

/* ============================================================
   LIGHTBOX
   ============================================================ */
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('.lightbox-img');

function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.add('is-open');
  document.body.style.overflow = 'hidden';
  lightbox.setAttribute('tabindex', '-1');
  lightbox.focus();
}

function closeLightbox() {
  lightbox.classList.remove('is-open');
  document.body.style.overflow = '';
  setTimeout(() => { lightboxImg.src = ''; }, 300);
}

document.querySelectorAll('.menu-card').forEach(card => {
  card.addEventListener('click', () => openLightbox(card.dataset.menu));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openLightbox(card.dataset.menu);
    }
  });
});

lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });

/* ============================================================
   DESERT VIDEO: subtle parallax (scroll-lock feel)
   ============================================================ */
const desertSection = document.querySelector('.desert-section');
const desertVid = document.querySelector('.desert-video');

if (desertSection && desertVid) {
  desertVid.style.transform = 'scale(1.12)';
  function updateDesertParallax() {
    const rect = desertSection.getBoundingClientRect();
    const viewH = window.innerHeight;
    if (rect.bottom < 0 || rect.top > viewH) return;
    const progress = (viewH - rect.top) / (viewH + rect.height);
    const shift = (progress - 0.5) * 40;
    desertVid.style.transform = `translateY(${shift}px) scale(1.12)`;
  }
  window.addEventListener('scroll', updateDesertParallax, { passive: true });
  updateDesertParallax();
}

/* ============================================================
   HERO VIDEO PARALLAX
   ============================================================ */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  function updateHeroParallax() {
    const scrollY = window.scrollY;
    heroBg.style.transform = `translateY(${scrollY * 0.3}px)`;
  }
  window.addEventListener('scroll', updateHeroParallax, { passive: true });
}

/* ============================================================
   PAIR IMAGES: staggered parallax
   ============================================================ */
const pairFrames = document.querySelectorAll('.pair-frame');
if (pairFrames.length) {
  function updatePairParallax() {
    pairFrames.forEach((frame, i) => {
      const rect = frame.getBoundingClientRect();
      const viewH = window.innerHeight;
      if (rect.bottom < 0 || rect.top > viewH) return;
      const progress = (viewH - rect.top) / (viewH + rect.height);
      const dir = i % 2 === 0 ? 1 : -1;
      const shift = (progress - 0.5) * 40 * dir;
      frame.style.transform = `translateY(${shift}px)`;
    });
  }
  window.addEventListener('scroll', updatePairParallax, { passive: true });
  updatePairParallax();
}
