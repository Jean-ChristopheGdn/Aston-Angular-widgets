import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'aw-tags',
  templateUrl: './aw-tags.component.html',
  styleUrls: ['./aw-tags.component.scss'],
  animations: [
    trigger('fadeIn',[
      state('void', style({ opacity: 0 })),
      transition(':enter', animate(1000))
    ]),
    trigger('fadeOut', [
      state('void', style({opacity: 0})),
      transition(':leave', animate(1000))
    ]),
    trigger('slideLeftIn', [
      state('void', style({transform: 'translateX(-5px)'})),
      transition(':enter', animate(1000))
    ]),
    trigger('slideRightIn', [
      state('void', style({transform: 'translateX(5px)'})),
      transition(':leave', animate(1000))
    ]),
  ],
})
export class AwTagsComponent implements OnInit {
  @Input() tags: string[] = [];

  @Input() max: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  add(evt: Event): void {
    const el: HTMLInputElement = evt.target as HTMLInputElement;
    if(el.value && !this.tags.includes(el.value)){
      this.tags.push(el.value);
      el.value = '';
    } else {
      el.value = '';
      console.log('Ce champs ne peut pas être vide !');
    }
  }
  
  remove(id: number): void{
    this.tags.splice(id, 1)
  }
}
