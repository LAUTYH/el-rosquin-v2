"use client";
import React, { useRef } from "react";
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
          // Al no tener pinSpacing, el siguiente elemento en el flujo del documento 
          // seguirá subiendo con el scroll y pasará por encima de este.
        });
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
              className="anim-panel w-full relative"
              style={{ zIndex: index + 10 }} // zIndex incremental para que los de abajo tapen a los de arriba
            >
              {child}
            </div>
          );
        }
        return child;
      })}
    </div>
  );
}
