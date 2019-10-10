import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Genre, MovieDetails } from 'src/app/models/movie.model';
import { MoviesRequest, GenresRequest } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private apiKey = 'c46a2dd15015ce4720d7557d3c908c7c';

  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(
    private httpClient: HttpClient,
    ) { }

  searchMovie(searchStr: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchStr}`;
    return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data)),
      );

    /*return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.movieAdapter.adapt(item))),
    );*/
  }

  getMovieDetails(movie: Movie): Observable <MovieDetails> {
    const url = `${this.baseUrl}/movie/${movie.id}?api_key=${this.apiKey}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => MovieDetails.adapt(data)),
    );
  }

  getInTheaters(): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&region=US`;
    return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data)),
      );

  }

  getUpComingMovies(): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&region=US`;
    return this.httpClient.get(url).pipe(
      map(data => MoviesRequest.adapt(data)),
    );

  }

  getMoviesGenres(): Observable <GenresRequest> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => GenresRequest.adapt(data)),
    );
  }

  getMoviesByGenre(genre: Genre, page: number): Observable <MoviesRequest> {
    // tslint:disable-next-line: max-line-length
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&with_genres=${genre.id}&page=${page}`;
    return this.httpClient.get(url).pipe(
      map(data => MoviesRequest.adapt(data)),
    );
  }

  getPopularMovies(): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&language=en-US&page=1`;
    return this.httpClient.get(url).pipe(
      map(data => MoviesRequest.adapt(data)),
    );
  }
}
