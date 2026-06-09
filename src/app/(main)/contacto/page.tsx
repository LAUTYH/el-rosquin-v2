"use client";
import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";
import { MapPin, Phone, Send, Mail, ShoppingCart, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
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
    <div className="min-h-screen bg-[#0a0a0a] bg-[url('/material-definitivo/fondos-contacto-opciones/fondo-contacto-3.webp')] bg-cover bg-center bg-no-repeat flex items-center pt-28 pb-16 px-6">
      <div className="container mx-auto max-w-7xl w-full">

        {/* ── GRID PRINCIPAL: info (izquierda) + formulario (derecha) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── COLUMNA IZQUIERDA: encabezado + canales de contacto ── */}
          <FadeIn className="flex flex-col items-center lg:items-start" delay={0.1}>
            {/* Encabezado (mismo estilo que "Atención Comercial") */}
            <div className="w-full max-w-md text-center lg:text-left mb-8 lg:min-h-[180px]">
              <h1 className="font-bodoni font-bold text-3xl text-center md:text-4xl text-goldenros uppercase tracking-wider mb-3">
                Contactate <br />con nosotros
              </h1>
              <p className="font-montserrat text-white/85 text-center text-sm md:text-base leading-relaxed">
                ¿Tenés una consulta o querés trabajar con nosotros? Escribinos por el canal que necesites y te respondemos a la brevedad.
              </p>
            </div>

            {/* Canales de contacto (info detallada, sin formulario) */}
            <div className="w-full max-w-md flex flex-col gap-3">
              <ContactInfoCard
                id="tour-admin"
                icon={<Mail className="w-7 h-7 text-goldenros" />}
                title="Clientes / Administración"
                lines={[
                  { value: "administracion@elrosquin.com.ar", link: "mailto:administracion@elrosquin.com.ar" },
                  { value: "+54 9 3401 64-2702", link: "https://wa.me/5493401642702", whatsapp: true },
                ]}
              />
              <ContactInfoCard
                id="tour-compras"
                icon={<ShoppingCart className="w-7 h-7 text-goldenros" />}
                title="Proveedores / Compras"
                lines={[
                  { value: "compras@elrosquin.com.ar", link: "mailto:compras@elrosquin.com.ar" },
                  { value: "+54 9 3401 50-4652", link: "https://wa.me/5493401504652", whatsapp: true },
                ]}
              />
              <ContactInfoCard
                icon={<Briefcase className="w-7 h-7 text-goldenros" />}
                title="Trabajá con nosotros"
                lines={[
                  { value: "cv@elrosquin.com.ar", link: "mailto:cv@elrosquin.com.ar" },
                ]}
              />
              <ContactInfoCard
                id="tour-ubicacion"
                icon={<MapPin className="w-7 h-7 text-goldenros" />}
                title="Ubicación"
                lines={[
                  {
                    value: "Chacabuco 700, Cañada Rosquín, Santa Fe.",
                    link: "https://www.google.com/maps/place/EL+ROSQUIN+S.A./@-32.0561866,-61.6004609,933m/data=!3m2!1e3!4b1!4m6!3m5!1s0x95ca6edab01a72d1:0x6f2f1fb5bcd4380b!8m2!3d-32.0561912!4d-61.597886!16s%2Fg%2F11bymtfq3l?entry=ttu&g_ep=EgoyMDI2MDUyNS4wIKXMDSoASAFQAw%3D%3D",
                  },
                ]}
              />
              <ContactInfoCard
                id="tour-telefono"
                icon={<Phone className="w-7 h-7 text-goldenros" />}
                title="Teléfono Oficial"
                lines={[{ value: "+54 (3492) 15 664-568", link: "https://wa.link/6uhiwy", whatsapp: true }]}
              />
            </div>
          </FadeIn>

          {/* ── COLUMNA DERECHA: formulario único de Atención Comercial ── */}
          <FadeIn delay={0.25}>
            {/* Encabezado arriba del formulario */}
            <div className="text-center mb-8 lg:min-h-[180px]">
              <h3 className="font-bodoni font-bold text-3xl md:text-4xl text-goldenros uppercase tracking-wider mb-3">
                Atención <br />Comercial
              </h3>
              <p className="font-montserrat text-white/85 text-sm md:text-base leading-relaxed">
                <strong className="text-goldenros">Formulario exclusivo para comercializar nuestros productos:</strong> mayoristas, distribuidores, vendedores y supermercados.
              </p>
            </div>

            {/* Formulario */}
            <div id="tour-form" className="bg-redros p-6 md:p-8 border border-goldenros/20 backdrop-blur-sm">
              <ContactForm
                subject="Consulta Comercial - Web El Rosquín"
                formClassName="space-y-4"
              />
            </div>
          </FadeIn>

        </div>
      </div>

      {/* Tour guiado: globos que aparecen de a uno apuntando a cada tarjeta */}
      <ContactTour steps={TOUR_STEPS} />

      {/* Script de Cloudflare Turnstile: se carga una vez para toda la página */}
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js" strategy="afterInteractive" />
    </div>
  );
}

