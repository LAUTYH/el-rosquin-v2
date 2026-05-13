"use client";
import React from "react";
import { Mail, MapPin, Phone, Upload, Send } from "lucide-react";

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* ENCABEZADO */}
        <div className="text-center mb-20">
          <h1 className="font-bodoni font-bold text-4xl md:text-6xl text-goldenros tracking-widest uppercase mb-2">
            Contactate
          </h1>
          <h2 className="font-dirty-brush text-5xl md:text-8xl text-redros transform -rotate-2 leading-none">
            con nosotros
          </h2>
        </div>

        {/* MEDIOS DE CONTACTO - GRID SUPERIOR */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
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
        </div>

        {/* SECCIÓN DE FORMULARIOS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* FORMULARIO COMERCIAL */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bodoni font-bold text-3xl text-white uppercase tracking-wider">
                Comercial y Atención al Cliente
              </h3>
              <p className="font-montserrat text-gray-400 leading-relaxed italic">
                Si dispones de una distribuidora, negocio al público o vendedor a comisión y te interesa comercializar nuestros productos comunicate con nosotros.
              </p>
            </div>
            
            <form className="space-y-5 bg-darkros/5 p-8 rounded-2xl border border-darkros/20 backdrop-blur-sm">
              <InputField label="Nombre Completo" placeholder="Ej: Juan Pérez" />
              <div className="grid grid-cols-2 gap-4">
                <InputField label="Provincia" placeholder="Ej: Santa Fe" />
                <InputField label="Localidad" placeholder="Ej: Cañada Rosquín" />
              </div>
              <InputField label="Correo Electrónico" type="email" placeholder="juan@ejemplo.com" />
              <TextAreaField label="Mensaje" placeholder="Escribí tu consulta aquí..." />
              <SubmitButton label="ENVIAR CONSULTA" />
            </form>
          </section>

          {/* FORMULARIO TRABAJÁ CON NOSOTROS */}
          <section className="space-y-8">
            <div className="space-y-4">
              <h3 className="font-bodoni font-bold text-3xl text-white uppercase tracking-wider">
                Trabajá con nosotros
              </h3>
              <p className="font-montserrat text-gray-400 leading-relaxed italic">
                ¡Sumate a nuestro equipo! Envianos tus datos y adjuntá tu CV para futuras búsquedas.
              </p>
            </div>

            <form className="space-y-5 bg-redros/5 p-8 rounded-2xl border border-redros/20 backdrop-blur-sm">
              <InputField label="Nombre Completo" placeholder="Ej: Maria García" />
              <InputField label="Localidad" placeholder="Ej: Rosario" />
              <InputField label="Correo Electrónico" type="email" placeholder="maria@ejemplo.com" />
              
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-goldenros/80 ml-1">Adjuntar CV</label>
                <div className="relative group cursor-pointer border-2 border-dashed border-darkros/30 hover:border-goldenros/50 rounded-lg p-6 transition-colors flex flex-col items-center justify-center space-y-2 bg-black/20">
                  <Upload className="w-6 h-6 text-goldenros/60 group-hover:text-goldenros" />
                  <span className="text-sm text-gray-500 group-hover:text-gray-300">Archivos .pdf o .doc (menores a 5MB)</span>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" accept=".pdf,.doc,.docx" />
                </div>
              </div>

              <TextAreaField label="Mensaje" placeholder="Contanos sobre vos..." />
              <SubmitButton label="POSTULARME" variant="red" />
            </form>
          </section>

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
    className="group flex flex-col items-center p-8 bg-darkros/10 rounded-2xl border border-darkros/20 hover:border-goldenros/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
  >
    <div className="mb-4 transform group-hover:scale-110 transition-transform duration-500">
      {icon}
    </div>
    <h4 className="font-bodoni font-bold text-goldenros text-sm uppercase tracking-widest mb-2">{title}</h4>
    <p className="font-montserrat text-white text-center text-lg">{value}</p>
  </a>
);

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
}

const InputField = ({ label, type = "text", placeholder }: InputFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-goldenros/80 ml-1">{label}</label>
    <input 
      type={type} 
      placeholder={placeholder}
      className="bg-black/40 border border-darkros/30 rounded-lg px-4 py-3 text-white font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors placeholder:text-gray-700"
    />
  </div>
);

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
}

const TextAreaField = ({ label, placeholder }: TextAreaFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-goldenros/80 ml-1">{label}</label>
    <textarea 
      rows={4}
      placeholder={placeholder}
      className="bg-black/40 border border-darkros/30 rounded-lg px-4 py-3 text-white font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors resize-none placeholder:text-gray-700"
    />
  </div>
);

interface SubmitButtonProps {
  label: string;
  variant?: "gold" | "red";
}

const SubmitButton = ({ label, variant = "gold" }: SubmitButtonProps) => (
  <button 
    className={`w-full py-4 rounded-lg font-bold tracking-[0.2em] transition-all duration-500 flex items-center justify-center space-x-2 group
      ${variant === 'gold' 
        ? 'bg-goldenros text-darkros hover:bg-goldenros/90' 
        : 'bg-redros text-white hover:bg-redros/90'}`}
  >
    <span>{label}</span>
    <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
  </button>
);
