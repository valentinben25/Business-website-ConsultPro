document.addEventListener("DOMContentLoaded", () => {

  // ---------------------
  // Mobile menu
  // ---------------------
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');

  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });

    const navLinks = document.querySelectorAll('.nav a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  }

  // ---------------------
  // Stats counter
  // ---------------------
    const counters = document.querySelectorAll('.number');
  if (counters.length > 0) {
    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }


  // ---------------------
  // Hero slider (auto-rotate)
  // ---------------------
   // Portfolio slider
const slidesP = document.querySelectorAll('.portfolio-slider .slide');
let current = 0;

function showSlide(index) {
  if (!slidesP || slidesP.length === 0) return;
  slidesP.forEach(s => s.classList.remove('active'));
  const slide = slidesP[index];
  if (slide) slide.classList.add('active');
}

// next / prev — защитени селектори
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

if (slidesP.length > 0) {
  showSlide(current); // покажи първия при зареждане
}

if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    if (slidesP.length === 0) return;
    current = (current + 1) % slidesP.length;
    showSlide(current);
  });
}

if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    if (slidesP.length === 0) return;
    current = (current - 1 + slidesP.length) % slidesP.length;
    showSlide(current);
  });
}

// Автоматична смяна — само ако има слайдове
if (slidesP.length > 0) {
  setInterval(() => {
    current = (current + 1) % slidesP.length;
    showSlide(current);
  }, 4000);
}


// FAQ accordion
const faqItems = document.querySelectorAll('.faq-item');
if (faqItems && faqItems.length > 0) {
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });
}

// ==============================
// Newsletter Subscribe Message
// ==============================
// (Ако искаш да остане отделен DOMContentLoaded — можеш да го оставиш, но е по-добре да проверим елемента)
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector("input[type='email']");
    const userEmail = emailInput ? emailInput.value.trim() : "";
    if (userEmail === "") {
      alert("Please enter a valid email address.");
      return;
    }
    alert("✅ Thank you for subscribing, " + userEmail + "!");
    if (emailInput) emailInput.value = "";
  });
}

// ---------------------
// Chat / Support Widget (защитен)
// ---------------------
const chatToggle = document.querySelector('.chat-toggle');
const chatBox = document.querySelector('.chat-box');
const chatClose = document.querySelector('.chat-close');
const sendBtn = document.querySelector('#sendBtn');
const chatInput = document.querySelector('#chatInput');
const chatMessages = document.querySelector('#chatMessages');

if (chatToggle && chatBox) {
  chatToggle.addEventListener('click', () => {
    chatBox.classList.toggle('active');
  });
}
if (chatClose && chatBox) {
  chatClose.addEventListener('click', () => {
    chatBox.classList.remove('active');
  });
}
if (sendBtn && chatInput && chatMessages) {
  sendBtn.addEventListener('click', () => {
    const message = chatInput.value.trim();
    if (message !== '') {
      const msg = document.createElement('div');
      msg.textContent = `You: ${message}`;
      chatMessages.appendChild(msg);
      chatInput.value = '';
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
}



// ---------------------
// FULL LANGUAGE SWITCHER (EN / BG) — Hero + Services + Process + Stats
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

   // Текстове за превод
  const translations = {
    en: {
      // Navigation
      home: "Home",
      services: "Services",
      stats: "Stats",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      pricing: "Pricing",
      contact: "Contact",
      map: "Map",

      // Hero
      heroTitle: "Grow Your Business with ConsultPro",
      heroText: "We provide expert consulting services to help you achieve sustainable growth and success.",
      heroBtn: "Get Started",

      // Services
      servicesTitle: "Our Services",
      servicesSubtitle: "We provide professional consulting to help your business succeed.",
      s1Title: "Business Strategy",
      s1Text: "Tailored strategies to help your company achieve sustainable growth and efficiency.",
      s2Title: "Financial Consulting",
      s2Text: "Expert financial planning, analysis, and risk management for your business success.",
      s3Title: "Market Analysis",
      s3Text: "In-depth research and insights into your market to keep you ahead of competitors.",
      s4Title: "Corporate Training",
      s4Text: "Workshops and training sessions to boost team productivity and leadership skills.",
      s5Title: "IT Consulting",
      s5Text: "Guidance on digital transformation, cloud solutions, and tech infrastructure.",
      s6Title: "Partnership Development",
      s6Text: "Building strong partnerships to expand your business opportunities worldwide.",

      // Our Process
      processTitle: "Our Process",
      processSubtitle: "We follow a structured and efficient workflow to deliver outstanding results.",
      p1Title: "Research & Analysis",
      p1Text: "Understanding your business needs and market conditions to build the right foundation.",
      p2Title: "Planning & Strategy",
      p2Text: "Designing an action plan aligned with your objectives and long-term vision.",
      p3Title: "Implementation",
      p3Text: "Executing strategies with precision and monitoring key performance indicators.",
      p4Title: "Optimization & Results",
      p4Text: "Evaluating outcomes and improving processes for continuous growth.",

      // Stats
      statsTitle: "Our Achievements",
      statsSubtitle: "Key milestones that highlight our expertise and growth.",
      st1Text: "Happy Clients",
      st2Text: "Completed Projects",
      st3Text: "Years of Experience",
      st4Text: "Expert Consultants"
    },

    bg: {
      // Навигация
      home: "Начало",
      services: "Услуги",
      stats: "Статистика",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта",

      // Hero
      heroTitle: "Развий своя бизнес с ConsultPro",
      heroText: "Предлагаме експертни консултантски услуги за устойчив растеж и успех.",
      heroBtn: "Свържи се с нас",

      // Services
      servicesTitle: "Нашите услуги",
      servicesSubtitle: "Предлагаме професионални консултации, за да подпомогнем успеха на вашия бизнес.",
      s1Title: "Бизнес стратегия",
      s1Text: "Индивидуални стратегии за устойчив растеж и ефективност на вашата компания.",
      s2Title: "Финансови консултации",
      s2Text: "Експертно финансово планиране, анализ и управление на риска.",
      s3Title: "Пазарен анализ",
      s3Text: "Задълбочени проучвания и анализи, които ви държат пред конкуренцията.",
      s4Title: "Корпоративни обучения",
      s4Text: "Обучения и семинари за повишаване на производителността и лидерските умения.",
      s5Title: "ИТ консултации",
      s5Text: "Насоки за дигитална трансформация, облачни решения и технологична инфраструктура.",
      s6Title: "Развитие на партньорства",
      s6Text: "Изграждане на силни партньорства за разширяване на бизнес възможностите по света.",

      // Our Process
      processTitle: "Нашият процес",
      processSubtitle: "Следваме структурирана и ефективна система на работа за отлични резултати.",
      p1Title: "Проучване и анализ",
      p1Text: "Разбираме нуждите и пазара на вашия бизнес, за да изградим стабилна основа.",
      p2Title: "Планиране и стратегия",
      p2Text: "Изготвяме план за действие, съобразен с целите и дългосрочната ви визия.",
      p3Title: "Изпълнение",
      p3Text: "Реализираме стратегиите с прецизност и наблюдаваме ключови показатели за успех.",
      p4Title: "Оптимизация и резултати",
      p4Text: "Оценяваме постигнатото и подобряваме процесите за непрекъснат растеж.",

      // Stats
      statsTitle: "Нашите постижения",
      statsSubtitle: "Основни постижения, които подчертават нашия опит и растеж.",
      st1Text: "Доволни клиенти",
      st2Text: "Завършени проекти",
      st3Text: "Години опит",
      st4Text: "Експертни консултанти"
    }
  };

  


  // Функция за смяна на езика
  function setLanguage(lang) {
    // Навигация
    document.querySelector('.nav a[href="#home"]').textContent = translations[lang].home;
    document.querySelector('.nav a[href="#services"]').textContent = translations[lang].services;
    document.querySelector('.nav a[href="#stats"]').textContent = translations[lang].stats;
    document.querySelector('.nav a[href="#portfolio"]').textContent = translations[lang].portfolio;
    document.querySelector('.nav a[href="#testimonials"]').textContent = translations[lang].testimonials;
    document.querySelector('.nav a[href="#pricing"]').textContent = translations[lang].pricing;
    document.querySelector('.nav a[href="#contact"]').textContent = translations[lang].contact;
    document.querySelector('.nav a[href="#map"]').textContent = translations[lang].map;

    // Hero
    document.querySelector('.hero-content h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-content p').textContent = translations[lang].heroText;
    document.querySelector('.hero-content .btn').textContent = translations[lang].heroBtn;

    // Services
    document.querySelector('#services h2').textContent = translations[lang].servicesTitle;
    document.querySelector('#services .subtitle').textContent = translations[lang].servicesSubtitle;

    const serviceTitles = document.querySelectorAll('.service-card h3');
    const serviceTexts = document.querySelectorAll('.service-card p');
    const serviceData = [
      { title: 's1Title', text: 's1Text' },
      { title: 's2Title', text: 's2Text' },
      { title: 's3Title', text: 's3Text' },
      { title: 's4Title', text: 's4Text' },
      { title: 's5Title', text: 's5Text' },
      { title: 's6Title', text: 's6Text' }
    ];

    serviceTitles.forEach((el, i) => (el.textContent = translations[lang][serviceData[i].title]));
    serviceTexts.forEach((el, i) => (el.textContent = translations[lang][serviceData[i].text]));

    // Our Process
    if (document.querySelector('#process')) {
      document.querySelector('#process h2').textContent = translations[lang].processTitle;
      document.querySelector('#process .subtitle').textContent = translations[lang].processSubtitle;

      const processTitles = document.querySelectorAll('.process-step h3');
      const processTexts = document.querySelectorAll('.process-step p');
      const processData = [
        { title: 'p1Title', text: 'p1Text' },
        { title: 'p2Title', text: 'p2Text' },
        { title: 'p3Title', text: 'p3Text' },
        { title: 'p4Title', text: 'p4Text' }
      ];

      processTitles.forEach((el, i) => (el.textContent = translations[lang][processData[i].title]));
      processTexts.forEach((el, i) => (el.textContent = translations[lang][processData[i].text]));
    }

    // Stats
    if (document.querySelector('#stats')) {
      document.querySelector('#stats h2').textContent = translations[lang].statsTitle;
      document.querySelector('#stats p').textContent = translations[lang].statsSubtitle;

      const statTexts = document.querySelectorAll('#stats .stat-item p');
      const statData = ['st1Text', 'st2Text', 'st3Text', 'st4Text'];
      statTexts.forEach((el, i) => (el.textContent = translations[lang][statData[i]]));
    }
  }

  // Buttons
  enBtn.addEventListener('click', () => {
    setLanguage('en');
    enBtn.classList.add('active');
    bgBtn.classList.remove('active');
  });

  bgBtn.addEventListener('click', () => {
    setLanguage('bg');
    bgBtn.classList.add('active');
    enBtn.classList.remove('active');
  });
});


// ---------------------
// FULL LANGUAGE SWITCHER (EN / BG) — Hero + Services + Process + Stats
// ---------------------
 document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

   // Текстове за превод
  const translations = {
    en: {
      // Navigation
      home: "Home",
      services: "Services",
      stats: "Stats",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      pricing: "Pricing",
      contact: "Contact",
      map: "Map",

      // Hero
      heroTitle: "Grow Your Business with ConsultPro",
      heroText: "We provide expert consulting services to help you achieve sustainable growth and success.",
      heroBtn: "Get Started",

      // Services
      servicesTitle: "Our Services",
      servicesSubtitle: "We provide professional consulting to help your business succeed.",
      s1Title: "Business Strategy",
      s1Text: "Tailored strategies to help your company achieve sustainable growth and efficiency.",
      s2Title: "Financial Consulting",
      s2Text: "Expert financial planning, analysis, and risk management for your business success.",
      s3Title: "Market Analysis",
      s3Text: "In-depth research and insights into your market to keep you ahead of competitors.",
      s4Title: "Corporate Training",
      s4Text: "Workshops and training sessions to boost team productivity and leadership skills.",
      s5Title: "IT Consulting",
      s5Text: "Guidance on digital transformation, cloud solutions, and tech infrastructure.",
      s6Title: "Partnership Development",
      s6Text: "Building strong partnerships to expand your business opportunities worldwide.",

      // Our Process
      processTitle: "Our Process",
      processSubtitle: "We follow a structured and efficient workflow to deliver outstanding results.",
      p1Title: "Research & Analysis",
      p1Text: "Understanding your business needs and market conditions to build the right foundation.",
      p2Title: "Planning & Strategy",
      p2Text: "Designing an action plan aligned with your objectives and long-term vision.",
      p3Title: "Implementation",
      p3Text: "Executing strategies with precision and monitoring key performance indicators.",
      p4Title: "Optimization & Results",
      p4Text: "Evaluating outcomes and improving processes for continuous growth.",

      // Stats
      statsTitle: "Our Achievements",
      statsSubtitle: "Key milestones that highlight our expertise and growth.",
      st1Text: "Happy Clients",
      st2Text: "Completed Projects",
      st3Text: "Years of Experience",
      st4Text: "Expert Consultants"
    },

    bg: {
      // Навигация
      home: "Начало",
      services: "Услуги",
      stats: "Статистика",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта",

      // Hero
      heroTitle: "Развий своя бизнес с ConsultPro",
      heroText: "Предлагаме експертни консултантски услуги за устойчив растеж и успех.",
      heroBtn: "Свържи се с нас",

      // Services
      servicesTitle: "Нашите услуги",
      servicesSubtitle: "Предлагаме професионални консултации, за да подпомогнем успеха на вашия бизнес.",
      s1Title: "Бизнес стратегия",
      s1Text: "Индивидуални стратегии за устойчив растеж и ефективност на вашата компания.",
      s2Title: "Финансови консултации",
      s2Text: "Експертно финансово планиране, анализ и управление на риска.",
      s3Title: "Пазарен анализ",
      s3Text: "Задълбочени проучвания и анализи, които ви държат пред конкуренцията.",
      s4Title: "Корпоративни обучения",
      s4Text: "Обучения и семинари за повишаване на производителността и лидерските умения.",
      s5Title: "ИТ консултации",
      s5Text: "Насоки за дигитална трансформация, облачни решения и технологична инфраструктура.",
      s6Title: "Развитие на партньорства",
      s6Text: "Изграждане на силни партньорства за разширяване на бизнес възможностите по света.",

      // Our Process
      processTitle: "Нашият процес",
      processSubtitle: "Следваме структурирана и ефективна система на работа за отлични резултати.",
      p1Title: "Проучване и анализ",
      p1Text: "Разбираме нуждите и пазара на вашия бизнес, за да изградим стабилна основа.",
      p2Title: "Планиране и стратегия",
      p2Text: "Изготвяме план за действие, съобразен с целите и дългосрочната ви визия.",
      p3Title: "Изпълнение",
      p3Text: "Реализираме стратегиите с прецизност и наблюдаваме ключови показатели за успех.",
      p4Title: "Оптимизация и резултати",
      p4Text: "Оценяваме постигнатото и подобряваме процесите за непрекъснат растеж.",

      // Stats
      statsTitle: "Нашите постижения",
      statsSubtitle: "Основни постижения, които подчертават нашия опит и растеж.",
      st1Text: "Доволни клиенти",
      st2Text: "Завършени проекти",
      st3Text: "Години опит",
      st4Text: "Експертни консултанти"
    }
  };

  


  // Функция за смяна на езика
  function setLanguage(lang) {
    // Навигация
    document.querySelector('.nav a[href="#home"]').textContent = translations[lang].home;
    document.querySelector('.nav a[href="#services"]').textContent = translations[lang].services;
    document.querySelector('.nav a[href="#stats"]').textContent = translations[lang].stats;
    document.querySelector('.nav a[href="#portfolio"]').textContent = translations[lang].portfolio;
    document.querySelector('.nav a[href="#testimonials"]').textContent = translations[lang].testimonials;
    document.querySelector('.nav a[href="#pricing"]').textContent = translations[lang].pricing;
    document.querySelector('.nav a[href="#contact"]').textContent = translations[lang].contact;
    document.querySelector('.nav a[href="#map"]').textContent = translations[lang].map;

    // Hero
    document.querySelector('.hero-content h1').textContent = translations[lang].heroTitle;
    document.querySelector('.hero-content p').textContent = translations[lang].heroText;
    document.querySelector('.hero-content .btn').textContent = translations[lang].heroBtn;

    // Services
    document.querySelector('#services h2').textContent = translations[lang].servicesTitle;
    document.querySelector('#services .subtitle').textContent = translations[lang].servicesSubtitle;

    const serviceTitles = document.querySelectorAll('.service-card h3');
    const serviceTexts = document.querySelectorAll('.service-card p');
    const serviceData = [
      { title: 's1Title', text: 's1Text' },
      { title: 's2Title', text: 's2Text' },
      { title: 's3Title', text: 's3Text' },
      { title: 's4Title', text: 's4Text' },
      { title: 's5Title', text: 's5Text' },
      { title: 's6Title', text: 's6Text' }
    ];

    serviceTitles.forEach((el, i) => (el.textContent = translations[lang][serviceData[i].title]));
    serviceTexts.forEach((el, i) => (el.textContent = translations[lang][serviceData[i].text]));

    // Our Process
    if (document.querySelector('#process')) {
      document.querySelector('#process h2').textContent = translations[lang].processTitle;
      document.querySelector('#process .subtitle').textContent = translations[lang].processSubtitle;

      const processTitles = document.querySelectorAll('.process-step h3');
      const processTexts = document.querySelectorAll('.process-step p');
      const processData = [
        { title: 'p1Title', text: 'p1Text' },
        { title: 'p2Title', text: 'p2Text' },
        { title: 'p3Title', text: 'p3Text' },
        { title: 'p4Title', text: 'p4Text' }
      ];

      processTitles.forEach((el, i) => (el.textContent = translations[lang][processData[i].title]));
      processTexts.forEach((el, i) => (el.textContent = translations[lang][processData[i].text]));
    }

    // Stats
    if (document.querySelector('#stats')) {
      document.querySelector('#stats h2').textContent = translations[lang].statsTitle;
      document.querySelector('#stats p').textContent = translations[lang].statsSubtitle;

      const statTexts = document.querySelectorAll('#stats .stat-item p');
      const statData = ['st1Text', 'st2Text', 'st3Text', 'st4Text'];
      statTexts.forEach((el, i) => (el.textContent = translations[lang][statData[i]]));
    }
  }

  // Buttons
  enBtn.addEventListener('click', () => {
    setLanguage('en');
    enBtn.classList.add('active');
    bgBtn.classList.remove('active');
  });

  bgBtn.addEventListener('click', () => {
    setLanguage('bg');
    bgBtn.classList.add('active');
    enBtn.classList.remove('active');
  });
});


