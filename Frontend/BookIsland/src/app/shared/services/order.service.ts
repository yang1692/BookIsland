import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../modules/book';
import {environment} from '../../../environments/environment';
import {Order} from '../modules/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getOrder(id: number): Observable<Order | null> {
    return this.httpClient.get<Order | null>( `${environment.API_URL}/orders/${id}`);
  }
  cancelOrder(id: number): Observable<{ success: boolean }>{
    return this.httpClient.put< {success: boolean} >(
      `${environment.API_URL}/orders/cancel/${id}`,
      {},
      {withCredentials: true}
    );
  }
  deliveredOrder(id: number): Observable<{ success: boolean }>{
    return this.httpClient.put< {success: boolean} >(
      `${environment.API_URL}/orders/delivered/${id}`,
      {},
      {withCredentials: true}
    );
  }
  getUndeliveredOrders(): Observable< Order[] > {
    return this.httpClient.get< Order[] >(
      `${environment.API_URL}/orders/admin`,
      {withCredentials: true}
    );
  }
}
