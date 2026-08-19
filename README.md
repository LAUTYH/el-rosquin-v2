# El Rosquín — Sitio corporativo

Sitio web institucional y catálogo de productos de **El Rosquín S.R.L.**, fábrica de
chacinados y fiambres de Santa Fe, Argentina.

**En producción:** [www.elrosquin.com.ar](https://www.elrosquin.com.ar)

Reemplaza al sitio anterior (`elrosquinsrl.com.ar`), cuyo tráfico y posicionamiento se
migraron a este con redirecciones permanentes.

---

## Qué resuelve

- **Catálogo navegable** de 30 productos agrupados en 4 líneas (Secos, Maduración,
  Fiambres, Tradición), cada uno con ficha propia: presentación, unidades por caja,
  código, ingredientes y tabla de información nutricional.
- **Captación de clientes mayoristas**: formulario de contacto que clasifica al lead
  por tipo de comercio y llega por mail al equipo comercial, protegido contra spam.
- **Continuidad SEO**: las URLs viejas ya indexadas en Google siguen funcionando.
- **Medición**: Google Analytics 4 y Meta Pixel para seguimiento de campañas.

---

## Stack

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 |
| Lenguaje | TypeScript |
| Estilos | Tailwind CSS v4 |
| Animación | GSAP · Framer Motion · Lenis (scroll suave) |
| Compilación | React Compiler · Turbopack |
| Email transaccional | Resend |
| Anti-spam | Cloudflare Turnstile |
| Hosting | Vercel |

---

## Estructura

```
src/
├── app/
│   ├── (main)/                     grupo de rutas con header, footer y transiciones
│   │   ├── page.tsx                home
│   │   ├── productos/
│   │   │   ├── page.tsx            las 4 líneas
│   │   │   ├── [linea]/            productos de una línea
│   │   │   └── [linea]/[id]/       ficha de producto
│   │   ├── contacto/
│   │   ├── gracias/
│   │   └── politica-de-privacidad/
│   ├── api/contacto/route.ts       validación de captcha + envío de mail
│   └── layout.tsx                  fuentes, analytics, splash, scroll suave
├── components/                     UI y componentes de animación
├── data/
│   ├── products.ts                 los 30 productos (fuente única de verdad)
│   └── product-images.ts           resolución de imágenes por producto
└── proxy.ts                        redirecciones del sitio anterior
```

Las rutas de producto se generan de forma estática con `generateStaticParams` a partir
de `data/products.ts`. Agregar un producto es agregar un objeto a ese archivo: la
página, la ruta y el listado salen solos.

---

## Decisiones técnicas

Las cuatro que más trabajo dieron y por qué se resolvieron así.

### 1. Formulario de contacto: las claves nunca salen del servidor

`POST /api/contacto` es un Route Handler que corre en el servidor y hace dos cosas en
orden: valida el token de **Cloudflare Turnstile** contra la API de Cloudflare y, recién
si pasa, envía el mail con **Resend**.

La clave secreta de Turnstile y la API key de Resend viven en variables de entorno del
servidor. En el navegador solo existe la *site key* pública. Validar el captcha del lado
del cliente sería decorativo: cualquiera puede saltear el widget y postear directo al
endpoint.

Todo el contenido del formulario se escapa antes de armar el HTML del mail, para que un
mensaje con etiquetas no rompa ni inyecte nada en la casilla del destinatario.

El destinatario se configura por variable de entorno y acepta varios separados por coma,
así el equipo comercial cambia a quién le llega sin tocar código.

### 2. Migración del sitio viejo sin perder posicionamiento

El sitio anterior tenía URLs en mayúsculas ya indexadas (`/CONTACTO`, `/PRODUCTOS`,
`/LINEA-SECOS`…). Se mapean a las nuevas con redirecciones 308 en `src/proxy.ts`.

**No se usó `redirects` de `next.config`**: ese matching es *case-insensitive*, así que
la regla `/CONTACTO → /contacto` también capturaba `/contacto` y entraba en **loop
infinito**. La solución fue resolverlo con un objeto JS, donde el lookup por clave sí
distingue mayúsculas: `/contacto` no matchea la clave `/CONTACTO` y la página se sirve
normal.

El proxy además decodifica el path (la `Ó` de `/LINEA-MADURACIÓN` puede llegar como
`%C3%93`) y saca la barra final, porque el sitemap viejo la incluía.

### 3. Hero de productos: frames en canvas para mobile, video en desktop

En mobile el hero se "scrollea" cuadro a cuadro: una secuencia de JPGs dibujada sobre un
`<canvas>` según la posición del scroll. En desktop es directamente el video en loop.

Son dos técnicas distintas porque **buscar dentro de un `<video>` según el scroll se
traba en iOS** — Safari no garantiza el seek cuadro a cuadro. Dibujar imágenes ya
cargadas en un canvas sí es fluido. En desktop, donde el problema no existe, se usa el
video, que pesa menos que la secuencia.

### 4. Transiciones entre páginas con App Router

Animar la *salida* de una página en el App Router tiene una trampa: cuando cambia la
ruta, el router actualiza su contexto y el contenido viejo desaparece antes de que la
animación pueda correr.

`FrozenRouter` congela el `LayoutRouterContext` con un `useRef` y lo provee hacia abajo,
de modo que el árbol que está saliendo sigue viendo el contexto que tenía. Con eso,
`AnimatePresence` puede animar la transición completa.

---

## Correr el proyecto

Requiere Node.js 20 o superior.

```bash
npm install
npm run dev      # http://localhost:3000
```

Otros comandos:

```bash
npm run build    # build de producción
npm run start    # servir el build
npm run lint     # eslint
```

### Variables de entorno

El formulario de contacto necesita un `.env.local` en la raíz (no se versiona):

```bash
# Cloudflare Turnstile — https://dash.cloudflare.com
NEXT_PUBLIC_TURNSTILE_SITE_KEY=   # pública, va al navegador
TURNSTILE_SECRET_KEY=             # privada, solo servidor

# Resend — https://resend.com
RESEND_API_KEY=                   # privada, solo servidor
RESEND_FROM_EMAIL=                # remitente verificado en Resend
CONTACT_TO_EMAIL=                 # destinatario/s, separados por coma
```

Sin estas variables el sitio levanta igual; solo el formulario devuelve error.

---

## Autor

**Lautaro Felipe Olmos** — desarrollo y puesta en producción.
[GitHub](https://github.com/LAUTYH)
