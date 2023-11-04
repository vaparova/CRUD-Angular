import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/ProductosService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  categorias = ['Skincare', 'Maquillaje', 'Fragancias'];
  productos: Producto[] = []

  constructor( private productosServ: ProductosService){
    this.productosServ.getProductosBD().then( ()=>{
     this.productos = this.productosServ.getProductosArr();
    });
  }

}
