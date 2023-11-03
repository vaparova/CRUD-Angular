import { Categorias } from "./categorias";

export class Producto{
  nombre: string;
  categoria: string;
  precio: number;
  descripcion: string;

  constructor(nombre: string, categoria: number, precio: number, descripcion: string){
    this.nombre = nombre;
    this.categoria = this.setCategoria(categoria);
    this.precio = precio;
    this.descripcion = descripcion;
  }

  setCategoria(categoria: number): string{
    const cat = new Categorias();
    return cat.getCategoria(categoria);
  }
}
