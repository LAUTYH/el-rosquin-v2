import React from 'react'
import FadeIn from './FadeIn'

const Nosotros3 = () => {
    return (
        <section className='w-full min-h-[100vh] bg-cover bg-center bg-no-repeat relative px-6 pt-20 md:pt-28 pb-20 flex items-start justify-center bg-[url("/material-definitivo/home-imagenes/nosotros3-fondo-mobile.png")] md:bg-[url("/material-definitivo/home-imagenes/nosotros3-fondo.png")]'>

            {/* Overlay oscuro para que el texto se lea sobre la foto */}
            <div className='absolute inset-0 bg-black/40' />

            <div className='flex flex-col items-center w-full max-w-[760px] text-center space-y-6 md:space-y-8 relative z-10'>

                {/* Logo Superior */}
                <FadeIn delay={0.1}>
                    <img
                        src="/elementos/logo-nosotros.svg"
                        alt="Logo Nosotros"
                        className='w-full max-w-[320px] md:max-w-[420px] h-auto object-contain'
                    />
                </FadeIn>

                {/* Texto Central */}
                <FadeIn delay={0.3}>
                    <p className='font-bodoni font-bold text-white text-[24px] md:text-2xl lg:text-4xl leading-snug md:leading-[1.4]'>
                        Orgullosamente decimos: <br className="block sm:hidden" /> Somos El Rosquín
                    </p>
                    <p className='font-bodoni text-white text-[24px] md:text-2xl lg:text-4xl leading-snug md:leading-[1.4]'>
                        Una empresa familiar que con amor, pasión y profesionalismo, elabora productos que se transforman en grandes momentos.
                    </p>
                </FadeIn>

            </div>

        </section>
    )
}

export default Nosotros3
