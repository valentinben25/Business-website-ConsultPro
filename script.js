/**
 * script.js
 * Clean, single-file i18n + UI helpers for ConsultPro
 *
 * Features:
 * - Single source of translations (en, bg)
 * - Applies to elements with:
 *     data-i18n (textContent),
 *     data-i18n-html (innerHTML),
 *     data-i18n-placeholder (placeholder attr),
 *     data-i18n-alt (alt attr)
 * - Graceful fallback if key missing
 * - Language switch buttons (with active class) and autosave to localStorage
 * - Simple fade-in / scroll reveal for sections
 * - Ensures nav links have pointer cursor and basic keyboard accessibility
 * - Defensive: won't throw if keys/elements missing
 */

/* =========================
   TRANSLATIONS (en + bg)
   ========================= */
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      stats: "Stats",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      pricing: "Pricing",
      contact: "Contact",
      map: "Map"
    },
    hero: {
      title: 'Grow Your Business with <span>ConsultPro</span>',
      text: "We provide expert consulting services to help you achieve sustainable growth and success.",
      btn: "Get Started"
    },
    services: {
      card1: {
        title: "Business Strategy",
        text: "Tailored strategies to help your company achieve sustainable growth and efficiency."
      },
      card2: {
        title: "Financial Consulting",
        text: "Expert financial planning, analysis, and risk management for your business success."
      },
      card3: {
        title: "Market Analysis",
        text: "In-depth research and insights into your market to keep you ahead of competitors."
      },
      card4: {
        title: "Corporate Training",
        text: "Workshops and training sessions to boost team productivity and leadership skills."
      },
      card5: {
        title: "IT Consulting",
        text: "Guidance on digital transformation, cloud solutions, and tech infrastructure."
      },
      card6: {
        title: "Partnership Development",
        text: "Building strong partnerships to expand your business opportunities worldwide."
      }
    },
    stats: {
      title: "Our Achievements",
      subtitle: "Key milestones that highlight our expertise and growth.",
      clients: "Happy Clients",
      projects: "Completed Projects",
      years: "Years of Experience",
      experts: "Expert Consultants"
    },
    portfolio: {
      title: "Our Projects",
      subtitle: "Explore some of our featured works and consulting projects."
    },
    caseStudies: {
      title: "Case Studies & Success Stories",
      subtitle: "See how we’ve helped businesses achieve remarkable growth and transformation.",
      case1: {
        title: "Financial Strategy Transformation",
        text: "We helped a UK-based finance firm boost efficiency by 35% through data-driven insights and process optimization."
      },
      case2: {
        title: "Digital Marketing Revamp",
        text: "Our team designed a new marketing strategy that increased online engagement by 60% within 3 months."
      },
      case3: {
        title: "Global Expansion Support",
        text: "ConsultPro guided a startup through international expansion, reaching 5 new markets in under a year."
      }
    },
    testimonials: {
      team: {
        testimonial1: {
          text: "“Working at ConsultPro has been an incredible journey! I’ve grown professionally and personally thanks to the supportive leadership.”",
          name: "John Smith",
          role: "CEO & Founder"
        },
        testimonial2: {
          text: "“The teamwork and company culture here are truly inspiring. Every project feels like a shared success.”",
          name: "Grace Campbell",
          role: "Financial Consultant"
        },
        testimonial3: {
          text: "“ConsultPro gives you the freedom to innovate and contribute your ideas. It’s amazing to work in such a dynamic environment.”",
          name: "Mason Jerome",
          role: "Marketing Expert"
        }
      },
      clients: {
        testimonial1: {
          name: "Sarah Thompson",
          role: "Marketing Director, VisionCorp",
          text: "“ConsultPro helped us redefine our strategy and achieve record growth last quarter. Their team is exceptional!”"
        },
        testimonial2: {
          name: "James Walker",
          role: "CEO, FinEdge Solutions",
          text: "“Professional and reliable — their insights completely transformed how we approach our clients.”"
        },
        testimonial3: {
          name: "Emily Davis",
          role: "Operations Manager, NovaTech",
          text: "“Working with ConsultPro was a game changer for our company’s long-term vision and operations.”"
        }
      }
    },
    blog: {
      title: "Latest Insights",
      subtitle: "Stay updated with our business tips, success stories, and industry news.",
      post1: {
        title: "How to Build a Winning Business Strategy",
        text: "Discover the key elements of developing a strong strategy that drives growth and success."
      },
      post2: {
        title: "Top 5 Market Trends for 2025",
        text: "Explore the biggest shifts that will shape the future of business and consulting."
      },
      post3: {
        title: "Boost Your Team’s Productivity",
        text: "Learn simple yet powerful techniques to keep your team motivated and efficient.",
        btn: "Read More"
      },
      btn: "Read More"
    },
    pricing: {
      title: "Our Pricing Plans",
      subtitle: "Choose a plan that fits your business needs and goals.",
      basic: {
        title: "Basic"
      },
      btn: "Choose Plan"
    },
    journey: {
      title: "Our Journey",
      subtitle: "A look back at our milestones and growth through the years.",
      step1: {
        title: "2016 Foundation of ConsultPro",
        text: "ConsultPro began its journey as a small consultancy firm with a vision to empower businesses worldwide."
      },
      step2: {
        title: "2018 International Expansion",
        text: "We secured our first international client and expanded our services to financial and IT sectors."
      },
      step3: {
        title: "2020 Innovation & Growth",
        text: "Our consulting team grew across Europe, establishing partnerships with global enterprises."
      },
      step4: {
        title: "2023",
        text: "Celebrated a major milestone — over 100 successful consulting projects delivered worldwide."
      },
      step6: {
        text: "ConsultPro continues to lead the way in digital transformation and business innovation."
      }
    },
    careers: {
      title: "Join Our Team",
      subtitle1: "We're always looking for passionate and talented professionals to grow with us.",
      position1: "Business Consultant",
      position2: "Financial Analyst",
      position3: "Marketing Manager"
    },
    contact: {
      title: "Contact Us",
      address: "15A Business Street, Sofia, Bulgaria",
      email: "info@consultpro.com",
      phone: "+44 888 123 456",
      hours: "Mon – Fri: 9:00 – 18:00",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendBtn: "Send Message"
    },
    map: {
      title: "Find Us in London"
    },
    footer: {
      rights: "© 2025 ConsultPro. All rights reserved."
    },
    ui: {
      askConsultant: "Ask a Consultant",
      chatPlaceholder: "Type your message..."
    }
  },

  /* Bulgarian translations (bg) - adjust phrasing as you prefer */
  bg: {
    nav: {
      home: "Начало",
      services: "Услуги",
      stats: "Постижения",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта"
    },
    hero: {
      title: 'Развийте бизнеса си с <span>ConsultPro</span>',
      text: "Ние предоставяме експертни консултантски услуги, за да постигнете устойчив растеж и успех.",
      btn: "Започнете"
    },
    services: {
      card1: {
        title: "Бизнес Стратегия",
        text: "Персонализирани стратегии за устойчив растеж и ефективност."
      },
      card2: {
        title: "Финансово Консултиране",
        text: "Експертно финансово планиране, анализ и управление на риска."
      },
      card3: {
        title: "Анализ на Пазара",
        text: "Задълбочени изследвания и прозрения, за да сте пред конкурентите."
      },
      card4: {
        title: "Корпоративно Обучение",
        text: "Уъркшопи и обучения за повишаване на продуктивността и лидерството."
      },
      card5: {
        title: "ИТ Консултации",
        text: "Съвети за дигитална трансформация, облачни решения и инфраструктура."
      },
      card6: {
        title: "Развитие на Партньорства",
        text: "Изграждане на силни партньорства за разширяване на възможностите."
      }
    },
    stats: {
      title: "Нашите Постижения",
      subtitle: "Ключови стъпки, които показват нашия опит и растеж.",
      clients: "Доволни клиенти",
      projects: "Завършени проекти",
      years: "Години опит",
      experts: "Експертни консултанти"
    },
    portfolio: {
      title: "Нашите Проекти",
      subtitle: "Разгледайте някои от нашите проекти и реализации."
    },
    caseStudies: {
      title: "Казуси и Успешни Истории",
      subtitle: "Вижте как сме помогнали на бизнеси да постигнат значителен растеж.",
      case1: {
        title: "Трансформация на Финансова Стратегия",
        text: "Помогнахме на финансова компания да увеличи ефективността с 35% чрез данни и оптимизация."
      },
      case2: {
        title: "Ревизия на Дигиталния Маркетинг",
        text: "Новата маркетингова стратегия увеличи ангажираността с 60% за 3 месеца."
      },
      case3: {
        title: "Подкрепа за Глобална Експанзия",
        text: "Насочихме стартъп в 5 нови пазара за по-малко от година."
      }
    },
    testimonials: {
      team: {
        testimonial1: {
          text: "„Работата в ConsultPro беше невероятно преживяване! Развих се професионално и лично благодарение на подкрепящото ръководство.“",
          name: "Джон Смит",
          role: "Изпълнителен директор и основател"
        },
        testimonial2: {
          text: "„Екипната работа и културата в компанията са истинско вдъхновение. Всеки проект е общ успех.“",
          name: "Грейс Кемпбъл",
          role: "Финансов консултант"
        },
        testimonial3: {
          text: "„ConsultPro дава свободата да иновираме и да предлагаме идеи. Прекрасно е да работиш в такава среда.“",
          name: "Мейсън Джером",
          role: "Маркетинг експерт"
        }
      },
      clients: {
        testimonial1: {
          name: "Сара Томпсън",
          role: "Директор Маркетинг, VisionCorp",
          text: "„ConsultPro ни помогна да пренапишем стратегията и отчетохме рекорден растеж.“"
        },
        testimonial2: {
          name: "Джеймс Уокър",
          role: "Изпълнителен директор, FinEdge Solutions",
          text: "„Професионални и надеждни — техните прозрения промениха нашия подход.“"
        },
        testimonial3: {
          name: "Емили Дейвис",
          role: "Оперативен мениджър, NovaTech",
          text: "„Работата с ConsultPro промени дългосрочната ни визия и операции.“"
        }
      }
    },
    blog: {
      title: "Последни Статии",
      subtitle: "Останете информирани с нашите съвети, истории и новини.",
      post1: {
        title: "Как да изградим печеливша бизнес стратегия",
        text: "Открийте ключовите елементи за силна стратегия, която задвижва растежа."
      },
      post2: {
        title: "Топ 5 тенденции за 2025",
        text: "Разгледайте най-големите промени, които ще оформят бъдещето."
      },
      post3: {
        title: "Увеличете продуктивността на екипа си",
        text: "Научете прости, но ефективни техники за мотивация и изпълнение."
      },
      btn: "Прочети"
    },
    pricing: {
      title: "Нашите Планове",
      subtitle: "Изберете план, който пасва на нуждите ви.",
      basic: {
        title: "Базов"
      },
      btn: "Избери План"
    },
    journey: {
      title: "Нашият Път",
      subtitle: "Поглед назад към нашите ключови моменти.",
      step1: {
        title: "2016 Създаване на ConsultPro",
        text: "ConsultPro започна като малка консултантска фирма с визия да подкрепя бизнесите."
      },
      step2: {
        title: "2018 Международна експанзия",
        text: "Първи международни клиенти и разширяване в ИТ и финанси."
      },
      step3: {
        title: "2020 Иновации и растеж",
        text: "Екипът ни стана международен с партньорства в Европа."
      },
      step4: {
        title: "2023",
        text: "Празнуваме 100+ успешни проекта по целия свят."
      },
      step6: {
        text: "ConsultPro продължава да води дигиталната трансформация."
      }
    },
    careers: {
      title: "Стани част от екипа",
      subtitle1: "Търсим страстни и талантливи професионалисти.",
      position1: "Бизнес Консултант",
      position2: "Финансов Аналитик",
      position3: "Маркетинг Мениджър"
    },
    contact: {
      title: "Свържете се с нас",
      address: "15A Business Street, Sofia, Bulgaria",
      email: "info@consultpro.com",
      phone: "+44 888 123 456",
      hours: "Пон – Пт: 9:00 – 18:00",
      formName: "Вашето име",
      formEmail: "Вашият email",
      formMessage: "Вашето съобщение",
      sendBtn: "Изпрати"
    },
    map: {
      title: "Къде сме"
    },
    footer: {
      rights: "© 2025 ConsultPro. Всички права запазени."
    },
    ui: {
      askConsultant: "Попитай консултант",
      chatPlaceholder: "Напишете съобщението..."
    }
  }
};

