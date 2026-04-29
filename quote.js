'use strict';

/* ============================================================
   quote.js — Request a Quote funnel logic
============================================================ */

/* ── Service definitions ── */
const SERVICES = [
  { id: 'kitchen',    icon: '🍳', nameKey: 'q_svc_kitchen'    },
  { id: 'bathroom',   icon: '🛁', nameKey: 'q_svc_bathroom'   },
  { id: 'living',     icon: '🛋️', nameKey: 'q_svc_living'     },
  { id: 'bedroom',    icon: '🛏️', nameKey: 'q_svc_bedroom'    },
  { id: 'office',     icon: '💼', nameKey: 'q_svc_office'     },
  { id: 'laundry',    icon: '🧺', nameKey: 'q_svc_laundry'    },
  { id: 'mudroom',    icon: '🚪', nameKey: 'q_svc_mudroom'    },
  { id: 'commercial', icon: '🏢', nameKey: 'q_svc_commercial' },
  { id: 'other',      icon: '✨', nameKey: 'q_svc_other'      },
];

function getServiceName(s) {
  var lang = localStorage.getItem('jp-lang') || 'en';
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang] && TRANSLATIONS[lang][s.nameKey]) {
    return TRANSLATIONS[lang][s.nameKey];
  }
  // fallback English names
  var fallbacks = {
    q_svc_kitchen: 'Kitchen Renovation', q_svc_bathroom: 'Bathroom & Vanity',
    q_svc_living: 'Living Room', q_svc_bedroom: 'Bedroom & Wardrobe',
    q_svc_office: 'Home Office', q_svc_laundry: 'Laundry Room',
    q_svc_mudroom: 'Mudroom & Entryway', q_svc_commercial: 'Commercial Space',
    q_svc_other: 'Something Else',
  };
  return fallbacks[s.nameKey] || s.nameKey;
}

