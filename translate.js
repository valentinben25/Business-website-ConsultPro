/* js/translate.js
   Apply translations defined in TRANSLATIONS object to DOM.
*/

(function () {
  // Read existing TRANSLATIONS from i18n.js (global const TRANSLATIONS)
  if (typeof TRANSLATIONS === "undefined") {
    console.error("TRANSLATIONS not found. Make sure i18n.js is loaded.");
    return;
  }

  const STORAGE_KEY = "consultpro_lang";
  const DEFAULT = "en";

  // helpers for nested get
  function getNested(obj, path) {
    if (!obj) return undefined;
    return path.split(".").reduce((o, k) => (o && k in o ? o[k] : undefined), obj);
  }

  function setActiveFlagButton(lang) {
    const enBtn = document.getElementById("en-btn");
    const bgBtn = document.getElementById("bg-btn");
    if (enBtn) enBtn.classList.toggle("active", lang === "en");
    if (bgBtn) bgBtn.classList.toggle("active", lang === "bg");
  }

  function translatePage(lang) {
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[DEFAULT];

    // data-i18n (text)
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = getNested(dict, key);
      if (val !== undefined) el.innerText = val;
    });

    // data-i18n-html (html)
    document.querySelectorAll("[data-i18n-html]").forEach(el => {
      const key = el.getAttribute("data-i18n-html");
      const val = getNested(dict, key);
      if (val !== undefined) el.innerHTML = val;
    });

    // placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
      const key = el.getAttribute("data-i18n-placeholder");
      const val = getNested(dict, key);
      if (val !== undefined) el.placeholder = val;
    });

    // alt (images)
    document.querySelectorAll("[data-i18n-alt]").forEach(el => {
      const key = el.getAttribute("data-i18n-alt");
      const val = getNested(dict, key);
      if (val !== undefined) el.alt = val;
    });

    // value (inputs/buttons)
    document.querySelectorAll("[data-i18n-value]").forEach(el => {
      const key = el.getAttribute("data-i18n-value");
      const val = getNested(dict, key);
      if (val !== undefined) el.value = val;
    });

    // Some elements use nested structures like services.card1.title
    // Translate elements that have keys in data attributes but also allow dotted keys:
    document.querySelectorAll("[data-i18n]").forEach(el => {
      const key = el.getAttribute("data-i18n");
      const val = getNested(dict, key);
      if (val !== undefined) el.innerText = val;
    });

    // Update active flag visually
    setActiveFlagButton(lang);

    // custom updates: contact details, footer rights, etc. (if specific selectors)
    // Update contact info list items if they have no data-i18n
    const phone = getNested(dict, "contact.phone");
    if (phone) {
      document.querySelectorAll(".footer-contact p, .contact-info li").forEach(p => {
        // naive approach: replace known phone/email/address strings if found
        if (p.innerText.includes("+44") || p.innerText.includes("+359")) {
          p.innerText = p.innerText.replace(/(\+44\s?\d+[\d\s-]*)|(\+359\s?\d+[\d\s-]*)/, phone);
        }
        if (p.innerText.includes("info@") && getNested(dict, "contact.email")) {
          p.innerText = p.innerText.replace(/info@[\w.-]+/, getNested(dict, "contact.email"));
        }
        if (p.innerText.includes("Business Street") && getNested(dict, "contact.address")) {
          p.innerText = getNested(dict, "contact.address");
        }
      });
    }
  }

  function getSavedLang() {
    try {
      const s = localStorage.getItem(STORAGE_KEY);
      if (s) return s;
    } catch (e) { /* ignore */ }
    return null;
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) { /* ignore */ }
  }

  // expose globally
  window.i18n = {
    translatePage,
    getSavedLang,
    saveLang,
    DEFAULT,
    SUPPORTED: Object.keys(TRANSLATIONS)
  };
})();
