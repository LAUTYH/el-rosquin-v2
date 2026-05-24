import React from "react";

export default function NutritionalBadge({ title }: { title: string }) {
  return (
    <div className="relative inline-block px-10 py-3 mb-6 drop-shadow-md">
      {/* Usamos el mismo clip-path / mask que el botón de descarga, pero como fondo sólido */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: '#CC9933', // goldenros
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
      
      {/* Bordes decorativos finos oscuros adentro */}
      <div className="absolute top-1 left-[14px] right-[14px] h-[1px] bg-darkros/30 z-10"></div>
      <div className="absolute bottom-1 left-[14px] right-[14px] h-[1px] bg-darkros/30 z-10"></div>
      <div className="absolute left-1 top-[14px] bottom-[14px] w-[1px] bg-darkros/30 z-10"></div>
      <div className="absolute right-1 top-[14px] bottom-[14px] w-[1px] bg-darkros/30 z-10"></div>

      <div className="absolute top-1 left-1 w-[10px] h-[10px] border-b-[1px] border-r-[1px] border-darkros/30 rounded-br-full z-10"></div>
      <div className="absolute top-1 right-1 w-[10px] h-[10px] border-b-[1px] border-l-[1px] border-darkros/30 rounded-bl-full z-10"></div>
      <div className="absolute bottom-1 left-1 w-[10px] h-[10px] border-t-[1px] border-r-[1px] border-darkros/30 rounded-tr-full z-10"></div>
      <div className="absolute bottom-1 right-1 w-[10px] h-[10px] border-t-[1px] border-l-[1px] border-darkros/30 rounded-tl-full z-10"></div>

      <h3 className="relative z-10 font-montserrat text-darkros text-sm md:text-base font-bold tracking-widest uppercase">
        {title}
      </h3>
    </div>
  );
}
