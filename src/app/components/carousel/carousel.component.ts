import { Component, ContentChildren, Input, OnInit, QueryList } from '@angular/core';

@Component({
  selector: 'aw-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  
  @Input() carouselArray: string[] = ["http://unsplash.it/2000/1000?random&gravity=center","http://unsplash.it/2000/1001?random&gravity=center","http://unsplash.it/2000/1002?random&gravity=center"];
  indexImage: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  onLeft() {
    if(this.indexImage < 0) {
      this.indexImage = this.carouselArray.length - 1;
    } else {
      this.indexImage -= 1;
      console.log(this.indexImage);
    }
    
  }
  onRight(){
    if(this.indexImage > this.carouselArray.length - 1) {
      this.indexImage = 0;
    } else{
      this.indexImage += 1;
      console.log(this.indexImage);
    }
  }
}
