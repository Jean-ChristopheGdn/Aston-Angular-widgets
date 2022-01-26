import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog-form',
  templateUrl: './aw-blog-form.component.html',
  styleUrls: ['./aw-blog-form.component.scss']
})
export class AwBlogFormComponent implements OnInit {

  @Input() max: number = 100;

  @Output() addEmitter: EventEmitter<AwBlogArticleModel> = new EventEmitter();

  count: number = 0;
  article: AwBlogArticleModel = {
    title:'',
    text: ''
  };

  constructor() { }

  ngOnInit(): void {
  }
  post(): void{
    this.addEmitter.emit(JSON.parse(JSON.stringify(this.article)));
    this.article.title = '';
    this.article.text = '';
  }
}
