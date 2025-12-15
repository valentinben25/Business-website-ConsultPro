/* =========================
   script.js - Variant A
   Clean i18n + UI + Portfolio Fade Slider
   No Swiper dependency. Defensive & single-file.
   ========================= */

const STORAGE_KEY = 'consultpro_lang';

/* -------------------------
   TRANSLATIONS (EN & BG)
   Keep keys that match your data-i18n attributes.
   ------------------------- */
const translations = {
  en: {
    nav: {
      home: "Home",
      services: "Services",
      process: "Process",
      stats: "Achievements",
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
      title: "Our Services",
      subtitle: "We provide professional consulting to help your business succeed.",
      card1: { title: "Business Strategy", text: "Tailored strategies to help your company achieve sustainable growth and efficiency." },
      card2: { title: "Financial Consulting", text: "Expert financial planning, analysis, and risk management for your business success." },
      card3: { title: "Market Analysis", text: "In-depth research and insights into your market to keep you ahead of competitors." },
      card4: { title: "Corporate Training", text: "Workshops and training sessions to boost team productivity and leadership skills." },
      card5: { title: "IT Consulting", text: "Guidance on digital transformation, cloud solutions, and tech infrastructure." },
      card6: { title: "Partnership Development", text: "Building strong partnerships to expand your business opportunities worldwide." }
    },
    process: {
      title: "Our Process",
      subtitle: "We follow a clear and effective process to ensure successful results for every client.",
      step1: { title: "1. Consultation", text: "We start by understanding your business needs, challenges, and goals to create a personalized approach." },
      step2: { title: "2. Strategy", text: "Our team develops a data-driven strategy that aligns with your objectives and market opportunities." },
      step3: { title: "3. Implementation", text: "We execute the plan efficiently using proven methodologies and continuous performance tracking." },
      step4: { title: "4. Results", text: "We deliver measurable outcomes, review success metrics, and provide recommendations for long-term growth." }
    },
    stats: {
      title: "Our Achievements",
      subtitle: "Key milestones that highlight our expertise and growth.",
      clients: "250+",
      clientsLabel: "Happy Clients",
      projects: "480+",
      projectsLabel: "Completed Projects",
      years: "10+",
      yearsLabel: "Years of Experience",
      experts: "40+",
      expertsLabel: "Expert Consultants"
    },
    portfolio: {
      title: "Our Projects",
      subtitle: "Explore some of our featured works and consulting projects.",
      item1: { title1: "Business Growth Strategy", text1: "Helping companies expand globally with smart solutions." },
      item2: { title2: "Digital Transformation", text2: "Modernizing organizations for the new digital economy." },
      item3: { title3: "Financial Analysis", text3: "Providing detailed financial insights and growth plans." },
      item4: { title4: "Corporate Training", text4: "Empowering employees through leadership and innovation." },
      item5: { title5: "Partnership Development", text5: "Creating strategic collaborations that drive business success." }
    },
    cases: {
      title: "Case Studies & Success Stories",
      subtitle: "See how we’ve helped businesses achieve remarkable growth and transformation.",
      case1: { title: "Financial Strategy Transformation", text: "We helped a UK-based finance firm boost efficiency by 35% through data-driven insights and process optimization.", button: "Read Full Story" },
      case2: { title: "Digital Marketing Revamp", text: "Our team designed a new marketing strategy that increased online engagement by 60% within 3 months.", button: "Read Full Story" },
      case3: { title: "Global Expansion Support", text: "ConsultPro guided a startup through international expansion, reaching 5 new markets in under a year.", button: "Read Full Story" }
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Hear from business leaders who trusted our expertise.",
      client1: { name: "John Williams", role: "CEO, FinCorp", text: "“ConsultPro helped us redesign our financial strategy and improve efficiency by over 40%.”" },
      client2: { name: "Emily Roberts", role: "Marketing Director", text: "“Their digital transformation roadmap boosted our online presence within months.”" },
      client3: { name: "Michael Brown", role: "Operations Manager", text: "“Professional, reliable, and innovative — highly recommended for any growing business.”" }
    },
    why: {
      title: "Why Choose ConsultPro",
      subtitle: "Discover what makes our consulting services stand out.",
      item1: { title: "Experienced Professionals", text: "Our team brings years of industry experience and real-world business insight to every project." },
      item2: { title: "Innovative Strategies", text: "We develop creative, data-driven strategies to help your business stay ahead of the competition." },
      item3: { title: "Client-Centric Approach", text: "Your goals are our priority — we work closely with you to achieve measurable success." },
      item4: { title: "Global Expertise", text: "We deliver consulting solutions that meet international standards and market needs." }
    },

    clients: {
  title: "What Our Clients Say",
  subtitle: "Real feedback from satisfied business partners.",

  testimonial1: {
    name: "Sarah Thompson",
    role: "Marketing Director, VisionCorp",
    text: "ConsultPro helped us redefine our strategy and achieve record growth last quarter. Their team is exceptional!"
  },

  testimonial2: {
    name: "James Walker",
    role: "CEO, FinEdge Solutions",
    text: "Professional and reliable — their insights completely transformed how we approach our clients."
  },

  testimonial3: {
    name: "Emily Davis",
    role: "Operations Manager, NovaTech",
    text: "Working with ConsultPro was a game changer for our company’s long-term vision and operations."
  }
},

faq: {
  title: "Frequently Asked Questions",
  subtitle: "Answers to common questions about our consulting services.",
  q1: "What industries do you specialize in?",
  q2: "How long does a consulting project take?",
  q3: "Do you offer remote consulting?",
  q4: "Can you help with business strategy and marketing?"
},

partners: {
  title: "Our Trusted Partners",
  subtitle: "We’re proud to collaborate with these leading brands and organizations."
},


 awards: {
  title: "Our Awards & Achievements",
  subtitle: "Recognizing our dedication to excellence, innovation, and customer satisfaction.",

  card1: {
    title: "Best Consulting Firm 2023",
    text: "Awarded for outstanding business strategy and innovation."
  },

  card2: {
    title: "Excellence in Customer Service",
    text: "Recognized for our exceptional client support and care."
  },

  card3: {
    title: "Top Business Growth 2024",
    text: "Honored for driving rapid and sustainable growth."
  },

   card4: {
    title: "Innovation Award",
    text: "Celebrating creative and forward-thinking business solutions."
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
    text: "Learn simple yet powerful techniques to keep your team motivated and efficient."
  },

  btn: "Read More"
},


pricing: {
  title: "Our Pricing Plans",
  subtitle: "Choose a plan that fits your business needs and goals.",

  chooseBtn: "Choose Plan",
  btn: "Choose Plan",

  basic: {
    title: "Basic",
    price: "$199 / month",
    feature1: "✔ Business Consultation",
    feature2: "✔ Financial Planning",
    feature3: "✖ Marketing Strategy",
    feature4: "✖ Ongoing Support"
  },

  standard: {
    title: "Standard",
    price: "$399 / month",
    feature1: "✔ Full Business Consultation",
    feature2: "✔ Financial & Market Analysis",
    feature3: "✔ Marketing Strategy",
    feature4: "✖ Dedicated Consultant"
  },

  premium: {
    title: "Premium",
    price: "Custom",
    feature1: "✔ Complete Business Solutions",
    feature2: "✔ Dedicated Expert Consultant",
    feature3: "✔ Full Support 24/7",
    feature4: "✔ Growth Strategy Reports"
  }
},


journey: {
  title: "Our Journey",
  subtitle: "A look back at our milestones and growth through the years.",

  step1: {
    title: "2016 Foundation of ConsultPro",
    subtitle: "Company Founded",
    text: "ConsultPro began its journey as a small consultancy firm with a vision to empower businesses worldwide."
  },

  step2: {
    title: "2018 International Expansion",
    subtitle: "First Major Client",
    text: "We secured our first international client and expanded our services to financial and IT sectors."
  },

  step3: {
    title: "2020 Innovation & Growth",
    subtitle: "Global Expansion",
    text: "Our consulting team grew across Europe, establishing partnerships with global enterprises."
  },

  step4: {
    title: "2023",
    subtitle: "100+ Projects Completed",
    text: "Celebrated a major milestone — over 100 successful consulting projects delivered worldwide."
  },

  step5: {
    title: "2025",
    subtitle: "Innovation & Digital Future",
    text: "ConsultPro continues to lead the way in digital transformation and business innovation."
  }
},

careers: {
  title: "Join Our Team",
  subtitle1: "We're always looking for passionate and talented professionals to grow with us.",

  apply: "Apply Now",

  position1: {
    title: "Business Consultant",
    text: "Provide expert advice and insights to help clients improve efficiency and achieve success.",
    feature1: "3+ years experience in consulting",
    feature2: "Strong analytical skills",
    feature3: "Excellent communication"
  },

  position2: {
    title: "Financial Analyst",
    text: "Analyze financial data and develop strategies that help clients grow sustainably.",
    feature1: "Degree in Finance or Economics",
    feature2: "Strong Excel & modeling skills",
    feature3: "Detail-oriented mindset"
  },

  position3: {
    title: "Marketing Manager",
    text: "Lead digital campaigns and branding initiatives to boost our clients’ visibility.",
    feature1: "5+ years in marketing",
    feature2: "Experience with Google Ads & SEO",
    feature3: "Creative thinker"
  }
},

cta: {
  title: "Ready to Take Your Business to the Next Level?",
  text: "Our experts are here to help you grow, innovate, and succeed in every step of your journey.",
  btn: "Contact Us"
},


contact: {
  title: "Contact Us",
  subtitle: "We’d love to hear from you. Get in touch with our team.",

  infoTitle: "Get in Touch",
  infoText: "Whether you’re looking for business advice or collaboration, we’re here to help.",

  address: "15A Business Street, Sofia, Bulgaria",
  email: "info@consultpro.com",
  phone: "+44 888 123 456",
  hours: "Mon – Fri: 9:00 – 18:00",

  formName: "Your Name",
  formEmail: "Your Email",
  formMessage: "Your Message",
  sendBtn: "Send Message"
},



newsletter: {
  title: "Subscribe to Our Newsletter",
  subtitle: "Stay updated with the latest business insights, trends, and exclusive offers from ConsultPro.",
  placeholder: "Enter your email address",
  subscribeBtn: "Subscribe",
  note: "We respect your privacy. Unsubscribe anytime."
},

map: {
  title: "Find Us in London"
},


chat: {
  title: "Ask a Consultant",
  greeting: "Hello 👋! How can we assist you today?",
  placeholder: "Type your message..."
},


footer: {
  tagline: "Your trusted partner for business growth and innovation.",
  quicklinks: "Quick Links",

  link: {
    home: "Home",
    services: "Services",
    portfolio: "Portfolio",
    contact: "Contact"
  },

  contact: "Contact Info",
  address: "London, UK",
  phone: "+44 888 123 456",
  email: "info@consultpro.co.uk",

  rights: "© 2025 ConsultPro. All rights reserved."
}



},

  bg: {
    nav: {
      home: "Начало",
      services: "Услуги",
      process: "Процес",
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
      title: "Нашите услуги",
      subtitle: "Предоставяме професионални консултантски услуги, за да помогнем на вашия бизнес да успее.",
      card1: { title: "Бизнес Стратегия", text: "Персонализирани стратегии за устойчив растеж и ефективност." },
      card2: { title: "Финансово Консултиране", text: "Експертно финансово планиране, анализ и управление на риска." },
      card3: { title: "Анализ на Пазара", text: "Задълбочени изследвания и прозрения, за да сте пред конкурентите." },
      card4: { title: "Корпоративно Обучение", text: "Уъркшопи и обучения за повишаване на продуктивността и лидерството." },
      card5: { title: "ИТ Консултации", text: "Съвети за дигитална трансформация, облачни решения и инфраструктура." },
      card6: { title: "Развитие на Партньорства", text: "Изграждане на силни партньорства за разширяване на възможностите." }
    },
    process: {
      title: "Нашият процес",
      subtitle: "Следваме ясен и ефективен процес за успешни резултати.",
      step1: { title: "1. Консултация", text: "Започваме с разбирателство на вашите нужди, предизвикателства и цели." },
      step2: { title: "2. Стратегия", text: "Разработваме стратегия, базирана на данни, съобразена с вашите цели." },
      step3: { title: "3. Изпълнение", text: "Изпълняваме плана ефективно с доказани методологии и проследяване." },
      step4: { title: "4. Резултати", text: "Доставяме измерими резултати и препоръки за дългосрочен растеж." }
    },
    stats: {
      title: "Нашите Постижения",
      subtitle: "Ключови стъпки, които показват нашия опит и растеж.",
      clients: "250+",
      clientsLabel: "Доволни клиенти",
      projects: "480+",
      projectsLabel: "Завършени проекти",
      years: "10+",
      yearsLabel: "Години опит",
      experts: "40+",
      expertsLabel: "Експертни консултанти"
    },

    portfolio: {
      title: "Нашите Проекти",
      subtitle: "Разгледайте някои от нашите успешни реализации и консултантски проекти.",
      item1: { title1: "Бизнес стратегия за растеж", text1: "Помагаме на компании да се разширяват глобално с интелигентни решения." },
      item2: { title2: "Дигитална трансформация", text2: "Модернизираме организациите за новата дигитална икономика." },
      item3: { title3: "Финансов анализ", text3: "Предоставяме подробни финансови анализи и планове за растеж." },
      item4: { title4: "Корпоративно обучение", text4: "Подпомагаме служителите чрез обучение и иновации." },
      item5: { title5: "Развитие на партньорства", text5: "Създаваме стратегически партньорства за бизнес успех." }
    },
    cases: {
      title: "Казуси и успешни истории",
      subtitle: "Вижте как сме помогнали на бизнеси да постигнат значителен растеж.",
      case1: { title: "Трансформация на финансовата стратегия", text: "Помогнахме на финансова компания да увеличи ефективността с 35% чрез данни и оптимизация.", button: "Прочети Цялата История" },
      case2: { title: "Ревизия на дигиталния маркетинг", text: "Новата маркетингова стратегия увеличи ангажираността с 60% за 3 месеца.", button: "Прочети Цялата История" },
      case3: { title: "Подкрепа за глобална експанзия", text: "Насочихме стартъп в 5 нови пазара за по-малко от година.", button: "Прочети Цялата История" }
    },
    testimonials: {
      title: "Какво Казват Нашите Клиенти",
      subtitle: "Мнения от бизнес лидери, които се довериха на нашия опит.",
      client1: { name: "Джон Уилямс", role: "CEO, FinCorp", text: "„ConsultPro ни помогна да преработим финансовата си стратегия и подобрихме ефективността с над 40%.“" },
      client2: { name: "Емили Робъртс", role: "Маркетинг директор", text: "„Техният план за дигитална трансформация увеличи онлайн присъствието ни само за няколко месеца.“" },
      client3: { name: "Майкъл Браун", role: "Оперативен мениджър", text: "„Професионални, надеждни и иновативни — препоръчвам ги на всеки растящ бизнес.“" }
    },
    why: {
      title: "Защо да изберете ConsultPro",
      subtitle: "Разберете какво отличава нашите консултантски услуги.",
      item1: { title: "Опитни професионалисти", text: "Нашият екип носи години индустриален опит и реални бизнес познания във всеки проект." },
      item2: { title: "Иновативни стратегии", text: "Разработваме креативни и базирани на данни стратегии, които помагат на вашия бизнес да изпреварва конкуренцията." },
      item3: { title: "Клиентски ориентиран подход", text: "Вашите цели са наш приоритет — работим заедно с вас, за да постигнете измерим успех." },
      item4: { title: "Глобална експертиза", text: "Предоставяме консултантски решения, които отговарят на международни стандарти и пазарни нужди." }
    },
  
  
  clients: {
  title: "Какво казват нашите клиенти",
  subtitle: "Реални отзиви от доволни бизнес партньори.",

  testimonial1: {
    name: "Сара Томпсън",
    role: "Маркетинг директор, VisionCorp",
    text: "ConsultPro ни помогна да преформулираме стратегията си и постигнахме рекорден растеж миналото тримесечие."
  },

  testimonial2: {
    name: "Джеймс Уокър",
    role: "CEO, FinEdge Solutions",
    text: "Професионални и надеждни — напълно промениха начина, по който работим с клиентите си."
  },

  testimonial3: {
    name: "Емили Дейвис",
    role: "Оперативен мениджър, NovaTech",
    text: "Работата с ConsultPro беше ключова за дългосрочната визия и операциите на компанията ни."
  }
},

faq: {
  title: "Често задавани въпроси",
  subtitle: "Отговори на най-често задаваните въпроси относно нашите консултантски услуги.",
  q1: "В кои индустрии сте специализирани?",
  q2: "Колко време отнема един консултантски проект?",
  q3: "Предлагате ли дистанционни консултации?",
  q4: "Можете ли да помогнете с бизнес стратегия и маркетинг?"
},

partners: {
  title: "Нашите доверени партньори",
  subtitle: "Горди сме да си сътрудничим с водещи брандове и организации."
},

 awards: {
  title: "Нашите Награди и Постижения",
  subtitle: "Признавайки нашата отдаденост към върхови постижения, иновации и удовлетвореност на клиентите.",

  card1: {
    title: "Най-Добра Консултантска Фирма 2023",
    text: "Отличена за изключителна бизнес стратегия и иновации."
  },

  card2: {
    title: "Отлични постижения в обслужването на клиенти",
    text: "Признат за нашата изключителна подкрепа и грижа за клиентите."
  },

  card3: {
    title: "Топ Бизнес Растеж 2024",
    text: "Отличени за шофиране бърз и устойчив растеж."
  },

   card4: {
    title: "Награда за Иновации",
    text: "Празнуване на творчески и напредничави бизнес решения."
  }
},

blog: {
  title: "Последни анализи",
  subtitle: "Бъдете в течение с нашите бизнес съвети, успешни истории и новини от индустрията.",

  post1: {
    title: "Как да изградите печеливша бизнес стратегия",
    text: "Открийте ключовите елементи за създаване на силна стратегия, която води до растеж и успех."
  },

  post2: {
    title: "Топ 5 пазарни тенденции за 2025",
    text: "Разгледайте най-големите промени, които ще оформят бъдещето на бизнеса и консултирането."
  },

  post3: {
    title: "Повишете продуктивността на екипа си",
    text: "Научете лесни, но ефективни техники за мотивация и висока ефективност."
  },

  btn: "Прочети повече"
},

pricing: {
  title: "Нашите Ценови Планове",
  subtitle: "Изберете план, който отговаря на нуждите и целите на вашия бизнес.",

  chooseBtn: "Избери План",
  btn: "Избери План",

  basic: {
    title: "Основен",
    price: "199$ / месец",
    feature1: "✔ Бизнес консултация",
    feature2: "✔ Финансово планиране",
    feature3: "✖ Маркетинг стратегия",
    feature4: "✖ Постоянна поддръжка"
  },

  standard: {
    title: "Стандартен",
    price: "399$ / месец",
    feature1: "✔ Пълна бизнес консултация",
    feature2: "✔ Финансов и пазарен анализ",
    feature3: "✔ Маркетинг стратегия",
    feature4: "✖ Личен консултант"
  },

  premium: {
    title: "Премиум",
    price: "По договаряне",
    feature1: "✔ Цялостни бизнес решения",
    feature2: "✔ Личен експерт консултант",
    feature3: "✔ Пълна поддръжка 24/7",
    feature4: "✔ Доклади за растеж"
  }
},

journey: {
  title: "Нашият Път",
  subtitle: "Поглед назад към ключовите ни моменти и растежа през годините.",

  step1: {
    title: "2016 – Основаване на ConsultPro",
    subtitle: "Създаване на компанията",
    text: "ConsultPro започна като малка консултантска фирма с визия да подпомага бизнеса по целия свят."
  },

  step2: {
    title: "2018 – Международно разширяване",
    subtitle: "Първи голям клиент",
    text: "Привлякохме първия си международен клиент и разширихме услугите си във финансовия и IT сектор."
  },

  step3: {
    title: "2020 – Иновации и растеж",
    subtitle: "Глобално разширяване",
    text: "Нашият екип се разрасна в цяла Европа и създадохме партньорства с международни компании."
  },

  step4: {
    title: "2023",
    subtitle: "Над 100 завършени проекта",
    text: "Отбелязахме важен етап — над 100 успешно реализирани консултантски проекта по света."
  },

  step5: {
    title: "2025",
    subtitle: "Иновации и дигитално бъдеще",
    text: "ConsultPro продължава да бъде лидер в дигиталната трансформация и бизнес иновациите."
  }
},

careers: {
  title: "Присъедини се към <span>нашия екип</span>",
  subtitle1: "Винаги търсим мотивирани и талантливи професионалисти, които да растат заедно с нас.",

  apply: "Кандидатствай",

  position1: {
    title: "Бизнес консултант",
    text: "Предоставяне на експертни съвети и анализи за подобряване на ефективността и успеха на клиентите.",
    feature1: "Над 3 години опит в консултирането",
    feature2: "Силни аналитични умения",
    feature3: "Отлична комуникация"
  },

  position2: {
    title: "Финансов анализатор",
    text: "Анализ на финансови данни и разработване на стратегии за устойчив растеж.",
    feature1: "Образование по финанси или икономика",
    feature2: "Отлични умения с Excel и моделиране",
    feature3: "Внимание към детайла"
  },

  position3: {
    title: "Маркетинг мениджър",
    text: "Управление на дигитални кампании и бранд стратегии за по-добра видимост.",
    feature1: "Над 5 години опит в маркетинга",
    feature2: "Опит с Google Ads и SEO",
    feature3: "Креативно мислене"
  }
},

careers: {
  title: "Присъедини се към нашия екип",
  subtitle1: "Винаги търсим мотивирани и талантливи професионалисти, които да растат заедно с нас.",

  apply: "Кандидатствай",

  position1: {
    title: "Бизнес консултант",
    text: "Предоставяне на експертни съвети и анализи за подобряване на ефективността и успеха на клиентите.",
    feature1: "Над 3+ години опит в консултирането",
    feature2: "Силни аналитични умения",
    feature3: "Отлична комуникация"
  },

  position2: {
  title: "Финансов анализатор",
  text: "Анализ на финансови данни и разработване на стратегии за устойчив растеж.",
  feature1: "Образование по финанси или икономика",
  feature2: "Отлични умения с Excel и моделиране",
  feature3: "Внимание към детайла"
},

position3: {
  title: "Маркетинг мениджър",
  text: "Управление на дигитални кампании и бранд стратегии за по-добра видимост.",
  feature1: "Над 5 години опит в маркетинга",
  feature2: "Опит с Google Ads и SEO",
  feature3: "Креативно мислене"
}
},

cta: {
  title: "Готови ли сте да изведете бизнеса си на следващо ниво?",
  text: "Нашите експерти са тук, за да ви помогнат да растете, иновирате и постигате успех на всяка стъпка.",
  btn: "Свържете се с нас"
},


contact: {
  title: "Свържете се с нас",
  subtitle: "Ще се радваме да чуем от вас. Свържете се с нашия екип.",

  infoTitle: "Връзка с нас",
  infoText: "Независимо дали търсите бизнес съвет или партньорство, ние сме тук, за да помогнем.",

  address: "Бизнес улица 15A, София, България",
  email: "info@consultpro.com",
  phone: "+359 888 123 456",
  hours: "Пон – Пет: 9:00 – 18:00",

  formName: "Вашето име",
  formEmail: "Вашият имейл",
  formMessage: "Вашето съобщение",
  sendBtn: "Изпрати съобщение"
},



newsletter: {
  title: "Абонирай се за нашия бюлетин",
  subtitle: "Бъди в течение с най-новите бизнес анализи, тенденции и ексклузивни предложения от ConsultPro.",
  placeholder: "Въведете вашия имейл адрес",
  subscribeBtn: "Абонирай се",
  note: "Ние уважаваме вашата поверителност. Можете да се отпишете по всяко време."
},


map: {
  title: "Намерете ни в Лондон"
},


chat: {
  title: "Попитайте консултант",
  greeting: "Здравейте 👋! Как можем да ви помогнем днес?",
  placeholder: "Напишете вашето съобщение..."
},


footer: {
  tagline: "Вашият доверен партньор за бизнес растеж и иновации.",
  quicklinks: "Бързи връзки",

  link: {
    home: "Начало",
    services: "Услуги",
    portfolio: "Портфолио",
    contact: "Контакт"
  },

  contact: "Контакти",
  address: "Лондон, Великобритания",
  phone: "+44 888 123 456",
  email: "info@consultpro.co.uk",

  rights: "© 2025 ConsultPro. Всички права запазени."
}

},

};

