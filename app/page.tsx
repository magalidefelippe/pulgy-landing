import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Features } from "@/components/landing/features"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Showcase } from "@/components/landing/showcase"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

// JSON-LD structured data for SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Pulgy",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description: "Plataforma para creadores argentinos para vender productos digitales y sesiones con MercadoPago",
  url: "https://pulgy.app",
  offers: [
    {
      "@type": "Offer",
      name: "Plan Gratis",
      price: "0",
      priceCurrency: "ARS",
      description: "Hasta 5 productos, 1 link de pago, pagina de tienda",
    },
    {
      "@type": "Offer",
      name: "Plan Pro",
      price: "9900",
      priceCurrency: "ARS",
      description: "Productos ilimitados, dominio personalizado, analíticas avanzadas",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "150",
  },
  publisher: {
    "@type": "Organization",
    name: "Pulgy",
    url: "https://pulgy.app",
    logo: {
      "@type": "ImageObject",
      url: "https://pulgy.app/logo.png",
    },
  },
}

export default function LandingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-background relative overflow-x-hidden">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Showcase />
          <Pricing />
          <FAQ />
        </main>
        <Footer />
      </div>
    </>
  )
}
