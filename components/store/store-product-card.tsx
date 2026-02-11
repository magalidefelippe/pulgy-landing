"use client"

import type React from "react"
import { useState } from "react"
import { useCartStore } from "@/store/cart-store"
import { formatPrice } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "./optimized-image"
import { StoreProductPreviewSheet } from "./store-product-preview-sheet"
import { Calendar, Clock } from "lucide-react"
import type { ProductPublic } from "@/types/store"

interface StoreProductCardProps {
  product: ProductPublic
  index?: number
}

export function StoreProductCard({ product, index = 0 }: StoreProductCardProps) {
  const addItem = useCartStore((state) => state.addItem)
  const [isPreviewOpen, setIsPreviewOpen] = useState(false)

  const handleCardClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) {
      return
    }
    setIsPreviewOpen(true)
  }

  return (
    <div className="bg-white rounded-lg p-4 shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] border-l-2 border-dashed border-accent">
      <div
        className="flex gap-4 cursor-pointer"
        onClick={handleCardClick}
      >
        <OptimizedImage
          src={product.image}
          alt={product.title}
          width={112}
          height={140}
          variant="product"
          priority={index === 0}
          className="w-24 sm:w-28 shrink-0 aspect-[4/5] bg-secondary rounded-md"
        />

        <div className="flex-1 min-w-0 flex flex-col">
          <h3 className="type-subtitle text-foreground mb-1">{product.title}</h3>
          <p className="type-body text-sm line-clamp-3 sm:line-clamp-2 flex-1">{product.description}</p>

          {product.kind === "meeting" && product.meetingConfig && (
            <div className="flex items-center gap-3 mt-2 text-xs text-muted-foreground">
              <span className="inline-flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>Videollamada</span>
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{product.meetingConfig.duration} min</span>
              </span>
            </div>
          )}

          <div className="flex items-center justify-between mt-3">
            <span className="type-price text-foreground">{formatPrice(product.price)}</span>
            <Button
              onClick={(e) => {
                e.stopPropagation()
                addItem(product)
              }}
              size="sm"
              className="bg-accent text-accent-foreground hover:bg-accent/90"
            >
              Agregar
            </Button>
          </div>
        </div>
      </div>

      <StoreProductPreviewSheet isOpen={isPreviewOpen} onClose={() => setIsPreviewOpen(false)} product={product} />
    </div>
  )
}
