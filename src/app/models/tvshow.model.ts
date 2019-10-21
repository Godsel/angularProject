import { Injectable } from '@angular/core';
import { Adapter } from './adapter';

export class Tvshow {
    constructor(
      public id: number,
      public name: string,
      public originalTitle: string,
      public posterPath: string,
      public score: number,
      public releaseDate: Date,
      public details: TvshowDetails,
    ) { }

    static adapt(item: any): Tvshow {
      return new Tvshow(
        item.id,
        item.name,
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

export class TvshowDetails {
    constructor(
      public originalLanguage: string,
      public tagline: string,
      public overview: string,
      public runtime: number,
      public genres: Genre[],
      public budget: number,
      public revenue: number,
      public posterPath: string,
      public name: string,
      public firstAirDate: string
    ) { }

    static adapt(item: any): TvshowDetails {
      return new TvshowDetails(
        item.original_language,
        item.tagline,
        item.overview,
        item.runtime,
        item.genres.map((data: any[]) => Genre.adapt(data)),
        item.budget,
        item.revenue,
        item.poster_path,
        item.name,
        item.first_air_date,
      );
    }
  }

