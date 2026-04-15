'use strict';

/* ===========================
   NAV: scroll + hamburger
=========================== */
const navHeader = document.getElementById('nav-header');
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');
const navLinks  = navMenu.querySelectorAll('.nav-link');

// Scroll → add background
window.addEventListener('scroll', () => {
  navHeader.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

// Hamburger toggle
navToggle.addEventListener('click', () => {
  const isOpen = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
  navMenu.setAttribute('aria-hidden', String(!isOpen));
  document.body.style.overflow = isOpen ? 'hidden' : '';
});

// Close menu on link click
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  });
});

// Close on outside click
document.addEventListener('click', (e) => {
  if (navMenu.classList.contains('open') &&
      !navHeader.contains(e.target)) {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
});

/* ===========================
   PORTFOLIO FILTER + LIGHTBOX
=========================== */
const filterBtns    = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
const lightbox      = document.getElementById('lightbox');
const lightboxBg    = document.getElementById('lightbox-backdrop');
const lightboxImg   = document.getElementById('lightbox-img');
const lightboxCap   = document.getElementById('lightbox-caption');
const lightboxClose = document.getElementById('lightbox-close');
const lightboxPrev  = document.getElementById('lightbox-prev');
const lightboxNext  = document.getElementById('lightbox-next');

let currentFilter  = 'all';
let visibleItems   = [];
let currentIndex   = 0;

function getVisible() {
  return Array.from(portfolioItems).filter(
    item => !item.classList.contains('hidden')
  );
}

// Filter
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentFilter = btn.dataset.filter;

    portfolioItems.forEach(item => {
      const match = currentFilter === 'all' || item.dataset.category === currentFilter;
      item.classList.toggle('hidden', !match);
    });
  });
});

// Open lightbox
portfolioItems.forEach((item, i) => {
  item.addEventListener('click', () => {
    const img     = item.querySelector('img');
    const caption = item.querySelector('.portfolio-caption');
    visibleItems  = getVisible();
    currentIndex  = visibleItems.indexOf(item);
    openLightbox(img.src, img.alt, caption ? caption.textContent : '');
  });
});

function openLightbox(src, alt, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightboxCap.textContent = caption;
  lightbox.classList.add('active');
  lightboxBg.classList.add('active');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  lightboxBg.classList.remove('active');
  document.body.style.overflow = '';
}

function navigateLightbox(dir) {
  visibleItems = getVisible();
  currentIndex = (currentIndex + dir + visibleItems.length) % visibleItems.length;
  const item    = visibleItems[currentIndex];
  const img     = item.querySelector('img');
  const caption = item.querySelector('.portfolio-caption');
  lightboxImg.src = img.src;
  lightboxImg.alt = img.alt;
  lightboxCap.textContent = caption ? caption.textContent : '';
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxBg.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', () => navigateLightbox(-1));
lightboxNext.addEventListener('click', () => navigateLightbox(1));

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape')      closeLightbox();
  if (e.key === 'ArrowLeft')   navigateLightbox(-1);
  if (e.key === 'ArrowRight')  navigateLightbox(1);
});

// Touch swipe on lightbox
let touchStartX = 0;
lightbox.addEventListener('touchstart', e => {
  touchStartX = e.changedTouches[0].clientX;
}, { passive: true });
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 50) navigateLightbox(dx < 0 ? 1 : -1);
}, { passive: true });

/* ===========================
   SCROLL ANIMATIONS (AOS)
=========================== */
const aosEls = document.querySelectorAll('[data-aos]');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  aosEls.forEach(el => observer.observe(el));
} else {
  aosEls.forEach(el => el.classList.add('aos-visible'));
}

/* ===========================
   CONTACT FORM — removed; contact section now links to quote.html
=========================== */

/* ===========================
   FOOTER YEAR
=========================== */
document.getElementById('year').textContent = new Date().getFullYear();
