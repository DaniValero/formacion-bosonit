import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  public currentUser?: User | undefined;

  public userChanged: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}

  setUser(user: User) {
    this.currentUser = user;
    this.userChanged.emit(this.currentUser);
  }

  get userData() {
    return this.currentUser;
  }

  getCountries(): Observable<Country[]> {
    return this.http.get<Country[]>('https://restcountries.com/v3.1/all');
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  createUser(newUser: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/users', newUser);
  }

  editUser(user: User): Observable<User> {
    return this.http.patch<User>(`http://localhost:3000/users/${user.id}`, user);
  }

  deleteUser(user: User): Observable<boolean> {
    return this.http.delete(`http://localhost:3000/users/${user.id}`).pipe(
      catchError((err) => of(false)),
      map((resp) => true)
    );
  }
}
