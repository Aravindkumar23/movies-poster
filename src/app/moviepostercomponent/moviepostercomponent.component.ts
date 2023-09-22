import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';
import { Subject, debounceTime, switchMap } from 'rxjs';

@Component({
  selector: 'app-moviepostercomponent',
  templateUrl: './moviepostercomponent.component.html',
  styleUrls: ['./moviepostercomponent.component.css']
})
export class MoviepostercomponentComponent {
constructor(private router:Router,private movieservice:MovieService){
  this.likeSubject.pipe(debounceTime(2000),switchMap((count) => 
  {this.movie= {...this.movie,like:count}
  return this.movieservice.editMovieById(this.movie)}
  )).subscribe();
  this.disLikeSubject.pipe(debounceTime(2000),switchMap((count) => 
  {this.movie= {...this.movie,dislike:count}
  return this.movieservice.editMovieById(this.movie)}
  )).subscribe();
}
  likeSubject = new Subject<number>;
  disLikeSubject = new Subject<number>;
  @Input() movie:Movie={
    id:'',
    name:'',
    rating:0,
    poster:'',
    summary:'',
    trailer:'',
    like:0,
    dislike:0,
    releaseyr: '',
  censorRating:'',
  genres:[],
  languages:[],
  cast:[],
}
@Output() removeMovie = new EventEmitter();
    value:boolean=true;
    toggle(){
      this.value=!this.value

    }
    editMovie() {
      this.router.navigate(['/movies/edit/',this.movie.id])
      }

      deleteMovie(){
        this.movieservice.deleteMovieById(this.movie.id).subscribe(()=>{
        this.removeMovie.emit();
        this.router.navigate(['/movies']);
      });
      }

    updateLike(count:number){
      return this.likeSubject.next(count);
    }
    
    updateDislike(count:number){
      return this.disLikeSubject.next(count);
    }
}
