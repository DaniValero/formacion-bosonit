import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/environments/environments';
import { User } from '../interfaces/user.interface';
import { Observable, of, tap, map, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environments.baseURL;
  private user?: User;

  constructor(private hhtp: HttpClient) { }

  get currentUser(): User | undefined{
    if (!this.user) return undefined;
    return structuredClone(this.user)
  }

  login(email: string, password: string): Observable<User> {
    
    return this.hhtp.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => {
        this.user = user;
        localStorage.setItem('token', 'asdaada.d3qeqweqwq.asdccaaeA')
      })
    )

  }

  checkAuthentication():Observable<boolean> {
    
    if (!localStorage.getItem("token")) return of(false)

    const token = localStorage.getItem("token")
    
    return this.hhtp.get<User>(`${this.baseUrl}/users/1`)
    .pipe(
      tap(user => this.user = user),
      map(user => !!user),
      catchError( err => of(false))
    )
  }

  logout(): void {
    this.user = undefined
    localStorage.clear()
  }

}
