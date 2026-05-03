import React from 'react'

const Nosotros2 = () => {
    return (
        <section className='w-full min-h-[100vh] bg-[#fdf5cc] bg-[url("/fondos/SOLAPA-2.png")] bg-cover bg-center flex items-center justify-center relative overflow-hidden py-20'>

            {/* Capa de borde entre el background y el contenido */}
            <div className='absolute flex items-center justify-center inset-0 w-full h-full p-4 md:p-10 lg:p-16 pointer-events-none z-0 pb-10'>
                <img
                    src="/elementos/borde-nosotros.svg"
                    alt=""
                    className='w-[90%] max-w-[1400px] object-fill opacity-70'
                />
            </div>

            <div className='w-full max-w-[1300px] px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>

                {/* Columna Izquierda: Imagen Picada */}
                <div className='flex justify-center md:justify-end items-center w-full'>
                    <img
                        src="/fondos/nosotros2-columna-left.png"
                        alt="Tabla de Fiambres"
                        className='w-[90%] max-w-[550px] h-auto object-contain'
                    />
                </div>

                {/* Columna Derecha: Texto */}
                <div className='flex flex-col items-center md:items-start text-center md:text-left'>
                    <h2 className='font-bodoni font-bold text-[38px] text-redros leading-tight max-w-[580px]'>
                        Hoy, treinta años después, llegamos a todo el país y nuestra filosofía sigue intacta.
                    </h2>

                    <p className='font-montserrat text-[#453D2D] text-[24px] leading-relaxed max-w-[580px] mt-8'>
                        Seguimos elaborando cada producto de manera artesanal, respetando los tiempos que exige la tradición, utilizando especias naturales y seleccionando cuidadosamente nuestra materia prima. Porque entendemos que un buen fiambre no se fabrica, se elabora.
                    </p>
                </div>

            </div>
        </section>
    )
}

export default Nosotros2
