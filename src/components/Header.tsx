"use client";
import Link from "next/link";
import { useState, useRef } from "react";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import DownloadButton from "@/components/DownloadButton";

export default function Header() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const tl = useRef<gsap.core.Timeline | null>(null);

    const navItems = [
        { label: "Inicio", href: "/" },
        { label: "Nosotros", href: "/#nosotros" },
        { label: "Productos", href: "/productos" },
        { label: "Contacto", href: "/contacto" },
    ];

    const isActive = (href: string) => {
        if (href === "/" && pathname === "/") return true;
        if (href !== "/" && pathname === href) return true;
        return false;
    };

    const handleNosotrosClick = (e: React.MouseEvent) => {
        if (pathname === "/") {
            e.preventDefault();
            // @ts-ignore
            window.lenis?.scrollTo("#nosotros", { duration: 2, easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
        }
    };

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
                    <Link href="/">
                        <img className="size-42 absolute left-4 md:left-6 lg:left-auto translate-x-0 my-[-66px] cursor-pointer" src="temporal/logo-er.svg" alt="El Rosquin" />
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex ml-58 justify-between items-center gap-10">
                    <nav id="nav-header" className="font-montserrat font-medium flex gap-16 w-full justify-center text-sm list-none text-white">
                        {navItems.map((item) => (
                            <li key={item.href}>
                                <Link 
                                    href={item.href} 
                                    onClick={item.label === "Nosotros" ? handleNosotrosClick : undefined}
                                    className={`cursor-pointer transition-all duration-300 ${isActive(item.href) ? "font-bold" : "font-normal"}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
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
                    {navItems.map((item) => (
                        <li 
                            key={item.href}
                            className={`mobile-nav-item cursor-pointer hover:text-[#fdf5cc] transition-colors ${isActive(item.href) ? "font-bold" : "font-normal"}`} 
                            onClick={() => setIsMenuOpen(false)}
                        >
                            <Link 
                                href={item.href}
                                onClick={item.label === "Nosotros" ? handleNosotrosClick : undefined}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </nav>
                <div className="mobile-nav-item" onClick={() => setIsMenuOpen(false)}>
                    <DownloadButton />
                </div>
            </div>
        </header>
    );
}