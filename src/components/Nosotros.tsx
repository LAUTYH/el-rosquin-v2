import FadeIn from './FadeIn'

const NosotrosSection = () => {
    return (
        <section id="nosotros" className='w-full min-h-[100vh] bg-[#f4f4f4] bg-[url("/material-definitivo/home-imagenes/nosotros-fondo-mobile.png")] md:bg-[url("/material-definitivo/home-imagenes/nosotros-fondo.png")] bg-[length:100%_100%] bg-no-repeat bg-center flex items-start md:items-center justify-center relative overflow-hidden pt-16 pb-8 md:py-20'>
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
                            Todo empezó en 1994, en el corazón de <br className="block sm:hidden" /> Cañada Rosquín, Santa Fe.
                        </p>

                        <p className='font-montserrat text-[#5c5c5c] text-sm md:text-xl lg:text-[24px] leading-relaxed'>
                            Como familia, nos propusimos un objetivo claro: crear fiambres, embutidos y chacinados de excelencia; de esos que se disfrutan en la mesa del domingo.
                        </p>
                    </div>
                </FadeIn>

                {/* Columna Derecha: Placeholder Gris de Imagen */}
                <FadeIn className='flex justify-center items-center w-full' delay={0.4}>
                    <img
                        src="/material-definitivo/home-imagenes/foto-nosotros.png"
                        alt="Familia El Rosquín"
                        className='w-[80%] md:w-[90%] max-w-[620px] h-auto object-contain pointer-events-none drop-shadow-[0_6px_12px_rgba(0,0,0,0.2)]'
                    />
                </FadeIn>

            </div>
        </section>
    )
}

export default NosotrosSection