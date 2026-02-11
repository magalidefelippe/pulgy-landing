"use client"

import { useCartStore } from "@/store/cart-store"
import { formatPrice } from "@/lib/utils"

export function FloatingCartButton() {
  const { openCart, getItemCount, getTotal } = useCartStore()
  const itemCount = getItemCount()

  if (itemCount === 0) return null

  return (
    <button
      onClick={openCart}
      className="fixed bottom-4 left-4 right-4 mx-auto max-w-lg h-14
                 bg-accent text-accent-foreground rounded-lg
                 flex items-center justify-between px-5
                 z-50 animate-slide-up shadow-lg"
    >
      <div className="flex items-center gap-3">
        <span className="bg-white/20 text-sm font-bold h-7 w-7 rounded-full flex items-center justify-center">
          {itemCount}
        </span>
        <span className="text-sm font-semibold">Ver carrito</span>
      </div>
      <span className="text-base font-bold">{formatPrice(getTotal())}</span>
    </button>
  )
}
