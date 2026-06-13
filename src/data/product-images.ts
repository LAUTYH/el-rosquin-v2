export interface ProductImages {
  product: string;
  nameWithStyle: string;
  seal?: string;
}

export type LineaSlug = 'secos' | 'maduracion' | 'fiambres' | 'tradicion';

export const lineaSlugToName: Record<LineaSlug, string> = {
  secos: 'Secos',
  maduracion: 'Maduración',
  fiambres: 'Fiambres',
  tradicion: 'Tradición',
};

export const lineaNameToSlug: Record<string, LineaSlug> = {
  'Secos': 'secos',
  'Maduración': 'maduracion',
  'Fiambres': 'fiambres',
  'Tradición': 'tradicion',
};

export const lineaBgImages: Record<LineaSlug, string> = {
  secos: '/material-definitivo/productos-seccion/lineas/grid/grid-linea-secos.png',
  maduracion: '/material-definitivo/productos-seccion/lineas/grid/grid-linea-maduracion.png',
  fiambres: '/material-definitivo/productos-seccion/lineas/grid/grid-linea-fiambres.png',
  tradicion: '/material-definitivo/productos-seccion/lineas/grid/grid-linea-tradicion.png',
};

export const lineaDescripciones: Record<LineaSlug, string> = {
  secos: 'Elaboración artesanal, con especias naturales y el tiempo exacto de secado. El sabor clásico que no puede faltar en tus picadas.',
  maduracion: 'Estacionamiento lento y natural, respetando los tiempos de cada pieza. Texturas y aromas inconfundibles para los paladares que saben elegir.',
  fiambres: 'Frescura y cuidado familiar bajo los más altos estándares de calidad. Sabor auténtico para tus sándwiches y preparaciones de todos los días.',
  tradicion: 'Recetas que se traspasan de generación en generación, homenajeando al sabor de nuestro pueblo. Los sabores de siempre, hechos para compartir, celebrar y disfrutar de cada momento.',
};

