import DownloadButton from "@/components/DownloadButton";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { lineaBgImages, lineaDescripciones, type LineaSlug } from "@/data/product-images";
import FadeIn from "@/components/FadeIn";

const lineas: { slug: LineaSlug; nombre: string }[] = [
  { slug: 'secos', nombre: 'Secos' },
  { slug: 'maduracion', nombre: 'Maduración' },
  { slug: 'fiambres', nombre: 'Fiambres' },
  { slug: 'tradicion', nombre: 'Tradición' },
];

const iconosLineas: Record<LineaSlug, string> = {
  secos: '/sellos/sello-secos.svg',
  maduracion: '/sellos/sello-maduración.svg',
  fiambres: '/sellos/sello-fiambres.svg',
  tradicion: '/sellos/sello-tradición.svg',
};

const parallaxImages = [
  { src: '/products-onlys/imagenes-stock/bondiola-tabla-quesos-pan.jpg', alt: 'Bondiola con tabla de quesos y pan' },
  { src: '/products-onlys/imagenes-stock/tabla-salame-queso-vino.jpg', alt: 'Tabla de salame, queso y vino' },
  { src: '/products-onlys/imagenes-stock/picada-fiambres-cerveza-nachos.jpg', alt: 'Picada de fiambres con cerveza y nachos' },
  { src: '/products-onlys/imagenes-stock/chorizos-parrilla-fuego.jpg', alt: 'Chorizos a la parrilla con fuego' },
  { src: '/products-onlys/imagenes-stock/jamon-cocido-fetas-tabla-romero.jpg', alt: 'Jamón cocido en fetas sobre tabla con romero' },
  { src: '/products-onlys/imagenes-stock/salame-feteado-queso-crackers.jpg', alt: 'Salame feteado con queso y crackers' },
  { src: '/products-onlys/imagenes-stock/choripan-cerveza-tabla.jpg', alt: 'Choripán con cerveza en tabla' },
];

export default function ProductosPage() {
  return (
    <>
      {/* <div className="bg-[url('/fondos-productos/primero.png')] bg-cover bg-center">
        <div className="flex flex-col overflow-hidden">
          <FadeIn className="flex flex-col items-center mt-12 md:mt-0" delay={0.1}>
            <h1 className="text-4xl md:text-6xl font-bodoni text-white font-bold mt-16 mb-4">
              NUESTRA LÍNEA
            </h1>
            <span className="text-5xl md:text-8xl font-dirty-brush text-goldenros leading-none mb-8">
              DE PRODUCTOS
            </span>
          </FadeIn>

          {/* Nueva Sección de Texto y Botón */}
      {/* <div className="flex flex-col items-center justify-center text-center px-4 mb-20 relative z-10">
            <FadeIn className="max-w-4xl space-y-6" delay={0.3}>
              <p className="text-white font-bold text-2xl md:text-4xl font-bodoni leading-tight">
                Producimos alimentos para ser los
                <br />protagonistas de tus mejores momentos.
              </p>
              <p className="text-gray-400 text-lg md:text-xl font-montserrat">
                Trabajamos con dedicación y pasión para ofrecer <br className="hidden md:inline" />chacinados de alta calidad y un sabor único.
              </p>
            </FadeIn>

          </div> */}
      {/* </div> */}

      {/* Zoom Parallax - fuera del overflow-hidden para que sticky funcione correctamente */}
      {/* <div>
        <FadeIn delay={0.2} duration={1}>
          <ZoomParallax images={parallaxImages} />
        </FadeIn>
      </div>
    </div > */}

      {/* ── Catálogo por Líneas ─────────────────────────────────────────── */}
      < section id="lineas" className="bg-[url('/fondos-productos/grilla.png')] py-24 px-4" >
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
                    {/* <p className="font-montserrat text-gray-300 text-sm mt-3 max-w-xs leading-relaxed text-center">
                      {lineaDescripciones[slug]}
                    </p> */}
                    {/* <div className="flex items-center gap-2 mt-5 font-montserrat text-goldenros text-sm transition-all duration-300 group-hover:gap-4">
                      <span>Ver productos</span>
                      <ChevronRight size={16} />
                    </div> */}
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

        </div>
      </section >
    </>
  );
}

