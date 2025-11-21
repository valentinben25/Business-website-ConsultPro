/* js/sliders.js
   Simple sliders: hero auto-rotate + portfolio prev/next
*/

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // HERO slider
    const heroSlides = Array.from(document.querySelectorAll(".hero .hero-slider .slide"));
    let heroIndex = heroSlides.findIndex(s => s.classList.contains("active"));
    if (heroIndex < 0) heroIndex = 0;
    function heroShow(idx) {
      heroSlides.forEach((s, i) => s.classList.toggle("active", i === idx));
    }
    if (heroSlides.length > 1) {
      heroShow(heroIndex);
      setInterval(() => {
        heroIndex = (heroIndex + 1) % heroSlides.length;
        heroShow(heroIndex);
      }, 6000);
    }

    // PORTFOLIO slider (manual with prev/next)
    const portfolio = document.querySelector(".portfolio-slider");
    if (portfolio) {
      const slides = Array.from(portfolio.querySelectorAll(".slide"));
      const prev = portfolio.querySelector(".prev");
      const next = portfolio.querySelector(".next");
      let idx = slides.findIndex(s => s.classList.contains("active"));
      if (idx < 0) idx = 0;
      function show(i) {
        slides.forEach((s, j) => s.classList.toggle("active", i === j));
      }
      if (prev) prev.addEventListener("click", () => { idx = (idx - 1 + slides.length) % slides.length; show(idx); });
      if (next) next.addEventListener("click", () => { idx = (idx + 1) % slides.length; show(idx); });
    }
  });
})();
