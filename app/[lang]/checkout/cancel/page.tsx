import { getDictionary, hasLocale } from "@/lib/i18n/getDictionary";
import { notFound } from "next/navigation";
import Link from "next/link";

export default async function CheckoutCancelPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();

  const dict = await getDictionary(lang);

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-app">
      <div className="max-w-md w-full mx-auto p-8 bg-white dark:bg-zinc-900 rounded-3xl shadow-xl border border-zinc-200 dark:border-zinc-800 text-center">
        <div className="w-20 h-20 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-red-600 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>
        
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
          {dict.checkout.cancelTitle}
        </h1>
        
        <p className="text-zinc-600 dark:text-zinc-400 mb-8">
          {dict.checkout.cancelMessage}
        </p>

        <Link
          href={`/${lang}/products`}
          className="inline-flex items-center justify-center w-full px-6 py-3 border border-transparent text-base font-medium rounded-xl text-white bg-zinc-900 dark:bg-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600 transition-colors"
        >
          {dict.checkout.backBtn}
        </Link>
      </div>
    </div>
  );
}
