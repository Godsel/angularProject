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
  language: string = 'en-US';
  tvshowId: string;

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
    this.tvshowId = this.router.snapshot.paramMap.get('id');
    console.log(this.tvshowId);
    this.moviedbService.getTvshowDetails(this.tvshowId, this.language).subscribe((res => {
      this.tvshowDetails = res;
      console.log(this.tvshowDetails);
    }));
  }


}
