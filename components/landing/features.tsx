import { CreditCard, Calendar, Send, ShoppingCart, Shield, CalendarSearch as CalendarSync } from "lucide-react"
import { HandwrittenUnderline } from "@/components/handwritten-underline"

const features = [
  {
    icon: CreditCard,
    title: "Cobros con Mercado Pago",
    description:
      "El dinero de cada venta se acredita directamente en tu cuenta de Mercado Pago. Pulgy no intermedia ni retiene pagos.",
  },
  {
    icon: Calendar,
    title: "Sesiones online en google calendar",
 description:
    "Vendé sesiones 1:1 sin coordinar por WhatsApp. Tus clientes eligen horario y el evento se agenda solo en tu Google Calendar con link de Google Meet incluido.",
},
  {
    icon: ShoppingCart,
    title: "Carrito multi-producto",
    description: "Vendé varios productos en una misma compra: ebooks, cursos, presets, templates o sesiones.",
  },
  {
    icon: Send,
   title: "Entrega automática post-pago",
  description:
    "Después del pago, tus clientes reciben un email con el link de descarga o el acceso a su compra. Sin envíos manuales.",
},
  {
    icon: Shield,
    title: "Descargas seguras",
    description:
      "Links temporales con vencimiento y límite de descargas. Protegé tu contenido sin usar Drive ni links compartidos.",
  },
  {
    icon: CalendarSync,
    title: "Política de reagenda flexible",
    description: "Permití reagendar tus sesiones online según las condiciones que vos definas. Tu cliente reagenda automaticamente, vos no te encargas de nada."
  }
]

export function Features() {
  return (
    <section id="beneficios" className="bg-background py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="type-section-label text-accent mb-3 sm:mb-4">Beneficios</p>
          <h2 className="type-section-title text-foreground">
            Todo lo que necesitás para vender online, en un <HandwrittenUnderline>solo lugar</HandwrittenUnderline>
          </h2>
        </div>

        {/* Responsive grid: 1 col mobile, 2 col md, 3 col xl */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white/60 p-3 sm:p-5 rounded-lg border border-dashed hover:shadow-md hover:border-accent/50 transition-all duration-300 group"
              style={{ borderColor: "#d0c9c2" }}
            >
              <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                  <feature.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </div>
                <h3
                  className="text-sm sm:text-base font-semibold text-foreground"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {feature.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
