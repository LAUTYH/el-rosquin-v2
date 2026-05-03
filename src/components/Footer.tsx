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
                <nav className="flex flex-wrap justify-center gap-6 md:gap-12 text-white text-sm md:text-base font-bold tracking-wider mb-10">
                    <Link href="#" className="hover:text-goldenros transition-colors">INICIO</Link>
                    <Link href="#" className="hover:text-goldenros transition-colors">NOSOTROS</Link>
                    <Link href="#" className="hover:text-goldenros transition-colors">PRODUCTOS</Link>
                    <Link href="#" className="hover:text-goldenros transition-colors">CONTACTO</Link>
                </nav>

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
