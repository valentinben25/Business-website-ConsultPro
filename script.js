// script.js — safe, guarded, fade-in + EN/BG switcher
document.addEventListener("DOMContentLoaded", () => {
  try {
    // --------- Helpers ----------
    const $ = sel => document.querySelector(sel);
    const $$ = sel => Array.from(document.querySelectorAll(sel));
    const safeTextSet = (sel, txt) => {
      const el = $(sel);
      if (el) el.textContent = txt;
    };

    // --------- Language buttons (guarded) ----------
    const enBtn = document.getElementById("en-btn");
    const bgBtn = document.getElementById("bg-btn");

    // If no buttons found — exit gracefully (nothing to attach)
    if (!enBtn || !bgBtn) {
      console.warn("Language buttons not found (#en-btn / #bg-btn). Language switcher disabled.");
    }

    // --------- Translations (minimal keys used) ----------
    const translations = {
      en: {
        // testimonials (team)
        teamTitle: "What Our Team Says",
        teamSubtitle: "Meet the people who make our company exceptional.",
        // client testimonials
        clientTitle: "What Our Clients Say",
        clientSubtitle: "Real feedback from satisfied business partners.",
        // nav
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
        teamTitle: "Какво Казва Нашият Екип",
        teamSubtitle: "Запознайте се с хората, които правят нашата компания изключителна.",
        clientTitle: "Какво Казват Нашите Клиенти",
        clientSubtitle: "Истинска обратна връзка от доволни бизнес партньори.",
        home: "Начало",
        services: "Услуги",
        stats: "Статистика",
        portfolio: "Портфолио",
        testimonials: "Отзиви",
        pricing: "Цени",
        contact: "Контакт",
        map: "Карта"
      }
    };

    function applyNavTexts(langObj) {
      // try each nav selector — some might not exist, so guard
      const navMap = {
        home: "a[href='#home']",
        services: "a[href='#services']",
        stats: "a[href='#stats']",
        portfolio: "a[href='#portfolio']",
        testimonials: "a[href='#testimonials']",
        pricing: "a[href='#pricing']",
        contact: "a[href='#contact']",
        map: "a[href='#map']"
      };
      Object.keys(navMap).forEach(k => {
        const sel = navMap[k];
        const el = document.querySelector(sel);
        if (el && langObj[k]) el.textContent = langObj[k];
      });
    }

    function setLanguage(lang) {
      if (!translations[lang]) {
        console.warn("Missing translations for", lang);
        return;
      }
      const T = translations[lang];

      // Testimonials (team)
      safeTextSet("#testimonials h2", T.teamTitle);
      safeTextSet("#testimonials .subtitle", T.teamSubtitle);

      // Client testimonials
      safeTextSet("#client-testimonials h2", T.clientTitle);
      safeTextSet("#client-testimonials .subtitle", T.clientSubtitle);

      // Nav
      applyNavTexts(T);

      // visual active class on flags
      if (enBtn) enBtn.classList.toggle("active", lang === "en");
      if (bgBtn) bgBtn.classList.toggle("active", lang === "bg");
    }

    if (enBtn) enBtn.addEventListener("click", () => setLanguage("en"));
    if (bgBtn) bgBtn.addEventListener("click", () => setLanguage("bg"));

    // Optionally set initial language to EN if nothing active
    if ((enBtn && enBtn.classList.contains("active")) || (!enBtn && !bgBtn)) {
      setLanguage("en");
    } else if (bgBtn && bgBtn.classList.contains("active")) {
      setLanguage("bg");
    }

    // --------- Fade-in for testimonial cards (IntersectionObserver) ----------
    const testimonialCards = $$(".testimonial-card");
    if (testimonialCards.length === 0) {
      // nothing to observe (do not error)
      // console.info("No .testimonial-card found to observe.");
    } else {
      // Ensure these cards start hidden via class (if CSS missing)
      testimonialCards.forEach(c => {
        if (!c.classList.contains("visible")) {
          // Ensure initial state if CSS lacks it: set opacity 0 inline only if not already set
          if (getComputedStyle(c).opacity === "1") {
            // we'll rely on CSS. Don't forcibly override here.
          }
        }
      });

      // IntersectionObserver to add .visible when a card enters viewport
      const obs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            // optional: unobserve after visible
            obs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });

      testimonialCards.forEach(card => obs.observe(card));
    }

    // --------- Safety log end ----------
    // console.log("Safe script initialized.");
  } catch (err) {
    // Any unexpected error: log but don't break
    console.error("Unhandled error in script.js:", err);
  }
});
