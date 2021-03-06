import { Movie, Genre } from './movie.model';
import { Injectable } from '@angular/core';
import { Adapter } from './adapter';
import { Tvshow } from './tvshow.model';

export class MoviesRequest {
    constructor(
      public requestType: string,
      public requestAssertion: string,
      public page: number,
      public totalPages: number,
      public totalResults: number,
      public movies: Movie[],
    ) { }

      static adapt(item: any, type: string, assertion: string): MoviesRequest {
        return new MoviesRequest(
          type,
          assertion,
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

export class TvshowRequest {
  constructor(
    public requestType: string,
    public requestAssertion: string,
    public page: number,
    public totalPages: number,
    public totalResults: number,
    public tvshows: Tvshow[],
  ) { }

    static adapt(item: any, type: string, assertion: string): TvshowRequest {
      return new TvshowRequest(
        type,
        assertion,
        item.page,
        item.total_pages,
        item.total_results,
        item.results.map((data: any[]) => Tvshow.adapt(data)),
      );
    }
}
