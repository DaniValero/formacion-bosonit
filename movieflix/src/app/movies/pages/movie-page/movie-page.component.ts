import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin, switchMap } from 'rxjs';
import { Genre, Movie } from '../../interfaces/movie.interface';
import { VideoResult, Trailer } from '../../interfaces/video.interface';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Cast, CastElement } from '../../interfaces/cast.interface';

@Component({
  selector: 'movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router,
    private sanitizer: DomSanitizer
  ) {}

  public movie?: Movie;
  public genres?: Genre[];
  public trailer?: VideoResult[];
  public cast?: CastElement[]

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          return forkJoin([
            this.moviesService.getMovieById(id),
            this.moviesService.getMovieTrailer(id),
            this.moviesService.getCastMembers(id)
          ]);
        })
      )
      .subscribe(([movie, videos, cast]: [Movie, Trailer, Cast]) => {
        if (!movie) {
          this.router.navigateByUrl('');
          return;
        }

        this.movie = movie;
        this.genres = movie.genres;

        this.trailer = videos.results.filter(
          (video) => video.type === 'Trailer'
        );

        this.cast = cast.cast.slice(0, 16)
      })
  }

  getTrailerUrl(key: string): SafeResourceUrl {
    const url = `https://www.youtube.com/embed/${key}`;
    console.log(this.movie)
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    
  }
}
