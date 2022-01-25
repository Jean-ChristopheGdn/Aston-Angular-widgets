import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AwTagsModule } from './lib/aw-tags/aw-tags.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AwTagsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
