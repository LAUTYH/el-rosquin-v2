import React from 'react'

const Nosotros2 = () => {
    return (
        <section className='w-full min-h-[100vh] bg-[#fdf5cc] bg-[url("/fondos/SOLAPA-2.png")] md:bg-[url("/fondos/SOLAPA-2.png")] bg-[length:100%_100%] bg-no-repeat bg-center flex items-center justify-center relative overflow-hidden py-12 md:py-20'>

            {/* Capa de borde entre el background y el contenido */}
            <div className='absolute flex items-center justify-center inset-0 w-full h-full p-4 md:p-10 lg:p-16 pointer-events-none z-0 pb-6 md:pb-10'>
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
                <div className='flex justify-center md:justify-end items-center w-full'>
                    <img
                        src="/fondos/nosotros2-columna-left.png"
                        alt="Tabla de Fiambres"
                        className='w-[75%] md:w-[90%] max-w-[550px] h-auto object-contain'
                    />
                </div>

                {/* Columna Derecha: Texto */}
                <div className='flex flex-col items-center md:items-start text-center md:text-left px-2 md:px-0'>
                    <h2 className='font-bodoni font-bold text-[22px] md:text-3xl lg:text-[38px] text-redros leading-tight max-w-[580px]'>
                        Hoy, treinta años después, llegamos a todo el país y nuestra filosofía sigue intacta.
                    </h2>

                    <p className='font-montserrat text-[#453D2D] text-base md:text-xl lg:text-[24px] leading-relaxed max-w-[580px] mt-6 md:mt-8'>
                        Seguimos elaborando cada producto de manera artesanal, respetando los tiempos que exige la tradición, utilizando especias naturales y seleccionando cuidadosamente nuestra materia prima. Porque entendemos que un buen fiambre no se fabrica, se elabora.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Nosotros2
