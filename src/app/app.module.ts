import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./common/header/header.module";
import {PageTitleModule} from "@libs/page-title/page-title.module";
import {HttpClientModule} from "@angular/common/http";
import {EffectsModule} from '@ngrx/effects';
import {articleReducer} from "@store/articles/article.reducer";
import {ArticleEffects} from "@store/articles/article.effects";
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({
      articles: articleReducer
    }),
    EffectsModule.forRoot([ArticleEffects]),
    PageTitleModule,
    HeaderModule,
    IonicModule.forRoot(),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: ApiPrefixInterceptor,
    // }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
