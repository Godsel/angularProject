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
import { MovieAdapter, MovieDetailsAdapter, GenreAdapter } from './models/movie.model';
import { MovieRequestAdapter } from './models/request.model';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviecardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [MoviedbService, MovieAdapter, MovieDetailsAdapter, GenreAdapter, MovieRequestAdapter],
  bootstrap: [AppComponent]
})
export class AppModule { }
