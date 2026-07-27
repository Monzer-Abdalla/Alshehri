import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    title: {
      default: lang === "ar" ? "شركة الشهري المحدودة" : "Alshehri Company Ltd.",
      template:
        lang === "ar"
          ? "%s | شركة الشهري المحدودة"
          : "%s | Alshehri Company Ltd.",
    },
    description:
      lang === "ar"
        ? "شركة وطنية رائدة متخصصة في توفير أحدث الأجهزة الكهربائية المنزلية وحلول الإضاءة العصرية."
        : "A leading national company specializing in the latest home electrical appliances and modern lighting solutions.",
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <html
      lang={lang}
      dir={dict.dir}
      suppressHydrationWarning
    >
      <body className="bg-app text-primary antialiased">
        <ThemeProvider>
          <Navbar dict={dict} lang={lang} />
          <main>{children}</main>
          <Footer dict={dict} lang={lang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