/* =========================
   Utility: get nested by key 'a.b.c'
   ========================= */
function getNested(obj, key) {
  if (!key) return undefined;
  return key.split('.').reduce((o, k) => (o && o[k] !== undefined) ? o[k] : undefined, obj);
}

/* =========================
   Apply translations to DOM
   - data-i18n => textContent
   - data-i18n-html => innerHTML
   - data-i18n-placeholder => placeholder attr
   - data-i18n-alt => alt attr
   ========================= */
function applyTranslation(lang) {
  const langObj = translations[lang] || translations.en;

  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = getNested(langObj, key);
    if (val !== undefined) {
      el.textContent = val;
    } // else leave existing text (fallback to HTML copy)
  });

  // innerHTML
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = getNested(langObj, key);
    if (val !== undefined) {
      el.innerHTML = val;
    }
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = getNested(langObj, key);
    if (val !== undefined) {
      el.setAttribute('placeholder', val);
    }
  });

  // alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const val = getNested(langObj, key);
    if (val !== undefined) {
      el.setAttribute('alt', val);
    }
  });

  // Special: team testimonials nested structure may require mapping if keys in HTML differ
  // We try to map some known patterns gracefully
  try {
    // team testimonial mapping if present
    const teamRoot = getNested(langObj, 'testimonials.team');
    if (teamRoot && typeof teamRoot === 'object') {
      Object.keys(teamRoot).forEach((tKey, idx) => {
        const base = `.testimonial-card:nth-of-type(${idx + 1})`;
        // but we won't overwrite arbitrary nodes — keep generic approach
      });
    }
  } catch (e) {
    // ignore mapping errors
    console.warn('testimonial mapping skipped', e);
  }
}

