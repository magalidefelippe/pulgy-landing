import { create } from "zustand"
import type { ProductPublic, CartItem } from "@/types/store"

interface CartStore {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  addItem: (product: ProductPublic) => void
  removeItem: (productId: number) => void
  clearCart: () => void
  getItemCount: () => number
  getTotal: () => number
}

export const useCartStore = create<CartStore>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),

  addItem: (product) => {
    const items = get().items
    const existingItem = items.find((item) => item.id === product.id)

    if (existingItem) {
      set({
        items: items.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item)),
      })
    } else {
      set({ items: [...items, { ...product, quantity: 1 }] })
    }
  },

  removeItem: (productId) => {
    set({ items: get().items.filter((item) => item.id !== productId) })
  },

  clearCart: () => set({ items: [] }),

  getItemCount: () => {
    return get().items.reduce((count, item) => count + item.quantity, 0)
  },

  getTotal: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0)
  },
}))
