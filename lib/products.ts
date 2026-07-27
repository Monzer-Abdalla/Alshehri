import type { Product } from './types'

export const products: Product[] = [
  {
    id: 1,
    slug: 'smart-fridge',
    nameAr: 'ثلاجة ذكية متعددة الأبواب',
    nameEn: 'Smart Multi-Door Refrigerator',
    category: 'appliances',
    categoryLabelAr: 'أجهزة المطبخ',
    categoryLabelEn: 'Kitchen Appliances',
    price: 4599,
    image: '/Fridge.png',
    specsAr: ['توفير طاقة A+++', 'تقنية نوفروست', 'باب 2'],
    specsEn: ['Energy Rating A+++', 'No-Frost Technology', '2-Door'],
    descriptionAr:
      'ثلاجة ذكية متعددة الأبواب بتقنية نوفروست المتطورة وتوفير طاقة من الفئة A+++. تأتي مع نظام تحكم ذكي لضمان حفظ الأطعمة بأفضل درجة حرارة.',
    descriptionEn:
      'A smart multi-door refrigerator with advanced No-Frost technology and A+++ energy rating. Features an intelligent control system to keep food at the optimal temperature.',
  },
  {
    id: 2,
    slug: 'espresso-machine',
    nameAr: 'آلة إسبريسو احترافية',
    nameEn: 'Professional Espresso Machine',
    category: 'appliances',
    categoryLabelAr: 'أجهزة المطبخ',
    categoryLabelEn: 'Kitchen Appliances',
    price: 1899,
    image: '/Espresso machine.png',
    specsAr: ['ضغط 15 بار', 'طاحونة مدمجة', 'تحكم رقمي'],
    specsEn: ['15-Bar Pressure', 'Built-in Grinder', 'Digital Control'],
    descriptionAr:
      'آلة إسبريسو احترافية بضغط 15 بار وطاحونة مدمجة لتحضير أفضل أنواع القهوة في المنزل مع تحكم رقمي دقيق.',
    descriptionEn:
      'A professional espresso machine with 15-bar pressure and a built-in grinder for the finest coffee experience at home, with precise digital control.',
  },
  {
    id: 3,
    slug: 'built-in-oven',
    nameAr: 'فرن كهربائي مدمج (بلت-إن)',
    nameEn: 'AEG Built-In Electric Oven',
    category: 'appliances',
    categoryLabelAr: 'أجهزة المطبخ',
    categoryLabelEn: 'Kitchen Appliances',
    price: 2499,
    image: '/Oven AEG Built In.png',
    specsAr: ['سعة 60 لتر', 'تنظيف ذاتي'],
    specsEn: ['60L Capacity', 'Self-Cleaning'],
    descriptionAr:
      'فرن كهربائي مدمج من AEG بسعة 60 لتر وتقنية التنظيف الذاتي. مثالي للمطابخ الحديثة ذات التصميم الأنيق.',
    descriptionEn:
      'An AEG built-in electric oven with 60L capacity and self-cleaning technology. Perfect for modern kitchens with a sleek, integrated look.',
  },
  {
    id: 4,
    slug: 'power-blender',
    nameAr: 'خلاط كهربائي عالي الأداء',
    nameEn: 'High-Performance Electric Blender',
    category: 'appliances',
    categoryLabelAr: 'أجهزة المطبخ',
    categoryLabelEn: 'Kitchen Appliances',
    price: 649,
    image: '/Blender.png',
    specsAr: ['قوة 1200 واط', 'وعاء زجاجي مقاوم', '6 سرعات'],
    specsEn: ['1200W Power', 'Shatterproof Glass Jar', '6 Speed Settings'],
    descriptionAr:
      'خلاط كهربائي عالي الأداء بقوة 1200 واط ووعاء زجاجي مقاوم للكسر مع 6 مستويات سرعة. مثالي للعائلات.',
    descriptionEn:
      'A high-performance blender with 1200W power, a shatterproof glass jar, and 6 speed levels. Ideal for families.',
  },
  {
    id: 5,
    slug: 'crystal-chandelier',
    nameAr: 'ثريا كريستال كلاسيكية فاخرة',
    nameEn: 'Luxury Classic Crystal Chandelier',
    category: 'lighting',
    categoryLabelAr: 'إضاءة داخلية',
    categoryLabelEn: 'Indoor Lighting',
    price: 3200,
    image: '/Luxury classic crystal chandelier.png',
    specsAr: ['كريستال عصفور', '12 لمبة LED', 'قطر 80 سم'],
    specsEn: ['Asfour Crystal', '12 LED Bulbs', '80cm Diameter'],
    descriptionAr:
      'ثريا كريستال كلاسيكية فاخرة مصنوعة من كريستال عصفور الأصيل مع 12 لمبة LED موفرة للطاقة. تضيف لمسة ملكية لأي غرفة.',
    descriptionEn:
      'A luxury classic crystal chandelier crafted from genuine Asfour crystal with 12 energy-saving LED bulbs. Adds a royal touch to any room.',
  },
  {
    id: 6,
    slug: 'scandinavian-pendant',
    nameAr: 'مصباح تعليق بتصميم إسكندنافي',
    nameEn: 'Scandinavian Design Pendant Lamp',
    category: 'lighting',
    categoryLabelAr: 'إضاءة حديثة',
    categoryLabelEn: 'Modern Lighting',
    price: 450,
    image: '/Scandinavian Design Pendant Lamp.png',
    specsAr: ['معدن مطلي', 'إضاءة دافئة', 'ارتفاع قابل للتعديل'],
    specsEn: ['Coated Metal', 'Warm Lighting', 'Adjustable Height'],
    descriptionAr:
      'مصباح تعليق بتصميم إسكندنافي عصري من المعدن المطلي مع إضاءة دافئة وارتفاع قابل للتعديل حسب المساحة.',
    descriptionEn:
      'A modern Scandinavian pendant lamp in coated metal with warm lighting and adjustable height to suit any space.',
  },
  {
    id: 7,
    slug: 'smart-rgb-desk-lamp',
    nameAr: 'مصباح طاولة ذكي متعدد الألوان',
    nameEn: 'Smart RGB Multi-Color Desk Lamp',
    category: 'lighting',
    categoryLabelAr: 'إضاءة ذكية',
    categoryLabelEn: 'Smart Lighting',
    price: 299,
    image: '/smart rgb  desk lamp.png',
    specsAr: ['تحكم عبر التطبيق', '16 مليون لون', 'منفذ شحن USB'],
    specsEn: ['App Controlled', '16 Million Colors', 'USB Charging Port'],
    descriptionAr:
      'مصباح طاولة ذكي يدعم 16 مليون لون ويتحكم به عبر التطبيق مع منفذ شحن USB مدمج. مثالي لمكتبك.',
    descriptionEn:
      'A smart desk lamp supporting 16 million colors, app-controlled, with a built-in USB charging port. Perfect for your workspace.',
  },
  {
    id: 8,
    slug: 'outdoor-floodlight',
    nameAr: 'كشاف حديقة شمسي مضاد للماء',
    nameEn: 'Waterproof Solar Garden Floodlight',
    category: 'lighting',
    categoryLabelAr: 'إضاءة خارجية',
    categoryLabelEn: 'Outdoor Lighting',
    price: 180,
    image: '/Waterproof Backyard Floodlight.png',
    specsAr: ['يعمل بالطاقة الشمسية', 'مقاوم للماء IP65', 'حساس حركة'],
    specsEn: ['Solar Powered', 'IP65 Waterproof', 'Motion Sensor'],
    descriptionAr:
      'كشاف حديقة شمسي مضاد للماء بمعيار IP65 مع حساس حركة للتشغيل التلقائي. موفر للطاقة ومثالي للمساحات الخارجية.',
    descriptionEn:
      'A solar-powered waterproof garden floodlight with IP65 rating and motion sensor for automatic activation. Energy-saving and ideal for outdoor spaces.',
  },
]

export const getProductBySlug = (slug: string) =>
  products.find((p) => p.slug === slug)

export const getProductsByCategory = (category: 'appliances' | 'lighting') =>
  products.filter((p) => p.category === category)
