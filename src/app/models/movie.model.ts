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
  }

export class MovieDetails {
    constructor(
      public tagline: string,
      public releaseDate: Date,
      public overview: string,
      public genres: Genre[],
      public videoPath: string,
    ) { }
  }

export class Genre {
    constructor(
        public id: number,
        public name: string,
    ) {}
}

@Injectable({
    providedIn: 'root'
})

export class MovieAdapter implements Adapter<Movie> {

  adapt(item: any): Movie {
    return new Movie(
      item.id,
      item.title,
      item.original_title,
      item.poster_path,
      null,
    );
  }
}

export class GenreAdapter implements Adapter<Genre[]> {
    static adapt(genres: any): Genre[] {
            const table: Genre[] = [];
            for (const i of genres) {
                table.push(new Genre(i.id, i.name));
            }
            return table;
    }
    adapt(item: any): Genre[] {
        const table: Genre[] = [];
        for (const i of item) {
            table.push(new Genre(i.id, i.name));
        }
        return table;
      }
}

export class MovieDetailsAdapter implements Adapter<MovieDetails> {

    adapt(item: any): MovieDetails {
      return new MovieDetails(
        item.results.tagline,
        item.results.release_date,
        item.results.overview,
        GenreAdapter.adapt(item.results.genres),
        item.results.videoPath,
      );
    }
}
