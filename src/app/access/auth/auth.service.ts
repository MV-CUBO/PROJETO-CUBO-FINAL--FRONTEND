import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from '../../api/api.service';
import { UserModel } from './interface/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  private readonly TOKEN_NAME = 'profanis_auth';
  isLoggedIn$ = this._isLoggedIn$.asObservable();
  user: UserModel | null;

  get token(): any {
    return localStorage.getItem(this.TOKEN_NAME);
  }

  constructor(private apiService: ApiService) {
    this._isLoggedIn$.next(!!this.token);
    this.user = this.getUser(this.token);
  }

  login(username: string , password: string) {
    console.log(username, password)
    return this.apiService.login(username, password).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem(this.TOKEN_NAME, response.token);
        this.user = this.getUser(response.token);
      })
    );
  }

  private getUser(token: string): UserModel | null {
    if (!token) {
      return null
    }
    return JSON.parse(window.btoa(token.split('.')[1])) as UserModel;
  }
}