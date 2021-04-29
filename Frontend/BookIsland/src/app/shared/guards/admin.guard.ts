import { Injectable } from '@angular/core';
import {CanActivate, CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate, CanLoad {
  constructor(
    private as: AuthService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.as.user === null || this.as.user?.role !== 'ROLE_ADMIN') {
      this.router.navigate(['/home']).catch();
    }
    return this.as.user?.role === 'ROLE_ADMIN';
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.as.user === null || this.as.user?.role !== 'ROLE_ADMIN') {
      this.router.navigate(['/home']).catch();
    }
    return this.as.user?.role === 'ROLE_ADMIN';
  }
}
