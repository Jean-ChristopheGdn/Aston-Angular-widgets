import { Component, Input, OnInit } from '@angular/core';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog-article',
  templateUrl: './blog-article.component.html',
  styleUrls: ['./blog-article.component.scss']
})
export class BlogArticleComponent implements OnInit {

  @Input() article!: AwBlogArticleModel;
  @Input() state: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onClose(): void {
    this.state = false;
  }

  onOpen(): void {
    this.state = true;
  }

  onToggle(): void {
    this.state = !this.state;
  }
}
