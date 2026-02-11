"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { HandwrittenUnderline } from "@/components/handwritten-underline"
import {
  MonitorPlay,
  Brain,
  Apple,
  TrendingUp,
  Sparkles,
} from "lucide-react"

const AUTOPLAY_INTERVAL = 7000

const useCases = [
  {
    id: "creadores",
    icon: MonitorPlay,
    title: "Creadores de contenido",
    sell: "Curadurías, guías, planners, listas, bundles, clases.",
    help: "Transformar tu criterio en un producto vendible y entregable.",
  },
  {
    id: "psicologos",
    icon: Brain,
    title: "Psicólogos / terapeutas",
    sell: "Sesiones online, packs de sesiones, talleres breves, guías de hábitos y ejercicios (journaling, ansiedad, límites).",
    help: "Tener agenda ordenada, evitar idas y vueltas por WhatsApp y centralizar pagos + reservas.",
  },
  {
    id: "nutricionistas",
    icon: Apple,
    title: "Nutricionistas",
    sell: "Planes semanales, recetarios, listas de compras, guías por objetivo (SIBO, déficit calórico, etc.). Seguimiento 1:1 por sesión.",
    help: "Cobrar, entregar el material automáticamente y coordinar turnos desde un link.",
  },
  {
    id: "asesores",
    icon: TrendingUp,
    title: "Asesores financieros",
    sell: "Asesorías 1:1, packs de seguimiento, auditorías de presupuesto y planificación (ahorro, deuda, objetivos). Guías y recursos descargables: planillas de Excel/Google Sheets, checklists, templates de presupuesto y cashflow.",
    help: "Cobrar, entregar los archivos automáticamente y coordinar turnos desde un solo link (sin ida y vuelta por WhatsApp).",
  },
  {
    id: "coaches",
    icon: Sparkles,
    title: "Coaches / mentores / consultores",
    sell: "Sesiones 1:1, packs, workshops, recursos (workbooks, guías), acompañamientos.",
    help: "Convertir tu IG en un turnero + checkout con link en bio.",
  },
]

export function Usos() {
  const [activeIndex, setActiveIndex] = useState(0)
  // Key to force CSS animation restart on the progress bar
  const [animKey, setAnimKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const startAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current)
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % useCases.length)
      setAnimKey((k) => k + 1)
    }, AUTOPLAY_INTERVAL)
  }, [])

  useEffect(() => {
    startAutoplay()
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [startAutoplay])

  const handleSelect = (index: number) => {
    setActiveIndex(index)
    setAnimKey((k) => k + 1)
    startAutoplay()
  }

  return (
    <section id="usos" className="bg-background py-10 sm:py-24 px-4 sm:px-6 scroll-mt-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-16">
          <p className="type-section-label text-accent mb-2 sm:mb-4">USOS</p>
          <h2 className="type-section-title text-foreground">
            Lo que podés <HandwrittenUnderline>vender</HandwrittenUnderline> con Pulgy
          </h2>
        </div>

        {/* Cards */}
        <div className="max-w-3xl mx-auto space-y-1.5 sm:space-y-2">
          {useCases.map((useCase, index) => {
            const isActive = index === activeIndex
            const Icon = useCase.icon

            return (
              <button
                key={useCase.id}
                type="button"
                onClick={() => handleSelect(index)}
                className={`w-full text-left rounded-lg p-3 sm:p-5 group relative overflow-hidden transition-shadow duration-300 ${
                  isActive
                    ? "bg-white shadow-[0_2px_16px_0_rgba(0,0,0,0.08)]"
                    : "hover:bg-white/50"
                }`}
              >
                {/* Progress bar — pure CSS animation, GPU-accelerated */}
                {isActive && (
                  <div
                    key={`progress-${animKey}`}
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent will-change-transform origin-left"
                    style={{
                      animation: `usos-progress ${AUTOPLAY_INTERVAL}ms linear forwards`,
                    }}
                  />
                )}

                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-md flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      isActive
                        ? "bg-accent text-accent-foreground"
                        : "bg-accent/10 text-accent group-hover:bg-accent/20"
                    }`}
                  >
                    <Icon size={18} className="sm:w-5 sm:h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className={`text-sm sm:text-base font-semibold transition-colors duration-300 ${
                        isActive ? "text-foreground" : "text-foreground/70"
                      }`}
                      style={{ fontFamily: "var(--font-heading)" }}
                    >
                      {useCase.title}
                    </h3>
                    {/* Expand/collapse via grid-rows trick for smooth height */}
                    <div
                      className="grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                      style={{
                        gridTemplateRows: isActive ? "1fr" : "0fr",
                        opacity: isActive ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="pt-1.5">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            <span className="font-medium text-foreground/80">Vendé:</span> {useCase.sell}
                          </p>
                          <p className="text-sm text-muted-foreground leading-relaxed mt-1.5">
                            <span className="font-medium text-accent">Pulgy te ayuda a:</span> {useCase.help}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
