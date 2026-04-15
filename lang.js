'use strict';

/* ============================================================
   lang.js — Language toggle (EN / 中文)
   Completely isolated from script.js to avoid error propagation
============================================================ */

var TRANSLATIONS = {
  en: {
    nav_services:        'Services',
    nav_portfolio:       'Portfolio',
    nav_about:           'About',
    nav_quote:           'Get a Quote',
    hero_eyebrow:        "GTA's Premier Renovation Studio",
    hero_title:          'Your Vision.<br />Our Craft.',
    hero_subtitle:       'From sleek modern kitchens to spa-inspired bathrooms,<br class="hero-br" /> we bring your dream space to life \u2014 beautifully.',
    hero_cta_quote:      'Request a Quote',
    hero_cta_work:       'See Our Work',
    services_eyebrow:    'What We Do',
    services_title:      'Spaces We Transform',
    services_subtitle:   'Every project is handled with precision, care, and decades of expertise.',
    svc_kitchen_title:   'Kitchen Renovations',
    svc_kitchen_desc:    'Custom cabinetry, premium countertops, and thoughtful layouts that make your kitchen the heart of your home.',
    svc_bath_title:      'Bathroom Renovations',
    svc_bath_desc:       'Elegant finishes, smart storage, and spa-like details that turn your bathroom into a daily retreat.',
    svc_living_title:    'Living Room Design',
    svc_living_desc:     'Cohesive interiors with custom finishes and furnishings that reflect your personality and lifestyle.',
    svc_cta:             'Get a Quote \u2192',
    portfolio_eyebrow:   'Our Work',
    portfolio_title:     'Recent Projects',
    portfolio_subtitle:  'Browse through a selection of our completed renovations.',
    filter_all:          'All',
    filter_kitchen:      'Kitchen',
    filter_bath:         'Bathroom',
    filter_living:       'Living Room',
    filter_other:        'More Spaces',
    about_eyebrow:       'Our Story',
    about_title:         'Built on Craftsmanship,<br />Driven by Detail',
    about_p1:            'For over two decades, J&amp;P Kitchen &amp; Bath has been transforming homes across the Greater Toronto Area. Based in Scarborough, we combine old-world craftsmanship with modern design sensibilities to create spaces that are as functional as they are beautiful.',
    about_p2:            'Every project \u2014 from a single bathroom refresh to a full kitchen overhaul \u2014 receives our complete attention. We work closely with each client to understand their vision, their lifestyle, and their budget, then deliver results that exceed expectations.',
    val1_title:          'Quality Materials',
    val1_desc:           'We source only premium finishes and fixtures that stand the test of time.',
    val2_title:          'On Time, On Budget',
    val2_desc:           'We respect your home and your timeline \u2014 no surprises, no delays.',
    val3_title:          'Personal Service',
    val3_desc:           'You work directly with us from first consultation to final walkthrough.',
    about_cta:           'Start Your Project',
    contact_eyebrow:     'Get in Touch',
    contact_title:       'Ready to Transform Your Space?',
    contact_subtitle:    'Tell us about your project and Peter will personally follow up within 24 hours.',
    contact_cta_btn:     'Request a Quote',
    contact_showroom:    'Visit Our Showroom',
    contact_call:        'Call Us',
    contact_email:       'Email Us',
    contact_hours_title: 'Business Hours',
    contact_hours_body:  'Mon\u2013Fri: 9 a.m. \u2013 6 p.m.<br />Sat\u2013Sun: Closed',
    // Quote page
    q_back:              'Back',
    q_step1_label:       'Step 1 of 4',
    q_step1_heading:     'What are you looking for?',
    q_step1_sub:         'Select the service that best fits your project.',
    q_error1:            'Please select a service to continue.',
    q_step2_label:       'Step 2 of 4',
    q_step2_heading:     'Which projects speak to you?',
    q_step2_sub:         'Tap up to 3 that match the vibe you\u2019re going for.',
    q_skip_hint:         'Not seeing what you want? Skip and describe it in the next step.',
    q_step3_label:       'Step 3 of 4',
    q_step3_heading:     'Investment & Timeline',
    q_step3_sub:         'Help us understand your vision.',
    q_budget_label:      'What investment range are you considering?',
    q_budget_0:          'Under $10,000',
    q_budget_1:          '$10,000 \u2013 $25,000',
    q_budget_2:          '$25,000 \u2013 $50,000',
    q_budget_3:          '$50,000 \u2013 $100,000',
    q_budget_4:          '$100,000 \u2013 $250,000',
    q_budget_5:          '$250,000+',
    q_budget_6:          'Prefer to discuss',
    q_timeline_label:    'When are you looking to start?',
    q_tl_1:              'As soon as possible',
    q_tl_2:              'Within 1 month',
    q_tl_3:              '1\u20133 months',
    q_tl_4:              '3\u20136 months',
    q_tl_5:              'Just exploring ideas',
    q_error3:            'Please select a budget and timeline to continue.',
    q_step4_label:       'Step 4 of 4',
    q_step4_heading:     'How should we reach you?',
    q_step4_sub:         'Peter will personally follow up within 24 hours.',
    q_label_name:        'Full Name',
    q_label_email:       'Email Address',
    q_label_phone:       'Phone Number',
    q_label_contact:     'Preferred Contact Method',
    q_contact_1:         'Phone call',
    q_contact_2:         'Email',
    q_contact_3:         'Text message',
    q_error4:            'Please fill in your name, email, and phone number.',
    q_error_send:        'Something went wrong. Please try again or call us directly.',
    q_confirm_heading:   'We\u2019ll be in touch soon.',
    q_confirm_sub:       'Peter will personally review your request and reach out within 24 hours. We look forward to working with you.',
    q_confirm_btn:       'Back to Home',
    q_btn_back:          'Back',
    q_btn_next:          'Continue',
    q_svc_kitchen:       'Kitchen Renovation',
    q_svc_bathroom:      'Bathroom & Vanity',
    q_svc_living:        'Living Room',
    q_svc_bedroom:       'Bedroom & Wardrobe',
    q_svc_office:        'Home Office',
    q_svc_laundry:       'Laundry Room',
    q_svc_mudroom:       'Mudroom & Entryway',
    q_svc_commercial:    'Commercial Space',
    q_svc_other:         'Something Else',
  },
  zh: {
    nav_services:        '\u670d\u52a1',
    nav_portfolio:       '\u4f5c\u54c1\u96c6',
    nav_about:           '\u5173\u4e8e\u6211\u4eec',
    nav_quote:           '\u83b7\u53d6\u62a5\u4ef7',
    hero_eyebrow:        'GTA \u9996\u9009\u88c5\u4fee\u5de5\u4f5c\u5ba4',
    hero_title:          '\u60a8\u7684\u613f\u666f\u3002<br />\u6211\u4eec\u7684\u5de5\u827a\u3002',
    hero_subtitle:       '\u4ece\u65f6\u5c1a\u73b0\u4ee3\u53a8\u623f\u5230\u6c34\u75d7\u98ce\u683c\u6d74\u5ba4\uff0c<br class="hero-br" />\u6211\u4eec\u5c06\u60a8\u7684\u68a6\u60f3\u7a7a\u95f4\u53d8\u4e3a\u73b0\u5b9e\u2014\u2014\u7f8e\u4e0d\u80dc\u6536\u3002',
    hero_cta_quote:      '\u7533\u8bf7\u62a5\u4ef7',
    hero_cta_work:       '\u67e5\u770b\u4f5c\u54c1',
    services_eyebrow:    '\u6211\u4eec\u7684\u670d\u52a1',
    services_title:      '\u6211\u4eec\u6539\u9020\u7684\u7a7a\u95f4',
    services_subtitle:   '\u6bcf\u4e2a\u9879\u76ee\u90fd\u4ee5\u7cbe\u51c6\u3001\u7528\u5fc3\u548c\u6570\u5341\u5e74\u7684\u4e13\u4e1a\u7ecf\u9a8c\u5b8c\u6210\u3002',
    svc_kitchen_title:   '\u53a8\u623f\u7ffb\u65b0',
    svc_kitchen_desc:    '\u5b9a\u5236\u6a71\u67dc\u3001\u4f18\u8d28\u53f0\u9762\u548c\u7cbe\u5fc3\u8bbe\u8ba1\u7684\u5e03\u5c40\uff0c\u8ba9\u60a8\u7684\u53a8\u623f\u6210\u4e3a\u5bb6\u7684\u6838\u5fc3\u3002',
    svc_bath_title:      '\u6d74\u5ba4\u7ffb\u65b0',
    svc_bath_desc:       '\u7cbe\u81f4\u7684\u88c5\u9970\u3001\u667a\u80fd\u6536\u7eb3\u548c\u6c34\u75d7\u7ea7\u7ec6\u8282\uff0c\u8ba9\u60a8\u7684\u6d74\u5ba4\u6210\u4e3a\u65e5\u5e38\u4f11\u61a9\u4e4b\u6240\u3002',
    svc_living_title:    '\u5ba2\u5385\u8bbe\u8ba1',
    svc_living_desc:     '\u5b9a\u5236\u88c5\u9970\u4e0e\u5bb6\u5177\uff0c\u6253\u9020\u5f70\u663e\u60a8\u4e2a\u6027\u4e0e\u751f\u6d3b\u65b9\u5f0f\u7684\u7edf\u4e00\u5ba4\u5185\u98ce\u683c\u3002',
    svc_cta:             '\u83b7\u53d6\u62a5\u4ef7 \u2192',
    portfolio_eyebrow:   '\u6211\u4eec\u7684\u4f5c\u54c1',
    portfolio_title:     '\u8fd1\u671f\u9879\u76ee',
    portfolio_subtitle:  '\u6d4f\u89c8\u6211\u4eec\u90e8\u5206\u5df2\u5b8c\u5de5\u7684\u88c5\u4fee\u6848\u4f8b\u3002',
    filter_all:          '\u5168\u90e8',
    filter_kitchen:      '\u53a8\u623f',
    filter_bath:         '\u6d74\u5ba4',
    filter_living:       '\u5ba2\u5385',
    filter_other:        '\u66f4\u591a\u7a7a\u95f4',
    about_eyebrow:       '\u6211\u4eec\u7684\u6545\u4e8b',
    about_title:         '\u5de5\u827a\u4e3a\u672c\uff0c<br />\u7cbe\u5de5\u7ec6\u4f5c',
    about_p1:            '\u4e8c\u5341\u4f59\u5e74\u6765\uff0cJ&amp;P \u53a8\u536b\u88c5\u4fee\u4e00\u76f4\u670d\u52a1\u4e8e\u5927\u591a\u4f26\u591a\u5730\u533a\u7684\u5bb6\u5ead\u3002\u6211\u4eec\u603b\u90e8\u4f4d\u4e8e\u58eb\u5609\u5821\uff0c\u5c06\u4f20\u7edf\u5de5\u827a\u4e0e\u73b0\u4ee3\u8bbe\u8ba1\u7406\u5ff5\u76f8\u878d\u5408\uff0c\u6253\u9020\u517c\u5177\u529f\u80fd\u6027\u4e0e\u7f8e\u89c2\u6027\u7684\u7406\u60f3\u7a7a\u95f4\u3002',
    about_p2:            '\u65e0\u8bba\u662f\u5355\u95f4\u6d74\u5ba4\u7ffb\u65b0\u8fd8\u662f\u6574\u4f53\u53a8\u623f\u6539\u9020\uff0c\u6bcf\u4e2a\u9879\u76ee\u90fd\u503e\u6ce8\u6211\u4eec\u5168\u90e8\u7684\u5fc3\u8840\u3002\u6211\u4eec\u4e0e\u6bcf\u4f4d\u5ba2\u6237\u5bc6\u5207\u5408\u4f5c\uff0c\u6df1\u5165\u4e86\u89e3\u5176\u613f\u666f\u3001\u751f\u6d3b\u65b9\u5f0f\u548c\u9884\u7b97\uff0c\u6700\u7ec8\u5448\u73b0\u8d85\u51fa\u9884\u671f\u7684\u5b8c\u7f8e\u6210\u679c\u3002',
    val1_title:          '\u4f18\u8d28\u6750\u6599',
    val1_desc:           '\u6211\u4eec\u53ea\u9009\u7528\u7ecf\u4e45\u8010\u7528\u7684\u9ad8\u7aef\u88c5\u9970\u6750\u6599\u548c\u914d\u4ef6\u3002',
    val2_title:          '\u6309\u65f6\u6309\u9884\u7b97\u5b8c\u5de5',
    val2_desc:           '\u6211\u4eec\u5c0a\u91cd\u60a8\u7684\u5bb6\u56ed\u548c\u5de5\u671f\u2014\u2014\u7edd\u65e0\u610f\u5916\uff0c\u7edd\u4e0d\u62d6\u5ef6\u3002',
    val3_title:          '\u8d34\u5fc3\u670d\u52a1',
    val3_desc:           '\u4ece\u9996\u6b21\u548b\u8be2\u5230\u6700\u7ec8\u9a8c\u6536\uff0c\u5168\u7a0b\u7531\u6211\u4eec\u4eb2\u81ea\u8ddf\u8fdb\u3002',
    about_cta:           '\u5f00\u542f\u60a8\u7684\u9879\u76ee',
    contact_eyebrow:     '\u8054\u7cfb\u6211\u4eec',
    contact_title:       '\u51c6\u5907\u6539\u9020\u60a8\u7684\u7a7a\u95f4\u4e86\u5417\uff1f',
    contact_subtitle:    'Peter \u5c06\u5728 24 \u5c0f\u65f6\u5185\u4eb2\u81ea\u56de\u590d\u60a8\u7684\u9879\u76ee\u8be6\u60c5\u3002',
    contact_cta_btn:     '\u7533\u8bf7\u62a5\u4ef7',
    contact_showroom:    '\u53c2\u89c2\u6211\u4eec\u7684\u5c55\u5385',
    contact_call:        '\u7535\u8bdd\u8054\u7cfb',
    contact_email:       '\u90ae\u4ef6\u8054\u7cfb',
    contact_hours_title: '\u8425\u4e1a\u65f6\u95f4',
    contact_hours_body:  '\u5468\u4e00\u81f3\u5468\u4e94\uff1a\u4e0a\u5348 9 \u65f6 \u2013 \u4e0b\u5348 6 \u65f6<br />\u5468\u516d\u81f3\u5468\u65e5\uff1a\u4f11\u606f',
    // Quote page
    q_back:              '\u8fd4\u56de',
    q_step1_label:       '\u7b2c 1 \u6b65\uff0c\u5171 4 \u6b65',
    q_step1_heading:     '\u60a8\u9700\u8981\u54ea\u9879\u670d\u52a1\uff1f',
    q_step1_sub:         '\u8bf7\u9009\u62e9\u6700\u7b26\u5408\u60a8\u9879\u76ee\u7684\u670d\u52a1\u7c7b\u578b\u3002',
    q_error1:            '\u8bf7\u9009\u62e9\u4e00\u9879\u670d\u52a1\u4ee5\u7ee7\u7eed\u3002',
    q_step2_label:       '\u7b2c 2 \u6b65\uff0c\u5171 4 \u6b65',
    q_step2_heading:     '\u54ea\u4e9b\u6848\u4f8b\u90a3\u60a8\u5fc3\u52a8\uff1f',
    q_step2_sub:         '\u6700\u591a\u53ef\u9009 3 \u5f20\uff0c\u6311\u9009\u7b26\u5408\u60a8\u610f\u5883\u7684\u98ce\u683c\u3002',
    q_skip_hint:         '\u6ca1\u770b\u5230\u559c\u6b22\u7684\uff1f\u53ef\u8df3\u8fc7\uff0c\u5728\u4e0b\u4e00\u6b65\u8be6\u7ec6\u63cf\u8ff0\u3002',
    q_step3_label:       '\u7b2c 3 \u6b65\uff0c\u5171 4 \u6b65',
    q_step3_heading:     '\u9884\u7b97\u4e0e\u65f6\u95f4',
    q_step3_sub:         '\u8bf7\u544a\u8bc9\u6211\u4eec\u60a8\u7684\u89c4\u5212\u3002',
    q_budget_label:      '\u60a8\u8003\u8651\u7684\u9884\u7b97\u8303\u56f4\u662f\uff1f',
    q_budget_0:          '10,000 \u7f8e\u5143\u4ee5\u5185',
    q_budget_1:          '10,000 \u2013 25,000 \u7f8e\u5143',
    q_budget_2:          '25,000 \u2013 50,000 \u7f8e\u5143',
    q_budget_3:          '50,000 \u2013 100,000 \u7f8e\u5143',
    q_budget_4:          '100,000 \u2013 250,000 \u7f8e\u5143',
    q_budget_5:          '250,000 \u7f8e\u5143\u4ee5\u4e0a',
    q_budget_6:          '\u9762\u8bca\u786e\u8ba4',
    q_timeline_label:    '\u60a8\u5e0c\u671b\u4f55\u65f6\u5f00\u59cb\uff1f',
    q_tl_1:              '\u8d8a\u5feb\u8d8a\u597d',
    q_tl_2:              '1 \u4e2a\u6708\u5185',
    q_tl_3:              '1\u20133 \u4e2a\u6708',
    q_tl_4:              '3\u20136 \u4e2a\u6708',
    q_tl_5:              '\u76ee\u524d\u53ea\u662f\u4e86\u89e3\u4e00\u4e0b',
    q_error3:            '\u8bf7\u9009\u62e9\u9884\u7b97\u8303\u56f4\u548c\u8d77\u59cb\u65f6\u95f4\u4ee5\u7ee7\u7eed\u3002',
    q_step4_label:       '\u7b2c 4 \u6b65\uff0c\u5171 4 \u6b65',
    q_step4_heading:     '\u6211\u4eec\u5e94\u8be5\u5982\u4f55\u8054\u7cfb\u60a8\uff1f',
    q_step4_sub:         'Peter \u5c06\u4e8e 24 \u5c0f\u65f6\u5185\u4eb2\u81ea\u8ddf\u8fdb\u3002',
    q_label_name:        '\u59d3\u540d',
    q_label_email:       '\u7535\u5b50\u90ae\u4ef6',
    q_label_phone:       '\u7535\u8bdd\u53f7\u7801',
    q_label_contact:     '\u60a8\u504f\u597d\u7684\u8054\u7cfb\u65b9\u5f0f',
    q_contact_1:         '\u7535\u8bdd',
    q_contact_2:         '\u90ae\u4ef6',
    q_contact_3:         '\u77ed\u4fe1',
    q_error4:            '\u8bf7\u586b\u5199\u60a8\u7684\u59d3\u540d\u3001\u7535\u5b50\u90ae\u4ef6\u548c\u7535\u8bdd\u53f7\u7801\u3002',
    q_error_send:        '\u51fa\u9519\u4e86\uff0c\u8bf7\u91cd\u8bd5\u6216\u76f4\u63a5\u7535\u8bdd\u8054\u7cfb\u6211\u4eec\u3002',
    q_confirm_heading:   '\u6211\u4eec\u5c06\u5c3d\u5feb\u4e0e\u60a8\u8054\u7cfb\u3002',
    q_confirm_sub:       'Peter \u5c06\u4eb2\u81ea\u5ba1\u9605\u60a8\u7684\u7533\u8bf7\uff0c\u5e76\u5728 24 \u5c0f\u65f6\u5185\u56de\u590d\u3002\u6211\u4eec\u671f\u5f85\u4e0e\u60a8\u5408\u4f5c\u3002',
    q_confirm_btn:       '\u8fd4\u56de\u9996\u9875',
    q_btn_back:          '\u8fd4\u56de',
    q_btn_next:          '\u7ee7\u7eed',
    q_svc_kitchen:       '\u53a8\u623f\u7ffb\u65b0',
    q_svc_bathroom:      '\u6d74\u5ba4\u4e0e\u68b3\u5986\u53f0',
    q_svc_living:        '\u5ba2\u5385',
    q_svc_bedroom:       '\u5367\u5ba4\u4e0e\u8863\u6a71',
    q_svc_office:        '\u5bb6\u5c45\u529e\u516c\u5ba4',
    q_svc_laundry:       '\u6d17\u8863\u95f4',
    q_svc_mudroom:       '\u95e8\u5385\u4e0e\u8fdb\u95e8\u533a',
    q_svc_commercial:    '\u5546\u4e1a\u7a7a\u95f4',
    q_svc_other:         '\u5176\u4ed6',
  },
};