/* ── Photo map: service id → array of { src, alt } ── */
const PHOTO_MAP = {
  kitchen: [
    { src: 'Kitchen/Kitchen%20-%20All%20White%20with%20Grey%20Island.JPG',              alt: 'All-white kitchen with grey island' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Gold%20Pendants%20Wide%20View.JPG',     alt: 'Wood tone kitchen with gold pendants' },
    { src: 'Kitchen/Kitchen%20-%20Luxury%20Wood%20White%20Marble%20Backsplash.JPG',     alt: 'Luxury wood and white marble backsplash' },
    { src: 'Kitchen/Kitchen%20-%20Luxury%20Wood%20White%20Wide%20View.JPG',             alt: 'Luxury wood white wide view' },
    { src: 'Kitchen/Kitchen%20-%20Open%20Concept%20Waterfront%20View.JPG',              alt: 'Open concept kitchen with waterfront view' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Waterfall%20Island.JPG',                alt: 'Wood tone waterfall island' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Large%20Island%20Wide%20View.JPG',      alt: 'Wood tone large island wide view' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Open%20Shelving%20Island.JPG',          alt: 'Wood tone open shelving island' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Island%20Close-Up.JPG',                 alt: 'Wood tone island close-up' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Fridge%20Wall.JPG',                     alt: 'Wood tone fridge wall' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Built-In%20Storage%20Cabinet.JPG',      alt: 'Wood tone built-in storage cabinet' },
    { src: 'Kitchen/Kitchen%20-%20White%20and%20Charcoal%20Wide%20View.JPG',            alt: 'White and charcoal kitchen wide view' },
    { src: 'Kitchen/Kitchen%20-%20White%20and%20Charcoal%20Marble%20Island.JPG',        alt: 'White and charcoal marble island' },
    { src: 'Kitchen/Kitchen%20-%20White%20Gloss%20Dark%20Island%20Lighting.JPG',        alt: 'White gloss kitchen with dark island lighting' },
    { src: 'Kitchen/Kitchen%20-%20White%20Quartz%20Island%20Wood%20Lowers.JPG',         alt: 'White quartz island with wood lowers' },
    { src: 'Kitchen/Kitchen%20-%20White%20Upper%20Cabinets%20Fridge%20Surround.JPG',    alt: 'White upper cabinets with fridge surround' },
    { src: 'Kitchen/Kitchen%20-%20White%20Wood%20Overhead%20View.JPG',                  alt: 'White wood kitchen overhead view' },
    { src: 'Kitchen/Kitchen%20-%20White%20with%20Wine%20Rack%20and%20Ovens.JPG',        alt: 'White kitchen with wine rack and ovens' },
    { src: 'Kitchen/Kitchen%20-%20Wine%20Rack%20Oven%20Tower%20Close-Up.JPG',           alt: 'Wine rack and oven tower close-up' },
    { src: 'Kitchen/Kitchen%20-%20Dark%20Island%20Under-Cabinet%20Lighting.JPG',        alt: 'Dark island with under-cabinet lighting' },
    { src: 'Kitchen/Kitchen%20-%20Marble%20Island%20Open%20to%20Dining.JPG',            alt: 'Marble island open to dining' },
    { src: 'Kitchen/Kitchen%20-%20Large%20Fluted%20Island.JPG',                         alt: 'Large fluted kitchen island' },
    { src: 'Kitchen/Kitchen%20-%20Black%20Framed%20Display%20Cabinet.JPG',              alt: 'Black framed display cabinet' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Island%20City%20View%20at%20Night.JPG',        alt: 'Wood island with city view at night' },
    { src: 'Kitchen/Kitchen%20-%20Wood%20Island%20with%20Microwave.JPG',                alt: 'Wood island with microwave' },
  ],
  bathroom: [
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Double%20Vanity%20Arched%20Backlit%20Mirrors.JPG',    alt: 'Double vanity with arched backlit mirrors' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Wood%20Tone%20Vanity%20Marble%20Wall%20Gold%20Fixtures.JPG', alt: 'Wood tone vanity with marble wall and gold fixtures' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Full%20Room%20Wood%20White%20Vanity.JPG',             alt: 'Full room wood and white vanity' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Double%20Vanity%20with%20Makeup%20Area.JPG',          alt: 'Double vanity with makeup area' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Double%20Vanity%20Green%20Tower%20Cabinet.JPG',       alt: 'Double vanity with green tower cabinet' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20White%20Floating%20Vanity%20Herringbone%20Tile.JPG',  alt: 'White floating vanity with herringbone tile' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20White%20Floating%20Vanity%20Vessel%20Sink.JPG',       alt: 'White floating vanity with vessel sink' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20White%20Shaker%20Vanity%20Base.JPG',                  alt: 'White shaker vanity base' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Dark%20Floating%20Vanity%20White%20Top.JPG',          alt: 'Dark floating vanity with white top' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Blue%20Shaker%20Powder%20Room%20Vanity.JPG',          alt: 'Blue shaker powder room vanity' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Light%20Wood%20Floating%20Vanity.JPG',                alt: 'Light wood floating vanity' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Wood%20Vanity%20with%20Tower%20Cabinet.JPG',          alt: 'Wood vanity with tower cabinet' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Wood%20White%20Floating%20Vanity%20Display%20Shelves.JPG', alt: 'Wood and white floating vanity with display shelves' },
  ],
  living: [
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Luxury%20Entertainment%20Wall%20Wide%20View.JPG',     alt: 'Luxury entertainment wall wide view' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Luxury%20Entertainment%20Wall%20Close-Up.JPG',        alt: 'Luxury entertainment wall close-up' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Luxury%20Gold%20Accent%20Entertainment%20Wall.JPG',   alt: 'Luxury gold accent entertainment wall' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Luxury%20Wood%20Entertainment%20Wall.JPG',             alt: 'Luxury wood entertainment wall' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20All%20White%20Open%20Concept%20Entertainment%20Wall.JPG', alt: 'All-white open concept entertainment wall' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20White%20Shaker%20Wall%20Unit%20Electric%20Fireplace.JPG', alt: 'White shaker wall unit with electric fireplace' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20White%20Wall%20Unit%20with%20TV.JPG',                  alt: 'White wall unit with TV' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Floating%20TV%20Unit%20with%20Display%20Towers.JPG',   alt: 'Floating TV unit with display towers' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Floor%20to%20Ceiling%20Bookshelves.JPG',               alt: 'Floor to ceiling bookshelves' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Navy%20Built-Ins%20Flanking%20Fireplace.JPG',          alt: 'Navy built-ins flanking fireplace' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Navy%20Wall%20Unit%20TV%20Space.JPG',                  alt: 'Navy wall unit TV space' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Wood%20Entertainment%20Wall%20In%20Progress.JPG',      alt: 'Wood entertainment wall in progress' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Wood%20Floating%20Cabinets%20Entertainment%20Wall.JPG', alt: 'Wood floating cabinets entertainment wall' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Wood%20Slat%20Entertainment%20Wall%20In%20Progress.JPG', alt: 'Wood slat entertainment wall in progress' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Wood%20Tone%20TV%20Unit%20Electric%20Fireplace.JPG',   alt: 'Wood tone TV unit with electric fireplace' },
  ],
  bedroom: [
    { src: 'Bedroom/Bedroom%20-%20White%20Wood%20Wall%20Unit%20with%20Wardrobe.JPG', alt: 'White wood wall unit with wardrobe' },
    { src: 'Bedroom/Bedroom%20-%20Tall%20Grey%20Storage%20Cabinets.JPG',             alt: 'Tall grey storage cabinets' },
    { src: 'Bedroom/Bedroom%20-%20Dark%20Grey%20Wardrobe.JPG',                       alt: 'Dark grey wardrobe' },
  ],
  office: [
    { src: 'Home%20Office/Home%20Office%20-%20White%20Shaker%20Built-In%20Shelving.JPG', alt: 'White shaker built-in shelving' },
    { src: 'Home%20Office/Home%20Office%20-%20Dark%20Built-In%20Desk%20and%20Wardrobe.JPG', alt: 'Dark built-in desk and wardrobe' },
    { src: 'Home%20Office/Home%20Office%20-%20White%20Bookcase%20with%20LED%20Lighting.JPG', alt: 'White bookcase with LED lighting' },
  ],
  laundry: [
    { src: 'Laundry%20Room/Laundry%20Room%20-%20Sage%20Green%20Shaker%20Cabinets.JPG',     alt: 'Sage green shaker laundry cabinets' },
    { src: 'Laundry%20Room/Laundry%20Room%20-%20Dark%20Wood%20Tone%20with%20Sink.JPG',      alt: 'Dark wood tone laundry with sink' },
    { src: 'Laundry%20Room/Laundry%20Room%20-%20Teal%20Cabinets%20Stacked%20Washer%20Dryer.JPG', alt: 'Teal cabinets with stacked washer-dryer' },
    { src: 'Laundry%20Room/Laundry%20Room%20-%20White%20and%20Wood%20Tone%20Cabinets.JPG',  alt: 'White and wood tone laundry cabinets' },
  ],
  mudroom: [
    { src: 'Mudroom%20%26%20Entryway/Mudroom%20-%20Sage%20Green%20Shaker%20Wide%20View.JPG', alt: 'Sage green shaker mudroom wide view' },
    { src: 'Mudroom%20%26%20Entryway/Mudroom%20-%20White%20Shaker%20with%20Bench%20and%20Hooks.JPG', alt: 'White shaker mudroom with bench and hooks' },
    { src: 'Mudroom%20%26%20Entryway/Mudroom%20-%20Sage%20Green%20Shaker%20with%20Bench.JPG', alt: 'Sage green shaker mudroom with bench' },
  ],
  commercial: [
    { src: 'Commercial/Commercial%20-%20White%20Grey%20Reception%20Desk.JPG', alt: 'White and grey commercial reception desk' },
  ],
  other: [
    { src: 'Kitchen/Kitchen%20-%20Wood%20Tone%20Gold%20Pendants%20Wide%20View.JPG',  alt: 'Wood tone kitchen with gold pendants' },
    { src: 'Bathroom%20%26%20Vanity/Bathroom%20-%20Double%20Vanity%20Arched%20Backlit%20Mirrors.JPG', alt: 'Double vanity bathroom' },
    { src: 'Living%20Room%20%26%20Entertainment/Living%20Room%20-%20Luxury%20Entertainment%20Wall%20Wide%20View.JPG', alt: 'Luxury entertainment wall' },
    { src: 'Bedroom/Bedroom%20-%20White%20Wood%20Wall%20Unit%20with%20Wardrobe.JPG', alt: 'Bedroom wall unit' },
    { src: 'Home%20Office/Home%20Office%20-%20White%20Shaker%20Built-In%20Shelving.JPG', alt: 'Home office built-in shelving' },
    { src: 'Mudroom%20%26%20Entryway/Mudroom%20-%20Sage%20Green%20Shaker%20Wide%20View.JPG', alt: 'Mudroom' },
  ],
};

/* ── State ── */
const state = {
  step: 1,
  service: null,
  inspiredBy: [],      // photo alts (up to 3)
  inspiredBySrc: [],   // photo srcs (up to 3)
  timeline: null,
  contactMethod: null,
};

const TOTAL_STEPS = 4;

/* ── DOM refs ── */
const progressBar  = document.getElementById('q-progress-bar');
const btnBack      = document.getElementById('q-btn-back');
const btnNext      = document.getElementById('q-btn-next');
const footer       = document.getElementById('q-footer');

/* ── Render service grid ── */
function renderServices() {
  const grid = document.getElementById('service-grid');
  const prevSelected = state.service;
  grid.innerHTML = SERVICES.map(s => `
    <button class="service-card${prevSelected === s.id ? ' selected' : ''}" data-id="${s.id}" aria-pressed="${prevSelected === s.id}">
      <span class="service-name">${getServiceName(s)}</span>
    </button>
  `).join('');

  grid.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', () => {
      grid.querySelectorAll('.service-card').forEach(c => {
        c.classList.remove('selected');
        c.setAttribute('aria-pressed', 'false');
      });
      card.classList.add('selected');
      card.setAttribute('aria-pressed', 'true');
      state.service = card.dataset.id;
      hideError('error-1');
    });
  });
}

