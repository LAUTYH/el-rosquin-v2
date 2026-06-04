import React from 'react'
import FadeIn from './FadeIn'

const Nosotros2 = () => {
    return (
        <section className='w-full min-h-[100vh] bg-[#fdf5cc] bg-[url("/material-definitivo/home-imagenes/nosotros2-fondo.png")] md:bg-[url("/material-definitivo/home-imagenes/nosotros2-fondo.png")] lg:bg-[url("/material-definitivo/home-imagenes/nosotros2-fondo-mobile.png")] bg-[length:100%_100%] bg-no-repeat bg-center flex items-center justify-center relative overflow-hidden py-12 md:py-20'>

            {/* Capa de borde entre el background y el contenido (solo escritorio) */}
            <div className='absolute hidden md:flex items-center justify-center inset-0 w-full h-full p-4 md:p-10 lg:p-16 pointer-events-none z-0 pb-6 md:pb-10'>
                {/* SVG Horizontal para Escritorio */}
                <img
                    src="/elementos/borde-nosotros.svg"
                    alt=""
                    className='hidden md:block w-full h-full max-w-[1400px] max-h-[1200px] object-fill opacity-70'
                />
                {/* SVG Vertical para Mobile */}
                <img
                    src="/elementos/borde-nosotros-vertical.svg"
                    alt=""
                    className='block md:hidden w-full h-full max-w-[1400px] max-h-[1200px] object-fill opacity-70'
                />
            </div>

            <div className='w-full max-w-[1300px] px-6 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center relative z-10'>

                {/* Columna Izquierda: Imagen Picada */}
                <FadeIn className='flex justify-center md:justify-end items-center w-full' delay={0.2}>
                    <img
                        src="/material-definitivo/home-imagenes/foto-nosotros2.png"
                        alt="Elaboración artesanal El Rosquín"
                        className='w-[75%] md:w-[90%] max-w-[550px] h-auto object-contain'
                    />
                </FadeIn>

                {/* Columna Derecha: Texto */}
                <FadeIn className='flex flex-col items-center md:items-start text-center md:text-left px-2 md:px-0' delay={0.4}>
                    <h2 className='font-bodoni font-bold text-[22px] md:text-3xl lg:text-[38px] text-redros leading-tight max-w-[580px]'>
                        Hoy, treinta años después, llegamos a todo el país y nuestra filosofía sigue intacta.
                    </h2>

                    <p className='font-montserrat text-[#453D2D] text-base md:text-xl lg:text-[24px] leading-relaxed max-w-[580px] mt-6 md:mt-8'>
                        Seguimos elaborando cada producto de manera artesanal, respetando los tiempos que exige la tradición, utilizando especias naturales y seleccionando cuidadosamente nuestra materia prima. Porque entendemos que un buen fiambre no se fabrica, se elabora.
                    </p>
                </FadeIn>

            </div>
        </section>
    )
}

export default Nosotros2
