import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarritoComponent } from "./carrito/carrito.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";
import { ProductosComponent } from './productos/productos.component';
import { GooglePayButtonModule } from '@google-pay/button-angular';


@NgModule({
  imports: [
    CommonModule,
    GooglePayButtonModule
  ],
  declarations: [
    CarritoComponent,
    NavbarComponent,
    CarouselComponent,
    ProductosComponent
  ],
  exports: [
    CarritoComponent,
    NavbarComponent,
    CarouselComponent,
    ProductosComponent
  ]
})
export class ComponentModule{}
