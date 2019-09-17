import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenresComponent } from './genres/genres.component';


const routes: Routes = [{path: 'genres', component: GenresComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
