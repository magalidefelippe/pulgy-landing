"use client"

import { HandwrittenUnderline } from "@/components/handwritten-underline"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Cuánto cuesta usar Pulgy?",
    answer:"Pulgy tiene un plan gratuito para empezar: podés publicar hasta 2 productos y hacer hasta 5 ventas sin costo. Cuando superás ese límite, pasás a Pulgy Pro para seguir vendiendo sin límites."
  },
  {
    question: "¿Cómo recibo el dinero de mis ventas?",
    answer: "El dinero se acredita directo en tu cuenta de Mercado Pago. Pulgy no retiene fondos ni actúa como intermediario."
  },
  {
    question: "¿Qué puedo vender en Pulgy?",
    answer:"Productos digitales (ebooks, PDFs, cursos, templates) y sesiones 1:1 con agenda automática en Google Calendar. También podés vender ambos en una misma compra.",
  },
  {
    question: "¿Mis clientes necesitan crear una cuenta?",
    answer: "No. Pagan con Mercado Pago y reciben la compra automáticamente por email (descarga y/o detalles de la sesión).",
  },
]

export function FAQ() {
  return (
    <section id="preguntas" className="bg-secondary py-16 sm:py-24 px-4 sm:px-6 scroll-mt-20">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12 sm:mb-20">
          <p className="type-section-label text-accent mb-3 sm:mb-4">FAQ</p>
          <h2 className="type-section-title text-foreground">
            Preguntas <HandwrittenUnderline>frecuentes</HandwrittenUnderline>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-2 sm:space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white/60 rounded-lg border border-dashed px-4 sm:px-6"
              style={{ borderColor: "#d0c9c2" }}
            >
              <AccordionTrigger className="text-left text-sm sm:text-base font-medium text-foreground hover:no-underline py-4 sm:py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-xs sm:text-sm text-muted-foreground pb-4 sm:pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* JSON-LD for FAQ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
