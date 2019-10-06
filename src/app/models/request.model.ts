import { Movie, Genre } from './movie.model';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class MoviesRequest {
    constructor(
      public page: number,
      public totalPages: number,
      public totalResults: number,
      public movies: Movie[],
    ) { }

      static adapt(item: any): MoviesRequest {
        return new MoviesRequest(
          item.page,
          item.total_pages,
          item.total_results,
          item.results.map((data: any[]) => Movie.adapt(data)),
        );
      }
  }

export class GenresRequest {
    constructor(
      public genres: Genre[],
    ) { }

    static adapt(item: any): GenresRequest {
      return new GenresRequest(
        item.genres.map((data: any[]) => Genre.adapt(data)),
      );
  }
}
