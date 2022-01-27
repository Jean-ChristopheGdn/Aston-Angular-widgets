import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AwTagsModule } from './lib/aw-tags/aw-tags.module';
import { FormsModule } from '@angular/forms';
import { AwTabsModule } from './lib/aw-tabs/aw-tabs.module';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AwBlogComponent } from './components/aw-blog/aw-blog.component';
import { AwBlogFormComponent } from './components/aw-blog-form/aw-blog-form.component';
import { BlogArticleComponent } from './components/aw-blog-article/blog-article.component';
import { CardComponent } from './components/card/card.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AwCarouselComponent } from './lib/aw-carousel/aw-carousel.component';
import { CryptoMarketsComponent } from './components/crypto-markets/crypto-markets.component';
import { ColorComponent } from './components/color/color.component';

@NgModule({
  declarations: [
    AppComponent,
    AwBlogComponent,
    AwBlogFormComponent,
    BlogArticleComponent,
    CardComponent,
    CarouselComponent,
    AwCarouselComponent,
    CryptoMarketsComponent,
    ColorComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AwTagsModule,
    AwTabsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