// ---------------------
// HEADER TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const headerTranslations = {
    en: {
      links: ["Home", "Services", "Stats", "Portfolio", "Testimonials", "Pricing", "Contact", "Map"],
      logo: "Consult"
    },

    bg: {
      links: ["Начало", "Услуги", "Статистика", "Портфолио", "Отзиви", "Цени", "Контакт", "Карта"],
      logo: "Consult"
    }
  };

  // Плавна анимация (fade)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Промяна на езика
  function setHeaderLanguage(lang) {
    const header = document.querySelector(".header");
    if (!header) return;

    const logo = header.querySelector(".logo");
    const navLinks = header.querySelectorAll(".nav a");

    // Промяна на логото
    fadeContent(logo, () => {
      logo.innerHTML = `${headerTranslations[lang].logo}<span>Pro</span>`;
    });

    // Промяна на навигационните линкове
    navLinks.forEach((link, i) => {
      if (headerTranslations[lang].links[i]) {
        fadeContent(link, () => {
          link.textContent = headerTranslations[lang].links[i];
        });
      }
    });
  }

  // Превключване между EN / BG
  enBtn.addEventListener("click", () => setHeaderLanguage("en"));
  bgBtn.addEventListener("click", () => setHeaderLanguage("bg"));
});



// ---------------------
// PORTFOLIO TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const translations = {
    en: {
      // Portfolio
      portfolioTitle: "Our Projects",
      portfolioSubtitle: "Explore some of our featured works and consulting projects.",
      project1Title: "Business Growth Strategy",
      project1Text: "Helping companies expand globally with smart solutions.",
      project2Title: "Digital Transformation",
      project2Text: "Modernizing organizations for the new digital economy.",
      project3Title: "Financial Analysis",
      project3Text: "Providing detailed financial insights and growth plans.",
      project4Title: "Corporate Training",
      project4Text: "Empowering employees through leadership and innovation.",
      project5Title: "Partnership Development",
      project5Text: "Creating strategic collaborations that drive business success."
    },
    bg: {
      // Portfolio
      portfolioTitle: "Нашите проекти",
      portfolioSubtitle: "Разгледайте някои от нашите ключови проекти и консултантски решения.",
      project1Title: "Стратегия за бизнес растеж",
      project1Text: "Помагаме на компаниите да се разширяват глобално с интелигентни решения.",
      project2Title: "Дигитална трансформация",
      project2Text: "Модернизираме организациите за новата дигитална икономика.",
      project3Title: "Финансов анализ",
      project3Text: "Предоставяме подробни финансови анализи и планове за растеж.",
      project4Title: "Корпоративно обучение",
      project4Text: "Усъвършенстваме екипите чрез лидерство и иновации.",
      project5Title: "Развитие на партньорства",
      project5Text: "Създаваме стратегически сътрудничества, които водят до успех."
    }
  };

  function setLanguage(lang) {
    // Portfolio
    if (document.querySelector('#portfolio')) {
      document.querySelector('#portfolio h2').textContent = translations[lang].portfolioTitle;
      document.querySelector('#portfolio p').textContent = translations[lang].portfolioSubtitle;

      const captions = document.querySelectorAll('#portfolio .caption h3');
      const texts = document.querySelectorAll('#portfolio .caption p');

      const projectData = [
        { title: 'project1Title', text: 'project1Text' },
        { title: 'project2Title', text: 'project2Text' },
        { title: 'project3Title', text: 'project3Text' },
        { title: 'project4Title', text: 'project4Text' },
        { title: 'project5Title', text: 'project5Text' }
      ];

      captions.forEach((el, i) => el.textContent = translations[lang][projectData[i].title]);
      texts.forEach((el, i) => el.textContent = translations[lang][projectData[i].text]);
    }
  }

  // Buttons
  enBtn.addEventListener('click', () => setLanguage('en'));
  bgBtn.addEventListener('click', () => setLanguage('bg'));
});

// ---------------------
// HERO TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const heroTranslations = {
    en: {
      title: "Grow Your Business with ConsultPro",
      text: "We provide expert consulting services to help you achieve sustainable growth and success.",
      button: "Get Started"
    },
    bg: {
      title: "Развий своя бизнес с ConsultPro",
      text: "Предлагаме експертни консултантски услуги за устойчив растеж и успех.",
      button: "Свържи се с нас"
    }
  };

  // 🔹 Плавна промяна
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // 🔹 Превключване на езика
  function setHeroLanguage(lang) {
    const hero = document.querySelector(".hero-content");
    if (!hero) return;

    const title = hero.querySelector("h1");
    const text = hero.querySelector("p");
    const button = hero.querySelector(".btn");

    fadeContent(title, () => (title.textContent = heroTranslations[lang].title));
    fadeContent(text, () => (text.textContent = heroTranslations[lang].text));
    fadeContent(button, () => (button.textContent = heroTranslations[lang].button));
  }

  // 🔹 Слушатели за бутоните
  enBtn.addEventListener("click", () => setHeroLanguage("en"));
  bgBtn.addEventListener("click", () => setHeroLanguage("bg"));
});

// ---------------------
// SERVICES TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const servicesTranslations = {
    en: {
      title: "Our Services",
      subtitle: "We provide professional consulting to help your business succeed.",
      cards: [
        {
          title: "Business Strategy",
          text: "Tailored strategies to help your company achieve sustainable growth and efficiency."
        },
        {
          title: "Financial Consulting",
          text: "Expert financial planning, analysis, and risk management for your business success."
        },
        {
          title: "Market Analysis",
          text: "In-depth research and insights into your market to keep you ahead of competitors."
        },
        {
          title: "Corporate Training",
          text: "Workshops and training sessions to boost team productivity and leadership skills."
        },
        {
          title: "IT Consulting",
          text: "Guidance on digital transformation, cloud solutions, and tech infrastructure."
        },
        {
          title: "Partnership Development",
          text: "Building strong partnerships to expand your business opportunities worldwide."
        }
      ]
    },
    bg: {
      title: "Нашите услуги",
      subtitle: "Предлагаме професионални консултации, за да подпомогнем успеха на вашия бизнес.",
      cards: [
        {
          title: "Бизнес стратегия",
          text: "Индивидуални стратегии за устойчив растеж и ефективност на вашата компания."
        },
        {
          title: "Финансови консултации",
          text: "Експертно финансово планиране, анализ и управление на риска."
        },
        {
          title: "Пазарен анализ",
          text: "Задълбочени проучвания и анализи, които ви държат пред конкуренцията."
        },
        {
          title: "Корпоративни обучения",
          text: "Обучения и семинари за повишаване на производителността и лидерските умения."
        },
        {
          title: "ИТ консултации",
          text: "Насоки за дигитална трансформация, облачни решения и технологична инфраструктура."
        },
        {
          title: "Развитие на партньорства",
          text: "Изграждане на силни партньорства за разширяване на бизнес възможностите по света."
        }
      ]
    }
  };

  // 🔹 Функция за плавен fade ефект
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // 🔹 Промяна на езика
  function setServicesLanguage(lang) {
    const section = document.querySelector("#services");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");
    fadeContent(title, () => (title.textContent = servicesTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = servicesTranslations[lang].subtitle));

    const cards = section.querySelectorAll(".service-card");
    servicesTranslations[lang].cards.forEach((card, i) => {
      if (cards[i]) {
        const h3 = cards[i].querySelector("h3");
        const p = cards[i].querySelector("p");

        fadeContent(h3, () => (h3.textContent = card.title));
        fadeContent(p, () => (p.textContent = card.text));
      }
    });
  }

  // 🔹 Бутони за език
  enBtn.addEventListener("click", () => setServicesLanguage("en"));
  bgBtn.addEventListener("click", () => setServicesLanguage("bg"));
});


