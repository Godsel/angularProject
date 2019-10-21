import { Component, OnInit, Input } from '@angular/core';
import { Tvshow } from 'src/app/models/tvshow.model';

@Component({
  selector: 'app-tvshow-list',
  templateUrl: './tvshow-list.component.html',
  styleUrls: ['./tvshow-list.component.scss']
})
export class TvshowListComponent {

  constructor() { }

  @Input()
  tvshows: Tvshow[];

}