/* ── Render photo grid based on selected service ── */
function renderPhotos() {
  const grid   = document.getElementById('photo-grid');
  const photos = PHOTO_MAP[state.service] || PHOTO_MAP.other;

  state.inspiredBy    = [];
  state.inspiredBySrc = [];

  grid.innerHTML = photos.map((p, i) => `
    <div class="photo-card" data-index="${i}" data-alt="${p.alt}" data-src="${p.src}" role="checkbox" aria-checked="false" tabindex="0">
      <img src="${p.src}" alt="${p.alt}" loading="lazy" />
    </div>
  `).join('');

  grid.querySelectorAll('.photo-card').forEach(card => {
    card.addEventListener('click', () => togglePhoto(card));
    card.addEventListener('keydown', e => {
      if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); togglePhoto(card); }
    });
  });
}

function togglePhoto(card) {
  const alt = card.dataset.alt;
  const src = card.dataset.src;
  const isSelected = card.classList.contains('selected');
  const grid = document.getElementById('photo-grid');

  if (isSelected) {
    card.classList.remove('selected');
    card.setAttribute('aria-checked', 'false');
    state.inspiredBy    = state.inspiredBy.filter(a => a !== alt);
    state.inspiredBySrc = state.inspiredBySrc.filter(s => s !== src);
  } else {
    if (state.inspiredBy.length >= 3) return;
    card.classList.add('selected');
    card.setAttribute('aria-checked', 'true');
    state.inspiredBy.push(alt);
    state.inspiredBySrc.push(src);
  }

  // Dim unselected cards when limit reached
  const atLimit = state.inspiredBy.length >= 3;
  grid.querySelectorAll('.photo-card').forEach(c => {
    if (!c.classList.contains('selected')) {
      c.classList.toggle('dimmed', atLimit);
    }
  });
}

