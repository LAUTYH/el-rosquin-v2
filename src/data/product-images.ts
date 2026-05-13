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
  secos: '/products-onlys/imagenes-stock/salame-feteado-queso-crackers.jpg',
  maduracion: '/products-onlys/imagenes-stock/bondiola-tabla-quesos-vertical.jpg',
  fiambres: '/products-onlys/imagenes-stock/jamon-cocido-feteado-tabla.jpg',
  tradicion: '/products-onlys/imagenes-stock/chorizos-parrilla-fuego.jpg',
};

export const lineaDescripciones: Record<LineaSlug, string> = {
  secos: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
  maduracion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
  fiambres: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
  tradicion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
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
  'bondiola-premium-vacio': {
    product: '/products-onlys/maduracion/bondiola-de-cerdo.png',
    nameWithStyle: '/name-with-styles/bondiola-cerdo-premium.png',
    seal: '/name-with-styles/sello-envasado-al-vacio-grande.png',
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
