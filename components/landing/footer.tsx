import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-background py-12 px-6 border-t border-dashed" style={{ borderColor: "#d0c9c2" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <Image src="/logo.png" alt="Pulgy" width={80} height={26} className="h-6 w-auto" />
            <span className="type-body-sm">Hecho con 💝 en Argentina</span>
          </div>

          <nav className="flex flex-wrap justify-center gap-6 type-body-sm">
            <Link href="/#beneficios" className="hover:text-foreground transition-colors">
              Beneficios
            </Link>
            <Link href="/#precios" className="hover:text-foreground transition-colors">
              Precios
            </Link>
            <Link href="/#preguntas" className="hover:text-foreground transition-colors">
              FAQ
            </Link>
            <Link href="/terminos" className="hover:text-foreground transition-colors">
              Términos
            </Link>
            <Link href="/privacidad" className="hover:text-foreground transition-colors">
              Privacidad
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-dashed text-center" style={{ borderColor: "#d0c9c2" }}>
          <p className="type-body-sm">© {new Date().getFullYear()} Pulgy. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
