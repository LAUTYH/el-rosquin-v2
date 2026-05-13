export interface Producto {
    id: string;
    nombre: string;
    descripcion: string;
    presentacion: string;
    caja: string;
    linea: 'Secos' | 'Maduración' | 'Fiambres' | 'Tradición';
    lineaDescripcion: string;
    venta: string;
}

export const productos: Producto[] = [
    {
        id: 'salame-colono-grueso',
        nombre: 'Salame Tipo Colono - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 12 unidades apróx. 2,2 kg.',
        caja: '5 tiras apróx. 11 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-colono-mano-grueso',
        nombre: 'Salame Tipo Colono Atado a Mano - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 12 unidades apróx. 2,2 kg.',
        caja: '5 tiras apróx. 11 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-metro-grueso',
        nombre: 'Salame Tipo Metro - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 100 cm apróx. 2 kg.',
        caja: '7 unidades apróx. 14 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-baston-grueso',
        nombre: 'Salame Tipo Bastón - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 30 cm apróx. 0,6 kg.',
        caja: '26 unidades apróx. 15 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-crespon-grueso',
        nombre: 'Salame Tipo Crespón - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 33 cm apróx. 1,5 kg.',
        caja: '10 unidades apróx. 15 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-queso-grueso',
        nombre: 'Salame con Queso - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 8 unidades apróx. 1,4 kg.',
        caja: '8 tiras apróx. 11 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-baston-queso-grueso',
        nombre: 'Salame Tipo Bastón con Queso - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 30 cm apróx. 0,6 kg.',
        caja: '26 unidades apróx. 15 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-milan-fino',
        nombre: 'Salame Tipo Milán - Picado Fino',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 45 cm apróx. 2,2 kg.',
        caja: '6 unidades apróx. 14 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salamin-fino',
        nombre: 'Salamín - Picado Fino',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 5 unidades apróx. 1 kg.',
        caja: '12 tiras apróx. 12 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-grasa-grueso-vacio',
        nombre: 'Salame en Grasa - Picado Grueso - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,250 kg.',
        caja: '50 unidades apróx. 12 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'salame-colono-grueso-vacio',
        nombre: 'Salame Tipo Colono - Picado Grueso - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,150 kg.',
        caja: '60 unidades apróx. 10 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso'
    },
    {
        id: 'panceta-salada-arrollada',
        nombre: 'Panceta Salada Arrollada',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,8 kg.',
        caja: '15 unidades apróx. 12 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso'
    },
    {
        id: 'panceta-plancha-vacio',
        nombre: 'Panceta en Plancha - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,9 kg.',
        caja: '20 unidades apróx. 18 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso'
    },
    {
        id: 'dados-panceta-bacon-vacio',
        nombre: 'Dados de Panceta Tipo Bacon - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 bolsita apróx. 1 kg.',
        caja: '15 bolsitas apróx. 15 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso'
    },
    {
        id: 'jamon-crudo-vacio',
        nombre: 'Jamón Crudo - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 2,2 kg.',
        caja: '7 unidades apróx. 15 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso'
    },
    {
        id: 'bondiola-premium-vacio',
        nombre: 'Bondiola de Cerdo Premium - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,1 kg.',
        caja: '12 unidades apróx. 12 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso'
    },
    {
        id: 'bondiola-arrollada-premium-vacio',
        nombre: 'Bondiola Arrollada Premium - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,1 kg.',
        caja: '12 unidades apróx. 12 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso'
    },
    {
        id: 'jamon-cocido-tradicion',
        nombre: 'Jamón Cocido Tradición',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 3,8 kg.',
        caja: '4 unidades apróx. 15 kg.',
        linea: 'Fiambres',
        lineaDescripcion: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
        venta: 'Venta al peso'
    },
    {
        id: 'fiambre-pata-cerdo',
        nombre: 'Fiambre Cocido de Pata de Cerdo',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 5 kg.',
        caja: '4 unidades apróx. 20 kg.',
        linea: 'Fiambres',
        lineaDescripcion: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
        venta: 'Venta al peso'
    },
    {
        id: 'fiambre-pollo-cerdo',
        nombre: 'Fiambre Cocido de Pollo y Cerdo para Emparedados',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 4 kg.',
        caja: '4 unidades apróx. 16 kg.',
        linea: 'Fiambres',
        lineaDescripcion: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
        venta: 'Venta al peso'
    },
    {
        id: 'queso-cerdo-tradicion-vacio',
        nombre: 'Queso de Cerdo Tradición - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,2 y 1,8 kg.',
        caja: '10 unidades apróx. 18 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso'
    },
    {
        id: 'queso-cerdo-familiar',
        nombre: 'Queso de Cerdo Familiar',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,2 kg.',
        caja: '15 unidades apróx. 18 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso'
    },
    {
        id: 'chorizo-parrillero',
        nombre: 'Chorizo Parrillero',
        descripcion: 'Rellenar',
        presentacion: 'Ganchos de apróx. 10 kg. (80 choricitos)',
        caja: 'No se especifica',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Elaboración a pedido / Venta al peso'
    },
    {
        id: 'chorizos-frescos-1kg-vacio',
        nombre: 'Chorizos Frescos Parrilleros - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: 'Pack de 1 kg.',
        caja: '12 packs apróx. 12 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso'
    },
    {
        id: 'chorizos-frescos-400gr-vacio',
        nombre: 'Chorizos Frescos Parrilleros - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: 'Pack de 400 gr.',
        caja: '24 packs apróx. 12 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso'
    },
    {
        id: 'morcilla-rosca',
        nombre: 'Morcilla Rosca',
        descripcion: 'Rellenar',
        presentacion: 'Ganchos de apróx. 8 kg.',
        caja: 'No se especifica',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Elaboración a pedido / Venta al peso'
    },
    {
        id: 'morcilla-parrillera',
        nombre: 'Morcilla Parrillera',
        descripcion: 'Rellenar',
        presentacion: 'Ganchos de apróx. 10 kg.',
        caja: 'No se especifica',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Elaboración a pedido / Venta al peso'
    },
    {
        id: 'morcilla-parrillera-vacio',
        nombre: 'Morcilla Parrillera - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: 'Pack de 450 gr.',
        caja: '24 packs apróx. 10 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso'
    }
];