document.addEventListener("DOMContentLoaded", () => {

  /* ============================
     MOBILE MENU
  ============================= */
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  /* ============================
     LANGUAGE SWITCHER
  ============================= */
  const enBtn = document.getElementById("en-btn");
  const bgBtn = document.getElementById("bg-btn");

  function applyLanguage(lang) {
    const elements = document.querySelectorAll("[data-en], [data-bg]");

    elements.forEach((el) => {
      const text = el.getAttribute(`data-${lang}`);
      if (text) el.textContent = text;
    });

    // запазване в localStorage
    localStorage.setItem("lang", lang);
  }

  // зареждане на езика от localStorage
  const savedLang = localStorage.getItem("lang") || "en";
  applyLanguage(savedLang);

  if (enBtn) enBtn.addEventListener("click", () => applyLanguage("en"));
  if (bgBtn) bgBtn.addEventListener("click", () => applyLanguage("bg"));

  /* ============================
     FADE-IN OBSERVER
  ============================= */
  const fadeElements = document.querySelectorAll(
    ".fade-in, .service-card, .faq-item, .partner-item, .story-step, .testimonial-card, .case-card"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach((el) => observer.observe(el));

});
