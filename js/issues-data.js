/* Hisaab Kitaab: issues, hotfixes and roadmap. Edit this file to update the Issues page.
   Every text has en + hi. No dates are promised for upcoming items. */
window.HK_ISSUES = {
  version: '1.0.1',
  updated: '23 Nov 2026',

  /* Fixed and improved. tag: fixed | improved | hardened */
  releases: [
    {
      v: '1.0.1',
      status: { en: 'Closed testing', hi: 'क्लोज़्ड टेस्टिंग' },
      date: '23 Nov 2026',
      note: {
        en: 'Fixed before the first tester build, while testing on a real phone.',
        hi: 'पहले टेस्टर बिल्ड से पहले, असली फ़ोन पर टेस्टिंग के दौरान ठीक किया गया।'
      },
      items: [
        { id: 'f1', tag: 'fixed', area: 'Khata',
          t: { en: 'Khata bar hid behind the keyboard', hi: 'खाता बार कीबोर्ड के पीछे छिप जाता था' },
          before: { en: 'The floating bar on the Khata tab stayed behind the keyboard while you typed.', hi: 'टाइप करते समय खाता टैब का फ़्लोटिंग बार कीबोर्ड के पीछे रह जाता था।' },
          now: { en: 'It now rides up above the keyboard and stays reachable.', hi: 'अब वह कीबोर्ड के ऊपर आ जाता है और हमेशा पहुँच में रहता है।' } },
        { id: 'f2', tag: 'fixed', area: 'Currency',
          t: { en: 'Currency list ran under the navigation bar', hi: 'करेंसी सूची नेविगेशन बार के नीचे दब जाती थी' },
          before: { en: 'The bottom of the list was hidden by the Android navigation bar, and the dark backdrop slid up and down with the sheet.', hi: 'सूची का निचला हिस्सा Android नेविगेशन बार के नीचे छिप जाता था, और काला बैकग्राउंड भी शीट के साथ ऊपर-नीचे सरकता था।' },
          now: { en: 'The sheet respects the bottom safe area. Only the sheet slides; the backdrop just fades.', hi: 'शीट अब नीचे की सुरक्षित जगह का ध्यान रखती है। सिर्फ़ शीट सरकती है, बैकग्राउंड हल्के से फ़ेड होता है।' } },
        { id: 'f3', tag: 'fixed', area: 'Reminders',
          t: { en: 'Sound picker lost its buttons on long lists', hi: 'लंबी सूची में साउंड पिकर के बटन गुम हो जाते थे' },
          before: { en: 'With many sounds on the phone, Select and Cancel could scroll out of view.', hi: 'फ़ोन में ज़्यादा साउंड होने पर Select और Cancel बटन दिखना बंद हो जाते थे।' },
          now: { en: 'Both buttons stay pinned, with room above the navigation bar.', hi: 'दोनों बटन अब नीचे टिके रहते हैं और नेविगेशन बार से ऊपर दिखते हैं।' } },
        { id: 'f4', tag: 'fixed', area: 'Tips',
          t: { en: 'Tip card slid in with a glitch', hi: 'टिप कार्ड की स्लाइड ठीक से नहीं आती थी' },
          before: { en: 'The one-time hint card did not slide in smoothly.', hi: 'एक बार दिखने वाला हिंट कार्ड ठीक से स्लाइड होकर नहीं आता था।' },
          now: { en: 'It slides up from the bottom after a short pause and slides back down.', hi: 'अब वह थोड़ी देर बाद नीचे से ऊपर आता है और फिर वापस नीचे चला जाता है।' } },
        { id: 'f5', tag: 'fixed', area: 'PDF',
          t: { en: 'Dates were cramped in the balance-sheet PDF', hi: 'बैलेंस शीट PDF में तारीख़ें दब जाती थीं' },
          before: { en: 'The date column in the PDF was too narrow.', hi: 'PDF में तारीख़ वाला कॉलम बहुत तंग था।' },
          now: { en: 'The column is wider, so dates read cleanly.', hi: 'कॉलम चौड़ा किया गया, तारीख़ें साफ़ पढ़ी जाती हैं।' } },
        { id: 'f6', tag: 'improved', area: 'Backup',
          t: { en: 'Backup is now a real file', hi: 'बैकअप अब असली फ़ाइल है' },
          before: { en: 'Backups were shared as pasted text.', hi: 'बैकअप टेक्स्ट पेस्ट करके शेयर होता था।' },
          now: { en: 'Share a dated .json file to WhatsApp, Drive or email, save it to the phone, and restore by picking the file.', hi: 'तारीख़ वाली .json फ़ाइल WhatsApp, Drive या ईमेल पर भेजें, फ़ोन में सेव करें, और फ़ाइल चुनकर रिस्टोर करें।' } },
        { id: 'f7', tag: 'improved', area: 'Reminders',
          t: { en: 'Phone sounds listed inside the app', hi: 'फ़ोन की आवाज़ें ऐप के अंदर दिखती हैं' },
          before: { en: "Android's picker screen also listed file managers.", hi: 'Android के पिकर स्क्रीन में फ़ाइल मैनेजर भी दिखते थे।' },
          now: { en: "Your phone's notification sounds appear in an in-app list, with preview.", hi: 'फ़ोन की नोटिफ़िकेशन आवाज़ें ऐप की अपनी सूची में प्रीव्यू के साथ दिखती हैं।' } },
        { id: 'f8', tag: 'improved', area: 'Reminders',
          t: { en: 'Mix ring, vibrate and speak aloud', hi: 'रिंग, वाइब्रेट और बोलकर बताना, साथ-साथ' },
          before: { en: 'You had to pick a single alert style.', hi: 'अलर्ट का सिर्फ़ एक तरीक़ा चुन सकते थे।' },
          now: { en: 'Combine them freely. At least one stays on.', hi: 'जितने चाहें मिलाएँ। कम से कम एक चालू रहता है।' } },
        { id: 'f9', tag: 'improved', area: 'Khata',
          t: { en: 'Warning before adding a duplicate person', hi: 'एक ही व्यक्ति दोबारा जोड़ने से पहले चेतावनी' },
          before: { en: 'The same name could be added twice by mistake.', hi: 'एक ही नाम ग़लती से दो बार जुड़ सकता था।' },
          now: { en: 'You now get a warning first.', hi: 'अब पहले चेतावनी मिलती है।' } },
        { id: 'f10', tag: 'improved', area: 'PDF',
          t: { en: 'Balance sheet opens right after saving', hi: 'सेव होते ही बैलेंस शीट खुल जाती है' },
          before: { en: 'You had to find the saved PDF yourself.', hi: 'सेव की हुई PDF आपको ख़ुद ढूँढनी पड़ती थी।' },
          now: { en: 'It opens straight away, with Open and Share buttons.', hi: 'वह तुरंत खुलती है, साथ में Open और Share बटन भी हैं।' } },
        { id: 'f11', tag: 'improved', area: 'Khata',
          t: { en: 'Floating buttons can be dragged away', hi: 'फ़्लोटिंग बटन खिसकाए जा सकते हैं' },
          before: { en: 'Delete and download buttons on the person page stayed in one spot.', hi: 'व्यक्ति के पेज पर डिलीट और डाउनलोड बटन एक ही जगह टिके रहते थे।' },
          now: { en: 'Drag them out of the way. Long-press a button to see its name.', hi: 'उन्हें रास्ते से हटाने के लिए खिसकाएँ। नाम देखने के लिए बटन को दबाए रखें।' } },
        { id: 'f12', tag: 'hardened', area: 'Privacy',
          t: { en: 'Release app asks for no internet', hi: 'रिलीज़ ऐप इंटरनेट की इजाज़त नहीं माँगता' },
          before: { en: 'The internet permission was present in every build.', hi: 'इंटरनेट की इजाज़त हर बिल्ड में थी।' },
          now: { en: 'It lives only in the debug build. The Play release requests no network access.', hi: 'अब यह सिर्फ़ डीबग बिल्ड में है। Play वाला रिलीज़ ऐप किसी नेटवर्क की इजाज़त नहीं माँगता।' } }
      ]
    }
  ],

  /* Hotfixes shipped. Empty so far. */
  hotfixes: [
    /* { v:'1.0.2', date:'', severity:'high', area:'', t:{en,hi}, d:{en,hi} } */
  ],

  /* Known issues. status: investigating | monitoring | planned | bydesign */
  known: [
    { id: 'k1', status: 'planned', area: 'Entries',
      t: { en: 'No undo after delete', hi: 'डिलीट के बाद अनडू नहीं' },
      d: { en: 'Deleting an entry or a person is final for now.', hi: 'फ़िलहाल किसी एंट्री या व्यक्ति को डिलीट करना अंतिम है।' },
      w: { en: 'Take a backup before a big clean-up (More tab, Backup).', hi: 'बड़ी सफ़ाई से पहले बैकअप ले लें (More टैब, Backup)।' } },
    { id: 'k2', status: 'planned', area: 'Reminders',
      t: { en: 'Reminder time is fixed at 9 AM', hi: 'रिमाइंडर का समय 9 बजे सुबह तय है' },
      d: { en: 'Bill reminders arrive at 9 AM. You can choose how many days before, but not the hour.', hi: 'बिल रिमाइंडर सुबह 9 बजे आते हैं। कितने दिन पहले चाहिए यह चुन सकते हैं, पर घंटा नहीं।' },
      w: { en: 'Pick the lead days that suit your day. A time picker is on the roadmap.', hi: 'अपनी दिनचर्या के हिसाब से दिन चुनें। समय चुनने की सुविधा रोडमैप में है।' } },
    { id: 'k3', status: 'monitoring', area: 'Reminders',
      t: { en: 'Reminders can be a little late on battery-saver phones', hi: 'बैटरी-सेवर वाले फ़ोन पर रिमाइंडर थोड़ा देर से आ सकता है' },
      d: { en: 'Reminders use battery-friendly alarms, so some phones may delay them. We are watching this during testing.', hi: 'रिमाइंडर बैटरी-फ़्रेंडली अलार्म इस्तेमाल करते हैं, इसलिए कुछ फ़ोन उन्हें देर कर सकते हैं। टेस्टिंग में हम इस पर नज़र रख रहे हैं।' },
      w: { en: 'Allow notifications and set battery use for Hisaab Kitaab to Unrestricted. Tell us your phone model if it happens.', hi: 'नोटिफ़िकेशन की अनुमति दें और हिसाब किताब की बैटरी सेटिंग Unrestricted करें। ऐसा हो तो अपने फ़ोन का मॉडल बताएँ।' } },
    { id: 'k4', status: 'bydesign', area: 'Backup',
      t: { en: 'No automatic backup', hi: 'ऑटोमैटिक बैकअप नहीं' },
      d: { en: 'Your data lives only on your phone and nothing goes to a cloud, so a lost phone without a backup file means lost data.', hi: 'आपका डेटा सिर्फ़ आपके फ़ोन में है और क्लाउड पर कुछ नहीं जाता, इसलिए बैकअप फ़ाइल के बिना फ़ोन खोने पर डेटा चला जाएगा।' },
      w: { en: 'Share a backup file to your own WhatsApp or Drive now and then.', hi: 'समय-समय पर बैकअप फ़ाइल अपने WhatsApp या Drive पर भेज दें।' } },
    { id: 'k5', status: 'planned', area: 'Look',
      t: { en: 'App has a light theme only', hi: 'ऐप में सिर्फ़ लाइट थीम है' },
      d: { en: 'There is no dark mode inside the app yet.', hi: 'ऐप के अंदर अभी डार्क मोड नहीं है।' },
      w: { en: 'Lower the screen brightness at night.', hi: 'रात में स्क्रीन की ब्राइटनेस कम रखें।' } }
  ],

  /* Roadmap. lane: next | planned | exploring. No dates promised. */
  upcoming: [
    { id: 'u1', lane: 'next', icon: 'undo', area: 'Entries',
      t: { en: 'Undo for deletes', hi: 'डिलीट के लिए अनडू' },
      d: { en: 'A quick Undo after deleting an entry or a person.', hi: 'एंट्री या व्यक्ति डिलीट करने के बाद झट से अनडू।' } },
    { id: 'u2', lane: 'next', icon: 'clock', area: 'Reminders',
      t: { en: 'Choose the reminder time', hi: 'रिमाइंडर का समय चुनें' },
      d: { en: 'Pick the hour your bill reminders arrive.', hi: 'तय करें कि बिल रिमाइंडर किस घंटे आए।' } },
    { id: 'u3', lane: 'next', icon: 'moon', area: 'Look',
      t: { en: 'Dark mode', hi: 'डार्क मोड' },
      d: { en: 'A dark theme that is easy on the eyes at night.', hi: 'रात में आँखों को आराम देने वाली डार्क थीम।' } },
    { id: 'u4', lane: 'planned', icon: 'cal', area: 'Home',
      t: { en: 'See all for the chosen range', hi: 'चुनी हुई अवधि की पूरी सूची' },
      d: { en: 'From Home, open every entry in the date range you picked.', hi: 'होम से, चुनी गई तारीख़ों की सारी एंट्री एक साथ खोलें।' } },
    { id: 'u5', lane: 'planned', icon: 'type', area: 'Look',
      t: { en: 'A custom typeface', hi: 'अपना ख़ास फ़ॉन्ट' },
      d: { en: 'A font made to read well in both Hindi and English.', hi: 'हिंदी और अंग्रेज़ी दोनों में अच्छा पढ़ा जाने वाला फ़ॉन्ट।' } },
    { id: 'u6', lane: 'exploring', icon: 'desk', area: 'Sync',
      t: { en: 'Desktop version with opt-in sync', hi: 'डेस्कटॉप वर्शन, अपनी मर्ज़ी से सिंक' },
      d: { en: 'Only if you choose to turn it on. Local-first stays the default.', hi: 'सिर्फ़ तब, जब आप चालू करें। डेटा फ़ोन में रखना ही डिफ़ॉल्ट रहेगा।' } }
  ]
};
