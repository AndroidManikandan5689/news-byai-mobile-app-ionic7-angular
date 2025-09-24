import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'news',
    loadComponent: () => import('./news/news.page').then( m => m.NewsPage)
  },
];
