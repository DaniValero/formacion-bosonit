import { Component, Input} from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
  
  
export class MovieListComponent {

  constructor(private router: Router) {
  }

  @Input()
  public movies: Movie[] = []

  onCardClick(id: number) {
    this.router.navigate(['movies/movie', id]);
  }


}