/* ── Chip single-select helper ── */
function bindChips(groupId, stateKey) {
  const group = document.getElementById(groupId);
  if (!group) return;
  group.querySelectorAll('.chip').forEach(chip => {
    chip.addEventListener('click', () => {
      group.querySelectorAll('.chip').forEach(c => c.classList.remove('selected'));
      chip.classList.add('selected');
      state[stateKey] = chip.dataset.val;
    });
  });
}

/* ── Error helpers ── */
function showError(id, msg) {
  const el = document.getElementById(id);
  if (!el) return;
  el.textContent = msg || el.textContent;
  el.classList.remove('hidden');
}
function hideError(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('hidden');
}

/* ── Validation per step ── */
function t(key) {
  var lang = localStorage.getItem('jp-lang') || 'en';
  if (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
    return TRANSLATIONS[lang][key];
  }
  return key;
}

function validateStep(step) {
  if (step === 1) {
    if (!state.service) { showError('error-1', t('q_error1')); return false; }
  }
  if (step === 3) {
    if (!state.timeline) {
      showError('error-3', t('q_error3'));
      return false;
    }
  }
  if (step === 4) {
    const name  = document.getElementById('q-name').value.trim();
    const email = document.getElementById('q-email').value.trim();
    const phone = document.getElementById('q-phone').value.trim();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.[a-zA-Z]{2,}$/;
    if (name.length < 2 || !emailRegex.test(email) || phone.length < 7) {
      showError('error-4', t('q_error4'));
      return false;
    }
    hideError('error-4');
  }
  return true;
}

