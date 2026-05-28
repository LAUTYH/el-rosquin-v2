"use client";
import React from "react";
import BadgeButton from "@/components/BadgeButton";

export default function NotFound() {
  return (
    <main className="min-h-screen w-full bg-[url('/fondos-productos/fondo-2.png')] bg-cover bg-center flex flex-col items-center justify-center relative px-6 text-center select-none overflow-hidden">
      {/* Overlay a la textura para legibilidad */}
      <div className="absolute inset-0 bg-white/45 backdrop-blur-[2px] z-0"></div>

      <div className="relative z-10 max-w-lg mx-auto flex flex-col items-center">
        {/* LOGO */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-500">
          <img src="/temporal/logo-er.svg" alt="El Rosquin" className="h-28 md:h-36 w-auto" />
        </div>

        {/* 404 NÚMERO */}
        <h1 className="font-bodoni font-bold text-[100px] md:text-[140px] leading-none text-redros drop-shadow-md mb-2">
          404
        </h1>

        {/* MENSAJE PRINCIPAL */}
        <h2 className="font-bodoni font-bold text-3xl md:text-4xl text-darkros uppercase tracking-widest mb-4">
          PÁGINA NO ENCONTRADA
        </h2>

        {/* DESCRIPCIÓN */}
        <p className="font-montserrat text-darkros/80 text-sm md:text-base leading-relaxed italic mb-10 max-w-md">
          El camino que buscas no existe o ha sido modificado.
        </p>

        {/* BOTÓN DE RETORNO */}
        <div className="transform hover:scale-105 transition-transform duration-300">
          <BadgeButton href="/">
            Volver al Inicio
          </BadgeButton>
        </div>
      </div>
    </main>
  );
}
