import { Component, OnDestroy, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, map, switchMap, takeUntil } from 'rxjs';
import { Genre, Movie } from '../../interfaces/movie.interface';
import { VideoResult, } from '../../interfaces/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CastElement } from '../../interfaces/cast.interface';
import { Observable } from 'rxjs';
import { FavoritesService } from '../../services/favorites.service';

@Component({
  selector: 'movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit, OnDestroy {
  constructor(
    private _activatedRoute: ActivatedRoute,
    private _moviesService: MoviesService,
    private _router: Router,
    private _sanitizer: DomSanitizer,
    private _favoritesService: FavoritesService
  ) {}

  public movie$?: Observable<Movie>;
  public genres$?: Observable<Genre[]>;
  public trailer$?: Observable<VideoResult[]>;
  public cast$?: Observable<CastElement[]>;
  public favorite: boolean = false;

  private _unsubscribe$ = new Subject<boolean>();

  ngOnInit(): void {
    this.getData();
  }

  ngOnDestroy(): void {
    this._unsubscribe$.next(true);
    this._unsubscribe$.complete();
  }

  getData() {
    this.movie$ = this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribe$),
      switchMap(({ id }) => {
        return this._moviesService.getMovieById(id);
      })
    );

    this.genres$ = this.movie$.pipe(
      takeUntil(this._unsubscribe$),
      switchMap((movie) => {
        if (!movie) {
          this._router.navigateByUrl('');
          return [];
        }
        return movie.genres ? [movie.genres] : [];
      }),
      map((genres) => genres as Genre[])
    );

    this.trailer$ = this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribe$),
      switchMap(({ id }) => {
        return this._moviesService.getMovieTrailer(id);
      }),
      map((videos) =>
        videos.results.filter((video) => video.type === 'Trailer')
      )
    );

    this.cast$ = this._activatedRoute.params.pipe(
      takeUntil(this._unsubscribe$),
      switchMap(({ id }) => {
        return this._moviesService.getCastMembers(id);
      }),
      map((cast) => cast.cast.slice(0, 16))
    );
  }

  isMovieInFavorites(id: number): boolean {
    const favorites = this._favoritesService.getFavorites();
    return favorites.includes(id);
  }

  toggleFavorite(): void {
    this.favorite = !this.favorite;
    this.movie$!.pipe(takeUntil(this._unsubscribe$)).subscribe((movie) => {
      if (movie) {
        const movieId = movie.id || 0;
        if (this.favorite) {
          if (!this.isMovieInFavorites(movieId)) {
            this._favoritesService.addToFavorites(movieId);
          }
        } else {
          if (this.isMovieInFavorites(movieId)) {
            this._favoritesService.removeFromFavorites(movieId);
          }
        }
      }
    });
  }

  getTrailerUrl(key: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${key}`;
    return this._sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
