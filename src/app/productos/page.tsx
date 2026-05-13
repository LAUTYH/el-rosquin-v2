import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import Image from "next/image";
import DownloadButton from "@/components/DownloadButton";

export default function ProductosPage() {
  return (
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
          src="/products-onlys/imagenes-stock/bondiola-tabla-quesos-pan.jpg"
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

      {/* Aquí continuará el resto del contenido de productos */}
      <div className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bodoni text-center text-white mb-10">
          Nuestras Líneas
        </h2>
        {/* Contenido de productos... */}
      </div>
    </div>
  );
}

