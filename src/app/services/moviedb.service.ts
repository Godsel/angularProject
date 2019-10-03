import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, MovieAdapter, MovieDetailsAdapter, GenreAdapter, Genre } from 'src/app/models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private apiKey = 'c46a2dd15015ce4720d7557d3c908c7c';

  private baseUrl = 'https://api.themoviedb.org/3';

  constructor(
    private httpClient: HttpClient,
    private movieAdapter: MovieAdapter,
    private moviedetailsAdapter: MovieDetailsAdapter,
    private genreAdapter: GenreAdapter,
    ) { }

  searchMovie(searchStr: string): Observable <Movie[]> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchStr}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.movieAdapter.adapt(item))),
    );
  }

  getMovieDetails(movie: Movie): void {
    const url = `${this.baseUrl}/movie/${movie.id}?api_key=${this.apiKey}`;
    const res = this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.moviedetailsAdapter.adapt(item))),
    );
    movie.details = res[0];
  }

  getInTheaters(): Observable <Movie[]> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&region=US`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.movieAdapter.adapt(item))),
    );
  }

  getUpComingMovies(): Observable <Movie[]> {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&region=US`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.movieAdapter.adapt(item))),
    );
  }

  getGenres(): Observable <Genre[][]> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=en-US`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.genreAdapter.adapt(item))),
    );
  }

  getMoviesByGenre(genre: Genre) {
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&language=en-US&sort_by=revenue.desc&include_adult=false&with_genres=${genre.id}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map(item => this.genreAdapter.adapt(item))),
    );
  }
}
