/* =========================================================
   CONSULTPRO — FULL TRANSLATION + UI + SCROLL EFFECTS
   All-in-one script.js (no other JS files needed)
========================================================= */

/* --------------------------
   1) TRANSLATION DATA
-------------------------- */
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

    /* Services */
    services: {
      card1: { title: "Business Strategy", text: "Tailored strategies to help your company achieve sustainable growth and efficiency." },
      card2: { title: "Financial Consulting", text: "Expert financial planning, analysis, and risk management for your business success." },
      card3: { title: "Market Analysis", text: "In-depth research and insights into your market to keep you ahead of competitors." },
      card4: { title: "Corporate Training", text: "Workshops and training sessions to boost productivity and leadership." },
      card5: { title: "IT Consulting", text: "Support in digital transformation and cloud solutions." },
      card6: { title: "Partnership Development", text: "Building strong partnerships to expand your business worldwide." }
    },

    /* Partners */
    partners: {
      title: "Our Trusted Partners",
      subtitle: "We’re proud to collaborate with these leading brands.",
      img1_alt: "Partner 1",
      img2_alt: "Partner 2",
      img3_alt: "Partner 3",
      img4_alt: "Partner 4",
      img5_alt: "Partner 5"
    },

    /* Awards */
    awards: {
      title: "Our Awards & Achievements",
      subtitle: "Recognizing our dedication to excellence and innovation.",
      card1: { title: "Best Consulting Firm 2023", text: "Awarded for outstanding business strategy and innovation." },
      card2: { title: "Excellence in Customer Service", text: "Recognized for exceptional client support." },
      card3: { title: "Top Business Growth 2024", text: "Honored for driving fast and sustainable growth." },
      card4: { title: "Innovation Award", text: "Celebrating forward-thinking solutions." }
    },

    /* Blog */
    blog: {
      title: "Latest Insights",
      subtitle: "Stay updated with our business tips, stories, and news.",
      post1: { title: "How to Build a Winning Business Strategy", text: "Discover the key elements of building a strong strategy." },
      post2: { title: "Top 5 Market Trends for 2025", text: "Explore major global market shifts." },
      post3: { title: "Boost Your Team’s Productivity", text: "Techniques to increase productivity and motivation." },
      btn: "Read More"
    },

    /* Pricing */
    pricing: {
      title: "Our Pricing Plans",
      subtitle: "Choose a plan that fits your business.",
      basic: { title: "Basic" },
      standard: { title: "Standard" },
      premium: { title: "Premium" },
      chooseBtn: "Choose Plan",
      btn: "Choose Plan"
    },

    /* Journey */
    journey: {
      title: "Our Journey",
      subtitle: "A look back at our milestones.",
      step1: { title: "2016 Foundation of ConsultPro", subtitle: "Company Founded", text: "ConsultPro began as a small consultancy firm." },
      step2: { title: "2018 International Expansion", subtitle: "First Major Client", text: "We expanded into finance and IT." },
      step3: { title: "2020 Innovation & Growth", subtitle: "Global Expansion", text: "We grew into European markets." },
      step4: { title: "2023", subtitle: "100+ Projects Completed", text: "We reached over 100 successful projects." },
      step5: { title: "2025", subtitle: "Innovation & Digital Future", text: "Leading digital transformation." }
    },

    /* Careers */
    careers: {
      title: "Join Our Team",
      subtitle1: "We're always looking for passionate professionals.",
      apply: "Apply Now",
      position1: { title: "Business Consultant", text: "Provide expert insights and support." },
      position2: { title: "Financial Analyst", text: "Analyze financial data and guide growth." },
      position3: { title: "Marketing Manager", text: "Lead campaigns and branding efforts." }
    },

    /* Contact */
    contact: {
      title: "Contact Us",
      subtitle: "We’d love to hear from you.",
      infoTitle: "Get in Touch",
      infoText: "Whether you need advice or collaboration — we’re here.",
      address: "15A Business Street, Sofia, Bulgaria",
      email: "info@consultpro.com",
      phone: "+44 888 123 456",
      hours: "Mon – Fri: 9:00 – 18:00",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendBtn: "Send Message"
    },

    /* Map */
    map: { title: "Find Us in London" },

    /* Newsletter */
    newsletter: {
      title: "Subscribe to Our Newsletter",
      subtitle: "Stay updated with insights and offers.",
      placeholder: "Enter your email address",
      subscribeBtn: "Subscribe",
      note: "We respect your privacy. Unsubscribe anytime."
    },

    /* Footer */
    footer: {
      tagline: "Your trusted partner for business growth.",
      quicklinks: "Quick Links",
      link: {
        home: "Home",
        services: "Services",
        portfolio: "Portfolio",
        contact: "Contact"
      },
      contact: "Contact Info",
      address: "London, UK",
      phone: "+44 888 123 456",
      email: "info@consultpro.co.uk",
      rights: "© 2025 ConsultPro. All rights reserved."
    },

    /* Chat */
    chat: {
      title: "Ask a Consultant",
      greeting: "Hello! How can we assist you today?",
      placeholder: "Type your message..."
    }
  },

  /* =====================================================
     BULGARIAN TRANSLATION
  ===================================================== */
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
      title: "Развий своя бизнес с <span>ConsultPro</span>",
      text: "Ние предлагаме експертни консултантски услуги за стабилен растеж.",
      btn: "Започни"
    },

    services: {
      card1: { title: "Бизнес стратегия", text: "Персонализирани стратегии за устойчив растеж." },
      card2: { title: "Финансови консултации", text: "Планиране, анализ и управление на риска." },
      card3: { title: "Пазарен анализ", text: "Проучване и пазарни инсайти." },
      card4: { title: "Корпоративно обучение", text: "Обучения за продуктивност и лидерство." },
      card5: { title: "ИТ консултиране", text: "Цифрова трансформация и облачни решения." },
      card6: { title: "Развитие на партньорства", text: "Изграждане на глобални бизнес партньорства." }
    },

    partners: {
      title: "Нашите доверени партньори",
      subtitle: "Гордеем се с нашето сътрудничество.",
      img1_alt: "Партньор 1",
      img2_alt: "Партньор 2",
      img3_alt: "Партньор 3",
      img4_alt: "Партньор 4",
      img5_alt: "Партньор 5"
    },

    awards: {
      title: "Нашите награди",
      subtitle: "Признание за иновации и качество.",
      card1: { title: "Най-добра консултантска фирма 2023", text: "За изключителни стратегии и иновации." },
      card2: { title: "Отличие за обслужване", text: "За висококачествена клиентска грижа." },
      card3: { title: "Най-бърз растеж 2024", text: "За устойчив и бърз растеж." },
      card4: { title: "Иновационна награда", text: "За креативни бизнес решения." }
    },

    blog: {
      title: "Последни статии",
      subtitle: "Новини, съвети и анализи.",
      post1: { title: "Как да създадете успешна бизнес стратегия", text: "Основни елементи на силната стратегия." },
      post2: { title: "Топ 5 пазарни тенденции за 2025", text: "Ключови глобални промени." },
      post3: { title: "Увеличете продуктивността", text: "Техники за по-ефективен екип." },
      btn: "Прочети още"
    },

    pricing: {
      title: "Планове и цени",
      subtitle: "Изберете план според вашите нужди.",
      basic: { title: "Базов" },
      standard: { title: "Стандарт" },
      premium: { title: "Премиум" },
      chooseBtn: "Избери план",
      btn: "Избери план"
    },

    journey: {
      title: "Нашето пътешествие",
      subtitle: "История и развитие.",
      step1: { title: "2016 – Основаване", subtitle: "Създаване на фирмата", text: "ConsultPro стартира като малък екип." },
      step2: { title: "2018 – Разширяване", subtitle: "Първи големи клиенти", text: "Навлизане във финансовия и ИТ сектор." },
      step3: { title: "2020 – Растеж", subtitle: "Европейски партньорства", text: "Разширяване в Европа." },
      step4: { title: "2023", subtitle: "100+ проекта", text: "Над 100 успешни проекта." },
      step5: { title: "2025", subtitle: "Иновации", text: "Водещи в дигиталната трансформация." }
    },

    careers: {
      title: "Присъедини се към екипа",
      subtitle1: "Търсим мотивирани професионалисти.",
      apply: "Кандидатствай",
      position1: { title: "Бизнес консултант", text: "Консултиране и стратегически насоки." },
      position2: { title: "Финансов анализатор", text: "Анализ на финансови данни." },
      position3: { title: "Маркетинг мениджър", text: "Дигитални кампании и брандинг." }
    },

    contact: {
      title: "Свържете се с нас",
      subtitle: "Очакваме вашето съобщение.",
      infoTitle: "Връзка с нас",
      infoText: "Нашият екип е готов да помогне.",
      address: "ул. Бизнес 15А, София, България",
      email: "info@consultpro.com",
      phone: "+359 888 123 456",
      hours: "Пон – Пет: 9:00 – 18:00",
      formName: "Вашето име",
      formEmail: "Вашият имейл",
      formMessage: "Вашето съобщение",
      sendBtn: "Изпрати"
    },

    map: { title: "Открийте ни в Лондон" },

    newsletter: {
      title: "Абонирайте се за бюлетина",
      subtitle: "Получавайте новини и анализи.",
      placeholder: "Въведете вашия имейл",
      subscribeBtn: "Абонирай се",
      note: "Вашите данни са защитени."
    },

    footer: {
      tagline: "Вашият партньор за растеж.",
      quicklinks: "Бързи връзки",
      link: {
        home: "Начало",
        services: "Услуги",
        portfolio: "Портфолио",
        contact: "Контакт"
      },
      contact: "Контакти",
      address: "Лондон, Великобритания",
      phone: "+44 888 123 456",
      email: "info@consultpro.co.uk",
      rights: "© 2025 ConsultPro. Всички права запазени."
    },

    chat: {
      title: "Попитайте консултант",
      greeting: "Здравейте! Как можем да помогнем?",
      placeholder: "Въведете съобщение..."
    }
  }
};

