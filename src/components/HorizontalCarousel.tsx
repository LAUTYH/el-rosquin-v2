"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Play, X } from "lucide-react";

const BASE = "/material-definitivo/img-horizontal-carrousel";
const PORT = "/portadas-videos-carrusel-restantes";

// Fotos de la galería (usamos siempre las versiones verticales "-mobile").
const FOTOS = [1, 2, 3, 4, 5, 6, 7, 8];

// ── VIDEOS DE INSTAGRAM ───────────────────────────────────────────────
// Dejá "thumbnail" en "" para que el fondo de la tarjeta quede NEGRO (provisorio).
// Cuando tengas la portada de cada reel, poné la ruta de la imagen ahí.
type VideoItem = { igUrl: string; thumbnail: string; titulo: string };
const VIDEOS: VideoItem[] = [
  { igUrl: "https://www.instagram.com/reel/DUa351Jj4iR/", thumbnail: `${PORT}/nuestro-producto-estrella.webp`, titulo: "Nuestro producto estrella" },
  { igUrl: "https://www.instagram.com/reel/DTdenmPjZw2/", thumbnail: `${PORT}/jamon-cocido-tradicion.webp`, titulo: "Jamón Cocido Tradición" },
  { igUrl: "https://www.instagram.com/reel/DTQoQnWgM0q/", thumbnail: `${PORT}/sabias-de-la-existencia-de-el-rosquin.webp`, titulo: "Sabías de El Rosquín" },
  { igUrl: "https://www.instagram.com/reel/DXHVt1bgdFP/", thumbnail: `${PORT}/te-presentamos-nuestra-bondiola.webp`, titulo: "Te presentamos la Bondiola" },
  { igUrl: "https://www.instagram.com/reel/DXZT0UXjQa4/", thumbnail: `${PORT}/veni-conocenos.webp`, titulo: "Vení conocenos" },
  { igUrl: "https://www.instagram.com/reel/DXPEI57jd_J/", thumbnail: `${BASE}/fondos-videos/bondiola-fondo-carrusel.webp`, titulo: "Bondiola" },
  { igUrl: "https://www.instagram.com/reel/DWEZDcXiCDa/", thumbnail: `${BASE}/fondos-videos/salame-colono-fondo-carrusel.webp`, titulo: "Salame Colono" },
  { igUrl: "https://www.instagram.com/reel/DYPYfgXH6Rm/", thumbnail: `${PORT}/que-hace-que-un-embutido-sea-realmente-bueno.webp`, titulo: "¿Qué hace a un embutido bueno?" },
  { igUrl: "https://www.instagram.com/reel/DYFLRpvnNtd/", thumbnail: `${BASE}/fondos-videos/jamon-cocido-fondo-carrusel.webp`, titulo: "Jamón Cocido" },
  { igUrl: "https://www.instagram.com/reel/DT0TEJwEaKA/", thumbnail: `${PORT}/bienvenido-a-el-rosquin.webp`, titulo: "Bienvenidos" },
  { igUrl: "https://www.instagram.com/reel/DYAjtgSlxYu/", thumbnail: `${PORT}/choripan.webp`, titulo: "Choripán" },
];

// Lista unificada: intercalamos foto, video, foto, video… y lo que sobra va al final.
type Item =
  | { tipo: "video"; igUrl: string; thumbnail: string; alt: string }
  | { tipo: "foto"; src: string; alt: string };

const fotoItems: Item[] = FOTOS.map((n) => ({ tipo: "foto", src: `${BASE}/${n}-mobile.webp`, alt: `Galería El Rosquín ${n}` }));
const videoItems: Item[] = VIDEOS.map((v) => ({ tipo: "video", igUrl: v.igUrl, thumbnail: v.thumbnail, alt: v.titulo }));

