import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "Términos y Condiciones — Pulgy",
  description: "Términos y condiciones de uso de la plataforma Pulgy.",
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      <article className="mx-auto max-w-3xl px-6 py-12 pt-24">
        <h1 className="type-display mb-2">Términos y Condiciones</h1>
        <p className="text-muted-foreground mb-8">Última actualización: Enero 2026</p>

        <div className="prose prose-neutral max-w-none space-y-8">
          <p className="type-body text-foreground">
            Estos Términos regulan el uso de Pulgy en pulgy.app. Al crear una cuenta o usar la Plataforma, aceptás estos
            Términos.
          </p>

          <section>
            <h2 className="type-title mb-4">1. Qué es Pulgy</h2>
            <p className="type-body text-foreground mb-4">Pulgy es una plataforma para que creadores:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>Publiquen una tienda</li>
              <li>Vendan productos digitales y/o meetings 1:1 (servicios)</li>
              <li>Gestionen ventas y pagos a través de proveedores terceros</li>
            </ul>
            <p className="type-body text-foreground mt-4">
              Pulgy no es el vendedor final del contenido del creador: el creador es responsable por lo que ofrece y
              entrega.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">2. Cuenta y elegibilidad</h2>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>Debés brindar información verdadera y mantenerla actualizada.</li>
              <li>Sos responsable por la seguridad de tu cuenta y contraseña.</li>
              <li>Podremos suspender cuentas ante uso fraudulento o violaciones a estos Términos.</li>
            </ul>
          </section>

          <section>
            <h2 className="type-title mb-4">3. Productos digitales</h2>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>El creador define el contenido, precio, condiciones y entrega.</li>
              <li>Pulgy facilita la entrega digital mediante enlaces/descargas según configuración.</li>
              <li>El comprador es responsable de contar con dispositivos/conectividad compatibles.</li>
            </ul>
          </section>

          <section>
            <h2 className="type-title mb-4">4. Meetings 1:1</h2>
            <p className="type-body text-foreground mb-4">Si el creador ofrece meetings:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>Define disponibilidad, duración y precio (si aplica).</li>
              <li>
                Al confirmarse una compra, Pulgy puede crear un evento de calendario y/o generar un link de videollamada
                (por ejemplo Google Meet) según las integraciones habilitadas.
              </li>
              <li>
                La asistencia y calidad del servicio es responsabilidad del creador y del comprador (conectividad,
                puntualidad, etc.).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="type-title mb-4">5. Planes, suscripciones y pagos</h2>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>Los pagos se procesan mediante proveedores de pago (por ejemplo MercadoPago).</li>
              <li>El estado de una transacción (aprobada, pendiente, rechazada, etc.) depende del proveedor.</li>
              <li>
                Pulgy opera bajo un modelo de <strong>suscripción</strong> para el uso de la Plataforma.
              </li>
              <li>
                Pulgy puede ofrecer un <strong>período de prueba</strong>, que permite publicar hasta{" "}
                <strong>2 productos</strong> y realizar hasta <strong>5 ventas</strong>, sin costo.
              </li>
              <li>
                Una vez superados esos límites, el usuario deberá <strong>contratar un plan pago</strong> para continuar
                utilizando la Plataforma.
              </li>
              <li>
                Las condiciones, precios y duración de los planes estarán disponibles en la página de precios vigente.
              </li>
              <li>
                Los pagos de la suscripción se procesan a través de proveedores de pago externos (por ejemplo,
                MercadoPago).
              </li>
              <li>Pulgy no almacena datos completos de tarjetas de crédito o débito.</li>
              <li>
                Salvo que se indique lo contrario, <strong>las suscripciones no son reembolsables</strong> una vez
                iniciado el período facturado, excepto cuando la ley aplicable disponga lo contrario.
              </li>
              <li>
                Impuestos, facturación y obligaciones fiscales son responsabilidad del creador, salvo que Pulgy indique
                lo contrario.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="type-title mb-4">6. Reembolsos, cancelaciones y disputas</h2>
            <p className="type-body text-foreground mb-4">
              Pulgy puede ofrecer herramientas para gestionar reembolsos, pero:
            </p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>La política de reembolso del creador debe ser clara (idealmente en su tienda).</li>
              <li>
                Para productos digitales, por su naturaleza, puede no corresponder reembolso una vez entregados, salvo
                obligación legal.
              </li>
              <li>Para meetings, pueden aplicar políticas de cancelación/reprogramación según el creador.</li>
            </ul>
            <p className="type-body text-foreground mt-4">
              En caso de contracargos o disputas iniciadas por el comprador, el proveedor de pagos puede retener fondos
              y aplicar reglas propias.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">7. Contenido y conducta</h2>
            <p className="type-body text-foreground mb-4">No podés usar Pulgy para:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>Actividades ilegales</li>
              <li>Contenido que infrinja derechos de autor/marca</li>
              <li>Fraude, phishing, spam</li>
              <li>Contenido abusivo o dañino</li>
            </ul>
            <p className="type-body text-foreground mt-4">
              Pulgy puede remover contenido o suspender cuentas ante violaciones.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">8. Propiedad intelectual</h2>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>El creador conserva los derechos de su contenido.</li>
              <li>Pulgy conserva los derechos sobre la Plataforma, marca y software.</li>
              <li>
                Nos otorgás una licencia limitada para mostrar tu contenido dentro de Pulgy con el fin de operar la
                tienda (por ejemplo, nombre, portada, descripción).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="type-title mb-4">9. Disponibilidad del servicio</h2>
            <p className="type-body text-foreground">
              Pulgy se ofrece &quot;tal cual&quot;. Podemos hacer cambios, mantenimiento o interrupciones razonables. No
              garantizamos disponibilidad ininterrumpida.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">10. Limitación de responsabilidad</h2>
            <p className="type-body text-foreground mb-4">En la medida permitida por la ley:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>
                Pulgy no es responsable por el contenido de los creadores ni por el cumplimiento de sus
                servicios/meetings.
              </li>
              <li>
                Pulgy no responde por daños indirectos, pérdida de ganancias, o interrupciones fuera de nuestro control.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="type-title mb-4">11. Terminación</h2>
            <p className="type-body text-foreground">
              Podés cerrar tu cuenta en cualquier momento. Pulgy puede suspender o terminar cuentas ante incumplimientos
              o por razones de seguridad/compliance.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">12. Modificaciones</h2>
            <p className="type-body text-foreground">
              Podemos actualizar estos Términos. La versión vigente estará publicada con fecha.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">13. Ley aplicable y jurisdicción</h2>
            <p className="type-body text-foreground">
              Estos Términos se rigen por las leyes de la República Argentina. Cualquier conflicto será sometido a los
              tribunales competentes de la provincia de Buenos Aires salvo norma imperativa en contrario.
            </p>
          </section>

          <section>
            <h2 className="type-title mb-4">14. Contacto</h2>
            <p className="type-body text-foreground">
              Email:{" "}
              <a href="mailto:hola@pulgy.app" className="text-accent hover:underline">
                hola@pulgy.app
              </a>{" "}
              o para soporte{" "}
              <a href="mailto:soporte@pulgy.app" className="text-accent hover:underline">
                soporte@pulgy.app
              </a>
            </p>
            <p className="type-body text-foreground mt-2">
              Sitio:{" "}
              <a href="https://pulgy.app" className="text-accent hover:underline">
                https://pulgy.app
              </a>
            </p>
          </section>
        </div>
      </article>

      <Footer />
    </main>
  )
}
