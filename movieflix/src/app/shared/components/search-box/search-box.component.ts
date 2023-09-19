import { Component,Input,Output,EventEmitter,OnInit,OnDestroy} from '@angular/core';
import { Subject, debounceTime, Subscription } from 'rxjs';
import { Genre } from 'src/app/movies/interfaces/movie.interface';
import { MoviesService } from '../../../movies/services/movies.service';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.scss'],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSubscription?: Subscription;
  public searchOption: string = 'name';
  public genres?: Genre[] = []
  public genre?: string = ""

  constructor(private moviesService: MoviesService) {}

  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();


  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(300)).subscribe((value) => {
      this.onDebounce.emit(value);
    });

    this.moviesService.getAllGenres().subscribe(response => this.genres = response.genres)
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }

  onSearchOptionChange(selectedOption: Event): void {
    this.searchOption = (selectedOption.target as HTMLInputElement).value
  }

  setGenre(event: Event) {
    this.moviesService.updateGenre((event.target as HTMLInputElement).value)
  }

  
}
