import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
import BackButton from "@/components/BackButton";
import NutritionalBadge from "@/components/NutritionalBadge";
import ParallaxBanner from "@/components/ParallaxBanner";
import { productos } from "@/data/products";
import {
  productImages,
  lineaSlugToName,
  lineaNameToSlug,
  getProductDetailImage,
  getProductBannerImage,
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
  const detailImg = getProductDetailImage(id);
  const bannerImg = getProductBannerImage(id);

  if (!producto) return null;

  const detalles: { label: string; value: string }[] = [
    { label: "Presentación", value: producto.presentacion },
    ...(producto.caja !== "No se especifica"
      ? [{ label: "Por caja", value: producto.caja }]
      : []),
    { label: "Tipo de venta", value: producto.venta },
  ];

  return (
    <main className="bg-darkros min-h-screen">
      {/* ── SECCIÓN 1: Header/Info Básica ── */}
      <section className="bg-[url('/fondos-productos/fondo-2.webp')] bg-cover bg-center">
        {/* ── Navegación ── */}
        <div className="max-w-6xl mx-auto px-4 pt-8 pb-0">
          <nav className="flex flex-wrap items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-2 font-montserrat text-goldenros text-sm">
              <Link href="/productos#lineas" className="hover:underline cursor-pointer">
                Productos
              </Link>
              <span>/</span>
              <Link href={`/productos/${slug}`} className="hover:underline cursor-pointer capitalize">
                {lineaSlugToName[slug]}
              </Link>
              <span>/</span>
              <span className="font-bold line-clamp-1">{producto.nombre.split(' - ')[0]}</span>
            </div>
            <BackButton />
          </nav>
        </div>

        {/* ── Contenido Header ── */}
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Columna Izquierda: Imagen del producto */}
            <div className="relative flex justify-center">
              {detailImg ? (
                <div className="relative w-[80%] max-w-[300px] md:max-w-[420px] lg:max-w-[500px] h-[400px] sm:h-[500px] md:h-[640px] lg:h-[740px]">
                  <Image
                    src={detailImg}
                    alt={producto.nombre}
                    fill
                    className="object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                    priority
                  />
                  {imgs?.seal && (
                    <div className="absolute bottom-4 -right-4 md:bottom-10 md:-right-12 w-16 md:w-24">
                      <Image src={imgs.seal} alt="Sello de producto" width={100} height={100} className="w-full h-auto" />
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-[80%] max-w-[300px] md:max-w-[420px] lg:max-w-[500px] h-[400px] md:h-[640px] lg:h-[740px] bg-darkros/20 rounded-xl" />
              )}
            </div>

            {/* Columna Derecha: Información */}
            <div className="flex flex-col items-center text-center">
              {/* Título Estilizado */}
              {imgs?.nameWithStyle ? (
                <div className="w-full max-w-sm mb-12 flex justify-center">
                  <Image
                    src={imgs.nameWithStyle}
                    alt={producto.nombre}
                    width={600}
                    height={200}
                    className="w-[80%] md:w-full h-auto object-contain"
                  />
                </div>
              ) : (
                <h1 className="font-bodoni text-darkros text-4xl md:text-5xl font-bold leading-tight mb-12 uppercase">
                  {producto.nombre}
                </h1>
              )}

              {/* Atributos */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center">
                  <span className="font-montserrat text-goldenros text-xs tracking-widest uppercase mb-1 font-bold">
                    Presentación
                  </span>
                  <span className="font-bodoni text-darkros text-xl md:text-2xl font-bold">
                    {producto.presentacion}
                  </span>
                </div>

                {producto.caja !== "No se especifica" && (
                  <div className="flex flex-col items-center">
                    <span className="font-montserrat text-goldenros text-xs tracking-widest uppercase mb-1 font-bold">
                      Por caja
                    </span>
                    <span className="font-bodoni text-darkros text-xl md:text-2xl font-bold">
                      {producto.caja}
                    </span>
                  </div>
                )}

                <div className="flex flex-col items-center">
                  <span className="font-montserrat text-goldenros text-xs tracking-widest uppercase mb-1 font-bold">
                    Tipo de venta
                  </span>
                  <span className="font-bodoni text-darkros text-xl md:text-2xl font-bold">
                    {producto.venta}
                  </span>
                </div>

                {producto.codigo && (
                  <div className="flex flex-col items-center mt-2">
                    <span className="font-montserrat text-gray-800 text-sm">
                      Código {producto.codigo}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECCIÓN 2: Banner Parallax ── */}
      {bannerImg && (
        <ParallaxBanner src={bannerImg} height={400} />
      )}

      {/* ── SECCIÓN 3: Información Nutricional e Ingredientes ── */}
      <section className="bg-[url('/fondos-productos/fondo-info.webp')] bg-cover bg-center py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">

            {/* Columna Izquierda: Nutricional */}
            <div className="flex flex-col items-center">
              <NutritionalBadge title="INFORMACIÓN NUTRICIONAL" />

              {producto.informacionNutricional && (
                <div className="mt-4 text-center w-full max-w-md">
                  <p className="font-montserrat text-darkros text-sm md:text-base font-bold mb-6">
                    Porción: {producto.informacionNutricional.porcion}
                  </p>

                  <div className="w-full border-t-[3px] border-darkros pt-2">
                    {/* Header tabla */}
                    <div className="flex justify-between items-end pb-2 border-b-[3px] border-darkros font-montserrat text-darkros font-bold text-sm md:text-base">
                      <span className="text-left flex-1">Cantidad por porción</span>
                      <span className="w-24 text-right">% VD (*)</span>
                    </div>

                    {/* Filas tabla */}
                    <div className="flex flex-col">
                      {Object.entries(producto.informacionNutricional.valores).map(([key, value]) => (
                        <div key={key} className="flex justify-between py-2 border-b border-darkros/30 font-montserrat text-darkros text-sm md:text-base">
                          <span className="text-left flex-1 font-medium">{key}</span>
                          <span className="w-16 text-center font-bold">{value}</span>
                          <span className="w-16 text-right font-bold">
                            {/* @ts-ignore - el compilador ts no deduce bien la clave pero es segura */}
                            {producto.informacionNutricional?.porcentajes[key] || '--'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="font-montserrat text-darkros/70 text-[10px] md:text-xs text-center mt-6 max-w-sm mx-auto leading-relaxed">
                    (*) % Valores Diarios con base a una dieta de 2000 Kcal / 8400 Kj. Sus valores diarios pueden ser mayores o menores dependiendo de sus necesidades energéticas.
                  </p>
                </div>
              )}
            </div>

            {/* Columna Derecha: Ingredientes */}
            <div className="flex flex-col items-center">
              <NutritionalBadge title="INGREDIENTES" />

              <div className="mt-4 max-w-md">
                <p className="font-montserrat text-darkros text-sm md:text-base leading-relaxed text-center font-medium">
                  {producto.ingredientes}
                </p>
              </div>

              {/* Sellos y Octógonos */}
              <div className="mt-12 flex flex-col gap-8 items-center justify-center">
                <Image
                  src="/id-productos-page-img/octogonos.svg"
                  alt="Sellos nutricionales"
                  width={300}
                  height={100}
                  className="w-[280px] md:w-[320px] h-auto"
                />
                <div className="flex gap-8 items-center justify-center">
                  <Image
                    src="/id-productos-page-img/sello-1.svg"
                    alt="Industria Argentina"
                    width={80}
                    height={80}
                    className="w-[60px] md:w-[80px] h-auto"
                  />
                  <Image
                    src="/id-productos-page-img/sello-2.svg"
                    alt="Sin TACC"
                    width={80}
                    height={80}
                    className="w-[60px] md:w-[80px] h-auto"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
