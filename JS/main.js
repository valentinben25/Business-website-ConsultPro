/* main.js
   Единен файл: преводи (en/bg), превключване език, localStorage, fade-in, sliders, nav, chat и UI.
   Сложи в /js/main.js и зареди след HTML (преди </body>).
*/

/* ========== TRANSLATIONS ========== */
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
      title: "Grow Your Business with <span>ConsultPro</span>",
      text: "We provide expert consulting services to help you achieve sustainable growth and success.",
      btn: "Get Started"
    },
    services: {
      "card1": { title: "Business Strategy", text: "Tailored strategies to help your company achieve sustainable growth and efficiency." },
      "card2": { title: "Financial Consulting", text: "Expert financial planning, analysis, and risk management for your business success." },
      "card3": { title: "Market Analysis", text: "In-depth research and insights into your market to keep you ahead of competitors." },
      "card4": { title: "Corporate Training", text: "Workshops and training sessions to boost team productivity and leadership skills." },
      "card5": { title: "IT Consulting", text: "Guidance on digital transformation, cloud solutions, and tech infrastructure." },
      "card6": { title: "Partnership Development", text: "Building strong partnerships to expand your business opportunities worldwide." }
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
      title: "Our Pricing Plans",
      subtitle: "Choose a plan that fits your business needs and goals.",
      basic: { title: "Basic" },
      btn: "Choose Plan"
    },
    journey: {
      title: "Our Journey",
      subtitle: "A look back at our milestones and growth through the years.",
      step1: { title: "2016 Foundation of ConsultPro", text: "ConsultPro began its journey as a small consultancy firm with a vision to empower businesses worldwide." },
      step2: { title: "2018 International Expansion", text: "We secured our first international client and expanded our services to financial and IT sectors." },
      step3: { title: "2020 Innovation & Growth", text: "Our consulting team grew across Europe, establishing partnerships with global enterprises." },
      step4: { title: "2023", text: "Celebrated a major milestone — over 100 successful consulting projects delivered worldwide." },
      step6: { text: "ConsultPro continues to lead the way in digital transformation and business innovation." }
    },
    careers: {
      title: "Join Our Team",
      subtitle1: "We're always looking for passionate and talented professionals to grow with us.",
      position1: "Business Consultant",
      position2: "Financial Analyst",
      position3: "Marketing Manager",
      subtitle2: "Provide expert advice and insights to help clients improve efficiency and achieve success.",
      subtitle3: "Analyze financial data and develop strategies that help clients grow sustainably.",
      subtitle4: "Lead digital campaigns and branding initiatives to boost our clients’ visibility."
    },
    contact: {
      sendBtn: "Send Message",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message"
    },
    footer: {
      rights: "© 2025 ConsultPro. All rights reserved."
    },
    team: {
      testimonial1: { text: "“Working at ConsultPro has been an incredible journey! I’ve grown professionally and personally thanks to the supportive leadership.”", name: "John Smith", role: "CEO & Founder" },
      testimonial2: { text: "“The teamwork and company culture here are truly inspiring. Every project feels like a shared success.”", name: "Grace Campbell", role: "Financial Consultant" },
      testimonial3: { text: "“ConsultPro gives you the freedom to innovate and contribute your ideas. It’s amazing to work in such a dynamic environment.”", name: "Mason Jerome", role: "Marketing Expert" }
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
      title: "Развийте бизнеса си с <span>ConsultPro</span>",
      text: "Ние предлагаме експертни консултантски услуги, които да ви помогнат да постигнете устойчив растеж и успех.",
      btn: "Започнете"
    },
    services: {
      "card1": { title: "Бизнес Стратегия", text: "Персонализирани стратегии за устойчив растеж и ефективност." },
      "card2": { title: "Финансов Консултинг", text: "Експертно финансово планиране, анализ и управление на риска." },
      "card3": { title: "Анализ на Пазара", text: "Подробни изследвания и прозрения, за да останете пред конкурентите." },
      "card4": { title: "Корпоративно Обучение", text: "Обучения и семинари за повишаване на производителността и лидерството." },
      "card5": { title: "ИТ Консултиране", text: "Ръководство за дигитална трансформация и инфраструктура." },
      "card6": { title: "Развитие на Партньорства", text: "Изграждане на силни партньорства за разширяване на бизнес възможностите." }
    },
    partners: {
      title: "Нашите партньори",
      subtitle: "Горди сме да работим с тези водещи брандове и организации.",
      img1_alt: "Партньор 1",
      img2_alt: "Партньор 2",
      img3_alt: "Партньор 3",
      img4_alt: "Партньор 4",
      img5_alt: "Партньор 5"
    },
    awards: {
      title: "Нашите награди и постижения",
      subtitle: "Отличия за отдаденост, иновации и удовлетвореност на клиента.",
      card1: { title: "Най-добра консултантска фирма 2023", text: "Награда за изключителна бизнес стратегия и иновация." },
      card2: { title: "Отлично обслужване на клиенти", text: "Признание за нашата изключителна поддръжка и грижа за клиента." },
      card3: { title: "Върхов растеж 2024", text: "Отличени за бърз и устойчив растеж." },
      card4: { title: "Награда за иновации", text: "Празнуваме креативни и напредничави бизнес решения." }
    },
    blog: {
      title: "Последни публикации",
      subtitle: "Останете в крак с нашите бизнес съвети, истории за успех и новини.",
      post1: { title: "Как да изградите печеливша бизнес стратегия", text: "Открийте ключовите елементи за силна стратегия, която води до растеж." },
      post2: { title: "Топ 5 пазарни тенденции за 2025", text: "Проучете най-големите промени, които ще оформят бъдещето на бизнеса." },
      post3: { title: "Увеличете продуктивността на екипа си", text: "Научете лесни и мощни техники за мотивация и ефективност." },
      btn: "Прочети"
    },
    pricing: {
      title: "Нашите цени",
      subtitle: "Изберете план, който отговаря на нуждите и целите на вашия бизнес.",
      basic: { title: "Базов" },
      btn: "Избери план"
    },
    journey: {
      title: "Нашето пътуване",
      subtitle: "Връщаме се назад към важните етапи и растежа през годините.",
      step1: { title: "2016 Създаване на ConsultPro", text: "ConsultPro започна като малка консултантска фирма с визия да подкрепя бизнесите." },
      step2: { title: "2018 Международно разширение", text: "Привлякохме първия си международен клиент и разширихме услугите." },
      step3: { title: "2020 Иновации и растеж", text: "Екипът ни се разшири в цяла Европа." },
      step4: { title: "2023", text: "Празнуваме над 100 успешни консултантски проекта." },
      step6: { text: "ConsultPro продължава да води в дигиталната трансформация и иновациите." }
    },
    careers: {
      title: "Присъедини се към нас",
      subtitle1: "Търсим страстни и талантливи професионалисти.",
      position1: "Бизнес консултант",
      position2: "Финансов анализатор",
      position3: "Маркетинг мениджър",
      subtitle2: "Предоставяйте експертни съвети и прозрения за подобряване на ефективността.",
      subtitle3: "Анализирайте данни и развивайте стратегии за устойчив растеж.",
      subtitle4: "Водете дигитални кампании и инициативи за брандинг."
    },
    contact: {
      sendBtn: "Изпрати съобщение",
      formName: "Вашето име",
      formEmail: "Вашият имейл",
      formMessage: "Вашето съобщение"
    },
    footer: {
      rights: "© 2025 ConsultPro. Всички права запазени."
    },
    team: {
      testimonial1: { text: "“Работата в ConsultPro беше невероятно пътуване! Израснах професионално и лично благодарение на подкрепата.”", name: "John Smith", role: "Основател и изпълнителен директор" },
      testimonial2: { text: "“Екипната работа и културата тук са вдъхновяващи. Всеки проект е споделен успех.”", name: "Grace Campbell", role: "Финансов консултант" },
      testimonial3: { text: "“ConsultPro дава свобода да иновираш и да допринасяш с идеи. Удивително е да работиш тук.”", name: "Mason Jerome", role: "Маркетингов експерт" }
    }
  }
};

