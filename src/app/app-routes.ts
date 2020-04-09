import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/movies'
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movie/movie.module')
      .then(m => m.MovieModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/movies'
  }
];
