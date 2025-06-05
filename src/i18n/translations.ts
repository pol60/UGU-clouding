export interface Translations {
  nav: {
    home: string;
    catalog: string;
    new: string;
    sale: string;
    about: string;
    contacts: string;
    reviews: string;
    contactUs: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
    viewCollection: string;
    aboutBrand: string;
  };
  categories: {
    title: string;
    women: string;
    men: string;
    kids: string;
    accessories: string;
  };
  products: {
    new: string;
    sale: string;
    addToCart: string;
    quickView: string;
  };
  footer: {
    description: string;
    catalog: string;
    new: string;
    tshirts: string;
    hoodies: string;
    jeans: string;
    dresses: string;
    accessories: string;
    information: string;
    about: string;
    delivery: string;
    returns: string;
    loyalty: string;
    blog: string;
    contacts: string;
    address: string;
    phone: string;
    email: string;
    workingHours: string;
    copyright: string;
  };
  about: {
    title: string;
    subtitle: string;
    ourStory: {
      title: string;
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    features: {
      quality: {
        title: string;
        description: string;
      };
      eco: {
        title: string;
        description: string;
      };
      comfort: {
        title: string;
        description: string;
      };
    };
    stats: {
      years: string;
      customers: string;
      models: string;
      countries: string;
    };
    growth: {
      title: string;
      sales: string;
    };
  };
  reviews: {
    title: string;
    subtitle: string;
    viewAll: string;
    items: {
      name: string;
      text: string;
    }[];
  };
  contactForm: {
    title: string;
    subtitle: string;
    phoneLabel: string;
    phonePlaceholder: string;
    submitButton: string;
    privacyPolicy: string;
    success: {
      title: string;
      message: string;
    };
  };
  catalog: {
    title: string;
    subtitle: string;
    categories: {
      all: string;
      tshirts: string;
      hoodies: string;
      jeans: string;
      dresses: string;
      outerwear: string;
      accessories: string;
    };
    products: {
      tshirt: {
        name: string;
        category: string;
        price: string;
      };
      hoodie: {
        name: string;
        category: string;
        price: string;
      };
      jeans: {
        name: string;
        category: string;
        price: string;
      };
      dress: {
        name: string;
        category: string;
        price: string;
      };
      jacket: {
        name: string;
        category: string;
        price: string;
      };
      cap: {
        name: string;
        category: string;
        price: string;
      };
    };
    addToCart: string;
    showMore: string;
  };
}

export const translations: Record<string, Translations> = {
  ru: {
    nav: {
      home: "Главная",
      catalog: "Каталог",
      new: "Новинки",
      sale: "Распродажа",
      about: "О нас",
      contacts: "Контакты",
      reviews: "Отзывы",
      contactUs: "Связаться с нами"
    },
    hero: {
      title: "Новая коллекция",
      subtitle: "Откройте для себя последние тренды",
      cta: "Смотреть коллекцию",
      viewCollection: "Смотреть коллекцию",
      aboutBrand: "О бренде"
    },
    categories: {
      title: "Категории",
      women: "Женщинам",
      men: "Мужчинам",
      kids: "Детям",
      accessories: "Аксессуары"
    },
    products: {
      new: "Новинка",
      sale: "Скидка",
      addToCart: "В корзину",
      quickView: "Быстрый просмотр"
    },
    footer: {
      description: "Современная одежда для тех, кто ценит стиль, комфорт и качество",
      catalog: "Каталог",
      new: "Новинки",
      tshirts: "Футболки",
      hoodies: "Худи и свитшоты",
      jeans: "Джинсы",
      dresses: "Платья",
      accessories: "Аксессуары",
      information: "Информация",
      about: "О компании",
      delivery: "Доставка и оплата",
      returns: "Возврат и обмен",
      loyalty: "Программа лояльности",
      blog: "Блог",
      contacts: "Контакты",
      address: "Киев, ул. Модная, 123",
      phone: "+380930759403",
      email: "info@ugu-fashion.ru",
      workingHours: "Пн-Вс: 10:00 - 22:00",
      copyright: "© 2025 UGU. Все права защищены."
    },
    about: {
      title: "О бренде UGU",
      subtitle: "Мы создаем одежду, которая сочетает в себе стиль, комфорт и качество",
      ourStory: {
        title: "Наша история",
        paragraph1: "Бренд UGU был основан в 2020 году группой молодых дизайнеров, объединенных общей идеей — создавать одежду, которая будет не только стильной, но и комфортной для повседневной жизни.",
        paragraph2: "Мы начинали с небольшой коллекции футболок и худи, но благодаря вниманию к деталям и качеству материалов, быстро завоевали признание клиентов и расширили ассортимент.",
        paragraph3: "Сегодня UGU — это современный бренд одежды, который следует последним тенденциям моды, но при этом создает вещи вне времени, которые будут актуальны всегда."
      },
      features: {
        quality: {
          title: "Качество",
          description: "Мы используем только премиальные материалы и тщательно контролируем каждый этап производства"
        },
        eco: {
          title: "Экологичность",
          description: "Наше производство соответствует экологическим стандартам и использует безопасные для природы технологии"
        },
        comfort: {
          title: "Комфорт",
          description: "Каждая модель разрабатывается с учетом анатомических особенностей и обеспечивает максимальный комфорт"
        }
      },
      stats: {
        years: "Лет на рынке",
        customers: "Довольных клиентов",
        models: "Моделей одежды",
        countries: "Стран присутствия"
      },
      growth: {
        title: "Наш рост",
        sales: "Продажи"
      }
    },
    reviews: {
      title: "Отзывы наших клиентов",
      subtitle: "Узнайте, что говорят о нас те, кто уже выбрал одежду бренда UGU",
      viewAll: "Смотреть все отзывы",
      items: [
        {
          name: "Анна С.",
          text: "Обожаю качество одежды UGU! Ношу их футболки уже больше года, и они до сих пор выглядят как новые. Определенно рекомендую!"
        },
        {
          name: "Михаил Д.",
          text: "Худи от UGU - самая комфортная вещь в моем гардеробе. Отличный дизайн и качество материалов на высоте. Буду заказывать еще!"
        },
        {
          name: "Елена В.",
          text: "Платья от UGU идеально сидят по фигуре. Единственное, доставка могла бы быть быстрее, но качество товара компенсирует это ожидание."
        }
      ]
    },
    contactForm: {
      title: "Получите консультацию",
      subtitle: "Оставьте свой номер, и мы свяжемся с вами",
      phoneLabel: "Номер телефона",
      phonePlaceholder: "+8 (___) ___-__-__",
      submitButton: "Получить консультацию",
      privacyPolicy: "Нажимая кнопку, вы соглашаетесь с нашей политикой конфиденциальности",
      success: {
        title: "Спасибо!",
        message: "Мы свяжемся с вами в ближайшее время"
      }
    },
    catalog: {
      title: "Наша коллекция",
      subtitle: "Откройте для себя нашу новую коллекцию стильной и комфортной одежды, созданной с любовью к деталям",
      categories: {
        all: "Все",
        tshirts: "Футболки",
        hoodies: "Худи",
        jeans: "Джинсы",
        dresses: "Платья",
        outerwear: "Верхняя одежда",
        accessories: "Аксессуары"
      },
      products: {
        tshirt: {
          name: "Футболка UGU Классик",
          category: "Футболки",
          price: "2 990 ₽"
        },
        hoodie: {
          name: "Худи UGU Комфорт",
          category: "Худи",
          price: "5 490 ₽"
        },
        jeans: {
          name: "Джинсы UGU Премиум",
          category: "Джинсы",
          price: "6 990 ₽"
        },
        dress: {
          name: "Платье UGU Элегант",
          category: "Платья",
          price: "7 990 ₽"
        },
        jacket: {
          name: "Куртка UGU Сезон",
          category: "Верхняя одежда",
          price: "12 990 ₽"
        },
        cap: {
          name: "Кепка UGU Стайл",
          category: "Аксессуары",
          price: "1 990 ₽"
        }
      },
      addToCart: "В корзину",
      showMore: "Показать больше"
    }
  },
  en: {
    nav: {
      home: "Home",
      catalog: "Catalog",
      new: "New",
      sale: "Sale",
      about: "About",
      contacts: "Contacts",
      reviews: "Reviews",
      contactUs: "Contact Us"
    },
    hero: {
      title: "New Collection",
      subtitle: "Discover the latest trends",
      cta: "View Collection",
      viewCollection: "View Collection",
      aboutBrand: "About Brand"
    },
    categories: {
      title: "Categories",
      women: "Women",
      men: "Men",
      kids: "Kids",
      accessories: "Accessories"
    },
    products: {
      new: "New",
      sale: "Sale",
      addToCart: "Add to Cart",
      quickView: "Quick View"
    },
    footer: {
      description: "Modern clothing for those who value style, comfort and quality",
      catalog: "Catalog",
      new: "New",
      tshirts: "T-shirts",
      hoodies: "Hoodies & Sweatshirts",
      jeans: "Jeans",
      dresses: "Dresses",
      accessories: "Accessories",
      information: "Information",
      about: "About Us",
      delivery: "Delivery & Payment",
      returns: "Returns & Exchanges",
      loyalty: "Loyalty Program",
      blog: "Blog",
      contacts: "Contacts",
      address: "Kyiv, Fashion St., 123",
      phone: "+380930759403",
      email: "info@ugu-fashion.ru",
      workingHours: "Mon-Sun: 10:00 - 22:00",
      copyright: "© 2025 UGU. All rights reserved."
    },
    about: {
      title: "About UGU Brand",
      subtitle: "We create clothing that combines style, comfort and quality",
      ourStory: {
        title: "Our Story",
        paragraph1: "The UGU brand was founded in 2020 by a group of young designers united by a common idea - to create clothing that would be not only stylish but also comfortable for everyday life.",
        paragraph2: "We started with a small collection of t-shirts and hoodies, but thanks to attention to detail and quality materials, we quickly gained customer recognition and expanded our range.",
        paragraph3: "Today, UGU is a modern clothing brand that follows the latest fashion trends while creating timeless pieces that will always be relevant."
      },
      features: {
        quality: {
          title: "Quality",
          description: "We use only premium materials and carefully control every stage of production"
        },
        eco: {
          title: "Eco-friendly",
          description: "Our production meets environmental standards and uses nature-safe technologies"
        },
        comfort: {
          title: "Comfort",
          description: "Each model is developed taking into account anatomical features and ensures maximum comfort"
        }
      },
      stats: {
        years: "Years in Market",
        customers: "Happy Customers",
        models: "Clothing Models",
        countries: "Countries"
      },
      growth: {
        title: "Our Growth",
        sales: "Sales"
      }
    },
    reviews: {
      title: "Customer Reviews",
      subtitle: "See what our customers say about UGU brand clothing",
      viewAll: "View All Reviews",
      items: [
        {
          name: "Anna S.",
          text: "I love the quality of UGU clothing! I've been wearing their t-shirts for over a year, and they still look like new. Definitely recommend!"
        },
        {
          name: "Michael D.",
          text: "UGU hoodies are the most comfortable items in my wardrobe. Great design and premium quality materials. Will order more!"
        },
        {
          name: "Elena V.",
          text: "UGU dresses fit perfectly. The only thing is that delivery could be faster, but the product quality makes up for the wait."
        }
      ]
    },
    contactForm: {
      title: "Get a Consultation",
      subtitle: "Leave your number and we'll contact you",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+8 (___) ___-__-__",
      submitButton: "Get Consultation",
      privacyPolicy: "By clicking the button, you agree to our privacy policy",
      success: {
        title: "Thank You!",
        message: "We will contact you shortly"
      }
    },
    catalog: {
      title: "Our Collection",
      subtitle: "Discover our new collection of stylish and comfortable clothing, created with love for details",
      categories: {
        all: "All",
        tshirts: "T-shirts",
        hoodies: "Hoodies",
        jeans: "Jeans",
        dresses: "Dresses",
        outerwear: "Outerwear",
        accessories: "Accessories"
      },
      products: {
        tshirt: {
          name: "UGU Classic T-shirt",
          category: "T-shirts",
          price: "$29.99"
        },
        hoodie: {
          name: "UGU Comfort Hoodie",
          category: "Hoodies",
          price: "$54.99"
        },
        jeans: {
          name: "UGU Premium Jeans",
          category: "Jeans",
          price: "$69.99"
        },
        dress: {
          name: "UGU Elegant Dress",
          category: "Dresses",
          price: "$79.99"
        },
        jacket: {
          name: "UGU Season Jacket",
          category: "Outerwear",
          price: "$129.99"
        },
        cap: {
          name: "UGU Style Cap",
          category: "Accessories",
          price: "$19.99"
        }
      },
      addToCart: "Add to Cart",
      showMore: "Show More"
    }
  },
  ua: {
    nav: {
      home: "Головна",
      catalog: "Каталог",
      new: "Новинки",
      sale: "Розпродаж",
      about: "Про нас",
      contacts: "Контакти",
      reviews: "Відгуки",
      contactUs: "Зв'язатися з нами"
    },
    hero: {
      title: "Нова колекція",
      subtitle: "Відкрийте для себе останні тренди",
      cta: "Дивитися колекцію",
      viewCollection: "Дивитися колекцію",
      aboutBrand: "Про бренд"
    },
    categories: {
      title: "Категорії",
      women: "Жінкам",
      men: "Чоловікам",
      kids: "Дітям",
      accessories: "Аксесуари"
    },
    products: {
      new: "Новинка",
      sale: "Знижка",
      addToCart: "В кошик",
      quickView: "Швидкий перегляд"
    },
    footer: {
      description: "Сучасний одяг для тих, хто цінує стиль, комфорт та якість",
      catalog: "Каталог",
      new: "Новинки",
      tshirts: "Футболки",
      hoodies: "Худі та світшоти",
      jeans: "Джинси",
      dresses: "Плаття",
      accessories: "Аксесуари",
      information: "Інформація",
      about: "Про компанію",
      delivery: "Доставка та оплата",
      returns: "Повернення та обмін",
      loyalty: "Програма лояльності",
      blog: "Блог",
      contacts: "Контакти",
      address: "Київ, вул. Модна, 123",
      phone: "+380930759403",
      email: "info@ugu-fashion.ru",
      workingHours: "Пн-Нд: 10:00 - 22:00",
      copyright: "© 2025 UGU. Всі права захищені."
    },
    about: {
      title: "Про бренд UGU",
      subtitle: "Ми створюємо одяг, який поєднує в собі стиль, комфорт та якість",
      ourStory: {
        title: "Наша історія",
        paragraph1: "Бренд UGU був заснований у 2020 році групою молодих дизайнерів, об'єднаних спільною ідеєю — створювати одяг, який буде не тільки стильним, але й зручним для повсякденного життя.",
        paragraph2: "Ми починали з невеликої колекції футболок та худі, але завдяки увазі до деталей та якості матеріалів, швидко завоювали визнання клієнтів та розширили асортимент.",
        paragraph3: "Сьогодні UGU — це сучасний бренд одягу, який слідує останнім тенденціям моди, але при цьому створює речі поза часом, які будуть актуальні завжди."
      },
      features: {
        quality: {
          title: "Якість",
          description: "Ми використовуємо тільки преміальні матеріали та ретельно контролюємо кожен етап виробництва"
        },
        eco: {
          title: "Екологічність",
          description: "Наше виробництво відповідає екологічним стандартам та використовує безпечні для природи технології"
        },
        comfort: {
          title: "Комфорт",
          description: "Кожна модель розробляється з урахуванням анатомічних особливостей та забезпечує максимальний комфорт"
        }
      },
      stats: {
        years: "Років на ринку",
        customers: "Задоволених клієнтів",
        models: "Моделей одягу",
        countries: "Країн присутності"
      },
      growth: {
        title: "Наш ріст",
        sales: "Продажі"
      }
    },
    reviews: {
      title: "Відгуки наших клієнтів",
      subtitle: "Дізнайтеся, що говорять про нас ті, хто вже обрав одяг бренду UGU",
      viewAll: "Дивитися всі відгуки",
      items: [
        {
          name: "Анна С.",
          text: "Обожнюю якість одягу UGU! Носію їх футболки вже більше року, і вони досі виглядають як нові. Безумовно рекомендую!"
        },
        {
          name: "Михайло Д.",
          text: "Худі від UGU - найзручніша річ у моєму гардеробі. Відмінний дизайн та якість матеріалів на висоті. Буду замовляти ще!"
        },
        {
          name: "Олена В.",
          text: "Плаття від UGU ідеально сидять по фігурі. Єдине, доставка могла б бути швидшою, але якість товару компенсує це очікування."
        }
      ]
    },
    contactForm: {
      title: "Отримайте консультацію",
      subtitle: "Залиште свій номер, і ми зв'яжемося з вами",
      phoneLabel: "Номер телефону",
      phonePlaceholder: "+38 (___) ___-__-__",
      submitButton: "Отримати консультацію",
      privacyPolicy: "Натискаючи кнопку, ви погоджуєтеся з нашою політикою конфіденційності",
      success: {
        title: "Дякуємо!",
        message: "Ми зв'яжемося з вами найближчим часом"
      }
    },
    catalog: {
      title: "Наша колекція",
      subtitle: "Відкрийте для себе нашу нову колекцію стильного та зручного одягу, створеного з любов'ю до деталей",
      categories: {
        all: "Всі",
        tshirts: "Футболки",
        hoodies: "Худі",
        jeans: "Джинси",
        dresses: "Плаття",
        outerwear: "Верхній одяг",
        accessories: "Аксесуари"
      },
      products: {
        tshirt: {
          name: "Футболка UGU Класик",
          category: "Футболки",
          price: "2 990 ₴"
        },
        hoodie: {
          name: "Худі UGU Комфорт",
          category: "Худі",
          price: "5 490 ₴"
        },
        jeans: {
          name: "Джинси UGU Преміум",
          category: "Джинси",
          price: "6 990 ₴"
        },
        dress: {
          name: "Плаття UGU Елегант",
          category: "Плаття",
          price: "7 990 ₴"
        },
        jacket: {
          name: "Куртка UGU Сезон",
          category: "Верхній одяг",
          price: "12 990 ₴"
        },
        cap: {
          name: "Кепка UGU Стайл",
          category: "Аксесуари",
          price: "1 990 ₴"
        }
      },
      addToCart: "В кошик",
      showMore: "Показати більше"
    }
  }
}; 