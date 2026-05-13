"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Registrar ScrollTrigger en caso de que no esté registrado
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Inicializar Lenis para smooth scroll global
    const lenis = new Lenis({
      lerp: 0.1, // Ajusta este valor para mayor o menor suavidad (0.1 es un buen balance)
      duration: 1.5, // Duración del scroll
      smoothWheel: true,
    });

    // @ts-ignore
    window.lenis = lenis;

    // Sincronizar Lenis con GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
    };
  }, []);

  return <>{children}</>;
}
