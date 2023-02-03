import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleListComponent} from './components/article-list/article-list.component';
import {ArticleEditComponent} from './components/article-edit/article-edit.component';
import {ArticleCreateComponent} from './components/article-create/article-create.component';
import {StoreModule} from "@ngrx/store";
import {articleReducer} from "@store/articles/article.reducer";
import {CommonModule} from "@angular/common";
import {EffectsModule} from "@ngrx/effects";
import {ArticleEffects} from "@store/articles/article.effects";
import {TableModule} from "primeng/table";
import {ButtonModule} from "primeng/button";
import {IonicModule} from "@ionic/angular";

const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent
  },

  {
    path: 'create',
    component: ArticleEditComponent,
    outlet: 'modal',
  },

  {
    path: 'edit/:article_id',
    component: ArticleEditComponent,
    outlet: 'modal',
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    ButtonModule,
    IonicModule
  ],
  declarations: [
    ArticleListComponent,
    ArticleEditComponent,
    ArticleCreateComponent
  ],
})
export class ArticlesModule {
}