/* ── Progress bar ── */
function updateProgress(step) {
  const pct = step <= TOTAL_STEPS ? Math.round((step / TOTAL_STEPS) * 100) : 100;
  progressBar.style.width = pct + '%';
}

/* ── Show/hide step panels ── */
function showStep(newStep, direction) {
  const current = document.querySelector('.q-step.active');
  if (current) {
    current.classList.remove('active');
    current.classList.remove('slide-back');
  }

  const nextEl = newStep <= TOTAL_STEPS
    ? document.getElementById('step-' + newStep)
    : document.getElementById('step-confirm');

  if (!nextEl) return;
  nextEl.classList.remove('slide-back');
  if (direction === 'back') nextEl.classList.add('slide-back');
  nextEl.classList.add('active');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ── Navigation ── */
function goNext() {
  if (!validateStep(state.step)) return;

  if (state.step === 1) {
    renderPhotos();
  }

  if (state.step === 4) {
    submitQuote();
    return;
  }

  state.step++;
  showStep(state.step, 'forward');
  updateProgress(state.step);
  updateFooterButtons();
}

function goBack() {
  if (state.step <= 1) return;
  state.step--;
  showStep(state.step, 'back');
  updateProgress(state.step);
  updateFooterButtons();
}

function updateFooterButtons() {
  btnBack.style.display = state.step === 1 ? 'none' : '';
  btnNext.textContent   = state.step === 4 ? 'Send Request' : 'Continue';
}

/* ── Build confirmation summary ── */
function buildSummary() {
  const name    = document.getElementById('q-name').value.trim();
  const email   = document.getElementById('q-email').value.trim();
  const phone   = document.getElementById('q-phone').value.trim();
  const service = SERVICES.find(s => s.id === state.service);
  const lang    = localStorage.getItem('jp-lang') || 'en';
  const t       = (typeof TRANSLATIONS !== 'undefined' && TRANSLATIONS[lang]) || {};
  const none    = lang === 'zh' ? '\u672a\u6307\u5b9a' : 'Not specified';

  const inspiredHtml = state.inspiredBySrc.length
    ? `<div class="confirm-inspired-grid">${state.inspiredBySrc.map((src, i) => `
        <div class="confirm-inspired-img">
          <img src="${src}" alt="${state.inspiredBy[i] || ''}" />
        </div>`).join('')}</div>`
    : `<span class="confirm-summary-value">${none}</span>`;

  const rows = [
    { label: lang === 'zh' ? '\u670d\u52a1\u7c7b\u578b' : 'Service',     value: service ? getServiceName(service) : state.service, plain: true },
    { label: lang === 'zh' ? '\u8d77\u59cb\u65f6\u95f4'  : 'Timeline',    value: state.timeline || none, plain: true },
    { label: lang === 'zh' ? '\u59d3\u540d'              : 'Name',        value: name,  plain: true },
    { label: lang === 'zh' ? '\u7535\u5b50\u90ae\u4ef6'  : 'Email',       value: email, plain: true },
    { label: lang === 'zh' ? '\u7535\u8bdd'              : 'Phone',       value: phone, plain: true },
    { label: lang === 'zh' ? '\u8054\u7cfb\u65b9\u5f0f'  : 'Contact via', value: state.contactMethod || none, plain: true },
  ];

  const rowsHtml = rows.map(r => `
    <div class="confirm-summary-row">
      <span class="confirm-summary-label">${r.label}</span>
      <span class="confirm-summary-value">${r.value}</span>
    </div>
  `).join('');

  const inspiredLabel = lang === 'zh' ? '\u7075\u611f\u56fe\u7247' : 'Inspired by';

  document.getElementById('confirm-summary').innerHTML = `
    <div class="confirm-inspired-section">
      <span class="confirm-summary-label">${inspiredLabel}</span>
      ${inspiredHtml}
    </div>
    ${rowsHtml}
  `;
}

/* ── Mailto submit ── */
function submitQuote() {
  if (!validateStep(4)) return;

  const name    = document.getElementById('q-name').value.trim();
  const email   = document.getElementById('q-email').value.trim();
  const phone   = document.getElementById('q-phone').value.trim();
  const service = SERVICES.find(s => s.id === state.service);

  const subject = 'New Quote Request — ' + (service ? getServiceName(service) : state.service);

  const body = [
    'Hi Justin, I am interested in enquiring more about this!',
    '',
    'CONTACT',
    'Name:       ' + name,
    'Email:      ' + email,
    'Phone:      ' + phone,
    'Reach via:  ' + (state.contactMethod || 'Not specified'),
    '',
    'PROJECT',
    'Service:    ' + (service ? getServiceName(service) : state.service),
    'Timeline:   ' + (state.timeline || 'Not specified'),
    'Inspired by: ' + (state.inspiredBy.length ? state.inspiredBy.join(', ') : 'None selected'),
  ].join('\n');

  window.location.href = 'mailto:justin_1128@hotmail.com'
    + '?subject=' + encodeURIComponent(subject)
    + '&body='    + encodeURIComponent(body);

  buildSummary();
  showStep('confirm', 'forward');
  footer.classList.add('hidden');
  progressBar.style.width = '100%';
}

/* ── Init ── */
function init() {
  renderServices();
  bindChips('timeline-group', 'timeline');
  bindChips('contact-group',  'contactMethod');

  btnNext.addEventListener('click', goNext);
  btnBack.addEventListener('click', goBack);

  updateProgress(1);
  updateFooterButtons();
}

document.addEventListener('DOMContentLoaded', init);
