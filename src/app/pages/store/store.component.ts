import { Component, Input, SimpleChanges } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { Producto } from 'src/app/models/producto';
import { ProductosService } from 'src/app/services/ProductosService';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent {
  categorias = ['','Skincare', 'Maquillaje', 'Fragancias'];
  productos: Producto[] = [];
  e: Error | undefined;
  delay = false;
  @Input() catStore: number | undefined;


  constructor( private productosServ: ProductosService){
    this.productosServ.getProductosArr(1).subscribe( {
      next: prod => this.setProductos(prod),
      error: err => this.e = err
    });

  }

  ngAfterViewInit(): void {
    console.log(this.catStore);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.delay = true;
    this.productos = [];

    setTimeout( ()=>{
      if(this.catStore){
        this.productosServ.getProductosArr(this.catStore).subscribe( {
          next: prod => this.setProductos(prod),
          error: err => this.e = err
        });
      }
      this.delay = false;
    },500);

  }

  setProductos(prod: Producto[]){
    console.log(prod);
    (prod.length > 0)? this.productos = prod : this.error();
  }

  error(){
    this.e = new Error("No se obtuvo respuesta desde BD!")
    throw this.e;
  }

}
