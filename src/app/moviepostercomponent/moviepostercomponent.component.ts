import { Component,EventEmitter,Input, Output} from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-moviepostercomponent',
  templateUrl: './moviepostercomponent.component.html',
  styleUrls: ['./moviepostercomponent.component.css']
})
export class MoviepostercomponentComponent {
constructor(private router:Router,private movieservice:MovieService){}
  
  @Input() movie:Movie={
    id:'',
    name:'',
    rating:0,
    poster:'',
    summary:'',
    trailer:'',
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
}
