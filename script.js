'use strict';

/* ===========================
   TRANSLATIONS (i18n)
=========================== */
const translations = {
  en: {
    'nav-services':      'Services',
    'nav-portfolio':     'Portfolio',
    'nav-about':         'About',
    'nav-quote':         'Get a Quote',

    'hero-eyebrow':      "GTA's Premier Renovation Studio",
    'hero-title':        'Your Vision.<br />Our Craft.',
    'hero-subtitle':     'From sleek modern kitchens to spa-inspired bathrooms,<br class="hero-br" /> we bring your dream space to life — beautifully.',
    'hero-btn-quote':    'Request a Quote',
    'hero-btn-work':     'See Our Work',

    'services-eyebrow':  'What We Do',
    'services-title':    'Spaces We Transform',
    'services-subtitle': 'Every project is handled with precision, care, and decades of expertise.',
    'service-kitchen-title': 'Kitchen Renovations',
    'service-kitchen-desc':  'Custom cabinetry, premium countertops, and thoughtful layouts that make your kitchen the heart of your home.',
    'service-bath-title':    'Bathroom Renovations',
    'service-bath-desc':     'Elegant finishes, smart storage, and spa-like details that turn your bathroom into a daily retreat.',
    'service-living-title':  'Living Room Design',
    'service-living-desc':   'Cohesive interiors with custom finishes and furnishings that reflect your personality and lifestyle.',
    'service-link':          'Get a Quote →',

    'portfolio-eyebrow':  'Our Work',
    'portfolio-title':    'Recent Projects',
    'portfolio-subtitle': 'Browse through a selection of our completed renovations.',
    'filter-all':         'All',
    'filter-kitchen':     'Kitchen',
    'filter-bathroom':    'Bathroom',
    'filter-living':      'Living Room',
    'filter-other':       'More Spaces',
    'tag-bedroom':        'Bedroom',
    'tag-laundry':        'Laundry Room',
    'tag-mudroom':        'Mudroom',
    'tag-office':         'Home Office',
    'tag-commercial':     'Commercial',

    'about-eyebrow': 'Our Story',
    'about-title':   'Built on Craftsmanship,<br />Driven by Detail',
    'about-p1':      'For over two decades, J&amp;P Kitchen &amp; Bath has been transforming homes across the Greater Toronto Area. Based in Scarborough, we combine old-world craftsmanship with modern design sensibilities to create spaces that are as functional as they are beautiful.',
    'about-p2':      'Every project — from a single bathroom refresh to a full kitchen overhaul — receives our complete attention. We work closely with each client to understand their vision, their lifestyle, and their budget, then deliver results that exceed expectations.',
    'value1-title':  'Quality Materials',
    'value1-desc':   'We source only premium finishes and fixtures that stand the test of time.',
    'value2-title':  'On Time, On Budget',
    'value2-desc':   'We respect your home and your timeline — no surprises, no delays.',
    'value3-title':  'Personal Service',
    'value3-desc':   'You work directly with us from first consultation to final walkthrough.',
    'about-btn':     'Start Your Project',

    'contact-eyebrow':  'Get in Touch',
    'contact-title':    'Request a Quote',
    'contact-subtitle': "Tell us about your project and we'll get back to you within 24 hours.",
    'form-name':        'Name',
    'form-name-ph':     'Your name',
    'form-email':       'Email',
    'form-phone':       'Phone',
    'form-optional':    '(optional)',
    'form-service':     'Service Interest',
    'form-select-ph':   'Select a service',
    'opt-kitchen':      'Kitchen Renovation',
    'opt-bathroom':     'Bathroom Renovation',
    'opt-living':       'Living Room Design',
    'opt-full':         'Full Home Renovation',
    'opt-cabinetry':    'Custom Cabinetry & Countertops',
    'opt-other':        'Other / Not Sure Yet',
    'form-message':     'Message',
    'form-message-ph':  'Tell us about your project...',
    'form-submit':      'Send Request',
    'form-sending':     'Sending…',
    'form-success-msg': "Thank you! We'll be in touch within 24 hours.",
    'info-showroom':    'Visit Our Showroom',
    'info-call':        'Call Us',
    'info-email':       'Email Us',
    'info-hours':       'Business Hours',
    'info-hours-val':   'Mon–Fri: 9 a.m. – 6 p.m.<br />Sat–Sun: Closed',

    'footer-tagline':       'Your Vision. Our Craft.',
    'footer-nav':           'Navigate',
    'footer-contact-link':  'Contact',
    'footer-contact-heading': 'Contact',
    'footer-hours':         'Mon–Fri: 9 a.m. – 6 p.m.',
    'footer-copy':          '&copy; <span id="year"></span> J&amp;P Kitchen &amp; Bath. All rights reserved.',
  },

  // ── Mandarin (Simplified Chinese) ──────────────────────────────────────────
  zh: {
    'nav-services':      '服务',
    'nav-portfolio':     '作品集',
    'nav-about':         '关于我们',
    'nav-quote':         '获取报价',

    'hero-eyebrow':      'GTA 顶尖家居装修工作室',
    'hero-title':        '您的愿景。<br />我们的工艺。',
    'hero-subtitle':     '从现代简约厨房到水疗风格浴室，<br class="hero-br" />我们将您的梦想空间变为现实——精美绝伦。',
    'hero-btn-quote':    '申请报价',
    'hero-btn-work':     '查看作品',

    'services-eyebrow':  '我们的服务',
    'services-title':    '我们改造的空间',
    'services-subtitle': '每个项目都以精准、用心和数十年的专业经验完成。',
    'service-kitchen-title': '厨房翻新',
    'service-kitchen-desc':  '定制橱柜、高端台面与精心布局，让厨房成为家的核心。',
    'service-bath-title':    '浴室翻新',
    'service-bath-desc':     '精致饰面、智能收纳与水疗细节，让浴室成为每日的享受空间。',
    'service-living-title':  '客厅设计',
    'service-living-desc':   '和谐的室内设计，定制饰面与家具，彰显您的个性与生活方式。',
    'service-link':          '获取报价 →',

    'portfolio-eyebrow':  '我们的作品',
    'portfolio-title':    '近期项目',
    'portfolio-subtitle': '浏览我们部分已完成的装修案例。',
    'filter-all':         '全部',
    'filter-kitchen':     '厨房',
    'filter-bathroom':    '浴室',
    'filter-living':      '客厅',
    'filter-other':       '更多空间',
    'tag-bedroom':        '卧室',
    'tag-laundry':        '洗衣房',
    'tag-mudroom':        '玄关',
    'tag-office':         '家庭办公室',
    'tag-commercial':     '商业空间',

    'about-eyebrow': '我们的故事',
    'about-title':   '以工艺为基础，<br />以细节为驱动',
    'about-p1':      '二十余年来，J&amp;P 厨卫装修一直在大多伦多地区为家庭打造梦想空间。我们以士嘉堡为根基，将传统工艺与现代设计理念相融合，打造出兼具实用性与美观性的空间。',
    'about-p2':      '每一个项目——无论是单间浴室翻新还是整体厨房改造——都倾注我们的全部心血。我们与每位客户紧密合作，深入了解他们的愿景、生活方式和预算，然后超越期望地交付成果。',
    'value1-title':  '优质材料',
    'value1-desc':   '我们只选用能经受时间考验的高端饰面和配件。',
    'value2-title':  '准时，不超预算',
    'value2-desc':   '我们尊重您的家和时间——没有意外，没有延误。',
    'value3-title':  '贴心服务',
    'value3-desc':   '从首次咨询到竣工验收，您将全程与我们直接合作。',
    'about-btn':     '开启您的项目',

    'contact-eyebrow':  '联系我们',
    'contact-title':    '申请报价',
    'contact-subtitle': '告诉我们您的项目详情，我们将在24小时内与您联系。',
    'form-name':        '姓名',
    'form-name-ph':     '您的姓名',
    'form-email':       '电子邮件',
    'form-phone':       '电话',
    'form-optional':    '（可选）',
    'form-service':     '服务类型',
    'form-select-ph':   '请选择服务',
    'opt-kitchen':      '厨房翻新',
    'opt-bathroom':     '浴室翻新',
    'opt-living':       '客厅设计',
    'opt-full':         '全屋翻新',
    'opt-cabinetry':    '定制橱柜与台面',
    'opt-other':        '其他 / 暂不确定',
    'form-message':     '留言',
    'form-message-ph':  '请告诉我们您的项目详情…',
    'form-submit':      '发送请求',
    'form-sending':     '发送中…',
    'form-success-msg': '感谢您！我们将在24小时内与您联系。',
    'info-showroom':    '参观我们的展厅',
    'info-call':        '致电我们',
    'info-email':       '发送邮件',
    'info-hours':       '营业时间',
    'info-hours-val':   '周一至周五：上午9时 – 下午6时<br />周六、周日：休息',

    'footer-tagline':         '您的愿景。我们的工艺。',
    'footer-nav':             '导航',
    'footer-contact-link':    '联系我们',
    'footer-contact-heading': '联系方式',
    'footer-hours':           '周一至周五：上午9时 – 下午6时',
    'footer-copy':            '&copy; <span id="year"></span> J&amp;P 厨卫装修 版权所有。',
  },
};

let currentLang = localStorage.getItem('jp-lang') || 'en';

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('jp-lang', lang);

  // Update html lang attribute
  const langMap = { en: 'en', zh: 'zh-Hans' };
  document.documentElement.lang = langMap[lang];

  // Translate text content
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[lang][key] !== undefined) {
      el.innerHTML = translations[lang][key];
    }
  });

  // Translate placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key] !== undefined) {
      el.placeholder = translations[lang][key];
    }
  });

  // Update footer year after innerHTML swap
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Sync all lang-btn instances
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

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

/* ===========================
   LANGUAGE SWITCHER INIT
=========================== */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

/* ===========================
   LANGUAGE PICKER MODAL
=========================== */
const pickerBackdrop = document.getElementById('lang-picker-backdrop');
const picker         = document.getElementById('lang-picker');

function showPicker() {
  document.body.style.overflow = 'hidden';
}

function hidePicker() {
  picker.classList.add('hidden');
  pickerBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

document.querySelectorAll('.lang-picker-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    setLanguage(btn.dataset.lang);
    hidePicker();
  });
});

// Show picker only if no preference has been saved
if (localStorage.getItem('jp-lang')) {
  hidePicker();
  setLanguage(currentLang);
} else {
  showPicker();
}
