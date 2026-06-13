export interface Producto {
    id: string;
    nombre: string;
    descripcion: string;
    presentacion: string;
    caja: string;
    linea: 'Secos' | 'Maduración' | 'Fiambres' | 'Tradición';
    lineaDescripcion: string;
    venta: string;
    codigo: string;
    banner: string;
    ingredientes: string;
    informacionNutricional: {
        porcion: string;
        valores: Record<string, string>;
        porcentajes: Record<string, string>;
    };
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
        venta: 'Venta al peso',
        codigo: '100',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '186 = 772',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '16',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '689'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '9',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '14',
                'Grasas Totales (gr)': '29',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '29'
            }
        }
    },
    {
        id: 'salame-colono-mano-grueso',
        nombre: 'Salame Tipo Colono Tradición - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 12 unidades apróx. 2,2 kg.',
        caja: '5 tiras apróx. 11 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '101',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '186 = 772',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '16',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '689'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '9',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '14',
                'Grasas Totales (gr)': '29',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '29'
            }
        }
    },
    {
        id: 'salame-metro-grueso',
        nombre: 'Salame Tipo Metro - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 100 cm apróx. 2 kg.',
        caja: '7 unidades apróx. 14 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '102',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '161 = 667',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '7',
                'Grasas Totales (gr)': '15',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '664'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '8',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '26',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '28'
            }
        }
    },
    {
        id: 'salame-metro-trozo-grueso-vacio',
        nombre: 'Salame Tipo Metro en Trozo - Picado Grueso - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,350 kg.',
        caja: '32 unidades apróx. 12 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '112',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '161 = 667',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '7',
                'Grasas Totales (gr)': '15',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '664'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '8',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '26',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '28'
            }
        }
    },
    {
        id: 'salame-baston-grueso',
        nombre: 'Salame Tipo Bastón - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 30 cm apróx. 0,6 kg.',
        caja: '26 unidades apróx. 15 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '103',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '161 = 667',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '7',
                'Grasas Totales (gr)': '15',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '664'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '8',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '9',
                'Grasas Totales (gr)': '26',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '28'
            }
        }
    },
    {
        id: 'salame-crespon-grueso',
        nombre: 'Salame Tipo Crespón - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 33 cm apróx. 1,5 kg.',
        caja: '10 unidades apróx. 15 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '104',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '142 = 588',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '6',
                'Grasas Totales (gr)': '13',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '665'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '9',
                'Grasas Totales (gr)': '23',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '28'
            }
        }
    },
    {
        id: 'salame-queso-grueso',
        nombre: 'Salame con Queso - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 8 unidades apróx. 1,4 kg.',
        caja: '8 tiras apróx. 11 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '105',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, queso tybo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251. CONTIENE DERIVADOS DE LECHE.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '151 = 627',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '13',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '703'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '8',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '24',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '29'
            }
        }
    },
    {
        id: 'salame-baston-queso-grueso',
        nombre: 'Salame Tipo Bastón con Queso - Picado Grueso',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 30 cm apróx. 0,6 kg.',
        caja: '26 unidades apróx. 15 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '107',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, queso tybo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251. CONTIENE DERIVADOS DE LECHE.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '151 = 627',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '13',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '703'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '8',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '24',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '29'
            }
        }
    },
    {
        id: 'salame-milan-fino',
        nombre: 'Salame Tipo Milán - Picado Fino',
        descripcion: 'Rellenar',
        presentacion: '1 unidad de 45 cm apróx. 2,2 kg.',
        caja: '6 unidades apróx. 14 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '108',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, tocino, sal, pimienta blanca molida, ajo, canela. Estabilizante: INS 452I, INS 450III. Regulador de Acidez: INS 331III. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '114 = 473',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '9',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '467'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '6',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '17',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '19'
            }
        }
    },
    {
        id: 'salamin-fino',
        nombre: 'Salamín - Picado Fino',
        descripcion: 'Rellenar',
        presentacion: 'Tiras de 5 unidades apróx. 1 kg.',
        caja: '12 tiras apróx. 12 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '--',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '148 = 611',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '2',
                'Grasas Totales (gr)': '15,36',
                'Grasas Saturadas (gr)': '11',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '2',
                'Sodio (mg)': '262'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '3',
                'Grasas Totales (gr)': '28',
                'Grasas Saturadas (gr)': '49',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '8',
                'Sodio (mg)': '11'
            }
        }
    },
    {
        id: 'salame-grasa-grueso-vacio',
        nombre: 'Salame en Grasa - Picado Grueso - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,250 kg.',
        caja: '50 unidades apróx. 12 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '110',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '186 = 772',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '16',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '689'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '9',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '14',
                'Grasas Totales (gr)': '29',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '29'
            }
        }
    },
    {
        id: 'salame-colono-grueso-vacio',
        nombre: 'Salame Tipo Colono - Picado Grueso - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,150 kg.',
        caja: '60 unidades apróx. 10 kg.',
        linea: 'Secos',
        lineaDescripcion: 'Chacinados de curado tradicional elaborados con especias naturales, pensados para mantener el sabor clásico en picadas.',
        venta: 'Venta al peso',
        codigo: '111',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, azúcar, pimienta blanca molida, nuez moscada, monohidrato de dextrosa. Estabilizante: INS 339II, INS 452II, INS 450III. Antioxidante: INS 316. Conservante: INS 250, INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '186 = 772',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '16',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '689'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '9',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '14',
                'Grasas Totales (gr)': '29',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '29'
            }
        }
    },
    {
        id: 'panceta-salada-arrollada',
        nombre: 'Panceta Salada Arrollada',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,8 kg.',
        caja: '15 unidades apróx. 12 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso',
        codigo: '201',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Panceta de cerdo, sal, pimienta, azúcar. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '133 = 552',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '1551'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '15',
                'Grasas Totales (gr)': '18',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '63'
            }
        }
    },
    {
        id: 'panceta-plancha-vacio',
        nombre: 'Panceta en Plancha - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 0,9 kg.',
        caja: '20 unidades apróx. 18 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso',
        codigo: '202',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Panceta de cerdo, sal, pimienta, azúcar. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '40 grs = 3 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '133 = 552',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '1551'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '15',
                'Grasas Totales (gr)': '18',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '63'
            }
        }
    },
    {
        id: 'dados-panceta-bacon-vacio',
        nombre: 'Dados de Panceta Tipo Bacon - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 bolsita apróx. 1 kg.',
        caja: '15 bolsitas apróx. 15 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso',
        codigo: '205',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Panceta de cerdo, sal, pimienta, azúcar. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '40 grs',
            valores: {
                'Valor Energético (Kcal = Kj)': '133 = 552',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '1551'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '15',
                'Grasas Totales (gr)': '18',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '63'
            }
        }
    },
    {
        id: 'jamon-crudo-vacio',
        nombre: 'Jamón Crudo - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 2,2 kg.',
        caja: '7 unidades apróx. 15 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso',
        codigo: '203',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Pernil de cerdo, sal, azúcar. Conservante: INS 251.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '111 = 465',
                'Carbohidratos (gr)': '3',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '8',
                'Grasas Saturadas (gr)': '3',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '678'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '6',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '14',
                'Grasas Saturadas (gr)': '13',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '28'
            }
        }
    },
    {
        id: 'bondiola-premium',
        nombre: 'Bondiola de Cerdo Premium',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,1 kg.',
        caja: '12 unidades apróx. 12 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso',
        codigo: '204',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Bondiola de cerdo, sal, azúcar, pimienta blanca molida. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '127 = 529',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '9',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '1484'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '6',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '12',
                'Grasas Totales (gr)': '18',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '62'
            }
        }
    },
    {
        id: 'bondiola-arrollada-premium-vacio',
        nombre: 'Bondiola Arrollada Premium - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,1 kg.',
        caja: '12 unidades apróx. 12 kg.',
        linea: 'Maduración',
        lineaDescripcion: 'Cortes seleccionados de cerdo sometidos a procesos estrictos de estacionamiento para lograr texturas y perfiles de sabor premium.',
        venta: 'Venta al peso',
        codigo: '206',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Bondiola de cerdo, sal, azúcar, pimienta blanca molida. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '127 = 529',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '9',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '-',
                'Sodio (mg)': '1484'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '6',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '12',
                'Grasas Totales (gr)': '18',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '62'
            }
        }
    },
    {
        id: 'jamon-cocido-tradicion',
        nombre: 'Jamón Cocido Tradición',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 3,8 kg.',
        caja: '4 unidades apróx. 15 kg.',
        linea: 'Fiambres',
        lineaDescripcion: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
        venta: 'Venta al peso',
        codigo: '300',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Pernil de cerdo, sal, azúcar, pimienta, clavo de olor. Estabilizante: INS 452ii. Conservante: INS 251, INS 252.',
        informacionNutricional: {
            porcion: '40 grs = 3 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '40 = 167',
                'Carbohidratos (gr)': '4',
                'Proteínas (gr)': '4',
                'Grasas Totales (gr)': '1',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '339'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '2',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '5',
                'Grasas Totales (gr)': '2',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '14'
            }
        }
    },
    {
        id: 'fiambre-pata-cerdo',
        nombre: 'Fiambre Cocido de Pata de Cerdo',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 5 kg.',
        caja: '4 unidades apróx. 20 kg.',
        linea: 'Fiambres',
        lineaDescripcion: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
        venta: 'Venta al peso',
        codigo: '302',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Pernil de cerdo, agua, almidón, sal fina, proteína aislada de soja (2%), azúcar, dextrosa, saborizante. Emulsionante: INS 452 I. Antioxidante: INS 316. Conservadores: INS 250 - 251. Colorante: INS 120. CONTIENE DERIVADOS DE TRIGO. CONTIENE DERIVADOS DE SOJA.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '42 = 176',
                'Carbohidratos (gr)': '3',
                'Proteínas (gr)': '5',
                'Grasas Totales (gr)': '1',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '472'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '2',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '7',
                'Grasas Totales (gr)': '2',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '20'
            }
        }
    },
    {
        id: 'fiambre-pollo-cerdo',
        nombre: 'Fiambre Cocido de Pollo y Cerdo para Emparedados',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 4 kg.',
        caja: '4 unidades apróx. 16 kg.',
        linea: 'Fiambres',
        lineaDescripcion: 'Fiambres cocidos orientados a la versatilidad diaria, elaborados con materia prima de alta calidad para sándwiches y preparaciones frías.',
        venta: 'Venta al peso',
        codigo: '303',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne de pollo, agua, carne de cerdo, almidón, sal, azúcar, proteína aislada de soja (2%), dextrosa, saborizante. Estabilizante: INS 452 I. Antioxidante: INS 316. Conservadores: INS 250 - 251. Colorante: INS 120. CONTIENE DERIVADOS DE TRIGO. CONTIENE DERIVADOS DE SOJA.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas',
            valores: {
                'Valor Energético (Kcal = Kj)': '44 = 185',
                'Carbohidratos (gr)': '7',
                'Proteínas (gr)': '3',
                'Grasas Totales (gr)': '1',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '107'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '2',
                'Carbohidratos (gr)': '2',
                'Proteínas (gr)': '5',
                'Grasas Totales (gr)': '0',
                'Grasas Saturadas (gr)': '0',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '4'
            }
        }
    },
    {
        id: 'queso-cerdo-tradicion-vacio',
        nombre: 'Queso de Cerdo Tradición - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,2 y 1,8 kg.',
        caja: '10 unidades apróx. 18 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso',
        codigo: '306',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Cabeza de cerdo, quijada vacuna, lengua vacuna, sal, pimienta blanca molida, ají molido, nuez moscada. Estabilizante: INS 452i.',
        informacionNutricional: {
            porcion: '50 grs = 1/2 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '73 = 307',
                'Carbohidratos (gr)': '4',
                'Proteínas (gr)': '6',
                'Grasas Totales (gr)': '0',
                'Grasas Saturadas (gr)': '3',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '555'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '4',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '0',
                'Grasas Saturadas (gr)': '12',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '23'
            }
        }
    },
    {
        id: 'queso-cerdo-familiar',
        nombre: 'Queso de Cerdo Familiar',
        descripcion: 'Rellenar',
        presentacion: '1 unidad apróx. 1,2 kg.',
        caja: '15 unidades apróx. 18 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso',
        codigo: '304',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Cabeza de cerdo, quijada vacuna, lengua vacuna, sal, pimienta blanca molida, ají molido, nuez moscada. Estabilizante: INS 452i.',
        informacionNutricional: {
            porcion: '50 grs = 1/2 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '73 = 307',
                'Carbohidratos (gr)': '4',
                'Proteínas (gr)': '6',
                'Grasas Totales (gr)': '0',
                'Grasas Saturadas (gr)': '3',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '555'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '4',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '0',
                'Grasas Saturadas (gr)': '12',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '23'
            }
        }
    },
    {
        id: 'chorizo-parrillero',
        nombre: 'Chorizo Parrillero',
        descripcion: 'Rellenar',
        presentacion: 'Ganchos de apróx. 10 kg. (80 choricitos)',
        caja: 'No se especifica',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Elaboración a pedido / Venta al peso',
        codigo: '401',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, dextrosa, pimienta blanca, nuez moscada. Estabilizante: INS 452i. Acidulante: INS 330. Antioxidante: INS 300. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '50 grs = 1/2 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '94 = 390',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '7',
                'Grasas Saturadas (gr)': '3',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '391'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '5',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '12',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '16'
            }
        }
    },
    {
        id: 'chorizos-frescos-1kg-vacio',
        nombre: 'Chorizos Frescos Parrilleros - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: 'Pack de 1 kg.',
        caja: '12 packs apróx. 12 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso',
        codigo: '402',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, dextrosa, pimienta blanca, nuez moscada. Estabilizante: INS 452i. Acidulante: INS 330. Antioxidante: INS 300. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '50 grs = 1/2 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '94 = 390',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '7',
                'Grasas Saturadas (gr)': '3',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '391'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '5',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '12',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '16'
            }
        }
    },
    {
        id: 'chorizos-frescos-400gr-vacio',
        nombre: 'Chorizos Frescos Parrilleros - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: 'Pack de 400 gr.',
        caja: '24 packs apróx. 12 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso',
        codigo: '402',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, sal, dextrosa, pimienta blanca, nuez moscada. Estabilizante: INS 452i. Acidulante: INS 330. Antioxidante: INS 300. Conservante: INS 250.',
        informacionNutricional: {
            porcion: '50 grs = 1/2 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '94 = 390',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '7',
                'Grasas Saturadas (gr)': '3',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '391'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '5',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '10',
                'Grasas Totales (gr)': '10',
                'Grasas Saturadas (gr)': '12',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '0',
                'Sodio (mg)': '16'
            }
        }
    },
    {
        id: 'morcilla-rosca',
        nombre: 'Morcilla Rosca',
        descripcion: 'Rellenar',
        presentacion: 'Ganchos de apróx. 8 kg.',
        caja: 'No se especifica',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Elaboración a pedido / Venta al peso',
        codigo: '403',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Sangre porcina desfibrinada, cuero de cerdo, carne de cerdo, cebolla de verdeo, carne vacuna, sal, pimienta blanca, nuez moscada, clavo de olor.',
        informacionNutricional: {
            porcion: '50 grs = 1/6 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '144 = 602',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '12',
                'Grasas Saturadas (gr)': '10',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '1',
                'Sodio (mg)': '257'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '22',
                'Grasas Saturadas (gr)': '45',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '4',
                'Sodio (mg)': '11'
            }
        }
    },
    {
        id: 'morcilla-parrillera',
        nombre: 'Morcilla Parrillera',
        descripcion: 'Rellenar',
        presentacion: 'Ganchos de apróx. 10 kg.',
        caja: 'No se especifica',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Elaboración a pedido / Venta al peso',
        codigo: '404',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Sangre porcina desfibrinada, cuero de cerdo, carne de cerdo, cebolla de verdeo, carne vacuna, sal, pimienta blanca, nuez moscada, clavo de olor.',
        informacionNutricional: {
            porcion: '50 grs = 1/6 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '144 = 602',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '12',
                'Grasas Saturadas (gr)': '10',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '1',
                'Sodio (mg)': '257'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '22',
                'Grasas Saturadas (gr)': '45',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '4',
                'Sodio (mg)': '11'
            }
        }
    },
    {
        id: 'morcilla-parrillera-vacio',
        nombre: 'Morcilla Parrillera - Envasado al Vacío',
        descripcion: 'Rellenar',
        presentacion: 'Pack de 450 gr.',
        caja: '24 packs apróx. 10 kg.',
        linea: 'Tradición',
        lineaDescripcion: 'Embutidos y cortes clásicos argentinos enfocados específicamente en la experiencia de parrilla.',
        venta: 'Venta al peso',
        codigo: '405',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Sangre porcina desfibrinada, cuero de cerdo, carne de cerdo, cebolla de verdeo, carne vacuna, sal, pimienta blanca, nuez moscada, clavo de olor.',
        informacionNutricional: {
            porcion: '50 grs = 1/6 Unidad',
            valores: {
                'Valor Energético (Kcal = Kj)': '144 = 602',
                'Carbohidratos (gr)': '1',
                'Proteínas (gr)': '8',
                'Grasas Totales (gr)': '12',
                'Grasas Saturadas (gr)': '10',
                'Grasas Trans (gr)': '0',
                'Fibra Alimentaria (gr)': '1',
                'Sodio (mg)': '257'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '7',
                'Carbohidratos (gr)': '0',
                'Proteínas (gr)': '11',
                'Grasas Totales (gr)': '22',
                'Grasas Saturadas (gr)': '45',
                'Grasas Trans (gr)': '-',
                'Fibra Alimentaria (gr)': '4',
                'Sodio (mg)': '11'
            }
        }
    }
];