// ---------------------
// PROCESS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const processTranslations = {
    en: {
      title: "Our Process",
      subtitle: "We follow a structured and efficient workflow to deliver outstanding results.",
      steps: [
        {
          title: "Research & Analysis",
          text: "Understanding your business needs and market conditions to build the right foundation."
        },
        {
          title: "Planning & Strategy",
          text: "Designing an action plan aligned with your objectives and long-term vision."
        },
        {
          title: "Implementation",
          text: "Executing strategies with precision and monitoring key performance indicators."
        },
        {
          title: "Optimization & Results",
          text: "Evaluating outcomes and improving processes for continuous growth."
        }
      ]
    },
    bg: {
      title: "Нашият процес",
      subtitle: "Следваме структурирана и ефективна система на работа за отлични резултати.",
      steps: [
        {
          title: "Проучване и анализ",
          text: "Разбираме нуждите и пазара на вашия бизнес, за да изградим стабилна основа."
        },
        {
          title: "Планиране и стратегия",
          text: "Изготвяме план за действие, съобразен с целите и дългосрочната ви визия."
        },
        {
          title: "Изпълнение",
          text: "Реализираме стратегиите с прецизност и наблюдаваме ключови показатели за успех."
        },
        {
          title: "Оптимизация и резултати",
          text: "Оценяваме постигнатото и подобряваме процесите за непрекъснат растеж."
        }
      ]
    }
  };

  // 🔹 Функция за плавен fade ефект
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // 🔹 Смяна на езика
  function setProcessLanguage(lang) {
    const section = document.querySelector("#process");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");
    fadeContent(title, () => (title.textContent = processTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = processTranslations[lang].subtitle));

    const steps = section.querySelectorAll(".process-step");
    processTranslations[lang].steps.forEach((step, i) => {
      if (steps[i]) {
        const h3 = steps[i].querySelector("h3");
        const p = steps[i].querySelector("p");

        fadeContent(h3, () => (h3.textContent = step.title));
        fadeContent(p, () => (p.textContent = step.text));
      }
    });
  }

  // 🔹 Бутони за език
  enBtn.addEventListener("click", () => setProcessLanguage("en"));
  bgBtn.addEventListener("click", () => setProcessLanguage("bg"));
});


// ---------------------
// STATS TRANSLATION (EN / BG) + Counter + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  // Преводи
  const statsTranslations = {
    en: {
      title: "Our Achievements",
      subtitle: "Key milestones that highlight our expertise and growth.",
      items: ["Happy Clients", "Completed Projects", "Years of Experience", "Expert Consultants"]
    },
    bg: {
      title: "Нашите постижения",
      subtitle: "Основни постижения, които подчертават нашия опит и развитие.",
      items: ["Доволни клиенти", "Завършени проекти", "Години опит", "Експертни консултанти"]
    }
  };

  // Функция за плавно превключване
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Функция за превод
  function setStatsLanguage(lang) {
    const section = document.querySelector("#stats");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle p");
    const statLabels = section.querySelectorAll(".stat-item p");

    fadeContent(title, () => (title.textContent = statsTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = statsTranslations[lang].subtitle));

    statLabels.forEach((label, i) => {
      fadeContent(label, () => (label.textContent = statsTranslations[lang].items[i]));
    });
  }

  // Бутоните за смяна на езика
  enBtn.addEventListener("click", () => setStatsLanguage("en"));
  bgBtn.addEventListener("click", () => setStatsLanguage("bg"));

  // ---------------------
  // Анимация на числата
  // ---------------------
  const counters = document.querySelectorAll('.number');
  if (counters.length > 0) {
    counters.forEach(counter => {
      counter.innerText = "0";
      const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = target / 200;

        if (c < target) {
          counter.innerText = `${Math.ceil(c + increment)}`;
          setTimeout(updateCounter, 10);
        } else {
          counter.innerText = target;
        }
      };
      updateCounter();
    });
  }
});



// ---------------------
// PORTFOLIO TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const portfolioTranslations = {
    en: {
      title: "Our Projects",
      subtitle: "Explore some of our featured works and consulting projects.",
      projects: [
        {
          title: "Business Growth Strategy",
          text: "Helping companies expand globally with smart solutions."
        },
        {
          title: "Digital Transformation",
          text: "Modernizing organizations for the new digital economy."
        },
        {
          title: "Financial Analysis",
          text: "Providing detailed financial insights and growth plans."
        },
        {
          title: "Corporate Training",
          text: "Empowering employees through leadership and innovation."
        },
        {
          title: "Partnership Development",
          text: "Creating strategic collaborations that drive business success."
        }
      ]
    },
    bg: {
      title: "Нашите проекти",
      subtitle: "Разгледайте някои от нашите основни проекти и консултантски решения.",
      projects: [
        {
          title: "Стратегия за бизнес растеж",
          text: "Помагаме на компаниите да се разширяват глобално с интелигентни решения."
        },
        {
          title: "Дигитална трансформация",
          text: "Модернизираме организациите за новата дигитална икономика."
        },
        {
          title: "Финансов анализ",
          text: "Предоставяме задълбочени финансови анализи и планове за растеж."
        },
        {
          title: "Корпоративно обучение",
          text: "Развиваме лидерството и уменията чрез практически обучения."
        },
        {
          title: "Развитие на партньорства",
          text: "Създаваме стратегически сътрудничества за успех на вашия бизнес."
        }
      ]
    }
  };

  // --- Плавна смяна на съдържание ---
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // --- Промяна на езика ---
  function setPortfolioLanguage(lang) {
    const section = document.querySelector("#portfolio");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector("p");
    const slides = section.querySelectorAll(".slide");

    fadeContent(title, () => (title.textContent = portfolioTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = portfolioTranslations[lang].subtitle));

    portfolioTranslations[lang].projects.forEach((project, i) => {
      if (slides[i]) {
        const captionTitle = slides[i].querySelector(".caption h3");
        const captionText = slides[i].querySelector(".caption p");

        fadeContent(captionTitle, () => (captionTitle.textContent = project.title));
        fadeContent(captionText, () => (captionText.textContent = project.text));
      }
    });
  }

  // --- Превключване между EN / BG ---
  enBtn.addEventListener("click", () => setPortfolioLanguage("en"));
  bgBtn.addEventListener("click", () => setPortfolioLanguage("bg"));
});


// ---------------------
// CASE STUDIES TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const caseTranslations = {
    en: {
      title: "Case Studies & Success Stories",
      subtitle: "See how we’ve helped businesses achieve remarkable growth and transformation.",
      cases: [
        {
          title: "Financial Strategy Transformation",
          text: "We helped a UK-based finance firm boost efficiency by 35% through data-driven insights and process optimization.",
          btn: "Read Full Story"
        },
        {
          title: "Digital Marketing Revamp",
          text: "Our team designed a new marketing strategy that increased online engagement by 60% within 3 months.",
          btn: "Read Full Story"
        },
        {
          title: "Global Expansion Support",
          text: "ConsultPro guided a startup through international expansion, reaching 5 new markets in under a year.",
          btn: "Read Full Story"
        }
      ]
    },
    bg: {
      title: "Казуси и истории на успеха",
      subtitle: "Вижте как помогнахме на бизнеси да постигнат забележителен растеж и трансформация.",
      cases: [
        {
          title: "Трансформация на финансовата стратегия",
          text: "Помогнахме на финансова фирма във Великобритания да повиши ефективността си с 35% чрез анализи и оптимизация на процеси.",
          btn: "Прочети цялата история"
        },
        {
          title: "Революция в дигиталния маркетинг",
          text: "Нашият екип разработи маркетинг стратегия, която увеличи онлайн ангажираността с 60% само за 3 месеца.",
          btn: "Прочети цялата история"
        },
        {
          title: "Подкрепа за глобално разширяване",
          text: "ConsultPro помогна на стартираща компания да навлезе на 5 нови пазара за по-малко от година.",
          btn: "Прочети цялата история"
        }
      ]
    }
  };

  // --- Плавна смяна на съдържание ---
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // --- Промяна на езика ---
  function setCaseLanguage(lang) {
    const section = document.querySelector("#case-studies");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");
    const caseCards = section.querySelectorAll(".case-card");

    fadeContent(title, () => (title.textContent = caseTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = caseTranslations[lang].subtitle));

    caseTranslations[lang].cases.forEach((item, i) => {
      if (caseCards[i]) {
        const h3 = caseCards[i].querySelector("h3");
        const p = caseCards[i].querySelector("p");
        const btn = caseCards[i].querySelector(".btn-read");

        fadeContent(h3, () => (h3.textContent = item.title));
        fadeContent(p, () => (p.textContent = item.text));
        fadeContent(btn, () => (btn.textContent = item.btn));
      }
    });
  }

  // --- Превключване между EN / BG ---
  enBtn.addEventListener("click", () => setCaseLanguage("en"));
  bgBtn.addEventListener("click", () => setCaseLanguage("bg"));
});


// ---------------------
// TESTIMONIALS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const testimonialsTranslations = {
    en: {
      title: "What Our Team Says",
      subtitle: "Meet the people who make our company exceptional.",
      testimonials: [
        {
          text: "“Working at ConsultPro has been an incredible journey! I’ve grown professionally and personally thanks to the supportive leadership.”",
          name: "John Smith",
          role: "CEO & Founder"
        },
        {
          text: "“The teamwork and company culture here are truly inspiring. Every project feels like a shared success.”",
          name: "Grace Campbell",
          role: "Financial Consultant"
        },
        {
          text: "“ConsultPro gives you the freedom to innovate and contribute your ideas. It’s amazing to work in such a dynamic environment.”",
          name: "Mason Jerome",
          role: "Marketing Expert"
        }
      ]
    },
    bg: {
      title: "Какво казва нашият екип",
      subtitle: "Запознайте се с хората, които правят нашата компания изключителна.",
      testimonials: [
        {
          text: "„Работата в ConsultPro е невероятно пътешествие! Развих се професионално и лично благодарение на подкрепящото ръководство.“",
          name: "Джон Смит",
          role: "Главен изпълнителен директор и основател"
        },
        {
          text: "„Екипната работа и културата в компанията са истинско вдъхновение. Всеки проект се усеща като споделен успех.“",
          name: "Грейс Кембъл",
          role: "Финансов консултант"
        },
        {
          text: "„ConsultPro дава свобода за иновации и принос на идеи. Удивително е да работиш в толкова динамична среда.“",
          name: "Мейсън Джером",
          role: "Маркетинг експерт"
        }
      ]
    }
  };

  // Плавна анимация при смяна
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  function setTestimonialsLanguage(lang) {
    const section = document.querySelector("#testimonials");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");
    const cards = section.querySelectorAll(".testimonial-card");

    fadeContent(title, () => (title.textContent = testimonialsTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = testimonialsTranslations[lang].subtitle));

    testimonialsTranslations[lang].testimonials.forEach((t, i) => {
      if (cards[i]) {
        const p = cards[i].querySelector("p");
        const h4 = cards[i].querySelector("h4");
        const span = cards[i].querySelector("span");

        fadeContent(p, () => (p.textContent = t.text));
        fadeContent(h4, () => (h4.textContent = t.name));
        fadeContent(span, () => (span.textContent = t.role));
      }
    });
  }

  enBtn.addEventListener("click", () => setTestimonialsLanguage("en"));
  bgBtn.addEventListener("click", () => setTestimonialsLanguage("bg"));
});





// ---------------------
// CASE STUDIES TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const translations = {
    en: {
      // Case Studies
      caseTitle: "Case Studies & Success Stories",
      caseSubtitle: "Discover how we’ve helped clients achieve real results and business transformation.",
      case1Title: "Global Expansion for TechStart",
      case1Text: "We guided TechStart through an international expansion strategy, increasing revenue by 65%.",
      case2Title: "Digital Overhaul for FinEdge",
      case2Text: "Redesigned processes and systems that improved operational efficiency by 40%.",
      case3Title: "Leadership Training for NovaCorp",
      case3Text: "Developed a tailored training program that boosted productivity and morale across departments."
    },
    bg: {
      // Case Studies
      caseTitle: "Казуси и Истории на Успеха",
      caseSubtitle: "Открийте как помогнахме на нашите клиенти да постигнат реални резултати и бизнес трансформация.",
      case1Title: "Глобална експанзия за TechStart",
      case1Text: "Насочихме TechStart в стратегия за международно разширяване, увеличавайки приходите с 65%.",
      case2Title: "Дигитална трансформация за FinEdge",
      case2Text: "Реорганизирахме процесите и системите, повишавайки ефективността с 40%.",
      case3Title: "Обучение по лидерство за NovaCorp",
      case3Text: "Разработихме специализирана програма за обучение, която повиши продуктивността и мотивацията в отделите."
    }
  };

  function setLanguage(lang) {
    // Case Studies
    const caseSection = document.querySelector('#case-studies');
    if (caseSection) {
      caseSection.querySelector('h2').textContent = translations[lang].caseTitle;
      caseSection.querySelector('p.subtitle').textContent = translations[lang].caseSubtitle;

      const titles = caseSection.querySelectorAll('.case-card h3');
      const texts = caseSection.querySelectorAll('.case-card p');

      const caseData = [
        { title: 'case1Title', text: 'case1Text' },
        { title: 'case2Title', text: 'case2Text' },
        { title: 'case3Title', text: 'case3Text' }
      ];

      titles.forEach((el, i) => el.textContent = translations[lang][caseData[i].title]);
      texts.forEach((el, i) => el.textContent = translations[lang][caseData[i].text]);
    }
  }

  // Buttons
  enBtn.addEventListener('click', () => setLanguage('en'));
  bgBtn.addEventListener('click', () => setLanguage('bg'));
});


