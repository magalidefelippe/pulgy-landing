import type { Metadata } from "next"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"

export const metadata: Metadata = {
  title: "Política de Privacidad — Pulgy",
  description: "Política de privacidad de Pulgy. Conocé qué datos recopilamos, cómo los usamos y tus derechos.",
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Content - added pt-24 for header spacing */}
      <article className="mx-auto max-w-3xl px-6 py-12 pt-24">
        <h1 className="type-display mb-2">Política de Privacidad</h1>
        <p className="text-muted-foreground mb-8">Última actualización: 06/02/2026</p>

        <div className="prose prose-neutral max-w-none space-y-8">
          <p className="type-body text-foreground">
            Pulgy (&quot;Pulgy&quot;, &quot;nosotros&quot;) opera la plataforma disponible en{" "}
            <a href="https://pulgy.app" className="text-accent hover:underline">
              https://pulgy.app
            </a>{" "}
            (la &quot;Plataforma&quot;). Esta Política explica qué datos recopilamos, cómo los usamos y tus derechos.
          </p>

          {/* Section 1 */}
          <section>
            <h2 className="type-title mb-4">1. Datos que recopilamos</h2>
            <p className="type-body text-foreground mb-4">Podemos recopilar:</p>

            <h3 className="type-subtitle mb-2">a) Datos que vos proporcionás</h3>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground mb-4">
              <li>
                <strong>Datos de cuenta:</strong> nombre, email, contraseña (si aplica).
              </li>
              <li>
                <strong>Datos de perfil y tienda:</strong> nombre comercial, descripción, enlaces, contenido que
                publiques.
              </li>
              <li>
                <strong>Datos de productos:</strong> título, precio, archivos digitales, descripciones.
              </li>
              <li>
                <strong>Datos de meetings:</strong> disponibilidad, duración, detalles que configures.
              </li>
            </ul>

            <h3 className="type-subtitle mb-2">b) Datos generados por el uso</h3>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground mb-4">
              <li>
                <strong>Actividad en la Plataforma:</strong> páginas visitadas, acciones, eventos, logs, IP aproximada,
                dispositivo/navegador.
              </li>
              <li>
                <strong>Datos de transacciones:</strong> estado de pago, monto, moneda, identificadores de operación.
                Pulgy no almacena datos completos de tarjetas; los pagos se procesan por terceros.
              </li>
            </ul>

            <h3 className="type-subtitle mb-2">c) Integraciones</h3>
            <p className="type-body text-foreground">
              Si conectás servicios de terceros (ej. Google Calendar/Meet), Pulgy podrá acceder a la información
              necesaria según permisos que otorgues.
            </p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="type-title mb-4">2. Cómo usamos tus datos</h2>
            <p className="type-body text-foreground mb-2">Usamos los datos para:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>Proveer y operar Pulgy (crear cuenta, publicar tienda, gestionar productos y ventas).</li>
              <li>Procesar pagos y verificar estados de transacción.</li>
              <li>Crear y administrar meetings (reservas, recordatorios, links de videollamada).</li>
              <li>Enviar comunicaciones operativas (confirmaciones, notificaciones, soporte).</li>
              <li>Seguridad, prevención de fraude y cumplimiento legal.</li>
              <li>Mejorar la Plataforma (analítica y métricas agregadas).</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="type-title mb-4">3. Base legal</h2>
            <p className="type-body text-foreground mb-2">Tratamos tus datos con base en:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground">
              <li>
                <strong>Ejecución de un contrato:</strong> para brindarte la Plataforma.
              </li>
              <li>
                <strong>Consentimiento:</strong> cuando conectás integraciones o aceptás comunicaciones opcionales.
              </li>
              <li>
                <strong>Interés legítimo:</strong> seguridad, prevención de fraude y mejoras del servicio.
              </li>
              <li>
                <strong>Obligación legal:</strong> cuando sea necesario por normativa aplicable.
              </li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="type-title mb-4">4. Compartición con terceros y divulgación (incluye datos de Google)</h2>
            <p className="type-body text-foreground mb-4">
              Pulgy puede compartir o divulgar datos, incluyendo datos accedidos mediante integraciones de Google (por
              ejemplo, información necesaria para crear un evento o invitar asistentes), solo en los siguientes casos:
            </p>

            <h3 className="type-subtitle mb-2">a) Proveedores que operan el servicio (encargados del tratamiento)</h3>
            <p className="type-body text-foreground mb-4">
              Compartimos datos con proveedores que nos ayudan a operar Pulgy, por ejemplo: infraestructura/hosting,
              bases de datos, servicios de email transaccional, monitoreo y seguridad. Estos proveedores procesan datos
              únicamente para prestar el servicio y bajo instrucciones de Pulgy.
            </p>

            <h3 className="type-subtitle mb-2">b) Integraciones y funcionalidades habilitadas por vos</h3>
            <p className="type-body text-foreground mb-4">
              Si conectás Google Calendar/Google Meet, Pulgy puede compartir datos con Google para crear eventos,
              agregar invitados y generar enlaces de videollamada según la configuración que hayas activado. No
              compartimos estos datos con otros terceros para fines distintos a operar la funcionalidad.
            </p>

            <h3 className="type-subtitle mb-2">c) Obligaciones legales y seguridad</h3>
            <p className="type-body text-foreground mb-4">
              Podemos divulgar datos si es razonablemente necesario para: cumplir una obligación legal, responder a una
              orden judicial o requerimiento de autoridad competente, investigar fraude, abuso o incidentes de seguridad,
              o proteger derechos, propiedad y seguridad de Pulgy y de terceros.
            </p>

            <h3 className="type-subtitle mb-2">d) Transferencias por cambios societarios</h3>
            <p className="type-body text-foreground mb-6">
              En caso de fusión, adquisición o venta de activos, los datos podrían transferirse como parte de la
              transacción, manteniendo protecciones razonables.
            </p>

            <div className="space-y-4 border-l-2 border-accent/30 pl-4">
              <p className="type-body text-foreground">
                <strong>No vendemos datos personales.</strong> Pulgy no vende datos personales, incluidos datos de
                usuarios accedidos mediante APIs de Google.
              </p>
              <p className="type-body text-foreground">
                <strong>No usamos datos de Google para publicidad.</strong> Pulgy no utiliza datos obtenidos desde Google
                APIs para publicidad personalizada, perfilado publicitario ni para medir campañas publicitarias.
              </p>
              <p className="type-body text-foreground">
                <strong>No usamos datos de Google para entrenar modelos.</strong> Pulgy no utiliza datos obtenidos desde
                Google APIs para entrenar, mejorar o desarrollar modelos de IA/ML.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="type-title mb-4">5. Google Calendar / Google Meet (si activás meetings)</h2>
            <p className="type-body text-foreground mb-2">Si conectás tu cuenta de Google, Pulgy puede:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground mb-4">
              <li>Crear eventos de calendario relacionados a meetings vendidos.</li>
              <li>Incluir a comprador y creador como invitados (si corresponde).</li>
              <li>Generar un enlace de Google Meet cuando esté habilitado.</li>
            </ul>
            <p className="type-body text-foreground">
              Pulgy no lee ni modifica tu calendario completo más allá de lo necesario para operar la funcionalidad que
              habilitaste, según los permisos solicitados.
            </p>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="type-title mb-4">6. Cookies</h2>
            <p className="type-body text-foreground mb-2">Pulgy puede usar cookies y tecnologías similares para:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground mb-4">
              <li>Mantener tu sesión</li>
              <li>Preferencias</li>
              <li>Medición agregada y seguridad</li>
            </ul>
            <p className="type-body text-foreground">Podés controlar cookies desde tu navegador.</p>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="type-title mb-4">7. Conservación</h2>
            <p className="type-body text-foreground mb-2">
              Conservamos datos mientras exista tu cuenta o sea necesario para:
            </p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground mb-4">
              <li>Proveer el servicio</li>
              <li>Cumplir obligaciones legales</li>
              <li>Resolver disputas y prevenir fraude</li>
            </ul>
            <p className="type-body text-foreground">
              Podés solicitar eliminación según lo indicado en &quot;Derechos&quot;.
            </p>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="type-title mb-4">8. Tus derechos</h2>
            <p className="type-body text-foreground mb-2">Podés solicitar:</p>
            <ul className="list-disc list-inside space-y-1 type-body text-foreground mb-4">
              <li>Acceso, rectificación y actualización</li>
              <li>Eliminación (cuando corresponda)</li>
              <li>Oposición o limitación del tratamiento</li>
              <li>Portabilidad (cuando aplique)</li>
            </ul>
            <p className="type-body text-foreground">
              Contactanos en:{" "}
              <a href="mailto:soporte@pulgy.app" className="text-accent hover:underline">
                soporte@pulgy.app
              </a>
            </p>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="type-title mb-4">9. Transferencias internacionales</h2>
            <p className="type-body text-foreground">
              Algunos proveedores pueden procesar datos fuera de Argentina. Tomamos medidas razonables para proteger la
              información mediante acuerdos y prácticas estándar.
            </p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="type-title mb-4">10. Seguridad</h2>
            <p className="type-body text-foreground">
              Aplicamos medidas técnicas y organizativas razonables para proteger tus datos. Aun así, ningún sistema es
              100% seguro.
            </p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="type-title mb-4">11. Cambios</h2>
            <p className="type-body text-foreground">
              Podemos actualizar esta Política. Publicaremos la versión vigente con fecha.
            </p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="type-title mb-4">12. Contacto</h2>
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
            <p className="type-body text-foreground">
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
