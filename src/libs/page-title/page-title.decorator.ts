import {PageTitleModule} from "./page-title.module";
import {Title} from "@angular/platform-browser";

export function PageTitleDecorator(pageTitle: string): ClassDecorator {
  return (constructor: any) => {
    if (!PageTitleModule.injector) {
      return;
    }

    const original = constructor.prototype['ngOnInit'];

    // @ts-ignore
    constructor.prototype['ngOnInit'] = function (...args) {
      PageTitleModule.injector.get(Title).setTitle(pageTitle);
      original && original.apply(this, args);
    }
  }
}