// ---------------------
// TESTIMONIALS TRANSLATION (EN / BG) - адаптиран за твоя HTML
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const translations = {
    en: {
      testimonialsTitle: "What Our Team Says",
      testimonialsSubtitle: "Meet the people who make our company exceptional.",
      testimonials: [
        {
          name: "John Smith",
          role: "CEO & Founder",
          text: "“Working at ConsultPro has been an incredible journey! I’ve grown professionally and personally thanks to the supportive leadership.”"
        },
        {
          name: "Grace Campbell",
          role: "Financial Consultant",
          text: "“The teamwork and company culture here are truly inspiring. Every project feels like a shared success.”"
        },
        {
          name: "Mason Jerome",
          role: "Marketing Expert",
          text: "“ConsultPro gives you the freedom to innovate and contribute your ideas. It’s amazing to work in such a dynamic environment.”"
        }
      ]
    },
    bg: {
      testimonialsTitle: "Какво Казва Нашият Екип",
      testimonialsSubtitle: "Запознайте се с хората, които правят нашата компания изключителна.",
      testimonials: [
        {
          name: "Джон Смит",
          role: "Изпълнителен директор и основател",
          text: "„Работата в ConsultPro беше невероятно преживяване! Развих се професионално и лично благодарение на подкрепящото ръководство.“"
        },
        {
          name: "Грейс Кембъл",
          role: "Финансов консултант",
          text: "„Екипната работа и културата в компанията са вдъхновяващи. Всеки проект е общ успех.“"
        },
        {
          name: "Мейсън Джером",
          role: "Маркетинг експерт",
          text: "„ConsultPro ти дава свободата да иновираш и да споделяш своите идеи. Чудесно е да работиш в такава динамична среда.“"
        }
      ]
    }
  };

  function setLanguage(lang) {
    const section = document.querySelector('#testimonials');
    if (!section) return;

    // Промяна на заглавие и подзаглавие
    section.querySelector('h2').textContent = translations[lang].testimonialsTitle;
    section.querySelector('.subtitle').textContent = translations[lang].testimonialsSubtitle;

    // Промяна на съдържанието във всяка карта
    const cards = section.querySelectorAll('.testimonial-card');
    translations[lang].testimonials.forEach((t, i) => {
      if (cards[i]) {
        const textDiv = cards[i].querySelector('.testimonial-text');
        textDiv.querySelector('p').textContent = t.text;
        textDiv.querySelector('h4').textContent = t.name;
        textDiv.querySelector('span').textContent = t.role;
      }
    });
  }

  enBtn.addEventListener('click', () => setLanguage('en'));
  bgBtn.addEventListener('click', () => setLanguage('bg'));
});



// ---------------------
// TESTIMONIALS CARD SCROLL ANIMATION
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".testimonial-card");

  function revealCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < triggerBottom) {
        card.classList.add("show");
      } else {
        card.classList.remove("show");
      }
    });
  }

  window.addEventListener("scroll", revealCards);
  revealCards();
});


// ---------------------
// WHY CHOOSE US TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const translations = {
    en: {
      whyTitle: "Why Choose ConsultPro",
      whySubtitle: "Discover what makes our consulting services stand out.",
      cards: [
        {
          title: "Experienced Professionals",
          text: "Our team brings years of industry experience and real-world business insight to every project."
        },
        {
          title: "Innovative Strategies",
          text: "We develop creative, data-driven strategies to help your business stay ahead of the competition."
        },
        {
          title: "Client-Centric Approach",
          text: "Your goals are our priority — we work closely with you to achieve measurable success."
        },
        {
          title: "Global Expertise",
          text: "We deliver consulting solutions that meet international standards and market needs."
        }
      ]
    },
    bg: {
      whyTitle: "Защо Да Изберете ConsultPro",
      whySubtitle: "Открийте какво отличава нашите консултантски услуги.",
      cards: [
        {
          title: "Опитни Професионалисти",
          text: "Нашият екип притежава дългогодишен опит и реални бизнес познания, които прилага във всеки проект."
        },
        {
          title: "Иновативни Стратегии",
          text: "Разработваме креативни, базирани на данни стратегии, за да помогнем на бизнеса ви да остане конкурентен."
        },
        {
          title: "Клиентски Подход",
          text: "Вашите цели са наш приоритет — работим заедно с вас, за да постигнем реални резултати."
        },
        {
          title: "Глобална Експертиза",
          text: "Предлагаме консултантски решения, които отговарят на международните стандарти и пазарни нужди."
        }
      ]
    }
  };

  function setLanguage(lang) {
    const section = document.querySelector('#why-choose');
    if (!section) return;

    // Заглавие и подзаглавие
    section.querySelector('h2').textContent = translations[lang].whyTitle;
    section.querySelector('.subtitle').textContent = translations[lang].whySubtitle;

    // Картичките
    const cards = section.querySelectorAll('.why-card');
    translations[lang].cards.forEach((item, i) => {
      if (cards[i]) {
        cards[i].querySelector('h3').textContent = item.title;
        cards[i].querySelector('p').textContent = item.text;
      }
    });
  }

  enBtn.addEventListener('click', () => setLanguage('en'));
  bgBtn.addEventListener('click', () => setLanguage('bg'));
});


// ---------------------
// WHY CHOOSE CONSULTPRO TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const whyTranslations = {
    en: {
      title: "Why Choose ConsultPro",
      subtitle: "Discover what makes our consulting services stand out.",
      cards: [
        {
          title: "Experienced Professionals",
          text: "Our team brings years of industry experience and real-world business insight to every project."
        },
        {
          title: "Innovative Strategies",
          text: "We develop creative, data-driven strategies to help your business stay ahead of the competition."
        },
        {
          title: "Client-Centric Approach",
          text: "Your goals are our priority — we work closely with you to achieve measurable success."
        },
        {
          title: "Global Expertise",
          text: "We deliver consulting solutions that meet international standards and market needs."
        }
      ]
    },
    bg: {
      title: "Защо да изберете ConsultPro",
      subtitle: "Открийте какво прави нашите консултантски услуги толкова различни.",
      cards: [
        {
          title: "Опитни професионалисти",
          text: "Нашият екип притежава дългогодишен опит и реални бизнес познания във всеки проект."
        },
        {
          title: "Иновативни стратегии",
          text: "Разработваме креативни, базирани на данни стратегии, за да изведем вашия бизнес пред конкуренцията."
        },
        {
          title: "Клиентоориентиран подход",
          text: "Вашите цели са наш приоритет — работим рамо до рамо с вас за постигане на реални резултати."
        },
        {
          title: "Глобална експертиза",
          text: "Предоставяме консултантски решения, които отговарят на международните стандарти и пазарни изисквания."
        }
      ]
    }
  };

  // Плавна анимация
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Промяна на езика
  function setWhyLanguage(lang) {
    const section = document.querySelector("#why-choose");
    if (!section) return;

    // Заглавие и подзаглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = whyTranslations[lang].title;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = whyTranslations[lang].subtitle;
    });

    // Картички
    const cards = section.querySelectorAll(".why-card");
    whyTranslations[lang].cards.forEach((card, i) => {
      if (cards[i]) {
        fadeContent(cards[i].querySelector("h3"), () => {
          cards[i].querySelector("h3").textContent = card.title;
        });
        fadeContent(cards[i].querySelector("p"), () => {
          cards[i].querySelector("p").textContent = card.text;
        });
      }
    });
  }

  // Бутони за език
  enBtn.addEventListener("click", () => setWhyLanguage("en"));
  bgBtn.addEventListener("click", () => setWhyLanguage("bg"));
});



// ---------------------
// TESTIMONIALS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const testimonialsTranslations = {
    en: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from satisfied business partners.",
      testimonials: [
        {
          name: "Sarah Thompson",
          role: "Marketing Director, VisionCorp",
          text: "“ConsultPro helped us redefine our strategy and achieve record growth last quarter. Their team is exceptional!”"
        },
        {
          name: "James Walker",
          role: "CEO, FinEdge Solutions",
          text: "“Professional and reliable — their insights completely transformed how we approach our clients.”"
        },
        {
          name: "Emily Davis",
          role: "Operations Manager, NovaTech",
          text: "“Working with ConsultPro was a game changer for our company’s long-term vision and operations.”"
        }
      ]
    },
    bg: {
      title: "Какво казват нашите клиенти",
      subtitle: "Истинска обратна връзка от доволни бизнес партньори.",
      testimonials: [
        {
          name: "Сара Томпсън",
          role: "Маркетинг директор, VisionCorp",
          text: "„ConsultPro ни помогна да преразгледаме стратегията си и постигнахме рекорден растеж през последното тримесечие. Екипът им е невероятен!“"
        },
        {
          name: "Джеймс Уокър",
          role: "Изпълнителен директор, FinEdge Solutions",
          text: "„Професионални и надеждни — техните идеи напълно промениха начина, по който подхождаме към нашите клиенти.“"
        },
        {
          name: "Емили Дейвис",
          role: "Оперативен мениджър, NovaTech",
          text: "„Работата с ConsultPro беше повратен момент за дългосрочната визия и развитието на нашата компания.“"
        }
      ]
    }
  };

  // Плавна анимация
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Смяна на езика
  function setTestimonialsLanguage(lang) {
    const section = document.querySelector("#client-testimonials");
    if (!section) return;

    // Заглавие и подзаглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = testimonialsTranslations[lang].title;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = testimonialsTranslations[lang].subtitle;
    });

    // Клиентски карти
    const cards = section.querySelectorAll(".testimonial-card");
    testimonialsTranslations[lang].testimonials.forEach((testimonial, i) => {
      if (cards[i]) {
        fadeContent(cards[i].querySelector("h3"), () => {
          cards[i].querySelector("h3").textContent = testimonial.name;
        });
        fadeContent(cards[i].querySelector("span"), () => {
          cards[i].querySelector("span").textContent = testimonial.role;
        });
        fadeContent(cards[i].querySelector("p"), () => {
          cards[i].querySelector("p").textContent = testimonial.text;
        });
      }
    });
  }

  // Бутони за превод
  enBtn.addEventListener("click", () => setTestimonialsLanguage("en"));
  bgBtn.addEventListener("click", () => setTestimonialsLanguage("bg"));
});


// ---------------------
// CONTACT SECTION TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const translations = {
    en: {
      contactTitle: "Contact Us",
      contactSubtitle: "We’d love to hear from you. Get in touch with our team.",
      contactHeader: "Get in Touch",
      contactText: "Whether you’re looking for business advice or collaboration, we’re here to help.",
      address: "15A Business Street, London, United Kingdom",
      email: "info@consultpro.co.uk",
      phone: "+44 20 1234 5678",
      hours: "Mon – Fri: 9:00 – 18:00",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendBtn: "Send Message"
    },
    bg: {
      contactTitle: "Свържете се с нас",
      contactSubtitle: "Ще се радваме да се чуем с вас. Свържете се с нашия екип.",
      contactHeader: "Връзка с нас",
      contactText: "Независимо дали търсите бизнес съвет или партньорство, ние сме тук, за да помогнем.",
      address: "ул. Бизнес 15А, Лондон, Великобритания",
      email: "info@consultpro.bg",
      phone: "+359 888 123 456",
      hours: "Пон – Пет: 9:00 – 18:00",
      formName: "Вашето име",
      formEmail: "Вашият имейл",
      formMessage: "Вашето съобщение",
      sendBtn: "Изпрати съобщение"
    }
  };

  function setLanguage(lang) {
    const section = document.querySelector('#contact');
    if (!section) return;

    // Заглавие и подзаглавие
    section.querySelector('h2').textContent = translations[lang].contactTitle;
    section.querySelector('.subtitle').textContent = translations[lang].contactSubtitle;

    // Лява част
    const info = section.querySelector('.contact-info');
    info.querySelector('h3').textContent = translations[lang].contactHeader;
    info.querySelector('p').textContent = translations[lang].contactText;

    const ul = info.querySelectorAll('li');
    if (ul.length >= 4) {
      ul[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[lang].address}`;
      ul[1].innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].email}`;
      ul[2].innerHTML = `<i class="fas fa-phone"></i> ${translations[lang].phone}`;
      ul[3].innerHTML = `<i class="fas fa-clock"></i> ${translations[lang].hours}`;
    }

    // Форма
    const form = section.querySelector('form');
    form.querySelector('input[placeholder]').placeholder = translations[lang].formName;
    form.querySelector('input[type="email"]').placeholder = translations[lang].formEmail;
    form.querySelector('textarea').placeholder = translations[lang].formMessage;
    form.querySelector('button').textContent = translations[lang].sendBtn;
  }

  enBtn.addEventListener('click', () => setLanguage('en'));
  bgBtn.addEventListener('click', () => setLanguage('bg'));
});

// ---------------------
// CLIENT TESTIMONIALS TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const testimonialsTranslations = {
    en: {
      title: "What Our Clients Say",
      subtitle: "Real feedback from satisfied business partners.",
      clients: [
        {
          name: "Sarah Thompson",
          position: "Marketing Director, VisionCorp",
          text: "“ConsultPro helped us redefine our strategy and achieve record growth last quarter. Their team is exceptional!”"
        },
        {
          name: "James Walker",
          position: "CEO, FinEdge Solutions",
          text: "“Professional and reliable — their insights completely transformed how we approach our clients.”"
        },
        {
          name: "Emily Davis",
          position: "Operations Manager, NovaTech",
          text: "“Working with ConsultPro was a game changer for our company’s long-term vision and operations.”"
        }
      ]
    },
    bg: {
      title: "Какво казват нашите клиенти",
      subtitle: "Истински отзиви от доволни бизнес партньори.",
      clients: [
        {
          name: "Сара Томпсън",
          position: "Маркетинг директор, VisionCorp",
          text: "„ConsultPro ни помогна да променим стратегията си и да постигнем рекорден растеж през последното тримесечие. Екипът им е невероятен!“"
        },
        {
          name: "Джеймс Уокър",
          position: "Главен изпълнителен директор, FinEdge Solutions",
          text: "„Професионални и надеждни — техните идеи напълно промениха начина, по който подхождаме към нашите клиенти.“"
        },
        {
          name: "Емили Дейвис",
          position: "Оперативен мениджър, NovaTech",
          text: "„Работата с ConsultPro беше истински пробив за дългосрочната визия и развитието на нашата компания.“"
        }
      ]
    }
  };

  function setTestimonialsLanguage(lang) {
    const section = document.querySelector("#client-testimonials");
    if (!section) return;

    section.querySelector("h2").textContent = testimonialsTranslations[lang].title;
    section.querySelector(".subtitle").textContent = testimonialsTranslations[lang].subtitle;

    const cards = section.querySelectorAll(".testimonial-card");
    testimonialsTranslations[lang].clients.forEach((client, i) => {
      if (cards[i]) {
        cards[i].querySelector("h3").textContent = client.name;
        cards[i].querySelector("span").textContent = client.position;
        cards[i].querySelector("p").textContent = client.text;
      }
    });
  }

  enBtn.addEventListener("click", () => setTestimonialsLanguage("en"));
  bgBtn.addEventListener("click", () => setTestimonialsLanguage("bg"));
});


