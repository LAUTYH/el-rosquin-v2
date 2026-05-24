import React from 'react'

const Nosotros3 = () => {
    const backgroundOpacity = 0.6;
    // bg-[length:100%_100%]
    return (
        <section className={`w-full min-h-[100vh] bg-cover bg-center bg-no-repeat relative py-20 px-6 flex items-center justify-center`}
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,${backgroundOpacity}), rgba(0,0,0,${backgroundOpacity})), url("/temporal/foto-equipo-1.png")`,
            }}>

            <div className='flex flex-col items-center justify-center w-full max-w-[850px] text-center space-y-12'>

                {/* Logo Superior */}
                <img
                    src="/elementos/logo-nosotros.svg"
                    alt="Logo Nosotros"
                    className='w-full max-w-[400px] md:max-w-[450px] h-auto object-contain'
                />

                {/* Texto Central */}
                <p className='font-bodoni text-white text-2xl md:text-[38px] leading-snug md:leading-[1.4]'>
                    Orgullosamente decimos: Somos El Rosquín, una empresa familiar que con amor, pasión y profesionalismo, elabora productos que se transforman en grandes momentos.
                </p>

                {/* Línea Inferior */}
                <img
                    src="/elementos/line-nosotros-low.svg"
                    alt="Línea Decorativa Inferior"
                    className='w-full max-w-[400px] md:max-w-[450px] h-auto object-contain'
                />

            </div>

        </section>
    )
}

export default Nosotros3
