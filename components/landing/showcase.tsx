"use client"

import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { ArrowUpRight } from "lucide-react"
import { PulgyButton } from "@/components/pulgy-button"
import { StorePreviewSnapshot } from "@/components/store/store-preview-snapshot"

export function Showcase() {
  return (
    <section id="tienda-ejemplo" className="bg-background py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="type-section-label text-accent mb-3 sm:mb-4">TIENDA DE EJEMPLO</p>
          <h2 className="type-section-title text-foreground mb-4 sm:mb-5">
            Así podría verse tu <HandwrittenUnderline>tienda</HandwrittenUnderline>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Una tienda clara, ordenada y profesional, optimizada para comprar desde el celular.
          </p>
        </div>

        <div className="flex flex-col items-center gap-8 sm:gap-10">
          {/* CTA above phone */}
          <PulgyButton
            href="/demo"
            size="sm"
            className="gap-2 shadow-lg text-sm sm:text-base px-8 sm:px-10 py-3.5"
            data-analytics="showcase-demo-cta"
          >
            Ver demo interactiva <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </PulgyButton>

          {/* Phone mockup */}
          <StorePreviewSnapshot />
        </div>
      </div>
    </section>
  )
}
