import React from "react";

const DownloadButton = () => (
  <a
    href="/material-definitivo/catalogo-descarga/catalogo-comp.pdf"
    download="Catalogo-El-Rosquin.pdf"
    className="relative inline-block whitespace-nowrap px-8 md:px-10 py-3 md:py-4 drop-shadow-md group cursor-pointer hover:scale-105 transition-transform duration-300"
  >
    {/* Fondo dorado */}
    <div
      className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
      style={{
        backgroundColor: '#CC9933',
        WebkitMaskImage:
          'radial-gradient(circle at 0 0, transparent 10px, black 11px), radial-gradient(circle at 100% 0, transparent 10px, black 11px), radial-gradient(circle at 0 100%, transparent 10px, black 11px), radial-gradient(circle at 100% 100%, transparent 10px, black 11px)',
        WebkitMaskSize: '51% 51%',
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskPosition: 'top left, top right, bottom left, bottom right',
        maskImage:
          'radial-gradient(circle at 0 0, transparent 10px, black 11px), radial-gradient(circle at 100% 0, transparent 10px, black 11px), radial-gradient(circle at 0 100%, transparent 10px, black 11px), radial-gradient(circle at 100% 100%, transparent 10px, black 11px)',
        maskSize: '51% 51%',
        maskRepeat: 'no-repeat',
        maskPosition: 'top left, top right, bottom left, bottom right',
      }}
    />

    {/* Bordes decorativos finos blancos adentro */}
    <div className="absolute top-1 left-[14px] right-[14px] h-[1px] bg-white/30 z-10"></div>
    <div className="absolute bottom-1 left-[14px] right-[14px] h-[1px] bg-white/30 z-10"></div>
    <div className="absolute left-1 top-[14px] bottom-[14px] w-[1px] bg-white/30 z-10"></div>
    <div className="absolute right-1 top-[14px] bottom-[14px] w-[1px] bg-white/30 z-10"></div>

    <div className="absolute top-1 left-1 w-[10px] h-[10px] border-b-[1px] border-r-[1px] border-white/30 rounded-br-full z-10"></div>
    <div className="absolute top-1 right-1 w-[10px] h-[10px] border-b-[1px] border-l-[1px] border-white/30 rounded-bl-full z-10"></div>
    <div className="absolute bottom-1 left-1 w-[10px] h-[10px] border-t-[1px] border-r-[1px] border-white/30 rounded-tr-full z-10"></div>
    <div className="absolute bottom-1 right-1 w-[10px] h-[10px] border-t-[1px] border-l-[1px] border-white/30 rounded-tl-full z-10"></div>

    <span className="relative z-10 font-montserrat text-white text-sm md:text-base font-bold tracking-widest uppercase">
      DESCARGAR CATÁLOGO
    </span>
  </a>
);

export default DownloadButton;
