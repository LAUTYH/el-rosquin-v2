import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// URLs viejas del sitio elrosquinsrl.com.ar (ya indexadas en Google) → páginas
// equivalentes de la web nueva. Lo hacemos acá (y NO en next.config redirects)
// porque el matching de redirects es case-insensitive y hacía que /CONTACTO ->
// /contacto también atrapara /contacto y entrara en loop infinito. El lookup
// por clave exacta de un objeto JS es case-sensitive: /contacto NO matchea la
// clave /CONTACTO, así que la página se sirve normal y no hay loop.
const REDIRECTS: Record<string, string> = {
  "/EMPRESA": "/#nosotros",
  "/PRODUCTOS": "/productos",
  "/LINEA-SECOS": "/productos/secos",
  "/LINEA-MADURACIÓN": "/productos/maduracion",
  "/LINEA-FIAMBRES": "/productos/fiambres",
  "/LINEA-FRESCOS": "/productos/tradicion",
  "/LINEA-ENVASADO-AL-VACIO": "/productos",
  "/SUMANOS": "/contacto",
  "/CONTACTO": "/contacto",
  "/gallery": "/productos",
};

export function proxy(request: NextRequest) {
  let path = request.nextUrl.pathname;

  // La Ó de /LINEA-MADURACIÓN puede llegar percent-encoded (%C3%93).
  try {
    path = decodeURIComponent(path);
  } catch {
    /* si no se puede decodificar, dejamos el path como vino */
  }

  // El sitemap viejo usaba barra final (ej. /CONTACTO/); la sacamos para el lookup.
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);

  const destination = REDIRECTS[path];
  if (destination) {
    return NextResponse.redirect(new URL(destination, request.url), 308);
  }

  return NextResponse.next();
}

export const config = {
  // Corre en todo menos estáticos / _next / api. El lookup case-sensitive de
  // arriba es el que decide si redirige, así que nunca toca /contacto, /productos.
  matcher: "/((?!_next/|api/|.*\\.).*)",
};
