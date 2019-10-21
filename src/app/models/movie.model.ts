import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Movie {
    constructor(
      public id: number,
      public title: string,
      public originalTitle: string,
      public posterPath: string,
      public score: number,
      public releaseDate: Date,
      public details: MovieDetails,
    ) { }

    static adapt(item: any): Movie {
      return new Movie(
        item.id,
        item.title,
        item.original_title,
        item.poster_path,
        item.vote_average,
        item.release_date,
        null,
      );
    }
  }

export class Genre {
    constructor(
        public id: number,
        public name: string,
    ) {}

    static adapt(item: any): Genre {
      return new Genre(
        item.id,
        item.name,
      );
    }
}

export class MovieDetails {
    constructor(
      public originalLanguage: string,
      public tagline: string,
      public overview: string,
      public runtime: number,
      public genres: Genre[],
      public budget: number,
      public revenue: number,
      public posterPath: string,
      public title: string,
      public releaseDate: string,
      public id: number,
    ) { }

    static adapt(item: any): MovieDetails {
      return new MovieDetails(
        item.original_language,
        item.tagline,
        item.overview,
        item.runtime,
        item.genres.map((data: any[]) => Genre.adapt(data)),
        item.budget,
        item.revenue,
        item.poster_path,
        item.title,
        item.release_date,
        item.id,
      );
    }
  }

