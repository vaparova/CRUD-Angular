import { Component } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/ProductosService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  categorias = ['Skincare', 'Maquillaje', 'Fragancias'];
  productos: Producto[] = [];

  constructor( private productosServ: ProductosService){
    this.productosServ.getProductosArr(2).pipe(
      catchError(err => throwError(()=> new Error('Error en BD')))
    ).subscribe(productos => {
      this.productos = productos
    })
  }

}
