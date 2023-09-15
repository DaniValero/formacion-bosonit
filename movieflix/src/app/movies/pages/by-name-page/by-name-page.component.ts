import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'by-name-page',
  templateUrl: './by-name-page.component.html',
  styleUrls: ['./by-name-page.scss'],
})
export class ByNamePage implements OnInit {
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
