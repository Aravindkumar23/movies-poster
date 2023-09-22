import { Component,Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../app.component';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addform',
  templateUrl: './addform.component.html',
  styleUrls: ['./addform.component.css']
})
export class AddformComponent {
 movieList: Movie[];
      // src:string = ['',[Validators.required]];
      // alt:string =['',[Validators.required]];
      // movietitle:string = ['',[Validators.required]];
      // moviereleaseyr:number|''= ['',[Validators.required]];
      // movielength:string = ['',[Validators.required]];
      // category:string =['',[Validators.required]];
      // content:string = ['',[Validators.required]];
 
  movieForm =this.formBuild.group({
    id:'',
    name: ['',[Validators.required,Validators.minLength(5)]],
    poster: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    rating: [0,[Validators.required,Validators.min(0),Validators.max(10)]],
    summary: ['',[Validators.required,Validators.minLength(20)]],
    trailer: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    like:0,
    dislike:0,
    releaseyr:'',
  censorRating:'',
  genres:[],
  languages:[],
  cast:[],
  })
 constructor(private movieService: MovieService,private formBuild:FormBuilder, private route:Router){
  this.movieList = movieService.movieList;
 }
  
 get name(){
  return this.movieForm?.get('name');
 }

 get rating(){
  return this.movieForm?.get('rating');
 }
 get poster(){
  return this.movieForm?.get('poster');
 }
 get summary(){
  return this.movieForm?.get('summary');
 }
 get trailer(){
  return this.movieForm?.get('trailer');
 }
  // addMovie(){
  //   const newmovie: Movie ={
  //     src:this.src,
  //     alt:this.alt,
  //     movietitle:this.movietitle,
  //     moviereleaseyr:this.moviereleaseyr,
  //     movielength:this.movielength,
  //     category:this.category,
  //     content:this.content,
  //   }
  //   this.movieService.setMovieList(newmovie);
  // }


  addMovie(){
    if(this.movieForm.valid){
      const newmovie=this.movieForm.value;
      this.movieService.createMovie(newmovie as unknown as Movie).subscribe(()=>this.route.navigate(['/movies']))
    }
  }
 


}
