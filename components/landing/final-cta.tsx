import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { PulgyButton } from "@/components/pulgy-button"

export function FinalCTA() {
  return (
    <section id="waitlist" className="bg-accent py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="type-title text-accent-foreground mb-3 sm:mb-4">
          Vendé tu contenido sin <HandwrittenUnderline>vueltas</HandwrittenUnderline>
        </h2>
        <p className="text-sm sm:text-base text-accent-foreground/90 mb-8 sm:mb-10">
          Creá tu tienda hoy y empezá a monetizar tu contenido desde un solo link. Sin tarjeta de crédito.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
          <PulgyButton href="/demo" variant="outlined" size="lg" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground hover:text-accent">
            Tienda de ejemplo
          </PulgyButton>
          <PulgyButton href="https://studio.pulgy.app" size="lg">
            Crear mi Pulgy
          </PulgyButton>
        </div>
      </div>
    </section>
  )
}
