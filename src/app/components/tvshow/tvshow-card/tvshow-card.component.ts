import { Component, OnInit, Input  } from '@angular/core';
import { Tvshow } from '../../../models/tvshow.model';

@Component({
  selector: 'app-tvshow-card',
  templateUrl: './tvshow-card.component.html',
  styleUrls: ['./tvshow-card.component.scss']
})
export class TvshowCardComponent {

  constructor() { }

  @Input()
    tvshow: Tvshow;

}
