import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl = 'http://localhost:8081/login';
  private registerUrl = 'http://localhost:8081/register';
  private usersUrl = 'http://localhost:8081/users';

  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(this.loginUrl, { email, password }, { responseType: 'text' as 'json' });
  }

  register(firstname: string, lastname: string, email: string, password: string): Observable<any> {
    return this.http.post(this.registerUrl, { firstname, lastname, email, password });
  }
  getUsers(): Observable<any> {
    return this.http.get<any>(this.usersUrl);
  }
}