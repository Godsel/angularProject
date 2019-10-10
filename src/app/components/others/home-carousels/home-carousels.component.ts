import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Movie } from '../../../models/movie.model';
import { MoviesRequest } from '../../../models/request.model';

@Component({
  selector: 'app-home-carousels',
  templateUrl: './home-carousels.component.html',
  styleUrls: ['./home-carousels.component.scss']
})
export class HomeCarouselsComponent implements OnInit {

  movieRequest: MoviesRequest;
  movies: Movie[];

  constructor(
    private moviedbService: MoviedbService,
  ) { }

  ngOnInit() {

    this.moviedbService.getPopularMovies().subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
    }));

  }

}
