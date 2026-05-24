"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "الرئيسية", href: "#" },
    { name: "الأجهزة الكهربائية", href: "#appliances" },
    { name: "معدات الإضاءة", href: "#lighting" },
    { name: "من نحن", href: "#about" },
    { name: "اتصل بنا", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/70 dark:bg-zinc-950/70 border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="شعار شركة الشهري المحدودة"
                width={250}
                height={75}
                className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-zinc-700 dark:text-zinc-300 hover:text-red-600 dark:hover:text-red-500 font-medium text-sm transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-600 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Contact / Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-red-600 hover:bg-red-700 text-white font-medium text-sm px-5 py-2.5 rounded-full transition-all duration-300 transform hover:scale-[1.03] shadow-md shadow-red-600/10 hover:shadow-red-600/25 active:scale-98"
            >
              اطلب الآن
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-lg text-zinc-600 dark:text-zinc-400 hover:text-red-600 dark:hover:text-red-500 focus:outline-none transition-colors"
              aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100 border-b border-zinc-200/50 dark:border-zinc-800/50" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-lg">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-base font-medium text-zinc-800 dark:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:text-red-600 dark:hover:text-red-500 transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800 px-3">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center bg-red-600 hover:bg-red-700 text-white font-medium py-3 rounded-xl transition-all duration-200 shadow-md"
            >
              اطلب الآن
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
