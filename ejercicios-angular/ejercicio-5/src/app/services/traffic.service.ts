import { Injectable } from '@angular/core';
import { Observable, Subject, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TrafficService {
  private data = new Subject<string>
  public isLightOn?: boolean

  constructor() { }

  sendColor(color: string) {
    this.data.next(color)
  }

  getColor(): Observable<string> {
    return this.data.asObservable()
  }
}
