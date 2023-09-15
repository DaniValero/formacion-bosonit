import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Genre, Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'movie-page',
  templateUrl: './movie-page.component.html',
  styleUrls: ['./movie-page.component.scss'],
})
export class MoviePageComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private moviesService: MoviesService,
    private router: Router
  ) {}

  public movie?: Movie
  public genres?: Genre[]

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        
        switchMap(({ id }) =>
          this.moviesService.getMovieById(id)
        )
      )
      .subscribe((movie) => {
        if (!movie) return this.router.navigateByUrl('');
        this.movie = movie
        this.genres = movie.genres
        console.log(movie)
        return
      });
    
  }
}
