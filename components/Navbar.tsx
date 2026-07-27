"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Dictionary } from "@/lib/i18n/types";
import ThemeToggle from "./ThemeToggle";
import LangToggle from "./LangToggle";
import CartDrawer from "./CartDrawer";
import { useCartStore } from "@/lib/store/useCartStore";

interface NavbarProps {
  dict: Dictionary;
  lang: "ar" | "en";
}

export default function Navbar({ dict, lang }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  
  const getCartCount = useCartStore((state) => state.getCartCount);

  useEffect(() => {
    setMounted(true);
  }, []);

  const navLinks = [
    { name: dict.nav.home, href: `/${lang}` },
    { name: dict.nav.appliances, href: `/${lang}#appliances` },
    { name: dict.nav.lighting, href: `/${lang}#lighting` },
    { name: dict.nav.about, href: `/${lang}/about` },
    { name: dict.nav.contact, href: `/${lang}/contact` },
  ];

  const isActive = (href: string) => {
    if (href.includes('#')) return false;
    if (href === `/${lang}`) return pathname === `/${lang}`;
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className="sticky top-0 z-40 w-full border-b transition-colors duration-300"
        style={{
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          backgroundColor: `rgb(var(--nav-bg))`,
          borderColor: `rgb(var(--nav-border))`,
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-24">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href={`/${lang}`} className="flex items-center">
                <Image
                  src="/logo.png"
                  alt="شركة الشهري المحدودة"
                  width={250}
                  height={75}
                  className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative py-1 text-sm font-medium transition-colors duration-200
                      after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
                      after:bg-red-600 after:transition-transform after:duration-300
                      ${active
                        ? "text-red-600 after:scale-x-100"
                        : "text-secondary hover:text-red-600 after:scale-x-0 hover:after:scale-x-100"
                      }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Controls: Lang + Theme + Cart + CTA */}
            <div className="hidden md:flex items-center gap-3">
              <LangToggle currentLang={lang} label={dict.nav.switchToEn} />
              <ThemeToggle />
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                aria-label={dict.cart.title}
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {mounted && getCartCount() > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                    {getCartCount()}
                  </span>
                )}
              </button>

              <a
                href={`/${lang}/contact`}
                className="bg-red-600 hover:bg-red-700 text-white font-semibold text-sm px-5 py-2.5 rounded-full
                           transition-all duration-300 hover:scale-[1.03] active:scale-95
                           shadow-md hover:shadow-lg"
                style={{ boxShadow: "0 4px 16px -4px rgb(220 38 38 / 0.5)" }}
              >
                {dict.nav.orderNow}
              </a>
            </div>

            {/* Mobile: theme + cart + hamburger */}
            <div className="md:hidden flex items-center gap-2">
              <LangToggle currentLang={lang} label={dict.nav.switchToEn} />
              <ThemeToggle />
              
              <button 
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-zinc-500 hover:text-red-600 rounded-full transition-colors"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {mounted && getCartCount() > 0 && (
                  <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-red-600 rounded-full">
                    {getCartCount()}
                  </span>
                )}
              </button>

              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-xl text-secondary
                           hover:text-red-600 hover:bg-surface-muted
                           transition-all duration-200 focus:outline-none"
                aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
              >
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-screen opacity-100 border-t border-token" : "max-h-0 opacity-0"
          }`}
        >
          <div className="px-4 pt-2 pb-6 space-y-1 bg-surface backdrop-blur-lg">
            {navLinks.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${active
                      ? "bg-red-600/10 text-red-600"
                      : "text-secondary hover:bg-surface-muted hover:text-primary"
                    }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      </header>

      <CartDrawer 
        dict={dict} 
        lang={lang} 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
      />
    </>
  );
}
