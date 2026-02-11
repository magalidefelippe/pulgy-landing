"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { PulgyButton } from "@/components/pulgy-button"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-dashed" style={{ borderColor: "#d0c9c2" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Pulgy" width={100} height={32} className="h-8 w-auto" priority />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/#beneficios" className="type-body-sm hover:text-foreground transition-colors">
            Beneficios
          </Link>
          <Link href="/#usos" className="type-body-sm hover:text-foreground transition-colors">
            Usos
          </Link>
          <Link href="/#como-funciona" className="type-body-sm hover:text-foreground transition-colors">
            Cómo funciona
          </Link>
          <Link href="/demo" className="type-body-sm hover:text-foreground transition-colors">
            Tienda de ejemplo
          </Link>
          <Link href="/#precios" className="type-body-sm hover:text-foreground transition-colors">
            Precios
          </Link>
          <Link href="/#preguntas" className="type-body-sm hover:text-foreground transition-colors">
            FAQ
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu with animation */}
      <div 
        className={`md:hidden bg-background border-b border-dashed px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 py-4 opacity-100" : "max-h-0 py-0 opacity-0"
        }`} 
        style={{ borderColor: "#d0c9c2" }}
      >
        <nav className="flex flex-col gap-4">
          <Link href="/#beneficios" className="type-body-sm py-2" onClick={() => setIsMenuOpen(false)}>
            Beneficios
          </Link>
          <Link href="/#usos" className="type-body-sm py-2" onClick={() => setIsMenuOpen(false)}>
            Usos
          </Link>
          <Link href="/#como-funciona" className="type-body-sm py-2" onClick={() => setIsMenuOpen(false)}>
            Cómo funciona
          </Link>
          <Link href="/demo" className="type-body-sm py-2" onClick={() => setIsMenuOpen(false)}>
            Tienda de ejemplo
          </Link>
          <Link href="/#precios" className="type-body-sm py-2" onClick={() => setIsMenuOpen(false)}>
            Precios
          </Link>
          <Link href="/#preguntas" className="type-body-sm py-2" onClick={() => setIsMenuOpen(false)}>
            FAQ
          </Link>
        </nav>
      </div>
    </header>
  )
}
