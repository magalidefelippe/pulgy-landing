"use client"

import { mockCreator, mockProducts } from "@/data/mock-store"
import { formatPrice } from "@/lib/utils"
import { OptimizedImage } from "@/components/store/optimized-image"
import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { Calendar, Clock } from "lucide-react"
import Image from "next/image"

// Inline simplified header for snapshot with always-visible watermark
function SnapshotHeader() {
  const creator = mockCreator
  const socialLinks = [
    { label: "Instagram", url: creator.instagram },
    { label: "TikTok", url: creator.tiktok },
  ].filter((link) => link.url)

  return (
    <header className="relative px-4 pt-10 pb-6 max-w-md mx-auto border-b border-dashed border-border">
      {/* Watermark - top right, small and subtle */}
      <div className="flex justify-end mb-3 pr-1" aria-hidden="true">
        <img src="/logo.png" alt="Pulgy" className="h-8 opacity-50" />
      </div>
      <div className="text-center">
        <OptimizedImage
          src={creator.avatar}
          alt={creator.name}
          width={80}
          height={80}
          variant="avatar"
          priority
          className="w-20 h-20 bg-secondary mx-auto mb-3 rounded-full"
        />
        <h1 className="type-title text-foreground text-base">{creator.name}</h1>
        <p className="type-mono text-muted-foreground mt-0.5 text-xs">@{creator.handle}</p>
        
        {creator.bio && <p className="type-body mt-3 max-w-xs mx-auto text-xs leading-relaxed">{creator.bio}</p>}
        
        {socialLinks.length > 0 && (
          <div className="flex items-center justify-center gap-4 mt-4">
            {socialLinks.map((link) => (
              <HandwrittenUnderline key={link.label}>
                <span className="type-caption text-muted-foreground text-[10px]">{link.label}</span>
              </HandwrittenUnderline>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}

export function StorePreviewSnapshot() {
  return (
    <div className="relative w-[300px] sm:w-[340px] md:w-[375px] bg-foreground rounded-[44px] sm:rounded-[48px] p-2 sm:p-2.5 shadow-2xl pointer-events-none select-none">
      {/* Dynamic Island style notch (iPhone 12+) */}
      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 sm:w-32 h-6 sm:h-7 bg-foreground rounded-full z-10" />

      <div className="relative bg-background rounded-[36px] sm:rounded-[40px] overflow-hidden h-[580px] sm:h-[660px] md:h-[720px]">
        {/* Bottom fade gradient overlay */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none z-20 rounded-b-[36px] sm:rounded-b-[40px]"
          style={{ 
            background: "linear-gradient(to top, #f7f5f2 0%, #f7f5f2 30%, rgba(247, 245, 242, 0) 100%)" 
          }}
        />
        
        <div className="h-full pb-6 sm:pb-8 flex flex-col">
          <SnapshotHeader />

          <main className="px-2.5 sm:px-3 flex-1 overflow-hidden">
            <div className="space-y-3 pt-4">
              {mockProducts.slice(0, 4).map((product, index) => (
                <div
                  key={product.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${250 + index * 80}ms` }}
                >
                  {/* Non-interactive product card for snapshot */}
                  <div className="bg-white rounded-lg p-4 shadow-[0_2px_12px_0_rgba(0,0,0,0.08)] border-l-2 border-dashed border-accent">
                    <div className="flex gap-4">
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
                          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium h-9 rounded-md px-4 py-2 bg-accent text-accent-foreground">
                            Agregar
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>


        </div>
      </div>
    </div>
  )
}
