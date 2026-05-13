import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { productos } from "@/data/products";
import {
  productImages,
  lineaSlugToName,
  lineaDescripciones,
  lineaBgImages,
  type LineaSlug,
} from "@/data/product-images";

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
    <main className="bg-background min-h-screen">

      {/* ── Banner de línea ── */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <img
          src={lineaBgImages[slug]}
          alt={`Línea ${lineaNombre}`}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <p className="font-montserrat text-goldenros text-xs tracking-widest uppercase mb-2">
            Línea
          </p>
          <h1 className="font-dirty-brush text-white text-6xl md:text-8xl leading-none">
            {lineaNombre}
          </h1>
          <p className="font-montserrat text-gray-300 text-sm md:text-base mt-4 max-w-xl leading-relaxed">
            {lineaDescripciones[slug]}
          </p>
        </div>
      </div>

      {/* ── Navegación ── */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-2">
        <Link
          href="/productos"
          className="inline-flex items-center gap-2 font-montserrat text-goldenros text-sm cursor-pointer hover:gap-3 transition-all duration-200"
        >
          <ChevronLeft size={16} />
          <span>Volver a Productos</span>
        </Link>
      </div>

      {/* ── Grid de productos ── */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {lineaProductos.map((producto) => {
            const imgs = productImages[producto.id];
            return (
              <Link
                key={producto.id}
                href={`/productos/${slug}/${producto.id}`}
                className="group cursor-pointer rounded-xl overflow-hidden border border-white/5 bg-darkros/10 hover:bg-darkros/30 hover:border-goldenros/30 transition-all duration-300"
              >
                {/* Imagen */}
                <div className="aspect-square bg-darkros/20 flex items-center justify-center p-4">
                  {imgs?.product ? (
                    <img
                      src={imgs.product}
                      alt={producto.nombre}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full bg-darkros/40 rounded-lg" />
                  )}
                </div>
                {/* Info */}
                <div className="p-4 border-t border-white/5">
                  <h3 className="font-bodoni text-white text-sm font-bold leading-tight line-clamp-2">
                    {producto.nombre}
                  </h3>
                  <p className="font-montserrat text-goldenros text-xs mt-2 leading-snug line-clamp-2">
                    {producto.presentacion}
                  </p>
                  <p className="font-montserrat text-gray-500 text-xs mt-3 flex items-center gap-1 group-hover:text-goldenros transition-colors duration-200">
                    Ver detalle
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}
