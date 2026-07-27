import { notFound } from "next/navigation";
import Image from "next/image";
import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import Breadcrumb from "@/components/Breadcrumb";
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
    title: dict.about.title,
    description: dict.about.description,
  };
}

export default async function AboutPage({
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
          items={[{ label: dict.about.title }]}
        />
        
        <div className="mb-16">
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white mb-4">
            {dict.about.title}
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl text-lg">
            {dict.about.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative rounded-3xl overflow-hidden aspect-video lg:aspect-square bg-zinc-100 dark:bg-zinc-900 shadow-xl border border-zinc-200 dark:border-zinc-800">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745a872f?q=80&w=2070&auto=format&fit=crop"
              alt={dict.about.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-6 start-6 end-6 text-white font-bold text-2xl">
              {dict.footer.companyName}
            </div>
          </div>
          
          <div className="space-y-12">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {dict.about.storyTitle}
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {dict.about.storyText}
              </p>
            </div>
            
            <div className="w-24 h-1 bg-zinc-200 dark:bg-zinc-800 rounded-full" />

            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-red-50 dark:bg-red-900/20 text-red-600 flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
                  {dict.about.visionTitle}
                </h2>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {dict.about.visionText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
