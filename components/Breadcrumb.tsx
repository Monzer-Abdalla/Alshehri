import Link from "next/link";
import type { Dictionary } from "@/lib/i18n/types";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  dict: Dictionary;
  lang: "ar" | "en";
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ dict, lang, items }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center space-x-2 space-x-reverse text-sm text-zinc-500 dark:text-zinc-400">
        <li>
          <Link
            href={`/${lang}`}
            className="hover:text-red-600 transition-colors duration-200"
          >
            {dict.nav.home}
          </Link>
        </li>
        
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2 space-x-reverse">
            <svg
              className={`w-4 h-4 text-zinc-400 ${lang === 'ar' ? 'rotate-180' : ''}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            
            {item.href ? (
              <Link
                href={item.href}
                className="hover:text-red-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
