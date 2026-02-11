"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Button } from "@/components/ui/button"
import { OptimizedImage } from "./optimized-image"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn, formatPrice } from "@/lib/utils"
import { useCartStore } from "@/store/cart-store"
import type { ProductPublic } from "@/types/store"
import { X, Calendar, Clock, Video } from "lucide-react"

const DAY_NAMES: Record<string, string> = {
  monday: "Lunes",
  tuesday: "Martes",
  wednesday: "Miércoles",
  thursday: "Jueves",
  friday: "Viernes",
  saturday: "Sábado",
  sunday: "Domingo",
}

interface StoreProductPreviewSheetProps {
  isOpen: boolean
  onClose: () => void
  product: ProductPublic
}

function StorePreviewScrollContent({ product }: { product: ProductPublic }) {
  return (
    <div className="flex flex-col gap-6">
      <OptimizedImage
        src={product.image}
        alt={product.title}
        width={240}
        height={240}
        variant="product"
        priority
        className="w-60 aspect-square rounded-md bg-secondary mx-auto"
      />

      <h2 className="type-title text-foreground">{product.title}</h2>

      <p className="type-body text-foreground whitespace-pre-wrap">{product.description || "Sin descripción"}</p>

      {product.kind === "meeting" && product.meetingConfig && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-accent font-medium">
            <Video className="w-4 h-4" />
            <span className="text-sm">Detalles de la videollamada</span>
          </div>

          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
              <div>
                <span className="text-foreground font-medium">Duración: </span>
                <span className="text-muted-foreground">{product.meetingConfig.duration} minutos</span>
              </div>
            </div>

            {product.meetingConfig.schedule && product.meetingConfig.schedule.length > 0 && (
              <div className="flex items-start gap-2">
                <Calendar className="w-4 h-4 mt-0.5 text-muted-foreground shrink-0" />
                <div className="flex-1 space-y-1.5">
                  <span className="text-foreground font-medium block mb-2">Horarios disponibles:</span>
                  <div className="space-y-1 ml-6">
                    {product.meetingConfig.schedule.map((daySchedule, idx) => (
                      <div key={idx} className="flex items-center justify-between text-xs">
                        <span className="text-foreground">{DAY_NAMES[daySchedule.day] || daySchedule.day}</span>
                        <span className="text-muted-foreground font-mono">
                          {daySchedule.startTime} - {daySchedule.endTime}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="pt-2 border-t border-border border-dashed">
            <p className="text-xs text-muted-foreground">
              Vas a poder elegir entre los horarios disponibles al momento de reservar.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

function StorePreviewFooter({ product, onClose }: { product: ProductPublic; onClose: () => void }) {
  const addItem = useCartStore((state) => state.addItem)

  const handleAddToCart = () => {
    addItem(product)
    onClose()
  }

  return (
    <div className="pt-4 border-t border-border bg-background border-none">
      <div className="text-2xl font-semibold text-foreground mb-4">{formatPrice(product.price)}</div>
      <Button type="button" onClick={handleAddToCart} size="sm" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
        Agregar al carrito
      </Button>
    </div>
  )
}

export function StoreProductPreviewSheet({ isOpen, onClose, product }: StoreProductPreviewSheetProps) {
  const isMobile = useIsMobile()

  if (!isMobile) {
    return (
      <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent className="sm:max-w-md bg-background p-0 border-foreground max-h-[85vh] flex flex-col">
          <DialogHeader className="px-4 pt-4 pb-0 flex-row justify-end space-y-0 shrink-0">
            <DialogTitle className="sr-only">{product.title}</DialogTitle>
            <DialogClose className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none">
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar</span>
            </DialogClose>
          </DialogHeader>
          {/* Scrollable content */}
          <div className="px-4 overflow-y-auto flex-1 min-h-0">
            <StorePreviewScrollContent product={product} />
          </div>
          {/* Fixed footer */}
          <div className="px-4 pb-4 shrink-0">
            <StorePreviewFooter product={product} onClose={onClose} />
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="h-[85dvh] flex flex-col">
        <DrawerHeader className="px-4 pt-4 pb-4 shrink-0">
          <DrawerTitle className="sr-only">{product.title}</DrawerTitle>
        </DrawerHeader>
        {/* Scrollable content */}
        <div className="px-4 overflow-y-auto flex-1 min-h-0">
          <StorePreviewScrollContent product={product} />
        </div>
        {/* Fixed footer */}
        <div className="px-4 pb-4 shrink-0">
          <StorePreviewFooter product={product} onClose={onClose} />
        </div>
      </DrawerContent>
    </Drawer>
  )
}
