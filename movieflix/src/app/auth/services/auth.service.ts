import { Injectable } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { environments } from 'src/environments/environments';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private backendUrl: string = environments.backendUrl;
  private user?: User;

  constructor(private _http: HttpClient) {}

  login(email: string, password: string): Observable<User> {
    const loginData = { email, password };
    return this._http.post<User>(`${this.backendUrl}/login`, loginData)
      .pipe(
        tap((user) => {
          this.user = user;
          localStorage.setItem('token', 'asdaada.d3qeqweqwq.asdccaaeA');
        })
      );
  }

  get currentUser(): User | undefined {
    if (!this.user) return undefined;
    return structuredClone(this.user);
  }

  checkAuthentication(): Observable<boolean> {
    if (!localStorage.getItem('token')) return of(false);

    const token = localStorage.getItem('token');

    return this._http.get<User>(`${this.backendUrl}/users`).pipe(
      tap((user) => (this.user = user)),
      map((user) => !!user),
      catchError((err) => of(false))
    );
  }

  logout(): void {
    this.user = undefined;
    localStorage.clear();
  }

  register(name: string, email: string, password: string): void {

  }
}
