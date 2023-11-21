import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  indexCat = 1;
  @Output() categoria = new EventEmitter<number>();

  sendCategory(idx: number){
    this.categoria.emit(idx);
  }

}
