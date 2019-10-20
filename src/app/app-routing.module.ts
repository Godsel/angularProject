import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TvshowListComponent } from './components/tvshow/tvshow-list/tvshow-list.component';
import { PeopleListComponent } from './components/people/people-list/people-list.component';
import { HomeCarouselsComponent } from './components/others/home-carousels/home-carousels.component';
import { MovieFinderComponent } from './components/movie/movie-finder/movie-finder.component';
import { MovieDetailsComponent } from './components/movie/movie-details/movie-details.component';
import { TvshowDetailsComponent } from './components/tvshow/tvshow-details/tvshow-details.component';
import { PeopleDetailsComponent } from './components/people/people-details/people-details.component';

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

const routes: Routes = [
{
  path : 'tvshows',
  component : TvshowListComponent
},
{
  path : 'movies',
  component : MovieFinderComponent
},
{
  path : 'people',
  component : PeopleListComponent
},
{
  path : 'home',
  component : HomeCarouselsComponent
},
{
  path : 'movies/:id',
  component : MovieDetailsComponent
},
{
  path : 'tvshows/:id',
  component : TvshowDetailsComponent
},
{
  path : 'people/:id',
  component : PeopleDetailsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
