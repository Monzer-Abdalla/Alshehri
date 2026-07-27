import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import type { Dictionary } from "@/lib/i18n/types";
import type { Product } from "@/lib/types";

interface ProductsGridProps {
  dict: Dictionary;
  lang: "ar" | "en";
}

function ProductCard({
  product,
  dict,
  lang,
}: {
  product: Product;
  dict: Dictionary;
  lang: "ar" | "en";
}) {
  const name = lang === "ar" ? product.nameAr : product.nameEn;
  const category = lang === "ar" ? product.categoryLabelAr : product.categoryLabelEn;

  return (
    <Link
      href={`/${lang}/products/${product.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-surface border border-token shadow-card
                 hover:shadow-card-hover hover:border-red-500/30 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image container */}
      <div className="relative overflow-hidden bg-surface-muted h-52">
        <Image
          src={product.image}
          alt={name}
          fill
          className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {/* Category pill */}
        <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm text-zinc-200 text-xs font-medium">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4 gap-3">
        <h3 className="text-primary font-semibold text-sm leading-snug line-clamp-2 min-h-[2.8rem]">
          {name}
        </h3>

        <div className="mt-auto flex items-center justify-between gap-2">
          <div className="flex flex-col">
            <span className="text-xs text-muted">{dict.products.priceLabel}</span>
            <span className="text-red-600 font-bold text-base">
              {product.price.toLocaleString(lang === "ar" ? "ar-SA" : "en-SA")}{" "}
              <span className="text-xs font-semibold">{dict.products.currency}</span>
            </span>
          </div>
          <span
            className="shrink-0 text-xs font-semibold px-3 py-2 rounded-xl bg-red-600 text-white
                         group-hover:bg-red-700 transition-colors duration-200"
          >
            {dict.products.orderBtn}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function ProductsGrid({ dict, lang }: ProductsGridProps) {
  const appliances = products.filter((p) => p.category === "appliances");
  const lighting = products.filter((p) => p.category === "lighting");

  return (
    <section className="py-20 bg-app">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-red-600/10 text-red-600 text-xs font-semibold tracking-wide mb-4">
            {dict.products.sectionBadge}
          </span>
          <p className="max-w-xl mx-auto text-secondary text-sm leading-relaxed">
            {dict.products.sectionDesc}
          </p>
        </div>

        {/* Appliances Grid */}
        <div id="appliances" className="mb-20 scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-7 rounded-full bg-red-600 inline-block" />
            <h2 className="text-primary font-bold text-xl">{dict.products.appliancesTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {appliances.map((p) => (
              <ProductCard key={p.id} product={p} dict={dict} lang={lang} />
            ))}
          </div>
        </div>

        {/* Lighting Grid */}
        <div id="lighting" className="scroll-mt-28">
          <div className="flex items-center gap-3 mb-8">
            <span className="w-1 h-7 rounded-full bg-red-600 inline-block" />
            <h2 className="text-primary font-bold text-xl">{dict.products.lightingTitle}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {lighting.map((p) => (
              <ProductCard key={p.id} product={p} dict={dict} lang={lang} />
            ))}
          </div>
        </div>

        {/* View all CTA */}
        <div className="text-center mt-14">
          <Link
            href={`/${lang}/products`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm
                       border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white
                       transition-all duration-300 hover:scale-[1.02] active:scale-95"
          >
            {dict.products.viewAll}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              {lang === "ar" ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5m0 0l5-5m-5 5h12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              )}
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
