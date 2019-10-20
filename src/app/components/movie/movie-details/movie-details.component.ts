import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Genre, Movie, MovieDetails } from '../../../models/movie.model';
import { GenresRequest, MoviesRequest } from '../../../models/request.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  // movieDetails: MovieDetails;
  // // movieSelected: Movie;
  // language: string = 'en-US';
  // movieId: number;

  constructor(
    private moviedbService: MoviedbService,
    private translateService: TranslateService
    ) {
      // this.language = translateService.currentLang;
      // this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      //   // do something
      //   this.language = translateService.currentLang;
      //   // this.movieId = Id;
      //   this.ngOnInit();
      // });
    }

  ngOnInit() {
    // this.moviedbService.getMovieDetails(this.movieId, this.language).subscribe((res => {
    //   this.movieDetails = res;
    //   // this.details = this.movieSelected.details;
    //   console.log(this.movieDetails);
    // }));
  }

}
