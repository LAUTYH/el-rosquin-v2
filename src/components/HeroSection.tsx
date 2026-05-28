import React from 'react'
import { ChevronDown } from 'lucide-react'
import FadeIn from './FadeIn'

const HeroSection = () => {
    // Podés regular la oscuridad ajustando el valor de 'opacity' (0.1 es muy oscuro, 1.0 es la imagen original)
    const backgroundOpacity = 0.6; 

    return (
        <section className="relative h-[100vh] w-full flex items-center justify-center overflow-hidden bg-black">
            {/* Capa de Fondo con Opacidad Regulable */}
            <div 
                className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
                style={{ 
                    backgroundImage: "url('/fondos/fondo-prueba-1.jpg')",
                    opacity: backgroundOpacity 
                }}
            />

            {/* Contenido (Eslogan) */}
            <FadeIn className='relative z-10 w-full max-w-[800px] px-6 -translate-y-16' delay={0.2} duration={1.2}>
                <img className='w-full h-auto object-contain' src="/elementos/hero-eslogan.svg" alt="Hero Eslogan" />
            </FadeIn>

            {/* Flecha indicadora de scroll con rebote */}
            <FadeIn className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center" delay={2.5}>
                <div className="flex flex-col items-center animate-bounce">
                    <ChevronDown className="text-goldenros w-8 h-8" strokeWidth={2.5} />
                </div>
            </FadeIn>
        </section>
    )
}

export default HeroSection