import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/movies/interfaces/movie.interface';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'top-rated-page',
  templateUrl: './top-rated-page.component.html',
  styleUrls: ['./top-rated-page.component.scss']
})
export class TopRatedPageComponent implements OnInit{
  public movies: Movie[] = [];

  constructor(private movieService: MoviesService) { }
  
  ngOnInit(): void {
    this.movieService
      .getTopRatedMovies()
      .subscribe((response) => (this.movies = response.results));
  }

}
