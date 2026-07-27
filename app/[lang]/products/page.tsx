import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import Breadcrumb from "@/components/Breadcrumb";
import ProductsCatalog from "@/components/ProductsCatalog";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!hasLocale(lang)) return {};
  
  const dict = await getDictionary(lang);
  
  return {
    title: dict.catalog.title,
    description: dict.catalog.description,
  };
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="py-12 bg-app min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          dict={dict}
          lang={lang}
          items={[{ label: dict.catalog.title }]}
        />
        
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            {dict.catalog.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl">
            {dict.catalog.description}
          </p>
        </div>

        <ProductsCatalog dict={dict} lang={lang} />
      </div>
    </div>
  );
}
