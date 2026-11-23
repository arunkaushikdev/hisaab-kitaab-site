/* Hisaab Kitaab site. Plain JS, no dependencies. */
(function () {
  'use strict';

  var doc = document.documentElement;
  var body = document.body;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var $ = function (s, r) { return (r || document).querySelector(s); };
  var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
  var fmt = function (n) { return new Intl.NumberFormat('en-IN').format(Math.round(n)); };

  /* ---------- Google Play link: put the store URL in <body data-play="..."> ---------- */
  var PLAY_URL = body.getAttribute('data-play') || '';
  var STORE_URL = body.getAttribute('data-play-store') || '';

  /* ---------- text ---------- */
  var T = {
    en: {
      nav_features: 'Features', nav_khata: 'Khata', nav_rem: 'Reminders', nav_priv: 'Privacy', nav_faq: 'FAQ',
      eyebrow: 'Works fully offline on Android',
      h1a: 'Your hisaab,', h1b: 'sorted.',
      lead: 'Daily expenses and udhaar khata in one simple app. Everything stays on your phone. No account to create, no cloud to trust.',
      play_get: 'Get it on Google Play', nav_join: 'Join', k_join: 'Join the testers', h_join: 'Help us test. <em>Get a certificate.</em>', p_join: 'Hisaab Kitaab is in closed testing on Google Play. Join the testers, use the app for a couple of weeks and tell us what to improve.', j1: 'Early access to the app on Google Play', j2: 'Your feedback shapes the next version', j3: 'A certificate of appreciation once the app is live', join_btn: 'Request to join', f_name: 'Your name', f_email: 'Gmail / Google account email', f_sending: 'Sending...', f_ok: 'Thanks! Your request is in. We will add you to the test and email you the Play Store invite.', f_err: 'Could not send. Please use one of the options below.', f_bad: 'Please enter your name and a valid email.', f_alt: 'Form not working?', f_gmail: 'Write in Gmail', f_mail: 'Open mail app', f_copy: 'Copy email address', f_copied: 'Copied!', join_note: 'Use the Google account (Gmail) you use on your Android phone. Your email is used only to add you to the test and to send your certificate.', tester_note: 'Testing invite: join first, then install.', tester_store: 'Already joined? Open in Play Store',
      see: 'See what it does',
      tr1: 'No sign-up', tr2: 'No internet needed', tr3: 'No tracking',
      p_hi: 'Good evening', p_title: 'Hisaab Kitaab', p_spent: 'Spent this month', p_get: "You'll get", p_owe: 'You owe',
      c_today: 'Today', c_7: '7 days', c_month: 'Month', c_custom: 'Custom', c_last: 'Last month',
      f1a: 'Electricity bill', f1b: 'Due tomorrow · ₹ 1,840',
      f2a: 'Got ₹ 500 from Ramesh', f2b: 'Balance updated',
      f3a: 'Stored on this phone', f3b: 'Nothing leaves it',
      k_feat: 'Everything you need',
      h_feat: 'Small app. <em>Big</em> everyday use.',
      p_feat: 'For the shop, the home budget and the friend who owes you for lunch.',
      t1h: 'Add an entry in a few taps', t1p: 'Expense or income, with category, note, date and time. A speed-dial keeps the common actions under your thumb.', t1a: 'Chai',
      t2h: 'A khata for every person', t2p: 'See who owes you and whom you owe, with a running balance. Add "Gave" or "Got" right from the list.',
      n1: 'Ramesh', n2: 'Sunita',
      t3h: 'Filter Home your way', t3p: 'Today, last 7 days, this month, last month, or your own date range. Totals update with the chips.',
      t4h: 'Balance sheet PDF', t4p: 'For any person and any date range. Open it or share it.',
      t5h: 'Bills that repeat', t5p: 'Due dates and monthly repeat. Mark paid and it lands in expenses.',
      t6h: 'Reminders that reach you', t6p: 'A ring, a vibration or a spoken message, as early as you choose.',
      t7h: 'Real backup file', t7p: 'Share it or save it to your phone, and restore any time.',
      t8h: 'Any currency, or your own', t8p: 'Pick from a searchable list of 123 currencies, or add one that is missing. The symbol and number grouping change; amounts are never converted.',
      t9h: 'Hindi or English, your words', t9p: 'Switch the whole app. Call it Khata or Ledger, and show Dr/Cr labels if you like them. Delete many entries or people at once.',
      k_khata: 'Try it',
      h_khata: 'Udhaar, <em>without</em> the diary.',
      p_khata: 'Tap Gave or Got and watch the balance change. This is a small demo with sample data; the real app works the same way.',
      d1h: 'One running balance', d1p: 'Green when they owe you, red when you owe them.',
      d2h: 'Every entry dated', d2p: 'Nothing to remember, nothing to argue about.',
      d3h: 'Send a PDF statement', d3p: 'Share the balance sheet in one tap.',
      pd_khata: 'Khata', sample: 'Sample', gave: 'Gave', got: 'Got', reset: 'Reset demo',
      bal_owes: '{n} owes you', bal_owe: 'You owe {n}', bal_clear: 'All settled',
      led_gave: 'You gave', led_got: 'You got', today: 'Today', earlier: 'Earlier', nt_rice: 'Rice and oil', nt_part: 'Part payment',
      k_rem: 'Bill reminders',
      h_rem: 'Never miss a <em>due date</em> again.',
      p_rem: 'Pick any mix of ring, vibrate and speak aloud, and how early to be told. Reminders are set on your phone and survive a restart.',
      m_ring: 'Ring', m_vib: 'Vibrate', m_speak: 'Speak aloud',
      lead_label: 'Remind me (days before the due date)', l0: 'Same day',
      rn: 'Due tomorrow · ₹ 1,840', say: '"Electricity bill is due tomorrow"',
      rem_note: '{modes} reminder at 9:00 AM, {when}.', rem_silent: 'A quiet notification', rem_note_s: '{modes} at 9:00 AM, {when}.',
      when0: 'on the due date', when1: '1 day before the due date', whenN: '{n} days before the due date',
      k_priv: 'Private by design',
      h_priv: 'Your money talk stays <em>yours</em>.',
      p_priv: 'Hisaab Kitaab has no servers to send your data to. The release app does not even ask for internet access.',
      pl1h: 'No account', pl1p: 'Install and start. No sign-up, no login, no email.',
      pl2h: 'No internet permission', pl2p: 'It works offline because it never needs a network.',
      pl3h: 'No tracking', pl3p: 'No analytics, no ads, nothing watching what you do.',
      fl1: 'Your phone', fl2: 'Any server', read_pp: 'Read the privacy policy',
      k_how: 'How it works',
      h_how: 'Three steps. <em>No setup.</em>',
      s1h: 'Add', s1p: "Log an expense, an income, or a person's udhaar. Under five seconds.",
      s2h: 'See', s2p: 'Home shows your totals for the range you pick. Each khata shows its balance.',
      s3h: 'Share', s3p: 'Send a PDF statement, or keep a backup file for a new phone.',
      k_faq: 'Questions',
      h_faq: 'Good to <em>know</em>.',
      q1: 'Does it need internet?', a1: 'No. The app works fully offline and the release version does not request internet access.',
      q2: 'Where is my data stored?', a2: 'In a database on your phone. There is no account and no server, so we never see it.',
      q3: 'How do I move to a new phone?', a3: 'Make a backup file from the More tab, send it to yourself, and restore it on the new phone.',
      q4: 'Does it convert currencies?', a4: 'No. The currency you choose changes the symbol and how numbers are grouped. Amounts are never converted.',
      q5: 'Is there an iPhone version?', a5: 'Not at the moment. Hisaab Kitaab is built for Android.',
      fin_h: 'Apna hisaab, apne phone mein.', fin_p: 'Simple, fast and private. Made for everyday use.',
      nav_priv_full: 'Privacy policy', nav_terms: 'Terms of use', top: 'Back to top',
      faq_p: 'Short answers to what people ask first.', fin_k: 'Ready when you are',
      foot_blurb: 'Private expense tracker and udhaar khata for Android. No account, no internet, no tracking.', foot_explore: 'Explore', foot_legal: 'Legal'
    },
    hi: {
      nav_features: 'खूबियाँ', nav_khata: 'खाता', nav_rem: 'रिमाइंडर', nav_priv: 'प्राइवेसी', nav_faq: 'सवाल',
      eyebrow: 'Android पर पूरी तरह ऑफ़लाइन',
      h1a: 'आपका हिसाब,', h1b: 'एकदम सही।',
      lead: 'रोज़ के खर्च और उधार खाता, एक आसान ऐप में। सब कुछ आपके फ़ोन में रहता है। न अकाउंट बनाना, न किसी क्लाउड पर भरोसा।',
      play_get: 'Google Play से पाएँ', nav_join: 'जुड़ें', k_join: 'टेस्टर बनें', h_join: 'टेस्ट में मदद करें। <em>सर्टिफ़िकेट पाएँ।</em>', p_join: 'हिसाब किताब अभी Google Play पर क्लोज़्ड टेस्टिंग में है। टेस्टर बनें, कुछ हफ़्ते ऐप इस्तेमाल करें और बताएँ क्या सुधारें।', j1: 'Google Play पर ऐप का अर्ली एक्सेस', j2: 'आपका फ़ीडबैक अगला वर्शन बनाता है', j3: 'ऐप लाइव होने पर प्रशंसा-पत्र (सर्टिफ़िकेट)', join_btn: 'जुड़ने का अनुरोध करें', f_name: 'आपका नाम', f_email: 'Gmail / Google अकाउंट ईमेल', f_sending: 'भेज रहे हैं...', f_ok: 'धन्यवाद! आपका अनुरोध मिल गया। हम आपको टेस्ट में जोड़कर Play Store का इन्वाइट ईमेल करेंगे।', f_err: 'भेज नहीं पाए। कृपया नीचे दिए किसी विकल्प का इस्तेमाल करें।', f_bad: 'कृपया अपना नाम और सही ईमेल लिखें।', f_alt: 'फ़ॉर्म नहीं चल रहा?', f_gmail: 'Gmail में लिखें', f_mail: 'मेल ऐप खोलें', f_copy: 'ईमेल एड्रेस कॉपी करें', f_copied: 'कॉपी हो गया!', join_note: 'अपने Android फ़ोन में इस्तेमाल होने वाला Google अकाउंट (Gmail) दें। आपका ईमेल सिर्फ़ टेस्ट में जोड़ने और सर्टिफ़िकेट भेजने के लिए इस्तेमाल होगा।', tester_note: 'टेस्टिंग इन्वाइट: पहले जुड़ें, फिर इंस्टॉल करें।', tester_store: 'पहले से जुड़ चुके हैं? Play Store में खोलें',
      see: 'देखें यह क्या करता है',
      tr1: 'कोई साइन-अप नहीं', tr2: 'इंटरनेट नहीं चाहिए', tr3: 'कोई ट्रैकिंग नहीं',
      p_hi: 'शुभ संध्या', p_title: 'हिसाब किताब', p_spent: 'इस महीने खर्च', p_get: 'मिलेंगे', p_owe: 'देने हैं',
      c_today: 'आज', c_7: '7 दिन', c_month: 'महीना', c_custom: 'कस्टम', c_last: 'पिछला महीना',
      f1a: 'बिजली बिल', f1b: 'कल देय · ₹ 1,840',
      f2a: 'रमेश से ₹ 500 मिले', f2b: 'बैलेंस अपडेट हुआ',
      f3a: 'इसी फ़ोन में सुरक्षित', f3b: 'बाहर कुछ नहीं जाता',
      k_feat: 'जो चाहिए, सब कुछ',
      h_feat: 'छोटा ऐप। <em>बड़ा</em> रोज़ का काम।',
      p_feat: 'दुकान, घर के बजट और लंच के पैसे देने वाले दोस्त के लिए।',
      t1h: 'कुछ ही टैप में एंट्री', t1p: 'खर्च या आमदनी, श्रेणी, नोट, तारीख़ और समय के साथ। स्पीड-डायल से ज़रूरी काम अंगूठे के नीचे।', t1a: 'चाय',
      t2h: 'हर व्यक्ति का अपना खाता', t2p: 'किसने देना है, किसे देना है, चालू बैलेंस के साथ। सूची से ही "दिया" या "मिला" जोड़ें।',
      n1: 'रमेश', n2: 'सुनीता',
      t3h: 'होम अपने तरीके से फ़िल्टर करें', t3p: 'आज, पिछले 7 दिन, इस महीने, पिछले महीने या अपनी तारीख़ें। चिप के साथ टोटल बदलता है।',
      t4h: 'बैलेंस शीट PDF', t4p: 'किसी भी व्यक्ति और तारीख़ सीमा की। खोलें या भेजें।',
      t5h: 'दोहराने वाले बिल', t5p: 'देय तारीख़ और हर महीने दोहराव। भुगतान करते ही खर्च में जुड़ जाता है।',
      t6h: 'रिमाइंडर जो आप तक पहुँचे', t6p: 'घंटी, वाइब्रेशन या बोलकर, जितना पहले चाहें।',
      t7h: 'असली बैकअप फ़ाइल', t7p: 'भेजें या फ़ोन में सेव करें, और कभी भी रीस्टोर करें।',
      t8h: 'कोई भी मुद्रा, या अपनी', t8p: '123 मुद्राओं की खोज वाली सूची से चुनें, या छूटी हुई खुद जोड़ें। सिर्फ़ चिह्न और अंकों का ढंग बदलता है; रकम का रूपांतरण कभी नहीं होता।',
      t9h: 'हिंदी या अंग्रेज़ी, आपके शब्द', t9p: 'पूरा ऐप बदलें। इसे खाता या लेजर कहें, चाहें तो Dr/Cr दिखाएँ। कई एंट्री या लोगों को एक साथ हटाएँ।',
      k_khata: 'आज़माएँ',
      h_khata: 'उधार, <em>बिना</em> डायरी के।',
      p_khata: '"दिया" या "मिला" दबाएँ और बैलेंस बदलते देखें। यह सैंपल डेटा वाला छोटा डेमो है; असली ऐप भी ऐसे ही चलता है।',
      d1h: 'एक चालू बैलेंस', d1p: 'हरा जब उन्हें देना है, लाल जब आपको देना है।',
      d2h: 'हर एंट्री पर तारीख़', d2p: 'याद रखने या बहस करने की ज़रूरत नहीं।',
      d3h: 'PDF स्टेटमेंट भेजें', d3p: 'बैलेंस शीट एक टैप में शेयर करें।',
      pd_khata: 'खाता', sample: 'नमूना', gave: 'दिया', got: 'मिला', reset: 'डेमो रीसेट करें',
      bal_owes: '{n} को आपको देना है', bal_owe: 'आपको {n} को देना है', bal_clear: 'सब चुकता',
      led_gave: 'आपने दिया', led_got: 'आपको मिला', today: 'आज', earlier: 'पहले', nt_rice: 'चावल और तेल', nt_part: 'आंशिक भुगतान',
      k_rem: 'बिल रिमाइंडर',
      h_rem: 'अब <em>देय तारीख़</em> कभी न चूकें।',
      p_rem: 'घंटी, वाइब्रेशन और बोलकर बताने का कोई भी मेल चुनें, और कितना पहले बताना है। रिमाइंडर आपके फ़ोन में सेट होते हैं और रीस्टार्ट के बाद भी चलते हैं।',
      m_ring: 'घंटी', m_vib: 'वाइब्रेट', m_speak: 'बोलकर',
      lead_label: 'कितने दिन पहले याद दिलाएँ', l0: 'उसी दिन',
      rn: 'कल देय · ₹ 1,840', say: '"बिजली बिल कल देय है"',
      rem_note: 'सुबह 9:00 बजे {modes} रिमाइंडर, {when}।', rem_silent: 'चुपचाप सूचना', rem_note_s: 'सुबह 9:00 बजे {modes}, {when}।',
      when0: 'देय तारीख़ के दिन', when1: 'देय तारीख़ से 1 दिन पहले', whenN: 'देय तारीख़ से {n} दिन पहले',
      k_priv: 'डिज़ाइन से ही निजी',
      h_priv: 'आपका लेन-देन <em>आपका</em> ही रहे।',
      p_priv: 'हिसाब किताब के पास आपका डेटा भेजने के लिए कोई सर्वर नहीं है। रिलीज़ ऐप इंटरनेट की अनुमति तक नहीं माँगता।',
      pl1h: 'कोई अकाउंट नहीं', pl1p: 'इंस्टॉल करें और शुरू करें। न साइन-अप, न लॉगिन, न ईमेल।',
      pl2h: 'इंटरनेट अनुमति नहीं', pl2p: 'यह ऑफ़लाइन इसलिए चलता है क्योंकि इसे नेटवर्क की ज़रूरत ही नहीं।',
      pl3h: 'कोई ट्रैकिंग नहीं', pl3p: 'न एनालिटिक्स, न विज्ञापन, कोई नज़र नहीं रखता।',
      fl1: 'आपका फ़ोन', fl2: 'कोई भी सर्वर', read_pp: 'प्राइवेसी पॉलिसी पढ़ें',
      k_how: 'कैसे चलता है',
      h_how: 'तीन कदम। <em>कोई सेटअप नहीं।</em>',
      s1h: 'जोड़ें', s1p: 'खर्च, आमदनी या किसी का उधार दर्ज करें। पाँच सेकंड से भी कम में।',
      s2h: 'देखें', s2p: 'होम आपकी चुनी सीमा के टोटल दिखाता है। हर खाता अपना बैलेंस।',
      s3h: 'भेजें', s3p: 'PDF स्टेटमेंट भेजें, या नए फ़ोन के लिए बैकअप फ़ाइल रखें।',
      k_faq: 'सवाल',
      h_faq: 'जानने <em>लायक़</em>।',
      q1: 'क्या इंटरनेट चाहिए?', a1: 'नहीं। ऐप पूरी तरह ऑफ़लाइन चलता है और रिलीज़ वर्शन इंटरनेट की अनुमति नहीं माँगता।',
      q2: 'मेरा डेटा कहाँ रहता है?', a2: 'आपके फ़ोन के डेटाबेस में। न अकाउंट है, न सर्वर, इसलिए हम इसे कभी नहीं देखते।',
      q3: 'नए फ़ोन में कैसे जाऊँ?', a3: 'More टैब से बैकअप फ़ाइल बनाएँ, खुद को भेजें, और नए फ़ोन में रीस्टोर करें।',
      q4: 'क्या यह मुद्रा बदलता है?', a4: 'नहीं। चुनी हुई मुद्रा सिर्फ़ चिह्न और अंकों का ढंग बदलती है। रकम का रूपांतरण कभी नहीं होता।',
      q5: 'क्या iPhone वर्शन है?', a5: 'अभी नहीं। हिसाब किताब Android के लिए बना है।',
      fin_h: 'अपना हिसाब, अपने फ़ोन में।', fin_p: 'आसान, तेज़ और निजी। रोज़ के इस्तेमाल के लिए।',
      nav_priv_full: 'प्राइवेसी पॉलिसी', nav_terms: 'उपयोग की शर्तें', top: 'ऊपर जाएँ',
      faq_p: 'लोग सबसे पहले जो पूछते हैं, उसके छोटे जवाब।', fin_k: 'जब आप तैयार हों',
      foot_blurb: 'Android के लिए निजी खर्च ट्रैकर और उधार खाता। कोई अकाउंट नहीं, इंटरनेट नहीं, ट्रैकिंग नहीं।', foot_explore: 'देखें', foot_legal: 'क़ानूनी'
    }
  };

  var lang = 'en';
  try {
    var saved = localStorage.getItem('hk-lang');
    if (saved === 'hi' || saved === 'en') lang = saved;
    else if ((navigator.language || '').toLowerCase().indexOf('hi') === 0) lang = 'hi';
  } catch (e) {}

  function t(k, vars) {
    var s = (T[lang] && T[lang][k]) || T.en[k] || k;
    if (vars) for (var v in vars) s = s.split('{' + v + '}').join(vars[v]);
    return s;
  }

  function applyLang() {
    doc.lang = lang;
    doc.setAttribute('data-lang', lang);
    $$('[data-i18n]').forEach(function (el) { el.textContent = t(el.getAttribute('data-i18n')); });
    $$('[data-i18n-ph]').forEach(function (el) { el.placeholder = t(el.getAttribute('data-i18n-ph')); });
    $$('[data-i18n-html]').forEach(function (el) { el.innerHTML = t(el.getAttribute('data-i18n-html')); });
    $('#langLabel').textContent = lang === 'en' ? 'हिं' : 'EN';
    renderHeroTx();
    renderLedger();
    renderRem();
  }

  /* ---------- theme + language buttons ---------- */
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

  /* ---------- Play button ---------- */
  function setupPlay() {
    $$('.storeLink').forEach(function (a) { if (STORE_URL) a.href = STORE_URL; else a.parentNode.style.display = 'none'; });
    [['playBtn', 'playTxt'], ['playBtn2', 'playTxt2']].forEach(function (p) {
      var a = $('#' + p[0]), s = $('#' + p[1]);
      if (!a || !s) return;
      if (PLAY_URL) {
        a.href = PLAY_URL; a.target = '_blank'; a.rel = 'noopener'; a.removeAttribute('aria-disabled');
      } else {
        a.addEventListener('click', function (e) { e.preventDefault(); });
      }
    });
  }

  /* ---------- nav + progress ---------- */
  var nav = $('#nav'), bar = $('#progress');
  var parEls = $$('[data-par]');
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || 0;
    nav.classList.toggle('stuck', y > 24);
    var max = doc.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, y / max) : 0) + ')';
    if (!reduce) parEls.forEach(function (el) { el.style.translate = '0 ' + (y * parseFloat(el.getAttribute('data-par'))).toFixed(1) + 'px'; });
    ticking = false;
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });

  /* ---------- reveal on scroll ---------- */
  var rvs = $$('.rv');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    rvs.forEach(function (el) { io.observe(el); });
  } else {
    rvs.forEach(function (el) { el.classList.add('in'); });
  }

  /* ---------- number animation ---------- */
  function countTo(el, to, ms, from) {
    var start = from != null ? from : (parseFloat(el.getAttribute('data-v')) || 0);
    el.setAttribute('data-v', to);
    if (reduce) { el.textContent = fmt(to); return; }
    var t0 = performance.now();
    function step(now) {
      var p = Math.min(1, (now - t0) / ms);
      var e = 1 - Math.pow(1 - p, 4);
      el.textContent = fmt(start + (to - start) * e);
      if (p < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  /* ---------- phone tilt ---------- */
  var stage = $('.stage'), tilt = $('#tilt');
  if (stage && !reduce && window.matchMedia('(hover: hover)').matches) {
    stage.addEventListener('pointermove', function (e) {
      var r = stage.getBoundingClientRect();
      var x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
      tilt.style.transform = 'rotateY(' + (x * 14).toFixed(2) + 'deg) rotateX(' + (-y * 10).toFixed(2) + 'deg)';
    });
    stage.addEventListener('pointerleave', function () { tilt.style.transform = ''; });
  }

  /* ---------- tile spotlight ---------- */
  $$('.tile').forEach(function (tile) {
    tile.addEventListener('pointermove', function (e) {
      var r = tile.getBoundingClientRect();
      tile.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      tile.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ---------- currency marquee ---------- */
  var CUR = [['₹', 'INR'], ['$', 'USD'], ['€', 'EUR'], ['£', 'GBP'], ['¥', 'JPY'], ['৳', 'BDT'], ['Rs', 'NPR'], ['Rs', 'PKR'], ['د.إ', 'AED'], ['﷼', 'SAR'], ['S$', 'SGD'], ['A$', 'AUD'], ['C$', 'CAD'], ['CHF', 'CHF'], ['₩', 'KRW'], ['฿', 'THB'], ['₱', 'PHP'], ['R', 'ZAR'], ['₦', 'NGN'], ['₺', 'TRY'], ['₫', 'VND'], ['Rp', 'IDR']];
  (function () {
    var html = '';
    for (var k = 0; k < 2; k++) CUR.forEach(function (c) { html += '<span class="cur"><i>' + c[0] + '</i>' + c[1] + '</span>'; });
    $('#track').innerHTML = html;
  })();

  /* ---------- hero: live entries ---------- */
  var POOL = [
    { ic: 'cup', bg: '#fdf0da', fg: '#b26a00', en: 'Chai', hi: 'चाय', cen: 'Food', chi: 'खाना', a: 40 },
    { ic: 'bus', bg: '#e3eefb', fg: '#2a63a8', en: 'Auto', hi: 'ऑटो', cen: 'Travel', chi: 'सफ़र', a: 120 },
    { ic: 'bag', bg: '#fbe6e3', fg: '#c23b30', en: 'Groceries', hi: 'राशन', cen: 'Home', chi: 'घर', a: 860 },
    { ic: 'bolt', bg: '#ede7fa', fg: '#6a4cc2', en: 'Electricity bill', hi: 'बिजली बिल', cen: 'Bills', chi: 'बिल', a: 1840 },
    { ic: 'heart', bg: '#e1f4ea', fg: '#1e8a57', en: 'Medicine', hi: 'दवा', cen: 'Health', chi: 'सेहत', a: 310 },
    { ic: 'book', bg: '#e3eefb', fg: '#2a63a8', en: 'Notebooks', hi: 'कॉपियाँ', cen: 'Study', chi: 'पढ़ाई', a: 90 },
    { ic: 'wallet', bg: '#e7efec', fg: '#0b5d4b', en: 'Salary', hi: 'तनख़्वाह', cen: 'Income', chi: 'आमदनी', a: 42000, inc: true }
  ];
  var heroItems = [POOL[0], POOL[1], POOL[3]];
  var spent = 18450, poolIdx = 2;
  var txs = $('#txs');
  function txHTML(p, fresh) {
    return '<li class="tx"' + (fresh ? '' : ' style="animation:none"') + '><span class="ti" style="background:' + p.bg + ';color:' + p.fg + '"><svg class="ico"><use href="#i-' + p.ic + '"/></svg></span><span>' + (lang === 'hi' ? p.hi : p.en) + '<em>' + (lang === 'hi' ? p.chi : p.cen) + '</em></span><b class="' + (p.inc ? 'in' : 'out') + '">' + (p.inc ? '+' : '−') + ' ₹ ' + fmt(p.a) + '</b></li>';
  }
  function renderHeroTx() {
    txs.innerHTML = heroItems.map(function (p, i) { return txHTML(p, false); }).join('');
  }
  var chipEls = $$('#chips span'), chipI = 0;
  function tickHero() {
    poolIdx = (poolIdx + 1) % POOL.length;
    var p = POOL[poolIdx];
    heroItems.unshift(p);
    if (heroItems.length > 3) heroItems.pop();
    txs.insertAdjacentHTML('afterbegin', txHTML(p, true));
    while (txs.children.length > 3) txs.removeChild(txs.lastChild);
    if (!p.inc) { var prev = spent; spent += p.a; countTo($('#heroSpent'), spent, 900, prev); }
    chipEls[chipI].classList.remove('on');
    chipI = (chipI + 1) % chipEls.length;
    chipEls[chipI].classList.add('on');
  }

  /* ---------- khata demo ---------- */
  var DEFAULT_LEDGER = [{ t: 'gave', a: 2000, note: 'nt_rice', when: 'earlier' }, { t: 'got', a: 500, note: 'nt_part', when: 'earlier' }];
  var ledger = DEFAULT_LEDGER.slice();
  var shownBal = 1500, bigbal = $('#bigbal'), balNum = $('#balNum');
  balNum.setAttribute('data-v', shownBal);
  function balance() { return ledger.reduce(function (s, e) { return s + (e.t === 'gave' ? e.a : -e.a); }, 0); }
  function renderLedger() {
    var b = balance();
    bigbal.classList.toggle('owe', b < 0);
    bigbal.classList.toggle('clear', b === 0);
    $('#balLabel').textContent = b > 0 ? t('bal_owes', { n: t('n1') }) : b < 0 ? t('bal_owe', { n: t('n1') }) : t('bal_clear');
    $('#ledger').innerHTML = ledger.slice().reverse().slice(0, 5).map(function (e, i) {
      var g = e.t === 'gave';
      return '<li class="' + (g ? 'gv' : 'gt') + '"' + (i === 0 && e.fresh ? '' : ' style="animation:none"') + '><span class="d"><svg class="ico"><use href="#i-' + (g ? 'minus' : 'plus') + '"/></svg></span><span>' + (e.note ? t(e.note) : t(g ? 'led_gave' : 'led_got')) + '<small>' + t(e.when) + '</small></span><b>' + (g ? '−' : '+') + ' ₹ ' + fmt(e.a) + '</b></li>';
    }).join('');
  }
  function afterChange() {
    var b = Math.abs(balance());
    var from = shownBal; shownBal = b;
    countTo(balNum, b, 700, from);
    bigbal.classList.remove('bump'); void bigbal.offsetWidth; bigbal.classList.add('bump');
    renderLedger();
  }
  function addEntry(type) {
    var inp = $('#amt');
    var v = Math.floor(parseFloat(inp.value));
    if (!(v > 0)) { inp.focus(); return; }
    v = Math.min(v, 9999999);
    ledger.forEach(function (e) { delete e.fresh; });
    ledger.push({ t: type, a: v, when: 'today', fresh: true });
    afterChange();
  }
  $('#gave').addEventListener('click', function () { addEntry('gave'); });
  $('#got').addEventListener('click', function () { addEntry('got'); });
  $('#presets').addEventListener('click', function (e) { var b = e.target.closest('button'); if (b) $('#amt').value = b.getAttribute('data-v'); });
  $('#reset').addEventListener('click', function () { ledger = DEFAULT_LEDGER.map(function (e) { return { t: e.t, a: e.a, note: e.note, when: e.when }; }); afterChange(); });

  /* ---------- reminders demo ---------- */
  var modes = { ring: true, vib: false, speak: false }, leadDays = 1;
  var remStage = $('#remStage');
  function renderRem() {
    remStage.classList.toggle('ring', modes.ring);
    remStage.classList.toggle('vib', modes.vib);
    remStage.classList.toggle('speak', modes.speak);
    var names = ['ring', 'vib', 'speak'].filter(function (m) { return modes[m]; }).map(function (m) { return t('m_' + m).toLowerCase(); });
    var when = leadDays === 0 ? t('when0') : leadDays === 1 ? t('when1') : t('whenN', { n: leadDays });
    var note = names.length ? t('rem_note', { modes: names.join(' + '), when: when }) : t('rem_note_s', { modes: t('rem_silent'), when: when });
    $('#remNote').textContent = note.charAt(0).toUpperCase() + note.slice(1);
  }
  $('#modes').addEventListener('click', function (e) {
    var b = e.target.closest('.mode'); if (!b) return;
    var m = b.getAttribute('data-m');
    modes[m] = !modes[m];
    b.setAttribute('aria-pressed', modes[m] ? 'true' : 'false');
    renderRem();
  });
  $('#leads').addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    leadDays = parseInt(b.getAttribute('data-n'), 10);
    $$('#leads button').forEach(function (x) { x.setAttribute('aria-pressed', x === b ? 'true' : 'false'); });
    renderRem();
  });


  /* ---------- join form ---------- */
  var CONTACT = 'arun.idevs@gmail.com';
  var subj = 'Join Hisaab Kitaab testers';
  var bodyTxt = "Hi, I'd like to join the Hisaab Kitaab testing program.\n\nName:\nGoogle account email (the one used on my Android phone):\n";
  var gm = $('#jGmail'), ml = $('#jMail');
  if (gm) gm.href = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(CONTACT) + '&su=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(bodyTxt);
  if (ml) ml.href = 'mailto:' + CONTACT + '?subject=' + encodeURIComponent(subj) + '&body=' + encodeURIComponent(bodyTxt);
  var cp = $('#jCopy');
  if (cp) cp.addEventListener('click', function () {
    var done = function () { var o = cp.textContent; cp.textContent = t('f_copied'); setTimeout(function () { cp.textContent = t('f_copy'); }, 1800); };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(CONTACT).then(done, function () { window.prompt('Email', CONTACT); });
    else window.prompt('Email', CONTACT);
  });
  var jf = $('#joinForm');
  if (jf) jf.addEventListener('submit', function (e) {
    e.preventDefault();
    var st = $('#jStatus'), btn = $('#jSend');
    var name = $('#jName').value.trim(), email = $('#jEmail').value.trim();
    if (jf.elements._honey.value) return;
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { st.className = 'jstatus bad'; st.textContent = t('f_bad'); return; }
    st.className = 'jstatus'; st.textContent = t('f_sending'); btn.disabled = true;
    fetch('https://formsubmit.co/ajax/' + CONTACT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
      body: JSON.stringify({ name: name, email: email, _subject: 'Hisaab Kitaab tester request', _template: 'table', _replyto: email, message: 'Tester request from the website. Name: ' + name + ', Google account email: ' + email })
    }).then(function (r) { return r.json().catch(function () { return {}; }).then(function (d) { return { ok: r.ok, d: d }; }); })
      .then(function (x) {
        if (x.ok && String(x.d.success) !== 'false') { st.className = 'jstatus ok'; st.textContent = t('f_ok'); jf.reset(); }
        else throw new Error('send failed');
      })
      .catch(function () { st.className = 'jstatus bad'; st.textContent = t('f_err'); })
      .then(function () { btn.disabled = false; });
  });

  /* ---------- boot ---------- */
  setupPlay();
  applyLang();
  onScroll();
  setTimeout(function () { countTo($('#heroSpent'), spent, 1600, 0); }, 500);
  if (!reduce) setInterval(function () { if (!document.hidden) tickHero(); }, 3600);
})();
