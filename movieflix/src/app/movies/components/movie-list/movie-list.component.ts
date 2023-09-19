import { AfterContentChecked, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Genre, Movie } from '../../interfaces/movie.interface';
import { Router } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
  
export class MovieListComponent implements OnInit{


  constructor(
    private router: Router,
    private moviesService: MoviesService
  ) { }
 

  ngOnInit(): void {
    this.moviesService.genre$.subscribe((newGenre) => {
      this.genre = newGenre;
      console.log(this.genre)
    });
  }
  
  @Input()
  public movies: Movie[] = []

  public genre: string = ""
  
  onCardClick(id: number) {
    this.router.navigate(['movies/movie', id]);
  }





}
