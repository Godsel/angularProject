import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { MovieDetails } from '../../../models/movie.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  movieDetails: MovieDetails;
  language: string = 'en-US';
  movieId: string;

  constructor(
    private moviedbService: MoviedbService,
    private translateService: TranslateService,
    private router: ActivatedRoute
    ) {
      this.language = translateService.currentLang;
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.language = translateService.currentLang;
      });
    }

  ngOnInit() {
    this.movieId = this.router.snapshot.paramMap.get('id');
    console.log(this.movieId);
    this.moviedbService.getMovieDetails(this.movieId, this.language).subscribe((res => {
      this.movieDetails = res;
      console.log(this.movieDetails);
    }));
  }

}
