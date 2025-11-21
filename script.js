
/* ----------------------------------------------------
   1) i18n – преводи EN / BG
---------------------------------------------------- */

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
      post1: {
        title: "How to Build a Winning Business Strategy",
        text: "Discover the key elements of developing a strong strategy that drives growth and success."
      },
      post2: {
        title: "Top 5 Market Trends for 2025",
        text: "Explore the biggest shifts that will shape the future of business and consulting."
      },
      post3: {
        title: "Boost Your Team’s Productivity",
        text: "Learn simple yet powerful techniques to keep your team motivated and efficient."
      },
      btn: "Read More"
    },

    journey: {
      title: "Our Journey",
      subtitle: "A look back at our milestones and growth through the years.",
      step1: { title: "2016 Foundation of ConsultPro", text: "ConsultPro began its journey..." },
      step2: { title: "2018 International Expansion", text: "We secured our first international client..." },
      step3: { title: "2020 Innovation & Growth", text: "Our consulting team grew across Europe..." },
      step4: { title: "2023", text: "Celebrated a major milestone — over 100 projects delivered." },
      step6: { text: "ConsultPro continues to lead the way in digital transformation." }
    },

    careers: {
      title: "Join Our Team",
      subtitle1: "We're always looking for passionate and talented professionals to grow with us.",
      position1: { text: "Business Consultant" },
      position2: { text: "Financial Analyst" },
      position3: { text: "Marketing Manager" },
      subtitle2: "Provide expert advice and insights...",
      subtitle3: "Analyze financial data and develop strategies...",
      subtitle4: "Lead digital campaigns and branding..."
    },

    map: {
      title: "Find Us in London"
    },

    footer: {
      rights: "© 2025 ConsultPro. All rights reserved."
    }
  },

  /* ----------------------------------------------------
     🇧🇬 Bulgarian translations
  ---------------------------------------------------- */
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

    partners: {
      title: "Наши доверени партньори",
      subtitle: "Гордеем се с нашето сътрудничество с водещи компании.",
      img1_alt: "Партньор 1",
      img2_alt: "Партньор 2",
      img3_alt: "Партньор 3",
      img4_alt: "Партньор 4",
      img5_alt: "Партньор 5"
    },

    awards: {
      title: "Нашите награди и постижения",
      subtitle: "Признание за нашата отдаденост на иновации и качество.",
      card1: { title: "Най-добра консултантска фирма 2023", text: "Признание за изключителни бизнес стратегии." },
      card2: { title: "Отличие за обслужване", text: "Признание за невероятно клиентско обслужване." },
      card3: { title: "Най-добър бизнес растеж 2024", text: "За устойчив и бърз растеж." },
      card4: { title: "Награда за иновации", text: "Отличие за иновативни бизнес решения." }
    },

    blog: {
      title: "Последни статии",
      subtitle: "Следете нашите бизнес съвети и иновации.",
      post1: { title: "Как да изградите успешна стратегия", text: "Ключови елементи за стабилен растеж." },
      post2: { title: "Топ 5 тенденции за 2025", text: "Големите промени в бизнеса." },
      post3: { title: "Повишете продуктивността на екипа", text: "Ефективни техники за мотивация." },
      btn: "Прочети още"
    },

    journey: {
      title: "Нашият път",
      subtitle: "Хронология на растежа и успехите ни.",
      step1: { title: "2016 Създаване на ConsultPro", text: "Начало на нашата мисия..." },
      step2: { title: "2018 Международно разширяване", text: "Първи международен клиент..." },
      step3: { title: "2020 Иновации и растеж", text: "Разширяване в Европа..." },
      step4: { title: "2023", text: "Над 100 успешни проекта." },
      step6: { text: "Лидер в дигиталната трансформация." }
    },

    careers: {
      title: "Присъедини се към екипа",
      subtitle1: "Винаги търсим таланти.",
      position1: { text: "Бизнес консултант" },
      position2: { text: "Финансов анализатор" },
      position3: { text: "Маркетинг мениджър" },
      subtitle2: "Предоставяй бизнес съвети...",
      subtitle3: "Анализирай финансови данни...",
      subtitle4: "Води маркетингови кампании..."
    },

    map: {
      title: "Намерете ни в Лондон"
    },

    footer: {
      rights: "© 2025 ConsultPro. Всички права запазени."
    }
  }
};

