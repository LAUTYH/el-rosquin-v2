"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Extraemos el botón a un componente local para reutilizarlo en Desktop y Mobile
const DownloadButton = () => (
    <button className="group relative px-10 py-5 text-white font-bold tracking-widest text-lg transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] cursor-pointer">
        {/* Fondo animado que respeta las esquinas invertidas (scalloped corners) con CSS masks */}
        <div
            className="absolute top-2 left-2 right-2 bottom-2 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
            style={{
                WebkitMaskImage: 'radial-gradient(circle at 0 0, transparent 14px, black 15px), radial-gradient(circle at 100% 0, transparent 14px, black 15px), radial-gradient(circle at 0 100%, transparent 14px, black 15px), radial-gradient(circle at 100% 100%, transparent 14px, black 15px)',
                WebkitMaskSize: '51% 51%',
                WebkitMaskRepeat: 'no-repeat',
                WebkitMaskPosition: 'top left, top right, bottom left, bottom right',
                maskImage: 'radial-gradient(circle at 0 0, transparent 14px, black 15px), radial-gradient(circle at 100% 0, transparent 14px, black 15px), radial-gradient(circle at 0 100%, transparent 14px, black 15px), radial-gradient(circle at 100% 100%, transparent 14px, black 15px)',
                maskSize: '51% 51%',
                maskRepeat: 'no-repeat',
                maskPosition: 'top left, top right, bottom left, bottom right'
            }}
        ></div>

        {/* Líneas rectas de 3px, iniciando a 23px para empalmar perfecto */}
        <div className="absolute top-2 left-[23px] right-[23px] h-[3px] bg-white z-10"></div>
        <div className="absolute bottom-2 left-[23px] right-[23px] h-[3px] bg-white z-10"></div>
        <div className="absolute left-2 top-[23px] bottom-[23px] w-[3px] bg-white z-10"></div>
        <div className="absolute right-2 top-[23px] bottom-[23px] w-[3px] bg-white z-10"></div>

        {/* Esquinas reducidas a 15px con grosor de 3px */}
        <div className="absolute top-2 left-2 w-[15px] h-[15px] border-b-[3px] border-r-[3px] border-white rounded-br-full z-10"></div>
        <div className="absolute top-2 right-2 w-[15px] h-[15px] border-b-[3px] border-l-[3px] border-white rounded-bl-full z-10"></div>
        <div className="absolute bottom-2 left-2 w-[15px] h-[15px] border-t-[3px] border-r-[3px] border-white rounded-tr-full z-10"></div>
        <div className="absolute bottom-2 right-2 w-[15px] h-[15px] border-t-[3px] border-l-[3px] border-white rounded-tl-full z-10"></div>

        {/* Texto */}
        <span className="relative text-nowrap z-10 group-hover:text-redros transition-colors duration-500">DESCARGAR CATÁLOGO</span>
    </button>
);

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    // Animación de GSAP para el menú
    useGSAP(() => {
        gsap.set(menuRef.current, { xPercent: 100 });

        tl.current = gsap.timeline({ paused: true })
            .to(menuRef.current, { xPercent: 0, duration: 0.5, ease: "power3.inOut" })
            .from(".mobile-nav-item", { x: 50, opacity: 0, duration: 0.4, stagger: 0.1, ease: "power2.out" }, "-=0.2");
    }, { scope: menuRef });

    // Ejecutamos la animación según el estado del menú
    useGSAP(() => {
        if (isMenuOpen) {
            tl.current?.play();
        } else {
            tl.current?.reverse();
        }
    }, [isMenuOpen]);

    return (
        <header className="relative w-full z-[100]">
            <div className="bg-redros h-[100px] w-full flex justify-center items-center relative z-50">

                {/* EL LOGO QUEDA A LA IZQUIERDA EN MOBILE Y EN SU POSICIÓN ORIGINAL EN DESKTOP */}
                <div id="logo" className="lg:mr-10">
                    <img className="size-42 absolute left-4 md:left-6 lg:left-auto translate-x-0 my-[-66px] cursor-pointer" src="temporal/logo-er.svg" alt="El Rosquin" />
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex ml-58 justify-between items-center gap-10">
                    <nav id="nav-header" className="font-montserrat font-medium flex gap-16 w-full justify-center text-sm list-none text-white">
                        <li className="cursor-pointer font-bold">Inicio</li>
                        <li className="cursor-pointer">Nosotros</li>
                        <li className="cursor-pointer">Productos</li>
                        <li className="cursor-pointer">Contacto</li>
                    </nav>
                    <div>
                        <DownloadButton />
                    </div>
                </div>

                {/* Mobile Burger Icon */}
                <button
                    className="lg:hidden absolute right-6 text-white z-[60] p-2 focus:outline-none"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className="w-8 h-6 flex flex-col justify-between items-center relative">
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isMenuOpen ? "rotate-45 translate-y-2.5 absolute top-0" : ""}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : "opacity-100"}`} />
                        <span className={`h-1 w-full bg-white rounded-lg transform transition duration-300 ease-in-out ${isMenuOpen ? "-rotate-45 -translate-y-2.5 absolute bottom-0" : ""}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                ref={menuRef}
                className="fixed inset-0 bg-redros z-[40] flex flex-col items-center justify-center lg:hidden"
            >
                <nav className="font-montserrat font-medium flex flex-col gap-10 items-center text-2xl list-none text-white mb-12">
                    <li className="mobile-nav-item cursor-pointer font-bold hover:text-[#fdf5cc] transition-colors" onClick={() => setIsMenuOpen(false)}>Inicio</li>
                    <li className="mobile-nav-item cursor-pointer hover:text-[#fdf5cc] transition-colors" onClick={() => setIsMenuOpen(false)}>Nosotros</li>
                    <li className="mobile-nav-item cursor-pointer hover:text-[#fdf5cc] transition-colors" onClick={() => setIsMenuOpen(false)}>Productos</li>
                    <li className="mobile-nav-item cursor-pointer hover:text-[#fdf5cc] transition-colors" onClick={() => setIsMenuOpen(false)}>Contacto</li>
                </nav>
                <div className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
                    <DownloadButton />
                </div>
            </div>
        </header>
    );
}