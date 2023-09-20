import { Component } from '@angular/core';
import { Movie, Result } from 'src/app/movies/interfaces/movie.interface';
import { PaginatorState } from 'src/app/movies/interfaces/pageEvent.interface';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'now-playing-page',
  templateUrl: './now-playing-page.component.html',
  styleUrls: ['./now-playing-page.component.scss'],
})
export class NowPlayingPageComponent {
  public movies: Movie[] = [];

  public allMovies: Result[] = [];

  public rows: number = 20;


  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getNowPlaying().subscribe((response) => {
      this.allMovies = response;
      this.movies = this.allMovies[0].results;
    });
  }


  onPageChange(event: PaginatorState) {
    this.movies = this.allMovies[event.page!].results;

    const h2Element = document.getElementById('page-title');

    if (h2Element) {
      h2Element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'start',
      });
    }
  }
}
