import { Component } from '@angular/core';
import { ProductosService } from 'src/app/services/ProductosService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  categorias = ['Skincare', 'Maquillaje', 'Fragancias'];

  constructor( private productosServ: ProductosService){
    this.productosServ.getProductos().then( ()=>{
      this.productosServ.setProductos();
      this.productosServ.setBd();
    });
  }

}
