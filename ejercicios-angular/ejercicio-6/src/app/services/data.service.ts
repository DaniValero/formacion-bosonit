import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { Observable } from 'rxjs';
import { CountryData } from '../interfaces/data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private baseUrl: string = 'https://disease.sh/v3';

  constructor(private http: HttpClient) {}

  getLastDaysInfo(): Observable<Data> {
    return this.http.get(
      `${this.baseUrl}/covid-19/historical/all?lastdays=all`
    );
  }

  getCountriesInfo(): Observable<any> {
    return this.http.get(
      `${this.baseUrl}/covid-19/countries/spain%2C%20ukraine%2C%20italy%2C%20greece%2C%20uk%2C%20austria`
    );
  }
}
