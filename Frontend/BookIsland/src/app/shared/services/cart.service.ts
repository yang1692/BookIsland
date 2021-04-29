import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {environment} from '../../../environments/environment';
import {AuthService} from './auth.service';
import {Cart} from '../modules/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  subtotal = 0;
  constructor(
    private httpClient: HttpClient,
    private auth: AuthService) {
  }

  submitOrder(addressId: number): Observable<{ success: boolean, message: string }> {
    if (this.auth.user?.shoppingCart !== undefined) {
      const orderDetail = this.auth.user?.shoppingCart.filter(
        (value: Cart, index: number) => value.checked);
      orderDetail.splice(0, 0, new Cart({
        id: addressId,
        book: {
          sale_price: this.subtotal
        }
      }));
      return this.httpClient.post<{ success: boolean, message: string }>(
        `${environment.API_URL}/orders`,
        orderDetail,
        {withCredentials: true}
      );
    }
    return new Observable<{ success: boolean, message: string }>(subscriber => {
      subscriber.next({success: false, message: 'Empty Shopping Cart!'});
    });
  }
  updateCart(): Observable<{ success: boolean}>{
    return this.httpClient.put< {success: boolean} >(
      `${environment.API_URL}/shoppingCartDetails`,
       this.auth.user?.shoppingCart,
      {withCredentials: true}
    );
  }
}