export const productImages: Record<string, ProductImages> = {
  // ── SECOS ──────────────────────────────────────────────────────────────────
  'salame-colono-grueso': {
    product: '/products-onlys/secos/colono.png',
    nameWithStyle: '/name-with-styles/salame-colono-grueso.png',
  },
  'salame-colono-mano-grueso': {
    product: '/products-onlys/secos/colono.png',
    nameWithStyle: '/name-with-styles/salame-colono-grueso-tradicion.png',
    seal: '/name-with-styles/sello-atado-a-mano-grande.png',
  },
  'salame-metro-grueso': {
    product: '/products-onlys/secos/metro.png',
    nameWithStyle: '/name-with-styles/salame-metro-grueso.png',
  },
  'salame-metro-trozo-grueso-vacio': {
    product: '/products-onlys/secos/metro.png',
    nameWithStyle: '/name-with-styles/salame-metro-trozo-grueso.webp',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'salame-baston-grueso': {
    product: '/products-onlys/secos/bast%C3%B3n.png',
    nameWithStyle: '/name-with-styles/salame-baston-grueso.png',
  },
  'salame-crespon-grueso': {
    product: '/products-onlys/secos/cresp%C3%B3n.png',
    nameWithStyle: '/name-with-styles/salame-crespon-grueso.png',
  },
  'salame-queso-grueso': {
    product: '/products-onlys/secos/con-queso.png',
    nameWithStyle: '/name-with-styles/salame-con-queso-grueso.png',
  },
  'salame-baston-queso-grueso': {
    product: '/products-onlys/secos/bast%C3%B3n-con-queso.png',
    nameWithStyle: '/name-with-styles/salame-baston-con-queso-grueso.png',
  },
  'salame-milan-fino': {
    product: '/products-onlys/secos/mil%C3%A1n.png',
    nameWithStyle: '/name-with-styles/salame-milan-fino.png',
  },
  'salamin-fino': {
    product: '/products-onlys/secos/picado-fino.png',
    nameWithStyle: '/name-with-styles/salamin-picado-fino.png',
  },
  'salame-grasa-grueso-vacio': {
    product: '/products-onlys/secos/salame-en-grasa.png',
    nameWithStyle: '/name-with-styles/salame-en-grasa-grueso.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'salame-colono-grueso-vacio': {
    product: '/products-onlys/secos/colono-al-vac%C3%ADo.png',
    nameWithStyle: '/name-with-styles/salame-colono-grueso-vacio.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  // ── MADURACIÓN ──────────────────────────────────────────────────────────────
  'panceta-salada-arrollada': {
    product: '/products-onlys/maduracion/panceta-arrollada.png',
    nameWithStyle: '/name-with-styles/panceta-salada-arrollada.png',
  },
  'panceta-plancha-vacio': {
    product: '/products-onlys/maduracion/panceta-en-plancha.png',
    nameWithStyle: '/name-with-styles/panceta-en-plancha.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'dados-panceta-bacon-vacio': {
    product: '/products-onlys/maduracion/panceta-dados.png',
    nameWithStyle: '/name-with-styles/dados-panceta-bacon-horizontal.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'jamon-crudo-vacio': {
    product: '/products-onlys/maduracion/jam%C3%B3n-crudo.png',
    nameWithStyle: '/name-with-styles/jamon-crudo.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'bondiola-premium': {
    product: '/products-onlys/maduracion/bondiola-de-cerdo.png',
    nameWithStyle: '/name-with-styles/bondiola-cerdo-premium.png',
  },
  'bondiola-arrollada-premium-vacio': {
    product: '/products-onlys/maduracion/bondiola-al-vac%C3%ADo.png',
    nameWithStyle: '/name-with-styles/bondiola-arrollada-premium.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  // ── FIAMBRES ──────────────────────────────────────────────────────────────
  'jamon-cocido-tradicion': {
    product: '/products-onlys/fiabres/jam%C3%B3n-cocido.png',
    nameWithStyle: '/name-with-styles/jamon-cocido-tradicion.png',
  },
  'fiambre-pata-cerdo': {
    product: '/products-onlys/fiabres/fiambre-cerdo.png',
    nameWithStyle: '/name-with-styles/fiambre-pata-cerdo.png',
  },
  'fiambre-pollo-cerdo': {
    product: '/products-onlys/fiabres/fiambre-pollo-y-cerdo.png',
    nameWithStyle: '/name-with-styles/fiambre-pollo-cerdo-emparedados.png',
  },
  // ── TRADICIÓN ──────────────────────────────────────────────────────────────
  'queso-cerdo-tradicion-vacio': {
    product: '/products-onlys/tradicion/queso-de-cerdo-tradici%C3%B3n.png',
    nameWithStyle: '/name-with-styles/queso-cerdo-tradicion-horizontal.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'queso-cerdo-familiar': {
    product: '/products-onlys/tradicion/queso-de-cerdo.png',
    nameWithStyle: '/name-with-styles/queso-cerdo-familiar.png',
  },
  'chorizo-parrillero': {
    product: '/products-onlys/tradicion/chori-parrillero.png',
    nameWithStyle: '/name-with-styles/chorizo-parrillero.png',
  },
  'chorizos-frescos-1kg-vacio': {
    product: '/products-onlys/tradicion/chori-parrillero-al-vac%C3%ADo.png',
    nameWithStyle: '/name-with-styles/chorizo-parrillero.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'chorizos-frescos-400gr-vacio': {
    product: '/products-onlys/tradicion/chori-parrillero-al-vac%C3%ADo.png',
    nameWithStyle: '/name-with-styles/chorizo-parrillero.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
  'morcilla-rosca': {
    product: '/products-onlys/tradicion/morci-rosca.png',
    nameWithStyle: '/name-with-styles/morcilla-rosca.png',
  },
  'morcilla-parrillera': {
    product: '/products-onlys/tradicion/morci-parrillera.png',
    nameWithStyle: '/name-with-styles/morcilla-parrillera-horizontal.png',
  },
  'morcilla-parrillera-vacio': {
    product: '/products-onlys/tradicion/morci-parrillera.png',
    nameWithStyle: '/name-with-styles/morcilla-parrillera-horizontal.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
  },
};

// ── Imágenes nuevas (material-definitivo) por producto ──────────────────────
// num  = número de imagen en grid-productos / foto-de-producto-id (verificado por etiqueta)
// banner = nombre del archivo en foto-fondo-id (foto lifestyle apaisada del banner del detalle)
// ext = extensión de las imágenes de grid/detalle (por defecto 'png'; los productos
// nuevos se cargan en 'webp').
type ProductMedia = { linea: LineaSlug; num: number; banner: string; ext?: 'png' | 'webp' };

const productMedia: Record<string, ProductMedia> = {
  // SECOS
  'salame-colono-grueso': { linea: 'secos', num: 1, banner: 'colono' },
  'salame-colono-mano-grueso': { linea: 'secos', num: 2, banner: 'colono-tradicion' },
  'salame-metro-grueso': { linea: 'secos', num: 3, banner: 'metro' },
  'salame-metro-trozo-grueso-vacio': { linea: 'secos', num: 12, banner: 'metro', ext: 'webp' },
  'salame-baston-grueso': { linea: 'secos', num: 4, banner: 'baston' },
  'salame-crespon-grueso': { linea: 'secos', num: 5, banner: 'crespon' },
  'salame-queso-grueso': { linea: 'secos', num: 6, banner: 'con-queso' },
  'salame-baston-queso-grueso': { linea: 'secos', num: 7, banner: 'baston-con-queso' },
  'salame-milan-fino': { linea: 'secos', num: 8, banner: 'milan' },
  'salamin-fino': { linea: 'secos', num: 9, banner: 'salmin-picado-fino' },
  'salame-grasa-grueso-vacio': { linea: 'secos', num: 10, banner: 'grasa' },
  'salame-colono-grueso-vacio': { linea: 'secos', num: 11, banner: 'colono-vacio' },
  // MADURACIÓN
  'panceta-salada-arrollada': { linea: 'maduracion', num: 1, banner: 'panceta-arrollada' },
  'panceta-plancha-vacio': { linea: 'maduracion', num: 2, banner: 'panceta-plancha' },
  'dados-panceta-bacon-vacio': { linea: 'maduracion', num: 3, banner: 'panceta-dados' },
  'jamon-crudo-vacio': { linea: 'maduracion', num: 4, banner: 'jamon-crudo' },
  'bondiola-premium': { linea: 'maduracion', num: 5, banner: 'bondiola' },
  'bondiola-arrollada-premium-vacio': { linea: 'maduracion', num: 6, banner: 'bondiola-vacio' },
  // FIAMBRES
  'jamon-cocido-tradicion': { linea: 'fiambres', num: 1, banner: 'jamon-cocido-tradicon' },
  'fiambre-pata-cerdo': { linea: 'fiambres', num: 2, banner: 'fiambre-cerdo' },
  'fiambre-pollo-cerdo': { linea: 'fiambres', num: 3, banner: 'fiambre-pollo-y-cerdo' },
  // TRADICIÓN (los nº 1 y 2 van invertidos respecto al orden del código)
  'queso-cerdo-tradicion-vacio': { linea: 'tradicion', num: 1, banner: 'queso-cerdo-tradicion' },
  'queso-cerdo-familiar': { linea: 'tradicion', num: 2, banner: 'ques-cerdo-familiar' },
  'chorizo-parrillero': { linea: 'tradicion', num: 3, banner: 'chorizo-parrillero' },
  'chorizos-frescos-1kg-vacio': { linea: 'tradicion', num: 4, banner: 'chorizo-parrillero-vacio' },
  'chorizos-frescos-400gr-vacio': { linea: 'tradicion', num: 5, banner: 'chorizo-parrillero-vacio' },
  'morcilla-rosca': { linea: 'tradicion', num: 6, banner: 'morcilla-rosca' },
  'morcilla-parrillera': { linea: 'tradicion', num: 7, banner: 'morcilla-parrillera' },
  'morcilla-parrillera-vacio': { linea: 'tradicion', num: 8, banner: 'morcilla-parrillera-vacio' },
};

const MD_BASE = '/material-definitivo/productos-seccion';

/** Producto recortado para el GRID de la línea. */
export function getProductGridImage(id: string): string | undefined {
  const m = productMedia[id];
  return m ? `${MD_BASE}/grid-productos/grid-productos-${m.linea}/${m.num}.${m.ext ?? 'png'}` : undefined;
}

/** Producto recortado para el DETALLE (otra medida). */
export function getProductDetailImage(id: string): string | undefined {
  const m = productMedia[id];
  return m ? `${MD_BASE}/foto-de-producto-id/${m.linea}-productos-id/${m.num}.${m.ext ?? 'png'}` : undefined;
}

/** Foto lifestyle apaisada para el BANNER del detalle. */
export function getProductBannerImage(id: string): string | undefined {
  const m = productMedia[id];
  return m ? `${MD_BASE}/foto-fondo-id/foto-fondo-id-${m.linea}/${m.banner}.webp` : undefined;
}

/** Banner apaisado por línea (encabezado de la página de línea). */
export const lineaBannerImages: Record<LineaSlug, string> = {
  secos: `${MD_BASE}/lineas/banners/secos.png`,
  maduracion: `${MD_BASE}/lineas/banners/maduracion.png`,
  fiambres: `${MD_BASE}/lineas/banners/fiambres.png`,
  tradicion: `${MD_BASE}/lineas/banners/tradicion.png`,
};
