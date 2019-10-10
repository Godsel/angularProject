import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/others/header/header.component';
import { MoviedbService } from './services/moviedb.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { MovieFinderComponent } from './components/movie/movie-finder/movie-finder.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { TvshowListComponent } from './components/tvshow/tvshow-list/tvshow-list.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { TvshowDetailsComponent } from './components/tvshow/tvshow-details/tvshow-details.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { HomeCarouselsComponent } from './components/others/home-carousels/home-carousels.component';
import { TvshowCardComponent } from './components/tvshow/tvshow-card/tvshow-card.component';
import { PeopleCardComponent } from './components/people/people-card/people-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MovieCardComponent,
    MovieFinderComponent,
    MovieListComponent,
    TvshowListComponent,
    MovieDetailsComponent,
    TvshowDetailsComponent,
    PeopleDetailsComponent,
    PeopleListComponent,
    HomeCarouselsComponent,
    TvshowCardComponent,
    PeopleCardComponent
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
