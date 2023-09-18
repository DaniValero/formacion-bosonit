import { Component } from '@angular/core';
import { Movie } from 'src/app/movies/interfaces/movie.interface';
import { MoviesService } from 'src/app/movies/services/movies.service';

@Component({
  selector: 'now-playing-page',
  templateUrl: './now-playing-page.component.html',
  styleUrls: ['./now-playing-page.component.scss'],
})
export class NowPlayingPageComponent {
  public movies: Movie[] = [];

  constructor(private movieService: MoviesService) {}

  ngOnInit(): void {
    this.movieService
      .getNowPlaying()
      .subscribe((response) => (this.movies = response.results));
  }
}
