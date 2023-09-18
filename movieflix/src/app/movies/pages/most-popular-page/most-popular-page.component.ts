import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'most-popular-page',
  templateUrl: './most-popular-page.component.html',
  styleUrls: ['./most-popular-page.scss'],
})
export class MostPopularPage implements OnInit {
  public movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService
      .getAllMovies()
      .subscribe((response) => (this.movies = response.results));
  }

  searchMovie(title: string) {
    
  }
}
