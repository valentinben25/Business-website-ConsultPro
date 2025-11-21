/* js/main.js
   Initialization glue (small)
*/
(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // ensure i18n translated (in case ui.js didn't run)
    const saved = window.i18n && window.i18n.getSavedLang ? window.i18n.getSavedLang() : null;
    const lang = saved || (navigator.language && navigator.language.startsWith("bg") ? "bg" : "en");
    if (window.i18n) window.i18n.translatePage(lang);

    // accessibility attributes for language buttons
    const enBtn = document.getElementById("en-btn"), bgBtn = document.getElementById("bg-btn");
    if (enBtn) { enBtn.setAttribute("aria-label", "English"); enBtn.setAttribute("role","button"); }
    if (bgBtn) { bgBtn.setAttribute("aria-label", "Bulgarian"); bgBtn.setAttribute("role","button"); }
  });
})();
