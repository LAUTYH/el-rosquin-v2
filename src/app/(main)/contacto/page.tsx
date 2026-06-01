"use client";
import React, { useState, useRef } from "react";
import Script from "next/script";
import { MapPin, Phone, Send, Mail, ShoppingCart, Briefcase } from "lucide-react";
import BadgeButton from "@/components/BadgeButton";
import FadeIn from "@/components/FadeIn";

// Site Key pública de Cloudflare Turnstile (se usa para mostrar el captcha en el navegador).
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

// Tipado mínimo del objeto global que inyecta el script de Turnstile.
declare global {
  interface Window {
    turnstile?: {
      reset: (container?: HTMLElement | string) => void;
    };
  }
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] bg-[url('/material-definitivo/fondos-contacto-opciones/fondo-contacto-3.png')] bg-cover bg-center bg-no-repeat pt-32 pb-20 px-6">
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

        {/* ── CANALES DE CONTACTO (info detallada, sin formulario) ── */}
        <FadeIn className="mb-12" delay={0.2}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContactInfoCard
              icon={<Mail className="w-8 h-8 text-goldenros" />}
              title="Clientes / Administración"
              lines={[
                { value: "administracion@elrosquin.com.ar", link: "mailto:administracion@elrosquin.com.ar" },
                { value: "+54 9 3401 64-2702", link: "tel:+5493401642702" },
              ]}
            />
            <ContactInfoCard
              icon={<ShoppingCart className="w-8 h-8 text-goldenros" />}
              title="Proveedores / Compras"
              lines={[
                { value: "compras@elrosquin.com.ar", link: "mailto:compras@elrosquin.com.ar" },
                { value: "+54 9 3401 50-4652", link: "tel:+5493401504652" },
              ]}
            />
            <ContactInfoCard
              icon={<Briefcase className="w-8 h-8 text-goldenros" />}
              title="Trabajá con nosotros"
              lines={[
                { value: "Enviá tu CV", link: "mailto:cv@elrosquin.com.ar" },
                { value: "cv@elrosquin.com.ar", link: "mailto:cv@elrosquin.com.ar" },
              ]}
            />
          </div>
        </FadeIn>

        {/* Ubicación + teléfono oficial */}
        <FadeIn className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24" delay={0.25}>
          <ContactInfoCard
            icon={<MapPin className="w-8 h-8 text-goldenros" />}
            title="Ubicación"
            lines={[
              {
                value: "Chacabuco 700, Cañada Rosquín, Santa Fe.",
                link: "https://www.google.com/maps/place/EL+ROSQUIN+S.A./@-32.0561866,-61.6004609,933m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95ca6edab01a72d1:0x6f2f1fb5bcd4380b!8m2!3d-32.0561912!4d-61.597886!16s%2Fg%2F11bymtfq3l?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D",
              },
            ]}
          />
          <ContactInfoCard
            icon={<Phone className="w-8 h-8 text-goldenros" />}
            title="Teléfono Oficial"
            lines={[{ value: "+54 (3492) 15 664-568", link: "https://wa.link/6uhiwy" }]}
          />
        </FadeIn>

        {/* ── FORMULARIO ÚNICO: ATENCIÓN COMERCIAL ── */}
        <FadeIn delay={0.3} className="max-w-2xl mx-auto">

          {/* Encabezado arriba del formulario */}
          <div className="text-center mb-10">
            <h3 className="font-bodoni font-bold text-3xl md:text-4xl text-goldenros uppercase tracking-wider mb-4">
              Atención Comercial
            </h3>
            <p className="font-montserrat text-white/85 leading-relaxed">
              Este formulario es <strong className="text-goldenros">exclusivo para quienes quieran comercializar nuestros productos:</strong> mayoristas, distribuidores, vendedores y supermercados.
            </p>
          </div>

          {/* Formulario */}
          <div className="bg-redros p-8 md:p-10 border border-goldenros/20 backdrop-blur-sm">
            <ContactForm
              subject="Consulta Comercial - Web El Rosquín"
              formClassName="space-y-5"
            />
          </div>
        </FadeIn>
      </div>

      {/* Script de Cloudflare Turnstile: se carga una vez para toda la página */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
    </div>
  );
}

// COMPONENTES AUXILIARES PARA ESTA PÁGINA

// Opciones del desplegable "Tipo de comercio". Editá libremente esta lista.
const TIPOS_COMERCIO = ["Mayorista", "Distribuidor", "Vendedor", "Supermercado / Comercio", "Otro"];

interface ContactFormProps {
  subject: string;
  formClassName: string;
}

