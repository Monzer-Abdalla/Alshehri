import { notFound } from "next/navigation";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import type { Metadata } from "next";
import Hero from "@/components/Hero";
import ProductsGrid from "@/components/ProductsGrid";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title:
      lang === "ar"
        ? "الرئيسية | شركة الشهري المحدودة"
        : "Home | Alshehri Company Ltd.",
    description:
      lang === "ar"
        ? "اكتشف أحدث الأجهزة الكهربائية المنزلية وحلول الإضاءة العصرية من شركة الشهري المحدودة."
        : "Discover the latest home electrical appliances and modern lighting solutions from Alshehri Company Ltd.",
  };
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <>
      <Hero dict={dict} lang={lang} />
      <ProductsGrid dict={dict} lang={lang} />
    </>
  );
}
