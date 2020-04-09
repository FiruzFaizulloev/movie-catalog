import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { movies } from '../../content';
import { IMovie } from '../models';

@Injectable()
export class MovieService {

  constructor() { }

  getMovies(param: any): Observable<IMovie[]> {
    console.log('worked');
    return of(movies)
      .pipe(
        // 400ms задержка сервера :)
        delay(400)
      );
  }

  getMovie(key: string): Observable<IMovie> {
    const findMovie = movies.find(movie => movie.key === key);
    return of(findMovie)
      .pipe(
        // 400ms задержка сервера :)
        delay(400)
      );
  }

  searchMovies(searchValue: string): Observable<IMovie[]> {
    const getMovies = movies.filter(movie => {
      const movieName = movie.name.toLowerCase();
      return movieName.includes(searchValue.toLowerCase());
    });
    return of(getMovies)
      .pipe(
        // 400ms задержка сервера :)
        delay(400)
      );
  }
}
