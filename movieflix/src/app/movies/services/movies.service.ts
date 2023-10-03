import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, forkJoin, map } from 'rxjs';
import { Genre, Genres, Movie, Result } from '../interfaces/movie.interface';
import { environments } from 'src/environments/environments';
import { Trailer } from '../interfaces/video.interface';
import { Cast } from '../interfaces/cast.interface';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private apiUrl: string = 'https://api.themoviedb.org/3';
  private genreSubject = new Subject<Genre>();
  genre$: Observable<Genre> = this.genreSubject.asObservable();
  public pageNumbers: number[] = [1, 2, 3, 4, 5];

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const tokenValue = environments.apiToken;
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${tokenValue}`,
    });
  }

  getAllMovies(): Observable<Result[]> {
    const headers = this.getHeaders();

    const requests = this.pageNumbers.map((pageNumber) =>
      this.http.get<Result>(
        `${this.apiUrl}/movie/popular?language=en-US&page=${pageNumber}`,
        { headers }
      )
    );

    return forkJoin(requests);
  }

  getTopRatedMovies(): Observable<Result[]> {
    const headers = this.getHeaders();
    const requests = this.pageNumbers.map((pageNumber) =>
      this.http.get<Result>(
        `${this.apiUrl}/movie/top_rated?page=${pageNumber}`,
        { headers }
      )
    );

    return forkJoin(requests);
  }

  getNowPlaying(): Observable<Result[]> {
    const headers = this.getHeaders();
    const requests = this.pageNumbers.map((pageNumber) =>
      this.http.get<Result>(
        `${this.apiUrl}/movie/now_playing?page=${pageNumber}`,
        { headers }
      )
    );
    return forkJoin(requests);
  }
  getAllGenres(): Observable<Genres> {
    const headers = this.getHeaders();
    return this.http.get<Genres>(`${this.apiUrl}/genre/movie/list`, {
      headers,
    });
  }

  getMovieById(id: number): Observable<Movie> {
    const headers = this.getHeaders();
    return this.http.get<Movie>(`${this.apiUrl}/movie/${id}`, { headers });
  }

  getMovieTrailer(id: number): Observable<Trailer> {
    const headers = this.getHeaders();
    return this.http.get<Trailer>(`${this.apiUrl}/movie/${id}/videos`, {
      headers,
    });
  }

  getCastMembers(id: number): Observable<Cast> {
    const headers = this.getHeaders();
    return this.http.get<Cast>(`${this.apiUrl}/movie/${id}/credits`, {
      headers,
    });
  }

  searchMoviesByName(name: string): Observable<Result> {
    const headers = this.getHeaders();
    return this.http.get<Result>(`${this.apiUrl}/search/movie?query=${name}`, {
      headers,
    });
  }

  searchByGenre(newGenre: Genre): Observable<Result> {
    const headers = this.getHeaders();

    return forkJoin(
      this.pageNumbers.map((pageNumber) =>
        this.http.get<Result>(
          `${this.apiUrl}/discover/movie?with_genres=${newGenre}&page=${pageNumber}`,
          { headers }
        )
      )
    ).pipe(
      map((resultsArray: Result[]) => {
        const mergedResult: Result = {
          page: 0,
          results: [],
          total_pages: 0,
          total_results: 0,
        };

        for (const result of resultsArray) {
          mergedResult.results = mergedResult.results.concat(result.results);
          mergedResult.page = result.page;
          mergedResult.total_pages = result.total_pages;
          mergedResult.total_results += result.total_results;
        }

        return mergedResult;
      })
    );
  }
}
