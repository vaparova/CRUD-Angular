import { Component, Input } from '@angular/core';
import { Categorias } from 'src/app/models/categorias';
import { Producto } from 'src/app/models/producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

  @Input() productos: Producto[] | undefined;


  constructor(){

  }


}
