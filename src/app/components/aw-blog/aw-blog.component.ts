import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';

import { BlogArticleComponent } from '../aw-blog-article/blog-article.component';
import { AwBlogArticleModel } from '../models/aw-blog-article.model';

@Component({
  selector: 'aw-blog',
  templateUrl: './aw-blog.component.html',
  styleUrls: ['./aw-blog.component.scss']
})
export class AwBlogComponent implements OnInit{

  @ViewChildren(BlogArticleComponent)
  articleList!: QueryList<BlogArticleComponent>;

  articles: AwBlogArticleModel[] = [];

  constructor() { }

  ngOnInit(): void {
      
  }

  add(article: AwBlogArticleModel): void{
    this.articles.push(article);
    console.log(this.articleList);
  }

  collapseAll(){
    this.articleList.forEach(article => {
      article.onClose();
    });
  }
  expandAll(){
    this.articleList.forEach(article => {
      article.onOpen();
    })
  }
}
