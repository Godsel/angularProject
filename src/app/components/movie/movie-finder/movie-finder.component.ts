import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Genre, Movie } from '../../../models/movie.model';
import { GenresRequest, MoviesRequest } from '../../../models/request.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})

export class MovieFinderComponent implements OnInit {

  genresRequest: GenresRequest;
  listGenres: Genre[];
  genre: Genre = {id: 28, name: 'Action'};

  movieRequest: MoviesRequest;
  movies: Movie[];
  language: string;

  constructor(
    private moviedbService: MoviedbService,
    private translateService: TranslateService,
    ) {
      this.language = translateService.currentLang;
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        // do something
        this.language = translateService.currentLang;
        this.ngOnInit();
      });
    }

  ngOnInit() {
    this.moviedbService.getMoviesGenres(this.language).subscribe((res => {
      this.genresRequest = res;
      this.listGenres = this.genresRequest.genres;
    }));

    this.moviedbService.searchMovie('braveheart', this.language).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
      console.log(this.movies);
    }));

    this.moviedbService.getMoviesByGenre(this.genre, 2, this.language).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
      console.log(this.movies);
    }));
  }
}
