'use client';

// Hero de la página de productos.
// - MOBILE: "scrubbed" por SECUENCIA DE IMÁGENES (frames JPG dibujados en un
//   <canvas> según el scroll), con un hint "deslizá hacia abajo". El scrubbing
//   por frames es fluido en iOS (a diferencia de buscar dentro de un <video>).
// - DESKTOP: SIN animación de scroll. Se reproduce el mismo video en LOOP.

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FrameSet {
  /** Carpeta pública con los frames, ej: "/videos/frames-productos/mobile" */
  dir: string;
  /** Cantidad de frames (frame-0001.jpg .. frame-NNNN.jpg) */
  count: number;
}

interface ScrollVideoHeroProps {
  /** Frames para el scrubbing en mobile. */
  framesMobile: FrameSet;
  /** Video que se reproduce en loop en desktop. */
  videoDesktop: string;
  posterDesktop?: string;
  posterMobile?: string;
  titleTop: string;
  titleBottom: string;
  subtitle?: string;
  /** Texto del hint de scroll (solo mobile). */
  scrollHint?: string;
  /** Alto del "riel" de scroll en mobile. Más alto = la secuencia tarda más. */
  trackHeight?: string;
}

const framePath = (dir: string, i: number) =>
  `${dir}/frame-${String(i).padStart(4, '0')}.jpg`;

export default function ScrollVideoHero({
  framesMobile,
  videoDesktop,
  posterDesktop,
  posterMobile,
  titleTop,
  titleBottom,
  subtitle,
  scrollHint,
  trackHeight = '300vh',
}: ScrollVideoHeroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  // null = sin determinar todavía (primer render); evita cargar el asset equivocado.
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    mq.addEventListener('change', apply);
    return () => mq.removeEventListener('change', apply);
  }, []);

  // Scrubbing por frames: SOLO en mobile.
  useEffect(() => {
    if (isMobile !== true) return;
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { dir, count } = framesMobile;

    // Precargar todos los frames.
    const images: HTMLImageElement[] = new Array(count);
    for (let i = 1; i <= count; i++) {
      const img = new Image();
      img.decoding = 'async';
      img.src = framePath(dir, i);
      images[i - 1] = img;
    }

    let drawnIndex = -1;
    let rafId = 0;

    // Dibuja la imagen cubriendo el canvas (object-cover) respetando el DPR.
    const drawCover = (img: HTMLImageElement) => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cw = container.clientWidth;
      const ch = window.innerHeight;
      const wantW = Math.round(cw * dpr);
      const wantH = Math.round(ch * dpr);
      if (canvas.width !== wantW || canvas.height !== wantH) {
        canvas.width = wantW;
        canvas.height = wantH;
      }
      const W = canvas.width;
      const H = canvas.height;
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = W / H;
      let dw: number, dh: number, dx: number, dy: number;
      if (ir > cr) {
        dh = H;
        dw = H * ir;
        dx = (W - dw) / 2;
        dy = 0;
      } else {
        dw = W;
        dh = W / ir;
        dx = 0;
        dy = (H - dh) / 2;
      }
      ctx.drawImage(img, dx, dy, dw, dh);
    };

    const computeProgress = () => {
      const rect = container.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      if (scrollable <= 0) return 0;
      const scrolled = Math.min(Math.max(-rect.top, 0), scrollable);
      return scrolled / scrollable;
    };

    const indexFromProgress = (p: number) => {
      const i = Math.round(p * (count - 1)) + 1; // 1..count
      return Math.min(Math.max(i, 1), count);
    };

    const render = () => {
      const idx = indexFromProgress(computeProgress());
      if (idx !== drawnIndex) {
        const img = images[idx - 1];
        if (img && img.complete && img.naturalWidth) {
          drawCover(img);
          drawnIndex = idx;
        }
      }
      rafId = requestAnimationFrame(render);
    };

    const onResize = () => {
      const img = images[Math.max(drawnIndex - 1, 0)];
      if (img && img.complete && img.naturalWidth) {
        drawCover(img);
      }
    };
    window.addEventListener('resize', onResize);

    rafId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      images.forEach((img) => {
        img.onload = null;
        img.src = '';
      });
    };
  }, [isMobile, framesMobile]);

  // Mobile usa el riel de 300vh (scroll); desktop/indeterminado, una sola pantalla.
  const heroHeight = isMobile === true ? trackHeight : '100dvh';
  const poster = isMobile === true ? posterMobile : posterDesktop;

  return (
    <div ref={containerRef} className="relative bg-black" style={{ height: heroHeight }}>
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        {/* Póster de fondo (placeholder mientras carga / estado indeterminado) */}
        {poster && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={poster}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* MOBILE: canvas con scrubbing por frames */}
        {isMobile === true && (
          <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
        )}

        {/* DESKTOP: video en loop (sin animación de scroll) */}
        {isMobile === false && (
          <video
            src={videoDesktop}
            poster={posterDesktop}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Capa oscura para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/45" />

        {/* Texto central (más grande en desktop) */}
        <motion.div
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center px-4 text-center"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div className="flex flex-col items-center">
            <h2 className="font-bodoni text-4xl font-bold text-white md:text-7xl lg:text-8xl">
              {titleTop}
            </h2>
            <h2 className="font-dirty-brush text-6xl leading-none text-goldenros drop-shadow-[0_0_10px_rgba(30,30,30,0.6)] drop-shadow-gray-950/40 md:text-8xl lg:text-9xl">
              {titleBottom}
            </h2>

            {subtitle && (
              <p className="mt-6 max-w-xl font-montserrat text-lg text-white md:max-w-2xl md:text-2xl lg:text-3xl">
                {subtitle}
              </p>
            )}
          </div>
        </motion.div>

        {/* MOBILE: hint de scroll */}
        {isMobile === true && scrollHint && (
          <motion.div
            className="pointer-events-none absolute bottom-8 inset-x-0 flex flex-col items-center gap-2 px-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <span className="font-montserrat text-sm font-semibold tracking-wide text-white/90">
              {scrollHint}
            </span>
            <motion.span
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
            >
              <ChevronDown className="h-6 w-6 text-goldenros" />
            </motion.span>
          </motion.div>
        )}
      </div>
    </div>
  );
}
