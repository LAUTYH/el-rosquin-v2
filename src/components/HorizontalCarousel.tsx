"use client";
import { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const BASE = "/material-definitivo/img-horizontal-carrousel";
const TOTAL_IMAGENES = 8;

export default function HorizontalCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollWrapperRef = useRef<HTMLDivElement>(null);

  // null mientras no se conoce el viewport: evita descargar el set equivocado
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

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
      style={{ backgroundImage: `url('${BASE}/fondo-horizontal-carrousel${isMobile ? "-mobile" : ""}.png')` }}>
      {/* Contenedor que centra verticalmente el carrusel */}
      <div className="h-full flex flex-col justify-center px-4 md:px-10">
        {/* <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-redros mb-12 pl-4">
          Nuestra Galería
        </h2> */}

        {/* El div que realmente se desplazará en el eje X */}
        <div ref={scrollWrapperRef} className="flex gap-8 flex-nowrap w-max px-4">

          {/* Galería de Imágenes (material-definitivo, responsive mobile/escritorio) */}
          {Array.from({ length: TOTAL_IMAGENES }, (_, i) => i + 1).map((n) => (
            <div
              key={n}
              className="relative w-[280px] md:w-[30vw] aspect-[9/16] md:aspect-[4/5] flex-shrink-0 overflow-hidden shadow-lg border-2 border-white/20 transition-transform hover:scale-[1.02]"
            >
              {isMobile !== null && (
                <Image
                  src={`${BASE}/${isMobile ? `${n}-mobile` : n}.png`}
                  alt={`Galería El Rosquín ${n}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              )}
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
