import { Component, OnInit, Input } from '@angular/core';
import { Movie } from 'src/app/models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent  {

  constructor() { }

  @Input()
  movies: Movie[];

}
