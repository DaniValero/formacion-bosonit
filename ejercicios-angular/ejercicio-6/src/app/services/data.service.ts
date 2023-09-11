import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'https://disease.sh';

  constructor(private http: HttpClient) {}

  getLastDaysInfo(): Observable<Data> {
    return this.http.get(
      `${this.baseUrl}/v3/covid-19/historical/all?lastdays=all`
    );
  }

  getContinentInfo(): Observable<Data> {
    return this.http.get(
      `${this.baseUrl}/v3/covid-19/continents/europe`
    );
  }
}
