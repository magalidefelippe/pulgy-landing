"use client"

import type React from "react"
import { useState } from "react"
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { OptimizedImage } from "./optimized-image"
import { useCartStore } from "@/store/cart-store"
import { formatPrice, cn } from "@/lib/utils"
import { toast } from "sonner"
import { MeetingSlotPicker } from "./meeting-slot-picker"
import { Calendar, Clock, CheckCircle2, AlertCircle } from "lucide-react"
import { useMobile } from "@/hooks/use-mobile"

export function CartSheet() {
  const { items, isOpen, closeCart, removeItem, getTotal, clearCart } = useCartStore()
  const isMobile = useMobile()
  const [buyerEmail, setBuyerEmail] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [meetingSlots, setMeetingSlots] = useState<Map<number, string>>(new Map())
  const [showMeetingPicker, setShowMeetingPicker] = useState<number | null>(null)
  const [isMeetingPickerOpen, setIsMeetingPickerOpen] = useState(false)

  const isEmpty = items.length === 0
  const meetingItems = items.filter((item) => item.kind === "meeting")
  const hasUnselectedMeetings = meetingItems.some((item) => !meetingSlots.has(item.id))

  const isEmailValid = buyerEmail.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(buyerEmail)
  const isCheckoutDisabled = !isEmailValid || hasUnselectedMeetings

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault()
    if (items.length === 0 || !buyerEmail) return

    if (hasUnselectedMeetings) {
      toast.error("Seleccioná fecha y hora para todas las reuniones")
      return
    }

    setIsProcessing(true)
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast.success("¡Pedido procesado! (Demo)")
    setBuyerEmail("")
    setMeetingSlots(new Map())
    clearCart()
    setIsProcessing(false)
  }

  return (
    <Drawer open={isOpen} onOpenChange={closeCart}>
      <DrawerContent className="h-[85vh] px-4 pb-0 flex flex-col">
        <DrawerHeader className="px-0 pt-4 pb-4 flex-shrink-0">
          <DrawerTitle className="type-title text-left text-foreground">Carrito</DrawerTitle>
          {!isEmpty && <p className="type-body mt-0.5 text-muted-foreground text-left">{items.length} productos</p>}
        </DrawerHeader>

        <div className="overflow-y-auto flex-1 -mx-4 px-4 pb-[240px]">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="type-stat text-muted-foreground/30 mb-2">0</p>
              <p className="type-subtitle text-foreground">Carrito vacío</p>
              <p className="type-body mt-1 text-muted-foreground">Agregá productos para continuar</p>
            </div>
          ) : (
            <>
              <div className="divide-y divide-dashed divide-border">
                {items.map((item) => (
                  <div key={item.id} className="py-4 flex gap-4">
                    <OptimizedImage
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      variant="product"
                      className="h-16 w-16 shrink-0 bg-secondary rounded-md"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="type-subtitle line-clamp-1 text-foreground">{item.title}</h4>
                      <p className="type-price mt-0.5 text-foreground">{formatPrice(item.price)}</p>

                      <div className="flex justify-end mt-2">
                        <Button onClick={() => removeItem(item.id)} variant="link" className="text-destructive">
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Meeting Slot Selection */}
              {meetingItems.length > 0 && (
                <div className="border-t border-dashed border-border pt-4 mt-6 space-y-3 pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <p className="type-caption text-foreground font-semibold">Agendar reuniones</p>
                  </div>
                  {meetingItems.map((item) => {
                    const hasSlot = meetingSlots.has(item.id)
                    const slotDatetime = meetingSlots.get(item.id)

                    return (
                      <div
                        key={item.id}
                        className={cn(
                          "rounded-lg p-3.5 border border-dashed transition-all",
                          hasSlot ? "bg-success-light border-success" : "bg-info-light border-info"
                        )}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 mb-1">
                              {hasSlot ? (
                                <CheckCircle2 className="h-4 w-4 text-success mt-0.5 shrink-0" />
                              ) : (
                                <AlertCircle className="h-4 w-4 text-info mt-0.5 shrink-0" />
                              )}
                              <p className="type-subtitle text-foreground line-clamp-1 font-semibold">{item.title}</p>
                            </div>
                            {hasSlot && slotDatetime ? (
                              <div className="ml-6">
                                <p className="text-xs text-success-foreground font-medium flex items-center gap-1.5 mb-0.5">
                                  <Calendar className="h-3 w-3" />
                                  {new Date(slotDatetime).toLocaleDateString("es-AR", {
                                    weekday: "long",
                                    day: "numeric",
                                    month: "long",
                                  })}
                                </p>
                                <p className="text-xs text-success-foreground flex items-center gap-1.5">
                                  <Clock className="h-3 w-3" />
                                  {new Date(slotDatetime).toLocaleTimeString("es-AR", {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  })}
                                </p>
                              </div>
                            ) : (
                              <p className="text-xs text-info-foreground ml-6 font-medium">
                                Seleccioná fecha y hora
                              </p>
                            )}
                          </div>
                          <Button
                            type="button"
                            variant={hasSlot ? "outline" : "default"}
                            size="sm"
                            onClick={() => {
                              setShowMeetingPicker(item.id)
                              setIsMeetingPickerOpen(true)
                            }}
                            className={cn(
                              "shrink-0",
                              hasSlot && "border-success text-success hover:bg-success-light"
                            )}
                          >
                            {hasSlot ? "Cambiar" : "Agendar"}
                          </Button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </>
          )}
        </div>

        {!isEmpty && (
          <div
            className="absolute bottom-0 left-0 right-0 bg-background px-4 pt-4"
            style={{ paddingBottom: `calc(1rem + env(safe-area-inset-bottom, 0px))` }}
          >
            <div className="flex items-baseline justify-between mb-3">
              <span className="type-label text-muted-foreground text-xs">Total</span>
              <span className="type-price text-foreground text-lg">{formatPrice(getTotal())}</span>
            </div>

            <form onSubmit={handleCheckout} className="space-y-2.5">
              <div>
                <label htmlFor="buyerEmail" className="type-label text-muted-foreground text-xs">
                  Tu email
                </label>
                <Input
                  id="buyerEmail"
                  type="email"
                  placeholder="tu@email.com"
                  value={buyerEmail}
                  onChange={(e) => setBuyerEmail(e.target.value)}
                  required
                  className="bg-white"
                />
              </div>
              <Button type="submit" className="w-full" size="sm" disabled={isCheckoutDisabled || isProcessing}>
                {isProcessing ? "Procesando..." : "Pagar con Mercado Pago"}
              </Button>
            </form>
          </div>
        )}
      </DrawerContent>

      {/* Meeting Slot Picker - Responsive (Drawer on mobile, Dialog on desktop) */}
      {showMeetingPicker && (() => {
        const item = items.find((i) => i.id === showMeetingPicker)
        if (!item) return null

        const handleClose = () => {
          setIsMeetingPickerOpen(false)
          setTimeout(() => setShowMeetingPicker(null), 300)
        }

        const pickerContent = (
          <MeetingSlotPicker
            meetingId={showMeetingPicker}
            selectedSlot={meetingSlots.get(item.id)}
            isMobile={isMobile}
            onSlotSelected={(datetime) => {
              setMeetingSlots(new Map(meetingSlots).set(item.id, datetime))
              handleClose()
            }}
            onCancel={handleClose}
          />
        )

        if (isMobile) {
          return (
            <Drawer
              open={isMeetingPickerOpen}
              onOpenChange={(open) => {
                if (!open) handleClose()
              }}
            >
              <DrawerContent className="h-[90vh] flex flex-col">
                <DrawerHeader className="px-4 pt-4 pb-4 flex-shrink-0">
                  <DrawerTitle className="type-title text-left text-foreground">{item.title}</DrawerTitle>
                </DrawerHeader>
                <div className="flex-1 overflow-y-auto px-4">{pickerContent}</div>
              </DrawerContent>
            </Drawer>
          )
        }

        return (
          <Dialog open={!!showMeetingPicker} onOpenChange={() => setShowMeetingPicker(null)}>
            <DialogContent className="max-w-md max-h-[85vh] flex flex-col p-0">
              <DialogHeader className="px-6 pt-6 pb-0 shrink-0">
                <DialogTitle className="type-title text-left text-foreground">{item.title}</DialogTitle>
              </DialogHeader>
              <div className="flex-1 overflow-y-auto px-6 pb-6 min-h-0 scrollbar-visible">
                {pickerContent}
              </div>
            </DialogContent>
          </Dialog>
        )
      })()}
    </Drawer>
  )
}
