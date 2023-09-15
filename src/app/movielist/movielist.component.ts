import { Component } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movielist',
  templateUrl: './movielist.component.html',
  styleUrls: ['./movielist.component.css']
})
export class MovielistComponent {
  movieList;

  constructor(movieService: MovieService) {
    this.movieList = movieService.getMovieList();
  }
}
