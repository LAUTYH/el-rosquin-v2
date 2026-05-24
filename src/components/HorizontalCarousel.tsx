"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function HorizontalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const scrollWrapper = scrollWrapperRef.current;
      if (!scrollWrapper) return;

      // Calculamos el desplazamiento necesario
      const getScrollAmount = () => {
        let scrollWidth = scrollWrapper.scrollWidth;
        return -(scrollWidth - window.innerWidth);
      };

      // Animación GSAP que moverá el contenedor en el eje X
      const tween = gsap.to(scrollWrapper, {
        x: getScrollAmount,
        ease: "none",
      });

      // ScrollTrigger que "pinea" la sección y enlaza el scroll con el desplazamiento horizontal
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: () => `+=${scrollWrapper.scrollWidth - window.innerWidth}`,
        pin: true,
        animation: tween,
        scrub: 1, // Un valor de 1 hace que el movimiento sea suave y siga al scroll natural
        invalidateOnRefresh: true, // Recalcula los valores si se redimensiona la ventana
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} className="w-full h-screen overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/fondos/CARROUSEL.png')" }}>
      {/* Contenedor que centra verticalmente el carrusel */}
      <div className="h-full flex flex-col justify-center px-4 md:px-10">
        {/* <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-redros mb-12 pl-4">
          Nuestra Galería
        </h2> */}

        {/* El div que realmente se desplazará en el eje X */}
        <div ref={scrollWrapperRef} className="flex gap-8 flex-nowrap w-max px-4">

          {/* Galería de Imágenes Reales */}
          {[
            "/products-onlys/imagenes-stock/picada-salame-queso-cervezaC.jpg",
            "/products-onlys/imagenes-stock/pizza-jamon-aceitunas-porcionC.png",
            "/products-onlys/imagenes-stock/chorizos-parrilla-fuegoC.jpg",
            "/products-onlys/imagenes-stock/sandwich-jamon-queso-lechugaC.jpg",
            "/products-onlys/imagenes-stock/salame-tabla-queso-aceitunasC.jpeg",
            "/products-onlys/imagenes-stock/jamon-cocido-feteado-tablaC.jpg",
            "/products-onlys/imagenes-stock/bondiola-tabla-quesos-panC.jpg",
            "/products-onlys/imagenes-stock/medialunas-jamon-queso-cafeC.jpg",
            "/products-onlys/imagenes-stock/tabla-fiambres-salame-nuecesC.jpg",
            "/products-onlys/imagenes-stock/equipo-fabrica-embutidosC.jpg"
          ].map((src, index) => (
            <div
              key={index}
              className="w-[280px] md:w-[30vw] aspect-[9/16] md:aspect-[4/5] flex-shrink-0 overflow-hidden rounded-2xl shadow-lg border-2 border-white/20 transition-transform hover:scale-[1.02]"
            >
              <img
                src={src}
                alt={`Galería El Rosquín ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