// COMPONENTES AUXILIARES PARA ESTA PÁGINA

// Opciones del desplegable "Tipo de comercio". Editá libremente esta lista.
const TIPOS_COMERCIO = ["Mayorista", "Distribuidor", "Vendedor", "Supermercado / Comercio", "Otro"];

// ── TOUR GUIADO ───────────────────────────────────────────────────────
// Cada paso puede apuntar a UNA o VARIAS tarjetas (por sus ids) con un mensaje.
type TourStep = { ids: string[]; text: string; variant?: "gold" | "whatsapp" };
const TOUR_STEPS: TourStep[] = [
  {
    ids: ["tour-admin", "tour-compras", "tour-telefono"],
    text: "Escribinos directo por WhatsApp a cualquiera de estos números.",
    variant: "whatsapp",
  },
  {
    ids: ["tour-ubicacion"],
    text: "Te invitamos a ver nuestras reseñas en Google.",
    variant: "gold",
  },
  {
    ids: ["tour-form"],
    text: "Si tenés una distribuidora de fiambres y lácteos o un negocio al público y querés comercializar nuestros productos, llená este formulario.",
    variant: "gold",
  },
];

const TOUR_STORAGE_KEY = "contacto-tour-visto";

// Globo de tour que aparece de a uno, resaltando la(s) tarjeta(s) del paso actual,
// con botón "Siguiente". Se posiciona con coordenadas reales (getBoundingClientRect)
// así funciona en cualquier layout/breakpoint. Se muestra solo la PRIMERA vez.
function ContactTour({ steps }: { steps: TourStep[] }) {
  const [step, setStep] = useState(0);
  const [open, setOpen] = useState(false);
  const [rects, setRects] = useState<DOMRect[]>([]);

  // Mostrar solo la primera vez (localStorage) y SOLO en desktop, tras un ratito.
  useEffect(() => {
    try {
      if (localStorage.getItem(TOUR_STORAGE_KEY)) return;
    } catch {}
    if (!window.matchMedia("(min-width: 768px)").matches) return; // en mobile no se muestra
    const t = setTimeout(() => setOpen(true), 800);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try {
      localStorage.setItem(TOUR_STORAGE_KEY, "1");
    } catch {}
  };

  // Medimos la posición de las tarjetas del paso actual (re-medimos al scrollear/resize).
  useEffect(() => {
    if (!open) return;
    const update = () => {
      if (window.innerWidth < 768) {
        setOpen(false);
        return;
      }
      const rs = steps[step].ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => !!el)
        .map((el) => el.getBoundingClientRect());
      setRects(rs);
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update, true);
    };
  }, [open, step, steps]);

  if (!open || rects.length === 0) return null;

  const cur = steps[step];
  const isLast = step === steps.length - 1;
  const isWa = cur.variant === "whatsapp";
  const bg = isWa ? "bg-[#25D366]" : "bg-goldenros";
  const tc = isWa ? "text-white" : "text-darkros";

  // Caja que engloba todos los objetivos del paso (para ubicar el globo).
  const uLeft = Math.min(...rects.map((r) => r.left));
  const uRight = Math.max(...rects.map((r) => r.right));
  const uTop = Math.min(...rects.map((r) => r.top));
  const uBottom = Math.max(...rects.map((r) => r.bottom));
  const uW = uRight - uLeft;
  const uH = uBottom - uTop;

  // Posición del globo: derecha → izquierda → arriba → abajo (lo que entre).
  const BUBBLE_W = 240;
  const GAP = 14;
  let placement: "right" | "left" | "top" | "bottom";
  if (uRight + BUBBLE_W + GAP <= window.innerWidth) placement = "right";
  else if (uLeft - BUBBLE_W - GAP >= 0) placement = "left";
  else if (uTop > 180) placement = "top";
  else placement = "bottom";

  const clampX = (x: number) =>
    Math.min(Math.max(x, BUBBLE_W / 2 + 8), window.innerWidth - BUBBLE_W / 2 - 8);

  const style: React.CSSProperties = { width: BUBBLE_W };
  let arrowClass = "";
  if (placement === "right") {
    style.top = uTop + uH / 2;
    style.left = uRight + GAP;
    style.transform = "translateY(-50%)";
    arrowClass = "left-[-5px] top-1/2 -translate-y-1/2";
  } else if (placement === "left") {
    style.top = uTop + uH / 2;
    style.left = uLeft - GAP;
    style.transform = "translate(-100%, -50%)";
    arrowClass = "right-[-5px] top-1/2 -translate-y-1/2";
  } else if (placement === "top") {
    style.top = uTop - GAP;
    style.left = clampX(uLeft + uW / 2);
    style.transform = "translate(-50%, -100%)";
    arrowClass = "bottom-[-5px] left-1/2 -translate-x-1/2";
  } else {
    style.top = uBottom + GAP;
    style.left = clampX(uLeft + uW / 2);
    style.transform = "translate(-50%, 0)";
    arrowClass = "top-[-5px] left-1/2 -translate-x-1/2";
  }

  return (
    <>
      {/* Resaltado de cada tarjeta objetivo */}
      {rects.map((r, i) => (
        <div
          key={i}
          className="pointer-events-none fixed z-[60] rounded-lg ring-2 ring-white/70 transition-all duration-300"
          style={{ top: r.top - 4, left: r.left - 4, width: r.width + 8, height: r.height + 8 }}
        />
      ))}

      {/* Globo del paso actual */}
      <motion.div
        key={step}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="fixed z-[61]"
        style={style}
      >
        <div className={`relative ${bg} ${tc} rounded-xl px-4 py-3 shadow-2xl`}>
          <p className="font-montserrat text-sm font-bold leading-snug mb-3">{cur.text}</p>
          <div className="flex items-center justify-between">
            <span className="font-montserrat text-xs font-bold opacity-70">
              {step + 1} / {steps.length}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={close}
                className="font-montserrat text-xs font-semibold underline opacity-80 hover:opacity-100 cursor-pointer"
              >
                Saltar
              </button>
              <button
                onClick={() => (isLast ? close() : setStep((s) => s + 1))}
                className="font-montserrat text-xs font-bold rounded-full bg-black/20 hover:bg-black/30 px-3 py-1 transition-colors cursor-pointer"
              >
                {isLast ? "Listo" : "Siguiente"}
              </button>
            </div>
          </div>
          {/* Pico del globo */}
          <div className={`absolute h-2.5 w-2.5 rotate-45 ${bg} ${arrowClass}`} />
        </div>
      </motion.div>
    </>
  );
}

