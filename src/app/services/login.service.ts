import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Response } from '@app/classes';
import { Login } from '@app/classes/login.class';
import { Constants } from '@app/enums/enums';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private api = Constants.api;

  constructor(private http: HttpClient) { }

  login(credentials: Login) {
    const email = credentials.email;
    const password = credentials.password;

    const body = { email, password };

    return this.http.post<Response>(`${this.api}user/login`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }
}
