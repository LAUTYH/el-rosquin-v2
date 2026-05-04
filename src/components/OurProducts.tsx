"use client"
import React, { useState } from 'react'

const productsData = [
  { id: 'secos', svg: '/elementos/linea-secos.svg', img: '/imgs-products/secos.png' },
  { id: 'maduracion', svg: '/elementos/linea-maduracion.svg', img: '/imgs-products/maduracion.png' },
  { id: 'fiambres', svg: '/elementos/linea-fiabres.svg', img: '/imgs-products/fiambres.png' },
  { id: 'tradicion', svg: '/elementos/linea-tradicion.svg', img: '/imgs-products/tradicion.png' },
];

const OurProducts = () => {
  const [activeIndex, setActiveIndex] = useState(2); // Inicia con fiambres

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? productsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === productsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full min-h-[100vh] bg-[#3a3528] bg-[url('/fondos/PRODUCTOS.png')] bg-[length:100%_100%] bg-no-repeat bg-center flex flex-col items-center justify-center relative py-20 px-6 font-montserrat overflow-hidden">
      
      {/* Título */}
      <div className="text-center mb-10 mt-8">
        <h2 className="font-bodoni font-bold text-white text-[24px] md:text-[32px] tracking-widest uppercase mb-[-15px] md:mb-[-20px] relative z-10">
          Nuestra Línea
        </h2>
        <h3 className="font-dirty-brush text-goldenros text-[50px] md:text-[75px] tracking-wider transform -rotate-3 relative z-20">
          DE PRODUCTOS
        </h3>
      </div>

      {/* Tabs / Botones SVG */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 max-w-[1000px]">
        {productsData.map((item, index) => (
          <button 
            key={item.id}
            onClick={() => setActiveIndex(index)}
            className={`transition-all duration-300 ease-in-out hover:scale-105 focus:outline-none 
              ${activeIndex === index ? 'opacity-100 scale-105' : 'opacity-40 hover:opacity-80'}`}
          >
            <img 
              src={item.svg} 
              alt={item.id} 
              className="h-[70px] md:h-[100px] w-auto object-contain"
            />
          </button>
        ))}
      </div>

      {/* Imagen Principal y Flechas */}
      <div className="flex items-center justify-center w-full max-w-[1200px] mb-12 relative">
        
        {/* Flecha Izquierda */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 md:left-8 z-10 w-10 h-10 md:w-12 md:h-12 border border-white/40 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors bg-black/10"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Contenedor de Imagen de Producto */}
        <div className="flex justify-center items-center w-full h-[250px] md:h-[450px]">
          <img 
            key={productsData[activeIndex].id}
            src={productsData[activeIndex].img} 
            alt={productsData[activeIndex].id} 
            className="w-full h-full max-w-[900px] object-contain transition-opacity duration-500"
          />
        </div>

        {/* Flecha Derecha */}
        <button 
          onClick={handleNext}
          className="absolute right-0 md:right-8 z-10 w-10 h-10 md:w-12 md:h-12 border border-white/40 rounded-full flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-colors bg-black/10"
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
        </button>

      </div>

      {/* Texto Descriptivo */}
      <div className="text-center max-w-[850px] mb-12 px-4 space-y-3">
        <p className="text-white font-bold text-lg md:text-[22px] leading-snug">
          Producimos alimentos para ser los protagonistas de tus mejores momentos.
        </p>
        <p className="text-[#d1d1d1] text-sm md:text-[18px] font-normal leading-relaxed">
          Trabajamos con dedicación y pasión para ofrecer chacinados de alta calidad<br className="hidden md:block"/> y un sabor único.
        </p>
      </div>

      {/* Botones de Acción */}
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
        <button className="bg-goldenros text-darkros font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm text-sm md:text-base tracking-widest hover:bg-[#d6a848] transition-colors">
          VER PRODUCTOS
        </button>
        <button className="bg-transparent border border-goldenros text-white font-bold py-3 md:py-4 px-8 md:px-10 rounded-sm text-sm md:text-base tracking-widest hover:bg-goldenros/10 transition-colors">
          DESCARGAR CATÁLOGO
        </button>
      </div>

    </section>
  )
}

export default OurProducts
