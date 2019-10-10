import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowListComponent } from './components/tvshow/tvshow-list/tvshow-list.component';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { HomeCarouselsComponent } from './components/others/home-carousels/home-carousels.component';

const routes: Routes = [
  {
    path : 'Tvshows',
    component : TvshowListComponent
  },
  {
    path : 'Movies',
    component : MovieCardComponent
  },
  {
    path : 'Actors',
    component : PeopleListComponent
  },
  {
    path : '',
    component : HomeCarouselsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