// ---------------------
// FAQ TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const faqTranslations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions about our consulting services.",
      faqs: [
        {
          q: "What industries do you specialize in?",
          a: "We work with a wide range of industries including finance, IT, healthcare, and retail. Our consultants adapt to your specific business needs."
        },
        {
          q: "How long does a consulting project take?",
          a: "Most projects take between 2 to 6 weeks depending on their complexity. We always provide a detailed timeline before we begin."
        },
        {
          q: "Do you offer remote consulting?",
          a: "Yes, we provide both in-person and remote consulting sessions, ensuring flexibility for clients around the world."
        },
        {
          q: "Can you help with business strategy and marketing?",
          a: "Absolutely. We combine strategy development with marketing insights to help you grow your brand effectively."
        }
      ]
    },
    bg: {
      title: "Често задавани въпроси",
      subtitle: "Отговори на най-често задаваните въпроси за нашите консултантски услуги.",
      faqs: [
        {
          q: "В какви индустрии сте специализирани?",
          a: "Работим с широк спектър от индустрии, включително финанси, ИТ, здравеопазване и търговия. Нашите консултанти се адаптират към нуждите на вашия бизнес."
        },
        {
          q: "Колко време отнема един консултантски проект?",
          a: "Повечето проекти продължават между 2 и 6 седмици в зависимост от тяхната сложност. Винаги предоставяме подробен график преди започване."
        },
        {
          q: "Предлагате ли дистанционни консултации?",
          a: "Да, предлагаме както присъствени, така и дистанционни консултации, за да осигурим гъвкавост за клиенти по целия свят."
        },
        {
          q: "Можете ли да помогнете със стратегия и маркетинг?",
          a: "Разбира се. Комбинираме разработването на стратегии с маркетингови прозрения, за да подпомогнем ефективния растеж на вашия бранд."
        }
      ]
    }
  };

  function setFAQLanguage(lang) {
    const section = document.querySelector("#faq");
    if (!section) return;

    // Заглавия
    section.querySelector("h2").textContent = faqTranslations[lang].title;
    section.querySelector(".subtitle").textContent = faqTranslations[lang].subtitle;

    // Въпроси и отговори
    const faqItems = section.querySelectorAll(".faq-item");
    faqTranslations[lang].faqs.forEach((item, i) => {
      if (faqItems[i]) {
        faqItems[i].querySelector(".faq-question").textContent = item.q;
        faqItems[i].querySelector(".faq-answer p").textContent = item.a;
      }
    });
  }

  // Превключване между EN / BG
  enBtn.addEventListener("click", () => setFAQLanguage("en"));
  bgBtn.addEventListener("click", () => setFAQLanguage("bg"));
});


// ---------------------
// FAQ TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const faqTranslations = {
    en: {
      title: "Frequently Asked Questions",
      subtitle: "Answers to common questions about our consulting services.",
      faqs: [
        {
          question: "What industries do you specialize in?",
          answer:
            "We work with a wide range of industries including finance, IT, healthcare, and retail. Our consultants adapt to your specific business needs."
        },
        {
          question: "How long does a consulting project take?",
          answer:
            "Most projects take between 2 to 6 weeks depending on their complexity. We always provide a detailed timeline before we begin."
        },
        {
          question: "Do you offer remote consulting?",
          answer:
            "Yes, we provide both in-person and remote consulting sessions, ensuring flexibility for clients around the world."
        },
        {
          question: "Can you help with business strategy and marketing?",
          answer:
            "Absolutely. We combine strategy development with marketing insights to help you grow your brand effectively."
        }
      ]
    },

    bg: {
      title: "Често задавани въпроси",
      subtitle: "Отговори на най-често задаваните въпроси за нашите консултантски услуги.",
      faqs: [
        {
          question: "В кои индустрии сте специализирани?",
          answer:
            "Работим с широк спектър от индустрии, включително финанси, ИТ, здравеопазване и търговия на дребно. Нашите консултанти се адаптират към специфичните нужди на вашия бизнес."
        },
        {
          question: "Колко време продължава един консултантски проект?",
          answer:
            "Повечето проекти продължават между 2 и 6 седмици, в зависимост от тяхната сложност. Винаги предоставяме подробен график преди началото."
        },
        {
          question: "Предлагате ли дистанционни консултации?",
          answer:
            "Да, предлагаме както присъствени, така и онлайн консултации, за да осигурим гъвкавост за клиенти по целия свят."
        },
        {
          question: "Можете ли да помогнете с бизнес стратегия и маркетинг?",
          answer:
            "Разбира се. Съчетаваме разработването на стратегии с маркетингови анализи, за да помогнем на вашия бранд да расте ефективно."
        }
      ]
    }
  };

  // Плавна анимация
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Промяна на езика
  function setFaqLanguage(lang) {
    const section = document.querySelector("#faq");
    if (!section) return;

    // Заглавие и подзаглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = faqTranslations[lang].title;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent =
        faqTranslations[lang].subtitle;
    });

    // Въпроси и отговори
    const faqItems = section.querySelectorAll(".faq-item");
    faqTranslations[lang].faqs.forEach((faq, i) => {
      if (faqItems[i]) {
        fadeContent(faqItems[i].querySelector(".faq-question"), () => {
          faqItems[i].querySelector(".faq-question").textContent = faq.question;
        });
        fadeContent(faqItems[i].querySelector(".faq-answer p"), () => {
          faqItems[i].querySelector(".faq-answer p").textContent = faq.answer;
        });
      }
    });
  }

  // Бутони за език
  enBtn.addEventListener("click", () => setFaqLanguage("en"));
  bgBtn.addEventListener("click", () => setFaqLanguage("bg"));
});



// ---------------------
// PARTNERS TRANSLATION (EN / BG) + FADE-IN ANIMATION
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const partnersTranslations = {
    en: {
      title: "Our Trusted Partners",
      subtitle: "We collaborate with industry leaders and innovators worldwide.",
      partners: [
        {
          name: "TechNova Group",
          desc: "Leading provider of digital transformation solutions."
        },
        {
          name: "VisionCorp",
          desc: "Specialists in business strategy and marketing research."
        },
        {
          name: "FinEdge Solutions",
          desc: "Financial consulting experts focused on growth and risk management."
        },
        {
          name: "NovaTech",
          desc: "Innovative technology firm developing next-gen business tools."
        }
      ]
    },
    bg: {
      title: "Нашите доверени партньори",
      subtitle: "Работим с водещи компании и иноватори от цял свят.",
      partners: [
        {
          name: "TechNova Group",
          desc: "Водещ доставчик на решения за дигитална трансформация."
        },
        {
          name: "VisionCorp",
          desc: "Експерти по бизнес стратегия и маркетингови проучвания."
        },
        {
          name: "FinEdge Solutions",
          desc: "Финансови консултанти, фокусирани върху растеж и управление на риска."
        },
        {
          name: "NovaTech",
          desc: "Иновативна технологична компания, разработваща съвременни бизнес инструменти."
        }
      ]
    }
  };

  function setPartnersLanguage(lang) {
    const section = document.querySelector("#partners");
    if (!section) return;

    // Заглавие и подзаглавие
    section.querySelector("h2").textContent = partnersTranslations[lang].title;
    section.querySelector(".section-subtitle").textContent = partnersTranslations[lang].subtitle;

    // Всички партньорски карти
    const partnerCards = section.querySelectorAll(".partner-card");

    // fade-out
    partnerCards.forEach((card) => {
      card.style.transition = "opacity 0.4s ease";
      card.style.opacity = "0";
    });

    // след кратка пауза – сменяме съдържанието
    setTimeout(() => {
      partnersTranslations[lang].partners.forEach((partner, i) => {
        if (partnerCards[i]) {
          const nameEl = partnerCards[i].querySelector("h3");
          const descEl = partnerCards[i].querySelector("p");

          if (nameEl) nameEl.textContent = partner.name;
          if (descEl) descEl.textContent = partner.desc;
        }
      });

      // fade-in с леко закъснение за всяка карта
      partnerCards.forEach((card, i) => {
        setTimeout(() => {
          card.style.opacity = "1";
        }, i * 100);
      });
    }, 400);
  }

  // Бутони за смяна на език
  enBtn.addEventListener("click", () => setPartnersLanguage("en"));
  bgBtn.addEventListener("click", () => setPartnersLanguage("bg"));
});


// ---------------------
// PARTNERS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const partnersTranslations = {
    en: {
      title: "Our Trusted Partners",
      subtitle: "We’re proud to collaborate with these leading brands and organizations."
    },
    bg: {
      title: "Нашите доверени партньори",
      subtitle: "Гордеем се, че си сътрудничим с водещи брандове и организации."
    }
  };

  // Плавна анимация (fade)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Промяна на езика
  function setPartnersLanguage(lang) {
    const section = document.querySelector("#partners");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");

    fadeContent(title, () => (title.textContent = partnersTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = partnersTranslations[lang].subtitle));
  }

  // Бутони за език
  enBtn.addEventListener("click", () => setPartnersLanguage("en"));
  bgBtn.addEventListener("click", () => setPartnersLanguage("bg"));
});


// ---------------------
// AWARDS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const awardsTranslations = {
    en: {
      title: "Our Awards & Achievements",
      subtitle: "Recognizing our dedication to excellence, innovation, and customer satisfaction.",
      awards: [
        {
          title: "Best Consulting Firm 2023",
          text: "Awarded for outstanding business strategy and innovation."
        },
        {
          title: "Excellence in Customer Service",
          text: "Recognized for our exceptional client support and care."
        },
        {
          title: "Top Business Growth 2024",
          text: "Honored for driving rapid and sustainable growth."
        },
        {
          title: "Innovation Award",
          text: "Celebrating creative and forward-thinking business solutions."
        }
      ]
    },
    bg: {
      title: "Нашите награди и постижения",
      subtitle: "Признание за нашата отдаденост на качеството, иновациите и удовлетворението на клиентите.",
      awards: [
        {
          title: "Най-добра консултантска фирма за 2023 г.",
          text: "Наградени за изключителна бизнес стратегия и иновации."
        },
        {
          title: "Отличие за обслужване на клиенти",
          text: "Признати за нашата изключителна подкрепа и грижа към клиентите."
        },
        {
          title: "Най-добър бизнес растеж за 2024 г.",
          text: "Отличени за устойчив и бърз бизнес растеж."
        },
        {
          title: "Награда за иновации",
          text: "Отпразнуваме креативни и иновативни бизнес решения."
        }
      ]
    }
  };

  // Плавен fade ефект
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Промяна на езика
  function setAwardsLanguage(lang) {
    const section = document.querySelector("#awards");
    if (!section) return;

    const title = section.querySelector(".section-title");
    const subtitle = section.querySelector(".section-subtitle");
    const cards = section.querySelectorAll(".award-card");

    fadeContent(title, () => (title.textContent = awardsTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = awardsTranslations[lang].subtitle));

    awardsTranslations[lang].awards.forEach((award, i) => {
      if (cards[i]) {
        fadeContent(cards[i].querySelector("h3"), () => (cards[i].querySelector("h3").textContent = award.title));
        fadeContent(cards[i].querySelector("p"), () => (cards[i].querySelector("p").textContent = award.text));
      }
    });
  }

  // Превключване между EN / BG
  enBtn.addEventListener("click", () => setAwardsLanguage("en"));
  bgBtn.addEventListener("click", () => setAwardsLanguage("bg"));
});






// ---------------------
// BLOG TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const blogTranslations = {
    en: {
      title: "Latest from Our Blog",
      subtitle: "Insights and updates from our consulting experts.",
      posts: [
        {
          title: "Top 5 Strategies for Business Growth",
          text: "Learn how to accelerate your company’s growth with these proven consulting tips."
        },
        {
          title: "Digital Transformation in 2025",
          text: "Discover how new technologies are reshaping the consulting industry."
        },
        {
          title: "Building Strong Client Relationships",
          text: "Effective communication and trust are the keys to long-term success."
        }
      ]
    },
    bg: {
      title: "Последно от нашия блог",
      subtitle: "Полезни съвети и новини от нашите консултантски експерти.",
      posts: [
        {
          title: "Топ 5 стратегии за бизнес растеж",
          text: "Научете как да ускорите растежа на компанията си с доказани консултантски методи."
        },
        {
          title: "Дигиталната трансформация през 2025",
          text: "Открийте как новите технологии променят консултантската индустрия."
        },
        {
          title: "Изграждане на силни отношения с клиенти",
          text: "Ефективната комуникация и доверието са ключът към дългосрочния успех."
        }
      ]
    }
  };

  function setBlogLanguage(lang) {
    const section = document.querySelector("#blog");
    if (!section) return;

    // Заглавие и подзаглавие
    section.querySelector("h2").textContent = blogTranslations[lang].title;
    section.querySelector(".section-subtitle").textContent = blogTranslations[lang].subtitle;

    // Карти на публикациите
    const blogCards = section.querySelectorAll(".blog-card");
    blogTranslations[lang].posts.forEach((post, i) => {
      if (blogCards[i]) {
        blogCards[i].querySelector("h3").textContent = post.title;
        blogCards[i].querySelector("p").textContent = post.text;
      }
    });
  }

  // Превключване на език
  enBtn.addEventListener("click", () => setBlogLanguage("en"));
  bgBtn.addEventListener("click", () => setBlogLanguage("bg"));
});


