import { Serie } from 'src/app/series/interfaces/serie.interface';
import { Component } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { Movie } from 'src/app/movies/interfaces/movie.interface';
import { MoviesService } from 'src/app/movies/services/movies.service';
import { FavoritesService } from 'src/app/shared/services/favorites.service';
import { AuthService } from '../../services/auth.service';
import { SeriesService } from 'src/app/series/services/series.service';

@Component({
  selector: 'user-profile-page',
  templateUrl: './user-profile-page.component.html',
  styleUrls: ['./user-profile-page.component.scss'],
})
export class UserProfilePageComponent {

  public userName?: string
  public favoriteMovies?: Movie[]
  public series: Serie[] = [];

  
  public movies: Movie[] = [];
  public favorites?: number[];
  public favorites2?: number[];

  private _unsubscribe$ = new Subject<boolean>();

  constructor(
    private _favoritesService: FavoritesService,
    private _moviesService: MoviesService,
    private _authService: AuthService,
    private _seriesService: SeriesService
  ) {}

  ngOnInit(): void {
    this.getUser()
    this.getFavorites();
    
  }

  
  getUser() {
    this.userName = this._authService.currentUser?.name;
  }
  
  getFavorites() {
    this.favorites = this._favoritesService.getFavoriteMovies();
    this.searchMovies();
    this.favorites2 = this._favoritesService.getFavoriteSeries();
    this.searchSeries()
  }
  
  searchMovies() {
    this.favorites?.map((element) => {
      this._moviesService
      .getMovieById(element)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((movie) => this.movies?.push(movie));
    });
  }

  searchSeries() {
    this.favorites?.map((element) => {
      this._seriesService
      .getSerieById(element)
      .pipe(takeUntil(this._unsubscribe$))
      .subscribe((serieDetail) => {
        const serie: Serie = {
          id: serieDetail.id,
          name: serieDetail.name,
          backdrop_path: serieDetail.backdrop_path,
          first_air_date: serieDetail.first_air_date,
          origin_country: serieDetail.origin_country,
          original_name: serieDetail.original_name,
          overview: serieDetail.overview,
          poster_path: serieDetail.poster_path,
          vote_average: serieDetail.vote_average,
        };
        this.series?.push(serie);
      });
    });
  }
  
  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }
}
