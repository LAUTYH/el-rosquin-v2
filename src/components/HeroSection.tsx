import React from 'react'

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
            <div className='relative z-10 w-full max-w-[800px] px-6 -translate-y-16'>
                <img className='w-full h-auto object-contain' src="/elementos/hero-eslogan.svg" alt="Hero Eslogan" />
            </div>
        </section>
    )
}

export default HeroSection