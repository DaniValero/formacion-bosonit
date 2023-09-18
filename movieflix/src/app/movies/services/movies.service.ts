import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Genres, Movie, Result } from '../interfaces/movie.interface';
import { environments } from 'src/environments/environments';
import { Trailer } from '../interfaces/video.interface';
import { Cast } from '../interfaces/cast.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }
  
  private getHeaders(): HttpHeaders {
    const tokenValue = environments.apiToken;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenValue}`,
    });
  }

  getAllMovies(): Observable<Result> {
    const headers = this.getHeaders();
    return this.http.get<Result>(`${this.apiUrl}/movie/popular?language=en-US&page=1`, { headers });
  }

  getAllGenres(): Observable<Genres> {
    const headers = this.getHeaders()
    return this.http.get<Genres>(`${this.apiUrl}/genre/movie/list`, {headers});
  }

  getTopRatedMovies(): Observable<Result> {
    const headers = this.getHeaders();
    return this.http.get<Result>(`${this.apiUrl}/movie/top_rated`, {headers});
  }

  getNowPlaying(): Observable<Result> {
    const headers = this.getHeaders();
    return this.http.get<Result>(`${this.apiUrl}/movie/now_playing`, {headers});
  }


  getMovieById(id: number): Observable<Movie> {
    const headers = this.getHeaders()
    return this.http.get<Movie>(
      `${this.apiUrl}/movie/${id}`, {headers}
    )
  }

  getMovieTrailer(id: number): Observable<Trailer> {
    const headers = this.getHeaders();
    return this.http.get<Trailer>(`${this.apiUrl}/movie/${id}/videos`, { headers });
  }

  getCastMembers(id: number): Observable<Cast> {
    const headers = this.getHeaders()
    return this.http.get<Cast>(`${this.apiUrl}/movie/${id}/credits`, {headers});
  }




}
