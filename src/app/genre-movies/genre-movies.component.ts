import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../services/moviedb.service';
import { Genre } from '../models/movie.model';
import { GenresRequest } from '../models/request.model';

@Component({
  selector: 'app-genre-movies',
  templateUrl: './genre-movies.component.html',
  styleUrls: ['./genre-movies.component.scss']
})
export class GenreMoviesComponent implements OnInit {

  genresRequest: GenresRequest;
  listGenres: Genre[];

  constructor(
    private moviedbService: MoviedbService,
  ) { }

  ngOnInit() {
    this.moviedbService.getMoviesGenres().subscribe((res => {
      this.genresRequest = res;
      this.listGenres = this.genresRequest.genres;
    }));
  }

}
