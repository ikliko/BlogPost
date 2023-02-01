import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./common/header/header.module";
import {PageTitleModule} from "@libs/page-title/page-title.module";
import rootReducer from "@store/root.reducer";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiPrefixInterceptor} from "@libs/http/api-prefix.interceptor";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot(rootReducer, {}),
    PageTitleModule,
    HeaderModule,
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