/* =========================
   Language switching + persistence
   ========================= */
const STORAGE_KEY = 'consultpro_lang';

function setLanguage(lang, save = true) {
  if (!translations[lang]) lang = 'en';
  applyTranslation(lang);

  // update active class on buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === (lang === 'bg' ? 'bg-btn' : 'en-btn'));
  });

  if (save) localStorage.setItem(STORAGE_KEY, lang);
}

/* =========================
   Init: attach listeners and load saved lang
   ========================= */
function initI18n() {
  // buttons
  const enBtn = document.getElementById('en-btn');
  const bgBtn = document.getElementById('bg-btn');

  if (enBtn) enBtn.addEventListener('click', () => setLanguage('en'));
  if (bgBtn) bgBtn.addEventListener('click', () => setLanguage('bg'));

  // keyboard accessible: toggle language with Enter/Space on focused buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('role', 'button');
    btn.tabIndex = 0;
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        btn.click();
      }
    });
  });

  // load saved or detect
  const saved = localStorage.getItem(STORAGE_KEY);
  const navLang = navigator.language || navigator.userLanguage || 'en';
  const initial = saved || (navLang.startsWith('bg') ? 'bg' : 'en');

  setLanguage(initial, false);
}

/* =========================
   Simple Fade-In / Scroll Reveal
   - add class 'in-view' to visible sections/elements
   - target many major blocks
   ========================= */
