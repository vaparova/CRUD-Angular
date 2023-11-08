import { Producto } from "./producto";

export class Fragancias{
  private fragancias: Array<Producto> = [
    {
      nombre: 'Pink Dreams',
      categoria: 2,
      precio: 15000,
      descripcion: 'Eau de Parfum Pink Dreams - Femenino. Familia Olfativa: Floral - Frutal. Presentación 120ml. ',
      imagen: 'fragancias/perfume1',
    }, {
      nombre: 'Blue Dreams',
      categoria: 2,
      precio: 12500,
      descripcion: 'Eau de Toilette Blue Dreams - Masculino. Familia Olfativa: Ambarada - Acuatica. Presentación 90ml',
      imagen: 'fragancias/perfume2',
    }, {
      nombre: 'Gold Price',
      categoria: 2,
      precio: 21000,
      descripcion: 'Eau de Parfum Gold Price - Masculino. Familia Olfativa: Amaderada - Oriental . Presentación 120ml',
      imagen: 'fragancias/perfume3',
    }, {
      nombre: 'Victory',
      categoria: 2,
      precio: 25000,
      descripcion: 'Eau de Parfum Victory - Masculino. Familia Olfativa: Oriental - Fougere. Presentación 120ml',
      imagen: 'fragancias/perfume5',
    }, {
      nombre: 'Peach Sweet',
      categoria: 2,
      precio: 15000,
      descripcion: 'Eau de Toilette Peach Sweet - Femenino. Familia Olfativa: Floral - Oriental. Presentación 90ml',
      imagen: 'fragancias/perfume6',
    }, {
      nombre: 'Crazy Love',
      categoria: 2,
      precio: 16000,
      descripcion: 'Eau de Toilette Crazy Love - Femenino. Familia: Floral - Chipre. Presentación 90ml',
      imagen: 'fragancias/perfume7',
    },{
      nombre: 'Gold Aqua',
      categoria: 2,
      precio: 7500,
      descripcion: 'Deo Colonia Gold Aqua - Femenino. Familia: Oriental - Acuatica. Presentación 90ml',
      imagen: 'fragancias/perfume8',
    },{
      nombre: 'Genesis',
      categoria: 2,
      precio: 7000,
      descripcion: 'Deo Colonia Genesis - Femenino. Familia: Floral - Aldehídrica. Presentación 90ml',
      imagen: 'fragancias/perfume9',
    },{
      nombre: 'Black Me',
      categoria: 2,
      precio: 9000,
      descripcion: 'Eau de toilette Black Me - Masculino - Familia: Fougere - Amaderada. Presentación 90ml',
      imagen: 'fragancias/perfume10',
    },{
      nombre: 'Supreme Duo',
      categoria: 2,
      precio: 39000,
      descripcion: 'Eau de perfum + Eau de toilette Supreme - Masculino - Familia: Ambarada - Acuatica. Presentación 120ml - 90ml',
      imagen: 'fragancias/perfume11',
    },
  ];

  getFragancias(){
    return this.fragancias;
  }
}
