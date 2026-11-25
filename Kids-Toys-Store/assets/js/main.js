/* ==========================================================
   Kids Toys Store – Main script
   - Translation (AR / EN) with localStorage
   - Light / Dark mode with localStorage
   - Responsive mobile nav
   ========================================================== */
(function () {
  'use strict';

  var html = document.documentElement;
  var STORAGE_LANG = 'kids_toys_lang';
  var STORAGE_THEME = 'kids_toys_theme';

  /* ---------- Translations ---------- */
  var T = {
    ar: {
      title: 'متجر ألعاب الأطفال',
      navBrand: 'متجر ألعاب الأطفال',
      navHome: 'الرئيسية',
      navProducts: 'المنتجات',
      navContact: 'تواصل',
      navShop: 'تسوق الآن',
      navLang: 'EN / AR',
      navTheme: 'تبديل الوضع',
      heroBadge: 'منتجات جديدة',
      heroTitle: 'عالم المرح يبدأ هنا!',
      welcomeText: 'أهلاً وسهلاً بكم في متجر ألعاب الأطفال الحديث، حيث نجمع لكم أفضل الألعاب بالعدالة لكل عمر.',
      heroCta: 'تسوق الآن',
      heroSub: 'مجموعة من الألعاب التعليدية والدمى والسيارات والألعاب التركيب لجميع أعمار أطفالكم، بألوان ممتعة وتصاميم آمنة.',
      catTitle: 'أنواع الألعاب',
      cat1: 'ألعاب تعليدية',
      cat2: 'ألعاب تركيب',
      cat3: 'دمى',
      cat4: 'سيارات',
      cat5: 'ألعاب أطفال الرضع',
      featTitle: 'منتجات مميزة',
      featView: 'مشاهدة المنتج',
      featCta: 'عرض جميع المنتجات',
      dealsTitle: 'عروض وخصومات',
      deal1: 'خصم 20% على الألعاب التعليدية',
      deal1Desc: 'ألعاب تعليدية مميزة بخصم مؤقت محدود.',
      deal2: 'تحويلة احترافية على الدمى',
      deal2Desc: 'دمى مطرزة بخيوط ناعمة تفضلها الدراسة.',
      dealCta: 'استكشاف العروض',
      whyTitle: 'لماذا تختار متجرنا؟',
      why1: 'شحن سريع وموثوق إلى كل بلد.',
      why2: 'ضمان سنوي على جميع الألعاب.',
      why3: 'دعم عملاء يعمل 24/7.',
      why4: 'منتجات أصلية بأسعار تنافسية.',
      footerBrand: 'متجر ألعاب الأطفال',
      footerDesc: 'متجر ألعاب الأطفال يقدم تجربة تسوق ممتعة بتصاميم احترافية للألعاب التعليدية والدمى والسيارات.',
      footerLinks: 'روابط سريعة',
      footerTerms: 'الشروط والأحكام',
      footerInfo: 'معلومات المتجر',
      footerEmail: 'البريد الإلكتروني: hello@kidstoysstore.com',
      footerPhone: 'الهاتف: 012 345 6789',
      footerAddress: 'العنوان: مدينة الرياض، المملكة العربية السعودية',
      footerSocial: 'تابعنا',
      footerContact: 'تواصل معنا',
      footerCopy: 'جميع الحقوق محفوظة © 2026 متجر ألعاب الأطفال.',
      socialIg: 'Instagram', socialTt: 'TikTok', socialTw: 'Twitter',
      projectsTitle: 'المنتجات',
      projectsSub: 'تصفح مجموعتنا من ألعاب الأطفال المميزة مع صور وأسعار لكل منتج.',
      prod1Name: 'سيارة سباق صغيرة', prod1Price: '١٥٫٩٠ ريال',
      prod1Desc1: 'سيارة سباق صغيرة بألوان متغيرة تمنح الأطفال متعة السير.',
      prod1Desc2: 'مصممة لتكون خفيفة وآمنة، مع تعليمات بسيطة للتركيب.',
      prod2Name: 'دمية دب ملونة', prod2Price: '٢٣٫٥٠ ريال',
      prod2Desc1: 'دمية مطرزة بخيوط ناعمة تفضلها الدراسة.',
      prod2Desc2: 'صديقة أيدي ممتازة، تفصل بجودة عالية ونظافة مضمونة.',
      prod3Name: 'مجموعة أدوات التركيب', prod3Price: '٤٥٫٠٠ ريال',
      prod3Desc1: 'أدوات تركيب واضحة تعزز تفكير الطفل المنطقي.',
      prod3Desc2: 'يتم تجميع القطع بسهولة مع دليل مصور لكل قطعة.',
      prod4Name: 'حصان سكوت بلاستيكي', prod4Price: '٣٦٫٥٠ ريال',
      prod4Desc1: 'حصان سكوت مصمم للألعاب الخارجية مع مقبض يسهل حمله.',
      prod4Desc2: 'مصنوع بإطلاق المبيعات للجودة والآمان.',
      prod5Name: 'مرصعات تعليدية', prod5Price: '٢٧٫١٠ ريال',
      prod5Desc1: 'حزمة من المرصعات الملونة تعزز الاستقلال والذكاء.',
      prod5Desc2: 'مناسبة للأطفال من 4 سنوات أمام الشاشات.',
      prod6Name: 'حصان سكوت قابل للتجميع', prod6Price: '٤١٫٠٠ ريال',
      prod6Desc1: 'حصان سكوت قابل للتجميع يضيف ذكاءً للترفيه الجماعي.',
      prod6Desc2: 'يمكن لأكثر من طفل تجميعه سوياً.',
      prodDetails: 'عرض التفاصيل',
      contactTitle: 'اتصل بنا',
      contactSub: 'لا تتردد في إرسال رسالتك، نحن هنا لمساعدتك. يمكننا الرد عليك خلال وقت معقول.',
      formName: 'الاسم', formEmail: 'البريد الإلكتروني',
      formPhone: 'رقم الجوال', formMessage: 'الرسالة', formSubmit: 'إرسال',
      formPlaceholderName: 'اسمك الكامل',
      formPlaceholderEmail: 'بريدك الإلكتروني',
      formPlaceholderPhone: 'رقم الجوال الخاص بك',
      formPlaceholderMessage: 'اكتب رسالتك هنا...',
      storeInfoTitle: 'معلومات المتجر',
      storePhone: 'الهاتف: 012 345 6789',
      storeAddress: 'العنوان: مدينة الرياض، المملكة العربية السعودية',
      contactWhatsapp: 'رقم واتساب: +966 55 123 4567',
      socialTitle: 'تواصل معنا عبر منصات التواصل الاجتماعي',
      navLangAr: 'AR', navLangEn: 'EN',
      langBtnLabel: 'AR'
    },
    en: {
      title: 'Kids Toys Store',
      navBrand: 'Kids Toys Store',
      navHome: 'Home',
      navProducts: 'Products',
      navContact: 'Contact',
      navShop: 'Shop Now',
      navLang: 'AR / EN',
      navTheme: 'Toggle mode',
      heroBadge: 'New collection',
      heroTitle: 'Fun World Starts Here!',
      welcomeText: 'Welcome to our modern kids toys store, where we bring you the best toys and variety for every age.',
      heroCta: 'Shop Now',
      heroSub: 'A collection of educational toys, plush toys, cars, and assembleable play sets for all ages. Safe designs and colorful fun.',
      catTitle: 'Toy Categories',
      cat1: 'Educational Toys',
      cat2: 'Assembly Toys',
      cat3: 'Stuffed Toys',
      cat4: 'Cars',
      cat5: 'Infant Toys',
      featTitle: 'Featured Products',
      featView: 'View Product',
      featCta: 'View All Products',
      dealsTitle: 'Deals & Offers',
      deal1: '20% Off Educational Toys',
      deal1Desc: 'Best educational toys with a limited-time discount.',
      deal2: 'Premium On Plush Toys',
      deal2Desc: 'Plush toys with soft, high-quality stitching.',
      dealCta: 'Explore Offers',
      whyTitle: 'Why Choose Us?',
      why1: 'Fast and reliable shipping to any country.',
      why2: '1-year warranty on all toys.',
      why3: '24/7 customer support.',
      why4: 'Genuine products at competitive prices.',
      footerBrand: 'Kids Toys Store',
      footerDesc: 'Kids Toys Store offers a fun shopping experience with professional design for educational toys, plush toys and cars.',
      footerLinks: 'Quick Links',
      footerTerms: 'Terms & Conditions',
      footerInfo: 'Store Info',
      footerEmail: 'Email: hello@kidstoysstore.com',
      footerPhone: 'Phone: 012 345 6789',
      footerAddress: 'Address: Riyadh, Saudi Arabia',
      footerSocial: 'Follow Us',
      footerContact: 'Contact Us',
      footerCopy: 'All rights reserved © 2026 Kids Toys Store.',
      socialIg: 'Instagram', socialTt: 'TikTok', socialTw: 'Twitter',
      projectsTitle: 'Products',
      projectsSub: 'Browse our collection of featured kids toys with photos and prices for each product.',
      prod1Name: 'Mini Racing Car', prod1Price: 'SAR 148.90',
      prod1Desc1: 'A mini racing car with changing colors gives kids the joy of driving.',
      prod1Desc2: 'Designed to be light and safe, with simple assembly instructions.',
      prod2Name: 'Colorful Bear Plush', prod2Price: 'SAR 263.50',
      prod2Desc1: 'A plush bear with soft threads, made to be great for cuddling.',
      prod2Desc2: "Excellent for a kid's hands, quality and hygiene guaranteed.",
      prod3Name: 'Assembly Tools Set', prod3Price: 'SAR 450.00',
      prod3Desc1: 'Clear assembly tools that spark logical thinking in kids.',
      prod3Desc2: 'Pieces assemble easily with a photo guide for each part.',
      prod4Name: 'Plastic Scooter Horse', prod4Price: 'SAR 366.50',
      prod4Desc1: 'A scooter horse for outdoor play with an easy-grip handle.',
      prod4Desc2: 'Made for quality and safety in the new arrivals.',
      prod5Name: 'Educational Beads', prod5Price: 'SAR 277.10',
      prod5Desc1: 'A pack of colorful educational beads for independence and learning.',
      prod5Desc2: 'Nice for children from 4 years, no screens needed.',
      prod6Name: 'Assemblable Scooter Horse', prod6Price: 'SAR 410.00',
      prod6Desc1: 'A collapsible scooter horse that adds fun for group play.',
      prod6Desc2: 'Several kids can build it together.',
      prodDetails: 'View Details',
      contactTitle: 'Contact Us',
      contactSub: 'Please do not hesitate to send us a message; we are here to help you.',
      formName: 'Name', formEmail: 'Email',
      formPhone: 'Phone Number', formMessage: 'Message', formSubmit: 'Send',
      formPlaceholderName: 'Your Full Name',
      formPlaceholderEmail: 'Your Email',
      formPlaceholderPhone: 'Your Phone Number',
      formPlaceholderMessage: 'Write your message here...',
      storeInfoTitle: 'Store Info',
      storePhone: 'Phone: 012 345 6789',
      storeAddress: 'Address: Riyadh, Saudi Arabia',
      contactWhatsapp: 'WhatsApp: +966 55 123 4567',
      socialTitle: 'Connect With Us',
      navLangAr: 'AR', navLangEn: 'EN',
      langBtnLabel: 'EN'
    }
  };

  function getLang() {
    var saved = localStorage.getItem(STORAGE_LANG);
    if (saved === 'ar' || saved === 'en') return saved;
    return 'ar'; // Arabic is the default language
  }

  function applyTranslations(lang) {
    var dict = T[lang] || T.ar;
    var items = document.querySelectorAll('[data-i18n]');
    items.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) el.textContent = dict[key];
    });
    document.querySelectorAll('[data-i18n-aria]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) el.setAttribute('aria-label', dict[key]);
    });
    var lt = document.querySelector('.lang-toggle');
    if (lt) {
      lt.textContent = dict.navLangAr;
      lt.setAttribute('title', dict.navLangEn);
    }
    if (document.title) document.title = dict.title;
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_LANG, lang);
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    applyTranslations(lang);
  }

  function toggleLang() {
    setLang(html.getAttribute('lang') === 'ar' ? 'en' : 'ar');
  }

  function setTheme(theme) {
    localStorage.setItem(STORAGE_THEME, theme);
    html.setAttribute('data-theme', theme);
  }

  function toggleTheme() {
    setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
  }

  function toggleNav() {
    document.querySelector('.nav').classList.toggle('active');
  }

  /* ---------- Initialize ---------- */
  setLang(getLang());

  var langBtn = document.querySelector('.lang-toggle');
  if (langBtn) langBtn.addEventListener('click', toggleLang);
  var themeBtn = document.querySelector('.theme-toggle');
  if (themeBtn) {
    // Apply the saved theme (light is the default)
    var savedTheme = localStorage.getItem(STORAGE_THEME);
    if (savedTheme) setTheme(savedTheme);
    themeBtn.addEventListener('click', toggleTheme);
  }
  var navToggle = document.querySelector('.nav-toggle');
  if (navToggle) navToggle.addEventListener('click', toggleNav);
})();
