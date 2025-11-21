/* =========================================================
   LANGUAGE TRANSLATION SYSTEM
   ========================================================= */

// Думи EN → BG
const translations = {
  "en": {
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.stats": "Stats",
    "nav.portfolio": "Portfolio",
    "nav.testimonials": "Testimonials",
    "nav.pricing": "Pricing",
    "nav.contact": "Contact",
    "nav.map": "Map",

    "hero.title": "Grow Your Business with <span>ConsultPro</span>",
    "hero.text": "We provide expert consulting services to help you achieve sustainable growth and success.",
    "hero.btn": "Get Started",

    "partners.title": "Our Trusted Partners",
    "partners.subtitle": "We’re proud to collaborate with these leading brands and organizations.",

    "awards.title": "Our Awards & Achievements",
    "awards.subtitle": "Recognizing our dedication to excellence, innovation, and customer satisfaction.",

    "blog.title": "Latest Insights",
    "blog.subtitle": "Stay updated with our business tips, success stories, and industry news.",
    "blog.btn": "Read More",

    "pricing.title": "Our Pricing Plans",
    "pricing.subtitle": "Choose a plan that fits your business needs and goals.",
    "pricing.chooseBtn": "Choose Plan",

    "journey.title": "Our Journey",
    "journey.subtitle": "A look back at our milestones and growth through the years.",

    "careers.title": "Join Our Team",
    "careers.apply": "Apply Now",

    "contact.title": "Contact Us",
    "contact.subtitle": "We’d love to hear from you. Get in touch with our team.",
    "contact.sendBtn": "Send Message",

    "map.title": "Find Us in London"
  },

  "bg": {
    "nav.home": "Начало",
    "nav.services": "Услуги",
    "nav.stats": "Статистика",
    "nav.portfolio": "Проекти",
    "nav.testimonials": "Отзиви",
    "nav.pricing": "Цени",
    "nav.contact": "Контакти",
    "nav.map": "Карта",

    "hero.title": "Развий своя бизнес с <span>ConsultPro</span>",
    "hero.text": "Ние предлагаме експертни консултантски услуги за устойчив растеж и успех.",
    "hero.btn": "Започни сега",

    "partners.title": "Нашите доверени партньори",
    "partners.subtitle": "Гордеем се със сътрудничеството си с водещи марки и организации.",

    "awards.title": "Нашите награди и постижения",
    "awards.subtitle": "Признание за нашата отдаденост към качество, иновации и удовлетвореност.",

    "blog.title": "Последни анализи",
    "blog.subtitle": "Следете нашите бизнес съвети, истории за успех и новини.",
    "blog.btn": "Прочети",

    "pricing.title": "Ценови планове",
    "pricing.subtitle": "Изберете план, който отговаря на вашите цели.",
    "pricing.chooseBtn": "Избери план",

    "journey.title": "Нашето пътуване",
    "journey.subtitle": "Поглед назад към ключовите ни постижения.",

    "careers.title": "Присъединете се към нашия екип",
    "careers.apply": "Кандидатствай",

    "contact.title": "Свържете се с нас",
    "contact.subtitle": "Бихме се радвали да ви помогнем.",
    "contact.sendBtn": "Изпрати съобщение",

    "map.title": "Намерете ни в Лондон"
  }
};


// Функция за превод
function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach(el => {
    const key = el.getAttribute("data-i18n-html");
    if (translations[lang][key]) el.innerHTML = translations[lang][key];
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });
}


// Запазване на език
function setLanguage(lang) {
  localStorage.setItem("lang", lang);
  applyTranslations(lang);
}


// Зареждане
const savedLang = localStorage.getItem("lang") || "en";
applyTranslations(savedLang);

document.getElementById("en-btn").onclick = () => setLanguage("en");
document.getElementById("bg-btn").onclick = () => setLanguage("bg");


/* =========================================================
   MENU TOGGLE
   ========================================================= */
document.querySelector(".menu-toggle").onclick = () => {
  document.querySelector(".nav").classList.toggle("active");
};


/* =========================================================
   FADE-IN ON SCROLL
   ========================================================= */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
});

document.querySelectorAll("section, .service-card, .pricing-card").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
✅ Стъпка 3 → В CSS добави fade-in класове
В style.css сложи това:

css
Копиране на код
.hidden {
  opacity: 0;
  transform: translateY(40px);
  transition: 0.8s ease-out;
}

.show {
  opacity: 1;
  transform: translateY(0);
}
