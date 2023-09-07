import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styles: [],
})
export class SearchBarComponent implements OnInit {
  private debouncer: Subject<string> = new Subject<string>();

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
      this.onDebounce.emit(value);
    });
  }

  emitValue(value: string): void {
    this.onValue.emit(value);
  }

  onKeyPress(searchTerm: string): void {
    this.debouncer.next(searchTerm);
  }


}
