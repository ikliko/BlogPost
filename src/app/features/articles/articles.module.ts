import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ArticleListComponent} from './components/article-list/article-list.component';
import {ArticleEditComponent} from './components/article-edit/article-edit.component';
import {ArticleCreateComponent} from './components/article-create/article-create.component';

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
    RouterModule.forChild(routes)
  ],
  declarations: [
    ArticleListComponent,
    ArticleEditComponent,
    ArticleCreateComponent
  ]
})
export class ArticlesModule {
}
