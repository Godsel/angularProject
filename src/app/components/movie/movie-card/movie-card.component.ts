import { Component, OnInit, Input } from '@angular/core';
import { Movie, Genre } from '../../../models/movie.model';
import { MoviedbService } from '../../../services/moviedb.service';
import { map } from 'rxjs/operators';
import { MoviesRequest } from '../../../models/request.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})

export class MovieCardComponent {

    @Input()
    movie: Movie;
  }
