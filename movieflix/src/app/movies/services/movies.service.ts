import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie, Result } from '../interfaces/movie.interface';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}
  // private headers: object = { Authorization: `Bearer ${environments.apiToken}` };
  private getHeaders(): HttpHeaders {
    const tokenValue = environments.apiToken;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenValue}`,
    });
  }

  getAllMovies(): Observable<Result> {
    const headers = this.getHeaders();
    return this.http.get<Result>(
      `${this.apiUrl}/movie/popular?language=en-US&page=1`, { headers }
    );
  }

  getMovieById(id: number): Observable<Movie> {
    const headers = this.getHeaders()
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}`, {headers}
    )
  }


}
