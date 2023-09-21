import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomemsgComponent } from './welcomemsg/welcomemsg.component';
import { AddformComponent } from './addform/addform.component';
import { MoviepostercomponentComponent } from './moviepostercomponent/moviepostercomponent.component';
import { MovielistComponent } from './movielist/movielist.component';
import { EditMovieComponent } from './edit-movie/edit-movie.component';

const routes: Routes = [{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'home',component:WelcomemsgComponent},
{path:'movies/add',component:AddformComponent},
{path:'movies',component:MovielistComponent},
{path:'movies/edit/:id',component:EditMovieComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
