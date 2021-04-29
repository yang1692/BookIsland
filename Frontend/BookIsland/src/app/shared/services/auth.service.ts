import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpParams} from '@angular/common/http';
import {User} from '../modules/users';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: null | User | undefined;
  constructor(
    private httpClient: HttpClient
  ) {
    this.checkLogin()
      .subscribe(res => {
        if (res.success){
          this.user = res.user;
          this.user.orders.sort(
            (a, b) => {
              return new Date(b.order_date).getTime() - new Date(a.order_date).getTime();
            }
          );
        }
      });
  }

  login(user: any): Observable<{ success: boolean, user: any }> {
    const userFormData = new HttpParams()
      .append('username', user.username)
      .append('password', user.password);
    return this.httpClient.post<{ success: boolean, user: any }>(`${environment.API_URL}/login`,
      userFormData,
      {withCredentials: true});
  }
  logout(): Observable< {success: boolean} > {
    return this.httpClient.get< {success: boolean} >(
      `${environment.API_URL}/logout`,
      {withCredentials: true}
    );
  }
  checkEmail(username: string): Observable<{ success: boolean }> {
    return this.httpClient.post<{ success: boolean }>(
      `${environment.API_URL}/users/checkUsername`,
      {username},
      {withCredentials: true}
    );
  }
  checkLogin(): Observable<{ success: boolean, user: User }> {
    return this.httpClient.get<{ success: boolean, user: User }>(
      `${environment.API_URL}/checklogin`,
      {withCredentials: true}
    );
  }
  register(user: any): Observable<{ success: boolean, user: User }> {
    const userFormData = {
      username: user.username,
      password: user.passwordGroup.password
    };
    return this.httpClient.post<{ success: boolean, user: User }>(
      `${environment.API_URL}/users`,
      userFormData
    );
  }
}
