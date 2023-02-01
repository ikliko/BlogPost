import {Injector, NgModule} from "@angular/core";

@NgModule({})
export class PageTitleModule {
  static injector: Injector;

  constructor(injector: Injector) {
    PageTitleModule.injector = injector;
  }
}
