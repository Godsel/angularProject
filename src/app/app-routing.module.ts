import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowListComponent } from './components/tvshow/tvshow-list/tvshow-list.component';
import { MovieCardComponent } from './components/movie/movie-card/movie-card.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';


const routes: Routes = [
  {
    path : 'Séries',
    component : TvshowListComponent
  },
  {
    path : 'Films',
    component : MovieCardComponent
  },
  {
    path : 'Acteurs',
    component : PeopleListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
