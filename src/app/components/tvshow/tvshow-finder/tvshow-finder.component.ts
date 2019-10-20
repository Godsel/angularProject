import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Tvshow, Genre } from '../../../models/tvshow.model';
import { GenresRequest, TvshowRequest } from '../../../models/request.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'app-tvshow-finder',
  templateUrl: './tvshow-finder.component.html',
  styleUrls: ['./tvshow-finder.component.scss']
})

export class TvshowFinderComponent implements OnInit {

  genresRequest: GenresRequest;
  listGenres: Genre[];
  genre: Genre = {id: 10765, name: 'Sci-Fi & Fantasy'};

  tvshowRequest: TvshowRequest;
  tvshows: Tvshow[];
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
    this.moviedbService.getTvshowsGenres(this.language).subscribe((res => {
      this.genresRequest = res;
      this.listGenres = this.genresRequest.genres;
    }));

    this.moviedbService.searchTvshows('legion', this.language).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
      console.log(this.tvshows);
    }));

    this.moviedbService.getTvshowsByGenre(this.genre, 2, this.language).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
      console.log(this.tvshows);
    }));
  }
}
