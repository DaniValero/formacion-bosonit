import { Injectable } from '@angular/core';
import { Observable, Subject, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ObservablesService {


  public childInfo: string = ""
  public parentInfo: string = ""

  constructor() {}

  public parentObservable$ = new Observable((observer) => {
    console.log('obs starts');
    observer.next('The Parent is using observable');
  });


  // onParentUsingObservable(message: string): Observable<string> {
  //   return this.childInfo = message
  // }

  onChildUsingObservable(message: string): Observable<string> {
    return of(message)
  }

  onParentUsingObservable(message: string): Observable<string> {
    return of(message)
  }



}
