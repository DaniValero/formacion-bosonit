import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription, switchMap, Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/movies/interfaces/movie.interface';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.scss'],
})
export class SearchResultsPageComponent implements OnInit, OnDestroy {
  public movies: Movie[] = [];
  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService
  ) {}

  ngOnInit(): void {
    this.getResults()
  }

  getResults() {
    this.activatedRoute.params
      .pipe(
        takeUntil(this._unsubscribe$),
        switchMap(({ query }) => {
          return this.moviesService.searchMoviesByName(query);
        })
      )
      .subscribe((movie) => (this.movies = movie.results));
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
