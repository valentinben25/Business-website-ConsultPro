document.addEventListener("DOMContentLoaded", () => {
  console.log("%cConsultPro JS Loaded Successfully", "color:#4CAF50; font-size:14px");

  /* ============================================================
     1) Mobile Navigation
  ============================================================ */
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
      navMenu.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  /* ============================================================
     2) Language Switcher (EN / BG)
  ============================================================ */
  const langToggle = document.querySelector(".language-toggle");
  let currentLang = "en";

  const translations = {
    en: {
      heroTitle: "Empowering Your Business Growth",
      heroSubtitle: "Consulting solutions that transform your ideas into success.",
      servicesTitle: "Our Services",
      faqTitle: "Frequently Asked Questions",
      partnersTitle: "Our Trusted Partners",
      journeyTitle: "Our Journey",
      testimonialsTitle: "What Our Clients Say",
      teamTestimonialsTitle: "Our Team Says"
    },
    bg: {
      heroTitle: "Подкрепяме растежа на вашия бизнес",
      heroSubtitle: "Консултантски решения, които превръщат идеите в успех.",
      servicesTitle: "Нашите услуги",
      faqTitle: "Често задавани въпроси",
      partnersTitle: "Нашите доверени партньори",
      journeyTitle: "Нашият път",
      testimonialsTitle: "Какво казват клиентите",
      teamTestimonialsTitle: "Какво казва нашият екип"
    }
  };

  const translatable = {
    heroTitle: "hero-title",
    heroSubtitle: "hero-subtitle",
    servicesTitle: "services-title",
    faqTitle: "faq-title",
    partnersTitle: "partners-title",
    journeyTitle: "journey-title",
    testimonialsTitle: "client-testimonials-title",
    teamTestimonialsTitle: "team-testimonials-title"
  };

  // Apply Translation
  function applyTranslation(lang) {
    Object.keys(translatable).forEach(key => {
      const element = document.getElementById(translatable[key]);
      if (element) element.textContent = translations[lang][key];
    });
  }

  // Toggle Language
  if (langToggle) {
    langToggle.addEventListener("click", () => {
      currentLang = currentLang === "en" ? "bg" : "en";
      applyTranslation(currentLang);
      langToggle.textContent = currentLang.toUpperCase();
    });
  }

  /* ============================================================
     3) FAQ Accordion
  ============================================================ */
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const header = item.querySelector(".faq-question");
    if (!header) return;

    header.addEventListener("click", () => {
      item.classList.toggle("active");
    });
  });

  /* ============================================================
     4) Fade-In Animations (ALL SECTIONS)
  ============================================================ */

  const fadeElements = document.querySelectorAll(
    ".fade-in, .service-card, .faq-item, .partner-card, .story-step, .testimonial-card"
  );

  const fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  fadeElements.forEach(el => fadeObserver.observe(el));

  /* ============================================================
     5) Testimonials — Both Sections
  ============================================================ */

  const testimonialSections = [
    "#client-testimonials",
    "#testimonials"
  ];

  testimonialSections.forEach(sectionSelector => {
    const section = document.querySelector(sectionSelector);
    if (!section) return;

    const cards = section.querySelectorAll(".testimonial-card");
    cards.forEach(card => fadeObserver.observe(card));
  });

  /* ============================================================
     6) Smooth Scroll for Navigation
  ============================================================ */
  document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

});
