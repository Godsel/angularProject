import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Movie } from '../../../models/movie.model';
import { MoviesRequest, TvshowRequest } from '../../../models/request.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { Tvshow } from 'src/app/models/tvshow.model';

@Component({
  selector: 'app-home-carousels',
  templateUrl: './home-carousels.component.html',
  styleUrls: ['./home-carousels.component.scss']
})
export class HomeCarouselsComponent implements OnInit {

  movieRequest: MoviesRequest;
  movies: Movie[];
  tvshowRequest: TvshowRequest;
  tvshows: Tvshow[];
  page: number;
  language: string;

  constructor(
    private moviedbService: MoviedbService,
    private translateService: TranslateService,
  ) {
      this.page = 1;
      this.language = translateService.currentLang;
  }

  ngOnInit() {

    this.moviedbService.getInTheaterMovies(this.page, this.language).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
    }));

    this.moviedbService.getOnAirTvShows(this.language, this.page).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
    }));

  }

}