/* =========================
   Helpers
   ========================= */
function safelyGet(obj, path) {
  if (!obj || !path) return undefined;
  return path.split('.').reduce((acc, k) => (acc && acc[k] !== undefined) ? acc[k] : undefined, obj);
}

/* Try to resolve a key smartly:
   - direct full path (e.g. "portfolio.item1.title1")
   - fallback to scanning top-level sections: try section.key (i.e. langObj[section][key])
   - last fallback to english pack
*/
function resolveTranslation(langObj, key) {
  if (!key) return undefined;

  // 1) direct full path
  let val = safelyGet(langObj, key);
  if (val !== undefined) return val;

  // 2) if key starts with a top-level name we already covered; otherwise try scanning sections
  for (const sectionKey of Object.keys(langObj)) {
    const attempt = safelyGet(langObj[sectionKey], key);
    if (attempt !== undefined) return attempt;
  }

  // 3) fallback to english pack (direct or section-scan)
  val = safelyGet(translations.en, key);
  if (val !== undefined) return val;
  for (const sec of Object.keys(translations.en)) {
    const attempt = safelyGet(translations.en[sec], key);
    if (attempt !== undefined) return attempt;
  }

  return undefined;
}

/* =========================
   Apply translations to DOM
   Supports: data-i18n (text), data-i18n-html (innerHTML),
             data-i18n-placeholder, data-i18n-alt
   ========================= */
