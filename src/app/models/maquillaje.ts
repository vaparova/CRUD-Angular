import { Producto } from "./producto";

export class Maquillaje{
  private maquillaje: Array<Producto> = [
    {
      nombre: 'Set de Bases',
      categoria: 1,
      precio: 15000,
      descripcion: 'Set x 3 Bases de maquillage. Contiene corrector, iluminador y contourning. Para todo tipo de pieles',
      imagen: 'maquillaje/maq1',
    }, {
      nombre: 'Base iluminadora',
      categoria: 1,
      precio: 7000,
      descripcion: 'Base de maquillaje con efecto iluminador. Tono universal que se adapta al de tu piel. Para todo tipo de pieles',
      imagen: 'maquillaje/maq2',
    }, {
      nombre: 'Base strobing',
      categoria: 1,
      precio: 7000,
      descripcion: 'Base primer con efecto strobing. Formula ideal para iluminar partes de tu rostro. Para todo tipo de piel',
      imagen: 'maquillaje/maq3',
    }, {
      nombre: 'Labial Nude Matte',
      categoria: 1,
      precio: 3500,
      descripcion: 'Labial Nude Matte. Efecto plumping. Extra hidratación para tus labios. Ultrapigmentados y de larga duración',
      imagen: 'maquillaje/maq4',
    }, {
      nombre: 'Labial Satinado Perlado',
      categoria: 1,
      precio: 3500,
      descripcion: 'Labial efecto satinado perlado. Efecto plumping. Extra hidratación para tus labios. Ultrapigmentados y de larga duración',
      imagen: 'maquillaje/maq5',
    }, {
      nombre: 'Set Labial + Liner',
      categoria: 1,
      precio: 6500,
      descripcion: 'Set labial satinado perlado + liner. Efecto plumping. Extra hidratación para tus labios. Ultrapigmentados y de larga duración',
      imagen: 'maquillaje/maq6',
    },{
      nombre: 'Set Labial + Rímel',
      categoria: 1,
      precio: 15000,
      descripcion: 'Set labial satinado perlado + Rímel a prueba de agua. Efecto plumping. Extra hidratación para tus labios. Ultrapigmentado y larga duración',
      imagen: 'maquillaje/maq7',
    },{
      nombre: 'Rubor Compacto',
      categoria: 1,
      precio: 7000,
      descripcion: 'Rubor compacto con espejo. Fórmula extra hidratante y con acabado mate. Para todo tipo de pieles.',
      imagen: 'maquillaje/maq8',
    },{
      nombre: 'Bronzer Compacto',
      categoria: 1,
      precio: 7500,
      descripcion: 'Bronzer compacto con espejo. Fórmula extra hidratante con acabado satinado. Para todo tipo de pieles.',
      imagen: 'maquillaje/maq9',
    },
  ];

  getMaquillaje(){
    return this.maquillaje;
  }
}
