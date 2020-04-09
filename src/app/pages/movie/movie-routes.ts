import { Routes } from '@angular/router';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const MOVIE_ROUTES: Routes = [
  {
    path: '',
    component: MovieComponent
  },
  {
    path: ':id',
    component: MovieDetailComponent
  }
];
