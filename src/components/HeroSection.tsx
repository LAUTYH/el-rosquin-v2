import React from 'react'

const HeroSection = () => {
    return (
        <section className='bg-gray-500 h-[100vh] w-full flex items-center justify-center overflow-hidden'>
            {/* 
              1. w-full max-w-[800px]: Controla el ancho del contenido (podés cambiar 800px por el valor que quieras).
              2. -translate-y-20 o mb-20: Lo mueve un poco más arriba del centro vertical.
              3. px-6: Para que no toque los bordes en celulares.
            */}
            <div className='w-full max-w-[800px] px-6 -translate-y-16'>
                <img className='w-full h-auto object-contain' src="/elementos/hero-eslogan.svg" alt="Hero Eslogan" />
            </div>
        </section>
    )
}

export default HeroSection