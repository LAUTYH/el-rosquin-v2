"use client";
import React from "react";
import { Mail, MapPin, Phone, Upload, Send } from "lucide-react";
import BadgeButton from "@/components/BadgeButton";
import FadeIn from "@/components/FadeIn";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[url('/fondos-productos/fondo%20info.png')] bg-cover bg-center pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">

        {/* ENCABEZADO */}
        <FadeIn className="text-center mb-20" delay={0.1}>
          <h1 className="font-bodoni font-bold text-4xl md:text-6xl text-goldenros tracking-widest uppercase mb-2">
            Contactate
          </h1>
          <h2 className="font-dirty-brush text-5xl md:text-8xl text-redros leading-none">
            con nosotros
          </h2>
        </FadeIn>

        {/* MEDIOS DE CONTACTO - GRID SUPERIOR */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24" delay={0.2}>
          <ContactInfoCard
            icon={<Mail className="w-8 h-8 text-goldenros" />}
            title="Correo electrónico"
            value="contacto@elrosquin.com.ar"
            link="mailto:contacto@elrosquin.com.ar"
          />
          <ContactInfoCard
            icon={<MapPin className="w-8 h-8 text-goldenros" />}
            title="Ubicación"
            value="Chacabuco 700, Cañada Rosquín, Santa Fe."
            link="https://maps.google.com/?q=Chacabuco+700,+Cañada+Rosquín,+Santa+Fe"
          />
          <ContactInfoCard
            icon={<Phone className="w-8 h-8 text-goldenros" />}
            title="Teléfono Oficial"
            value="+54 (3492) 15 664-568"
            link="tel:+54349215664568"
          />
        </FadeIn>

        {/* SECCIÓN DE FORMULARIOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* FORMULARIO COMERCIAL */}
          <FadeIn className="space-y-8" delay={0.3}>
            <div className="space-y-4">
              <h3 className="font-bodoni font-bold text-3xl text-redros uppercase tracking-wider text-center">
                Comercial y <br /> Atención al Cliente
              </h3>
              <p className="font-montserrat text-center text-darkros/80 leading-relaxed italic">
                Si tenés una consulta o te interesa comercializar nuestros productos comunicate con nosotros.
              </p>
            </div>

            <form className="space-y-5 bg-redros p-8 border border-darkros/20 backdrop-blur-sm">
              <InputField label="Nombre Completo" placeholder="Ej: Juan Pérez" />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Provincia" placeholder="Ej: Santa Fe" />
                <InputField label="Localidad" placeholder="Ej: Cañada Rosquín" />
              </div>
              <InputField label="Correo Electrónico" type="email" placeholder="juan@ejemplo.com" />
              <TextAreaField label="Mensaje" placeholder="Escribí tu consulta aquí..." />
              <SubmitButton label="ENVIAR CONSULTA" />
            </form>
          </FadeIn>

          {/* FORMULARIO TRABAJÁ CON NOSOTROS */}
          <FadeIn className="space-y-8" delay={0.4}>
            <div className="space-y-4">
              <h3 className="font-bodoni font-bold text-3xl text-darkros text-center uppercase tracking-wider">
                Trabajá <br />con nosotros
              </h3>
              <p className="font-montserrat text-center text-darkros/80 leading-relaxed italic">
                ¡Sumate a nuestro equipo! Envianos tus datos y <br />adjuntá tu CV para futuras búsquedas.
              </p>
            </div>

            <form className="space-y-5 bg-darkros p-8 border border-redros/20 backdrop-blur-sm">
              <InputField label="Nombre Completo" placeholder="Ej: Maria García" />
              <InputField label="Localidad" placeholder="Ej: Rosario" />
              <InputField label="Correo Electrónico" type="email" placeholder="maria@ejemplo.com" />

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-white ml-1">Adjuntar CV</label>
                <div className="relative group cursor-pointer border-2 border-dashed border-darkros/30 hover:border-white/50 rounded-none p-6 transition-colors flex flex-col items-center justify-center space-y-2 bg-white/20">
                  <Upload className="w-6 h-6 text-white/80 group-hover:text-white" />
                  <span className="text-sm text-white/60 group-hover:text-white">Archivos .pdf o .doc (menores a 5MB)</span>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <TextAreaField label="Mensaje" placeholder="Contanos sobre vos..." />
              <SubmitButton label="POSTULARME" />
            </form>
          </FadeIn>

        </div>
      </div>
    </div>
  );
}

// COMPONENTES AUXILIARES PARA ESTA PÁGINA

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  link: string;
}

const ContactInfoCard = ({ icon, title, value, link }: ContactInfoCardProps) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative flex flex-col items-center p-8 drop-shadow-md transition-all duration-500 hover:-translate-y-2 cursor-pointer h-full"
  >
    {/* Bordes decorativos finos oscuros adentro que forman la figura */}
    <div className="absolute top-0 left-[12px] right-[12px] h-[3px] bg-goldenros z-10 transition-colors duration-500 group-hover:bg-goldenros/80"></div>
    <div className="absolute bottom-0 left-[12px] right-[12px] h-[3px] bg-goldenros z-10 transition-colors duration-500 group-hover:bg-goldenros/80"></div>
    <div className="absolute left-0 top-[12px] bottom-[12px] w-[3px] bg-goldenros z-10 transition-colors duration-500 group-hover:bg-goldenros/80"></div>
    <div className="absolute right-0 top-[12px] bottom-[12px] w-[3px] bg-goldenros z-10 transition-colors duration-500 group-hover:bg-goldenros/80"></div>

    <div className="absolute top-0 left-0 w-[12px] h-[12px] border-b-[3px] border-r-[3px] border-goldenros rounded-br-full z-10 transition-colors duration-500 group-hover:border-goldenros/80"></div>
    <div className="absolute top-0 right-0 w-[12px] h-[12px] border-b-[3px] border-l-[3px] border-goldenros rounded-bl-full z-10 transition-colors duration-500 group-hover:border-goldenros/80"></div>
    <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-t-[3px] border-r-[3px] border-goldenros rounded-tr-full z-10 transition-colors duration-500 group-hover:border-goldenros/80"></div>
    <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-t-[3px] border-l-[3px] border-goldenros rounded-tl-full z-10 transition-colors duration-500 group-hover:border-goldenros/80"></div>

    <div className="relative z-10 mb-4 transform group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h4 className="relative z-10 font-montserrat font-bold text-redros text-sm md:text-base tracking-widest mb-2">{title}</h4>
    <p className="relative z-10 font-montserrat text-darkros text-center text-sm md:text-base font-bold">{value}</p>
  </a>
);

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
}

const InputField = ({ label, type = "text", placeholder }: InputFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-white ml-1">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      className="bg-white border border-darkros/30 px-4 py-3 text-darkros font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors placeholder:text-darkros/50"
    />
  </div>
);

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
}

const TextAreaField = ({ label, placeholder }: TextAreaFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-white ml-1">{label}</label>
    <textarea
      rows={4}
      placeholder={placeholder}
      className="bg-white border border-darkros/30 px-4 py-3 text-darkros font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors resize-none placeholder:text-darkros/50"
    />
  </div>
);

interface SubmitButtonProps {
  label: string;
  variant?: "gold" | "red";
}

const SubmitButton = ({ label, variant = "gold" }: SubmitButtonProps) => (
  <div className="flex justify-center w-full pt-4">
    <BadgeButton dark={variant === 'red'} className="w-full sm:w-auto">
      <div className="flex items-center justify-center space-x-2">
        <span>{label}</span>
        <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </BadgeButton>
  </div>
);
