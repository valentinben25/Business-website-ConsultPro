/* js/components.js
   FAQ toggle, stats counter animation, simple chat toggle
*/

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // FAQ accordion
    document.querySelectorAll(".faq-question").forEach(btn => {
      btn.addEventListener("click", () => {
        const parent = btn.closest(".faq-item");
        if (!parent) return;
        parent.classList.toggle("open");
        const answer = parent.querySelector(".faq-answer");
        if (!answer) return;
        if (parent.classList.contains("open")) {
          answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
          answer.style.maxHeight = null;
        }
      });
    });

    // Stats counter
    const counters = document.querySelectorAll(".stat-item .number");
    const counterObserver = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.getAttribute("data-target") || el.textContent || "0", 10);
          animateCount(el, target, 1500);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => counterObserver.observe(c));

    function animateCount(el, to, ms) {
      const start = 0;
      const startTime = performance.now();
      function tick(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / ms, 1);
        el.textContent = Math.floor(progress * (to - start) + start);
        if (progress < 1) requestAnimationFrame(tick);
        else el.textContent = to;
      }
      requestAnimationFrame(tick);
    }

    // Simple chat widget toggle
    const chatToggle = document.querySelector(".chat-toggle");
    const chatBox = document.querySelector(".chat-box");
    const chatClose = document.querySelector(".chat-close");
    if (chatToggle && chatBox) {
      chatToggle.addEventListener("click", () => chatBox.classList.toggle("visible"));
    }
    if (chatClose && chatBox) {
      chatClose.addEventListener("click", () => chatBox.classList.remove("visible"));
    }

    // send button (demo local echo)
    const sendBtn = document.getElementById("sendBtn");
    const chatInput = document.getElementById("chatInput");
    const chatMessages = document.getElementById("chatMessages");
    if (sendBtn && chatInput && chatMessages) {
      sendBtn.addEventListener("click", () => {
        const v = chatInput.value && chatInput.value.trim();
        if (!v) return;
        const msg = document.createElement("div");
        msg.className = "chat-message user";
        msg.innerText = v;
        chatMessages.appendChild(msg);
        chatInput.value = "";
        // simple bot response
        setTimeout(() => {
          const bot = document.createElement("div");
          bot.className = "chat-message bot";
          bot.innerText = "Thanks! We'll get back to you shortly.";
          chatMessages.appendChild(bot);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }, 700);
      });
    }
  });
})();
