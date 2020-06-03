import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

import {Observable} from 'rxjs';
import {Movie} from './movie.model';
import{MovieDetail} from './moviedetails.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  searchMovie(searchQuery:String):Observable<Array<Movie>>{
    return this.http.get(`http://www.omdbapi.com/?i=tt3896198&apikey=3b98964f&s=${searchQuery}`).
    pipe(
      map((Response:any)=>Response.Search)
    );


  }

  getMovieDetails(imdbId:String):Observable<MovieDetail>{
    return this.http.get<MovieDetail>(`http://www.omdbapi.com/?apikey=3b98964f&i=${imdbId}&plot=full`);
  }

}
