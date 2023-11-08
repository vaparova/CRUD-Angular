export class Categorias{
  categorias = [
    'skincare',
    'maquillaje',
    'fragancias'
  ];

  getCategoria(categoria: number){
    return this.categorias[categoria];
  }

  setCategoria(categoria: string){
    this.categorias.push(categoria);
  }
}
