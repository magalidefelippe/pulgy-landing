import { Check } from "lucide-react"
import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { PulgyButton } from "@/components/pulgy-button"

export function Pricing() {
  return (
    <section id="precios" className="bg-background py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="type-section-label text-accent mb-3 sm:mb-4">PRECIOS</p>
          <h2 className="type-section-title text-foreground">
            Probá gratis, <HandwrittenUnderline>pasate a Pro cuando crezcas</HandwrittenUnderline>
          </h2>
          <p className="type-body mt-4 sm:mt-5 max-w-xl mx-auto text-sm sm:text-base">
            Empezá sin pagar nada: publicá hasta 2 productos y hacé hasta 5 ventas gratis.
            Cuando superás ese límite, pasás a Pro para seguir vendiendo sin tope.
          </p>
        </div>

        {/* Sin comisión callout - moved above plans */}
        <div
          className="mb-8 sm:mb-10 bg-accent-secondary/5 p-5 sm:p-6 rounded-xl text-center border border-accent-secondary/20"
        >
          <div className="flex items-center justify-center gap-2 mb-2">
            <Check size={20} className="text-accent-secondary" />
            <p className="text-lg sm:text-xl font-semibold text-foreground">
              Sin comisión por venta
            </p>
          </div>
          <p className="text-sm sm:text-base max-w-2xl mx-auto text-muted-foreground">
            Pulgy no se queda con un porcentaje de tus ventas. Solo pagás las comisiones estándar de Mercado Pago.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 sm:gap-8">
          <div className="bg-white/60 p-5 sm:p-8 rounded-xl border border-dashed" style={{ borderColor: "#d0c9c2" }}>
            <div className="mb-4 sm:mb-6">
              <h3
                className="text-xl sm:text-2xl font-semibold text-foreground mb-1 sm:mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Plan Gratis
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Ideal para empezar</p>
            </div>

            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span
                className="text-3xl sm:text-4xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                $0
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">Hasta 5 ventas</span>
            </div>

            <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
              {[
                "Tu tienda en pulgy.app/usuario",
                "Todos los tipos de producto",
                "Hasta 2 productos publicados",
                "Cobros con Mercado Pago",
                "Agenda automática con Google Calendar",
                "Entrega automática de archivos",
              ].map((feature) => (
                <li key={feature} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground">
                  <Check size={14} className="text-accent-secondary flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>

          </div>

          <div className="bg-white/60 p-5 sm:p-8 rounded-xl border-2 border-accent relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 sm:px-4 py-1 rounded-full text-[10px] sm:text-xs tracking-wider uppercase">
              PRÓXIMAMENTE
            </div>

            <div className="mb-4 sm:mb-6">
              <h3
                className="text-xl sm:text-2xl font-semibold text-foreground mb-1 sm:mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                Plan Pro
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground">Para escalar tus ventas</p>
            </div>

            <div className="flex items-baseline gap-1 mb-4 sm:mb-6">
              <span
                className="text-3xl sm:text-4xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                $9.990
              </span>
              <span className="text-xs sm:text-sm text-muted-foreground">/mes · Ventas ilimitadas</span>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">
                  Incluye todo lo del plan Gratis, más:
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {["Productos ilimitados", "Ventas sin tope", "Soporte prioritario", "Notificaciones de ventas"].map(
                    (feature) => (
                      <li key={feature} className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-foreground">
                        <Check size={14} className="text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <p className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mb-2 sm:mb-3">
                  Próximamente:
                </p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {[
                    "Cupones y descuentos",
                    "Recordatorios automáticos de sesiones",
                    "Reenvio de compras",
                   
                    "Campañas",
                    "Cursos"
                  ].map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-muted-foreground"
                    >
                      <Check size={14} className="text-accent/50 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <PulgyButton size="sm" fullWidth disabled>
              Disponible pronto
            </PulgyButton>
          </div>
        </div>


      </div>
    </section>
  )
}
