import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  loginUser: any;
  baseUrl = 'http://localhost:8080/api/auth/login';
  constructor(private http: HttpClient) {
    this.loginUser = {
      password: '33333',
      userName: 'petrosky',
    };
  }

  login() {
    console.log(this.baseUrl, this.loginUser);
    return this.http.post<any>(this.baseUrl, this.loginUser);
  }
}
