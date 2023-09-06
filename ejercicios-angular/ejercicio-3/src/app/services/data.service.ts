import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/countries.interface';
import { User } from '../interfaces/user.interface';


@Injectable({
  providedIn: 'root',
})
export class DataService {


  constructor(private http: HttpClient) { }
  
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
    return this.http.put<User>(`http://localhost:3000/users/${user.id}`, user)
  }


}
