import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie, Genre, MovieDetails } from 'src/app/models/movie.model';
import { Tvshow, TvshowDetails } from 'src/app/models/tvshow.model';
import { MoviesRequest, GenresRequest, TvshowRequest } from '../models/request.model';
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
  searchMovie(searchStr: string, page: number, language: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/search/movie?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${language}`;
    if (language === 'en') {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Search', searchStr)),
      );
    } else {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Recherche', searchStr)),
      );
    }
  }

  getMovieDetails(movieId: string, language: string): Observable <MovieDetails> {
    const url = `${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}&language=${language}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => MovieDetails.adapt(data)),
    );
  }

  getInTheaterMovies(page: number, language: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/now_playing?api_key=${this.apiKey}&page=${page}&region=US&language=${language}`;
    if (language === 'en') {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'In Theater', '')),
      );
    } else {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'En Salles', '')),
      );
    }
  }

  getUpComingMovies(page: number, language: string): Observable <MoviesRequest> {
    const url = `${this.baseUrl}/movie/upcoming?api_key=${this.apiKey}&page=${page}&region=US&language=${language}`;
    if (language === 'en') {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Upcoming', '')),
      );
    } else {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Prochainement', '')),
      );
    }
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
    if (language === 'en') {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'By Genre', genre.name)),
      );
    } else {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Par Genre', genre.name)),
      );
    }
  }

  getPopularMovies(page: number, language: string): Observable <MoviesRequest> {
    // tslint:disable-next-line: max-line-length
    const url = `${this.baseUrl}/movie/popular?api_key=${this.apiKey}&include_adult=false&page=${page}&language=${language}`;
    if (language === 'en') {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Popular', '')),
      );
    } else {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Populaires', '')),
      );
    }
  }

  getTopRatedMovies(page: number, language: string): Observable <MoviesRequest> {
    // tslint:disable-next-line: max-line-length
    const url = `${this.baseUrl}/movie/top_rated?api_key=${this.apiKey}&page=${page}&language=${language}`;
    if (language === 'en') {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Top Rated', '')),
      );
    } else {
      return this.httpClient.get(url).pipe(
        map(data => MoviesRequest.adapt(data, 'Mieux notés', '')),
      );
    }
  }

  // Tvshow
  searchTvshows(searchStr: string, page: number, language: string): Observable <TvshowRequest> {
    const url = `${this.baseUrl}/search/tv?api_key=${this.apiKey}&query=${searchStr}&page=${page}&language=${language}`;
    return this.httpClient.get(url).pipe(
        map(data => TvshowRequest.adapt(data, 'Search', searchStr)),
      );
  }

  getTopRatedTvshows(page: number, language: string): Observable <TvshowRequest> {
    const url = `${this.baseUrl}/tv/top_rated?api_key=${this.apiKey}&language=${language}&page=${page}`;
    return this.httpClient.get(url).pipe(
      map(data => TvshowRequest.adapt(data, 'Top Rated', '')),
    );
  }

  getTvshowDetails(tvshowId: string, language: string): Observable <TvshowDetails> {
    const url = `${this.baseUrl}/tv/${tvshowId}?api_key=${this.apiKey}&language=${language}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => TvshowDetails.adapt(data)),
    );
  }

  getTvshowsByGenre(genre: Genre, page: number, language: string): Observable <TvshowRequest> {
    // tslint:disable-next-line: max-line-length
    const url = `${this.baseUrl}/discover/tv?api_key=${this.apiKey}&sort_by=revenue.desc&include_adult=false&with_genres=${genre.id}&page=${page}&language=${language}`;
    return this.httpClient.get(url).pipe(
      map(data => TvshowRequest.adapt(data, 'By Genre', genre.name)),
    );
  }

  getTvshowsGenres(language: string): Observable <GenresRequest> {
    const url = `${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}&language=${language}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => GenresRequest.adapt(data)),
    );
  }

  getOnAirTvShows(language: string, page: number): Observable <TvshowRequest> {
    const url = `${this.baseUrl}/tv/on_the_air?api_key=${this.apiKey}&language=${language}&page=${page}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => TvshowRequest.adapt(data, 'On air', '')),
    );
  }

  getPopularTvShows(language: string, page: number): Observable <TvshowRequest> {
    const url = ` ${this.baseUrl}/tv/popular?api_key=${this.apiKey}&language=${language}&page=${page}`;
    return this.httpClient.get(url).pipe(
      // Adapt each item in the raw data array
      map(data => TvshowRequest.adapt(data, 'Popular', '')),
    );
  }
}
