import { Component, Input, OnDestroy, OnInit} from '@angular/core';
import { Genre, Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnDestroy{

  @Input()
  public movies: Movie[] = [];

  public filteredMovies?: Movie[] = [];

  public genre?: Genre;

  constructor(private router: Router, private moviesService: MoviesService) { 
  
  }
  
  public subscription$!: Subscription
  
  ngOnInit(): void {
    this.subscription$ = this.moviesService.genre$.subscribe((newGenre) => {
      this.genre = newGenre;
      this.filterMoviesByGenre();
      console.log(this.genre);
    });
  }
  ngOnDestroy(): void {
    if(this.subscription$) this.subscription$.unsubscribe()
  }

  onCardClick(id: number) {
    this.router.navigate(['movies/movie', id]);
  }

  public filterMoviesByGenre() {

    this.filteredMovies = this.movies.filter((movie) => movie.genre_ids.includes(this.genre!.id))
  }
}

