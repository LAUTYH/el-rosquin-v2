import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";
import { ZoomParallax } from "@/components/ui/zoom-parallax";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { lineaBgImages, lineaDescripciones, type LineaSlug } from "@/data/product-images";

const lineas: { slug: LineaSlug; nombre: string }[] = [
  { slug: 'secos', nombre: 'Secos' },
  { slug: 'maduracion', nombre: 'Maduración' },
  { slug: 'fiambres', nombre: 'Fiambres' },
  { slug: 'tradicion', nombre: 'Tradición' },
];

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
      <div className="flex flex-col overflow-hidden bg-background">
        <ContainerScroll
          titleComponent={
            <div className="flex flex-col items-center mt-10 md:mt-0">
              <h1 className="text-4xl md:text-6xl font-bodoni text-goldenros font-bold mb-4">
                NUESTRA LÍNEA
              </h1>
              <span className="text-5xl md:text-8xl font-dirty-brush text-redros leading-none mb-12">
                DE PRODUCTOS
              </span>
            </div>
          }
        >
          <Image
            src="/temporal/catalog-img.png"
            alt="IMAGEN DEL CATALOGO DE PRODUCTOS EL ROSQUIN"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-center"
            draggable={false}
            priority
          />
        </ContainerScroll>

        {/* Nueva Sección de Texto y Botón */}
        <div className="flex flex-col items-center justify-center text-center px-4 -mt-48 mb-20 relative z-10">
          <div className="max-w-4xl space-y-6">
            <p className="text-white font-bold text-2xl md:text-4xl font-bodoni leading-tight">
              Producimos alimentos para ser los protagonistas de tus mejores momentos.
            </p>
            <p className="text-gray-400 text-lg md:text-xl font-montserrat">
              Trabajamos con dedicación y pasión para ofrecer chacinados de alta calidad y un sabor único.
            </p>
          </div>

          <div className="mt-12">
            <DownloadButton />
          </div>
        </div>
      </div>

      {/* Zoom Parallax - fuera del overflow-hidden para que sticky funcione correctamente */}
      <div className="bg-background">
        <div className="flex flex-col items-center justify-center text-center py-20 px-4">
          <p className="text-goldenros font-montserrat text-sm tracking-widest uppercase mb-4">
            Scrolleá para descubrir
          </p>
          <h2 className="text-4xl md:text-6xl font-bodoni text-white font-bold leading-tight">
            Calidad en cada
          </h2>
          <span className="text-5xl md:text-8xl font-dirty-brush text-redros leading-none">
            producto
          </span>
        </div>
        <ZoomParallax images={parallaxImages} />
      </div>

      {/* ── Catálogo por Líneas ─────────────────────────────────────────── */}
      <section className="bg-background py-24 px-4">
        <div className="max-w-6xl mx-auto">

          {/* Header */}
          <div className="text-center mb-16">
            <p className="font-montserrat text-goldenros text-xs tracking-widest uppercase mb-3">
              Conocé nuestra producción
            </p>
            <h2 className="font-bodoni text-white text-5xl md:text-7xl font-bold leading-tight">
              Nuestras Líneas
            </h2>
          </div>

          {/* Grid de líneas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {lineas.map(({ slug, nombre }) => (
              <Link
                key={slug}
                href={`/productos/${slug}`}
                className="group relative overflow-hidden rounded-2xl h-80 md:h-96 cursor-pointer block"
              >
                <img
                  src={lineaBgImages[slug]}
                  alt={`Línea ${nombre}`}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/10" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <span className="font-montserrat text-goldenros text-xs tracking-widest uppercase mb-1">
                    Línea
                  </span>
                  <h3 className="font-dirty-brush text-white text-5xl md:text-6xl leading-none">
                    {nombre}
                  </h3>
                  <p className="font-montserrat text-gray-300 text-sm mt-3 max-w-xs leading-relaxed">
                    {lineaDescripciones[slug]}
                  </p>
                  <div className="flex items-center gap-2 mt-5 font-montserrat text-goldenros text-sm transition-all duration-300 group-hover:gap-4">
                    <span>Ver productos</span>
                    <ChevronRight size={16} />
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}