// ---------------------
// BLOG TRANSLATION (EN / BG) + Fade Animation (Fixed Version)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const blogTranslations = {
    en: {
      title: "Latest Insights",
      subtitle: "Stay updated with our business tips, success stories, and industry news.",
      posts: [
        {
          title: "How to Build a Winning Business Strategy",
          text: "Discover the key elements of developing a strong strategy that drives growth and success.",
          button: "Read More"
        },
        {
          title: "Top 5 Market Trends for 2025",
          text: "Explore the biggest shifts that will shape the future of business and consulting.",
          button: "Read More"
        },
        {
          title: "Boost Your Team’s Productivity",
          text: "Learn simple yet powerful techniques to keep your team motivated and efficient.",
          button: "Read More"
        }
      ]
    },
    bg: {
      title: "Последно от нашия блог",
      subtitle: "Останете информирани с нашите бизнес съвети, истории на успеха и новини от индустрията.",
      posts: [
        {
          title: "Как да изградите успешна бизнес стратегия",
          text: "Открийте ключовите елементи за силна стратегия, която води до растеж и успех.",
          button: "Прочетете още"
        },
        {
          title: "Топ 5 пазарни тенденции за 2025 година",
          text: "Разгледайте основните промени, които ще оформят бъдещето на бизнеса и консултирането.",
          button: "Прочетете още"
        },
        {
          title: "Как да повишите продуктивността на екипа си",
          text: "Научете прости, но ефективни техники за мотивация и ефективност на вашия екип.",
          button: "Прочетете още"
        }
      ]
    }
  };

  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  function setBlogLanguage(lang) {
    const section = document.querySelector("#blog");
    if (!section) return;

    // Заглавие и подзаглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = blogTranslations[lang].title;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = blogTranslations[lang].subtitle;
    });

    // Промяна на публикациите
    const blogPosts = section.querySelectorAll(".blog-post");
    blogTranslations[lang].posts.forEach((post, i) => {
      if (blogPosts[i]) {
        const content = blogPosts[i].querySelector(".blog-content");

        fadeContent(content.querySelector("h3"), () => {
          content.querySelector("h3").textContent = post.title;
        });
        fadeContent(content.querySelector("p"), () => {
          content.querySelector("p").textContent = post.text;
        });
        fadeContent(content.querySelector(".btn-read"), () => {
          content.querySelector(".btn-read").textContent = post.button;
        });
      }
    });
  }

  // Превключване между EN / BG
  enBtn.addEventListener("click", () => setBlogLanguage("en"));
  bgBtn.addEventListener("click", () => setBlogLanguage("bg"));
});


// ---------------------
// PRICING TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const pricingTranslations = {
    en: {
      title: "Our Pricing Plans",
      subtitle: "Choose the plan that best fits your business needs.",
      plans: [
        {
          name: "Basic Plan",
          price: "$199 / month",
          features: ["✔ Business Consultation", "✔ Financial Planning", "✖ Marketing Strategy", "✖ Ongoing Support"],
          button: "Choose Plan"
        },
        {
          name: "Professional Plan",
          price: "$399 / month",
          features: ["✔ Full Business Consultation", "✔ Financial & Market Analysis", "✔ Marketing Strategy", "✖ Dedicated Consultant"],
          button: "Choose Plan"
        },
        {
          name: "Enterprise Plan",
          price: "Custom",
          features: ["✔ Complete Business Solutions", "✔ Dedicated Expert Consultant", "✔ Full Support 24/7", "✔ Growth Strategy Reports"],
          button: "Choose Plan"
        }
      ]
    },
    bg: {
      title: "Нашите ценови пакети",
      subtitle: "Изберете плана, който най-добре отговаря на нуждите на вашия бизнес.",
      plans: [
        {
          name: "Основен план",
          price: "334 лв / месец",
          features: ["✔ Бизнес консултация", "✔ Имейл поддръжка", "✖ Месечни отчети", "✖ Отчеты о стратегии роста"],
          button: "Избери план"
        },
        {
          name: "Професионален план",
          price: "671 лв / месец",
          features: ["✔ Всички функции от основния", "✔ Личен консултант", "✔ Приоритетна поддръжка", "✖ Специализированный консультант"],
          button: "Избери план"
        },
        {
          name: "Корпоративен план",
          price: "По договаряне",
          features: ["✔ Индивидуални решения", "✔ 24/7 поддръжка", "✔ Обучения за екипа", "✔ Отчеты о стратегии роста"],
          button: "Избери план"
        }
      ]
    }
  };

  function setPricingLanguage(lang) {
    const section = document.querySelector("#pricing");
    if (!section) return;

    section.querySelector("h2").textContent = pricingTranslations[lang].title;
    section.querySelector(".subtitle").textContent = pricingTranslations[lang].subtitle;

    const cards = section.querySelectorAll(".pricing-card");
    pricingTranslations[lang].plans.forEach((plan, i) => {
      if (cards[i]) {
        cards[i].querySelector("h3").textContent = plan.name;
        cards[i].querySelector(".price").textContent = plan.price;

        const features = cards[i].querySelectorAll("ul li");
        plan.features.forEach((f, index) => {
          if (features[index]) features[index].textContent = f;
        });

        cards[i].querySelector(".btn").textContent = plan.button;
      }
    });
  }

  // Buttons
  enBtn.addEventListener("click", () => setPricingLanguage("en"));
  bgBtn.addEventListener("click", () => setPricingLanguage("bg"));
});


// ---------------------
// PRICING TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const pricingTranslations = {
    en: {
      title: "Our Pricing Plans",
      subtitle: "Choose the plan that best fits your business needs.",
      plans: [
        {
          name: "Basic Plan",
          price: "$199 / month",
          features: ["✔ Business Consultation", "✔ Financial Planning", "✖ Marketing Strategy", "✖ Ongoing Support"],
          button: "Choose Plan"
        },
        {
          name: "Professional Plan",
          price: "$399 / month",
          features: ["✔ Full Business Consultation", "✔ Financial & Market Analysis", "✔ Marketing Strategy", "✖ Dedicated Consultant"],
          button: "Choose Plan"
        },
        {
          name: "Enterprise Plan",
          price: "Custom",
          features: ["✔ Complete Business Solutions", "✔ Dedicated Expert Consultant", "✔ Full Support 24/7", "✔ Growth Strategy Reports"],
          button: "Choose Plan"
        }
      ]
    },
    bg: {
      title: "Нашите ценови пакети",
      subtitle: "Изберете плана, който най-добре отговаря на нуждите на вашия бизнес.",
      plans: [
        {
          name: "Основен план",
          price: "334 лв / месец",
          features: ["✔ Бизнес консултация", "✔ Имейл поддръжка", "✖ Месечни отчети", "✖ Отчеты о стратегии роста"],
          button: "Избери план"
        },
        {
          name: "Професионален план",
          price: "671 лв / месец",
          features: ["✔ Всички функции от основния", "✔ Личен консултант", "✔ Приоритетна поддръжка", "✖ Специализированный консультант"],
          button: "Избери план"
        },
        {
          name: "Корпоративен план",
          price: "По договаряне",
          features: ["✔ Индивидуални решения", "✔ 24/7 поддръжка", "✔ Обучения за екипа", "✔ Отчеты о стратегии роста"],
          button: "Избери план"
        }
      ]
    }
  };

  // Функция за плавно изчезване и появяване
  function fadeContent(element, callback) {
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  function setPricingLanguage(lang) {
    const section = document.querySelector("#pricing");
    if (!section) return;

    const h2 = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");

    // Заглавие и подзаглавие
    fadeContent(h2, () => (h2.textContent = pricingTranslations[lang].title));
    fadeContent(subtitle, () => (subtitle.textContent = pricingTranslations[lang].subtitle));

    // Карти с цени
    const cards = section.querySelectorAll(".pricing-card");
    pricingTranslations[lang].plans.forEach((plan, i) => {
      if (cards[i]) {
        fadeContent(cards[i].querySelector("h3"), () => {
          cards[i].querySelector("h3").textContent = plan.name;
        });
        fadeContent(cards[i].querySelector(".price"), () => {
          cards[i].querySelector(".price").textContent = plan.price;
        });

        const features = cards[i].querySelectorAll("ul li");
        plan.features.forEach((feature, index) => {
          if (features[index]) fadeContent(features[index], () => (features[index].textContent = feature));
        });

        fadeContent(cards[i].querySelector(".btn"), () => {
          cards[i].querySelector(".btn").textContent = plan.button;
        });
      }
    });
  }

  // Превключване на езика
  enBtn.addEventListener("click", () => setPricingLanguage("en"));
  bgBtn.addEventListener("click", () => setPricingLanguage("bg"));
});


// ---------------------
// JOURNEY TRANSLATION (EN / BG)
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const journeyTranslations = {
    en: {
      title: "Our Journey",
      subtitle: "A look back at our milestones and growth through the years.",
      milestones: [
        {
          title: "2016 Foundation of ConsultPro",
          subtitle: "Company Founded",
          text: "ConsultPro began its journey as a small consultancy firm with a vision to empower businesses worldwide."
        },
        {
          title: "2018 International Expansion",
          subtitle: "First Major Client",
          text: "We secured our first international client and expanded our services to financial and IT sectors."
        },
        {
          title: "2020 Innovation & Growth",
          subtitle: "Global Expansion",
          text: "Our consulting team grew across Europe, establishing partnerships with global enterprises."
        },
        {
          title: "2023",
          subtitle: "100+ Projects Completed",
          text: "Celebrated a major milestone — over 100 successful consulting projects delivered worldwide."
        },
        {
          title: "2025",
          subtitle: "Innovation & Digital Future",
          text: "ConsultPro continues to lead the way in digital transformation and business innovation."
        }
      ]
    },
    bg: {
      title: "Нашето пътуване",
      subtitle: "Поглед назад към нашите постижения и развитие през годините.",
      milestones: [
        {
          title: "2016 Създаване на ConsultPro",
          subtitle: "Основана компания",
          text: "ConsultPro започна своето пътешествие като малка консултантска фирма с визия да подкрепя бизнеса по света."
        },
        {
          title: "2018 Международно разширяване",
          subtitle: "Първи голям клиент",
          text: "Спечелихме първия си международен клиент и разширихме услугите си във финансовия и ИТ секторите."
        },
        {
          title: "2020 Иновации и растеж",
          subtitle: "Глобално разрастване",
          text: "Нашият екип от консултанти се разшири в цяла Европа, изграждайки партньорства с водещи компании."
        },
        {
          title: "2023",
          subtitle: "100+ завършени проекта",
          text: "Отбелязахме голям успех — над 100 успешно реализирани консултантски проекта по света."
        },
        {
          title: "2025",
          subtitle: "Иновации и дигитално бъдеще",
          text: "ConsultPro продължава да бъде лидер в дигиталната трансформация и бизнес иновациите."
        }
      ]
    }
  };

  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  function setJourneyLanguage(lang) {
    const section = document.querySelector("#journey");
    if (!section) return;

    // Заглавие и подзаглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = journeyTranslations[lang].title;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = journeyTranslations[lang].subtitle;
    });

    // Превод на timeline елементите
    const items = section.querySelectorAll(".timeline-item");
    journeyTranslations[lang].milestones.forEach((item, i) => {
      if (items[i]) {
        const h3 = items[i].querySelector("h3");
        const h4 = items[i].querySelector("h4");
        const p = items[i].querySelector("p");

        fadeContent(h3, () => (h3.textContent = item.title));
        fadeContent(h4, () => (h4.textContent = item.subtitle));
        fadeContent(p, () => (p.textContent = item.text));
      }
    });
  }

  // Езикови бутони
  enBtn.addEventListener("click", () => setJourneyLanguage("en"));
  bgBtn.addEventListener("click", () => setJourneyLanguage("bg"));
});


