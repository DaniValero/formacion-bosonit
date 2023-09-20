import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../../../movies/services/movies.service';
import { Subscription } from 'rxjs';
import { Genre, Movie } from 'src/app/movies/interfaces/movie.interface';

@Component({
  selector: 'card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent implements OnInit, OnDestroy {
  @Input()
  public movies: Movie[] = [];

  public filteredMovies?: Movie[] = [];

  public genre?: Genre;

  constructor(private router: Router, private moviesService: MoviesService) {}

  public subscription$!: Subscription;

  ngOnInit(): void {
    this.subscription$ = this.moviesService.genre$.subscribe((newGenre) => {
      this.genre = newGenre;
      this.filterMoviesByGenre();
      console.log(this.genre);
    });
  }
  ngOnDestroy(): void {
    if (this.subscription$) this.subscription$.unsubscribe();
  }

  onCardClick(id: number) {
    this.router.navigate(['movies/movie', id]);
  }

  public filterMoviesByGenre() {
    this.filteredMovies = this.movies.filter((movie) =>
      movie.genre_ids.includes(this.genre!.id)
    );
  }
}
