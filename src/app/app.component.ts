import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { AwCarouselImgModel } from './lib/aw-carousel/aw-carousel-img.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-widgets';

  slides: AwCarouselImgModel[]= [
    new AwCarouselImgModel(
    'Titre 1',
    'Description 1',
    'http://unsplash.it/2000/1000?random&gravity=center'
  ),
  new AwCarouselImgModel(
    'Titre 2',
    'Description 2',
    'http://unsplash.it/2000/1001?random&gravity=center'
  ),
  new AwCarouselImgModel(
    'Titre 3',
    'Description 3',
    'http://unsplash.it/2000/1002?random&gravity=center'
  ),
  ]
  @ViewChild('pageTitle')
  titleRef!: ElementRef;

  constructor() {
  }

  ngAfterViewInit(): void {
    console.log(this.titleRef.nativeElement);
  }
}