const ITEMS: Item[] = [];
for (let i = 0; i < Math.max(fotoItems.length, videoItems.length); i++) {
  if (fotoItems[i]) ITEMS.push(fotoItems[i]);
  if (videoItems[i]) ITEMS.push(videoItems[i]);
}

// Triplicamos la lista para el LOOP INFINITO (mantenemos el scroll en la copia del medio).
const LOOP: Item[] = [...ITEMS, ...ITEMS, ...ITEMS];

const CARD_SIZE = "w-[82vw] sm:w-[330px] md:w-[400px] lg:w-[440px] aspect-[9/16] flex-shrink-0 snap-center";

export default function HorizontalCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  // Drag-to-scroll con el mouse (en táctil ya funciona el scroll nativo).
  const drag = useRef({ active: false, startX: 0, startScroll: 0 });

  // Ancho EXACTO de una copia, medido del DOM (offsetLeft) para que el loop no driftee.
  const strideRef = useRef(0);
  const scrollTimer = useRef<number | undefined>(undefined);

  // Reacomoda el scroll dentro de la copia del medio. SOLO se llama con el scroll
  // QUIETO (nunca en movimiento), así no pelea con el snap ni con el scroll suave
  // → no titila ni se traba. El while soporta drift de varias copias.
  const loopWrap = () => {
    const el = scrollRef.current;
    if (!el) return;
    const stride = strideRef.current;
    if (!stride) return;
    let x = el.scrollLeft;
    while (x >= stride * 2) x -= stride;
    while (x < stride) x += stride;
    if (Math.abs(x - el.scrollLeft) > 0.5) el.scrollLeft = x;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const compute = () => {
      const first = el.children[0] as HTMLElement | undefined;
      const next = el.children[ITEMS.length] as HTMLElement | undefined;
      if (first && next) {
        strideRef.current = next.offsetLeft - first.offsetLeft;
        el.scrollLeft = strideRef.current; // arrancamos en la copia del medio
      }
    };
    const id = requestAnimationFrame(compute);
    window.addEventListener("resize", compute);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("resize", compute);
    };
  }, []);

  // Debounce: recién cuando el scroll se frena ~90ms, reacomodamos el loop.
  const onScroll = () => {
    if (scrollTimer.current) window.clearTimeout(scrollTimer.current);
    scrollTimer.current = window.setTimeout(loopWrap, 90);
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (e.pointerType !== "mouse") return;
    const el = scrollRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.active) return;
    const el = scrollRef.current;
    if (!el) return;
    el.scrollLeft = drag.current.startScroll - (e.clientX - drag.current.startX);
  };
  const endDrag = () => {
    drag.current.active = false;
    loopWrap();
  };

  const scrollByCards = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    loopWrap(); // re-centramos ANTES de mover (evita drift por clicks repetidos)
    const a = el.children[0] as HTMLElement | undefined;
    const b = el.children[1] as HTMLElement | undefined;
    const cardStep = a && b ? b.offsetLeft - a.offsetLeft : el.clientWidth;
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    // Desktop avanza de a 3 tarjetas; mobile de a 1 (cae justo en un snap).
    el.scrollBy({ left: dir * cardStep * (isDesktop ? 3 : 1), behavior: "smooth" });
  };

  const openVideo = (igUrl: string) => {
    if (!igUrl) return;
    const match = igUrl.match(/instagram\.com\/(?:[^/]+\/)?(?:reel|p|tv)\/([^/?#]+)/);
    if (!match) return;
    setActiveVideo(`https://www.instagram.com/reel/${match[1]}/embed`);
  };

  const renderCard = (item: Item, key: string) =>
    item.tipo === "video" ? (
      <button
        key={key}
        onClick={() => openVideo(item.igUrl)}
        className={`group relative ${CARD_SIZE} overflow-hidden `}
      >
        {item.thumbnail ? (
          <Image
            src={item.thumbnail}
            alt={item.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 82vw, 440px"
            draggable={false}
          />
        ) : (
          <div className="absolute inset-0 bg-black" />
        )}
        <div className="absolute inset-0 bg-black/20 transition-colors group-hover:bg-black/10" />

        {/* Signo de recording: solo el punto rojo pulsante (sin texto) */}
        <div className="absolute top-3 left-3">
          <span className="relative flex w-3 h-3">
            <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
            <span className="relative inline-flex w-3 h-3 rounded-full bg-red-500 shadow-[0_0_6px_rgba(0,0,0,0.7)]" />
          </span>
        </div>

        {/* Botón de play central */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/90 shadow-xl transition-transform duration-300 group-hover:scale-110">
            <Play className="w-7 h-7 text-redros fill-redros ml-1" />
          </div>
        </div>
      </button>
    ) : (
      <div
        key={key}
        className={`relative ${CARD_SIZE} overflow-hidden  transition-transform hover:scale-[1.02]`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 82vw, 440px"
          draggable={false}
          loading="lazy"
        />
      </div>
    );

  return (
    <section className="relative w-full min-h-screen flex items-center py-16 bg-[url('/material-definitivo/img-horizontal-carrousel/fondo-horizontal-carrousel-mobile.webp')] md:bg-[url('/material-definitivo/img-horizontal-carrousel/fondo-horizontal-carrousel.webp')] bg-cover bg-center bg-no-repeat">
      <div className="relative w-full max-w-[1700px] mx-auto px-4 md:px-8">

        {/* Fila: flecha izq (desktop) + riel + flecha der (desktop) */}
        <div className="flex items-center gap-2 md:gap-4">

          {/* Flecha izquierda — solo desktop, al costado */}
          <button
            aria-label="Anterior"
            onClick={() => scrollByCards(-1)}
            className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-redros text-white shadow-lg hover:bg-redros/80 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Riel del carrusel: scroll horizontal (táctil + drag con mouse). */}
          <div
            ref={scrollRef}
            onScroll={onScroll}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerLeave={endDrag}
            className="flex-1 flex gap-4 md:gap-5 overflow-x-auto snap-x snap-mandatory md:snap-none select-none px-2 md:px-0 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
          >
            {LOOP.map((item, i) => renderCard(item, `c-${i}`))}
          </div>

          {/* Flecha derecha — solo desktop, al costado */}
          <button
            aria-label="Siguiente"
            onClick={() => scrollByCards(1)}
            className="hidden md:flex shrink-0 items-center justify-center w-12 h-12 rounded-full bg-redros text-white shadow-lg hover:bg-redros/80 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Controles — solo mobile, debajo del carrusel */}
        <div className="mt-6 flex md:hidden items-center justify-center gap-4">
          <button
            aria-label="Anterior"
            onClick={() => scrollByCards(-1)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-redros text-white shadow-lg hover:bg-redros/80 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            aria-label="Siguiente"
            onClick={() => scrollByCards(1)}
            className="flex items-center justify-center w-12 h-12 rounded-full bg-redros text-white shadow-lg hover:bg-redros/80 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* ── Modal de video a pantalla completa ── */}
      {activeVideo && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          onClick={() => setActiveVideo(null)}
        >
          <button
            aria-label="Cerrar"
            onClick={() => setActiveVideo(null)}
            className="absolute top-4 right-4 z-10 flex items-center justify-center w-11 h-11 rounded-full bg-white/15 text-white hover:bg-white/30 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
          <div
            className="rounded-lg overflow-hidden bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Embed de IG tal cual viene (header + video + pie), sin recortes.
                Ocupa el 90% de la altura de pantalla; el ancho se deriva para
                que entre todo (54px header + media 4:5 + ~190px de pie). */}
            <iframe
              src={activeVideo}
              title="Video El Rosquín"
              className="border-0"
              style={{
                height: "90vh",
                width: "min(92vw, calc((90vh - 244px) * 4 / 5))",
              }}
              allow="autoplay; encrypted-media; clipboard-write; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
