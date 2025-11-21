/* js/ui.js
   Handles language buttons, mobile nav toggle, and scroll reveal (fade-in).
*/

(function () {
  // wait DOM
  function onReady(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  onReady(() => {
    // language buttons
    const enBtn = document.getElementById("en-btn");
    const bgBtn = document.getElementById("bg-btn");

    function switchLang(lang) {
      if (!window.i18n) return;
      window.i18n.translatePage(lang);
      window.i18n.saveLang(lang);
    }

    if (enBtn) {
      enBtn.addEventListener("click", () => switchLang("en"));
    }
    if (bgBtn) {
      bgBtn.addEventListener("click", () => switchLang("bg"));
    }

    // mobile menu toggle (simple)
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");
    if (menuToggle && nav) {
      menuToggle.addEventListener("click", () => {
        nav.classList.toggle("open");
        menuToggle.classList.toggle("open");
      });
      // close on nav link click (for single-page nav)
      nav.querySelectorAll("a").forEach(a => {
        a.addEventListener("click", () => {
          nav.classList.remove("open");
          menuToggle.classList.remove("open");
        });
      });
    }

    // Scroll reveal (fade-in) using IntersectionObserver
    const revealSelector = [
      "section",
      ".service-card",
      ".case-card",
      ".testimonial-card",
      ".award-card",
      ".blog-post",
      ".pricing-card",
      ".career-card",
      ".portfolio-slider .slide"
    ].join(",");

    const nodes = Array.from(document.querySelectorAll(revealSelector));

    // initialize hidden state
    nodes.forEach(n => {
      n.classList.add("reveal");
      // optional initial style handled in CSS: .reveal { opacity:0; transform: translateY(20px); transition: opacity .6s, transform .6s; }
    });

    const io = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          // if you want one-time reveal:
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    nodes.forEach(n => io.observe(n));

    // On load: apply saved language
    const saved = window.i18n && window.i18n.getSavedLang ? window.i18n.getSavedLang() : null;
    const langToUse = saved || (navigator.language && navigator.language.startsWith("bg") ? "bg" : "en");
    if (window.i18n) {
      window.i18n.translatePage(langToUse);
      window.i18n.saveLang(langToUse);
    }
  });
})();