/* ========== UTIL: safe get nested key ========== */
function getKey(obj, path) {
  return path.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : null, obj);
}

/* ========== I18N APPLY ========== */
const i18n = {
  current: localStorage.getItem('site_lang') || 'en',
  setLang(lang) {
    if (!translations[lang]) return;
    this.current = lang;
    localStorage.setItem('site_lang', lang);
    applyTranslations();
    updateFlagUI();
  },
  t(path) { return getKey(translations[this.current], path) ?? ''; }
};

function applyTranslations() {
  // text nodes (data-i18n)
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = i18n.t(key);
    if (txt !== '') el.textContent = txt;
  });

  // innerHTML (data-i18n-html)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const txt = i18n.t(key);
    if (txt !== '') el.innerHTML = txt;
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const txt = i18n.t(key);
    if (txt !== '') el.placeholder = txt;
  });

  // alt for images (data-i18n-alt)
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const txt = i18n.t(key);
    if (txt !== '') el.alt = txt;
  });

  // also update attributes for nav anchors if necessary (they already have data-i18n)
}

/* ========== UI: update flags active class ========== */
function updateFlagUI() {
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.getElementById(i18n.current === 'bg' ? 'bg-btn' : 'en-btn');
  if (activeBtn) activeBtn.classList.add('active');
}

/* ========== NAV: menu toggle & smooth scroll ========== */
function setupNav() {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => nav.classList.toggle('open'));
  }

  // smooth scroll for anchors
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const top = target.getBoundingClientRect().top + window.pageYOffset - 60; // offset
        window.scrollTo({ top, behavior: 'smooth' });
        // close mobile nav if open
        if (nav && nav.classList.contains('open')) nav.classList.remove('open');
      }
    });
  });
}