const ContactForm = ({ subject, formClassName }: ContactFormProps) => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const widgetRef = useRef<HTMLDivElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    // El widget de Turnstile inyecta este campo cuando el captcha se resuelve.
    const token = formData.get("cf-turnstile-response");
    if (!token) {
      setStatus("error");
      setErrorMsg("Completá la verificación de seguridad antes de enviar.");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch("/api/contacto", { method: "POST", body: formData });
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(data.error || "Hubo un error al enviar. Probá de nuevo.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Hubo un error de conexión. Probá de nuevo.");
    } finally {
      // Reinicia el captcha para permitir un nuevo envío
      window.turnstile?.reset(widgetRef.current ?? undefined);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={formClassName}>
      <input type="hidden" name="subject" value={subject} />

      <InputField label="Nombre y Apellido" name="nombre" placeholder="Ej: Juan Pérez" required />
      <InputField label="Empresa / Negocio" name="empresa" placeholder="Ej: Distribuidora del Centro" />
      <SelectField label="Tipo de comercio" name="tipo" options={TIPOS_COMERCIO} required />
      <InputField label="Correo Electrónico" name="email" type="email" placeholder="juan@ejemplo.com" required />
      <InputField label="Teléfono / WhatsApp" name="telefono" type="tel" placeholder="Ej: +54 9 3401 ..." />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Provincia" name="provincia" placeholder="Ej: Santa Fe" />
        <InputField label="Localidad" name="localidad" placeholder="Ej: Cañada Rosquín" />
      </div>
      <TextAreaField label="Mensaje" name="mensaje" placeholder="Contanos qué productos te interesan, volúmenes, etc." required />

      {/* Honeypot anti-spam: invisible para personas, los bots lo completan */}
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

      {/* Captcha de Cloudflare Turnstile */}
      <div className="flex justify-center pt-1">
        <div ref={widgetRef} className="cf-turnstile" data-sitekey={TURNSTILE_SITE_KEY}></div>
      </div>

      <SubmitButton
        label={status === "submitting" ? "ENVIANDO..." : "ENVIAR CONSULTA"}
        disabled={status === "submitting"}
      />

      {status === "success" && (
        <p className="text-center text-green-300 font-montserrat text-sm font-bold pt-1">
          ✓ ¡Mensaje enviado! Te responderemos a la brevedad.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-white font-montserrat text-sm font-bold pt-1">
          {errorMsg}
        </p>
      )}
    </form>
  );
};

interface ContactInfoCardProps {
  icon: React.ReactNode;
  title: string;
  lines: { value: string; link?: string }[];
}

const ContactInfoCard = ({ icon, title, lines }: ContactInfoCardProps) => (
  <div className="group relative flex flex-col items-center p-8 drop-shadow-md transition-all duration-500 hover:-translate-y-2 h-full">
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
    <h4 className="relative z-10 font-montserrat font-bold text-goldenros text-sm md:text-base tracking-widest mb-3 text-center">{title}</h4>
    <div className="relative z-10 flex flex-col items-center gap-1">
      {lines.map((line, i) =>
        line.link ? (
          <a
            key={i}
            href={line.link}
            target="_blank"
            rel="noopener noreferrer"
            className="font-montserrat text-white text-center text-sm md:text-base font-bold hover:text-goldenros transition-colors break-all"
          >
            {line.value}
          </a>
        ) : (
          <p key={i} className="font-montserrat text-white text-center text-sm md:text-base font-bold break-all">
            {line.value}
          </p>
        )
      )}
    </div>
  </div>
);

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

const InputField = ({ label, type = "text", placeholder, name, required }: InputFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-white ml-1">{label}</label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className="bg-white border border-darkros/30 px-4 py-3 text-darkros font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors placeholder:text-darkros/50"
    />
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

const SelectField = ({ label, name, options, required }: SelectFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-white ml-1">{label}</label>
    <select
      name={name}
      required={required}
      defaultValue=""
      className="bg-white border border-darkros/30 px-4 py-3 text-darkros font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors"
    >
      <option value="" disabled>
        Seleccioná una opción
      </option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

interface TextAreaFieldProps {
  label: string;
  placeholder: string;
  name: string;
  required?: boolean;
}

const TextAreaField = ({ label, placeholder, name, required }: TextAreaFieldProps) => (
  <div className="flex flex-col space-y-2">
    <label className="text-xs font-bold uppercase tracking-widest text-white ml-1">{label}</label>
    <textarea
      rows={4}
      name={name}
      required={required}
      placeholder={placeholder}
      className="bg-white border border-darkros/30 px-4 py-3 text-darkros font-montserrat focus:outline-none focus:border-goldenros/60 transition-colors resize-none placeholder:text-darkros/50"
    />
  </div>
);

interface SubmitButtonProps {
  label: string;
  variant?: "gold" | "red";
  disabled?: boolean;
}

const SubmitButton = ({ label, variant = "gold", disabled }: SubmitButtonProps) => (
  <div className="flex justify-center w-full pt-4">
    <BadgeButton dark={variant === 'red'} type="submit" disabled={disabled} className="w-full sm:w-auto">
      <div className="flex items-center justify-center space-x-2">
        <span>{label}</span>
        <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </BadgeButton>
  </div>
);
