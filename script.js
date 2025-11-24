/* script.js
   - I18N translate (data-i18n, data-i18n-html, data-i18n-placeholder, data-i18n-alt)
   - Language buttons (en-btn, bg-btn) + autosave (localStorage)
   - Menu toggle (menu-toggle)
   - Ensure nav links show pointer cursor
   - Fade-in / Scroll reveal (IntersectionObserver)
   - Stats counter on scroll
   - Basic accessibility tweaks
*/

/* =========================
   TRANSLATIONS: EN and BG
   ========================= */
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      stats: "Stats",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      pricing: "Pricing",
      contact: "Contact",
      map: "Map"
    },
    hero: {
      title: 'Grow Your Business with <span>ConsultPro</span>',
      text: 'We provide expert consulting services to help you achieve sustainable growth and success.',
      btn: 'Get Started'
    },
    services: {
      "card1": { title: "Business Strategy", text: "Tailored strategies to help your company achieve sustainable growth and efficiency." },
      "card2": { title: "Financial Consulting", text: "Expert financial planning, analysis, and risk management for your business success." },
      "card3": { title: "Market Analysis", text: "In-depth research and insights into your market to keep you ahead of competitors." },
      "card4": { title: "Corporate Training", text: "Workshops and training sessions to boost team productivity and leadership skills." },
      "card5": { title: "IT Consulting", text: "Guidance on digital transformation, cloud solutions, and tech infrastructure." },
      "card6": { title: "Partnership Development", text: "Building strong partnerships to expand your business opportunities worldwide." }
    },
    team: {
      testimonial1: { text: "“Working at ConsultPro has been an incredible journey! I’ve grown professionally and personally thanks to the supportive leadership.”", name: "John Smith", role: "CEO & Founder" },
      testimonial2: { text: "“The teamwork and company culture here are truly inspiring. Every project feels like a shared success.”", name: "Grace Campbell", role: "Financial Consultant" },
      testimonial3: { text: "“ConsultPro gives you the freedom to innovate and contribute your ideas. It’s amazing to work in such a dynamic environment.”", name: "Mason Jerome", role: "Marketing Expert" }
    },
    clients: {
      testimonial1: { name: "Sarah Thompson", role: "Marketing Director, VisionCorp", text: "“ConsultPro helped us redefine our strategy and achieve record growth last quarter. Their team is exceptional!”" },
      testimonial2: { name: "James Walker", role: "CEO, FinEdge Solutions", text: "“Professional and reliable — their insights completely transformed how we approach our clients.”" },
      testimonial3: { name: "Emily Davis", role: "Operations Manager, NovaTech", text: "“Working with ConsultPro was a game changer for our company’s long-term vision and operations.”" }
    },
    partners: {
      title: "Our Trusted Partners",
      subtitle: "We’re proud to collaborate with these leading brands and organizations.",
      img1_alt: "Partner 1",
      img2_alt: "Partner 2",
      img3_alt: "Partner 3",
      img4_alt: "Partner 4",
      img5_alt: "Partner 5"
    },
    awards: {
      title: "Our Awards & Achievements",
      subtitle: "Recognizing our dedication to excellence, innovation, and customer satisfaction.",
      card1: { title: "Best Consulting Firm 2023", text: "Awarded for outstanding business strategy and innovation." },
      card2: { title: "Excellence in Customer Service", text: "Recognized for our exceptional client support and care." },
      card3: { title: "Top Business Growth 2024", text: "Honored for driving rapid and sustainable growth." },
      card4: { title: "Innovation Award", text: "Celebrating creative and forward-thinking business solutions." }
    },
    blog: {
      title: "Latest Insights",
      subtitle: "Stay updated with our business tips, success stories, and industry news.",
      post1: { title: "How to Build a Winning Business Strategy", text: "Discover the key elements of developing a strong strategy that drives growth and success." },
      post2: { title: "Top 5 Market Trends for 2025", text: "Explore the biggest shifts that will shape the future of business and consulting." },
      post3: { title: "Boost Your Team’s Productivity", text: "Learn simple yet powerful techniques to keep your team motivated and efficient." },
      btn: "Read More"
    },
    pricing: {
      chooseBtn: "Choose Plan",
      basic: {
        title: "Basic",
        price: "$199 / month",
        feature1: "✔ Business Consultation",
        feature2: "✔ Financial Planning",
        feature3: "✖ Marketing Strategy",
        feature4: "✖ Ongoing Support"
      },
      standard: {
        title: "Standard",
        price: "$399 / month",
        feature1: "✔ Full Business Consultation",
        feature2: "✔ Financial & Market Analysis",
        feature3: "✔ Marketing Strategy",
        feature4: "✖ Dedicated Consultant"
      },
      premium: {
        title: "Premium",
        price: "Custom",
        feature1: "✔ Complete Business Solutions",
        feature2: "✔ Dedicated Expert Consultant",
        feature3: "✔ Full Support 24/7",
        feature4: "✔ Growth Strategy Reports"
      }
    },
    journey: {
      title: "Our Journey",
      subtitle: "A look back at our milestones and growth through the years.",
      step1: { title: "2016 Foundation of ConsultPro", text: "ConsultPro began its journey as a small consultancy firm with a vision to empower businesses worldwide." },
      step2: { title: "2018 International Expansion", text: "We secured our first international client and expanded our services to financial and IT sectors." },
      step3: { title: "2020 Innovation & Growth", text: "Our consulting team grew across Europe, establishing partnerships with global enterprises." },
      step4: { title: "2023", text: "Celebrated a major milestone — over 100 successful consulting projects delivered worldwide." },
      step6: { title: "2025", text: "ConsultPro continues to lead the way in digital transformation and business innovation." }
    },
    careers: {
      title: "Join <span>Our Team</span>",
      subtitle1: "We're always looking for passionate and talented professionals to grow with us.",
      position1: "Business Consultant",
      position2: "Financial Analyst",
      position3: "Marketing Manager",
      subtitle2: "Provide expert advice and insights to help clients improve efficiency and achieve success.",
      subtitle3: "Analyze financial data and develop strategies that help clients grow sustainably.",
      subtitle4: "Lead digital campaigns and branding initiatives to boost our clients’ visibility."
    },
    contact: {
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendBtn: "Send Message",
      mapTitle: "Find Us in London"
    },
    footer: {
      rights: "© 2025 ConsultPro. All rights reserved."
    }
  },

  bg: {
    nav: {
      home: "Начало",
      services: "Услуги",
      stats: "Статистика",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта"
    },
    hero: {
      title: 'Развийте бизнеса си с <span>ConsultPro</span>',
      text: 'Предлагаме експертни консултантски услуги, за да постигнете устойчив растеж и успех.',
      btn: 'Започнете'
    },
    services: {
      "card1": { title: "Бизнес стратегия", text: "Индивидуални стратегии за устойчив растеж и ефективност." },
      "card2": { title: "Финансови консултации", text: "Експертно финансово планиране, анализ и управление на риска." },
      "card3": { title: "Маркетингов анализ", text: "Задълбочени изследвания и пазарни прозрения за преднина пред конкуренцията." },
      "card4": { title: "Корпоративно обучение", text: "Работилници и обучения за повишаване на продуктивността и лидерството." },
      "card5": { title: "IT консултации", text: "Насоки за дигитална трансформация, облачни решения и инфраструктура." },
      "card6": { title: "Развитие на партньорства", text: "Изграждане на силни партньорства за разширяване на възможности." }
    },
    team: {
      testimonial1: { text: "„Работата в ConsultPro беше невероятно преживяване! Израснах професионално и лично благодарение на подкрепящото ръководство.“", name: "John Smith", role: "Главен изпълнителен директор" },
      testimonial2: { text: "„Екипната работа и културата тук са истинско вдъхновение. Всеки проект е споделен успех.“", name: "Grace Campbell", role: "Финансов консултант" },
      testimonial3: { text: "„ConsultPro ти дава свобода да иновираш и допринасяш с идеи. Прекрасно е да работиш в такава динамична среда.“", name: "Mason Jerome", role: "Маркетинг експерт" }
    },
    clients: {
      testimonial1: { name: "Sarah Thompson", role: "Директор маркетинг, VisionCorp", text: "„ConsultPro ни помогна да преразгледаме стратегията и да постигнем рекорден растеж през последното тримесечие. Екипът е изключителен!“" },
      testimonial2: { name: "James Walker", role: "Изпълнителен директор, FinEdge Solutions", text: "„Професионални и надеждни — техните анализи промениха изцяло начина ни на работа.“" },
      testimonial3: { name: "Emily Davis", role: "Оперативен мениджър, NovaTech", text: "„Работата с ConsultPro беше решаваща за дългосрочната визия и операции на нашата компания.“" }
    },
    partners: {
      title: "Нашите партньори",
      subtitle: "Горди сме да си сътрудничим с тези водещи марки и организации.",
      img1_alt: "Партньор 1",
      img2_alt: "Партньор 2",
      img3_alt: "Партньор 3",
      img4_alt: "Партньор 4",
      img5_alt: "Партньор 5"
    },
    awards: {
      title: "Нашите награди",
      subtitle: "Признаване за ангажимента ни към качество, иновации и удовлетворение на клиентите.",
      card1: { title: "Най-добра консултантска фирма 2023", text: "Наградена за отлична бизнес стратегия и иновации." },
      card2: { title: "Отличие за обслужване на клиенти", text: "Признание за изключителна клиентска подкрепа и грижа." },
      card3: { title: "Най-голям бизнес растеж 2024", text: "Отличени за ускорен и устойчив растеж." },
      card4: { title: "Награда за иновации", text: "Отбелязване на креативни и напредничави бизнес решения." }
    },
    blog: {
      title: "Последни публикации",
      subtitle: "Актуални бизнес съвети, истории за успех и новини от бранша.",
      post1: { title: "Как да създадете печеливша бизнес стратегия", text: "Открийте ключовите елементи за разработка на силна стратегия." },
      post2: { title: "Топ 5 маркетингови тенденции за 2025", text: "Разгледайте най-големите промени, които ще формират бъдещето." },
      post3: { title: "Повишете продуктивността на екипа си", text: "Прости, но мощни техники за мотивация и ефективност." },
      btn: "Прочети"
    },
    pricing: {
      chooseBtn: "Избери план",
      basic: {
        title: "Бейсик",
        price: "199 лв / месец",
        feature1: "✔ Бизнес консултация",
        feature2: "✔ Финансово планиране",
        feature3: "✖ Маркетинг стратегия",
        feature4: "✖ Постоянна поддръжка"
      },
      standard: {
        title: "Стандартен",
        price: "399 лв / месец",
        feature1: "✔ Пълна бизнес консултация",
        feature2: "✔ Финансов и пазарен анализ",
        feature3: "✔ Маркетинг стратегия",
        feature4: "✖ Персонален консултант"
      },
      premium: {
        title: "Премиум",
        price: "По заявка",
        feature1: "✔ Цялостни бизнес решения",
        feature2: "✔ Посветен експерт консултант",
        feature3: "✔ Денонощна поддръжка 24/7",
        feature4: "✔ Доклади за растеж"
      }
    },
    journey: {
      title: "Нашият път",
      subtitle: "Връщане назад към нашите важни моменти и растеж.",
      step1: { title: "2016 Основаниe", text: "ConsultPro започна като малка консултантска фирма с визия да подкрепя бизнеса." },
      step2: { title: "2018 Международно разрастване", text: "Първи международен клиент и разширяване на услугите." },
      step3: { title: "2020 Иновации и растеж", text: "Екипът се разраства и създава партньорства в Европа." },
      step4: { title: "2023", text: "Празнуване на над 100 успешно приключени проекта." },
      step6: { title: "2025", text: "ConsultPro продължава да води дигиталната трансформация." }
    },
    careers: {
      title: "Присъедини се към нашия екип",
      subtitle1: "Търсим талантливи професионалисти, които да растат с нас.",
      position1: "Бизнес консултант",
      position2: "Финансов анализатор",
      position3: "Маркетинг мениджър",
      subtitle2: "Предоставяне на експертни насоки и препоръки за оптимизация.",
      subtitle3: "Анализ на финансови данни и разработване на стратегии.",
      subtitle4: "Водене на дигитални кампании и бранд активности."
    },
    contact: {
      formName: "Вашето име",
      formEmail: "Вашият имейл",
      formMessage: "Съобщение",
      sendBtn: "Изпрати съобщение",
      mapTitle: "Намерете ни в Лондон"
    },
    footer: {
      rights: "© 2025 ConsultPro. Всички права запазени."
    }
  }
};

