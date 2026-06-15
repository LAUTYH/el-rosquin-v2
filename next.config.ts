import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: process.cwd(),
  },
  // Redirects de las URLs viejas (sitio elrosquinsrl.com.ar, ya indexadas en
  // Google) hacia las páginas equivalentes de la web nueva. Así un clic en un
  // resultado viejo cae en la página correcta y no en un "no encontrado", y
  // Google va reemplazando los resultados viejos por los nuevos. permanent:
  // true = 308 (le dice a Google que la mudanza es definitiva).
  async redirects() {
    return [
      { source: "/EMPRESA", destination: "/#nosotros", permanent: true },
      { source: "/PRODUCTOS", destination: "/productos", permanent: true },
      { source: "/LINEA-SECOS", destination: "/productos/secos", permanent: true },
      { source: "/LINEA-MADURACIÓN", destination: "/productos/maduracion", permanent: true },
      // La Ó llega percent-encoded desde el navegador/Google (%C3%93).
      { source: "/LINEA-MADURACI%C3%93N", destination: "/productos/maduracion", permanent: true },
      { source: "/LINEA-FIAMBRES", destination: "/productos/fiambres", permanent: true },
      { source: "/LINEA-FRESCOS", destination: "/productos/tradicion", permanent: true },
      { source: "/LINEA-ENVASADO-AL-VACIO", destination: "/productos", permanent: true },
      { source: "/SUMANOS", destination: "/contacto", permanent: true },
      { source: "/CONTACTO", destination: "/contacto", permanent: true },
      { source: "/gallery", destination: "/productos", permanent: true },
    ];
  },
};

export default nextConfig;