function applyTranslation(lang) {
  const langObj = translations[lang] || translations.en;

  // textContent
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = resolveTranslation(langObj, key);
    if (val !== undefined) el.textContent = val;
  });

  // innerHTML (for hero title with <span>)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = resolveTranslation(langObj, key);
    if (val !== undefined) el.innerHTML = val;
  });

  // placeholder
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = resolveTranslation(langObj, key);
    if (val !== undefined) el.setAttribute('placeholder', val);
  });

  // alt
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    const key = el.getAttribute('data-i18n-alt');
    const val = resolveTranslation(langObj, key);
    if (val !== undefined) el.setAttribute('alt', val);
  });
}

/* =========================
   Language set / init
   ========================= */
function setLanguage(lang, save = true) {
  if (!translations[lang]) lang = 'en';
  applyTranslation(lang);

  // update active class on language buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const id = btn.id || '';
    btn.classList.toggle('active', (lang === 'en' && id === 'en-btn') || (lang === 'bg' && id === 'bg-btn'));
  });

  if (save) localStorage.setItem(STORAGE_KEY, lang);
}

function setLanguageWithTransition(lang) {
  const textEls = document.querySelectorAll(
    '[data-i18n], [data-i18n-html], [data-i18n-placeholder]'
  );

  // fade out text only
  textEls.forEach(el => el.classList.add('lang-text-hide'));

  setTimeout(() => {
    setLanguage(lang);

    // fade in text only
    textEls.forEach(el => el.classList.remove('lang-text-hide'));
  }, 200);
}

