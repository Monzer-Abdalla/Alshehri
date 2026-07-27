"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import type { Dictionary } from "@/lib/i18n/types";
import type { Product } from "@/lib/types";

interface ProductsCatalogProps {
  dict: Dictionary;
  lang: "ar" | "en";
}

export default function ProductsCatalog({ dict, lang }: ProductsCatalogProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<"all" | "appliances" | "lighting">("all");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = 
      product.nameAr.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const categories = [
    { id: "all", label: dict.catalog.allCategories },
    { id: "appliances", label: dict.products.appliancesTitle },
    { id: "lighting", label: dict.products.lightingTitle },
  ];

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        {/* Categories Tab */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as any)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat.id
                  ? "bg-red-600 text-white shadow-md shadow-red-600/20"
                  : "bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-red-400 dark:hover:border-zinc-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <input
            type="text"
            placeholder={dict.catalog.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full ps-10 pe-4 py-2 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 
                       text-zinc-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
          />
          <svg
            className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredProducts.map((product) => {
            const name = lang === "ar" ? product.nameAr : product.nameEn;
            const category = lang === "ar" ? product.categoryLabelAr : product.categoryLabelEn;

            return (
              <Link
                key={product.id}
                href={`/${lang}/products/${product.slug}`}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm
                           hover:shadow-md hover:border-red-500/50 dark:hover:border-zinc-700 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden bg-zinc-50 dark:bg-zinc-950 h-52">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    className="object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute top-3 start-3 px-2.5 py-1 rounded-full bg-zinc-900/80 backdrop-blur-sm text-zinc-200 text-xs font-medium">
                    {category}
                  </div>
                </div>

                <div className="flex flex-col flex-1 p-4 gap-3">
                  <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-sm leading-snug line-clamp-2 min-h-[2.8rem]">
                    {name}
                  </h3>

                  <div className="mt-auto flex items-center justify-between gap-2">
                    <div className="flex flex-col">
                      <span className="text-xs text-zinc-500">{dict.products.priceLabel}</span>
                      <span className="text-red-600 font-bold text-base">
                        {product.price.toLocaleString(lang === "ar" ? "ar-SA" : "en-SA")}{" "}
                        <span className="text-xs font-semibold">{dict.products.currency}</span>
                      </span>
                    </div>
                    <span
                      className="shrink-0 text-xs font-semibold px-3 py-2 rounded-xl bg-red-600 text-white
                                   group-hover:bg-red-700 transition-colors duration-200"
                    >
                      {dict.products.orderBtn}
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800">
          <p className="text-zinc-500 dark:text-zinc-400">{dict.catalog.noResults}</p>
        </div>
      )}
    </div>
  );
}
