import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {}

  // login(data: any) {
  //   return this.httpClient.post(`${this.baseUrl}/login`, data)
  //     .pipe(tap((result) => {
  //       localStorage.setItem('authUser', JSON.stringify(result));
  //     }));
  // }

  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`http://localhost:8080/usuario/create`, user)
  }
}
