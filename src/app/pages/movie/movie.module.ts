import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieComponent } from './movie.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { RouterModule } from '@angular/router';
import { MOVIE_ROUTES } from './movie-routes';
import { MovieService } from '../../core/services';
import { MovieImgPipe } from '../../core/pipes';


@NgModule({
  declarations: [
    MovieComponent,
    MovieDetailComponent,
    MovieImgPipe
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MOVIE_ROUTES)
  ],
  providers: [
    MovieService
  ]
})
export class MovieModule { }
