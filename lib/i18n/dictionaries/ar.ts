import type { Dictionary } from '../types'

const ar: Dictionary = {
  locale: 'ar',
  dir: 'rtl',

  nav: {
    home: 'الرئيسية',
    appliances: 'الأجهزة الكهربائية',
    lighting: 'معدات الإضاءة',
    products: 'المنتجات',
    about: 'من نحن',
    contact: 'اتصل بنا',
    orderNow: 'اطلب الآن',
    toggleLight: 'الوضع الفاتح',
    toggleDark: 'الوضع الداكن',
    switchToEn: 'English',
  },

  hero: {
    badge: 'مرحباً بكم في شركة الشهري المحدودة',
    heading1: 'الأجهزة الكهربائية المنزلية',
    heading2: 'ومعدات الإضاءة',
    subtitle:
      'نصنع من منزلك مساحة تنبض بالحياة بأحدث الأجهزة المنزلية الذكية وأرقى تصاميم الإضاءة العصرية. كفاءة استثنائية، ضمان معتمد، وتصاميم تواكب المستقبل.',
    ctaAppliances: 'تصفح الأجهزة الكهربائية',
    ctaLighting: 'استكشف معدات الإضاءة',
    badge1Title: 'ضمان لمدة سنتين',
    badge1Desc: 'على كافة المنتجات الكهربائية',
    badge2Title: 'توصيل سريع وآمن',
    badge2Desc: 'لجميع أنحاء المملكة',
    badge3Title: 'منتجات أصلية 100%',
    badge3Desc: 'من كبرى الماركات العالمية',
    badge4Title: 'دعم فني متكامل',
    badge4Desc: 'فريق جاهز لخدمتكم دائماً',
  },

  products: {
    sectionBadge: 'تشكيلة حصرية',
    sectionDesc:
      'اكتشف أحدث الموديلات التي تجمع بين الكفاءة العالية والتصاميم الراقية لتلبية احتياجات منزلك العصري.',
    appliancesTitle: 'الأجهزة الكهربائية المنزلية',
    lightingTitle: 'معدات وأنظمة الإضاءة',
    priceLabel: 'السعر',
    orderBtn: 'طلب الآن',
    viewAll: 'عرض جميع المنتجات',
    currency: 'ر.س',
  },

  catalog: {
    title: 'كتالوج المنتجات',
    description: 'اكتشف مجموعتنا الكاملة من الأجهزة الكهربائية وحلول الإضاءة',
    searchPlaceholder: 'ابحث عن منتج...',
    allCategories: 'جميع الفئات',
    noResults: 'لم يتم العثور على منتجات.',
  },

  detail: {
    specifications: 'المواصفات التقنية',
    description: 'وصف المنتج',
    orderCTA: 'اطلب هذا المنتج الآن',
  },

  contact: {
    title: 'اتصل بنا',
    description: 'نسعد بتواصلك معنا. أرسل لنا رسالة وسنرد عليك في أقرب وقت ممكن.',
    form: {
      nameLabel: 'الاسم الكامل',
      namePlaceholder: 'أحمد محمد',
      emailLabel: 'البريد الإلكتروني',
      emailPlaceholder: 'ahmed@example.com',
      subjectLabel: 'الموضوع',
      subjectPlaceholder: 'كيف يمكننا مساعدتك؟',
      messageLabel: 'الرسالة',
      messagePlaceholder: 'اكتب رسالتك هنا...',
      submitBtn: 'إرسال الرسالة',
      submittingBtn: 'جاري الإرسال...',
      successTitle: 'تم الإرسال بنجاح!',
      successDesc: 'شكراً لتواصلك معنا. سنقوم بالرد عليك قريباً.',
      errorMsg: 'حدث خطأ ما. يرجى المحاولة مرة أخرى لاحقاً.',
      validation: {
        nameRequired: 'الاسم مطلوب',
        emailRequired: 'البريد الإلكتروني مطلوب',
        emailInvalid: 'بريد إلكتروني غير صالح',
        subjectRequired: 'الموضوع مطلوب',
        messageRequired: 'الرسالة مطلوبة',
        messageMin: 'يجب أن تتكون الرسالة من 10 أحرف على الأقل',
      },
    },
    info: {
      title: 'معلومات التواصل',
      addressTitle: 'مكتبنا',
      address: 'طريق الملك فهد، الرياض، المملكة العربية السعودية',
      emailTitle: 'راسلنا',
      phoneTitle: 'اتصل بنا',
      workingHoursTitle: 'ساعات العمل',
      workingHours: 'الأحد - الخميس: 9:00 صباحاً - 6:00 مساءً',
    },
  },

  about: {
    title: 'من نحن',
    description: 'تعرف على شركة الشهري المحدودة ورؤيتنا المستقبلية في عالم الأجهزة الكهربائية والإضاءة.',
    storyTitle: 'قصتنا',
    storyText: 'تأسست شركة الشهري المحدودة برؤية واضحة تهدف إلى توفير أحدث الأجهزة الكهربائية المنزلية وحلول الإضاءة العصرية للسوق السعودي. على مدار سنوات من الخبرة، بنينا سمعة طيبة مبنية على الثقة، الجودة، وخدمة العملاء الاستثنائية.',
    visionTitle: 'رؤيتنا',
    visionText: 'نسعى لأن نكون الخيار الأول والوجهة الرائدة لكل منزل في المملكة العربية السعودية، من خلال تقديم منتجات مبتكرة تجمع بين الكفاءة العالية والتصاميم الراقية التي تلبي احتياجات الحياة العصرية.',
  },

  footer: {
    companyName: 'شركة الشهري المحدودة',
    companyDesc:
      'شركة وطنية رائدة متخصصة في توفير أحدث الأجهزة الكهربائية المنزلية وحلول الإضاءة العصرية لمختلف المشاريع السكنية والتجارية.',
    productsCol: 'أقسام المنتجات',
    servicesCol: 'خدماتنا',
    contactCol: 'اتصل بنا',
    links: {
      homeLighting: 'ثريات وإضاءة داخلية',
      outdoorLighting: 'حلول الإضاءة الخارجية',
      kitchenAppliances: 'مستلزمات المطبخ الذكية',
      appliancesLink: 'الأجهزة الكهربائية المنزلية',
      warranty: 'الضمان المعتمد',
      delivery: 'خدمات التوصيل والتركيب',
      consulting: 'الاستشارات والتصميم',
      maintenance: 'الصيانة الدورية',
    },
    address: 'المملكة العربية السعودية، الرياض',
    phone: '+966 11 000 0000',
    email: 'info@alshehri.com.sa',
    copyright: 'شركة الشهري المحدودة. جميع الحقوق محفوظة.',
    privacy: 'سياسة الخصوصية',
    terms: 'الشروط والأحكام',
  },
}

export default ar
