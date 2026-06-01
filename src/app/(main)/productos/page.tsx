import Image from "next/image";
import Link from "next/link";
import { lineaBgImages, type LineaSlug } from "@/data/product-images";
import FadeIn from "@/components/FadeIn";
import ScrollVideoHero from "@/components/ScrollVideoHero";

const lineas: { slug: LineaSlug; nombre: string }[] = [
  { slug: 'secos', nombre: 'Secos' },
  { slug: 'maduracion', nombre: 'Maduración' },
  { slug: 'fiambres', nombre: 'Fiambres' },
  { slug: 'tradicion', nombre: 'Tradición' },
];

const iconosLineas: Record<LineaSlug, string> = {
  secos: '/sellos/sello-secos.svg',
  maduracion: '/sellos/sello-maduracion.svg',
  fiambres: '/sellos/sello-fiambres.svg',
  tradicion: '/sellos/sello-tradicion.svg',
};

export default function ProductosPage() {
  return (
    <>
      <ScrollVideoHero
        srcDesktop="/videos/video-productos-inicio.mp4"
        srcMobile="/videos/video-productos-inicio-mobile.mp4"
        titleTop="NUESTRA LÍNEA"
        titleBottom="DE PRODUCTOS"
        subtitle="Trabajamos con dedicación y pasión para ofrecer chacinados de alta calidad y un sabor único."
      />

      {/* ── Catálogo por Líneas ─────────────────────────────────────────── */}
      <section id="lineas" className="bg-[url('/material-definitivo/productos-seccion/fondos/fondos-grid-lineas/fondo-grid-lineas-mobile.png')] md:bg-[url('/material-definitivo/productos-seccion/fondos/fondos-grid-lineas/fondo-grid-lineas.png')] bg-cover bg-center bg-no-repeat py-24 px-4">
          <div className="max-w-6xl mx-auto">

            {/* Header */}
            <FadeIn className="text-center mb-16" delay={0.1}>
              <p className="font-montserrat text-goldenros text-xl font-semibold tracking-widest uppercase mb-3 text-goldenros">
                Conocé nuestra producción
              </p>
              <h2 className="font-bodoni text-redros text-5xl md:text-7xl font-bold leading-tight">
                Nuestras Líneas
              </h2>

            </FadeIn>

            {/* Grid de líneas */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {lineas.map(({ slug, nombre }, index) => (
                <FadeIn key={slug} delay={0.1 * index}>
                  <Link
                    href={`/productos/${slug}`}
                    className="group relative overflow-hidden h-80 md:h-96 cursor-pointer block"
                  >
                    <Image
                      src={lineaBgImages[slug]}
                      alt={`Línea ${nombre}`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                    <div className="absolute inset-0 flex flex-col justify-center items-center p-8">
                      <img
                        src={iconosLineas[slug]}
                        alt={`Línea ${nombre}`}
                        className="h-[120px] md:h-[160px] w-auto object-contain mb-2"
                      />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>
    </>
  );
}

