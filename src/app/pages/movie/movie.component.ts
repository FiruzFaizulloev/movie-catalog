import { Component, OnDestroy, OnInit } from '@angular/core';
import { MovieService } from '../../core/services';
import { Observable, Subject } from 'rxjs';
import { IMovie } from '../../core/models';
import { debounceTime, startWith, switchMap, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movies$: Observable<IMovie[]>;
  private _searchValue$ = new Subject<string>();
  private _destroy$ = new Subject();

  constructor(private _movieService: MovieService) { }

  ngOnInit(): void {
    this._getMovies();
  }

  ngOnDestroy(): void {
    this._destroy$.next(true);
    this._destroy$.unsubscribe();
  }

  onSearch(searchValue: string) {
    this._searchValue$.next(searchValue);
  }

  private _getMovies() {
    this.movies$ = this._searchValue$
      .pipe(
        startWith(''),
        debounceTime(300),
        switchMap((searchValue: string) => this._movieService.searchMovies(searchValue)),
        takeUntil(this._destroy$)
      );
  }
}