// ---------------------
// CAREERS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const careersTranslations = {
    en: {
      title: "Join <span>Our Team</span>",
      subtitle: "We're always looking for passionate and talented professionals to grow with us.",
      jobs: [
        {
          title: "Business Consultant",
          text: "Provide expert advice and insights to help clients improve efficiency and achieve success.",
          list: [
            "3+ years experience in consulting",
            "Strong analytical skills",
            "Excellent communication"
          ],
          btn: "Apply Now"
        },
        {
          title: "Financial Analyst",
          text: "Analyze financial data and develop strategies that help clients grow sustainably.",
          list: [
            "Degree in Finance or Economics",
            "Strong Excel & modeling skills",
            "Detail-oriented mindset"
          ],
          btn: "Apply Now"
        },
        {
          title: "Marketing Manager",
          text: "Lead digital campaigns and branding initiatives to boost our clients’ visibility.",
          list: [
            "5+ years in marketing",
            "Experience with Google Ads & SEO",
            "Creative thinker"
          ],
          btn: "Apply Now"
        }
      ]
    },

    bg: {
      title: "Присъедини се към <span>нашия екип</span>",
      subtitle: "Винаги търсим мотивирани и талантливи професионалисти, които да растат заедно с нас.",
      jobs: [
        {
          title: "Бизнес консултант",
          text: "Предоставяй експертни съвети и решения за подобряване на ефективността и успеха на клиентите.",
          list: [
            "3+ години опит в консултирането",
            "Добри аналитични умения",
            "Отлична комуникация"
          ],
          btn: "Кандидатствай"
        },
        {
          title: "Финансов анализатор",
          text: "Анализирай финансови данни и разработвай стратегии за устойчив растеж на клиентите.",
          list: [
            "Диплома по финанси или икономика",
            "Отлични умения с Excel и моделиране",
            "Внимание към детайла"
          ],
          btn: "Кандидатствай"
        },
        {
          title: "Маркетинг мениджър",
          text: "Ръководи дигитални кампании и инициативи за брандинг с цел подобряване на видимостта на клиентите.",
          list: [
            "5+ години опит в маркетинга",
            "Опит с Google Ads и SEO",
            "Креативно мислене"
          ],
          btn: "Кандидатствай"
        }
      ]
    }
  };

  // --- Плавна анимация при смяна ---
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // --- Основна функция за превод ---
  function setCareersLanguage(lang) {
    const section = document.querySelector("#careers");
    if (!section) return;

    // Заглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").innerHTML = careersTranslations[lang].title;
    });

    // Подзаглавие
    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = careersTranslations[lang].subtitle;
    });

    // Карти (позиции)
    const cards = section.querySelectorAll(".career-card");
    careersTranslations[lang].jobs.forEach((job, i) => {
      if (cards[i]) {
        fadeContent(cards[i].querySelector("h3"), () => {
          cards[i].querySelector("h3").textContent = job.title;
        });

        fadeContent(cards[i].querySelector("p"), () => {
          cards[i].querySelector("p").textContent = job.text;
        });

        // Превеждаме списъка с умения
        const listItems = cards[i].querySelectorAll("ul li");
        job.list.forEach((liText, j) => {
          if (listItems[j]) {
            fadeContent(listItems[j], () => {
              listItems[j].innerHTML = `<i class="fas fa-check-circle"></i> ${liText}`;
            });
          }
        });

        // Превеждаме бутона
        fadeContent(cards[i].querySelector(".btn-apply"), () => {
          cards[i].querySelector(".btn-apply").textContent = job.btn;
        });
      }
    });
  }

  // --- Превключване между EN / BG ---
  enBtn.addEventListener("click", () => setCareersLanguage("en"));
  bgBtn.addEventListener("click", () => setCareersLanguage("bg"));
});


// ---------------------
// CAREERS TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const careersTranslations = {
    en: {
      title: "Join <span>Our Team</span>",
      subtitle: "We're always looking for passionate and talented professionals to grow with us.",
      jobs: [
        {
          title: "Business Consultant",
          text: "Provide expert advice and insights to help clients improve efficiency and achieve success.",
          list: [
            "3+ years experience in consulting",
            "Strong analytical skills",
            "Excellent communication"
          ],
          btn: "Apply Now"
        },
        {
          title: "Financial Analyst",
          text: "Analyze financial data and develop strategies that help clients grow sustainably.",
          list: [
            "Degree in Finance or Economics",
            "Strong Excel & modeling skills",
            "Detail-oriented mindset"
          ],
          btn: "Apply Now"
        },
        {
          title: "Marketing Manager",
          text: "Lead digital campaigns and branding initiatives to boost our clients’ visibility.",
          list: [
            "5+ years in marketing",
            "Experience with Google Ads & SEO",
            "Creative thinker"
          ],
          btn: "Apply Now"
        }
      ]
    },

    bg: {
      title: "Присъедини се към <span>нашия екип</span>",
      subtitle: "Винаги търсим мотивирани и талантливи професионалисти, които да растат заедно с нас.",
      jobs: [
        {
          title: "Бизнес консултант",
          text: "Предоставяй експертни съвети и решения за подобряване на ефективността и успеха на клиентите.",
          list: [
            "3+ години опит в консултирането",
            "Добри аналитични умения",
            "Отлична комуникация"
          ],
          btn: "Кандидатствай"
        },
        {
          title: "Финансов анализатор",
          text: "Анализирай финансови данни и разработвай стратегии за устойчив растеж на клиентите.",
          list: [
            "Диплома по финанси или икономика",
            "Отлични умения с Excel и моделиране",
            "Внимание към детайла"
          ],
          btn: "Кандидатствай"
        },
        {
          title: "Маркетинг мениджър",
          text: "Ръководи дигитални кампании и инициативи за брандинг с цел подобряване на видимостта на клиентите.",
          list: [
            "5+ години опит в маркетинга",
            "Опит с Google Ads и SEO",
            "Креативно мислене"
          ],
          btn: "Кандидатствай"
        }
      ]
    }
  };

  // --- Плавна анимация при смяна ---
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // --- Основна функция за превод ---
  function setCareersLanguage(lang) {
    const section = document.querySelector("#careers");
    if (!section) return;

    // Заглавие
    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").innerHTML = careersTranslations[lang].title;
    });

    // Подзаглавие
    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = careersTranslations[lang].subtitle;
    });

    // Карти (позиции)
    const cards = section.querySelectorAll(".career-card");
    careersTranslations[lang].jobs.forEach((job, i) => {
      if (cards[i]) {
        fadeContent(cards[i].querySelector("h3"), () => {
          cards[i].querySelector("h3").textContent = job.title;
        });

        fadeContent(cards[i].querySelector("p"), () => {
          cards[i].querySelector("p").textContent = job.text;
        });

        // Превеждаме списъка с умения
        const listItems = cards[i].querySelectorAll("ul li");
        job.list.forEach((liText, j) => {
          if (listItems[j]) {
            fadeContent(listItems[j], () => {
              listItems[j].innerHTML = `<i class="fas fa-check-circle"></i> ${liText}`;
            });
          }
        });

        // Превеждаме бутона
        fadeContent(cards[i].querySelector(".btn-apply"), () => {
          cards[i].querySelector(".btn-apply").textContent = job.btn;
        });
      }
    });
  }

  // --- Превключване между EN / BG ---
  enBtn.addEventListener("click", () => setCareersLanguage("en"));
  bgBtn.addEventListener("click", () => setCareersLanguage("bg"));
});


// ---------------------
// CTA-FINAL TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const ctaTranslations = {
    en: {
      title: "Ready to Take Your Business to the Next Level?",
      text: "Our experts are here to help you grow, innovate, and succeed in every step of your journey.",
      button: "Contact Us"
    },
    bg: {
      title: "Готови ли сте да изведете бизнеса си на следващо ниво?",
      text: "Нашите експерти са тук, за да ви помогнат да растете, иновирате и постигате успех на всяка стъпка от вашето пътуване.",
      button: "Свържете се с нас"
    }
  };

  // --- Плавна анимация при смяна ---
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // --- Основна функция за превод ---
  function setCTALanguage(lang) {
    const section = document.querySelector(".cta-final");
    if (!section) return;

    const title = section.querySelector("h2");
    const text = section.querySelector("p");
    const button = section.querySelector(".btn-primary");

    fadeContent(title, () => {
      title.textContent = ctaTranslations[lang].title;
    });

    fadeContent(text, () => {
      text.textContent = ctaTranslations[lang].text;
    });

    fadeContent(button, () => {
      button.textContent = ctaTranslations[lang].button;
    });
  }

  // --- Превключване между EN / BG ---
  enBtn.addEventListener("click", () => setCTALanguage("en"));
  bgBtn.addEventListener("click", () => setCTALanguage("bg"));
});


