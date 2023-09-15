import { Component,Input} from '@angular/core';
import { Movie } from '../app.component';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-moviepostercomponent',
  templateUrl: './moviepostercomponent.component.html',
  styleUrls: ['./moviepostercomponent.component.css']
})
export class MoviepostercomponentComponent {
  @Input() movie:Movie={
    src:'',
    alt:'',
    movietitle:'',
    moviereleaseyr:'',
    movielength:'',
    category:'',
    content:''
}
}
