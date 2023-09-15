import { Component,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../app.component';
@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
      src:string = '';
      alt:string ='';
      movietitle:string = '';
      moviereleaseyr:number|''= '';
      movielength:string = '';
      category:string ='';
      content:string = '';
  movieList;
 constructor(private movieService: MovieService){
  this.movieList = movieService.movieList;
 }
  
  addMovie(){
    const newmovie: Movie ={
      src:this.src,
      alt:this.alt,
      movietitle:this.movietitle,
      moviereleaseyr:this.moviereleaseyr,
      movielength:this.movielength,
      category:this.category,
      content:this.content,
    }
    this.movieService.setMovieList(newmovie);
  }
 


}
