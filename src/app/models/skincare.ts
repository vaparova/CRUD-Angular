export class Skincare{
  skincare = [
    {
      nombre: 'Crema Antiage',
      categoria: 1,
      precio: 2500,
      descripcion: 'Crema regeneradora Antiage con efecto lifting. Para pieles normales a secas. Uso día y noche',
      imagen: 'cremas1',
    }, {
      nombre: 'Set Cuidado Completo',
      categoria: 1,
      precio: 26000,
      descripcion: 'Set completo de cuidado de la piel. Incluye serum hidratante, crema de dñia y noche, limpiador fac...',
      imagen: 'cremas2',
    }, {
      nombre: 'Kit Sueros Hidratación',
      categoria: 1,
      precio: 9000,
      descripcion: 'Kit de sueros para hidratación profunda de la piel: Retinol, Ácido Hialuronico y Vitamina C',
      imagen: 'sueros',
    }, {
      nombre: 'Set Sueros Lifting',
      categoria: 1,
      precio: 7500,
      descripcion: 'Set x 2 serum con efecto lifting. Contienen Retinol y Niacinamida. Ayuda a la regeneración de la piel',
      imagen: 'sueros2',
    }, {
      nombre: 'Set Sueros Vitaminas',
      categoria: 1,
      precio: 5000,
      descripcion: 'Set x 2 serum de vitaminas. Contiene vitaminas C y B12. Bindan luminosidad y homogeneidad en el tono de ...',
      imagen: 'sueros3',
    }, {
      nombre: 'Suero Hidratación Profunda',
      categoria: 1,
      precio: 3500,
      descripcion: 'Suero de hidratación profunda. Contiene aceites esenciales, almendras, macadamia, oliva, ricino, entre otros',
      imagen: 'sueros4',
    },{
      nombre: 'Suero Aloe Vera',
      categoria: 1,
      precio: 4000,
      descripcion: 'Set de extracto de aloe vera. Brinda confort para pieles secas e intolerantes. Ayuda a reducir rojeces e inperf...',
      imagen: 'sueros5',
    },{
      nombre: 'Set Exfoliante',
      categoria: 1,
      precio: 3000,
      descripcion: 'Suero con efecto exfoliante. Ayuda a eliminar las impurezas de la piel. Uso nocturno',
      imagen: 'sueros6',
    },{
      nombre: 'Set Sueros Uva',
      categoria: 1,
      precio: 5500,
      descripcion: 'Set x 2 sueros con extracto de Uva. Ultrahidratante para pieles secas e intolerantes. Uso diario',
      imagen: 'sueros7',
    },{
      nombre: 'Suero AH',
      categoria: 1,
      precio: 4000,
      descripcion: 'Suero de Ácido Hialurónico al 4%. Efecto rellenador, reduce marcas de expresión. Hidratación intensa',
      imagen: 'sueros8',
    },{
      nombre: 'Set Deluxe Antiage',
      categoria: 1,
      precio: 30000,
      descripcion: 'Set x 2 sueros + crema noche. Contienen Refillmax, poderoso componente antiage y rellenador de arrugas prof..',
      imagen: 'sueros9',
    },{
      nombre: 'Set Sueros Deluxe',
      categoria: 1,
      precio: 50000,
      descripcion: 'Set x 3 sueros. Hidratación, lifting y exfoliación. Contienen Refillmax. Tu piel mas joven en pocos días',
      imagen: 'sueros10',
      },
  ];

  getSkincare(){
    return this.skincare;
  }
}
