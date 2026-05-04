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
    <section ref={containerRef} className="w-full h-screen bg-[#f4f4f4] overflow-hidden">
      {/* Contenedor que centra verticalmente el carrusel */}
      <div className="h-full flex flex-col justify-center px-4 md:px-10">
        {/* <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-redros mb-12 pl-4">
          Nuestra Galería
        </h2> */}

        {/* El div que realmente se desplazará en el eje X */}
        <div ref={scrollWrapperRef} className="flex gap-8 flex-nowrap w-max px-4">

          {/* Tarjetas Placeholder 1:1 */}
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
            <div
              key={item}
              className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] flex-shrink-0 bg-[#e2e2e2] rounded-2xl flex items-center justify-center shadow-lg border-2 border-dashed border-[#b3b3b3] transition-transform hover:scale-[1.02]"
            >
              <span className="text-[#666] font-montserrat font-semibold text-lg">
                Imagen {item} <br /> (1:1)
              </span>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
