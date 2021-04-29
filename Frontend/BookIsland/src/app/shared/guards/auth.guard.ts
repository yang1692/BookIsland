import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../services/auth.service';
import {CartService} from '../services/cart.service';
import {Cart} from '../modules/cart';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private as: AuthService,
    private router: Router,
    private cs: CartService
  ) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let ifsuccess = true;
    this.as.checkLogin()
      .subscribe(res => {
        if (!res.success) {
          ifsuccess = false;
          this.as.user = null;
          this.router.navigate(['/login']);
        }
        else{
          this.cs.subtotal = 0;
          this.as.user?.shoppingCart.forEach((value: Cart) => {
            this.cs.subtotal += value.checked === 1 ? value.quantity * value.book.sale_price : 0;
          });
          this.cs.subtotal = Number.parseFloat(this.cs.subtotal.toFixed(2));
        }
    });
    return ifsuccess;
  }
}
