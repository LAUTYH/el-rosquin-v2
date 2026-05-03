import React from 'react'

const NosotrosSection = () => {
    return (
        <section className='w-full min-h-[100vh] mt-[-100px] bg-[#f4f4f4] bg-[url("/fondos/SOLAPA%201.png")] bg-cover bg-center flex items-center justify-center relative overflow-hidden py-20'>

            <div className='w-full max-w-[1300px] px-6 py-[-10] grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center'>

                {/* Columna Izquierda: Texto */}
                <div className='flex flex-col items-center text-center space-y-6 md:space-y-8'>

                    {/* Título SVG: Familia, Tradición y Calidad */}
                    <div className='w-full flex justify-center'>
                        <img
                            src="/elementos/nosotros-title.svg"
                            alt="Familia, Tradición y Calidad"
                            className='w-[80%] max-w-[380px] h-auto object-contain'
                        />
                    </div>

                    <div className='space-y-6 max-w-[820px]'>
                        <p className='font-bodoni font-bold text-2xl md:text-[38px] text-darkros leading-snug'>
                            Todo empezó en 1994, en el corazón de Cañada Rosquín, Santa Fe.
                        </p>

                        <p className='font-montserrat text-[#5c5c5c] text-2xl md:text-[24px] leading-relaxed'>
                            Como familia, nos propusimos un objetivo claro: crear fiambres, embutidos y chacinados de excelencia; de esos que se disfrutan en la mesa del domingo.
                        </p>
                    </div>
                </div>

                {/* Columna Derecha: Placeholder Gris de Imagen */}
                <div className='flex justify-center items-center w-full'>
                    <div className='relative w-[80%] max-w-[620px] aspect-[4/4.5] bg-[#838383] -rotate-2 flex items-center justify-center shadow-[15px_20px_30px_rgba(0,0,0,0.25)]'>
                        {/* Overlay de las esquinas doradas */}
                        <img
                            src="/elementos/borde-nosotros.svg"
                            alt=""
                            className='absolute inset-0 w-full h-full object-fill pointer-events-none'
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default NosotrosSection