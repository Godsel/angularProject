import { Movie, MovieAdapter } from './movie.model';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class MovieRequest {
    constructor(
      public page: number,
      public totalPages: number,
      public totalResults: number,
      public movies: Movie[],
    ) { }
  }

@Injectable({
    providedIn: 'root'
})

export class MovieRequestAdapter implements Adapter<MovieRequest> {
  movieAdapter: MovieAdapter = new MovieAdapter();
  movies: Movie[];
  adapt(item: any): MovieRequest {
    this.movies = item.results.map((data: any[]) => this.movieAdapter.adapt(data));
    return new MovieRequest(
      item.page,
      item.total_pages,
      item.total_results,
      this.movies,
    );
  }
}
