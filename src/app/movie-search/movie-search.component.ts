import { Component, OnInit } from '@angular/core';
import {MovieService} from "../movie.service";
import {Movie} from "../movie.model";
import {Observable} from 'rxjs';


@Component({
  selector: 'app-movie-search',
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css']
})
export class MovieSearchComponent  {

query:String;

Movies$:Observable<Array<Movie>>;

  constructor(private service:MovieService) { }

  ngOnInit(): void {
  }

  getsearchmoview(){
    this.Movies$=this.service.searchMovie(this.query);
  }

}