/* --------------------------
   2) APPLY TRANSLATION
-------------------------- */

function applyTranslation(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n.split(".");
    let value = translations[lang];

    key.forEach(k => value = value[k]);

    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml.split(".");
    let value = translations[lang];

    key.forEach(k => value = value[k]);

    if (value) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder.split(".");
    let value = translations[lang];

    key.forEach(k => value = value[k]);

    if (value) el.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt.split(".");
    let value = translations[lang];

    key.forEach(k => value = value[k]);

    if (value) el.alt = value;
  });
}

/* --------------------------
   3) LANGUAGE SWITCHER
-------------------------- */
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslation(lang);

  document.getElementById("en-btn").classList.toggle("active", lang === "en");
  document.getElementById("bg-btn").classList.toggle("active", lang === "bg");
}

/* Load saved language */
const savedLang = localStorage.getItem("lang") || "en";
setLanguage(savedLang);

/* Buttons */
document.getElementById("en-btn").addEventListener("click", () => setLanguage("en"));
document.getElementById("bg-btn").addEventListener("click", () => setLanguage("bg"));

/* --------------------------
   4) MENU TOGGLE
-------------------------- */
document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

/* --------------------------
   5) SCROLL ANIMATIONS
-------------------------- */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll("section, .service-card, .award-card, .career-card")
  .forEach(el => observer.observe(el));

/* --------------------------
   6) SIMPLE SLIDER (portfolio)
-------------------------- */
let currentSlide = 0;
const slides = document.querySelectorAll(".portfolio-slider .slide");

function showSlide(i) {
  slides.forEach((s, idx) => s.classList.toggle("active", idx === i));
}

document.querySelector(".next").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
});

document.querySelector(".prev").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
});
