import { Cliente } from "./cliente";
import { Producto } from "./producto";

export class OrdenCompra{
  fecha: Date;
  productos: Producto[];
  total: number;
  pagado: boolean;
  cliente: Cliente;

  constructor(productos: Producto[], cliente: Cliente){
    this.fecha = new Date();
    this.productos = productos;
    this.total = this.calcularTotal(productos);
    this.pagado = false;
    this.cliente = cliente;
  }

  calcularTotal(productos: Producto[]){
    let tot = 0;
    this.productos.forEach( (prod) =>{
      tot = tot + prod.precio
    });
    return tot;
  }
}
