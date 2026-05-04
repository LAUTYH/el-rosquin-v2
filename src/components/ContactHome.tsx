import React from 'react'

const ContactHome = () => {
  return (
    <section className="w-full bg-[#D1070A] py-20 px-6 flex flex-col items-center justify-center text-white text-center">
      
      {/* SEGUINOS EN NUESTRAS REDES */}
      <div className="flex flex-col items-center mb-6">
        <h3 className="font-dirty-brush text-[45px] md:text-[55px] leading-none mb-1 transform -rotate-3 relative top-3">
          SEGUINOS
        </h3>
        <h2 className="font-bodoni font-bold text-[24px] md:text-[32px] tracking-widest uppercase mb-6 z-10">
          EN NUESTRAS REDES
        </h2>
        
        {/* Social Icons */}
        <div className="flex gap-4 md:gap-5 mt-2">
          <a href="#" className="hover:scale-110 transition-transform">
            <img src="/elementos/icon-instagram.svg" alt="Instagram" className="w-[50px] md:w-[60px] h-auto object-contain" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <img src="/elementos/icon-facebook.svg" alt="Facebook" className="w-[50px] md:w-[60px] h-auto object-contain" />
          </a>
          <a href="#" className="hover:scale-110 transition-transform">
            <img src="/elementos/icon-linkedin.svg" alt="LinkedIn" className="w-[50px] md:w-[60px] h-auto object-contain" />
          </a>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full max-w-[500px] my-10 flex justify-center">
        <img 
          src="/elementos/line-nosotros-low.svg" 
          alt="Línea Separadora" 
          className="w-[80%] max-w-[400px] h-auto object-contain opacity-80" 
        />
      </div>

      {/* ¿QUERÉS CONSULTARNOS ALGO? */}
      <div className="flex flex-col items-center max-w-[600px] mt-2">
        <h2 className="font-bodoni font-bold text-[22px] md:text-[30px] tracking-wider uppercase mb-3">
          ¿QUERÉS CONSULTARNOS ALGO?
        </h2>
        <p className="font-montserrat font-light text-[15px] md:text-[18px] text-white/90 mb-10 leading-relaxed">
          Acá va una frase previa al botón<br className="hidden md:block" /> sobre ponerse en contacto con la empresa.
        </p>

        {/* Button */}
        <button 
          className="bg-[#CC9933] text-[#453D2D] font-bold py-3 md:py-4 px-12 md:px-16 text-sm md:text-[15px] tracking-widest hover:bg-[#d6a848] transition-colors relative"
          style={{
            clipPath: 'polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)'
          }}
        >
          CONTACTANOS
        </button>
      </div>

    </section>
  )
}

export default ContactHome
