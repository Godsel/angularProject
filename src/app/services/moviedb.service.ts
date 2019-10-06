import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieAdapter, MovieDetailsAdapter, GenreAdapter, Genre, MovieDetails } from 'src/app/models/movie.model';
import { MovieRequestAdapter, MovieRequest } from '../models/request.model';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private apiKey = 'c46a2dd15015ce4720d7557d3c908c7c';

  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(
    private httpClient: HttpClient,
    private movieAdapter: MovieAdapter,
    private movieDetailsAdapter: MovieDetailsAdapter,
    private genreAdapter: GenreAdapter,
    private movieRequestAdapter: MovieRequestAdapter,
    ) { }

  searchMovie(searchStr: string): Observable <MovieRequest> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchStr}`;
    return this.httpClient.get(url).pipe(
        map(data => this.movieRequestAdapter.adapt(data)),
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
      map(data => this.movieDetailsAdapter.adapt(data)),
    );
  }

  getInTheaters(): Observable <MovieRequest> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&region=US`;
    return this.httpClient.get(url).pipe(
        map(data => this.movieRequestAdapter.adapt(data)),
      );

  }

  getUpComingMovies(): Observable <MovieRequest> {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&region=US`;
    return this.httpClient.get(url).pipe(
      map(data => this.movieRequestAdapter.adapt(data)),
    );

  }

  getMoviesGenres(): Observable <Genre[]> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => this.genreAdapter.adapt(data)),
    );
  }

  getMoviesByGenre(genre: Genre, page: number): Observable <any> {
    // tslint:disable-next-line: max-line-length
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&with_genres=${genre.id}&page=${page}`;
    return this.httpClient.get(url).pipe(
      map(data => this.movieRequestAdapter.adapt(data)),
    );

  }
}
