import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import { productos } from "@/data/products";
import {
  lineaSlugToName,
  lineaDescripciones,
  lineaBannerImages,
  getProductGridImage,
  type LineaSlug,
} from "@/data/product-images";

const iconosLineas: Record<LineaSlug, string> = {
  secos: '/elementos/linea-secos.svg',
  maduracion: '/elementos/linea-maduracion.svg',
  fiambres: '/elementos/linea-fiabres.svg',
  tradicion: '/elementos/linea-tradicion.svg',
};

const renderProductName = (name: string) => {
  const regex = /(Tradici[óo]n|Familiar|Bacon|con queso)/i;
  const parts = name.split(regex);

  return (
    <span className="inline-block">
      {parts.map((part, i) => {
        if (!part) return null;
        const lower = part.toLowerCase();

        if (lower === 'tradición' || lower === 'tradicion' || lower === 'familiar' || lower === 'bacon') {
          const text = lower.startsWith('tradici') ? `"${part}"` : part;
          return <span key={i} className="block text-redros">{text}</span>;
        } else if (lower === 'con queso') {
          return <span key={i} className="block text-[#275389]">{part}</span>;
        }

        return <span key={i}>{part}</span>;
      })}
    </span>
  );
};

export function generateStaticParams() {
  return (["secos", "maduracion", "fiambres", "tradicion"] as LineaSlug[]).map(
    (slug) => ({ linea: slug })
  );
}

export default async function LineaPage({
  params,
}: {
  params: Promise<{ linea: string }>;
}) {
  const { linea } = await params;
  const slug = linea as LineaSlug;
  const lineaNombre = lineaSlugToName[slug];
  const lineaProductos = productos.filter((p) => p.linea === lineaNombre);

  return (
    <main className="bg-[url('/material-definitivo/productos-seccion/fondos/linea-grid-productos/fondo-grid-productos-mobile.webp')] md:bg-[url('/material-definitivo/productos-seccion/fondos/linea-grid-productos/fondo-grid-productos.webp')] bg-cover bg-center bg-no-repeat min-h-screen">

      {/* ── Banner de línea ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={lineaBannerImages[slug]}
          alt={`Línea ${lineaNombre}`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <img
            src={iconosLineas[slug]}
            alt={`Línea ${lineaNombre}`}
            className="h-[100px] md:h-[130px] w-auto object-contain mb-4"
          />
          <p className="font-montserrat text-gray-300 text-sm md:text-base mt-2 max-w-xl leading-relaxed">
            {lineaDescripciones[slug]}
          </p>
        </div>
      </div>

      {/* ── Navegación ── */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-2">
        <nav className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
          <div className="flex items-center gap-2 font-montserrat text-goldenros text-sm">
            <Link href="/productos#lineas" className="hover:underline cursor-pointer">
              Productos
            </Link>
            <span>/</span>
            <span className="font-bold capitalize">{lineaNombre}</span>
          </div>
          <BackButton />
        </nav>
      </div>

      {/* ── Grid de productos ── */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-12 md:gap-y-16">
          {lineaProductos.map((producto) => {
            const gridImg = getProductGridImage(producto.id);

            const nameParts = producto.nombre.split(' - ');
            const mainName = nameParts[0];

            const isEnvasadoVacio = producto.nombre.toLowerCase().includes('vacío') || producto.id.includes('vacio');
            const isAtadoMano = producto.id.includes('mano') || producto.nombre.toLowerCase().includes('mano');

            const sellos: { url: string; alt: string }[] = [];
            if (isEnvasadoVacio) sellos.push({ url: '/name-with-styles/sello-envasado-al-vacio-chico.png', alt: 'Envasado al vacío' });
            if (isAtadoMano) sellos.push({ url: '/name-with-styles/sello-atado-a-mano-chico.png', alt: 'Atado a mano' });

            let subtitle = nameParts.length > 1 ? nameParts[1] : undefined;
            if (subtitle && subtitle.toLowerCase().includes('vacío')) {
              subtitle = undefined; // Hide subtitle if it's just "Envasado al Vacío"
            }

            return (
              <Link
                key={producto.id}
                href={`/productos/${slug}/${producto.id}`}
                className="group cursor-pointer flex flex-col items-center text-center transition-all duration-300 relative"
              >
                {/* Imagen */}
                <div className="w-full h-58 md:h-64 flex items-center justify-center mb-20 relative">
                  {/* Sellos */}
                  {sellos.length > 0 && (
                    <div className="absolute top-0 right-[-6px] flex flex-col gap-2 z-10 items-end">
                      {sellos.map((sello, idx) => (
                        <img
                          key={idx}
                          src={sello.url}
                          alt={sello.alt}
                          className="w-14 h-14 md:w-18 md:h-18 object-contain drop-shadow-sm transition-transform group-hover:scale-105"
                        />
                      ))}
                    </div>
                  )}

                  {gridImg ? (
                    <Image
                      src={gridImg}
                      alt={producto.nombre}
                      fill
                      className="object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  ) : (
                    <div className="w-2/3 h-2/3 bg-darkros/10 rounded-lg" />
                  )}
                </div>
                {/* Info */}
                <div className="flex flex-col items-center max-w-[220px]">
                  <h3 className="font-bodoni text-darkros text-lg md:text-xl font-bold leading-tight uppercase tracking-wide">
                    {renderProductName(mainName)}
                  </h3>
                  {subtitle && (
                    <p className="font-montserrat text-goldenros text-[10px] md:text-xs font-bold tracking-widest uppercase mt-2">
                      {subtitle.trim()}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