interface ContactFormProps {
  subject: string;
  formClassName: string;
}

const ContactForm = ({ subject, formClassName }: ContactFormProps) => {
  const router = useRouter();
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
        // Redirigimos a una página propia (/gracias) para que Google Analytics
        // registre la conversión como un pageview separado.
        form.reset();
        router.push("/gracias");
        return;
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="Empresa / Negocio" name="empresa" placeholder="Ej: Distribuidora del Centro" />
        <SelectField label="Tipo de comercio" name="tipo" options={TIPOS_COMERCIO} required />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField label="Correo Electrónico" name="email" type="email" placeholder="juan@ejemplo.com" required />
        <InputField label="Teléfono / WhatsApp" name="telefono" type="tel" placeholder="Ej: +54 9 3401 ..." />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

      <p className="text-center text-white/70 text-xs pt-1">
        Al enviar aceptás nuestra{" "}
        <a href="/politica-de-privacidad" className="text-goldenros hover:underline">
          Política de Privacidad
        </a>
        .
      </p>

      {status === "error" && (
        <p className="text-center text-white font-montserrat text-sm font-bold pt-1">
          {errorMsg}
        </p>
      )}
    </form>
  );
};

// Ícono de WhatsApp (SVG inline; lucide-react no incluye logos de marca).
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.359.101 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.582 0 11.943-5.359 11.945-11.893a11.821 11.821 0 00-3.418-8.45"/>
  </svg>
);

