/* script.js — Clean, single-file JS for ConsultPro
   - Handles: mobile menu, sliders, counters, FAQ, newsletter, chat
   - Full EN/BG translations with fade-in (improved Bulgarian)
   - Safe: checks for elements before touching them
*/

(function () {
  'use strict';

  /*** HELPERS ***/
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

  function safeSetText(selector, text, root = document) {
    const el = $(selector, root);
    if (el) el.textContent = text;
  }

  function safeSetHTML(selector, html, root = document) {
    const el = $(selector, root);
    if (el) el.innerHTML = html;
  }

  function fadeContent(element, updateFn, duration = 400) {
    if (!element) return;
    element.style.transition = `opacity ${duration}ms ease`;
    element.style.opacity = '0';
    // ensure repaint
    requestAnimationFrame(() => {
      setTimeout(() => {
        updateFn();
        requestAnimationFrame(() => {
          element.style.opacity = '1';
        });
      }, duration);
    });
  }

  // Single function to add keyboard activation on language buttons
  function addKeyboardActivate(el) {
    if (!el) return;
    el.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        el.click();
      }
    });
  }

  /*** TRANSLATIONS (improved Bulgarian) ***/
  const TRANSLATIONS = {
    en: {
      // header / nav
      nav: {
        home: 'Home',
        services: 'Services',
        stats: 'Stats',
        portfolio: 'Portfolio',
        testimonials: 'Testimonials',
        pricing: 'Pricing',
        contact: 'Contact',
        map: 'Map'
      },
      logo: 'Consult<span>Pro</span>',
      // hero
      hero: {
        title: 'Grow Your Business with <span>ConsultPro</span>',
        text: 'We provide expert consulting services to help you achieve sustainable growth and success.',
        btn: 'Get Started'
      },
      // services
      services: {
        title: 'Our Services',
        subtitle: 'We provide professional consulting to help your business succeed.',
        cards: [
          { title: 'Business Strategy', text: 'Tailored strategies to help your company achieve sustainable growth and efficiency.' },
          { title: 'Financial Consulting', text: 'Expert financial planning, analysis, and risk management for your business success.' },
          { title: 'Market Analysis', text: 'In-depth research and insights into your market to keep you ahead of competitors.' },
          { title: 'Corporate Training', text: 'Workshops and training sessions to boost team productivity and leadership skills.' },
          { title: 'IT Consulting', text: 'Guidance on digital transformation, cloud solutions, and tech infrastructure.' },
          { title: 'Partnership Development', text: 'Building strong partnerships to expand your business opportunities worldwide.' }
        ]
      },
      // process
      process: {
        title: 'Our Process',
        subtitle: 'We follow a clear and effective process to ensure successful results for every client.',
        steps: [
          { title: '1. Consultation', text: 'We start by understanding your business needs, challenges, and goals to create a personalized approach.' },
          { title: '2. Strategy', text: 'Our team develops a data-driven strategy that aligns with your objectives and market opportunities.' },
          { title: '3. Implementation', text: 'We execute the plan efficiently using proven methodologies and continuous performance tracking.' },
          { title: '4. Results', text: 'We deliver measurable outcomes, review success metrics, and provide recommendations for long-term growth.' }
        ]
      },
      // stats
      stats: {
        title: 'Our Achievements',
        subtitle: 'Key milestones that highlight our expertise and growth.',
        items: ['Happy Clients', 'Completed Projects', 'Years of Experience', 'Expert Consultants']
      },
      // portfolio projects
      portfolio: {
        title: 'Our Projects',
        subtitle: 'Explore some of our featured works and consulting projects.',
        projects: [
          { title: 'Business Growth Strategy', text: 'Helping companies expand globally with smart solutions.' },
          { title: 'Digital Transformation', text: 'Modernizing organizations for the new digital economy.' },
          { title: 'Financial Analysis', text: 'Providing detailed financial insights and growth plans.' },
          { title: 'Corporate Training', text: 'Empowering employees through leadership and innovation.' },
          { title: 'Partnership Development', text: 'Creating strategic collaborations that drive business success.' }
        ]
      },
      // cases, testimonials, etc.
      caseStudies: {
        title: 'Case Studies & Success Stories',
        subtitle: 'See how we’ve helped businesses achieve remarkable growth and transformation.'
      },
      testimonialsTeam: {
        title: 'What Our Team Says',
        subtitle: 'Meet the people who make our company exceptional.'
      },
      testimonialsClients: {
        title: 'What Our Clients Say',
        subtitle: 'Real feedback from satisfied business partners.'
      },
      // faq
      faq: {
        title: 'Frequently Asked Questions',
        subtitle: 'Answers to common questions about our consulting services.',
        faqs: [
          { q: 'What industries do you specialize in?', a: 'We work with a wide range of industries including finance, IT, healthcare, and retail. Our consultants adapt to your specific business needs.' },
          { q: 'How long does a consulting project take?', a: 'Most projects take between 2 to 6 weeks depending on their complexity. We always provide a detailed timeline before we begin.' },
          { q: 'Do you offer remote consulting?', a: 'Yes — we provide both in-person and remote consulting sessions to ensure flexibility for our clients.' },
          { q: 'Can you help with business strategy and marketing?', a: 'Absolutely. We combine strategy development with marketing insights to help you grow your brand effectively.' }
        ]
      },
      why: {
        title: 'Why Choose <span>ConsultPro</span>',
        subtitle: 'Discover what makes our consulting services stand out.',
        cards: [
          { title: 'Experienced Professionals', text: 'Our team brings years of industry experience and real-world business insight to every project.' },
          { title: 'Innovative Strategies', text: 'We develop creative, data-driven strategies to help your business stay ahead of the competition.' },
          { title: 'Client-Centric Approach', text: 'Your goals are our priority — we work closely with you to achieve measurable success.' },
          { title: 'Global Expertise', text: 'We deliver consulting solutions that meet international standards and market needs.' }
        ]
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'We’d love to hear from you. Get in touch with our team.',
        header: 'Get in Touch',
        text: 'Whether you’re looking for business advice or collaboration, we’re here to help.',
        address: '15A Business Street, London, United Kingdom',
        email: 'info@consultpro.co.uk',
        phone: '+44 20 1234 5678',
        hours: 'Mon – Fri: 9:00 – 18:00',
        formName: 'Your Name',
        formEmail: 'Your Email',
        formMessage: 'Your Message',
        sendBtn: 'Send Message'
      },
      newsletter: {
        title: 'Subscribe to Our Newsletter',
        subtitle: 'Stay up to date with the latest tips, ideas, and news from our company.',
        placeholder: 'Enter your email address',
        button: 'Subscribe',
        note: 'We respect your privacy. Unsubscribe anytime.'
      },
      footer: {
        brand: 'ConsultPro',
        tagline: 'Your trusted partner for business growth and innovation.',
        quickLinks: 'Quick Links',
        links: ['Home', 'Services', 'Portfolio', 'Contact'],
        contactTitle: 'Contact Info',
        location: 'London, UK',
        phone: '+359 888 123 456',
        email: 'info@consultpro.co.uk',
        rights: '© 2025 ConsultPro. All rights reserved.'
      },
      cta: {
        title: 'Ready to Take Your Business to the Next Level?',
        text: 'Our experts are here to help you grow, innovate, and succeed in every step of your journey.',
        btn: 'Contact Us'
      },
      // simple defaults for other sections left as-is
    },

    bg: {
      nav: {
        home: 'Начало',
        services: 'Услуги',
        stats: 'Статистика',
        portfolio: 'Портфолио',
        testimonials: 'Отзиви',
        pricing: 'Цени',
        contact: 'Контакт',
        map: 'Карта'
      },
      logo: 'Consult<span>Pro</span>',
      hero: {
        title: 'Развийте бизнеса си с <span>ConsultPro</span>',
        text: 'Предоставяме експертни консултантски услуги, които подпомагат устойчив растеж и дълготраен успех.',
        btn: 'Свържете се'
      },
      services: {
        title: 'Нашите услуги',
        subtitle: 'Предоставяме професионални консултации, за да подпомогнем успеха на вашия бизнес.',
        cards: [
          { title: 'Бизнес стратегия', text: 'Индивидуални стратегии за устойчив растеж и повишена ефективност.' },
          { title: 'Финансови консултации', text: 'Експертно финансово планиране, анализ и управление на риска.' },
          { title: 'Пазарен анализ', text: 'Задълбочени проучвания и анализи, които ви държат пред конкуренцията.' },
          { title: 'Корпоративни обучения', text: 'Работилници и обучения за повишаване на продуктивността и лидерските умения.' },
          { title: 'ИТ консултации', text: 'Насоки за дигитална трансформация, облачни решения и ИТ инфраструктура.' },
          { title: 'Развитие на партньорства', text: 'Изграждане на стратегически партньорства за нови възможности.' }
        ]
      },
      process: {
        title: 'Нашият процес',
        subtitle: 'Следваме структуриран и ефективен метод за постигане на отлични резултати.',
        steps: [
          { title: '1. Консултация', text: 'Започваме с разучаване на нуждите, предизвикателствата и целите на вашия бизнес.' },
          { title: '2. Стратегия', text: 'Изграждаме стратегия, базирана на данни, съобразена с вашите цели и пазара.' },
          { title: '3. Изпълнение', text: 'Реализираме плана ефективно, използвайки доказани практики и проследяване.' },
          { title: '4. Резултати', text: 'Доставяме измерими резултати и препоръки за устойчиво развитие.' }
        ]
      },
      stats: {
        title: 'Нашите постижения',
        subtitle: 'Основни постижения, които демонстрират нашия опит и растеж.',
        items: ['Доволни клиенти', 'Завършени проекти', 'Години опит', 'Експертни консултанти']
      },
      portfolio: {
        title: 'Нашите проекти',
        subtitle: 'Разгледайте някои от нашите ключови проекти и консултантски решения.',
        projects: [
          { title: 'Стратегия за растеж', text: 'Подпомагаме фирми да растат на международния пазар.' },
          { title: 'Дигитална трансформация', text: 'Модернизираме организации за цифровата икономика.' },
          { title: 'Финансов анализ', text: 'Предоставяме детайлни финансови анализи и планове за растеж.' },
          { title: 'Корпоративни обучения', text: 'Развиваме лидерство и умения чрез практическо обучение.' },
          { title: 'Развитие на партньорства', text: 'Създаваме стратегически сътрудничества за бизнес успех.' }
        ]
      },
      caseStudies: {
        title: 'Казуси и истории на успеха',
        subtitle: 'Вижте как помогнахме на клиенти да постигнат реални резултати и трансформация.'
      },
      testimonialsTeam: {
        title: 'Какво казва нашият екип',
        subtitle: 'Запознайте се с хората, които правят нашата компания изключителна.'
      },
      testimonialsClients: {
        title: 'Какво казват нашите клиенти',
        subtitle: 'Истински отзиви от доволни бизнес партньори.'
      },
      faq: {
        title: 'Често задавани въпроси',
        subtitle: 'Отговори на най-често задаваните въпроси относно нашите услуги.',
        faqs: [
          { q: 'В кои индустрии сте специализирани?', a: 'Работим с различни индустрии — финанси, ИТ, здравеопазване и търговия. Адаптираме се към нуждите на вашия бизнес.' },
          { q: 'Колко време отнема проект?', a: 'Повечето проекти отнемат между 2 и 6 седмици в зависимост от сложността. Преди старта предоставяме детайлен график.' },
          { q: 'Предлагате ли дистанционни консултации?', a: 'Да — предлагаме както присъствени, така и онлайн консултации за максимална гъвкавост.' },
          { q: 'Можете ли да помогнете със стратегия и маркетинг?', a: 'Разбира се — съчетаваме разработването на стратегия с маркетингови практики за ефективен растеж.' }
        ]
      },
      why: {
        title: 'Защо да изберете <span>ConsultPro</span>',
        subtitle: 'Разберете какво отличава нашите консултантски услуги.',
        cards: [
          { title: 'Опитни професионалисти', text: 'Екип с години практически опит и конкретни бизнес решения.' },
          { title: 'Иновативни стратегии', text: 'Креативни и базирани на данни решения, които дават предимство.' },
          { title: 'Клиентоориентиран подход', text: 'Вашите цели са наш приоритет — работим за реални и измерими резултати.' },
          { title: 'Глобална експертиза', text: 'Консултации съобразени с международните пазари и стандарти.' }
        ]
      },
      contact: {
        title: 'Свържете се с нас',
        subtitle: 'С удоволствие ще се свържем с вас — пишете ни или се обадете.',
        header: 'Връзка с нас',
        text: 'Независимо дали търсите бизнес съвет или партньорство, ние сме на разположение.',
        address: 'ул. Бизнес 15А, Лондон, Великобритания',
        email: 'info@consultpro.co.uk',
        phone: '+359 888 123 456',
        hours: 'Пон – Пет: 9:00 – 18:00',
        formName: 'Вашето име',
        formEmail: 'Вашият имейл',
        formMessage: 'Вашето съобщение',
        sendBtn: 'Изпрати съобщение'
      },
      newsletter: {
        title: 'Абонирайте се за нашия бюлетин',
        subtitle: 'Бъдете в крак с полезни съвети, идеи и новости от нашия екип.',
        placeholder: 'Въведете вашия имейл адрес',
        button: 'Абонирай се',
        note: 'Уважаваме вашата поверителност. Отписване по всяко време.'
      },
      footer: {
        brand: 'ConsultPro',
        tagline: 'Вашият доверен партньор за бизнес растеж и иновации.',
        quickLinks: 'Бързи връзки',
        links: ['Начало', 'Услуги', 'Портфолио', 'Контакт'],
        contactTitle: 'Контакти',
        location: 'Лондон, Великобритания',
        phone: '+359 888 123 456',
        email: 'info@consultpro.co.uk',
        rights: '© 2025 ConsultPro. Всички права запазени.'
      },
      cta: {
        title: 'Готови ли сте да изведете бизнеса си на следващо ниво?',
        text: 'Нашите експерти са тук, за да ви помогнат да растете, иновирате и постигате успех.',
        btn: 'Свържете се с нас'
      }
    }
  };

  /*** STATE & SELECTORS ***/
  const langButtons = {
    en: document.getElementById('en-btn'),
    bg: document.getElementById('bg-btn')
  };

  const langBtnList = $$('.lang-btn');

  let currentLang = 'en';

  /*** INIT: mobile menu toggle ***/
  (function initMenuToggle() {
    const menuToggle = $('.menu-toggle');
    const nav = $('.nav');
    if (!menuToggle || !nav) return;

    menuToggle.addEventListener('click', () => {
      nav.classList.toggle('active');
    });
  })();

  /*** INIT: language button visuals + keyboard ***/
  (function initLangButtonsVisuals() {
    langBtnList.forEach(btn => addKeyboardActivate(btn));
    // Set initial active visual
    function setActiveVisual(id) {
      langBtnList.forEach(b => b.classList.remove('active'));
      const target = document.getElementById(id);
      if (target) target.classList.add('active');
    }
    // default to en if none
    if (!langBtnList.some(b => b.classList.contains('active'))) {
      setActiveVisual('en-btn');
    } else {
      const active = langBtnList.find(b => b.classList.contains('active'));
      if (active && active.id) currentLang = active.id === 'bg-btn' ? 'bg' : 'en';
    }

    // click handlers will be attached later during translation setup
  })();

  /*** TRANSLATE: single unified function that updates all page texts with fade ***/
  function translatePage(lang) {
    if (!TRANSLATIONS[lang]) return;
    currentLang = lang;

    // nav links
    const navMap = TRANSLATIONS[lang].nav || {};
    Object.keys(navMap).forEach(key => {
      const sel = `.nav a[href="#${key === 'home' ? 'home' : key}"]`;
      const el = document.querySelector(sel);
      if (el) fadeContent(el, () => { el.textContent = navMap[key]; });
    });

    // logo
    const logoEl = document.querySelector('.logo');
    if (logoEl && TRANSLATIONS[lang].logo) {
      fadeContent(logoEl, () => { logoEl.innerHTML = TRANSLATIONS[lang].logo; });
    }

    // HERO
    const hero = document.querySelector('.hero-content');
    if (hero) {
      const h1 = hero.querySelector('h1');
      const p = hero.querySelector('p');
      const btn = hero.querySelector('.btn, a.btn');

      if (h1) fadeContent(h1, () => { h1.innerHTML = TRANSLATIONS[lang].hero.title; });
      if (p) fadeContent(p, () => { p.textContent = TRANSLATIONS[lang].hero.text; });
      if (btn) fadeContent(btn, () => { btn.textContent = TRANSLATIONS[lang].hero.btn; });
    }

    // SERVICES
    const services = document.querySelector('#services');
    if (services) {
      const h2 = services.querySelector('h2');
      const sub = services.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].services.title; });
      if (sub) fadeContent(sub, () => { sub.textContent = TRANSLATIONS[lang].services.subtitle; });

      const cards = services.querySelectorAll('.service-card');
      TRANSLATIONS[lang].services.cards.forEach((cardData, i) => {
        const card = cards[i];
        if (!card) return;
        const h3 = card.querySelector('h3');
        const p = card.querySelector('p');
        if (h3) fadeContent(h3, () => { h3.textContent = cardData.title; });
        if (p) fadeContent(p, () => { p.textContent = cardData.text; });
      });
    }

    // PROCESS
    const process = document.querySelector('#process');
    if (process) {
      const h2 = process.querySelector('h2');
      const sub = process.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].process.title; });
      if (sub) fadeContent(sub, () => { sub.textContent = TRANSLATIONS[lang].process.subtitle; });

      const steps = process.querySelectorAll('.process-step');
      TRANSLATIONS[lang].process.steps.forEach((stepData, i) => {
        const s = steps[i];
        if (!s) return;
        const h3 = s.querySelector('h3');
        const p = s.querySelector('p');
        if (h3) fadeContent(h3, () => { h3.textContent = stepData.title; });
        if (p) fadeContent(p, () => { p.textContent = stepData.text; });
      });
    }

    // STATS
    const stats = document.querySelector('#stats');
    if (stats) {
      const h2 = stats.querySelector('h2');
      const p = stats.querySelector('.subtitle') || stats.querySelector('p');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].stats.title; });
      if (p) fadeContent(p, () => { p.textContent = TRANSLATIONS[lang].stats.subtitle; });

      const statLabels = stats.querySelectorAll('.stat-item p');
      TRANSLATIONS[lang].stats.items.forEach((label, i) => {
        const el = statLabels[i];
        if (el) fadeContent(el, () => { el.textContent = label; });
      });
    }

    // PORTFOLIO
    const portfolio = document.querySelector('#portfolio');
    if (portfolio) {
      const h2 = portfolio.querySelector('h2');
      const p = portfolio.querySelector('p');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].portfolio.title; });
      if (p) fadeContent(p, () => { p.textContent = TRANSLATIONS[lang].portfolio.subtitle; });

      const slides = portfolio.querySelectorAll('.slide');
      TRANSLATIONS[lang].portfolio.projects.forEach((proj, i) => {
        const slide = slides[i];
        if (!slide) return;
        const capH3 = slide.querySelector('.caption h3');
        const capP = slide.querySelector('.caption p');
        if (capH3) fadeContent(capH3, () => { capH3.textContent = proj.title; });
        if (capP) fadeContent(capP, () => { capP.textContent = proj.text; });
      });
    }

    // CASE STUDIES
    const cases = document.querySelector('#case-studies');
    if (cases) {
      const h2 = cases.querySelector('h2');
      const p = cases.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].caseStudies.title; });
      if (p) fadeContent(p, () => { p.textContent = TRANSLATIONS[lang].caseStudies.subtitle; });
    }

    // TEAM TESTIMONIALS (section#testimonials)
    const teamTest = document.querySelector('#testimonials');
    if (teamTest) {
      const h2 = teamTest.querySelector('h2');
      const sub = teamTest.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].testimonialsTeam.title; });
      if (sub) fadeContent(sub, () => { sub.textContent = TRANSLATIONS[lang].testimonialsTeam.subtitle; });
      // inner cards: we'll not change person names to keep them realistic
    }

    // CLIENT TESTIMONIALS (section#client-testimonials)
    const clientTest = document.querySelector('#client-testimonials');
    if (clientTest) {
      const h2 = clientTest.querySelector('h2');
      const sub = clientTest.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].testimonialsClients.title; });
      if (sub) fadeContent(sub, () => { sub.textContent = TRANSLATIONS[lang].testimonialsClients.subtitle; });
      // keep card contents as-is (names & quotes), or edit if you need translation there too
    }

    // WHY CHOOSE
    const why = document.querySelector('#why-choose');
    if (why) {
      const h2 = why.querySelector('h2');
      const sub = why.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.innerHTML = TRANSLATIONS[lang].why.title; });
      if (sub) fadeContent(sub, () => { sub.textContent = TRANSLATIONS[lang].why.subtitle; });

      const cards = why.querySelectorAll('.why-card');
      TRANSLATIONS[lang].why.cards.forEach((card, i) => {
        const c = cards[i];
        if (!c) return;
        const h3 = c.querySelector('h3');
        const p = c.querySelector('p');
        if (h3) fadeContent(h3, () => { h3.textContent = card.title; });
        if (p) fadeContent(p, () => { p.textContent = card.text; });
      });
    }

    // FAQ
    const faq = document.querySelector('#faq');
    if (faq) {
      const h2 = faq.querySelector('h2');
      const sub = faq.querySelector('.subtitle');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].faq.title; });
      if (sub) fadeContent(sub, () => { sub.textContent = TRANSLATIONS[lang].faq.subtitle; });

      const faqItems = faq.querySelectorAll('.faq-item');
      TRANSLATIONS[lang].faq.faqs.forEach((f, i) => {
        const item = faqItems[i];
        if (!item) return;
        const q = item.querySelector('.faq-question');
        const a = item.querySelector('.faq-answer p');
        if (q) fadeContent(q, () => { q.textContent = f.q || f.question; });
        if (a) fadeContent(a, () => { a.textContent = f.a || f.answer; });
      });
    }

    // CONTACT
    const contact = document.querySelector('#contact');
    if (contact) {
      fadeContent(contact.querySelector('h2'), () => { contact.querySelector('h2').textContent = TRANSLATIONS[lang].contact.title; });
      fadeContent(contact.querySelector('.subtitle'), () => { contact.querySelector('.subtitle').textContent = TRANSLATIONS[lang].contact.subtitle; });

      const info = contact.querySelector('.contact-info');
      if (info) {
        fadeContent(info.querySelector('h3'), () => { info.querySelector('h3').textContent = TRANSLATIONS[lang].contact.header; });
        fadeContent(info.querySelector('p'), () => { info.querySelector('p').textContent = TRANSLATIONS[lang].contact.text; });

        const lis = info.querySelectorAll('ul li');
        if (lis.length >= 4) {
          fadeContent(lis[0], () => { lis[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${TRANSLATIONS[lang].contact.address}`; });
          fadeContent(lis[1], () => { lis[1].innerHTML = `<i class="fas fa-envelope"></i> ${TRANSLATIONS[lang].contact.email}`; });
          fadeContent(lis[2], () => { lis[2].innerHTML = `<i class="fas fa-phone"></i> ${TRANSLATIONS[lang].contact.phone}`; });
          fadeContent(lis[3], () => { lis[3].innerHTML = `<i class="fas fa-clock"></i> ${TRANSLATIONS[lang].contact.hours}`; });
        }
      }

      const form = contact.querySelector('form');
      if (form) {
        const nameInput = form.querySelector('input[type="text"]');
        const emailInput = form.querySelector('input[type="email"]');
        const textarea = form.querySelector('textarea');
        const btn = form.querySelector('button');

        if (nameInput) fadeContent(nameInput, () => { nameInput.placeholder = TRANSLATIONS[lang].contact.formName; });
        if (emailInput) fadeContent(emailInput, () => { emailInput.placeholder = TRANSLATIONS[lang].contact.formEmail; });
        if (textarea) fadeContent(textarea, () => { textarea.placeholder = TRANSLATIONS[lang].contact.formMessage; });
        if (btn) fadeContent(btn, () => { btn.textContent = TRANSLATIONS[lang].contact.sendBtn; });
      }
    }

    // NEWSLETTER
    const newsletter = document.querySelector('.newsletter');
    if (newsletter) {
      fadeContent(newsletter.querySelector('h2'), () => { newsletter.querySelector('h2').textContent = TRANSLATIONS[lang].newsletter.title; });
      fadeContent(newsletter.querySelector('.subtitle'), () => { newsletter.querySelector('.subtitle').textContent = TRANSLATIONS[lang].newsletter.subtitle; });
      const input = newsletter.querySelector('input[type="email"]');
      const btn = newsletter.querySelector('button');
      const note = newsletter.querySelector('.note');
      if (input) fadeContent(input, () => { input.placeholder = TRANSLATIONS[lang].newsletter.placeholder; });
      if (btn) fadeContent(btn, () => { btn.textContent = TRANSLATIONS[lang].newsletter.button; });
      if (note) fadeContent(note, () => { note.textContent = TRANSLATIONS[lang].newsletter.note; });
    }

    // CTA final
    const cta = document.querySelector('.cta-final');
    if (cta) {
      const h2 = cta.querySelector('h2');
      const p = cta.querySelector('p');
      const btn = cta.querySelector('.btn-primary');
      if (h2) fadeContent(h2, () => { h2.textContent = TRANSLATIONS[lang].cta.title; });
      if (p) fadeContent(p, () => { p.textContent = TRANSLATIONS[lang].cta.text; });
      if (btn) fadeContent(btn, () => { btn.textContent = TRANSLATIONS[lang].cta.btn; });
    }

    // FOOTER
    const footer = document.querySelector('.footer');
    if (footer) {
      const logoP = footer.querySelector('.footer-logo p');
      const quickH3 = footer.querySelector('.footer-links h3');
      const linkItems = footer.querySelectorAll('.footer-links ul li a');
      const contactTitle = footer.querySelector('.footer-contact h3');
      const contactPs = footer.querySelectorAll('.footer-contact p');
      const rights = footer.querySelector('.footer-bottom p');

      if (logoP) fadeContent(logoP, () => { logoP.textContent = TRANSLATIONS[lang].footer.tagline; });
      if (quickH3) fadeContent(quickH3, () => { quickH3.textContent = TRANSLATIONS[lang].footer.quickLinks; });
      if (contactTitle) fadeContent(contactTitle, () => { contactTitle.textContent = TRANSLATIONS[lang].footer.contactTitle; });
      if (rights) fadeContent(rights, () => { rights.textContent = TRANSLATIONS[lang].footer.rights; });

      linkItems.forEach((a, i) => {
        if (TRANSLATIONS[lang].footer.links[i]) fadeContent(a, () => { a.textContent = TRANSLATIONS[lang].footer.links[i]; });
      });

      if (contactPs[0]) fadeContent(contactPs[0], () => { contactPs[0].innerHTML = `<i class="fas fa-map-marker-alt"></i> ${TRANSLATIONS[lang].footer.location}`; });
      if (contactPs[1]) fadeContent(contactPs[1], () => { contactPs[1].innerHTML = `<i class="fas fa-phone"></i> ${TRANSLATIONS[lang].footer.phone}`; });
      if (contactPs[2]) fadeContent(contactPs[2], () => { contactPs[2].innerHTML = `<i class="fas fa-envelope"></i> ${TRANSLATIONS[lang].footer.email}`; });
    }

    // Visual active state for language buttons
    langBtnList.forEach(b => b.classList.remove('active'));
    const activeBtn = (lang === 'bg') ? document.getElementById('bg-btn') : document.getElementById('en-btn');
    if (activeBtn) activeBtn.classList.add('active');
  }

  /*** Attach click listeners to language buttons (once) ***/
  (function attachLangListeners() {
    const enBtn = document.getElementById('en-btn');
    const bgBtn = document.getElementById('bg-btn');

    if (enBtn) {
      enBtn.addEventListener('click', () => translatePage('en'));
    }
    if (bgBtn) {
      bgBtn.addEventListener('click', () => translatePage('bg'));
    }
  })();

  /*** SLIDER: portfolio (prev/next + autoplay) ***/
  (function initPortfolioSlider() {
    const slides = $$('.portfolio-slider .slide');
    if (!slides || slides.length === 0) return;

    let idx = slides.findIndex(s => s.classList.contains('active'));
    if (idx < 0) idx = 0;

    function show(i) {
      slides.forEach(s => s.classList.remove('active'));
      const s = slides[i];
      if (s) s.classList.add('active');
    }

    const prev = $('.portfolio-slider .prev');
    const next = $('.portfolio-slider .next');

    if (next) next.addEventListener('click', () => { idx = (idx + 1) % slides.length; show(idx); });
    if (prev) prev.addEventListener('click', () => { idx = (idx - 1 + slides.length) % slides.length; show(idx); });

    // autoplay
    setInterval(() => {
      idx = (idx + 1) % slides.length;
      show(idx);
    }, 4000);
  })();

  /*** FAQ accordion ***/
  (function initFAQ() {
    const items = $$('.faq-item');
    if (!items || items.length === 0) return;
    items.forEach(item => {
      const q = item.querySelector('.faq-question');
      if (!q) return;
      q.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
  })();

  /*** COUNTERS — animate when in viewport ***/
  (function initCounters() {
    const counters = $$('.number');
    if (!counters || counters.length === 0) return;

    function animateCounter(counter) {
      const target = +counter.getAttribute('data-target') || 0;
      const duration = 2000; // ms
      const start = 0;
      const startTime = performance.now();
      function step(now) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const value = Math.floor(progress * (target - start) + start);
        counter.textContent = value;
        if (progress < 1) requestAnimationFrame(step);
        else counter.textContent = target;
      }
      requestAnimationFrame(step);
    }

    // Intersection Observer to trigger once
    const io = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });

    counters.forEach(c => {
      c.textContent = '0';
      io.observe(c);
    });
  })();

  /*** NEWSLETTER FORM simple handler ***/
  (function initNewsletter() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      const email = input ? input.value.trim() : '';
      if (!email) {
        alert(currentLang === 'bg' ? 'Моля въведете валиден имейл.' : 'Please enter a valid email address.');
        return;
      }
      alert((currentLang === 'bg' ? '✅ Благодарим за абонамента, ' : '✅ Thank you for subscribing, ') + email + '!');
      if (input) input.value = '';
    });
  })();

  /*** CONTACT FORM — basic UX (no backend) ***/
  (function initContactForm() {
    const form = document.querySelector('#contact form');
    if (!form) return;
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      // simple local confirmation
      alert(currentLang === 'bg' ? 'Съобщението е изпратено. Ще се свържем с Вас скоро.' : 'Message sent. We will contact you shortly.');
      form.reset();
    });
  })();

  /*** CHAT WIDGET ***/
  (function initChat() {
    const toggle = document.querySelector('.chat-toggle');
    const box = document.querySelector('.chat-box');
    const closeBtn = document.querySelector('.chat-close');
    const sendBtn = document.getElementById('sendBtn');
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');

    if (toggle && box) {
      toggle.addEventListener('click', () => box.classList.toggle('active'));
    }
    if (closeBtn && box) {
      closeBtn.addEventListener('click', () => box.classList.remove('active'));
    }
    if (sendBtn && input && messages) {
      sendBtn.addEventListener('click', () => {
        const txt = input.value.trim();
        if (!txt) return;
        const el = document.createElement('div');
        el.className = 'chat-msg chat-msg-user';
        el.textContent = txt;
        messages.appendChild(el);
        input.value = '';
        messages.scrollTop = messages.scrollHeight;
      });
    }
  })();

  /*** Small UX: close mobile nav on link click (mobile) ***/
  (function mobileNavCloseOnClick() {
    const navLinks = $$('.nav a');
    const nav = document.querySelector('.nav');
    if (!navLinks || !nav) return;
    navLinks.forEach(a => {
      a.addEventListener('click', () => {
        nav.classList.remove('active');
      });
    });
  })();

  /*** Accessibility: ensure language buttons toggling with ARIA (visual handled by CSS) ***/
  (function addLangAria() {
    langBtnList.forEach(btn => {
      if (btn) {
        btn.setAttribute('role', 'button');
        btn.setAttribute('tabindex', '0');
      }
    });
  })();

  /*** INITIAL TRANSLATION (set english as default) ***/
  // If a language already had active class set in HTML, use it, otherwise default 'en'
  (function detectInitialLangAndApply() {
    const bgBtn = document.getElementById('bg-btn');
    const enBtn = document.getElementById('en-btn');
    if (bgBtn && bgBtn.classList.contains('active')) translatePage('bg');
    else translatePage('en');
  })();

  // Done
})();
