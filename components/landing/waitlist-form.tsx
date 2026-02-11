"use client"

import type React from "react"
import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"
import { PulgyButton } from "@/components/pulgy-button"
import { submitWaitlist } from "@/app/actions/waitlist"

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const PRODUCT_TYPES = [
  { value: "ebooks", label: "E-books / PDFs" },
  { value: "templates", label: "Templates / Plantillas" },
  { value: "presets", label: "Presets / Filtros" },
  { value: "musica", label: "Música / Audio" },
  { value: "arte", label: "Arte digital / NFTs" },
  { value: "mentorias", label: "Mentorías / Consultorías/ Sesiones online" },
  { value: "memberships", label: "Membresías" },
  { value: "otros", label: "Otros" },
]

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [handle, setHandle] = useState("")
  const [productTypes, setProductTypes] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const toggleProductType = (value: string) => {
    setProductTypes((prev) => (prev.includes(value) ? prev.filter((t) => t !== value) : [...prev, value]))
  }

  const isValidEmail = EMAIL_REGEX.test(email.trim())
  const isValidHandle = handle.trim().length >= 3 && handle.trim().length <= 30
  const isFormValid = isValidEmail && isValidHandle

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMessage("")
    setStatus("loading")

    const formData = new FormData()
    formData.set("email", email)
    formData.set("handle", handle)
    formData.set("productTypes", JSON.stringify(productTypes))
    // Honeypot field - get from the hidden input
    const form = e.target as HTMLFormElement
    const honeypotInput = form.querySelector('input[name="website"]') as HTMLInputElement
    if (honeypotInput) {
      formData.set("website", honeypotInput.value)
    }

    const result = await submitWaitlist(formData)

    if (result.success) {
      setStatus("success")
    } else {
      setStatus("error")
      setErrorMessage(result.error || "Hubo un error. Intentá de nuevo.")
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-6 sm:py-8">
        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
          <Check size={24} className="text-success sm:w-8 sm:h-8" />
        </div>
        <h3
          className="text-xl sm:text-2xl font-semibold text-foreground mb-1 sm:mb-2"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ¡Estás en la lista!
        </h3>
        <p className="text-sm sm:text-base text-muted-foreground">
          Te avisamos cuando tu tienda esté lista. Revisá tu email.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 max-w-md mx-auto">
      {/* Honeypot field - hidden from users, bots will fill it */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          type="text"
          id="website"
          name="website"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      
      <div>
        <label htmlFor="email" className="sr-only">
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="tu@email.com"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 px-3 text-sm rounded-md border border-input-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
      </div>
      <div>
        <label htmlFor="handle" className="sr-only">
          Handle deseado
        </label>
        <div className="flex min-w-0">
          <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-input-border bg-secondary text-muted-foreground font-mono text-xs sm:text-sm shrink-0">
            store.pulgy.app/
          </span>
          <input
            type="text"
            id="handle"
            placeholder="usuario"
            required
            pattern="[a-zA-Z0-9_]+"
            value={handle}
            onChange={(e) => setHandle(e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, ""))}
            className="min-w-0 flex-1 h-10 px-3 text-sm rounded-r-md border border-input-border bg-input text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 font-mono"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs sm:text-sm text-muted-foreground mb-2">
          ¿Qué tipo de productos vendés? (opcional)
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {PRODUCT_TYPES.map((type) => {
            const isSelected = productTypes.includes(type.value)
            return (
              <button
                key={type.value}
                type="button"
                onClick={() => toggleProductType(type.value)}
                className={`inline-flex items-center px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm rounded-full border cursor-pointer transition-all duration-200 active:scale-95 ${
                  isSelected
                    ? "bg-white text-accent border-dashed border-accent hover:bg-accent/5"
                    : "bg-card text-foreground border-border hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-sm hover:scale-[1.02]"
                }`}
              >
                {type.label}
              </button>
            )
          })}
        </div>
      </div>

      {status === "error" && errorMessage && (
        <p className="text-xs sm:text-sm text-destructive text-center">{errorMessage}</p>
      )}
      <PulgyButton
        type="submit"
        size="sm"
        fullWidth
        loading={status === "loading"}
        disabled={!isFormValid}
        data-analytics="waitlist-form-submit"
      >
        Unirme a la waitlist
        {status !== "loading" && <ArrowRight size={16} />}
      </PulgyButton>
    </form>
  )
}
