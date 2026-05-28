import React from 'react'
import FadeIn from './FadeIn'

const NosotrosSection = () => {
    return (
        <section id="nosotros" className='w-full min-h-[100vh] bg-[#f4f4f4] bg-[url("/fondos/SOLAPA%201.png")] md:bg-[url("/fondos/SOLAPA%201.png")] bg-[length:100%_100%] bg-no-repeat bg-center flex items-center justify-center relative overflow-hidden py-8 md:py-20'>
            <div className='w-full max-w-[1300px] px-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-center'>

                {/* Columna Izquierda: Texto */}
                <FadeIn className='flex flex-col items-center text-center space-y-4 md:mb-4 md:space-y-8' delay={0.2}>
                    {/* Título SVG: Familia, Tradición y Calidad */}
                    <div className='w-full flex justify-center'>
                        <img
                            src="/elementos/nosotros-title.svg"
                            alt="Familia, Tradición y Calidad"
                            className='w-[70%] md:w-full max-w-[380px] h-auto object-contain'
                        />
                    </div>

                    <div className='space-y-3 md:space-y-6 max-w-[1020px]'>
                        <p className='font-bodoni font-bold text-lg md:text-3xl lg:text-[38px] text-darkros leading-snug'>
                            Todo empezó en 1994, en el corazón de Cañada Rosquín, Santa Fe.
                        </p>

                        <p className='font-montserrat text-[#5c5c5c] text-sm md:text-xl lg:text-[24px] leading-relaxed'>
                            Como familia, nos propusimos un objetivo claro: crear fiambres, embutidos y chacinados de excelencia; de esos que se disfrutan en la mesa del domingo.
                        </p>
                    </div>
                </FadeIn>

                {/* Columna Derecha: Placeholder Gris de Imagen */}
                <FadeIn className='flex justify-center items-center w-full' delay={0.4}>
                    <div className='relative w-[50%] md:w-[80%] max-w-[620px] aspect-[4/4.5] bg-[#838383] -rotate-2 flex items-center justify-center shadow-[15px_20px_30px_rgba(0,0,0,0.25)]'>
                        {/* Overlay de las esquinas doradas */}
                        <img
                            src="/elementos/borde-nosotros.svg"
                            alt=""
                            className='absolute inset-0 w-full h-full object-fill pointer-events-none'
                        />
                    </div>
                </FadeIn>

            </div>
        </section>
    )
}

export default NosotrosSection