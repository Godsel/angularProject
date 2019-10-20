import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Genre, MovieDetails } from 'src/app/models/movie.model';
import { MoviesRequest, GenresRequest } from '../models/request.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {

  private apiKey = 'c46a2dd15015ce4720d7557d3c908c7c';

  private baseUrl = 'https://api.themoviedb.org/3';

  private language: string;
  constructor(
    private httpClient: HttpClient,
    private translateService: TranslateService,
    ) {
      this.language = translateService.currentLang;
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        // do something
        this.language = translateService.currentLang;
      });
    }

  // Movies
  searchMovie(searchStr: string, language: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchStr}&language=${language}`;
    return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Search')),
      );
  }

  getMovieDetails(movie: Movie, language: string): Observable <MovieDetails> {
    const url = `${this.baseUrl}/movie/${movie.id}?api_key=${this.apiKey}&language=${language}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => MovieDetails.adapt(data)),
    );
  }

  getInTheaterMovies(language: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&region=US&language=${language}`;
    return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'In Theater')),
      );
  }

  getUpComingMovies(language: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&region=US&language=${language}`;
    return this.httpClient.get(url).pipe(
      map(data => MoviesRequest.adapt(data, 'Upcoming')),
    );
  }

  getMoviesGenres(language: string): Observable <GenresRequest> {
    const url = `${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}&language=${language}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => GenresRequest.adapt(data)),
    );
  }

  getMoviesByGenre(genre: Genre, page: number, language: string): Observable <MoviesRequest> {
    // tslint:disable-next-line: max-line-length
    const url = `${this.baseUrl}/discover/movie?api_key=${this.apiKey}&sort_by=revenue.desc&include_adult=false&with_genres=${genre.id}&page=${page}&language=${language}`;
    return this.httpClient.get(url).pipe(
      map(data => MoviesRequest.adapt(data, genre.name)),
    );

  }
}
