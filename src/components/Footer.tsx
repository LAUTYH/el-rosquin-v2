import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="w-full bg-darkros pt-16 pb-6 px-6 font-montserrat">
            <div className="max-w-[1200px] mx-auto flex flex-col items-center">
                
                {/* Logo Pequeño */}
                <div className="mb-10">
                    <img 
                        src="/elementos/el-rosquin.svg" 
                        alt="El Rosquín" 
                        className="w-[140px] md:w-[180px] h-auto object-contain"
                    />
                </div>

                {/* Menú de Navegación Rápido */}
                <nav className="grid grid-cols-2 gap-x-8 gap-y-4 max-w-[280px] w-full text-center md:flex md:flex-row md:max-w-none md:justify-center md:gap-12 text-white text-sm md:text-base font-bold tracking-wider mb-10">
                    <Link href="/" className="hover:text-goldenros transition-colors">INICIO</Link>
                    <Link href="/#nosotros" className="hover:text-goldenros transition-colors">NOSOTROS</Link>
                    <Link href="/productos" className="hover:text-goldenros transition-colors">PRODUCTOS</Link>
                    <Link href="/contacto" className="hover:text-goldenros transition-colors">CONTACTO</Link>
                </nav>

                {/* Legales + Data Fiscal (AFIP) */}
                <div className="w-full flex flex-col items-center gap-6 mb-10">
                    <Link
                        href="/politica-de-privacidad"
                        className="text-white/80 text-xs md:text-sm font-bold tracking-wider hover:text-goldenros transition-colors"
                    >
                        POLÍTICA DE PRIVACIDAD
                    </Link>
                    <a
                        href="http://qr.afip.gob.ar/?qr=KTwiSPCTiqI5YzbCNUBHeA,,"
                        target="_F960AFIPInfo"
                        rel="noopener noreferrer"
                        className="inline-block"
                        aria-label="Data Fiscal - AFIP"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src="/afip-data-fiscal.jpg"
                            alt="Data Fiscal - AFIP"
                            className="h-[72px] w-auto"
                        />
                    </a>
                </div>

                {/* Línea Divisoria */}
                <hr className="w-full border-t border-white/20 mb-6" />

                {/* Bottom Spans */}
                <div className="w-full flex flex-col md:flex-row justify-between items-center text-white text-xs md:text-sm space-y-4 md:space-y-0">
                    <span className="font-semibold text-white/90">
                        ©2026 El Rosquín - Todos los derechos reservados.
                    </span>
                    <span className="font-light text-white/80 flex items-center">
                        Diseño y Desarrollo 
                        <span className="text-goldenros font-extrabold text-base md:text-lg ml-2 tracking-wide">Camba.</span>
                    </span>
                </div>

            </div>
        </footer>
    )
}

export default Footer