function setLanguageWithTransition(lang) {
  const textNodes = document.querySelectorAll(
    '[data-i18n], [data-i18n-html], [data-i18n-placeholder]'
  );

  // fade out ONLY text
  textNodes.forEach(el => {
    el.classList.add('text-fade-out');
  });

  setTimeout(() => {
    setLanguage(lang);

    textNodes.forEach(el => {
      el.classList.remove('text-fade-out');
      el.classList.add('text-fade-in');

      setTimeout(() => {
        el.classList.remove('text-fade-in');
      }, 300);
    });
  }, 200);
}


function initLanguageButtons() {
  const enBtn = document.getElementById('en-btn');
  const bgBtn = document.getElementById('bg-btn');

  if (enBtn) enBtn.addEventListener('click', () => setLanguageWithTransition('en'));
  if (bgBtn) bgBtn.addEventListener('click', () => setLanguageWithTransition('bg'));

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.setAttribute('role', 'button');
    btn.tabIndex = 0;
    btn.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); btn.click(); }
    });
  });

  // initial language: saved or detect
  const saved = localStorage.getItem(STORAGE_KEY);
  const navLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const initial = saved || (navLang.startsWith('bg') ? 'bg' : 'en');
  setLanguage(initial, false);
}

/* =========================
   Menu toggle (mobile)
   ========================= */
