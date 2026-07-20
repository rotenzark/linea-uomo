/* Linea Uomo Acconciature — Bespoke Studio
   Base: PLUMBING_V 2 (Agenzia/Toolkit/boilerplate/plumbing.js), adattato solo
   nella costante SITE. Sotto il marcatore: il codice-FIRMA del sito. */

/* ══════════ FIRMA — il disegno della vetrina che si traccia ══════════
   Definita PRIMA del plumbing perché il plumbing la invoca a fine intro. */
window.bespokeHeroEntrance = (function () {
  /* La timeline si CREA subito allo script load (mai dentro un setTimeout:
     regola anti-race del Toolkit) e resta in pausa: l'intro la fa solo partire. */
  var tl = null;
  var svg = document.querySelector('.disegno__svg');
  if (svg) {
    var tratti = svg.querySelectorAll('.dis path, .dis circle');
    var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var hasGsap = typeof gsap !== 'undefined';
    tratti.forEach(function (el) {
      var len = 0;
      try { len = el.getTotalLength ? el.getTotalLength() : 0; } catch (e) { len = 0; }
      if (!len) return;
      el.style.strokeDasharray = len;
      el.style.strokeDashoffset = reduced || !hasGsap ? 0 : len;
    });
    if (tratti.length && hasGsap && !reduced) {
      tl = gsap.to(tratti, {
        strokeDashoffset: 0,
        duration: 1.15,
        ease: 'power2.inOut',
        stagger: { each: 0.085, from: 'start' },
        paused: true,
      });
    }
  }
  var partito = false;
  return function () {
    if (partito || !tl) return;
    partito = true;
    tl.play();
  };
})();

