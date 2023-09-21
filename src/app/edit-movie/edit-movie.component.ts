import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MovieService } from '../movie.service';
import { Movie } from '../app.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-movie',
  templateUrl: './edit-movie.component.html',
  styleUrls: ['./edit-movie.component.css']
})
export class EditMovieComponent {
  id: string = '';

  movie: Movie = {
    id: '',
    name: '',
    poster: '',
    rating: 0,
    summary: '',
    trailer: '',
  };

  movieForm =this.formBuild.group({
    id:'',
    name: ['',[Validators.required,Validators.minLength(5)]],
    poster: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
    rating: [0,[Validators.required,Validators.min(0),Validators.max(10)]],
    summary: ['',[Validators.required,Validators.minLength(20)]],
    trailer: ['',[Validators.required,Validators.minLength(5),Validators.pattern("^http.*")]],
  })
  constructor(private formBuild:FormBuilder,private movieservice:MovieService,private router:ActivatedRoute,private route:Router){
    const {id} = this.router.snapshot.params;
    this.id =id;
  }
  ngOnInit(){
    this.movieservice.getMovieById(this.id).subscribe((mv)=>{
      this.movieForm.patchValue(mv);
    });
  }

  get name() {
    return this.movieForm?.get('name');
  }

  get rating() {
    return this.movieForm?.get('rating');
  }

  get poster() {
    return this.movieForm?.get('poster');
  }

  get summary() {
    return this.movieForm?.get('summary');
  }

  get trailer() {
    return this.movieForm?.get('trailer');
  }
 
  
  editMovie() {
    if(this.movieForm.valid){
      const edited=this.movieForm.value;
      this.movieservice.editMovieById(edited as Movie).subscribe(()=> {
        this.route.navigate(['/movies'])
      })

    }
}

}
