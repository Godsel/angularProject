import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Genre, Movie } from '../../../models/movie.model';
import { GenresRequest, MoviesRequest } from '../../../models/request.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { debounceTime, distinctUntilChanged, map, tap, switchMap, catchError } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})

export class MovieFinderComponent implements OnInit {

  constructor(
    private moviedbService: MoviedbService,
    private translateService: TranslateService,
    ) {
      this.page = 1;
      this.language = translateService.currentLang;
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        // do something
        this.language = translateService.currentLang;
        this.ngOnInit();
        if (this.movieRequest) {
          this.requestChooser(this.movieRequest, this.page);
        }
      });
      this.genresMap = new Map<any, any>();
    }
  isMenuCollapsed = true;
  genresRequest: GenresRequest;
  listGenres: Genre[];
  genre: Genre = {id: 28, name: 'Action'};

  movieRequest: MoviesRequest;
  movies: Movie[];
  language: string;

  page: number;

  genresMap: Map<any, any>;
  searchStr: string;

  selectedGenre: Genre;

  public isCollapsed = false;

  ngOnInit() {
      this.moviedbService.getMoviesGenres(this.language).subscribe((res => {
      this.genresRequest = res;
      this.listGenres = this.genresRequest.genres;
      this.listGenres.forEach(element => {
        this.genresMap.set(element.name, element.id);
        this.genresMap.set(element.id, element.name);
      });

    }));
  }

  searchMovie(str: string, page: number, language: string) {
    // si la chaîne est non nulle ou non vide
    if ((str !== 'undefined') && (str.trim())) {
      this.moviedbService.searchMovie(str, page, language).subscribe((res => {
        this.movieRequest = res;
        this.movies = this.movieRequest.movies;
      }));
    }
  }

  private getMoviesByGenre(genreName: string, page: number, language: string) {
    this.genre.name = genreName;
    this.genre.id = this.genresMap.get(genreName);
    this.moviedbService.getMoviesByGenre(this.genre, page, language).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
    }));
  }

  private getInTheaterMovies(page: number, language: string) {
    this.moviedbService.getInTheaterMovies(page, language).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
    }));
  }

  private getUpComingMovies(page: number, language: string) {
    this.moviedbService.getUpComingMovies(page, language).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
    }));
  }

  private onPageChange = (pageNumber) => {
    if (this.movieRequest) {
      if (this.movieRequest.page !== pageNumber) {
        this.requestChooser(this.movieRequest, pageNumber);
        }
    }
  }


  /* Fonction qui récupère l'état de la recherche de films précédente, afin de savoir
   quelle recherche nous devons effectuer (en changeant de page)  */
  private requestChooser(movieRequest: MoviesRequest, page: number) {
    switch (movieRequest.requestType) {
      case 'Par Genre':
      case 'By Genre': {
        // tslint:disable-next-line: max-line-length
        this.getMoviesByGenre(movieRequest.requestAssertion, page, this.language);
        break;
      }

      case 'Prochainement':
      case 'Upcoming': {
        // tslint:disable-next-line: max-line-length
        this.getUpComingMovies(page, this.language);
        break;
      }

      case 'En Salles':
      case 'In Theater': {
        // tslint:disable-next-line: max-line-length
        this.getInTheaterMovies(page, this.language);
        break;
      }

      case 'Recherche':
      case 'Search': {
        // tslint:disable-next-line: max-line-length
        this.searchMovie(movieRequest.requestAssertion, page, this.language);
        break;
      }
    }
  }
}