(function () {
  'use strict';
  var root = document.documentElement;
  root.classList.add('js');
  var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) root.classList.add('reduced-motion');

  /* ══════════ CONFIG PER-SITO ══════════ */
  var SITE = {
    slug: 'linea-uomo',
    whatsapp: {
      number: '393517817239',
      message: 'Buongiorno! Vorrei prendere un appuntamento da Linea Uomo.',
      ids: ['ctaPrenota', 'heroWhatsapp', 'doveWhatsapp', 'barWhatsapp'],
    },
    /* orari VERIFICATI su Google Maps (19/7/2026): dom+lun chiuso,
       mar–ven 08:30–12 e 14:45–19:15, sab continuato 08:30–18. */
    hours: {
      0: [],
      1: [],
      2: [['08:30', '12:00'], ['14:45', '19:15']],
      3: [['08:30', '12:00'], ['14:45', '19:15']],
      4: [['08:30', '12:00'], ['14:45', '19:15']],
      5: [['08:30', '12:00'], ['14:45', '19:15']],
      6: [['08:30', '18:00']],
    },
    hoursStatusId: 'orarioStato',
    hoursTableSelector: '[data-day]',
    todayClass: 'is-today',
    introId: 'intro',
    introDuration: 1700,
    revealSelector: '.reveal',
    inViewClass: 'in-view',
    breakpointMenu: 960,
    EN: {
      'nav.taglio': 'The cut', 'nav.voci': 'Voices', 'nav.app': 'Booking',
      'nav.bottega': 'The shop', 'nav.dove': 'Find us',
      'hero.eyebrow': 'Barber · Dergano · Via Imbonati 75',
      'hero.t1': 'It all starts', 'hero.t2': 'with a line',
      'hero.cap': 'From one line, the cut begins',
      'hero.cta': 'Book on WhatsApp', 'hero.link': 'Hours and address',
      'hero.rev': 'from 136 Google reviews',
      'forb.micro': 'At Linea Uomo the cut is worked with scissors, unhurried. As a customer puts it: “he listened to me and worked with scissors with great precision, something few people can still do”.',
      'forb.t1': 'Not a quick', 'forb.t2': 'clipper', 'forb.t3': 'run-through.',
      'forb.alt': 'The red barber chair, towel ready',
      'voci.h': 'Five full stars, one hundred and thirty-six times',
      'voci.q1': '“A skilled, careful barber: he listened to me and worked with scissors with great precision, something few people can still do. You can tell he has a lot of experience.”',
      'voci.c1': '· Google',
      'voci.q2': '“Luca is now my trusted barber here in Milan. A chat during the cut is always welcome.”',
      'voci.c2': '· Local Guide',
      'voci.q3': '“I have known Luca for years: skill, reliability and good humour, always top.”',
      'voci.c3': 'Google review',
      'voci.q4': '“This is the first time I\'m getting a haircut in Italy and I think this is the best haircut experience I\'ve ever had.”',
      'voci.c4': '· Google',
      'app.occhiello': 'How it works',
      'app.t1': 'You book', 'app.t2': 'with a message',
      'app.p1': 'On the shop window there is a handwritten sign: to book, call the number or send a WhatsApp message. No queues, no waiting: you come when it is your turn.',
      'app.cta': 'Message on WhatsApp', 'app.tel': 'Or call 351 781 7239',
      'app.alt': 'The sign on the window: to book, call the number or send a WhatsApp',
      'faq.q1': 'Do I always need an appointment?',
      'faq.a1': 'It is the way the shop indicates on its own window: a message or a call to 351 781 7239.',
      'faq.q2': 'When is it closed?',
      'faq.a2': 'Sunday and Monday. On Saturday it is open all day, from 8:30 to 18:00.',
      'faq.q3': 'Where is it?',
      'faq.a3': 'At Via Carlo Imbonati 75, in Dergano, a few minutes on foot from the M3 Dergano stop.',
      'bot.h': 'The shop',
      'bot.alt1': 'The Linea Uomo shop window in Via Imbonati, with the sign and the drawing on the glass',
      'bot.alt2': 'The drawing on the glass: a barber with comb and scissors cutting a child\'s hair',
      'bot.alt3': 'The waiting chairs and mirrors of the salon',
      'bot.alt4': 'The washing station with products and scissors on the shelf',
      'dove.h': 'Via Carlo Imbonati 75',
      'dove.sub': 'Dergano, Milan · a short walk from M3 Dergano',
      'dove.cta': 'Message on WhatsApp', 'dove.maps': 'Open in Google Maps',
      'd.lun': 'Monday', 'd.mar': 'Tuesday', 'd.mer': 'Wednesday', 'd.gio': 'Thursday',
      'd.ven': 'Friday', 'd.sab': 'Saturday', 'd.dom': 'Sunday',
      'd.chiuso': 'closed', 'd.chiuso2': 'closed',
      'foot.note': 'Demo website by Bespoke Studio · data and photos from Google Maps',
      'ab.call': 'Call', 'ab.wa': 'WhatsApp', 'ab.dove': 'Hours',
    },
  };
  /* ═════════════════════════════════════ */

  /* ---------- WhatsApp wiring ---------- */
  if (SITE.whatsapp.number) {
    var waHref = 'https://wa.me/' + SITE.whatsapp.number + '?text=' +
      encodeURIComponent(SITE.whatsapp.message);
    SITE.whatsapp.ids.forEach(function (id) {
      var el = document.getElementById(id);
      if (el) { el.href = waHref; el.target = '_blank'; el.rel = 'noopener'; }
    });
  }

  /* ---------- GSAP: registrazione IMMEDIATA + reveal + watchdog ---------- */
  var hasGsap = typeof gsap !== 'undefined';
  var hasST = hasGsap && typeof ScrollTrigger !== 'undefined';
  if (hasST) gsap.registerPlugin(ScrollTrigger);

  function showAllReveals() {
    var els = document.querySelectorAll(SITE.revealSelector);
    els.forEach(function (el) { el.classList.add(SITE.inViewClass); });
    if (hasGsap) {
      if (hasST) {
        els.forEach(function (el) {
          ScrollTrigger.getAll().forEach(function (st) {
            if (st.trigger === el && !st.progress) st.kill();
          });
        });
      }
      gsap.set(els, { opacity: 1, y: 0, x: 0 });
    }
  }
  setTimeout(function () { if (!hasGsap || reducedMotion) showAllReveals(); }, 1500);

  if (hasGsap && !reducedMotion) {
    gsap.utils.toArray(SITE.revealSelector).forEach(function (el) {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', immediateRender: false,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      });
    });
  } else {
    if ('IntersectionObserver' in window && !reducedMotion) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { e.target.classList.add(SITE.inViewClass); io.unobserve(e.target); }
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(SITE.revealSelector).forEach(function (el) { io.observe(el); });
    } else {
      showAllReveals();
    }
  }

  /* ---------- intro skippabile ---------- */
  var intro = document.getElementById(SITE.introId);
  var heroEntrance = window.bespokeHeroEntrance || function () {};
  function hideIntro() {
    if (!intro) return;
    var el = intro; intro = null;
    el.classList.add('hide');
    setTimeout(function () { el.remove(); }, 700);
    heroEntrance();
  }
  function killIntroNow() {
    if (!intro) return;
    var el = intro; intro = null;
    el.remove();
    heroEntrance();
  }
  if (reducedMotion || !intro) {
    if (intro) { intro.remove(); intro = null; }
    heroEntrance();
  } else {
    setTimeout(hideIntro, SITE.introDuration);
    setTimeout(hideIntro, 6000);
    intro.addEventListener('click', hideIntro);
  }

  /* ---------- burger menu ---------- */
  var burger = document.getElementById('burger');
  var nav = document.getElementById('mainNav');
  if (burger && nav) {
    var lastFocus = null;
    var closeNav = function () {
      nav.classList.remove('nav-open');
      burger.setAttribute('aria-expanded', 'false');
      if (lastFocus) { lastFocus.focus(); lastFocus = null; }
    };
    var openNav = function () {
      // l'intro (z-index alto, figlia del body) coprirebbe il drawer: la chiudo
      if (typeof killIntroNow === 'function') killIntroNow();
      lastFocus = document.activeElement;
      nav.classList.add('nav-open');
      burger.setAttribute('aria-expanded', 'true');
      var first = nav.querySelector('a, button');
      if (first) first.focus();
    };
    burger.addEventListener('click', function () {
      nav.classList.contains('nav-open') ? closeNav() : openNav();
    });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', closeNav); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('nav-open')) closeNav();
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > SITE.breakpointMenu) closeNav();
    });
  }

  /* ---------- lightbox ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightboxImg');
  var lightboxClose = document.getElementById('lightboxClose');
  if (lightbox && lightboxImg) {
    var opener = null;
    var openLb = function (src, alt) {
      lightboxImg.src = src; lightboxImg.alt = alt || '';
      lightbox.hidden = false;
      document.body.style.overflow = 'hidden';
      if (lightboxClose) lightboxClose.focus();
    };
    var closeLb = function () {
      lightbox.hidden = true; lightboxImg.src = '';
      document.body.style.overflow = '';
      if (opener) { opener.focus(); opener = null; }
    };
    document.querySelectorAll('[data-full]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        opener = btn;
        var img = btn.querySelector('img');
        openLb(btn.getAttribute('data-full'), img ? img.alt : '');
      });
    });
    if (lightboxClose) lightboxClose.addEventListener('click', closeLb);
    lightbox.addEventListener('click', function (e) { if (e.target === lightbox) closeLb(); });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && !lightbox.hidden) closeLb();
    });
  }

  /* ---------- orari dinamici Europe/Rome ---------- */
  function romeNow() {
    try {
      var f = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Europe/Rome', weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false,
      });
      var p = f.formatToParts(new Date());
      var map = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
      var get = function (t) { return p.find(function (x) { return x.type === t; }).value; };
      return { day: map[get('weekday')], mins: parseInt(get('hour'), 10) * 60 + parseInt(get('minute'), 10) };
    } catch (e) {
      var d = new Date();
      return { day: d.getDay(), mins: d.getHours() * 60 + d.getMinutes() };
    }
  }
  var toMin = function (hm) {
    var a = hm.split(':');
    return parseInt(a[0], 10) * 60 + parseInt(a[1], 10);
  };
  var fmt = function (m) {
    m = m % 1440;
    return ('0' + Math.floor(m / 60)).slice(-2) + ':' + ('0' + (m % 60)).slice(-2);
  };
  var DAYS_IT = ['domenica', 'lunedì', 'martedì', 'mercoledì', 'giovedì', 'venerdì', 'sabato'];
  var DAYS_EN = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  function hoursState() {
    var now = romeNow();
    var wins = SITE.hours[now.day] || [];
    for (var i = 0; i < wins.length; i++) {
      var s = toMin(wins[i][0]), e = toMin(wins[i][1]);
      if (now.mins >= s && now.mins < Math.min(e, 1440)) {
        return { open: true, day: now.day, closesAt: fmt(e) };
      }
    }
    var prev = (now.day + 6) % 7;
    var pw = SITE.hours[prev] || [];
    for (var j = 0; j < pw.length; j++) {
      var pe = toMin(pw[j][1]);
      if (pe > 1440 && now.mins < pe - 1440) {
        return { open: true, day: prev, closesAt: fmt(pe) };
      }
    }
    for (var k = 0; k < wins.length; k++) {
      if (now.mins < toMin(wins[k][0])) {
        return { open: false, day: now.day, opensToday: fmt(toMin(wins[k][0])) };
      }
    }
    for (var d = 1; d <= 7; d++) {
      var nd = (now.day + d) % 7;
      var nw = SITE.hours[nd] || [];
      if (nw.length) return { open: false, day: now.day, opensDay: nd, opensAt: fmt(toMin(nw[0][0])) };
    }
    return { open: false, day: now.day };
  }

  function renderHours() {
    var el = document.getElementById(SITE.hoursStatusId);
    var st = hoursState();
    document.querySelectorAll(SITE.hoursTableSelector).forEach(function (row) {
      row.classList.toggle(SITE.todayClass,
        parseInt(row.getAttribute('data-day'), 10) === st.day);
    });
    if (!el) return;
    var en = root.lang === 'en';
    var txt;
    if (st.open) {
      txt = (en ? 'Open now' : 'Aperto ora') + ' · ' + (en ? 'closes at ' : 'chiude alle ') + st.closesAt;
    } else if (st.opensToday) {
      txt = (en ? 'Closed · opens today at ' : 'Chiuso · apre oggi alle ') + st.opensToday;
    } else if (st.opensAt !== undefined) {
      txt = (en ? 'Closed · opens ' + DAYS_EN[st.opensDay] + ' at ' : 'Chiuso · apre ' + DAYS_IT[st.opensDay] + ' alle ') + st.opensAt;
    } else {
      txt = en ? 'Closed' : 'Chiuso';
    }
    el.textContent = txt;
  }
  renderHours();
  setInterval(renderHours, 60000);

  /* ---------- i18n overlay ---------- */
  var originals = {};
  var I18N_ATTRS = [
    ['data-i18n', null],
    ['data-i18n-aria', 'aria-label'],
    ['data-i18n-alt', 'alt'],
    ['data-i18n-placeholder', 'placeholder'],
    ['data-i18n-title', 'title'],
  ];
  function setLang(lang) {
    root.lang = lang === 'en' ? 'en' : 'it';
    I18N_ATTRS.forEach(function (pair) {
      var dattr = pair[0], target = pair[1];
      if (!originals[dattr]) originals[dattr] = {};
      document.querySelectorAll('[' + dattr + ']').forEach(function (el) {
        var key = el.getAttribute(dattr);
        var store = originals[dattr];
        /* innerHTML, NON textContent: gli elementi tradotti contengono
           quasi sempre markup (<strong>, <br>) e con textContent il primo
           passaggio a EN lo appiattisce — tornando in italiano il grassetto
           non torna più. I valori del dizionario sono statici e scritti da
           noi. (20/7/2026: la flotta era già così, il boilerplate no.) */
        if (!(key in store)) store[key] = target ? el.getAttribute(target) : el.innerHTML;
        var val = lang === 'en' && SITE.EN[key] !== undefined ? SITE.EN[key] : store[key];
        if (target) el.setAttribute(target, val); else el.innerHTML = val;
      });
    });
    renderHours();
    try { localStorage.setItem(SITE.slug + '-lang', lang); } catch (e) {}
  }
  var langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', function () {
      setLang(root.lang === 'en' ? 'it' : 'en');
    });
  }
  try {
    if (localStorage.getItem(SITE.slug + '-lang') === 'en') setLang('en');
  } catch (e) {}

  /* ---------- action-bar mobile ---------- */
  var actionBar = document.getElementById('actionBar');
  if (actionBar) {
    var onScroll = function () {
      actionBar.classList.toggle('is-visible', window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ══════════ FINE PLUMBING — sotto solo firma del sito ══════════ */

  /* la foto del blocco giallo sale mentre si scorre: taglia il titolo */
  if (hasGsap && hasST && !reducedMotion) {
    var fotoGialla = document.querySelector('.giallo__foto');
    if (fotoGialla) {
      gsap.fromTo(fotoGialla, { y: 40 }, {
        y: -30, ease: 'none',
        scrollTrigger: { trigger: '.giallo', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
      });
    }
  }
})();
