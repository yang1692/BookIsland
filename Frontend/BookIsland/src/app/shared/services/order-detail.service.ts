import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {OrderDetail} from '../modules/orderDetail';
import {Review} from '../modules/review';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailService {

  constructor(
    private httpClient: HttpClient
  ) { }
  getOrderDetail(id: number): Observable<OrderDetail | null> {
    return this.httpClient.get<OrderDetail | null>( `${environment.API_URL}/orderDetails/${id}`);
  }
  makeReviewed(id: number): Observable<{success: boolean }> {
    return this.httpClient.put<{ success: boolean}>(
      `${environment.API_URL}/orderDetails/${id}`,
      {withCredentials: true}
    );
  }
  updateReview(review: Review): Observable<{success: boolean }> {
    console.log(review);
    return this.httpClient.put<{ success: boolean}>(
      `${environment.API_URL}/review`,
      review,
      {withCredentials: true}
    );
  }
  getReviews(id: number): Observable<Review[]> {
    return this.httpClient.get<Review[]>(
      `${environment.API_URL}/review/${id}`,
    );
  }
}
