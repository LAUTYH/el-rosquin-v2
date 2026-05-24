import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import { productos } from "@/data/products";
import {
  productImages,
  lineaSlugToName,
  lineaDescripciones,
  lineaBgImages,
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
    <main className="bg-[url('/fondos-productos/grilla.png')] min-h-screen">

      {/* ── Banner de línea ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={lineaBgImages[slug]}
          alt={`Línea ${lineaNombre}`}
          className="absolute inset-0 w-full h-full object-cover"
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
            const imgs = productImages[producto.id];
            const [mainName, subtitle] = producto.nombre.split(' - ');
            
            return (
              <Link
                key={producto.id}
                href={`/productos/${slug}/${producto.id}`}
                className="group cursor-pointer flex flex-col items-center text-center transition-all duration-300"
              >
                {/* Imagen */}
                <div className="w-full h-48 md:h-64 flex items-center justify-center mb-4 relative">
                  {imgs?.product ? (
                    <img
                      src={imgs.product}
                      alt={producto.nombre}
                      className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
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
