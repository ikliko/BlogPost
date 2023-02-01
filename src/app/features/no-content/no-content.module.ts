import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoContentComponent } from './no-content.component';
import {Routes} from "@angular/router";

export const routes: Routes = [{ path: '', component: NoContentComponent }];

@NgModule({
  declarations: [
    NoContentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NoContentModule { }
