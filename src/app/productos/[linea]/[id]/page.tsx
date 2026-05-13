import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import { productos } from "@/data/products";
import {
  productImages,
  lineaSlugToName,
  lineaNameToSlug,
  type LineaSlug,
} from "@/data/product-images";

export function generateStaticParams() {
  return productos.map((p) => ({
    linea: lineaNameToSlug[p.linea],
    id: p.id,
  }));
}

export default async function ProductoPage({
  params,
}: {
  params: Promise<{ linea: string; id: string }>;
}) {
  const { linea, id } = await params;
  const slug = linea as LineaSlug;
  const producto = productos.find((p) => p.id === id);
  const imgs = productImages[id];

  if (!producto) return null;

  const detalles: { label: string; value: string }[] = [
    { label: "Presentación", value: producto.presentacion },
    ...(producto.caja !== "No se especifica"
      ? [{ label: "Por caja", value: producto.caja }]
      : []),
    { label: "Tipo de venta", value: producto.venta },
  ];

  return (
    <main className="bg-background min-h-screen">

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-4 pt-8 pb-0">
        <nav className="flex items-center gap-2 font-montserrat text-xs text-gray-500">
          <Link href="/productos" className="hover:text-goldenros transition-colors duration-200 cursor-pointer">
            Productos
          </Link>
          <span>/</span>
          <Link href={`/productos/${slug}`} className="hover:text-goldenros transition-colors duration-200 cursor-pointer capitalize">
            {lineaSlugToName[slug]}
          </Link>
          <span>/</span>
          <span className="text-gray-400 line-clamp-1">{producto.nombre}</span>
        </nav>
      </div>

      {/* ── Contenido principal ── */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* ── Columna izquierda: foto del producto ── */}
          <div className="relative">
            <div className="rounded-2xl bg-darkros/20 border border-white/5 aspect-square flex items-center justify-center p-8 md:p-12">
              {imgs?.product ? (
                <img
                  src={imgs.product}
                  alt={producto.nombre}
                  className="w-full h-full object-contain"
                />
              ) : (
                <div className="w-full h-full bg-darkros/40 rounded-xl" />
              )}
            </div>
            {/* Sello (al vacío / atado a mano) */}
            {imgs?.seal && (
              <div className="absolute bottom-4 right-4 w-20 md:w-24">
                <img src={imgs.seal} alt="Sello de producto" className="w-full h-auto" />
              </div>
            )}
          </div>

          {/* ── Columna derecha: información ── */}
          <div className="flex flex-col gap-8">

            {/* Tag de línea */}
            <div>
              <span className="inline-block font-montserrat text-xs tracking-widest uppercase px-3 py-1 rounded-full border border-goldenros/40 text-goldenros">
                Línea {lineaSlugToName[slug]}
              </span>
            </div>

            {/* Nombre con estilo */}
            {imgs?.nameWithStyle ? (
              <div className="w-full max-w-sm">
                <img
                  src={imgs.nameWithStyle}
                  alt={producto.nombre}
                  className="w-full h-auto object-contain"
                />
              </div>
            ) : (
              <h1 className="font-bodoni text-white text-3xl font-bold leading-tight">
                {producto.nombre}
              </h1>
            )}

            {/* Descripción */}
            {producto.descripcion && producto.descripcion !== "Rellenar" && (
              <p className="font-montserrat text-gray-300 text-base leading-relaxed">
                {producto.descripcion}
              </p>
            )}

            {/* Detalles técnicos */}
            <div className="space-y-0 border border-white/10 rounded-xl overflow-hidden">
              {detalles.map(({ label, value }, i) => (
                <div
                  key={label}
                  className={`flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 px-5 py-4 ${i !== detalles.length - 1 ? "border-b border-white/10" : ""}`}
                >
                  <span className="font-montserrat text-goldenros text-xs tracking-widest uppercase w-32 shrink-0 pt-0.5">
                    {label}
                  </span>
                  <span className="font-montserrat text-gray-200 text-sm leading-relaxed">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* Volver */}
            <Link
              href={`/productos/${slug}`}
              className="inline-flex items-center gap-2 font-montserrat text-goldenros text-sm cursor-pointer hover:gap-3 transition-all duration-200 mt-2"
            >
              <ChevronLeft size={16} />
              <span>Volver a línea {lineaSlugToName[slug]}</span>
            </Link>

          </div>
        </div>
      </div>
    </main>
  );
}
