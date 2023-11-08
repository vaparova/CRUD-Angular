import { Categorias } from "./categorias";

export class Producto{
  nombre: string;
  categoria: number;
  precio: number;
  descripcion: string;
  imagen: string;

  constructor(nombre: string, categoria: number, precio: number, descripcion: string, imagen:string){
    this.nombre = nombre;
    this.categoria = categoria;
    this.precio = precio;
    this.descripcion = descripcion;
    this.imagen = imagen;
  }

  // setCategoria(categoria: number): string{
  //   const cat = new Categorias();
  //   return cat.getCategoria(categoria);
  // }
}
