"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useCartStore } from "@/lib/store/useCartStore";
import type { Dictionary } from "@/lib/i18n/types";
import { loadStripe } from "@stripe/stripe-js";

interface CartDrawerProps {
  dict: Dictionary;
  lang: "ar" | "en";
  isOpen: boolean;
  onClose: () => void;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function CartDrawer({ dict, lang, isOpen, onClose }: CartDrawerProps) {
  const [isMounted, setIsMounted] = useState(false);
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  const { items, removeItem, updateQuantity, getCartTotal, clearCart } = useCartStore();

  // Hydration fix for zustand persist
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleCheckout = async () => {
    try {
      setIsCheckingOut(true);
      
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items, lang }),
      });

      const { sessionId, error } = await response.json();

      if (error) {
        console.error("Checkout Error:", error);
        alert(dict.contact.form.errorMsg);
        setIsCheckingOut(false);
        return;
      }

      const stripe = await stripePromise;
      if (stripe) {
        await (stripe as any).redirectToCheckout({ sessionId });
      }
    } catch (err) {
      console.error(err);
      setIsCheckingOut(false);
    }
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 bottom-0 ${lang === 'ar' ? 'left-0' : 'right-0'} w-full max-w-md bg-white dark:bg-zinc-900 shadow-2xl z-50 
                    transform transition-transform duration-300 ease-in-out flex flex-col
                    ${isOpen ? "translate-x-0" : (lang === 'ar' ? "-translate-x-full" : "translate-x-full")}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-zinc-800">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {dict.cart.title}
          </h2>
          <button 
            onClick={onClose}
            className="p-2 text-zinc-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-zinc-500 space-y-4">
              <svg className="w-16 h-16 text-zinc-300 dark:text-zinc-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p>{dict.cart.emptyMessage}</p>
            </div>
          ) : (
            items.map((item) => {
              const name = lang === "ar" ? item.nameAr : item.nameEn;
              return (
                <div key={item.id} className="flex gap-4 bg-zinc-50 dark:bg-zinc-950 p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800">
                  <div className="relative w-24 h-24 shrink-0 bg-white dark:bg-zinc-900 rounded-xl overflow-hidden p-2">
                    <Image src={item.image} alt={name} fill className="object-contain" />
                  </div>
                  
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-semibold text-zinc-900 dark:text-white text-sm line-clamp-2">{name}</h4>
                      <p className="text-red-600 font-bold mt-1">
                        {item.price.toLocaleString(lang === "ar" ? "ar-SA" : "en-SA")} {dict.products.currency}
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-3 bg-white dark:bg-zinc-900 rounded-lg border border-zinc-200 dark:border-zinc-700 px-2 py-1">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-zinc-500 hover:text-red-600"
                        >
                          -
                        </button>
                        <span className="text-sm font-medium w-4 text-center dark:text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-zinc-500 hover:text-red-600"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-zinc-400 hover:text-red-600 transition-colors p-1"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {items.length > 0 && (
          <div className="p-6 border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex items-center justify-between mb-6">
              <span className="text-zinc-600 dark:text-zinc-400 font-medium">{dict.cart.total}</span>
              <span className="text-2xl font-bold text-red-600">
                {getCartTotal().toLocaleString(lang === "ar" ? "ar-SA" : "en-SA")} {dict.products.currency}
              </span>
            </div>
            
            <button 
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl
                         transition-all duration-300 shadow-lg shadow-red-600/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? (
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              )}
              {dict.cart.checkoutBtn}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
