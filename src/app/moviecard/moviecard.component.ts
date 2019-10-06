import { Component, OnInit } from '@angular/core';
import { Movie, Genre } from '../models/movie.model';
import { MoviedbService } from '../services/moviedb.service';
import { map } from 'rxjs/operators';
import { MoviesRequest } from '../models/request.model';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  movieRequest: MoviesRequest;
  movies: Movie[];
  braveheart: Movie;


  genre: Genre = {id: 28, name: 'Action'};

  constructor(
    private moviedbService: MoviedbService,
    ) {}

  ngOnInit() {
    this.moviedbService.searchMovie('braveheart').subscribe((res => {
      this.movieRequest = res;
      console.log(this.movieRequest);
      this.movies = this.movieRequest.movies;
      // console.log('scope is', this.braveheart);
      this.braveheart = this.movies[0];
      console.log(this.braveheart);
    }));

    this.moviedbService.getMoviesByGenre(this.genre, 2).subscribe((res => {
      this.movieRequest = res;
      console.log(this.movieRequest);
    }));
  }

}
