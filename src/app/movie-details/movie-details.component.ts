import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { map, switchMap } from "rxjs/operators";
import {Observable} from "rxjs";
import {MovieService} from '../movie.service';
import {Movie} from '../movie.model';
import {MovieDetail} from '../moviedetails.model';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieDetils$: Observable<MovieDetail>;

  constructor(
    private  route: ActivatedRoute,
    private  movieService: MovieService
  ) {}

  ngOnInit() {
    this.movieDetils$ = this.route.queryParams.pipe(
      map(queryParams => queryParams["movieId"]),
      switchMap(imdbId => this.movieService.getMovieDetails(imdbId)),
      switchMap((movie: MovieDetail) =>
        this.movieService.searchMovie(movie.Title).pipe(
          map((similarMovies: Array<Movie>) =>
            similarMovies.filter(
              (similarMovie: Movie) => similarMovie.Title !== movie.Title
            )
          ),
          map((similarMovies: Array<Movie>) => ({
            ...movie,
            similarMovies
          }))
        )
      )
    );
    console.log(this.movieDetils$);
  }
}
