import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { University } from '../interfaces/university.interface';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country.type';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private apiUrl: string = 'http://universities.hipolabs.com';
  private selectedCountry: Country = "Spain"

  constructor(private http: HttpClient) {}

  getUniversitiesByCountry(selectedCountry: Country): Observable<University[]> {

    this.selectedCountry = selectedCountry
    return this.http.get<University[]>(
      `${this.apiUrl}/search?country=${selectedCountry}`
    );
  }

  searchUniversitiesByName(searchTerm: string): Observable<University[]> {
    return this.http.get<University[]>(`${this.apiUrl}/search?country=${this.selectedCountry}&name=${searchTerm}`
    );
  }
}
