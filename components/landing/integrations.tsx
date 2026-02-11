import { HandwrittenUnderline } from "@/components/handwritten-underline"

const integrations = [
  { name: "MercadoPago", logo: "💳" },
  { name: "Google Calendar", logo: "📅" },
  { name: "Google Meet", logo: "🎥" },
  { name: "Auth0", logo: "🔐" },
  { name: "Resend", logo: "📧" },
]

export function Integrations() {
  return (
    <section className="bg-secondary py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="type-caption text-accent mb-4">INTEGRACIONES</p>
        <h2 className="type-title text-foreground mb-12">
          Conectado con las <HandwrittenUnderline>herramientas</HandwrittenUnderline> que usás
        </h2>

        <div className="flex flex-wrap justify-center gap-8">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="flex flex-col items-center gap-3 p-6 bg-card rounded-xl border border-border hover:border-accent-secondary/40 transition-colors"
            >
              <span className="text-4xl">{integration.logo}</span>
              <span className="type-body-sm font-medium text-foreground">{integration.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
