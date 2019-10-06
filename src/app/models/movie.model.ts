import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Movie {
    constructor(
      public id: number,
      public title: string,
      public originalTitle: string,
      public posterPath: string,
      public details: MovieDetails,
    ) { }

    static adapt(item: any): Movie {
      return new Movie(
        item.id,
        item.title,
        item.original_title,
        item.poster_path,
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
      public tagline: string,
      public releaseDate: Date,
      public overview: string,
      public genres: Genre[],
      public videoPath: string,
    ) { }

    static adapt(item: any): MovieDetails {
      return new MovieDetails(
        item.results.tagline,
        item.results.release_date,
        item.results.overview,
        item.genres.map((data: any[]) => Genre.adapt(data)),
        item.results.videoPath,
      );
    }
  }

