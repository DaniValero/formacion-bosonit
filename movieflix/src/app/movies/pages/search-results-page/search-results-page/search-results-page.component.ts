import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Movie } from 'src/app/movies/interfaces/movie.interface';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss']
})
export class SearchResultsPageComponent implements OnInit{

  public movies: Movie[] = []

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) { }
  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ query }) => {
        return this.moviesService.searchMoviesByName(query)
      })
    ).subscribe(movie => this.movies = movie.results)
  }
  





}
