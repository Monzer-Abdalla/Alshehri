import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import { products, getProductBySlug } from "@/lib/products";
import Breadcrumb from "@/components/Breadcrumb";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const paths: { lang: string; slug: string }[] = [];
  
  const langs = ["ar", "en"];
  for (const lang of langs) {
    for (const product of products) {
      paths.push({ lang, slug: product.slug });
    }
  }
  
  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!hasLocale(lang)) return {};
  
  const product = getProductBySlug(slug);
  if (!product) return {};

  const name = lang === "ar" ? product.nameAr : product.nameEn;
  const description = lang === "ar" ? product.descriptionAr : product.descriptionEn;

  return {
    title: name,
    description: description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;

  if (!hasLocale(lang)) notFound();

  const product = getProductBySlug(slug);
  if (!product) notFound();

  const dict = await getDictionary(lang);

  const name = lang === "ar" ? product.nameAr : product.nameEn;
  const description = lang === "ar" ? product.descriptionAr : product.descriptionEn;
  const categoryLabel = lang === "ar" ? product.categoryLabelAr : product.categoryLabelEn;
  const specs = lang === "ar" ? product.specsAr : product.specsEn;

  return (
    <div className="py-12 bg-app min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          dict={dict}
          lang={lang}
          items={[
            { label: dict.catalog.title, href: `/${lang}/products` },
            { label: name },
          ]}
        />

        <div className="bg-white dark:bg-zinc-900 rounded-3xl border border-zinc-200 dark:border-zinc-800 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:divide-x lg:divide-x-reverse lg:divide-zinc-200 lg:dark:divide-zinc-800">
            {/* Image Column */}
            <div className="relative bg-zinc-50 dark:bg-zinc-950 p-8 min-h-[400px] lg:min-h-[600px] flex items-center justify-center">
              <div className="absolute top-6 start-6 z-10">
                <span className="px-3 py-1.5 rounded-full bg-zinc-900/80 backdrop-blur-sm text-zinc-200 text-sm font-medium">
                  {categoryLabel}
                </span>
              </div>
              <div className="relative w-full h-full max-w-lg aspect-square">
                <Image
                  src={product.image}
                  alt={name}
                  fill
                  className="object-contain"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>

            {/* Content Column */}
            <div className="p-8 lg:p-12 flex flex-col">
              <h1 className="text-3xl lg:text-4xl font-bold text-zinc-900 dark:text-white mb-4 leading-tight">
                {name}
              </h1>
              
              <div className="text-2xl font-bold text-red-600 mb-8">
                {product.price.toLocaleString(lang === "ar" ? "ar-SA" : "en-SA")}{" "}
                <span className="text-base font-semibold">{dict.products.currency}</span>
              </div>

              <div className="mb-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-3">
                  {dict.detail.description}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </div>

              <div className="mb-12 flex-1">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  {dict.detail.specifications}
                </h3>
                <ul className="space-y-3">
                  {specs.map((spec, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-red-600 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-zinc-600 dark:text-zinc-400">{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-8 border-t border-zinc-200 dark:border-zinc-800">
                <Link
                  href={`/${lang}/contact`}
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl
                             transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-600/20"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  {dict.detail.orderCTA}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
