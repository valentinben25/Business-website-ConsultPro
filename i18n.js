/* js/i18n.js
   Contains translations for EN and BG.
   Keep keys matching data-i18n attributes from your HTML.
*/

const TRANSLATIONS = {
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
      title: "Grow Your Business with <span>ConsultPro</span>",
      text: "We provide expert consulting services to help you achieve sustainable growth and success.",
      btn: "Get Started"
    },
    services: {
      "card1": { title: "Business Strategy", text: "Tailored strategies to help your company achieve sustainable growth and efficiency." },
      "card2": { title: "Financial Consulting", text: "Expert financial planning, analysis, and risk management for your business success." },
      "card3": { title: "Market Analysis", text: "In-depth research and insights into your market to keep you ahead of competitors." },
      "card4": { title: "Corporate Training", text: "Workshops and training sessions to boost team productivity and leadership skills." },
      "card5": { title: "IT Consulting", text: "Guidance on digital transformation, cloud solutions, and tech infrastructure." },
      "card6": { title: "Partnership Development", text: "Building strong partnerships to expand your business opportunities worldwide." }
    },
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
      testimonial1: { name: "Sarah Thompson", role: "Marketing Director, VisionCorp", text: "“ConsultPro helped us redefine our strategy and achieve record growth last quarter. Their team is exceptional!”" },
      testimonial2: { name: "James Walker", role: "CEO, FinEdge Solutions", text: "“Professional and reliable — their insights completely transformed how we approach our clients.”" },
      testimonial3: { name: "Emily Davis", role: "Operations Manager, NovaTech", text: "“Working with ConsultPro was a game changer for our company’s long-term vision and operations.”" }
    },
    partners: {
      title: "Our Trusted Partners",
      subtitle: "We’re proud to collaborate with these leading brands and organizations.",
      img1_alt: "Partner 1",
      img2_alt: "Partner 2",
      img3_alt: "Partner 3",
      img4_alt: "Partner 4",
      img5_alt: "Partner 5"
    },
    awards: {
      title: "Our Awards & Achievements",
      subtitle: "Recognizing our dedication to excellence, innovation, and customer satisfaction.",
      card1: { title: "Best Consulting Firm 2023", text: "Awarded for outstanding business strategy and innovation." },
      card2: { title: "Excellence in Customer Service", text: "Recognized for our exceptional client support and care." },
      card3: { title: "Top Business Growth 2024", text: "Honored for driving rapid and sustainable growth." },
      card4: { title: "Innovation Award", text: "Celebrating creative and forward-thinking business solutions." }
    },
    blog: {
      title: "Latest Insights",
      subtitle: "Stay updated with our business tips, success stories, and industry news.",
      post1: { title: "How to Build a Winning Business Strategy", text: "Discover the key elements of developing a strong strategy that drives growth and success." },
      post2: { title: "Top 5 Market Trends for 2025", text: "Explore the biggest shifts that will shape the future of business and consulting." },
      post3: { title: "Boost Your Team’s Productivity", text: "Learn simple yet powerful techniques to keep your team motivated and efficient." },
      btn: "Read More"
    },
    pricing: {
      title: "Our Pricing Plans",
      subtitle: "Choose a plan that fits your business needs and goals.",
      basic: { title: "Basic" },
      btn: "Choose Plan"
    },
    journey: {
      title: "Our Journey",
      subtitle: "A look back at our milestones and growth through the years.",
      step1: { title: "2016 Foundation of ConsultPro", text: "ConsultPro began its journey as a small consultancy firm with a vision to empower businesses worldwide." },
      step2: { title: "2018 International Expansion", text: "We secured our first international client and expanded our services to financial and IT sectors." },
      step3: { title: "2020 Innovation & Growth", text: "Our consulting team grew across Europe, establishing partnerships with global enterprises." },
      step4: { title: "2023", text: "Celebrated a major milestone — over 100 successful consulting projects delivered worldwide." },
      step6: { title: "2025", text: "ConsultPro continues to lead the way in digital transformation and business innovation." }
    },
    careers: {
      title: "Join Our Team",
      subtitle1: "We're always looking for passionate and talented professionals to grow with us.",
      position1: "Business Consultant",
      position2: "Financial Analyst",
      position3: "Marketing Manager",
      subtitle2: "Provide expert advice and insights to help clients improve efficiency and achieve success.",
      subtitle3: "Analyze financial data and develop strategies that help clients grow sustainably.",
      subtitle4: "Lead digital campaigns and branding initiatives to boost our clients’ visibility."
    },
    contact: {
      title: "Contact Us",
      formName: "Your Name",
      formEmail: "Your Email",
      formMessage: "Your Message",
      sendBtn: "Send Message",
      address: "15A Business Street, Sofia, Bulgaria",
      phone: "+44 888 123 456",
      email: "info@consultpro.co.uk",
      hours: "Mon – Fri: 9:00 – 18:00"
    },
    map: {
      title: "Find Us in London"
    },
    footer: {
      rights: "© 2025 ConsultPro. All rights reserved."
    }
  },

  bg: {
    nav: {
      home: "Начало",
      services: "Услуги",
      stats: "Статистика",
      portfolio: "Портфолио",
      testimonials: "Отзиви",
      pricing: "Цени",
      contact: "Контакт",
      map: "Карта"
    },
    hero: {
      title: "Развийте бизнеса си с <span>ConsultPro</span>",
      text: "Предоставяме експертни консултантски услуги, които да ви помогнат да постигнете устойчив растеж и успех.",
      btn: "Започни"
    },
    services: {
      "card1": { title: "Бизнес стратегия", text: "Персонализирани стратегии за устойчив растеж и повишена ефективност." },
      "card2": { title: "Финансови консултации", text: "Експертно финансово планиране, анализ и управление на риска." },
      "card3": { title: "Пазарен анализ", text: "Задълбочени изследвания и прозрения за предимство пред конкуренцията." },
      "card4": { title: "Корпоративно обучение", text: "Обучения и работилници за повишаване на продуктивността и лидерството." },
      "card5": { title: "ИТ консултации", text: "Съвети за дигитална трансформация, облачни решения и инфраструктура." },
      "card6": { title: "Развитие на партньорства", text: "Изграждане на силни партньорства за разширяване на възможностите." }
    },
    team: {
      testimonial1: {
        text: "„Работата в ConsultPro беше невероятно преживяване! Растях професионално и лично благодарение на подкрепящото ръководство.“",
        name: "Джон Смит",
        role: "Главен изпълнителен директор"
      },
      testimonial2: {
        text: "„Екипната работа и културата тук са наистина вдъхновяващи. Всеки проект е общ успех.“",
        name: "Грейс Кембъл",
        role: "Финансов консултант"
      },
      testimonial3: {
        text: "„ConsultPro дава свобода да иновираш и да предлагаш идеи. Приятно е да работиш в такава динамична среда.“",
        name: "Мейсън Джером",
        role: "Маркетинг експерт"
      }
    },
    clients: {
      testimonial1: { name: "Сара Томпсън", role: "Директор маркетинг, VisionCorp", text: "„ConsultPro ни помогна да променим стратегията си и да постигнем рекорден растеж.“" },
      testimonial2: { name: "Джеймс Уокър", role: "Главен изпълнителен директор, FinEdge Solutions", text: "„Професионални и надеждни — техните прозрения преобразиха подхода ни.“" },
      testimonial3: { name: "Емили Дейвис", role: "Оперативен мениджър, NovaTech", text: "„Работата с ConsultPro промени дългосрочната визия и операциите ни.“" }
    },
    partners: {
      title: "Нашите партньори",
      subtitle: "Гордеем се с партньорства с водещи брандове и организации.",
      img1_alt: "Партньор 1",
      img2_alt: "Партньор 2",
      img3_alt: "Партньор 3",
      img4_alt: "Партньор 4",
      img5_alt: "Партньор 5"
    },
    awards: {
      title: "Награди и постижения",
      subtitle: "Признание за отдаденост към качество, иновация и удовлетвореност на клиентите.",
      card1: { title: "Най-добра консултантска фирма 2023", text: "Отличени за изключителни бизнес стратегии и иновации." },
      card2: { title: "Отлично обслужване на клиенти", text: "Признание за изключителна клиентска поддръжка и грижа." },
      card3: { title: "Водещ бизнес растеж 2024", text: "Отличие за бърз и устойчив растеж." },
      card4: { title: "Иновации", text: "Награда за креативни и перспективни бизнес решения." }
    },
    blog: {
      title: "Последни статии",
      subtitle: "Останете в час с бизнес съвети, истории за успех и новини от бранша.",
      post1: { title: "Как да изградите печеливша бизнес стратегия", text: "Открийте ключовите елементи за силна стратегия, която води до растеж." },
      post2: { title: "Топ 5 тенденции за 2025", text: "Разгледайте големите промени, които ще оформят бъдещето на бизнеса." },
      post3: { title: "Повишете продуктивността на екипа си", text: "Научете прости и ефективни техники за мотивация и ефективност." },
      btn: "Прочети"
    },
    pricing: {
      title: "Ценови планове",
      subtitle: "Изберете план, който отговаря на нуждите и целите ви.",
      basic: { title: "Базов" },
      btn: "Избери план"
    },
    journey: {
      title: "Нашият път",
      subtitle: "Поглед назад към нашите важни етапи и растеж през годините.",
      step1: { title: "2016 Основаване на ConsultPro", text: "ConsultPro започна като малка консултантска фирма с визия да подкрепя бизнесите по света." },
      step2: { title: "2018 Международно разширение", text: "Спечелихме първия си международен клиент и разширихме услугите си." },
      step3: { title: "2020 Иновации и растеж", text: "Екипът ни се разшири в цяла Европа и установихме глобални партньорства." },
      step4: { title: "2023", text: "Отбелязахме важна стъпка — над 100 успешни проекта." },
      step6: { title: "2025", text: "ConsultPro продължава да води дигиталната трансформация и иновации." }
    },
    careers: {
      title: "Присъединете се към екипа",
      subtitle1: "Винаги търсим страстни и талантливи професионалисти.",
      position1: "Бизнес консултант",
      position2: "Финансов анализатор",
      position3: "Маркетинг мениджър",
      subtitle2: "Предоставяйте експертни съвети и прозрения за по-добра ефективност.",
      subtitle3: "Анализирайте финансови данни и разработвайте стратегии за растеж.",
      subtitle4: "Водете дигитални кампании и брандинг инициативи."
    },
    contact: {
      title: "Свържете се с нас",
      formName: "Вашето име",
      formEmail: "Вашият имейл",
      formMessage: "Вашето съобщение",
      sendBtn: "Изпрати",
      address: "15A Business Street, Sofia, Bulgaria",
      phone: "+44 888 123 456",
      email: "info@consultpro.co.uk",
      hours: "Пон - Пет: 9:00 – 18:00"
    },
    map: {
      title: "Намерете ни в Лондон"
    },
    footer: {
      rights: "© 2025 ConsultPro. Всички права запазени."
    }
  }
};
