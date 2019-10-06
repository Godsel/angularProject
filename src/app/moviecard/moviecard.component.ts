import { Component, OnInit } from '@angular/core';
import { Movie, MovieAdapter, MovieDetailsAdapter, GenreAdapter, Genre } from '../models/movie.model';
import { MoviedbService } from '../services/moviedb.service';
import { map } from 'rxjs/operators';
import { MovieRequest } from '../models/request.model';

@Component({
  selector: 'app-moviecard',
  templateUrl: './moviecard.component.html',
  styleUrls: ['./moviecard.component.scss']
})
export class MoviecardComponent implements OnInit {

  movieRequest: MovieRequest;
  movies: Movie[];
  braveheart: Movie;

  images: string[];


  genre: Genre = {id: 28, name: 'Action'};

  constructor(
    private moviedbService: MoviedbService,
    private movieAdapter: MovieAdapter,
    ) {}

  ngOnInit() {
    this.moviedbService.searchMovie('braveheart').subscribe((res => {
      this.movieRequest = res;
      console.log(this.movieRequest);
      this.movies = this.movieRequest.movies;
      // console.log('scope is', this.braveheart);
      this.braveheart = this.movies[0];
    }));

    this.moviedbService.getMoviesByGenre(this.genre, 2).subscribe((res => {
      this.movieRequest = res;
      console.log(this.movieRequest);
    }));
  }

}
