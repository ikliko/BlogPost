import {NgModule} from '@angular/core';
import {PreloadingStrategy, RouterModule} from '@angular/router';
import {routes} from './app.routes';
import {SelectivePreloadingStrategy} from "../libs/router/selective-preloading.strategy";

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      urlUpdateStrategy: 'eager',
      preloadingStrategy: SelectivePreloadingStrategy,
      enableTracing: false,
      initialNavigation: "enabledNonBlocking",
    })
  ],
  exports: [RouterModule],
  providers: [
    {provide: PreloadingStrategy, useClass: SelectivePreloadingStrategy},
    // { provide: AuthGuard, useClass: AuthGuard },
    // { provide: ResetGuard, useClass: ResetGuard },
    // { provide: OldUrlToModalGuard, useClass: OldUrlToModalGuard },
  ]
})
export class AppRoutingModule {
}