interface ContactInfoCardProps {
  id?: string;
  icon: React.ReactNode;
  title: string;
  lines: { value: string; link?: string; whatsapp?: boolean }[];
}

// Tarjeta de canal de contacto en formato HORIZONTAL y compacto (ícono a la
// izquierda, datos a la derecha) para que entren varias en la columna lateral.
const ContactInfoCard = ({ id, icon, title, lines }: ContactInfoCardProps) => (
  <div id={id} className="group relative flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-2 md:gap-4 p-4 sm:p-5 drop-shadow-md transition-all duration-300 hover:-translate-y-1">
    {/* Bordes decorativos finos dorados que forman la figura */}
    <div className="absolute top-0 left-[12px] right-[12px] h-[3px] bg-goldenros z-10 transition-colors duration-300 group-hover:bg-goldenros/80"></div>
    <div className="absolute bottom-0 left-[12px] right-[12px] h-[3px] bg-goldenros z-10 transition-colors duration-300 group-hover:bg-goldenros/80"></div>
    <div className="absolute left-0 top-[12px] bottom-[12px] w-[3px] bg-goldenros z-10 transition-colors duration-300 group-hover:bg-goldenros/80"></div>
    <div className="absolute right-0 top-[12px] bottom-[12px] w-[3px] bg-goldenros z-10 transition-colors duration-300 group-hover:bg-goldenros/80"></div>

    <div className="absolute top-0 left-0 w-[12px] h-[12px] border-b-[3px] border-r-[3px] border-goldenros rounded-br-full z-10 transition-colors duration-300 group-hover:border-goldenros/80"></div>
    <div className="absolute top-0 right-0 w-[12px] h-[12px] border-b-[3px] border-l-[3px] border-goldenros rounded-bl-full z-10 transition-colors duration-300 group-hover:border-goldenros/80"></div>
    <div className="absolute bottom-0 left-0 w-[12px] h-[12px] border-t-[3px] border-r-[3px] border-goldenros rounded-tr-full z-10 transition-colors duration-300 group-hover:border-goldenros/80"></div>
    <div className="absolute bottom-0 right-0 w-[12px] h-[12px] border-t-[3px] border-l-[3px] border-goldenros rounded-tl-full z-10 transition-colors duration-300 group-hover:border-goldenros/80"></div>

    {/* Ícono al costado izquierdo (solo desktop) */}
    <div className="relative z-10 shrink-0 hidden md:block transform group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <div className="relative z-10 flex flex-col items-center text-center md:items-start md:text-left min-w-0">
      {/* En mobile el ícono va al lado del título dorado */}
      <div className="flex items-center gap-2 mb-1">
        <span className="shrink-0 md:hidden [&>svg]:w-5 [&>svg]:h-5">{icon}</span>
        <h4 className="font-montserrat font-bold text-goldenros text-xs md:text-sm tracking-widest">{title}</h4>
      </div>
      <div className="flex flex-col items-center md:items-start gap-2 md:gap-0.5">
        {lines.map((line, i) =>
          line.link ? (
            <a
              key={i}
              href={line.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-montserrat text-white text-sm font-bold hover:text-goldenros transition-colors break-words"
            >
              {line.value}
              {line.whatsapp && <WhatsAppIcon className="w-4 h-4 shrink-0 text-[#25D366]" />}
            </a>
          ) : (
            <p key={i} className="font-montserrat text-white text-sm font-bold break-words">
              {line.value}
            </p>
          )
        )}
      </div>
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
      rows={3}
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
  <div className="flex justify-center w-full pt-2">
    <BadgeButton dark={variant === 'red'} type="submit" disabled={disabled} className="w-full sm:w-auto">
      <div className="flex items-center justify-center space-x-2">
        <span>{label}</span>
        <Send className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
      </div>
    </BadgeButton>
  </div>
);