(function () {
  var savedLang = localStorage.getItem('jp-lang');
  var currentLang = savedLang || 'en';

  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('jp-lang', lang);
    document.documentElement.lang = lang;

    var els = document.querySelectorAll('[data-i18n]');
    for (var i = 0; i < els.length; i++) {
      var el  = els[i];
      var key = el.getAttribute('data-i18n');
      var t   = TRANSLATIONS[lang];
      if (t && t[key] !== undefined) {
        el.innerHTML = t[key];
      }
    }

    var toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = lang === 'en' ? '\u4e2d\u6587' : 'EN';

    // Re-render quote service grid if present (quote.js exposes renderServices globally)
    if (typeof renderServices === 'function') {
      renderServices();
    }
  }

  function showPicker() {
    var picker   = document.getElementById('lang-picker');
    var backdrop = document.getElementById('lang-picker-backdrop');
    if (picker)   picker.classList.add('active');
    if (backdrop) backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function hidePicker() {
    var picker   = document.getElementById('lang-picker');
    var backdrop = document.getElementById('lang-picker-backdrop');
    if (picker)   picker.classList.remove('active');
    if (backdrop) backdrop.classList.remove('active');
    document.body.style.overflow = '';
  }

  // Picker buttons
  var pickerBtns = document.querySelectorAll('.lang-picker-btn');
  for (var j = 0; j < pickerBtns.length; j++) {
    (function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang'));
        hidePicker();
      });
    })(pickerBtns[j]);
  }

  // Toggle button
  var toggleBtn = document.getElementById('lang-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', function () {
      applyLang(currentLang === 'zh' ? 'en' : 'zh');
    });
  }

  // Boot
  if (!savedLang) {
    showPicker();
  } else {
    applyLang(currentLang);
  }
})();
