import type { Metadata } from "next";
import { Check } from "lucide-react";
import BadgeButton from "@/components/BadgeButton";

export const metadata: Metadata = {
  title: "¡Mensaje enviado! · El Rosquín",
  description: "Recibimos tu consulta. Te responderemos a la brevedad.",
};

export default function GraciasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] bg-[url('/material-definitivo/fondos-contacto-opciones/fondo-contacto-3.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-6 py-32">
      <div className="max-w-xl w-full text-center flex flex-col items-center">

        {/* Tilde */}
        <div className="flex items-center justify-center w-20 h-20 rounded-full bg-green-500/15 border-2 border-green-500 mb-8">
          <Check className="w-10 h-10 text-green-400" strokeWidth={3} />
        </div>

        <h1 className="font-bodoni font-bold text-3xl md:text-5xl text-goldenros uppercase tracking-wider mb-4">
          ¡Mensaje enviado!
        </h1>
        <p className="font-montserrat text-white/85 text-base md:text-lg leading-relaxed mb-10">
          Recibimos tu consulta. <strong className="text-white">Te responderemos a la brevedad.</strong>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
          <BadgeButton href="/">VOLVER AL INICIO</BadgeButton>
          <BadgeButton dark href="/productos#lineas">VER PRODUCTOS</BadgeButton>
        </div>
      </div>
    </main>
  );
}
