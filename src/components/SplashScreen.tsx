"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Verificar si ya se mostró en esta sesión
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");
    if (hasSeenSplash) {
      setShow(false);
      return;
    }

    // Ocultar después de la animación de carga (2.8s)
    const timer = setTimeout(() => {
      setShow(false);
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[9999] bg-redros flex items-center justify-center overflow-hidden"
          initial={{ y: 0 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Contenedor relativo para alinear logo y anillos */}
          <div className="relative flex flex-col items-center justify-center">

            {/* Logo con un pulso inicial suave */}
            <motion.div
              className="relative w-40 h-40 md:w-48 md:h-48 z-10 drop-shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/temporal/logo-er.svg"
                alt="El Rosquin"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            {/* Anillo dorado de carga rápida */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] h-[240px] md:w-[340px] md:h-[340px] rounded-full border-[3px] border-transparent border-t-goldenros border-r-goldenros z-0"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1.2, ease: "linear", repeat: Infinity }}
            />

            {/* Anillo de fondo suave que se expande */}
            <motion.div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] md:w-[380px] md:h-[380px] rounded-full border-[1px] border-goldenros/30 z-0"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
