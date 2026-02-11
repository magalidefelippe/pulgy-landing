"use client"

import { mockCreator, mockProducts } from "@/data/mock-store"
import Image from "next/image"
import { OptimizedImage } from "@/components/store/optimized-image"
import { formatPrice } from "@/lib/utils"

export function StorePreview() {
  return (
    <div className="bg-background rounded-2xl overflow-hidden">
      {/* Demo banner */}
      <div className="bg-accent text-white text-center py-1.5 px-3">
        <p className="text-xs font-medium">Tienda de demo</p>
      </div>

      {/* Store Header */}
      <div className="p-4 border-b border-dashed" style={{ borderColor: "#d0c9c2" }}>
        <div className="flex items-center gap-3">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
            <OptimizedImage src={mockCreator.avatarUrl} alt={mockCreator.displayName} fill className="object-cover" />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-heading font-semibold text-foreground truncate text-sm">{mockCreator.displayName}</h1>
            <p className="text-xs text-muted-foreground truncate">@{mockCreator.username}</p>
          </div>
        </div>
        {mockCreator.bio && <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{mockCreator.bio}</p>}
      </div>

      {/* Products list - show first 3 */}
      <div className="divide-y divide-dashed" style={{ borderColor: "#d0c9c2" }}>
        {mockProducts.slice(0, 3).map((product) => (
          <div key={product.id} className="p-4 flex gap-3">
            <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-secondary">
              <OptimizedImage src={product.imageUrl} alt={product.name} fill className="object-cover" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-foreground text-sm truncate">{product.name}</h3>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-0.5">{product.description}</p>
              <p className="text-sm font-semibold text-accent mt-1">{formatPrice(product.price)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* More indicator */}
      <div className="p-3 text-center border-t border-dashed" style={{ borderColor: "#d0c9c2" }}>
        <p className="text-xs text-muted-foreground">+{mockProducts.length - 3} productos más</p>
      </div>

      {/* Footer */}
      <div className="p-3 text-center border-t border-dashed bg-secondary/50" style={{ borderColor: "#d0c9c2" }}>
        <div className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
          Hecho con <Image src="/logo.png" alt="Pulgy" width={48} height={16} className="h-4 w-auto" />
        </div>
      </div>
    </div>
  )
}
