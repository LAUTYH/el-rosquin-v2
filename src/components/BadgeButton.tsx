import React from 'react';
import Link from 'next/link';

interface BadgeButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  className?: string;
  dark?: boolean;
}

export default function BadgeButton({ children, onClick, href, className = '', dark = false }: BadgeButtonProps) {

  const bgColor = dark ? '#453D2D' : '#CC9933';
  const textColor = dark ? 'text-white' : 'text-darkros';
  const bgLineClass = dark ? 'bg-white/30' : 'bg-darkros/30';
  const borderLineClass = dark ? 'border-white/30' : 'border-darkros/30';

  const innerContent = (
    <>
      <div
        className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-90"
        style={{
          backgroundColor: bgColor,
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
      <div className={`absolute top-1 left-[14px] right-[14px] h-[1px] ${bgLineClass} z-10`}></div>
      <div className={`absolute bottom-1 left-[14px] right-[14px] h-[1px] ${bgLineClass} z-10`}></div>
      <div className={`absolute left-1 top-[14px] bottom-[14px] w-[1px] ${bgLineClass} z-10`}></div>
      <div className={`absolute right-1 top-[14px] bottom-[14px] w-[1px] ${bgLineClass} z-10`}></div>

      <div className={`absolute top-1 left-1 w-[10px] h-[10px] border-b-[1px] border-r-[1px] ${borderLineClass} rounded-br-full z-10`}></div>
      <div className={`absolute top-1 right-1 w-[10px] h-[10px] border-b-[1px] border-l-[1px] ${borderLineClass} rounded-bl-full z-10`}></div>
      <div className={`absolute bottom-1 left-1 w-[10px] h-[10px] border-t-[1px] border-r-[1px] ${borderLineClass} rounded-tr-full z-10`}></div>
      <div className={`absolute bottom-1 right-1 w-[10px] h-[10px] border-t-[1px] border-l-[1px] ${borderLineClass} rounded-tl-full z-10`}></div>

      <span className={`relative z-10 font-montserrat ${textColor} text-sm md:text-base font-bold tracking-widest uppercase`}>
        {children}
      </span>
    </>
  );

  const containerClasses = `relative inline-block whitespace-nowrap px-8 md:px-10 py-3 md:py-4 drop-shadow-md group cursor-pointer hover:scale-105 transition-transform duration-300 ${className}`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={containerClasses}>
      {innerContent}
    </button>
  );
}
