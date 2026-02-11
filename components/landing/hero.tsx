import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { PulgyButton } from "@/components/pulgy-button"
import { GrainIcon } from "../grain-icon"

export function Hero() {
  return (
    <section className="relative bg-background pt-24 pb-16 lg:pt-40 lg:pb-28 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="type-display text-foreground mb-4 sm:mb-6 animate-slide-up delay-1">
          Vendé tus contenidos digitales y mentorías online desde <HandwrittenUnderline>un solo link</HandwrittenUnderline>
        </h1>

        <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 animate-slide-up delay-2 text-balance leading-relaxed">
          Pulgy es la plataforma argentina para creadores que quieren vender productos digitales y sesiones 1:1 de forma
          simple, profesional y sin comisiones por venta.
    
        </p>

        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 animate-slide-up delay-3">
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <GrainIcon size={12} className="text-accent shrink-0" />
            Pagos directos con Mercado Pago
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <GrainIcon size={12} className="text-accent shrink-0" />
            Sesiones online automáticas
          </span>
          <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
            <GrainIcon size={12} className="text-accent shrink-0" />
            Sin comisión
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 animate-slide-up delay-4">
          <PulgyButton href="/demo" variant="outlined" size="sm" data-analytics="hero-cta-demo">
            Ver tienda de ejemplo
          </PulgyButton>
          <PulgyButton href="https://studio.pulgy.app" size="sm" data-analytics="hero-cta-create">
            Crear mi Pulgy
          </PulgyButton>
        </div>

        <div
          className="pt-6 sm:pt-8 border-t border-dashed animate-slide-up delay-4"
          style={{ borderColor: "#d0c9c2" }}
        >
          <div className="flex flex-col items-center gap-4 sm:gap-5">
            <div className="inline-flex items-center gap-2 text-accent px-4 py-2 rounded-full bg-accent/5 text-xs sm:text-sm font-medium tracking-wide">
              <GrainIcon size={16} className="shrink-0" />
              Pensado para creadores argentinos
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <GrainIcon size={12} className="text-accent shrink-0" />
                Cobrás en pesos
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <GrainIcon size={12} className="text-accent shrink-0" />
                Integración local
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
                <GrainIcon size={12} className="text-accent shrink-0" />
                Soporte en español
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
