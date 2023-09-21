import { Injectable } from '@angular/core';
import { Movie } from './app.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
//   movieList :Array<Movie>= [
//     {
//     src:"https://images.news18.com/ibnlive/uploads/2021/06/1624284456_vijay-in-beast.jpg?impolicy=website&width=510&height=356",
//     alt:"Beast movie poster",
//     movietitle:"Beast",
//     moviereleaseyr:2022,
//     movielength:"2h 28min",
//     category:"Action/Thriller",
//     content:`hine Tom Chacko as the masked terrorist head, who had hijacked the mall and held people hostage. The trailer also features director-turned-actor Selvaraghavan in the role of an intelligence officer.`
//   },{
//     src:"https://m.media-amazon.com/images/M/MV5BMThmYWI3NTItZDY0ZC00YzMwLWEwYWYtMzhmOTEyMWUwOTE2XkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg",
//       alt:"Velaikkaranmovie poster",
//       movietitle:"Velaikkaran",
//       moviereleaseyr:2017,
//       category:"Action/Thriller",
//       movielength:"2h 39m",
//       content:`The movie starts  from a slum  hero  had some personal plans while creating the radio channel.
//       When he start to find the secret behind the food corporations and the adulteration in the industry he fight against them`,
//   },{
//     src:"https://i1.sndcdn.com/artworks-000136413248-0ehd1f-t500x500.jpg",
//       alt:"Vedhalam movie poster",
//       movietitle:"Vedhalam",
//       moviereleaseyr:2015,
//       category:"Action/Masala",
//       movielength:"2h 28min",
//       content:`Vedalam is a 2015 Indian Tamil-language action film written and directed
//     by Siva. It stars Ajith Kumar and Lakshmi Menon while Shruti Hassan,
//     Ashwin Kakumanu, Rahul Dev, Thambi Ramaiah, Kabir Singh, and Soori
//     play supporting roles.`,
//   }
// ]
movieList:Array<Movie> = [];
  constructor(private http:HttpClient) { }
  getMovieList(){
    return this.movieList;
  }
  getMovieListBYAPI(){
    return this.http.get<Movie[]>(`https://64f6f4279d7754084952d8b2.mockapi.io/Movies`);
  }
  createMovie(newmovie:Movie){
    return this.http.post(`https://64f6f4279d7754084952d8b2.mockapi.io/Movies`,newmovie);
  }
  getMovieById(id:string){
    return this.http.get<Movie>(`https://64f6f4279d7754084952d8b2.mockapi.io/Movies/${id}`);
  }
  editMovieById(edited:Movie){
    const id =edited.id;
    return this.http.put<Movie>(`https://64f6f4279d7754084952d8b2.mockapi.io/Movies/${id}`,edited)
  }
  deleteMovieById(id:string){
    return this.http.delete<Movie>(`https://64f6f4279d7754084952d8b2.mockapi.io/Movies/${id}`);
  }
  setMovieList(newmovie:Movie){
    this.movieList.push(newmovie);
  }
}
