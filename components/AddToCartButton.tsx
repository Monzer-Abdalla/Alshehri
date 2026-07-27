"use client";

import { useCartStore } from "@/lib/store/useCartStore";
import type { Product } from "@/lib/types";

interface AddToCartButtonProps {
  product: Product;
  label: string;
}

export default function AddToCartButton({ product, label }: AddToCartButtonProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleAdd = () => {
    addItem(product);
    // Optionally open the cart drawer here by dispatching an event, 
    // but the navbar badge will update automatically which is nice.
  };

  return (
    <button
      onClick={handleAdd}
      className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-4 rounded-xl
                 transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-red-600/20"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
      {label}
    </button>
  );
}
