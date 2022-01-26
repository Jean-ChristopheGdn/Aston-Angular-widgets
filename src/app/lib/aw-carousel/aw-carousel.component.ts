import { Component, Input, OnInit } from '@angular/core';
import { AwCarouselImgModel } from './aw-carousel-img.model';

@Component({
  selector: 'aw-aw-carousel',
  templateUrl: './aw-carousel.component.html',
  styleUrls: ['./aw-carousel.component.scss']
})
export class AwCarouselComponent implements OnInit {

  @Input() images: AwCarouselImgModel[]= [];

  currentPos: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  next(): void{
    if(this.currentPos < this.images.length -1){
      this.currentPos++;
    } else {
      this.currentPos = 0;
    }
  }
  prev(): void{
    if(this.currentPos > 0){
      this.currentPos--;
    } else {
      this.currentPos = this.images.length -1;
    }
  }
}
