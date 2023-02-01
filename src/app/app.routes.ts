import {Routes} from '@angular/router';
// import {DisableView} from '@gg/gg-base/common/disable-view.interface';
// import {HomeModalRefreshGuard} from '@gg/gg-base/common/home-modal-refresh.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)
  }, // must be always first as default route
  {
    path: 'articles',
    loadChildren: () => import('./features/articles/articles.module').then(m => m.ArticlesModule),
  },
  {
    path: '**',
    outlet: 'modal',
    children: []
  },
  {
    path: '**',
    loadChildren: () => import('./features/no-content/no-content.module').then(m => m.NoContentModule),
  } // must be always last as wild card for 404
];
