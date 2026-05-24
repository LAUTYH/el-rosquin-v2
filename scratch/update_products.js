const fs = require('fs');

const path = 'src/data/products.ts';
let content = fs.readFileSync(path, 'utf-8');

// Update Interface
content = content.replace(
`export interface Producto {
    id: string;
    nombre: string;
    descripcion: string;
    presentacion: string;
    caja: string;
    linea: 'Secos' | 'Maduración' | 'Fiambres' | 'Tradición';
    lineaDescripcion: string;
    venta: string;
}`,
`export interface Producto {
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
}`);

// Add new fields to all products.
// We'll look for the end of each object in the array. Usually they end with:
//         venta: '...'
//     }
// We will replace that with the new fields.

content = content.replace(/(venta:\s*'.*?')\n\s*\}/g, `$1,
        codigo: '--',
        banner: '/id-productos-page-img/imagen-banner-id-img.png',
        ingredientes: 'Carne vacuna, carne de cerdo, tocino, queso tybo, sal, dextrosa, saborizante y especias. Antioxidante: ácido cítrico y ácido ascórbico. Emulsionante: polifosfato de sodio. Conservador: nitrato de sodio.',
        informacionNutricional: {
            porcion: '40 grs = 2 Fetas | Medida Casera',
            valores: {
                'Valor Energético (Kcal = Kj)': '--',
                'Carbohidratos (gr)': '--',
                'Proteínas (gr)': '--',
                'Grasas Totales (gr)': '--',
                'Grasas Saturadas (gr)': '--',
                'Grasas Trans (gr)': '--',
                'Fibra Alimentaria (gr)': '--',
                'Sodio (mg)': '--'
            },
            porcentajes: {
                'Valor Energético (Kcal = Kj)': '--',
                'Carbohidratos (gr)': '--',
                'Proteínas (gr)': '--',
                'Grasas Totales (gr)': '--',
                'Grasas Saturadas (gr)': '--',
                'Grasas Trans (gr)': '--',
                'Fibra Alimentaria (gr)': '--',
                'Sodio (mg)': '--'
            }
        }
    }`);

fs.writeFileSync(path, content);
console.log('Done modifying products.ts');