/* =========================
   HELPERS: find by dotted key
   ========================= */
function getByDotted(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, p) => (acc ? acc[p] : undefined), obj);
}

/* =========================
   APPLY TRANSLATIONS
   - data-i18n          -> textContent
   - data-i18n-html     -> innerHTML
   - data-i18n-placeholder -> placeholder
   - data-i18n-alt      -> alt attribute
   ========================= */
function applyTranslation(lang) {
  const dict = translations[lang] || translations.en;

  // data-i18n (textContent)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getByDotted(dict, key);
    if (val !== undefined) el.textContent = val;
  });

  // data-i18n-html (innerHTML)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = getByDotted(dict, key);
    if (val !== undefined) el.innerHTML = val;
  });

  // data-i18n-placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getByDotted(dict, key);
    if (val !== undefined) el.placeholder = val;
  });

  // data-i18n-alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const val = getByDotted(dict, key);
    if (val !== undefined) el.alt = val;
  });

  // Special: support nested structured keys for services, team, clients, pricing etc.
  // Loop through known groups and apply internal keys if present on elements as e.g. data-i18n="services.card1.title"
  // (Handled by generic getByDotted above)

  // Ensure nav anchors have pointer cursor
  document.querySelectorAll('nav a').forEach(a => {
    a.style.cursor = 'pointer';
  });

  // Update active flag button aria-labels
  const currentLang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('aria-pressed', btn.classList.contains('active') ? 'true' : 'false');
  });
}

