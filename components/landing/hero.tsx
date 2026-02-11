"use client"

import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { PulgyButton } from "@/components/pulgy-button"
import { GrainIcon } from "../grain-icon"
import { StorePreviewSnapshot } from "@/components/store/store-preview-snapshot"
import { ArrowUpRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative bg-background px-4 sm:px-6 overflow-hidden lg:pt-28 lg:pb-20">
      {/* Full-section grainy accent background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg className="w-full h-full" viewBox="0 0 1200 900" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="hero-grain-gradient" cx="65%" cy="40%" r="50%">
              <stop offset="0%" stopColor="#c12a6a" stopOpacity="0.18" />
              <stop offset="35%" stopColor="#c12a6a" stopOpacity="0.12" />
              <stop offset="65%" stopColor="#c12a6a" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#c12a6a" stopOpacity="0" />
            </radialGradient>
            <filter id="hero-grain-noise">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="4" result="noise" />
              <feComposite in="SourceGraphic" in2="noise" operator="in" />
            </filter>
          </defs>
          <rect width="1200" height="900" fill="url(#hero-grain-gradient)" />
          <rect width="1200" height="900" fill="url(#hero-grain-gradient)" filter="url(#hero-grain-noise)" opacity="0.5" style={{ mixBlendMode: "overlay" }} />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="lg:grid lg:grid-cols-[1fr_auto] lg:items-start lg:gap-x-16 lg:gap-y-3">

          {/* === ABOVE THE FOLD on mobile === */}
          <div className="min-h-svh flex flex-col items-center pt-24 pb-6 lg:min-h-0 lg:pt-0 lg:pb-0 lg:contents">
            {/* Title */}
            <h1 className="lg:col-start-1 lg:row-start-1 text-center lg:text-left type-display text-foreground animate-slide-up delay-1">
              Vendé tus contenidos digitales y mentorías online desde{" "}
              <HandwrittenUnderline>un solo link</HandwrittenUnderline>
            </h1>

            {/* Phone + overlaid CTAs on mobile */}
            <div className="flex-1 relative w-full my-2 lg:my-0 lg:flex-none lg:col-start-2 lg:row-start-1 lg:row-span-4 lg:justify-self-auto animate-slide-up delay-2 lg:scale-[0.75] lg:-mb-40 lg:origin-top-right">
              {/* Phone */}
              <div className="absolute inset-0 flex items-center justify-center lg:static lg:inset-auto">
                <div className="scale-[0.62] sm:scale-[0.67] lg:scale-100">
                  <StorePreviewSnapshot />
                </div>
              </div>

              {/* CTAs overlaid at bottom of phone area — mobile only */}
              <div className="absolute bottom-5 inset-x-0 z-10 flex items-center justify-center gap-3 lg:hidden animate-slide-up delay-3">
                <PulgyButton href="https://studio.pulgy.app" size="md" className="shadow-lg" data-analytics="hero-cta-create">
                  Crear mi Pulgy
                </PulgyButton>
                <PulgyButton href="/demo" size="md" className="shadow-sm bg-accent-secondary text-white hover:opacity-90" icon={<ArrowUpRight className="w-4 h-4" />} iconPosition="right" data-analytics="hero-cta-demo">
                  Ver ejemplo
                </PulgyButton>
              </div>
            </div>
          </div>

          {/* Feature pills + description — hidden on mobile, visible on desktop for SEO */}
          <div className="hidden lg:flex lg:col-start-1 lg:row-start-2 flex-wrap justify-start gap-4 animate-slide-up delay-2">
            <span className="inline-flex items-center gap-1.5 text-base text-muted-foreground">
              <GrainIcon size={14} className="text-accent shrink-0" />
              Pagos directos con Mercado Pago
            </span>
            <span className="inline-flex items-center gap-1.5 text-base text-muted-foreground">
              <GrainIcon size={14} className="text-accent shrink-0" />
              Sesiones online automáticas
            </span>
            <span className="inline-flex items-center gap-1.5 text-base text-muted-foreground">
              <GrainIcon size={14} className="text-accent shrink-0" />
              Sin comisión
            </span>
          </div>

          <p className="hidden lg:block lg:col-start-1 lg:row-start-3 text-left lg:text-lg text-muted-foreground max-w-xl text-balance leading-relaxed animate-slide-up delay-3">
            Pulgy es la plataforma argentina para creadores que quieren vender productos digitales y sesiones 1:1 de
            forma simple, profesional y sin comisiones por venta.
          </p>

          {/* CTAs — desktop only (mobile version is overlaid on phone above) */}
          <div className="hidden lg:flex lg:col-start-1 lg:row-start-4 items-center gap-4 animate-slide-up delay-4">
            <PulgyButton href="https://studio.pulgy.app" size="md" data-analytics="hero-cta-create">
              Crear mi Pulgy
            </PulgyButton>
            <PulgyButton href="/demo" size="md" className="bg-accent-secondary text-white hover:opacity-90" icon={<ArrowUpRight className="w-4 h-4" />} iconPosition="right" data-analytics="hero-cta-demo">
              Ver tienda de ejemplo
            </PulgyButton>
          </div>
        </div>

        {/* Bottom strip — hidden on mobile, visible on desktop */}
        <div
          className="hidden lg:block mt-16 pt-8 border-t border-dashed animate-slide-up delay-4"
          style={{ borderColor: "#d0c9c2" }}
        >
          <div className="flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 text-accent px-4 py-2 rounded-full bg-accent/5 text-sm font-medium tracking-wide">
              <GrainIcon size={16} className="shrink-0" />
              Pensado para creadores argentinos
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <GrainIcon size={14} className="text-accent shrink-0" />
                Cobrás en pesos
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <GrainIcon size={14} className="text-accent shrink-0" />
                Integración local
              </span>
              <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
                <GrainIcon size={14} className="text-accent shrink-0" />
                Soporte en español
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
