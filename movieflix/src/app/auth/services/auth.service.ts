import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environments } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, switchMap, tap, throwError } from 'rxjs';
import { FavoritesService } from 'src/app/shared/services/favorites.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _backendUrl: string = environments.backendUrl;
  private _user?: User;
  private _authStatus$ = new BehaviorSubject<User | null>(null);

  constructor(
    private _http: HttpClient,
  ) { }

  login(email: string, password: string): Observable<User> {
    const loginData = { email, password };

    return this._http.get<User[]>(`${this._backendUrl}/users`).pipe(
      switchMap((users) => {
        const filteredUsers = users.filter(
          (user) =>
            user.email === loginData.email &&
            user.password === loginData.password
        );

        if (filteredUsers.length === 1) {
          const user = filteredUsers[0];
          this._user = user;
          this._authStatus$.next(user);
          localStorage.setItem('token', 'asdaada.d3qeqweqwq.asdccaaeA');

          if (user.favoriteMovies) {
            localStorage.setItem(
              'favoriteMovies',
              JSON.stringify(user.favoriteMovies)
            );
          } else {
            localStorage.setItem('favoriteMovies', '[]');
          }

          if (user.favoriteSeries) {
            localStorage.setItem(
              'favoriteSeries',
              JSON.stringify(user.favoriteSeries)
            );
          } else {
            localStorage.setItem('favoriteSeries', '[]');
          }

          return of(user);
        } else {
          console.error('Login failed');
          return throwError('Login failed');
        }
      })
    );
  }

  get currentUser(): User | undefined {
    if (!this._user) return undefined;
    return structuredClone(this._user);
  }

  get authStatus$(): Observable<User | null> {
    return this._authStatus$.asObservable();
  }

  checkAuthentication(): Observable<boolean> {
    const token = localStorage.getItem('token');

    if (!token) {
      console.log('no hay token');
      return of(false);
    }

    return this._http.get<User>(`${this._backendUrl}/users`).pipe(
      map((user) => !!user),
      catchError((err) => {
        console.error('Authentication error:', err);
        return of(false);
      })
    );
  }

  logout(): void {
    this._user = undefined;
    this._authStatus$.next(null);
    localStorage.clear();
  }

  register(name: string, email: string, password: string): Observable<User> {
    const newUser = { name, email, password };
    return this._http.post<User>(`${this._backendUrl}/users`, newUser);
  }
}
