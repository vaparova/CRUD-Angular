export class Categorias{
  categorias = [
    'Skincare',
    'Maquillaje',
    'Fragancias'
  ];

  getCategoria(categoria: number){
    return this.categorias[categoria];
  }

  setCategoria(categoria: string){
    this.categorias.push(categoria);
  }
}
