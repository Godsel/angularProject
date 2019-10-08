import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { MoviedbService } from './services/moviedb.service';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MoviecardComponent } from './moviecard/moviecard.component';
import { MovieGenresComponent } from './movie-genres/movie-genres.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { TvshowListComponent } from './tvshow-list/tvshow-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { TvshowDetailsComponent } from './tvshow-details/tvshow-details.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { CarouselsComponent } from './carousels/carousels.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviecardComponent,
    MovieGenresComponent,
    MoviesListComponent,
    TvshowListComponent,
    MovieDetailsComponent,
    TvshowDetailsComponent,
    PeopleDetailsComponent,
    PeopleListComponent,
    CarouselsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [MoviedbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
