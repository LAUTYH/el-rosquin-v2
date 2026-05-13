"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Asegurarnos de registrar los plugins si estamos en el cliente
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface Props {
  children: React.ReactNode;
}

export default function AnimatedPanelsWrapper({ children }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Forzar un refresh de ScrollTrigger después de que todo esté montado
  useEffect(() => {
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  useGSAP(
    () => {
      // Obtenemos todos los elementos con la clase .anim-panel
      const panels = gsap.utils.toArray(".anim-panel") as HTMLElement[];

      if (panels.length < 2) return;

      // Hacemos "pin" en todos los paneles EXCEPTO en el último
      panels.forEach((panel, i) => {
        if (i === panels.length - 1) return;

        ScrollTrigger.create({
          trigger: panel,
          start: "top top",
          pin: true,
          pinSpacing: false,
          anticipatePin: 1,
          refreshPriority: panels.length - i,
          // Al no tener pinSpacing, el siguiente elemento en el flujo del documento
          // seguirá subiendo con el scroll y pasará por encima de este.
        });

        // Animación para oscurecer el panel cuando el siguiente empieza a subir
        const overlay = panel.querySelector(".panel-overlay");
        if (overlay && panels[i + 1]) {
          gsap.to(overlay, {
            opacity: 0.65, // Nivel de oscuridad
            ease: "none",
            scrollTrigger: {
              trigger: panels[i + 1],
              start: "top bottom", // Cuando el top del *siguiente* panel toca el bottom de la pantalla
              end: "top top", // Cuando el top del *siguiente* panel llega arriba (lo cubre por completo)
              scrub: true, // Scrub con un pequeño retraso para mayor suavidad
              invalidateOnRefresh: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="w-full relative">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          return (
            <div
              key={index}
              className="anim-panel w-full relative"
              style={{ zIndex: index + 10 }} // zIndex incremental para que los de abajo tapen a los de arriba
            >
              {child}
              {/* Capa oscura superpuesta que aumentará su opacidad con el scroll */}
              <div
                className="panel-overlay absolute inset-0 bg-black pointer-events-none"
                style={{ opacity: 0, zIndex: 50 }}
              ></div>
            </div>
          );
        }
        return child;
      })}
    </div>
  );
}
