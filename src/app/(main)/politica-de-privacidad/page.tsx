import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidad · El Rosquín",
  description:
    "Cómo El Rosquín S.A. recolecta, usa y protege tus datos personales conforme a la Ley 25.326 de Protección de Datos Personales.",
};

export default function PoliticaPrivacidadPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-[url('/material-definitivo/fondos-contacto-opciones/fondo-contacto-3.webp')] bg-cover bg-center bg-no-repeat px-6 pt-32 pb-20">
      <article className="max-w-3xl mx-auto font-montserrat text-white/85">

        {/* Encabezado */}
        <header className="mb-12 text-center">
          <h1 className="font-bodoni font-bold text-3xl md:text-5xl text-goldenros uppercase tracking-wider mb-3">
            Política de Privacidad
          </h1>
          <p className="text-white/60 text-sm">Última actualización: junio de 2026</p>
        </header>

        <div className="space-y-8 leading-relaxed text-sm md:text-base">

          <section>
            <p>
              En <strong className="text-white">El Rosquín S.A.</strong> valoramos y respetamos tu privacidad. Esta
              Política explica qué datos personales recolectamos a través de este sitio web, con qué finalidad los
              usamos y cuáles son tus derechos, de acuerdo con la{" "}
              <strong className="text-white">Ley N° 25.326 de Protección de los Datos Personales</strong> de la
              República Argentina y su normativa complementaria.
            </p>
          </section>

          <Section title="1. Responsable de los datos">
            <ul className="list-disc pl-5 space-y-1">
              <li><strong className="text-white">Razón social:</strong> El Rosquín S.A.</li>
              <li><strong className="text-white">Domicilio:</strong> Chacabuco 700, Cañada Rosquín, Santa Fe, Argentina.</li>
              <li>
                <strong className="text-white">Contacto:</strong>{" "}
                <a href="mailto:administracion@elrosquin.com.ar" className="text-goldenros hover:underline">
                  administracion@elrosquin.com.ar
                </a>
              </li>
            </ul>
          </Section>

          <Section title="2. Qué datos recolectamos">
            <p>
              Recolectamos únicamente los datos que vos nos proporcionás voluntariamente a través de nuestro
              formulario de contacto comercial:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Nombre y apellido</li>
              <li>Empresa o negocio</li>
              <li>Tipo de comercio</li>
              <li>Correo electrónico</li>
              <li>Teléfono / WhatsApp</li>
              <li>Provincia y localidad</li>
              <li>El mensaje o consulta que nos envíes</li>
            </ul>
          </Section>

          <Section title="3. Para qué usamos tus datos">
            <p>Utilizamos tus datos exclusivamente para:</p>
            <ul className="list-disc pl-5 space-y-1 mt-3">
              <li>Responder tu consulta comercial y mantener el contacto que vos iniciaste.</li>
              <li>Gestionar relaciones con mayoristas, distribuidores, vendedores y comercios.</li>
            </ul>
            <p className="mt-3">
              <strong className="text-white">No</strong> utilizamos tus datos para enviar publicidad no solicitada ni
              los cedemos, vendemos o transferimos a terceros, salvo obligación legal o requerimiento de autoridad
              competente.
            </p>
          </Section>

          <Section title="4. Base legal y consentimiento">
            <p>
              Al completar y enviar el formulario, prestás tu consentimiento libre, expreso e informado para el
              tratamiento de tus datos con las finalidades descriptas en esta Política.
            </p>
          </Section>

          <Section title="5. Conservación de los datos">
            <p>
              Conservamos tus datos durante el tiempo necesario para dar respuesta a tu consulta y mantener la
              relación comercial, o hasta que solicites su eliminación.
            </p>
          </Section>

          <Section title="6. Seguridad">
            <p>
              Adoptamos medidas técnicas y organizativas razonables para proteger tus datos. El formulario está
              protegido mediante un sistema de verificación anti-spam (Cloudflare Turnstile) que ayuda a impedir
              envíos automatizados.
            </p>
          </Section>

          <Section title="7. Cookies y analítica">
            <p>
              Este sitio puede utilizar herramientas de medición de tráfico (como Google Analytics) que recopilan
              información de forma anónima y agregada (páginas visitadas, tiempo de navegación, tipo de dispositivo)
              con el fin de mejorar la experiencia del sitio. Esta información no permite identificarte personalmente.
              Podés deshabilitar las cookies desde la configuración de tu navegador.
            </p>
          </Section>

          <Section title="8. Tus derechos">
            <p>
              Como titular de los datos, tenés derecho a acceder, rectificar, actualizar y suprimir tus datos
              personales en cualquier momento, de forma gratuita. Para ejercerlos, escribinos a{" "}
              <a href="mailto:administracion@elrosquin.com.ar" className="text-goldenros hover:underline">
                administracion@elrosquin.com.ar
              </a>
              .
            </p>
            <p className="mt-3">
              La <strong className="text-white">Agencia de Acceso a la Información Pública (AAIP)</strong>, órgano de
              control de la Ley N° 25.326, tiene la atribución de atender denuncias y reclamos relacionados con el
              incumplimiento de las normas de protección de datos personales.
            </p>
          </Section>

          <Section title="9. Cambios en esta Política">
            <p>
              Podemos actualizar esta Política de Privacidad en cualquier momento. La versión vigente será siempre la
              publicada en esta página, con su fecha de última actualización.
            </p>
          </Section>

        </div>
      </article>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="font-bodoni font-bold text-xl md:text-2xl text-goldenros mb-3">{title}</h2>
      <div className="space-y-2">{children}</div>
    </section>
  );
}