/* ========== SLIDERS ========== */
function setupHeroSlider() {
  const slides = document.querySelectorAll('.hero-slider .slide');
  if (!slides.length) return;
  let idx = 0;
  const change = (n) => {
    slides.forEach(s => s.classList.remove('active'));
    slides[n].classList.add('active');
  };
  // auto-play
  setInterval(() => {
    idx = (idx + 1) % slides.length;
    change(idx);
  }, 4500);
}

function setupPortfolioSlider() {
  const slider = document.querySelector('.portfolio-slider');
  if (!slider) return;
  const slides = slider.querySelectorAll('.slide');
  const prev = slider.querySelector('.prev');
  const next = slider.querySelector('.next');
  let active = 0;
  function update() {
    slides.forEach((s, i) => s.classList.toggle('active', i === active));
  }
  if (prev) prev.addEventListener('click', () => { active = (active - 1 + slides.length) % slides.length; update(); });
  if (next) next.addEventListener('click', () => { active = (active + 1) % slides.length; update(); });
  // autoplay
  setInterval(() => { active = (active + 1) % slides.length; update(); }, 6000);
}

/* ========== FADE IN / SCROLL REVEAL ========== */
function setupScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('reveal-visible');
        observer.unobserve(e.target); // reveal once
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('section, .service-card, .case-card, .testimonial-card, .award-card, .blog-post, .career-card, .stat-item').forEach(el => {
    el.classList.add('reveal'); // initial
    observer.observe(el);
  });
}

/* ========== STATS COUNTER (when visible) ========== */
function setupStatsCounter() {
  const nums = document.querySelectorAll('.stat-item .number');
  if (!nums.length) return;
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const nEl = e.target;
        const target = parseInt(nEl.getAttribute('data-target'), 10) || 0;
        let start = 0;
        const dur = 1500;
        const step = Math.ceil(target / (dur / 30));
        const iv = setInterval(() => {
          start += step;
          nEl.textContent = (start >= target) ? target : start;
          if (start >= target) clearInterval(iv);
        }, 30);
        obs.unobserve(nEl);
      }
    });
  });
  nums.forEach(n => obs.observe(n));
}

/* ========== CHAT WIDGET ========== */
function setupChatWidget() {
  const toggle = document.querySelector('.chat-toggle');
  const box = document.querySelector('.chat-box');
  const closeBtn = document.querySelector('.chat-close');
  if (!toggle || !box) return;
  toggle.addEventListener('click', () => box.classList.toggle('open'));
  if (closeBtn) closeBtn.addEventListener('click', () => box.classList.remove('open'));

  // basic send (no backend) - append message
  const sendBtn = document.getElementById('sendBtn');
  const chatInput = document.getElementById('chatInput');
  const messages = document.getElementById('chatMessages');
  if (sendBtn && chatInput && messages) {
    sendBtn.addEventListener('click', () => {
      const v = chatInput.value.trim();
      if (!v) return;
      const p = document.createElement('div');
      p.className = 'chat-msg user';
      p.textContent = v;
      messages.appendChild(p);
      chatInput.value = '';
      messages.scrollTop = messages.scrollHeight;
      // auto-reply (friendly)
      setTimeout(() => {
        const r = document.createElement('div');
        r.className = 'chat-msg bot';
        r.textContent = 'Thanks — we will get back to you shortly!';
        messages.appendChild(r);
        messages.scrollTop = messages.scrollHeight;
      }, 700);
    });
    chatInput.addEventListener('keydown', e => { if (e.key === 'Enter') sendBtn.click(); });
  }
}

/* ========== LANGUAGE BUTTONS ========== */
function setupLangButtons() {
  const enBtn = document.getElementById('en-btn');
  const bgBtn = document.getElementById('bg-btn');

  if (enBtn) enBtn.addEventListener('click', () => i18n.setLang('en'));
  if (bgBtn) bgBtn.addEventListener('click', () => i18n.setLang('bg'));
}

/* ========== INITIALIZE ALL ========== */
function init() {
  try {
    // set initial class on body for lang if needed
    document.documentElement.setAttribute('lang', i18n.current === 'bg' ? 'bg' : 'en');

    setupLangButtons();
    applyTranslations();
    updateFlagUI();

    setupNav();
    setupHeroSlider();
    setupPortfolioSlider();
    setupScrollReveal();
    setupStatsCounter();
    setupChatWidget();

    // small cosmetic: add reveal-visible styles if already in viewport
    window.addEventListener('load', () => {
      // run translations again in case some nodes were added dynamically
      applyTranslations();
    });

    // Auto-save preference already handled in i18n.setLang via localStorage
  } catch (err) {
    console.error('Init error:', err);
  }
}

// run
document.addEventListener('DOMContentLoaded', init);

/* ========== NOTES for deployment ==========
 - Save this file as js/main.js
 - Remove other JS imports (i18n.js, translate.js, sliders.js, ui.js, components.js) to avoid 404 / duplicate behavior.
 - Ensure index.html includes: <script src="js/main.js"></script> before </body>.
 - If some data-i18n keys in the page are slightly different, add corresponding keys to translations object.
 - For additional phrases add translations.en.<path> and translations.bg.<path>.
=========================================== */
