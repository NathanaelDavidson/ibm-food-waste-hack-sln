import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NewUserInfo } from '../models/new-user-info';
import { User } from '../models/user';

const LOGIN_STORAGE_KEY = 'login';

interface Login {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private activeLogin: Login;

  constructor(private http: HttpClient) {
    this.loadLoginData();
  }

  clearLoginData() {
    this.activeLogin = null;
    sessionStorage.removeItem(LOGIN_STORAGE_KEY);
    localStorage.removeItem(LOGIN_STORAGE_KEY);
  }

  login(username: string, password: string, save: boolean = false): Observable<User> {
    return this.http.post<Login>(environment.urls.login, { username, password }, {
      headers: { 'Content-Type': 'application/json' }
    }).pipe(
      take(1),
      map((data: Login): User => {
        this.activeLogin = data;
        this.saveLoginData(save);
        return data.user;
      })
    );
  }

  logout(): Observable<any> {
    return this.http.post(environment.urls.logout, {}, { headers: { 'Content-Type': 'application/json' } }).pipe(
      take(1),
      map(resp => {
        this.clearLoginData();
        return resp;
      })
    );
  }

  signup(newUser: NewUserInfo): Observable<User> {
    return this.http.post<User>(environment.urls.signup, newUser, { headers: { 'Content-Type': 'application/json' } });
  }

  getCurrentUser(): User {
    if (this.activeLogin) {
      return this.activeLogin.user;
    }
    return null;
  }

  getToken(): string {
    if (this.activeLogin) {
      return this.activeLogin.token;
    }
    return null;
  }

  private loadLoginData(): void {
    // First, check session storage
    let serializedLogin = sessionStorage.getItem(LOGIN_STORAGE_KEY);
    // If no data found, check local storage
    if (!serializedLogin) {
      serializedLogin = localStorage.getItem(LOGIN_STORAGE_KEY);
    }
    this.activeLogin = JSON.parse(serializedLogin);
  }

  private saveLoginData(persistSession: boolean = false): void {
    const serializedLogin = JSON.stringify(this.activeLogin);
    sessionStorage.setItem(LOGIN_STORAGE_KEY, serializedLogin);
    if (persistSession) {
      localStorage.setItem(LOGIN_STORAGE_KEY, serializedLogin);
    }
  }
}