/* =========================
   LANGUAGE SWITCHING + persistence
   ========================= */
const LANG_KEY = 'consultpro_lang';

function setLanguage(lang) {
  // remove active class on all
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  // set appropriate button active
  const btnMap = { en: document.getElementById('en-btn'), bg: document.getElementById('bg-btn') };
  if (btnMap[lang]) btnMap[lang].classList.add('active');

  applyTranslation(lang);
  localStorage.setItem(LANG_KEY, lang);
}

/* =========================
   INITIALIZE LANGUAGE on load
   ========================= */
function initLanguage() {
  const saved = localStorage.getItem(LANG_KEY);
  let lang = saved || (navigator.language && navigator.language.startsWith('bg') ? 'bg' : 'en');
  // default some pages to en if unknown
  if (!['en', 'bg'].includes(lang)) lang = 'en';
  setLanguage(lang);
}

/* =========================
   Set up language buttons events
   ========================= */
function initLanguageButtons() {
  const enBtn = document.getElementById('en-btn');
  const bgBtn = document.getElementById('bg-btn');

  if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
  if (bgBtn) bgBtn.addEventListener('click', () => setLanguage('bg'));
}

/* =========================
   MENU TOGGLE (mobile)
   ========================= */
function initMenuToggle() {
  const menuBtn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (!menuBtn || !nav) return;

  menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    const expanded = nav.classList.contains('active');
    menuBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  // Close nav when clicking outside (for mobile)
  document.addEventListener('click', (e) => {
    const isClickInside = e.target.closest('.header');
    if (!isClickInside && nav.classList.contains('active')) {
      nav.classList.remove('active');
      menuBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* =========================
   Fade-in / Scroll reveal
   Add class 'reveal-on-scroll' to elements you want to reveal,
   but to be safe we will attach this to many section children automatically.
   ========================= */
function initScrollReveal() {
  // Add reveal-on-scroll class to common blocks if not already present
  const autoTargets = [
    'section .container', '.service-card', '.process-step', '.case-card',
    '.testimonial-card', '.award-card', '.blog-post', '.pricing-card', '.career-card', '.cta-content', '.contact-info', '.contact-form'
  ];
  autoTargets.forEach(sel => {
    document.querySelectorAll(sel).forEach(el => {
      if (!el.classList.contains('reveal-on-scroll')) el.classList.add('reveal-on-scroll');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // optional: if you want the animation only once:
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/* =========================
   STATS COUNTER (animate numeric up)
   target: elements with class .number and data-target attr
   ========================= */
function initStatsCounter() {
  const counters = document.querySelectorAll('.number[data-target]');
  const observed = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10) || 0;
        const duration = 1500; // ms
        const stepTime = Math.max(20, Math.floor(duration / target));
        let current = 0;
        const increment = Math.ceil(target / (duration / stepTime));

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          } else {
            el.textContent = current;
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.4 });

  counters.forEach(c => observed.observe(c));
}

/* =========================
   Accessibility / small fixes
   - Ensure anchors without href still navigable with cursor
   - Add role="button" where needed
   ========================= */
function accessibilityTweaks() {
  document.querySelectorAll('nav a').forEach(a => {
    if (!a.hasAttribute('href') || a.getAttribute('href').trim() === '') {
      a.setAttribute('role', 'button');
      a.style.cursor = 'pointer';
    }
  });

  // ensure menu-toggle has aria-label
  const menuBtn = document.querySelector('.menu-toggle');
  if (menuBtn && !menuBtn.hasAttribute('aria-label')) menuBtn.setAttribute('aria-label', 'Toggle menu');
}

/* =========================
   Initialize all
   ========================= */
function initAll() {
  initLanguageButtons();
  initLanguage();         // applies translation
  initMenuToggle();
  initScrollReveal();
  initStatsCounter();
  accessibilityTweaks();

  // Make sure nav anchor focus shows pointer (fix for cursor text insertion issue)
  document.querySelectorAll('nav a').forEach(a => {
    a.addEventListener('mousedown', (e) => {
      // prevent text cursor caret on accidental focus
      try { e.preventDefault(); } catch (err) { /* ignore */ }
    });
  });
}

/* =========================
   DOMContentLoaded
   ========================= */
document.addEventListener('DOMContentLoaded', () => {
  try {
    initAll();
  } catch (err) {
    // safe fallback log — don't break page
    console.error('initAll error:', err);
  }
});

/* =========================
   Optional: expose for debugging
   ========================= */
window._i18n = {
  translations,
  setLanguage,
  applyTranslation
};

/* =========================
   CSS note: for reveal animations you need CSS like:
   .reveal-on-scroll { opacity:0; transform: translateY(12px); transition: all .7s ease-out; }
   .reveal-on-scroll.revealed { opacity:1; transform: translateY(0); }
   Add this to your style.css if not present.
   ========================= */