function initReveal() {
  const revealSelector = [
    'section',       // all sections
    '.service-card',
    '.case-card',
    '.testimonial-card',
    '.pricing-card',
    '.portfolio-slider .slide'
  ].join(',');

  const items = document.querySelectorAll(revealSelector);

  if (!('IntersectionObserver' in window)) {
    // fallback: show all
    items.forEach(i => i.classList.add('in-view'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // if you want one-time reveal, unobserve after visible:
        io.unobserve(entry.target);
      }
    });
  }, {
    root: null, // viewport
    threshold: 0.12
  });

  items.forEach(i => {
    // add initial style class so CSS can target .in-view transitions
    i.classList.add('reveal');
    io.observe(i);
  });
}

/* =========================
   Minor UI fixes
   - ensure nav anchors show pointer cursor if missing
   - ensure nav anchors are keyboard focusable
   ========================= */
function patchNavUX() {
  document.querySelectorAll('nav a').forEach(a => {
    // some anchors may lack href: ensure usable and pointer cursor
    if (!a.hasAttribute('href') || a.getAttribute('href').trim() === '') {
      a.setAttribute('href', '#');
    }
    a.style.cursor = 'pointer';
    a.tabIndex = a.tabIndex || 0;
    // optional: when click, close mobile menu if present (simple event)
    a.addEventListener('click', () => {
      const mobileToggle = document.querySelector('.menu-toggle');
      if (mobileToggle && getComputedStyle(mobileToggle).display !== 'none') {
        // try to trigger a click to close menu - projects vary; safe attempt
        mobileToggle.dispatchEvent(new Event('click'));
      }
    });
  });
}

/* =========================
   Prevent broken console errors:
   - wrap risky code
   ========================= */
function safeInit() {
  try {
    initI18n();
  } catch (e) {
    console.error('i18n init failed', e);
  }

  try {
    initReveal();
  } catch (e) {
    console.error('reveal init failed', e);
  }

  try {
    patchNavUX();
  } catch (e) {
    console.error('nav patch failed', e);
  }
}

/* =========================
   DOM Ready
   ========================= */
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}

/* =========================
   Optional: expose setLanguage for console/testing
   ========================= */
window.ConsultPro = {
  setLanguage,
  getCurrentLanguage: () => localStorage.getItem(STORAGE_KEY) || (navigator.language || 'en').slice(0,2)
};
