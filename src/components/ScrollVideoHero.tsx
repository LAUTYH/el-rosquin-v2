'use client';

// Hero con video de fondo "scrubbed": el video NO se reproduce solo,
// sino que avanza/retrocede su currentTime a medida que hacés scroll.
//
// Implementación sin GSAP a propósito: el progreso se recalcula en cada
// scroll/resize y al montar a partir de getBoundingClientRect, así no hay
// medidas "viejas" que queden mal al volver atrás o recargar (App Router).
// Un póster (primer frame) evita el parpadeo negro mientras carga el video.

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ScrollVideoHeroProps {
  srcDesktop: string;
  srcMobile: string;
  posterDesktop?: string;
  posterMobile?: string;
  titleTop: string;
  titleBottom: string;
  subtitle?: string;
  /** Alto del "riel" de scroll. Más alto = el video tarda más en recorrerse. */
  trackHeight?: string;
}

export default function ScrollVideoHero({
  srcDesktop,
  srcMobile,
  posterDesktop,
  posterMobile,
  titleTop,
  titleBottom,
  subtitle,
  trackHeight = '300vh',
}: ScrollVideoHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const textRef = useRef<HTMLDivElement | null>(null);
  const [src, setSrc] = useState(srcDesktop);
  const [poster, setPoster] = useState(posterDesktop);

  // Elegir el video/póster según el tamaño de pantalla (mobile vs escritorio).
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const apply = () => {
      setSrc(mq.matches ? srcMobile : srcDesktop);
      setPoster(mq.matches ? posterMobile : posterDesktop);
    };
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, [srcDesktop, srcMobile, posterDesktop, posterMobile]);

  // Atar el currentTime del video al progreso del scroll.
  useEffect(() => {
    const container = containerRef.current;
    const video = videoRef.current;
    if (!container || !video) return;

    video.pause();

    let rafId = 0;
    let target = 0; // currentTime objetivo según el scroll
    let isSeeking = false; // evita encolar seeks en mobile (decodifica lento)

    // Progreso 0..1 dentro del "riel" (parte sticky fija mientras scrolleás).
    const computeProgress = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      return scrolled / scrollable;
    };

    const applyProgress = (snap = false) => {
      const p = computeProgress();

      const duration = video.duration;
      if (duration && !Number.isNaN(duration)) {
        target = p * duration;
        // Al cargar/recargar fijamos el frame exacto sin interpolar.
        if (snap && video.readyState >= 2) {
          video.currentTime = target;
        }
      }
    };

    // Bucle: sigue al scroll, pero NO pide un nuevo frame hasta que el
    // anterior terminó de decodificar (clave para que no salte en mobile).
    // Con el video all-keyframe, cada seek es un único frame => fluido.
    const tick = () => {
      const duration = video.duration;
      if (duration && !Number.isNaN(duration) && video.readyState >= 2 && !isSeeking) {
        if (Math.abs(target - video.currentTime) > 0.02) {
          video.currentTime = target;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    const onLoaded = () => applyProgress(true);
    const onScrollResize = () => applyProgress(false);
    const onSeeking = () => { isSeeking = true; };
    const onSeeked = () => { isSeeking = false; };

    video.addEventListener('loadedmetadata', onLoaded);
    video.addEventListener('loadeddata', onLoaded);
    video.addEventListener('seeking', onSeeking);
    video.addEventListener('seeked', onSeeked);
    window.addEventListener('scroll', onScrollResize, { passive: true });
    window.addEventListener('resize', onScrollResize);

    // Arranque: si ya hay metadata, fijamos frame; si no, lo hará el listener.
    if (video.readyState >= 1) applyProgress(true);
    else applyProgress(false);
    rafId = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafId);
      video.removeEventListener('loadedmetadata', onLoaded);
      video.removeEventListener('loadeddata', onLoaded);
      video.removeEventListener('seeking', onSeeking);
      video.removeEventListener('seeked', onSeeked);
      window.removeEventListener('scroll', onScrollResize);
      window.removeEventListener('resize', onScrollResize);
    };
  }, [src]);

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: trackHeight }}>
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        <video
          ref={videoRef}
          key={src}
          src={src}
          poster={poster}
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