/* ----------------------------------------------------
   2) Apply translations
---------------------------------------------------- */

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n.split(".");
    let value = translations[lang];

    key.forEach(k => value = value?.[k]);

    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.dataset.i18nHtml.split(".");
    let value = translations[lang];
    key.forEach(k => value = value?.[k]);
    if (value) el.innerHTML = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder.split(".");
    let value = translations[lang];
    key.forEach(k => value = value?.[k]);
    if (value) el.placeholder = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach(el => {
    const key = el.dataset.i18nAlt.split(".");
    let value = translations[lang];
    key.forEach(k => value = value?.[k]);
    if (value) el.alt = value;
  });
}

/* ----------------------------------------------------
   3) Language switcher + localStorage
---------------------------------------------------- */

function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);

  document.getElementById("en-btn").classList.toggle("active", lang === "en");
  document.getElementById("bg-btn").classList.toggle("active", lang === "bg");
}

document.getElementById("en-btn").onclick = () => setLanguage("en");
document.getElementById("bg-btn").onclick = () => setLanguage("bg");

setLanguage(localStorage.getItem("lang") || "en");

/* ----------------------------------------------------
   4) Mobile Menu
---------------------------------------------------- */

document.querySelector(".menu-toggle").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("active");
});

/* ----------------------------------------------------
   5) Scroll Reveal Animations
---------------------------------------------------- */

const revealElements = document.querySelectorAll(
  "section, .service-card, .testimonial-card, .why-card, .case-card"
);

function revealOnScroll() {
  revealElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ----------------------------------------------------
   6) Stats Counter
---------------------------------------------------- */

const counters = document.querySelectorAll(".number");
let countersStarted = false;

function runCounters() {
  if (countersStarted) return;
  const top = document.querySelector("#stats").getBoundingClientRect().top;
  if (top < window.innerHeight) {
    counters.forEach(counter => {
      const target = +counter.dataset.target;
      let value = 0;
      const speed = target / 100;

      const update = setInterval(() => {
        value += speed;
        counter.textContent = Math.floor(value);
        if (value >= target) clearInterval(update);
      }, 20);
    });
    countersStarted = true;
  }
}

window.addEventListener("scroll", runCounters);

/* ----------------------------------------------------
   7) Hero Slider
---------------------------------------------------- */

let currentSlide = 0;
const slides = document.querySelectorAll(".hero .slide");

function nextHeroSlide() {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}

setInterval(nextHeroSlide, 4000);

/* ----------------------------------------------------
   8) Portfolio Slider
---------------------------------------------------- */

const portfolioSlides = document.querySelectorAll(".portfolio .slide");
let portfolioIndex = 0;

function showPortfolio(i) {
  portfolioSlides.forEach(s => s.classList.remove("active"));
  portfolioSlides[i].classList.add("active");
}

document.querySelector(".portfolio .prev").onclick = () => {
  portfolioIndex = (portfolioIndex - 1 + portfolioSlides.length) % portfolioSlides.length;
  showPortfolio(portfolioIndex);
};

document.querySelector(".portfolio .next").onclick = () => {
  portfolioIndex = (portfolioIndex + 1) % portfolioSlides.length;
  showPortfolio(portfolioIndex);
};

/* ----------------------------------------------------
   9) Chat Widget
---------------------------------------------------- */

document.querySelector(".chat-toggle").onclick = () =>
  document.querySelector(".chat-box").classList.toggle("open");

document.querySelector(".chat-close").onclick = () =>
  document.querySelector(".chat-box").classList.remove("open");
