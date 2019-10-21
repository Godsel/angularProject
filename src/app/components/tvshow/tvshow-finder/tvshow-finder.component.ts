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
        if (this.tvshowRequest) {
          this.requestChooser(this.tvshowRequest, this.page);
        }
      });
      this.genresMap = new Map<any, any>();
    }
  isMenuCollapsed = true;
  genresRequest: GenresRequest;
  listGenres: Genre[];
  genre: Genre = {id: 28, name: 'Action'};

  tvshowRequest: TvshowRequest;
  tvshows: Tvshow[];
  language: string;

  page: number;

  genresMap: Map<any, any>;
  searchStr: string;

  selectedGenre: Genre;

  public isGenresCollapsed = false;
  public isOthersCollapsed = false;

  ngOnInit() {
      this.moviedbService.getTvshowsGenres(this.language).subscribe((res => {
      this.genresRequest = res;
      this.listGenres = this.genresRequest.genres;
      this.listGenres.forEach(element => {
        this.genresMap.set(element.name, element.id);
        this.genresMap.set(element.id, element.name);
      });

    }));
  }

  searchTvShow(str: string, page: number, language: string) {
    // si la chaîne est non nulle ou non vide
    if ((str !== 'undefined') && (str.trim())) {
      this.moviedbService.searchTvshows(str, page, language).subscribe((res => {
        this.tvshowRequest = res;
        this.tvshows = this.tvshowRequest.tvshows;
      }));
    }
  }

  private getTvshowsByGenre(genreName: string, page: number, language: string) {
    this.genre.name = genreName;
    this.genre.id = this.genresMap.get(genreName);
    this.moviedbService.getTvshowsByGenre(this.genre, page, language).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
    }));
  }

  private getOnAirTvShows(page: number, language: string) {
    this.moviedbService.getOnAirTvShows(language, page).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
    }));
  }

  private getPopularTvShows(page: number, language: string) {
    this.moviedbService.getPopularTvShows(language, page).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
    }));
  }

  private getTopRatedTvshows(page: number, language: string) {
    this.moviedbService.getTopRatedTvshows(page, language).subscribe((res => {
      this.tvshowRequest = res;
      this.tvshows = this.tvshowRequest.tvshows;
    }));
  }

  private onPageChange = (pageNumber) => {
    if (this.tvshowRequest) {
      if (this.tvshowRequest.page !== pageNumber) {
        this.requestChooser(this.tvshowRequest, pageNumber);
        }
    }
  }


  /* Fonction qui récupère l'état de la recherche de films précédente, afin de savoir
   quelle recherche nous devons effectuer (en changeant de page)  */
  private requestChooser(tvshowRequest: TvshowRequest, page: number) {
    switch (tvshowRequest.requestType) {
      case 'Par Genre':
      case 'By Genre': {
        // tslint:disable-next-line: max-line-length
        this.getTvshowsByGenre(tvshowRequest.requestAssertion, page, this.language);
        break;
      }

      // case 'Prochainement':
      // case 'Upcoming': {
      //   // tslint:disable-next-line: max-line-length
      //   this.getUpComingMovies(page, this.language);
      //   break;
      // }

      case 'En Salles':
      case 'On Air': {
        // tslint:disable-next-line: max-line-length
        this.getOnAirTvShows(page, this.language);
        break;
      }

      case 'Recherche':
      case 'Search': {
        // tslint:disable-next-line: max-line-length
        this.searchTvShow(tvshowRequest.requestAssertion, page, this.language);
        break;
      }
    }
  }
}
