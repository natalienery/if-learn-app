import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor
  (
    private httpClient: HttpClient,
    private cookieService: CookieService

  ) {}

  login(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.BASE_URL}/usuario/login`, user)
      .pipe(
        tap((result: User) => {

          // Supondo que o resultado contenha o 'id' do usuário
          this.cookieService.set('userId', result.id, 100); // Define o cookie por 1 dia
        })
      );
  }

  // url de criação de cadastro
  signUp(user: User): Observable<User> {
    return this.httpClient.post<User>(`${environment.BASE_URL}/usuario/create`, user)
  }
}