function initMenuToggle() {
  const toggle = document.querySelector('.menu-toggle');
  if (!toggle) return;
  toggle.setAttribute('role', 'button');
  toggle.tabIndex = 0;
  toggle.setAttribute('aria-expanded', 'false');
  toggle.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
  toggle.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); toggle.click(); }
  });
}

/* =========================
   Nav UX small fixes
   ========================= */
function patchNavUX() {
  document.querySelectorAll('nav a').forEach(a => {
    if (!a.hasAttribute('href') || a.getAttribute('href').trim() === '') a.setAttribute('href', '#');
    a.style.cursor = 'pointer';
    if (!a.hasAttribute('tabindex')) a.tabIndex = 0;
    a.addEventListener('click', () => {
      if (document.body.classList.contains('menu-open')) {
        document.body.classList.remove('menu-open');
        const t = document.querySelector('.menu-toggle');
        if (t) t.setAttribute('aria-expanded', 'false');
      }
    });
    a.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); a.click(); }
    });
  });
}

/* =========================
   Simple reveal on scroll
   ========================= */
function initReveal() {
  const selector = ['section', '.service-card', '.case-card', '.testimonial-card', '.pricing-card', '.portfolio .slide'].join(',');
  const items = document.querySelectorAll(selector);
  if (!items.length) return;
  if (!('IntersectionObserver' in window)) {
    items.forEach(i => i.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach(i => { i.classList.add('reveal'); io.observe(i); });
}

/* =========================
   Portfolio fade slider (no Swiper)
   - keeps stable layout height while fading
   ========================= */
function initPortfolioSlider() {
  const slider = document.querySelector('.portfolio-slider');
  if (!slider) return;
  const slides = Array.from(slider.querySelectorAll('.slide'));
  if (!slides.length) return;
  const prevBtn = slider.querySelector('.prev');
  const nextBtn = slider.querySelector('.next');

  let index = slides.findIndex(s => s.classList.contains('active'));
  if (index < 0) index = 0;
  let animating = false;

  // base styles for transitions
  slides.forEach((s, i) => {
    s.style.transition = 'opacity 0.7s ease';
    s.style.opacity = (i === index ? '1' : '0');
    s.style.display = 'block'; // keep block for stable layout
    if (i === index) s.classList.add('active'); else s.classList.remove('active');
  });

  function showSlide(i) {
    if (animating || i === index) return;
    animating = true;
    const prev = slides[index];
    const next = slides[i];

    // fade out prev
    prev.style.opacity = '0';
    prev.classList.remove('active');

    // fade in next
    next.classList.add('active');
    // force reflow
    void next.offsetWidth;
    next.style.opacity = '1';

    setTimeout(() => {
      index = i;
      animating = false;
    }, 700);
  }

  function next() { showSlide((index + 1) % slides.length); }
  function prev() { showSlide((index - 1 + slides.length) % slides.length); }

  nextBtn?.addEventListener('click', next);
  prevBtn?.addEventListener('click', prev);

  // autoplay (store interval on slider so it won't duplicate)
  if (!slider._autoInterval) slider._autoInterval = setInterval(next, 4500);
}

/* =========================
   Safe init
   ========================= */
function safeInit() {
  try { initLanguageButtons(); } catch (e) { console.error('i18n init failed', e); }
  try { initMenuToggle(); } catch (e) { console.error('menu toggle failed', e); }
  try { patchNavUX(); } catch (e) { console.error('nav patch failed', e); }
  try { initReveal(); } catch (e) { console.error('reveal init failed', e); }
  try { initPortfolioSlider(); } catch (e) { console.error('portfolio init failed', e); }
  document.body.classList.add('lang-visible');
}

// run once DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', safeInit);
} else {
  safeInit();
}

/* expose for debugging */
window.ConsultPro = {
  setLanguage,
  getCurrentLanguage: () => localStorage.getItem(STORAGE_KEY) || ((navigator.language || 'en').slice(0,2))
};


document.addEventListener("DOMContentLoaded", () => {
  const chatToggle = document.querySelector(".chat-toggle");
  const chatBox = document.querySelector(".chat-box");
  const chatClose = document.querySelector(".chat-close");

  chatToggle.addEventListener("click", () => {
    chatBox.classList.toggle("active");
  });

  chatClose.addEventListener("click", () => {
    chatBox.classList.remove("active");
  });
});


document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("chatInput");
  const sendBtn = document.getElementById("sendBtn");
  const messages = document.getElementById("chatMessages");

  function addMessage(text, type = "user") {
    const msg = document.createElement("div");
    msg.className = `chat-msg ${type}`;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  function botReply() {
    const lang = window.ConsultPro?.getCurrentLanguage?.() || "en";

    const replies = {
      en: [
        "Thanks for your message! 👌",
        "One of our consultants will contact you shortly.",
        "You can also reach us via WhatsApp or Messenger 😊"
      ],
      bg: [
        "Благодарим за съобщението! 👌",
        "Наш консултант ще се свърже с вас скоро.",
        "Можете да ни пишете и във WhatsApp или Messenger 😊"
      ]
    };

    const response =
      replies[lang][Math.floor(Math.random() * replies[lang].length)];

    setTimeout(() => addMessage(response, "bot"), 800);
  }

  function sendMessage() {
    const text = input.value.trim();
    if (!text) return;

    addMessage(text, "user");
    input.value = "";
    botReply();
  }

  sendBtn.addEventListener("click", sendMessage);
  input.addEventListener("keypress", e => {
    if (e.key === "Enter") sendMessage();
  });
});

