import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CarritoComponent } from "./carrito/carrito.component";
import { NavbarComponent } from "./navbar/navbar.component";
import { CarouselComponent } from "./carousel/carousel.component";


@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CarritoComponent,
    NavbarComponent,
    CarouselComponent
  ],
  exports: [
    CarritoComponent,
    NavbarComponent,
    CarouselComponent
  ]
})
export class ComponentModule{}
