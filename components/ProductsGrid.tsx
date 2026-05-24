import Image from "next/image";

interface Product {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
  specs: string[];
}

const appliancesProducts: Product[] = [
  {
    id: 1,
    name: "ثلاجة ذكية متعددة الأبواب",
    category: "أجهزة المطبخ",
    price: "4,599 ر.س",
    image: "/Fridge.png",
    specs: ["توفير طاقة A+++", "تقنية نوفروست", " باب 2 "],
  },
  {
    id: 2,
    name: "آلة إسبريسو احترافية",
    category: "أجهزة المطبخ",
    price: "1,899 ر.س",
    image: "/Espresso machine.png",
    specs: ["ضغط 15 بار", "طاحونة مدمجة", "تحكم رقمي"],
  },
  {
    id: 3,
    name: "فرن كهربائي مدمج (بلت-إن)",
    category: "أجهزة المطبخ",
    price: "2,499 ر.س",
    image: "/Oven AEG Built In.png",
    specs: ["سعة 60 لتر", "تنظيف ذاتي",],
  },
  {
    id: 4,
    name: "خلاط كهربائي عالي الأداء",
    category: "أجهزة المطبخ",
    price: "649 ر.س",
    image: "/Blender.png",
    specs: ["قوة 1200 واط", "وعاء زجاجي مقاوم", "6 سرعات"],
  },
];

const lightingProducts: Product[] = [
  {
    id: 5,
    name: "ثريا كريستال كلاسيكية فاخرة",
    category: "إضاءة داخلية",
    price: "3,200 ر.س",
    image: "/Luxury classic crystal chandelier.png",
    specs: ["كريستال عصفور", "12 لمبة LED", "قطر 80 سم"],
  },
  {
    id: 6,
    name: "مصباح تعليق بتصميم إسكندنافي",
    category: "إضاءة حديثة",
    price: "450 ر.س",
    image: "/Scandinavian Design Pendant Lamp.png",
    specs: ["معدن مطلي", "إضاءة دافئة", "ارتفاع قابل للتعديل"],
  },
  {
    id: 7,
    name: "مصباح طاولة ذكي متعدد الألوان",
    category: "إضاءة ذكية",
    price: "299 ر.س",
    image: "/smart rgb  desk lamp.png",
    specs: ["تحكم عبر التطبيق", "16 مليون لون", "منفذ شحن USB"],
  },
  {
    id: 8,
    name: "كشاف حديقة شمسي مضاد للماء",
    category: "إضاءة خارجية",
    price: "180 ر.س",
    image: "/Waterproof Backyard Floodlight.png",
    specs: ["يعمل بالطاقة الشمسية", "مقاوم للماء IP65", "حساس حركة"],
  },
];

export default function ProductsGrid() {
  const renderGrid = (title: string, products: Product[], id: string, imageFit: "cover" | "contain" = "cover") => {
    return (
      <div id={id} className="py-16 sm:py-24 border-t border-zinc-150 dark:border-zinc-900 scroll-mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-red-600 dark:text-red-500 text-sm font-bold tracking-wider uppercase block mb-2">
              تشكيلة حصرية
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white">
              {title}
            </h2>
          </div>
          <p className="mt-4 md:mt-0 text-zinc-500 dark:text-zinc-400 max-w-md">
            اكتشف أحدث الموديلات التي تجمع بين الكفاءة العالية والتصاميم الراقية لتلبية احتياجات منزلك العصري.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-150 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:border-zinc-200 dark:hover:border-zinc-700 transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Product Image Wrapper */}
              <div className="relative aspect-square w-full bg-white dark:bg-zinc-900 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 1200px) 50vw, 25vw"
                  className={`${
                    imageFit === "contain" ? "object-contain p-6" : "object-cover"
                  } transition-transform duration-500 ease-out group-hover:scale-105`}
                  loading="lazy"
                />
                {/* Category Tag */}
                <span className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md text-zinc-800 dark:text-zinc-200 text-xs font-semibold px-3 py-1.5 rounded-full shadow-sm">
                  {product.category}
                </span>
              </div>

              {/* Product Body */}
              <div className="flex-1 p-6 flex flex-col">
                {/* Product Name */}
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2 line-clamp-2 h-14 group-hover:text-red-600 dark:group-hover:text-red-500 transition-colors">
                  {product.name}
                </h3>

                {/* Specs Badges */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {product.specs.map((spec, index) => (
                    <span
                      key={index}
                      className="bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-[10px] sm:text-xs px-2.5 py-1 rounded-md"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Footer of Card */}
                <div className="mt-auto flex items-end justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex flex-col">
                    <span className="text-xs text-zinc-400 mb-1">السعر</span>
                    <span className="text-lg font-extrabold text-red-600 dark:text-red-500 leading-none">
                      {product.price}
                    </span>
                  </div>

                  <button className="bg-zinc-900 hover:bg-red-600 dark:bg-zinc-800 dark:hover:bg-red-600 text-white font-medium text-xs px-4 py-2.5 rounded-xl transition-all duration-300 flex items-center gap-1.5 shadow-sm active:scale-95 h-10">
                    طلب الآن
                    <svg
                      className="w-3.5 h-3.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M15 19l-7-7 7-7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-zinc-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderGrid("الأجهزة الكهربائية المنزلية", appliancesProducts, "appliances", "contain")}
        {renderGrid("معدات وأنظمة الإضاءة", lightingProducts, "lighting", "cover")}
      </div>
    </section>
  );
}
