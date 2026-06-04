"use client"
import React, { useState } from 'react'
import BadgeButton from './BadgeButton'

const productsData = [
  { id: 'secos', svg: '/sellos/sello-secos.svg', img: '/material-definitivo/home-productos-img/secos.png' },
  { id: 'maduracion', svg: '/sellos/sello-maduracion.svg', img: '/material-definitivo/home-productos-img/maduracion.png' },
  { id: 'fiambres', svg: '/sellos/sello-fiambres.svg', img: '/material-definitivo/home-productos-img/fiambres.png' },
  { id: 'tradicion', svg: '/sellos/sello-tradicion.svg', img: '/material-definitivo/home-productos-img/tradicion.png' },
];

const OurProducts = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Inicia con fiambres

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? productsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === productsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full min-h-[100vh] md:h-screen bg-[#3a3528] bg-[url('/material-definitivo/home-imagenes/fondo-ourproducts-mobile.webp')] md:bg-[url('/fondos/PRODUCTOS.webp')] bg-[length:100%_100%] bg-no-repeat bg-center flex flex-col items-center justify-center relative py-20 md:py-6 px-6 font-montserrat overflow-hidden">

      {/* Título */}
      <div className="text-center mb-6 md:mb-4 mt-8 md:mt-0">
        <h2 className="font-bodoni font-bold text-white text-[24px] md:text-[32px] tracking-widest uppercase mb-[-15px] md:mb-[-20px] relative z-10">
          Nuestra Línea
        </h2>
        <h3 className="font-dirty-brush text-goldenros text-[50px] md:text-[75px] tracking-wider relative z-20 [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
          DE PRODUCTOS
        </h3>
      </div>

      {/* Tabs / Botones SVG */}
      <div className="grid grid-cols-2 gap-4 justify-items-center md:flex md:flex-wrap md:justify-center md:gap-8 mb-6 md:mb-4 max-w-[1000px]">
        {productsData.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none flex justify-center items-center
              ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-80'}`}
          >
            <img
              src={item.svg}
              alt={item.id}
              className="h-[70px] md:h-[90px] w-auto object-contain"
            />
          </button>
        ))}
      </div>

      {/* Imagen Principal y Flechas */}
      <div className="flex flex-col items-center justify-center w-full max-w-[1200px] mb-6 md:mb-4 relative">

        {/* Contenedor de Imagen de Producto */}
        <div className="flex justify-center items-center w-full h-[250px] md:h-[340px]">
          <img
            key={productsData[activeIndex].id}
            src={productsData[activeIndex].img}
            alt={productsData[activeIndex].id}
            className="w-full h-full max-w-[900px] object-contain transition-opacity duration-500"
          />
        </div>

        {/* Contenedor de flechas: abajo en mobile, absolute en desktop para no ocupar espacio */}
        <div className="flex w-full justify-center gap-16 mt-4 md:mt-0 md:absolute md:inset-0 md:items-center md:pointer-events-none">

          {/* Flecha Izquierda */}
          <button
            onClick={handlePrev}
            className="md:pointer-events-auto static md:absolute md:left-8 z-10 w-12 h-12 border border-white/40 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors bg-black/10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
          </button>

          {/* Flecha Derecha */}
          <button
            onClick={handleNext}
            className="md:pointer-events-auto static md:absolute md:right-8 z-10 w-12 h-12 border border-white/40 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors bg-black/10"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
          </button>

        </div>
      </div>

      {/* Texto Descriptivo */}
      <div className="text-center max-w-[850px] mb-6 md:mb-4 px-4 space-y-2">
        <p className="text-white font-bold text-lg md:text-[22px] leading-snug">
          Producimos alimentos para ser los  protagonistas <br className="hidden md:block" />de tus mejores momentos.
        </p>
        <p className="text-[#d1d1d1] text-sm md:text-[18px] font-normal leading-relaxed">
          Trabajamos con dedicación y pasión para ofrecer <br className="hidden md:block" /> chacinados de alta calidad y un sabor único.
        </p>
      </div>

      {/* Botones de Acción */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        <BadgeButton href="/productos#lineas">
          VER PRODUCTOS
        </BadgeButton>
        <BadgeButton
          dark={true}
          href="/material-definitivo/catalogo-descarga/catalogo-el-rosquin-2026.pdf"
          download="catalogo-el-rosquin-2026.pdf"
        >
          DESCARGAR CATÁLOGO
        </BadgeButton>
      </div>

    </section>
  )
}

export default OurProducts
