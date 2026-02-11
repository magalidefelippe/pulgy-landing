"use client"

import { StoreHeader } from "./store-header"
import { StoreProductCard } from "./store-product-card"
import { FloatingCartButton } from "./floating-cart-button"
import { CartSheet } from "./cart-sheet"
import { GrainIcon } from "@/components/grain-icon"
import { mockCreator, mockProducts } from "@/data/mock-store"

interface DemoStoreProps {
  isEmbed?: boolean
}

export function DemoStore({ isEmbed = false }: DemoStoreProps) {
  return (
    <div className="relative min-h-screen bg-background pb-32 animate-fade-in">
      {/* Desktop watermark top right */}
      <div className="hidden lg:block fixed top-10 left-4 z-50 pointer-events-none select-none" aria-hidden="true">
        <img src="/logo.png" alt="Pulgy" className="h-20" />
      </div>

      {!isEmbed && (
        <div className="bg-accent text-accent-foreground text-center py-2 px-4">
          <p className="type-label">Esto es una tienda de ejemplo.</p>
        </div>
      )}

      <StoreHeader creator={mockCreator} />

      <main className="px-5 max-w-md mx-auto">
        <div className="space-y-3 pt-4">
          {mockProducts.map((product, index) => (
            <div
              key={product.id}
              className="animate-fade-in"
              style={{ animationDelay: `${250 + index * 80}ms` }}
            >
              <StoreProductCard product={product} index={index} />
            </div>
          ))}
        </div>

        {mockProducts.length === 0 && (
          <div className="text-center py-20 animate-fade-in" style={{ animationDelay: "250ms" }}>
            <div className="flex justify-center mb-4">
              <GrainIcon size={100} className="opacity-40" />
            </div>
            <p className="type-body text-muted-foreground">Sin productos</p>
          </div>
        )}
      </main>

      <footer
        className="mt-16 text-center animate-fade-in"
        style={{ animationDelay: `${250 + mockProducts.length * 80 + 100}ms` }}
      >
        <p className="pulgy-mark flex items-center justify-center gap-1.5">
          Hecho con
          <img src="/logo.png" alt="Pulgy" className="h-4 inline-block" />
        </p>
      </footer>

      <FloatingCartButton />
      <CartSheet />
    </div>
  )
}
