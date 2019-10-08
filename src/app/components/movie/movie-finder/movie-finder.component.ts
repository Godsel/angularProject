import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Genre, Movie } from '../../../models/movie.model';
import { GenresRequest, MoviesRequest } from '../../../models/request.model';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})

export class MovieFinderComponent implements OnInit {

  genresRequest: GenresRequest;
  listGenres: Genre[];
  genre: Genre = {id: 28, name: 'Action'};

  movieRequest: MoviesRequest;
  movies: Movie[];

  constructor(
    private moviedbService: MoviedbService,
  ) { }

  ngOnInit() {
    this.moviedbService.getMoviesGenres().subscribe((res => {
      this.genresRequest = res;
      this.listGenres = this.genresRequest.genres;
    }));

    this.moviedbService.searchMovie('braveheart').subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
      console.log(this.movies);
    }));

    this.moviedbService.getMoviesByGenre(this.genre, 2).subscribe((res => {
      this.movieRequest = res;
      this.movies = this.movieRequest.movies;
      console.log(this.movies);
    }));
  }
}
