import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { TvshowDetails } from '../../../models/tvshow.model';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tvshow-details',
  templateUrl: './tvshow-details.component.html',
  styleUrls: ['./tvshow-details.component.scss']
})
export class TvshowDetailsComponent implements OnInit {

  tvshowDetails: TvshowDetails;
  language: string;
  tvshowId: string;

  constructor(
    private moviedbService: MoviedbService,
    private translateService: TranslateService,
    private router: ActivatedRoute
    ) {
      this.translateService.onLangChange.subscribe((event: LangChangeEvent) => {
        this.language = translateService.currentLang;
        this.ngOnInit();
      });
      this.language = translateService.currentLang;
    }

  ngOnInit() {
    this.tvshowId = this.router.snapshot.paramMap.get('id');
    this.getTvshowDetails(this.tvshowId, this.language);
  }

  private getTvshowDetails(id: string, language: string) {
    this.moviedbService.getTvshowDetails(id, language).subscribe((res => {
      this.tvshowDetails = res;
    }));
  }


}
