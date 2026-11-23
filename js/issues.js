/* Hisaab Kitaab: Issues page. Plain JS. Data comes from js/issues-data.js */
(function () {
  'use strict';

  var D = window.HK_ISSUES || { releases: [], hotfixes: [], known: [], upcoming: [] };
  var doc = document.documentElement;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var CONTACT = 'arun.idevs@gmail.com';

  /* ---------- text ---------- */
  var T = {
    en: {
      n_home: 'Home', n_issues: 'Issues', n_join: 'Join', n_priv: 'Privacy', n_faq: 'FAQ', n_priv_full: 'Privacy policy', n_terms: 'Terms of use',
      eyebrow: 'Open changelog and roadmap', h1a: 'Fixed, known,', h1b: 'next.',
      lead: 'We build in the open. Here is everything we have fixed, what we know is still rough, and what is coming. Found something new? Tell us and it lands here.',
      m_live: 'Closed testing', m_upd: 'Updated',
      s_fixed: 'Fixed and improved', s_hot: 'Hotfixes shipped', s_known: 'Known issues', s_up: 'On the roadmap',
      tab_all: 'All', tab_fixed: 'Fixed', tab_hot: 'Hotfixes', tab_known: 'Known', tab_up: 'Upcoming',
      search: 'Search issues',
      h_fixed: 'Fixed and improved', d_fixed: 'Every fix and polish that already made it into the app.',
      h_hot: 'Hotfixes', d_hot: 'Urgent fixes we ship outside the normal update cycle.',
      h_known: 'Known issues', d_known: 'Things we know are rough, with a way around them where there is one.',
      h_up: 'Upcoming', d_up: 'Where the app is heading. No dates are promised, the order can change.',
      tag_fixed: 'Fixed', tag_improved: 'Improved', tag_hardened: 'Hardened',
      before: 'Before', now: 'Now', work: 'Workaround',
      st_planned: 'Fix planned', st_monitoring: 'Monitoring', st_investigating: 'Investigating', st_bydesign: 'By design',
      lane_next: 'Next up', lane_planned: 'Planned', lane_exploring: 'Exploring',
      rel_status: 'Live in', items: 'changes',
      hot_t: 'No hotfixes so far', hot_d: 'The first tester build is the current build, and nothing urgent has had to be patched yet. If that changes, it appears here the same day.',
      hs1: 'You report', hs1d: 'Email us what happened.', hs2: 'We reproduce', hs2d: 'We try it on a real phone.', hs3: 'We fix', hs3d: 'A small, focused patch.', hs4: 'We list it', hs4d: 'It shows here with the version.',
      none_t: 'Nothing matches that search', none_d: 'Try a different word, or clear the search.',
      c_k: 'Spotted something?', c_h: 'Tell us. <em>We will fix it.</em>',
      c_p: 'Send what happened, your phone model and Android version. Screenshots help. Real reports from testers shape every update.',
      c_b1: 'Report an issue', c_b2: 'Join the testers',
      mail_su: 'Hisaab Kitaab issue report',
      mail_body: 'What happened:\n\n\nSteps to repeat it:\n\n\nPhone model and Android version:\n\nApp version: {v}\n',
      foot_blurb: 'Private expense tracker and udhaar khata for Android. No account, no internet, no tracking.', foot_explore: 'Explore', foot_legal: 'Legal', top: 'Back to top'
    },
    hi: {
      n_home: 'होम', n_issues: 'इश्यू', n_join: 'जुड़ें', n_priv: 'प्राइवेसी', n_faq: 'सवाल', n_priv_full: 'प्राइवेसी पॉलिसी', n_terms: 'उपयोग की शर्तें',
      eyebrow: 'खुला चेंजलॉग और रोडमैप', h1a: 'ठीक हुआ, मालूम है,', h1b: 'आगे।',
      lead: 'हम सब कुछ खुलकर बनाते हैं। यहाँ वह सब है जो ठीक हो चुका, जो अभी कच्चा है, और जो आने वाला है। कुछ नया मिला? बताइए, वह यहीं दिखेगा।',
      m_live: 'क्लोज़्ड टेस्टिंग', m_upd: 'अपडेट',
      s_fixed: 'ठीक और बेहतर', s_hot: 'हॉटफ़िक्स जारी', s_known: 'ज्ञात समस्याएँ', s_up: 'रोडमैप में',
      tab_all: 'सब', tab_fixed: 'ठीक हुआ', tab_hot: 'हॉटफ़िक्स', tab_known: 'ज्ञात', tab_up: 'आने वाला',
      search: 'इश्यू खोजें',
      h_fixed: 'ठीक और बेहतर हुआ', d_fixed: 'जो भी फ़िक्स और सुधार ऐप में पहुँच चुके हैं।',
      h_hot: 'हॉटफ़िक्स', d_hot: 'ज़रूरी फ़िक्स जो हम सामान्य अपडेट का इंतज़ार किए बिना जारी करते हैं।',
      h_known: 'ज्ञात समस्याएँ', d_known: 'जो हमें पता है कि अभी कच्चा है, और जहाँ तरीक़ा है वहाँ उसका उपाय भी।',
      h_up: 'आने वाला', d_up: 'ऐप किस तरफ़ जा रहा है। तारीख़ का वादा नहीं है, क्रम बदल सकता है।',
      tag_fixed: 'ठीक किया', tag_improved: 'बेहतर किया', tag_hardened: 'मज़बूत किया',
      before: 'पहले', now: 'अब', work: 'उपाय',
      st_planned: 'फ़िक्स तय', st_monitoring: 'निगरानी में', st_investigating: 'जाँच जारी', st_bydesign: 'जानबूझकर',
      lane_next: 'अगला', lane_planned: 'तय', lane_exploring: 'सोच रहे हैं',
      rel_status: 'लाइव:', items: 'बदलाव',
      hot_t: 'अब तक कोई हॉटफ़िक्स नहीं', hot_d: 'पहला टेस्टर बिल्ड ही मौजूदा बिल्ड है और अब तक कुछ भी जल्दी में ठीक नहीं करना पड़ा। ऐसा हुआ तो वह उसी दिन यहाँ दिखेगा।',
      hs1: 'आप बताएँ', hs1d: 'क्या हुआ, ईमेल करें।', hs2: 'हम दोहराएँ', hs2d: 'असली फ़ोन पर आज़माते हैं।', hs3: 'हम ठीक करें', hs3d: 'छोटा और सीधा पैच।', hs4: 'यहाँ लिखें', hs4d: 'वर्शन के साथ यहाँ दिखेगा।',
      none_t: 'इस खोज से कुछ नहीं मिला', none_d: 'कोई दूसरा शब्द आज़माएँ या खोज हटा दें।',
      c_k: 'कुछ दिखा?', c_h: 'हमें बताइए। <em>हम ठीक करेंगे।</em>',
      c_p: 'क्या हुआ, फ़ोन का मॉडल और Android वर्शन भेजें। स्क्रीनशॉट से मदद मिलती है। टेस्टर की असली रिपोर्टें हर अपडेट को आकार देती हैं।',
      c_b1: 'समस्या बताएँ', c_b2: 'टेस्टर बनें',
      mail_su: 'हिसाब किताब: समस्या की रिपोर्ट',
      mail_body: 'क्या हुआ:\n\n\nदोबारा कैसे हो:\n\n\nफ़ोन का मॉडल और Android वर्शन:\n\nऐप वर्शन: {v}\n',
      foot_blurb: 'Android के लिए निजी खर्च ट्रैकर और उधार खाता। कोई अकाउंट नहीं, इंटरनेट नहीं, ट्रैकिंग नहीं।', foot_explore: 'देखें', foot_legal: 'क़ानूनी', top: 'ऊपर जाएँ'
    }
  };

  var AREA_HI = { Khata: 'खाता', Currency: 'करेंसी', Reminders: 'रिमाइंडर', Tips: 'टिप', PDF: 'PDF', Backup: 'बैकअप', Privacy: 'प्राइवेसी', Entries: 'एंट्री', Look: 'रूप', Home: 'होम', Sync: 'सिंक' };

  var lang = 'en';
  try {
    var saved = localStorage.getItem('hk-lang');
    if (saved === 'hi' || saved === 'en') lang = saved;
    else if ((navigator.language || '').toLowerCase().indexOf('hi') === 0) lang = 'hi';
  } catch (e) {}

  function t(k) { return (T[lang] && T[lang][k]) || T.en[k] || k; }
  function L(o) { return (o && (o[lang] || o.en)) || ''; }
  function area(a) { return lang === 'hi' ? (AREA_HI[a] || a) : a; }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); }
  function ico(n) { return '<svg class="ico"><use href="#i-' + n + '"/></svg>'; }

  /* ---------- data helpers ---------- */
  var fixedCount = 0;
  D.releases.forEach(function (r) { fixedCount += r.items.length; });
  var SECTIONS = [
    { key: 'fixed', icon: 'wrench', tone: 'g', count: fixedCount },
    { key: 'hot', icon: 'bolt', tone: 's', count: D.hotfixes.length },
    { key: 'known', icon: 'alert', tone: 'r', count: D.known.length },
    { key: 'up', icon: 'rocket', tone: 'b', count: D.upcoming.length }
  ];
  var TABS = [{ key: 'all' }].concat(SECTIONS);

  var state = { tab: 'all', q: '' };

  /* ---------- render ---------- */
  function hay() { return Array.prototype.slice.call(arguments).join(' ').toLowerCase(); }
  function match(text) { return !state.q || text.indexOf(state.q) !== -1; }

  function cardFixed(it, i) {
    var tx = hay(L(it.t), L(it.before), L(it.now), area(it.area), it.area, t('tag_' + it.tag));
    return { ok: match(tx), html:
      '<article class="iss-card rv" style="--d:' + (i % 2) * 0.06 + 's">' +
        '<div class="iss-row"><span class="iss-tag ' + it.tag + '">' + t('tag_' + it.tag) + '</span><span class="iss-area">' + esc(area(it.area)) + '</span></div>' +
        '<h3>' + esc(L(it.t)) + '</h3>' +
        '<dl class="iss-ba"><div class="bf"><dt>' + t('before') + '</dt><dd>' + esc(L(it.before)) + '</dd></div>' +
        '<div class="nw"><dt>' + t('now') + '</dt><dd>' + esc(L(it.now)) + '</dd></div></dl>' +
      '</article>' };
  }

  function secFixed() {
    var out = '', n = 0;
    D.releases.forEach(function (r) {
      var cards = r.items.map(cardFixed).filter(function (c) { return c.ok; });
      if (!cards.length) return;
      n += cards.length;
      out += '<div class="iss-rel rv"><span class="iss-ver">v' + esc(r.v) + '</span>' +
        '<span class="iss-chip live"><i></i>' + t('rel_status') + ' ' + esc(L(r.status)) + '</span>' +
        '<span class="iss-chip mute">' + esc(r.date) + '</span>' +
        '<span class="iss-chip mute">' + r.items.length + ' ' + t('items') + '</span></div>' +
        '<p class="iss-relnote rv">' + esc(L(r.note)) + '</p>' +
        '<div class="iss-grid iss-tl">' + cards.map(function (c) { return c.html; }).join('') + '</div>';
    });
    return { n: n, html: out };
  }

  function secHot() {
    if (D.hotfixes.length) {
      var cards = D.hotfixes.filter(function (h) { return match(hay(L(h.t), L(h.d), h.v, area(h.area))); });
      return { n: cards.length, html: '<div class="iss-grid">' + cards.map(function (h, i) {
        return '<article class="iss-card rv" style="--d:' + (i % 2) * 0.06 + 's"><div class="iss-row"><span class="iss-tag hot">' + ico('bolt') + 'v' + esc(h.v) + '</span><span class="iss-area">' + esc(h.date || '') + '</span></div><h3>' + esc(L(h.t)) + '</h3><p>' + esc(L(h.d)) + '</p></article>';
      }).join('') + '</div>' };
    }
    if (state.q) return { n: 0, html: '' };
    var steps = [1, 2, 3, 4].map(function (n, i) {
      return '<li><span class="iss-n">' + n + '</span><b>' + t('hs' + n) + '</b><span>' + t('hs' + n + 'd') + '</span></li>';
    }).join('');
    return { n: 1, html:
      '<div class="iss-empty rv"><div class="iss-empty-ico">' + ico('shieldcheck') + '</div>' +
      '<h3>' + t('hot_t') + '</h3><p>' + t('hot_d') + '</p><ol class="iss-steps">' + steps + '</ol></div>' };
  }

  function secKnown() {
    var cards = D.known.filter(function (k) {
      return match(hay(L(k.t), L(k.d), L(k.w), area(k.area), k.area, t('st_' + k.status)));
    });
    return { n: cards.length, html: '<div class="iss-grid">' + cards.map(function (k, i) {
      return '<article class="iss-card rv" style="--d:' + (i % 2) * 0.06 + 's">' +
        '<div class="iss-row"><span class="iss-st ' + k.status + '"><i></i>' + t('st_' + k.status) + '</span><span class="iss-area">' + esc(area(k.area)) + '</span></div>' +
        '<h3>' + esc(L(k.t)) + '</h3><p>' + esc(L(k.d)) + '</p>' +
        '<div class="iss-work">' + ico('bulb') + '<div><b>' + t('work') + '</b><span>' + esc(L(k.w)) + '</span></div></div></article>';
    }).join('') + '</div>' };
  }

  function secUp() {
    var total = 0, cols = '';
    ['next', 'planned', 'exploring'].forEach(function (lane) {
      var items = D.upcoming.filter(function (u) {
        return u.lane === lane && match(hay(L(u.t), L(u.d), area(u.area), u.area, t('lane_' + lane)));
      });
      if (!items.length) return;
      total += items.length;
      cols += '<div class="iss-lane ' + lane + ' rv"><div class="iss-lane-h"><span class="iss-lane-dot"></span><b>' + t('lane_' + lane) + '</b><em>' + items.length + '</em></div>' +
        items.map(function (u) {
          return '<article class="iss-up"><span class="iss-up-ico">' + ico(u.icon) + '</span><div><span class="iss-area">' + esc(area(u.area)) + '</span><h3>' + esc(L(u.t)) + '</h3><p>' + esc(L(u.d)) + '</p></div></article>';
        }).join('') + '</div>';
    });
    return { n: total, html: '<div class="iss-lanes">' + cols + '</div>' };
  }

  function render() {
    var parts = { fixed: secFixed(), hot: secHot(), known: secKnown(), up: secUp() };
    var html = '', shown = 0;
    SECTIONS.forEach(function (s) {
      var p = parts[s.key];
      var visible = (state.tab === 'all' || state.tab === s.key) && p.n > 0;
      if (!visible) return;
      shown++;
      html += '<section class="iss-sec" id="' + s.key + '" data-sec="' + s.key + '">' +
        '<div class="iss-sh rv"><span class="iss-sico ' + s.tone + '">' + ico(s.icon) + '</span>' +
        '<div><h2>' + t('h_' + s.key) + '</h2><p>' + t('d_' + s.key) + '</p></div>' +
        '<span class="iss-count">' + s.count + '</span></div>' + p.html + '</section>';
    });
    $('#sections').innerHTML = html;
    $('#none').hidden = shown > 0;
    observe();
  }

  function renderStats() {
    var items = [
      { k: 'fixed', n: fixedCount, tone: 'g', icon: 'wrench', l: 's_fixed' },
      { k: 'hot', n: D.hotfixes.length, tone: 's', icon: 'bolt', l: 's_hot' },
      { k: 'known', n: D.known.length, tone: 'r', icon: 'alert', l: 's_known' },
      { k: 'up', n: D.upcoming.length, tone: 'b', icon: 'rocket', l: 's_up' }
    ];
    $('#stats').innerHTML = items.map(function (s) {
      return '<button class="iss-stat ' + s.tone + '" type="button" data-go="' + s.k + '"><span class="iss-sico ' + s.tone + '">' + ico(s.icon) + '</span>' +
        '<b data-n="' + s.n + '">' + s.n + '</b><span>' + t(s.l) + '</span></button>';
    }).join('');
    $$('#stats .iss-stat').forEach(function (b) {
      b.addEventListener('click', function () { setTab(b.getAttribute('data-go'), true); });
    });
  }

  function renderTabs() {
    var tabs = $('#tabs');
    var ind = $('#ind');
    tabs.innerHTML = '';
    tabs.appendChild(ind);
    TABS.forEach(function (x) {
      var b = document.createElement('button');
      b.type = 'button'; b.setAttribute('role', 'tab'); b.setAttribute('data-tab', x.key);
      var total = x.key === 'all' ? fixedCount + D.hotfixes.length + D.known.length + D.upcoming.length : x.count;
      b.innerHTML = '<span>' + t(x.key === 'all' ? 'tab_all' : 'tab_' + x.key) + '</span><em>' + total + '</em>';
      b.addEventListener('click', function () { setTab(x.key, true); });
      tabs.appendChild(b);
    });
    markTab();
  }

  function markTab() {
    var active = null;
    $$('#tabs button').forEach(function (b) {
      var on = b.getAttribute('data-tab') === state.tab;
      b.classList.toggle('on', on); b.setAttribute('aria-selected', on ? 'true' : 'false');
      if (on) active = b;
    });
    var ind = $('#ind');
    if (active) {
      ind.style.width = active.offsetWidth + 'px';
      ind.style.transform = 'translateX(' + active.offsetLeft + 'px)';
      var wrap = $('#tabs');
      if (wrap.scrollWidth > wrap.clientWidth) wrap.scrollTo({ left: active.offsetLeft - 20, behavior: reduce ? 'auto' : 'smooth' });
    }
  }

  function setTab(key, scroll) {
    state.tab = key;
    markTab();
    render();
    try { history.replaceState(null, '', key === 'all' ? location.pathname + location.search : '#' + key); } catch (e) {}
    if (scroll) {
      var top = $('#bar').getBoundingClientRect().top + window.scrollY - 84;
      if (window.scrollY > top + 4 || key !== 'all') window.scrollTo({ top: Math.max(0, top), behavior: reduce ? 'auto' : 'smooth' });
    }
  }

  /* ---------- text + lang ---------- */
  function reportHref() {
    var body = t('mail_body').split('{v}').join(D.version || '');
    return 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(CONTACT) + '&su=' + encodeURIComponent(t('mail_su')) + '&body=' + encodeURIComponent(body);
  }

  function applyLang() {
    doc.lang = lang; doc.setAttribute('data-lang', lang);
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    $$('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $('#langLabel').textContent = lang === 'en' ? 'हिं' : 'EN';
    $('#repBtn').href = reportHref();
    renderStats(); renderTabs(); render();
    document.title = lang === 'hi' ? 'हिसाब किताब: इश्यू, फ़िक्स और रोडमैप' : 'Hisaab Kitaab: Issues, fixes and roadmap';
  }

  $('#theme').addEventListener('click', function () {
    var dark = doc.getAttribute('data-theme') === 'dark';
    if (dark) doc.removeAttribute('data-theme'); else doc.setAttribute('data-theme', 'dark');
    try { localStorage.setItem('hk-theme', dark ? 'light' : 'dark'); } catch (e) {}
  });
  $('#lang').addEventListener('click', function () {
    lang = lang === 'en' ? 'hi' : 'en';
    try { localStorage.setItem('hk-lang', lang); } catch (e) {}
    applyLang();
  });

  /* ---------- search ---------- */
  var qEl = $('#q'), qTimer = 0;
  qEl.addEventListener('input', function () {
    clearTimeout(qTimer);
    qTimer = setTimeout(function () { state.q = qEl.value.trim().toLowerCase(); render(); }, 120);
  });

  /* ---------- nav, progress, parallax ---------- */
  var nav = $('#nav'), bar = $('#progress'), parEls = $$('[data-par]'), ticking = false;
  function onScroll() {
    var y = window.scrollY || 0;
    nav.classList.toggle('stuck', y > 24);
    var max = doc.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    if (!reduce) parEls.forEach(function (el) { el.style.translate = '0 ' + (y * parseFloat(el.getAttribute('data-par'))).toFixed(1) + 'px'; });
    $('#bar').classList.toggle('pinned', $('#bar').getBoundingClientRect().top <= 74);
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  window.addEventListener('resize', markTab);

  /* ---------- reveal + counters ---------- */
  var io = null;
  function observe() {
    var els = $$('.rv:not(.in)');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('in'); }); return; }
    if (!io) {
      io = new IntersectionObserver(function (es) {
        es.forEach(function (e) {
          if (!e.isIntersecting) return;
          e.target.classList.add('in'); io.unobserve(e.target);
          if (e.target.id === 'stats') countStats();
        });
      }, { threshold: 0.1, rootMargin: '0px 0px -5% 0px' });
    }
    els.forEach(function (el) { io.observe(el); });
  }
  function countStats() {
    $$('#stats b').forEach(function (el) {
      var to = parseInt(el.getAttribute('data-n'), 10) || 0;
      if (reduce || !to) { el.textContent = to; return; }
      var t0 = performance.now();
      (function step(now) {
        var p = Math.min(1, (now - t0) / 900), e = 1 - Math.pow(1 - p, 4);
        el.textContent = Math.round(to * e);
        if (p < 1) requestAnimationFrame(step);
      })(t0);
    });
  }

  /* ---------- go ---------- */
  $('#mUpd').textContent = D.updated || '';
  $('#mVer').textContent = 'v' + (D.version || '');
  var h = (location.hash || '').replace('#', '');
  if (h === 'hotfixes') h = 'hot';
  if (h === 'upcoming') h = 'up';
  if (['fixed', 'hot', 'known', 'up'].indexOf(h) !== -1) state.tab = h;
  applyLang();
  observe();
  onScroll();
})();
