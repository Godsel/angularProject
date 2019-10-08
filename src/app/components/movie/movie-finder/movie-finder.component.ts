import { Component, OnInit } from '@angular/core';
import { MoviedbService } from '../../../services/moviedb.service';
import { Genre } from '../../../models/movie.model';
import { GenresRequest } from '../../../models/request.model';

@Component({
  selector: 'app-movie-finder',
  templateUrl: './movie-finder.component.html',
  styleUrls: ['./movie-finder.component.scss']
})

export class MovieFinderComponent implements OnInit {

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
