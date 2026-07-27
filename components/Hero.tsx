import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

interface HeroProps {
  dict: Dictionary;
  lang: "ar" | "en";
}

export default function Hero({ dict, lang }: HeroProps) {
  const badges = [
    {
      title: dict.hero.badge1Title,
      desc: dict.hero.badge1Desc,
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: dict.hero.badge2Title,
      desc: dict.hero.badge2Desc,
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
        </svg>
      ),
    },
    {
      title: dict.hero.badge3Title,
      desc: dict.hero.badge3Desc,
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: dict.hero.badge4Title,
      desc: dict.hero.badge4Desc,
      icon: (
        <svg className="w-5 h-5 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden min-h-[88vh] flex items-center justify-center
                        bg-zinc-50 dark:bg-zinc-950 py-24 sm:py-32">
      {/* Background ambient blobs — different tones per theme */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Light mode blobs */}
        <div className="absolute top-1/4 -end-20 w-96 h-96 bg-red-100 rounded-full blur-[120px] opacity-70 dark:opacity-0 transition-opacity duration-500" />
        <div className="absolute bottom-1/4 -start-20 w-96 h-96 bg-rose-100 rounded-full blur-[120px] opacity-60 dark:opacity-0 transition-opacity duration-500" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-64 bg-gradient-to-b from-red-50/70 to-transparent dark:from-transparent" />

        {/* Dark mode blobs */}
        <div className="absolute top-1/4 -end-20 w-96 h-96 bg-red-600/12 rounded-full blur-[120px] opacity-0 dark:opacity-100 transition-opacity duration-500" />
        <div className="absolute bottom-1/4 -start-20 w-96 h-96 bg-red-900/10 rounded-full blur-[120px] opacity-0 dark:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 bg-[radial-gradient(#00000008_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:20px_20px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6
                       text-zinc-900 dark:text-white">
          {dict.hero.heading1} <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-400 bg-clip-text text-transparent">
            {dict.hero.heading2}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-12
                      text-zinc-600 dark:text-zinc-400">
          {dict.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href={`/${lang}/products#appliances`}
            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-4 rounded-xl text-center
                       transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-lg shadow-red-600/30"
          >
            {dict.hero.ctaAppliances}
          </Link>
          <Link
            href={`/${lang}/products#lighting`}
            className="w-full sm:w-auto font-semibold px-8 py-4 rounded-xl text-center
                       border-2 border-zinc-300 hover:border-red-500
                       text-zinc-700 hover:text-red-600
                       dark:border-zinc-700/60 dark:hover:border-zinc-500
                       dark:text-zinc-200 dark:hover:text-white
                       bg-white/80 hover:bg-white dark:bg-zinc-900/80 dark:hover:bg-zinc-800
                       transition-all duration-300 hover:scale-[1.03] active:scale-95"
          >
            {dict.hero.ctaLighting}
          </Link>
        </div>

        {/* Assurance Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-20 pt-10 max-w-4xl mx-auto
                        border-t border-zinc-200 dark:border-zinc-800/60">
          {badges.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 rounded-2xl
                         bg-white dark:bg-zinc-900/50
                         border border-zinc-200 dark:border-zinc-800/50
                         hover:border-red-300 dark:hover:border-zinc-700/60
                         shadow-sm dark:shadow-none
                         hover:shadow-md dark:hover:bg-zinc-900/80
                         transition-all duration-300"
            >
              <div className="p-2.5 bg-red-50 dark:bg-red-600/12 rounded-xl mb-3">{item.icon}</div>
              <h3 className="text-zinc-800 dark:text-zinc-100 font-semibold text-sm mb-1 text-center">{item.title}</h3>
              <p className="text-zinc-500 dark:text-zinc-500 text-xs text-center leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
