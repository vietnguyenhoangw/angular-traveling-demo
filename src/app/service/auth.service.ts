import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { isEmpty } from 'lodash';

/**
 * API Authentication Test
 * https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication#huserregistration
 *
 * used: this is free api using for test authentication path.
 */

const authenticationUrl: string =
  'http://restapi.adequateshop.com/api/authaccount/';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'Application/json',
    'Access-Control-Allow-Origin': '*',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient) {}

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');

    if (isEmpty(token)) {
      return false;
    } else {
      return true;
    }
  }

  public getCurrentUser(): any {
    console.log(">>> get current user");
    const userInfo = localStorage.getItem('user-info');
    return JSON.parse(userInfo || '');
  }

  public saveToken(token: string): void {
    console.log(">>> save token");
    localStorage.setItem('token', token);
  }

  public saveUserInfo(userInfo: any): void {
    console.log(">>> save user info");
    localStorage.setItem('user-info', userInfo.toString());
  }

  public logoutService(): void {
    console.log(">>> logout");
    localStorage.setItem('token', '');
  }

  public loginService({ username, password }: any): any {
    // vietnguyenw@gmail.com
    // hoangviet2
    return this.httpClient
      .post<any>(
        authenticationUrl + 'login',
        {
          email: username,
          password: password,
        },
        httpOptions
      )
      .pipe();
  }
}
