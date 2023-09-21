import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../app.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  movieList:Array<Movie> = [];
  getMovieList:Subscription | any;
  constructor(private   movieService: MovieService) {
    this.movieList
  }
 ngOnInit(){
  this.loadMoviesData();
 }

 loadMoviesData(){
  this.getMovieList = this.movieService.getMovieListBYAPI().subscribe((mvlist)=>{ 
    this.movieList= mvlist;
  })
 }
 ngOnDestroy(){
  this.getMovieList.unsubscribe();
 }
}
export{};
