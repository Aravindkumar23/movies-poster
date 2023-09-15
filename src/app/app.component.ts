import { Component } from '@angular/core';
type Movie = {
      src:string;
      alt:string;
      movietitle:string ;
      moviereleaseyr:number|'';
      movielength:string ;
      category:string ;
      content:string ;
  }  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
class AppComponent{

}
export { Movie ,Component,AppComponent};