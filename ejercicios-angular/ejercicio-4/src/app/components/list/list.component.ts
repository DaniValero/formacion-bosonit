import { Component, Input } from '@angular/core';
import { University } from 'src/app/interfaces/university.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [],
})
export class ListComponent {

  @Input()
  public universities: University[] = [];

  @Input()
  public searchTerm: string = ""
}
