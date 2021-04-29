import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {CartService} from '../services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class CartGuard implements CanActivate {
  constructor(
    private cs: CartService,
    private router: Router
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.cs.subtotal < 0) {
      this.router.navigate(['/home']).catch();
    }
    return this.cs.subtotal > 0;
  }
}
