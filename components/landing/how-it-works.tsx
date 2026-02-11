import { HandwrittenUnderline } from "@/components/handwritten-underline"

const steps = [
  {
    num: "01",
    title: "Creá tu cuenta",
  description: "Ingresá en segundos con alguna de tus redes sociales. No necesitás tarjeta de crédito.",
  },
  {
    num: "02",
    title: "Configurá tu tienda",
    description: "Elegí tu usuario, subí tu foto, escribí una descripción y agregá tus redes sociales.",
  },
  {
    num: "03",
    title: "Conectá tus herramientas",
  description: "Integrá Mercado Pago y Google Calendar en minutos.",
},
  {
    num: "04",
    title: "Subí tus productos",
    description: "Productos digitales, mentorías o ambos. Todo desde el mismo dashboard.",
  },
  {
    num: "05",
    title: "Compartí tu link",
    description: "Usá store.pulgy.app/usuario en tu bio y empezá a vender.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-secondary py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="type-section-label text-accent mb-3 sm:mb-4">CÓMO FUNCIONA</p>
          <h2 className="type-section-title text-foreground">
            Lanzá tu tienda en <HandwrittenUnderline>minutos</HandwrittenUnderline>
          </h2>
        </div>

        <div className="space-y-0">
          {steps.map((step, index) => (
            <div
              key={step.num}
              className={`flex gap-4 sm:gap-6 py-4 sm:py-6 ${index !== steps.length - 1 ? "border-b border-dashed" : ""}`}
              style={{ borderColor: "#d0c9c2" }}
            >
              <span className="type-mono text-accent-secondary w-6 sm:w-8 pt-0.5 sm:pt-1 font-semibold text-xs sm:text-sm">
                {step.num}
              </span>
              <div>
                <h3
                  className="text-base sm:text-xl font-semibold text-foreground mb-1 sm:mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {step.title}
                </h3>
                <p className="type-body text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
