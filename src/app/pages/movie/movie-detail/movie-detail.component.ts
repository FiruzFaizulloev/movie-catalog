import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../../core/services';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMovie } from '../../../core/models';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movie$: Observable<IMovie>;

  constructor(
    private _movieService: MovieService,
    private _activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this._getMovie();
  }

  private _getMovie() {
    const key = this._activatedRoute.snapshot.params.id;
    this.movie$ = this._movieService.getMovie(key);
  }
}
