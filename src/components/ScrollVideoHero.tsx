'use client';

// Hero con video de fondo "scrubbed": el video NO se reproduce solo,
// sino que avanza/retrocede su currentTime a medida que hacés scroll.
// Usa GSAP ScrollTrigger (ya presente en el proyecto) para atar el scroll
// al tiempo del video, y un texto central que hace fade-in y se desvanece.

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollVideoHeroProps {
  srcDesktop: string;
  srcMobile: string;
  titleTop: string;
  titleBottom: string;
  subtitle?: string;
  /** Alto del "riel" de scroll. Más alto = el video tarda más en recorrerse. */
  trackHeight?: string;
}

export default function ScrollVideoHero({
  srcDesktop,
  srcMobile,
  titleTop,
  titleBottom,
  subtitle,
  trackHeight = '300vh',
}: ScrollVideoHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [src, setSrc] = useState(srcDesktop);

  // Elegir el video según el tamaño de pantalla (mobile vs escritorio).
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const apply = () => setSrc(mq.matches ? srcMobile : srcDesktop);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [srcDesktop, srcMobile]);

  // Atar el currentTime del video al progreso del scroll.
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    video.pause();

    let tween: gsap.core.Tween | null = null;

    const setup = () => {
      const duration = video.duration;
      if (!duration || Number.isNaN(duration)) return;

      tween?.kill();

      const obj = { time: 0 };
      tween = gsap.to(obj, {
        time: duration,
        ease: 'none',
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5, // suaviza el seguimiento del scroll
        },
        onUpdate: () => {
          // Sincronizar el frame del video con el scroll.
          if (video.readyState >= 2) {
            video.currentTime = obj.time;
          }
        },
      });
    };

    if (video.readyState >= 1 && video.duration) {
      setup();
    } else {
      video.addEventListener('loadedmetadata', setup, { once: true });
    }

    return () => {
      video.removeEventListener('loadedmetadata', setup);
      tween?.scrollTrigger?.kill();
      tween?.kill();
    };
  }, [src]);

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: trackHeight }}>
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <video
          ref={videoRef}
          key={src}
          src={src}
          muted
          playsInline
          preload="auto"
          tabIndex={-1}
          disablePictureInPicture
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Capa oscura para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Texto central con fade-in de entrada */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div ref={textRef} className="flex flex-col items-center">
            <h2 className="font-bodoni text-4xl font-bold text-white md:text-6xl lg:text-7xl">
              {titleTop}
            </h2>
            <h2 className="font-dirty-brush text-6xl leading-none text-goldenros drop-shadow-[0_0_10px_rgba(30,30,30,0.6)] drop-shadow-gray-950/40 md:text-7xl lg:text-8xl">
              {titleBottom}
            </h2>

            {subtitle && (
              <p className="mt-6 max-w-xl font-montserrat text-lg text-white md:text-xl">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