// ---------------------
// CONTACT SECTION TRANSLATION (EN / BG) + Fade Animation (Safe Version)
// ---------------------
(function () {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  // Проверка дали бутоните съществуват
  if (!enBtn || !bgBtn) return;

  const translations = {
    en: {
      contactTitle: "Contact Us",
      contactSubtitle: "We’d love to hear from you. Get in touch with our team.",
      contactHeader: "Get in Touch",
      contactText: "Whether you’re looking for business advice or collaboration, we’re here to help.",
      address: "15A Business Street, London, United Kingdom",
      email: "info@consultpro.co.uk",
      phone: "+44 20 1234 5678",
      hours: "Mon – Fri: 9:00 – 18:00",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendBtn: "Send Message"
    },
    bg: {
      contactTitle: "Свържете се с нас",
      contactSubtitle: "Ще се радваме да се чуем с вас. Свържете се с нашия екип.",
      contactHeader: "Връзка с нас",
      contactText: "Независимо дали търсите бизнес съвет или партньорство, ние сме тук, за да помогнем.",
      address: "ул. Бизнес 15А, Лондон, Великобритания",
      email: "info@consultpro.bg",
      phone: "+359 888 123 456",
      hours: "Пон – Пет: 9:00 – 18:00",
      formName: "Вашето име",
      formEmail: "Вашият имейл",
      formMessage: "Вашето съобщение",
      sendBtn: "Изпрати съобщение"
    }
  };

  // Плавна анимация
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  function setLanguage(lang) {
    const section = document.querySelector("#contact");
    if (!section) return;

    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = translations[lang].contactTitle;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = translations[lang].contactSubtitle;
    });

    const info = section.querySelector(".contact-info");
    if (info) {
      fadeContent(info.querySelector("h3"), () => {
        info.querySelector("h3").textContent = translations[lang].contactHeader;
      });
      fadeContent(info.querySelector("p"), () => {
        info.querySelector("p").textContent = translations[lang].contactText;
      });

      const ul = info.querySelectorAll("li");
      if (ul.length >= 4) {
        fadeContent(ul[0], () => (ul[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${translations[lang].address}`));
        fadeContent(ul[1], () => (ul[1].innerHTML = `<i class="fas fa-envelope"></i> ${translations[lang].email}`));
        fadeContent(ul[2], () => (ul[2].innerHTML = `<i class="fas fa-phone"></i> ${translations[lang].phone}`));
        fadeContent(ul[3], () => (ul[3].innerHTML = `<i class="fas fa-clock"></i> ${translations[lang].hours}`));
      }
    }

    const form = section.querySelector("form");
    if (form) {
      fadeContent(form, () => {
        form.querySelector('input[placeholder]').placeholder = translations[lang].formName;
        form.querySelector('input[type="email"]').placeholder = translations[lang].formEmail;
        form.querySelector("textarea").placeholder = translations[lang].formMessage;
        form.querySelector("button").textContent = translations[lang].sendBtn;
      });
    }
  }

  // ✅ Добавяме само по 1 слушател, без да закачаме DOMContentLoaded
  enBtn.addEventListener("click", () => setLanguage("en"));
  bgBtn.addEventListener("click", () => setLanguage("bg"));
})();


// ---------------------
// NEWSLETTER TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const newsletterTranslations = {
    en: {
      title: "Subscribe to Our Newsletter",
      subtitle: "Stay up to date with the latest tips, ideas, and news from our company.",
      placeholder: "Enter your email address",
      button: "Subscribe",
      note: "We respect your privacy. Unsubscribe anytime."
    },
    bg: {
      title: "Абонирайте се за нашия бюлетин",
      subtitle: "Бъдете в крак с най-новите съвети, идеи и новини от нашата компания.",
      placeholder: "Въведете своя имейл адрес",
      button: "Абонирай се",
      note: "Ние уважаваме вашата поверителност. Можете да се отпишете по всяко време."
    }
  };

  // Плавен преход (fade)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Промяна на езика
  function setNewsletterLanguage(lang) {
    const section = document.querySelector(".newsletter");
    if (!section) return;

    const title = section.querySelector("h2");
    const subtitle = section.querySelector(".subtitle");
    const input = section.querySelector("input[type='email']");
    const button = section.querySelector("button, .btn-subscribe");
    const note = section.querySelector(".note, .privacy-text, p:last-of-type");

    if (title)
      fadeContent(title, () => (title.textContent = newsletterTranslations[lang].title));
    if (subtitle)
      fadeContent(subtitle, () => (subtitle.textContent = newsletterTranslations[lang].subtitle));
    if (input)
      fadeContent(input, () => (input.placeholder = newsletterTranslations[lang].placeholder));
    if (button)
      fadeContent(button, () => (button.textContent = newsletterTranslations[lang].button));
    if (note)
      fadeContent(note, () => (note.textContent = newsletterTranslations[lang].note));
  }

  // Бутони за смяна
  enBtn.addEventListener("click", () => setNewsletterLanguage("en"));
  bgBtn.addEventListener("click", () => setNewsletterLanguage("bg"));
});


// ---------------------
// MAP SECTION TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const mapTranslations = {
    en: {
      title: "Find Us on the Map",
      subtitle: "Our office is located in the heart of London — visit us anytime.",
      addressTitle: "Office Address",
      addressText: "15A Business Street, London, United Kingdom",
      hoursTitle: "Working Hours",
      hoursText: "Monday – Friday: 9:00 AM – 6:00 PM",
      button: "Get Directions"
    },
    bg: {
      title: "Намерете ни на картата",
      subtitle: "Нашият офис се намира в сърцето на Лондон — заповядайте по всяко време.",
      addressTitle: "Адрес на офиса",
      addressText: "ул. Бизнес 15А, Лондон, Великобритания",
      hoursTitle: "Работно време",
      hoursText: "Понеделник – Петък: 9:00 – 18:00",
      button: "Виж на картата"
    }
  };

  // Плавен ефект (fade)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Смяна на езика за Map секцията
  function setMapLanguage(lang) {
    const section = document.querySelector("#map-section");
    if (!section) return;

    fadeContent(section.querySelector("h2"), () => {
      section.querySelector("h2").textContent = mapTranslations[lang].title;
    });

    fadeContent(section.querySelector(".subtitle"), () => {
      section.querySelector(".subtitle").textContent = mapTranslations[lang].subtitle;
    });

    fadeContent(section.querySelector(".map-info h3.address-title"), () => {
      section.querySelector(".map-info h3.address-title").textContent = mapTranslations[lang].addressTitle;
    });

    fadeContent(section.querySelector(".map-info p.address-text"), () => {
      section.querySelector(".map-info p.address-text").textContent = mapTranslations[lang].addressText;
    });

    fadeContent(section.querySelector(".map-info h3.hours-title"), () => {
      section.querySelector(".map-info h3.hours-title").textContent = mapTranslations[lang].hoursTitle;
    });

    fadeContent(section.querySelector(".map-info p.hours-text"), () => {
      section.querySelector(".map-info p.hours-text").textContent = mapTranslations[lang].hoursText;
    });

    fadeContent(section.querySelector(".btn-map"), () => {
      section.querySelector(".btn-map").textContent = mapTranslations[lang].button;
    });
  }

  // Превключване на езика
  enBtn.addEventListener("click", () => setMapLanguage("en"));
  bgBtn.addEventListener("click", () => setMapLanguage("bg"));
});


// ---------------------
// MAP TITLE TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const mapTitleTranslations = {
    en: "Find Us in London",
    bg: "Намерете ни в Лондон"
  };

  // Функция за плавна анимация (fade)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  // Смяна на езика само за h3
  function setMapTitleLanguage(lang) {
    const title = document.querySelector(".map-section h3");
    if (!title) return;

    fadeContent(title, () => {
      title.textContent = mapTitleTranslations[lang];
    });
  }

  // Превключване на езика
  enBtn.addEventListener("click", () => setMapTitleLanguage("en"));
  bgBtn.addEventListener("click", () => setMapTitleLanguage("bg"));
});


// CHAT WIDGET TRANSLATION (EN / BG) + Fade Animation — работи с твоето HTML
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  if (!enBtn || !bgBtn) {
    // ако нямаш бутони за език, прекратяваме — няма смисъл да продължаваме
    return;
  }

  const chatTranslations = {
    en: {
      header: "Ask a Consultant",
      subtitle: "Chat with our team for quick support.", // ако добавиш subtitle, ще се превежда
      welcome: "Hello 👋! How can we assist you today?",
      placeholder: "Type your message...",
      sendTitle: "Send message",
    },
    bg: {
      header: "Попитай консултант",
      subtitle: "Чат със съпорта за бърза помощ.",
      welcome: "Здравейте 👋! Как можем да ви помогнем днес?",
      placeholder: "Въведете съобщение...",
      sendTitle: "Изпрати съобщение",
    }
  };

  // fade helper (работи само ако елемент е намерен)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.35s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 360);
  }

  // Основна функция - адаптирана за твоя HTML
  function setChatLanguage(lang) {
    const chat = document.querySelector(".chat-widget");
    if (!chat) return;

    // header h4
    const header = chat.querySelector(".chat-header h4");
    // (опционален) subtitle — ако решиш да добавиш <p class="chat-subtitle">...
    const subtitle = chat.querySelector(".chat-subtitle");

    // параграфът с приветствието (в твоя HTML има <div class="chat-body"><p>... </p> ...)
    const welcomeParagraph = chat.querySelector(".chat-body > p");

    // input и бутон
    const input = document.getElementById("chatInput") || chat.querySelector("input[type='text']");
    const sendBtn = document.getElementById("sendBtn") || chat.querySelector("button");

    // превод -> header
    fadeContent(header, () => {
      if (header) header.textContent = chatTranslations[lang].header;
    });

    // превод -> subtitle (ако има)
    fadeContent(subtitle, () => {
      if (subtitle) subtitle.textContent = chatTranslations[lang].subtitle;
    });

    // превод -> welcome message
    fadeContent(welcomeParagraph, () => {
      if (welcomeParagraph) welcomeParagraph.textContent = chatTranslations[lang].welcome;
    });

    // placeholder -> input (без fade)
    if (input) input.placeholder = chatTranslations[lang].placeholder;

    // бутон: не сменяме innerHTML (за да не чупим иконката), но слагаме title/aria-label
    if (sendBtn) {
      fadeContent(sendBtn, () => {
        // пазим евентуално вътрешното съдържание (иконата) — задаваме title/aria-label
        sendBtn.setAttribute("title", chatTranslations[lang].sendTitle);
        sendBtn.setAttribute("aria-label", chatTranslations[lang].sendTitle);
      });
    }
  }

  // слушатели
  enBtn.addEventListener("click", () => setChatLanguage("en"));
  bgBtn.addEventListener("click", () => setChatLanguage("bg"));

  // --- (опция) при стартиране - можем да приложим текущ език (например EN)
  // setChatLanguage('en');
});


// ---------------------
// FOOTER TRANSLATION (EN / BG) + Fade Animation
// ---------------------
document.addEventListener("DOMContentLoaded", () => {
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  const footerTranslations = {
    en: {
      brand: "ConsultPro",
      tagline: "Your trusted partner for business growth and innovation.",
      quickLinks: "Quick Links",
      links: ["Home", "Services", "Portfolio", "Contact"],
      contactTitle: "Contact Info",
      location: "London, UK",
      phone: "+359 888 123 456",
      email: "info@consultpro.co.uk",
      rights: "© 2025 ConsultPro. All rights reserved."
    },
    bg: {
      brand: "ConsultPro",
      tagline: "Вашият доверен партньор за бизнес растеж и иновации.",
      quickLinks: "Бързи връзки",
      links: ["Начало", "Услуги", "Портфолио", "Контакт"],
      contactTitle: "Контактна информация",
      location: "Лондон, Великобритания",
      phone: "+359 888 123 456",
      email: "info@consultpro.co.uk",
      rights: "© 2025 ConsultPro. Всички права запазени."
    }
  };

  // Плавна анимация (fade)
  function fadeContent(element, callback) {
    if (!element) return;
    element.style.transition = "opacity 0.4s ease";
    element.style.opacity = "0";
    setTimeout(() => {
      callback();
      element.style.opacity = "1";
    }, 400);
  }

  function setFooterLanguage(lang) {
    const footer = document.querySelector(".footer");
    if (!footer) return;

    const logo = footer.querySelector(".footer-logo h2");
    const tagline = footer.querySelector(".footer-logo p");
    const quickLinks = footer.querySelector(".footer-links h3");
    const linkItems = footer.querySelectorAll(".footer-links ul li a");
    const contactTitle = footer.querySelector(".footer-contact h3");
    const contactPs = footer.querySelectorAll(".footer-contact p");
    const rights = footer.querySelector(".footer-bottom p");

    // Промяна с плавен преход
    fadeContent(tagline, () => (tagline.textContent = footerTranslations[lang].tagline));
    fadeContent(quickLinks, () => (quickLinks.textContent = footerTranslations[lang].quickLinks));
    fadeContent(contactTitle, () => (contactTitle.textContent = footerTranslations[lang].contactTitle));
    fadeContent(rights, () => (rights.textContent = footerTranslations[lang].rights));

    // Превод на линкове
    linkItems.forEach((link, i) => {
      if (footerTranslations[lang].links[i]) {
        fadeContent(link, () => (link.textContent = footerTranslations[lang].links[i]));
      }
    });

    // Промяна на контактна информация (с икони вътре)
    if (contactPs[0]) fadeContent(contactPs[0], () => (contactPs[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${footerTranslations[lang].location}`));
    if (contactPs[1]) fadeContent(contactPs[1], () => (contactPs[1].innerHTML = `<i class="fas fa-phone"></i> ${footerTranslations[lang].phone}`));
    if (contactPs[2]) fadeContent(contactPs[2], () => (contactPs[2].innerHTML = `<i class="fas fa-envelope"></i> ${footerTranslations[lang].email}`));
  }

  // Бутони за език
  enBtn.addEventListener("click", () => setFooterLanguage("en"));
  bgBtn.addEventListener("click", () => setFooterLanguage("bg"));


  /* ========== FIX: Responsive language buttons & mobile resizing ========== */

// Функция за динамично позициониране на бутоните с флагове
function adjustLanguageSwitcher() {
  const langSwitcher = document.querySelector('.language-switcher');
  const header = document.querySelector('.header');
  
  if (!langSwitcher || !header) return;

  // Изчисляваме позицията на флаговете спрямо ширината на екрана
  const screenWidth = window.innerWidth;
  if (screenWidth <= 768) {
    langSwitcher.style.position = 'absolute';
    langSwitcher.style.top = '12px';
    langSwitcher.style.right = '10px';
    langSwitcher.style.transform = 'scale(0.85)';
  } else {
    // Връщаме към нормалната позиция за десктоп
    langSwitcher.style.position = 'relative';
    langSwitcher.style.top = '0';
    langSwitcher.style.right = '0';
    langSwitcher.style.transform = 'scale(1)';
  }
}

// След зареждане на страницата
window.addEventListener('load', adjustLanguageSwitcher);

// При промяна на размера или ориентацията (portrait/landscape)
window.addEventListener('resize', adjustLanguageSwitcher);
window.addEventListener('orientationchange', adjustLanguageSwitcher);


  // Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});



// Активиране на избраното знаме
const langBtns = document.querySelectorAll(".lang-btn");
langBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    langBtns.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});


// script.js — чист, тестван и без синтактични грешки
document.addEventListener("DOMContentLoaded", () => {

  /* ------------------------
     HELPERS / TRANSLATIONS
     ------------------------ */
  const translations = {
    en: {
      home: "Home",
      services: "Services",
      stats: "Stats",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      pricing: "Pricing",
      contact: "Contact",
      map: "Map",
      heroTitle: "Grow Your Business with ConsultPro",
      heroText: "We provide expert consulting services to help you achieve sustainable growth and success.",
      heroBtn: "Get Started"
    },
    bg: {
      home: "Начало",
      services: "Услуги",
      stats: "Статистика",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта",
      heroTitle: "Развий своя бизнес с ConsultPro",
      heroText: "Ние предоставяме експертни консултантски услуги за устойчив растеж и успех.",
      heroBtn: "Започни сега"
    }
  };

  /* ------------------------
     ADJUST LANGUAGE SWITCHER POSITION (responsive)
     ------------------------ */
  function adjustLanguageSwitcher() {
    const langSwitcher = document.querySelector('.language-switcher');
    if (!langSwitcher) return;
    const screenWidth = window.innerWidth;
    if (screenWidth <= 768) {
      langSwitcher.style.position = 'absolute';
      langSwitcher.style.top = '12px';
      langSwitcher.style.right = '10px';
      langSwitcher.style.transform = 'scale(0.85)';
    } else {
      langSwitcher.style.position = '';
      langSwitcher.style.top = '';
      langSwitcher.style.right = '';
      langSwitcher.style.transform = '';
    }
  }

  // call once and on resize/orientation change
  adjustLanguageSwitcher();
  window.addEventListener('resize', adjustLanguageSwitcher);
  window.addEventListener('orientationchange', adjustLanguageSwitcher);

  /* ------------------------
     MOBILE MENU TOGGLE
     ------------------------ */
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active'); // CSS should show .nav.active on mobile
    });
  }

  /* ------------------------
     LANGUAGE BUTTONS (visual active state)
     ------------------------ */
  const langBtns = Array.from(document.querySelectorAll('.lang-btn'));
  const enBtn = document.getElementById('en-btn');
  const bgBtn = document.getElementById('bg-btn');

  function setActiveFlagButton(btn) {
    langBtns.forEach(b => b.classList.remove('active'));
    if (btn) btn.classList.add('active');
  }

  langBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      setActiveFlagButton(btn);
      if (btn.id === 'en-btn') changeLanguage('en');
      if (btn.id === 'bg-btn') changeLanguage('bg');
    });
  });

  const initiallyActive = langBtns.find(b => b.classList.contains('active'));
  if (!initiallyActive && enBtn) setActiveFlagButton(enBtn);

  /* ------------------------
     CHANGE TEXTS ON PAGE
     ------------------------ */
  function changeLanguage(lang) {
    const t = translations[lang];
    if (!t) return;

    const map = {
      '#home': t.home, '#services': t.services, '#stats': t.stats,
      '#portfolio': t.portfolio, '#testimonials': t.testimonials,
      '#pricing': t.pricing, '#contact': t.contact, '#map': t.map
    };
    Object.keys(map).forEach(sel => {
      const a = document.querySelector(`.nav a[href="${sel}"]`) || document.querySelector(`a[href="${sel}"]`);
      if (a) a.textContent = map[sel];
    });

    const heroH1 = document.querySelector('.hero-content h1');
    const heroP = document.querySelector('.hero-content p');
    const heroBtn = document.querySelector('.hero-content a');
    if (heroH1) heroH1.textContent = t.heroTitle;
    if (heroP) heroP.textContent = t.heroText;
    if (heroBtn) heroBtn.textContent = t.heroBtn;
  }

  if (enBtn) enBtn.addEventListener('click', () => changeLanguage('en'));
  if (bgBtn) bgBtn.addEventListener('click', () => changeLanguage('bg'));

  /* ------------------------
     Accessibility: keyboard (optional)
     ------------------------ */
  langBtns.forEach(btn => {
    btn.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });


