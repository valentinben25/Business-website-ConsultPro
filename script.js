document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     LANGUAGE SWITCHER
  ============================ */

  const langButtons = {
    en: document.getElementById("en-btn"),
    bg: document.getElementById("bg-btn")
  };

  const translations = {
    en: {
      // Headers
      teamTitle: "What Our Team Says",
      teamSubtitle: "Meet the people who make our company exceptional.",
      clientTitle: "What Our Clients Say",
      clientSubtitle: "Real feedback from satisfied business partners.",

      // Navigation
      home: "Home",
      services: "Services",
      stats: "Stats",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      pricing: "Pricing",
      contact: "Contact",
      map: "Map"
    },

    bg: {
      // Headers
      teamTitle: "Какво Казва Нашият Екип",
      teamSubtitle: "Запознайте се с хората, които правят нашата компания изключителна.",
      clientTitle: "Какво Казват Нашите Клиенти",
      clientSubtitle: "Истинска обратна връзка от доволни бизнес партньори.",

      // Navigation
      home: "Начало",
      services: "Услуги",
      stats: "Статистики",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта"
    }
  };

  function setLanguage(lang) {
    document.querySelector("#testimonials h2").textContent = translations[lang].teamTitle;
    document.querySelector("#testimonials .subtitle").textContent = translations[lang].teamSubtitle;

    document.querySelector("#client-testimonials h2").textContent = translations[lang].clientTitle;
    document.querySelector("#client-testimonials .subtitle").textContent = translations[lang].clientSubtitle;

    // Navigation
    document.querySelector("a[href='#home']").textContent = translations[lang].home;
    document.querySelector("a[href='#services']").textContent = translations[lang].services;
    document.querySelector("a[href='#stats']").textContent = translations[lang].stats;
    document.querySelector("a[href='#portfolio']").textContent = translations[lang].portfolio;
    document.querySelector("a[href='#testimonials']").textContent = translations[lang].testimonials;
    document.querySelector("a[href='#pricing']").textContent = translations[lang].pricing;
    document.querySelector("a[href='#contact']").textContent = translations[lang].contact;
    document.querySelector("a[href='#map']").textContent = translations[lang].map;

    // Active button style
    langButtons.en.classList.toggle("active", lang === "en");
    langButtons.bg.classList.toggle("active", lang === "bg");
  }

  langButtons.en.addEventListener("click", () => setLanguage("en"));
  langButtons.bg.addEventListener("click", () => setLanguage("bg"));



  /* ============================
     FADE-IN EFFECT
  ============================ */

  const faders = document.querySelectorAll(".testimonial-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  faders.forEach(card => observer.observe(card));
});
