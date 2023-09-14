import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { Movie } from '../../../interfaces/movie.interface';

@Component({
  selector: 'movie-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.scss']
})
export class ListComponent implements OnInit {

  public movies: Movie[] = []

  constructor(private movieService: MoviesService) { }
  
  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe(
    response => this.movies = response.results
    )
  }


}
