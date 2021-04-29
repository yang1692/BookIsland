import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {Address} from '../modules/address';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private httpClient: HttpClient) { }
  update(address: Address): Observable<{ success: boolean, address: Address }> {
    return this.httpClient.put<{ success: boolean, address: Address }>(
      `${environment.API_URL}/addresses`,
      address,
      {withCredentials: true}
    );
  }
  addAddress(address: Address): Observable<{ success: boolean, address: Address }> {
    return this.httpClient.post<{ success: boolean, address: Address }>(
      `${environment.API_URL}/addresses`,
      address,
      {withCredentials: true}
    );
  }
  getAddress(): Observable<{ success: boolean, addresses: Address[] }> {
    return this.httpClient.get<{ success: boolean, addresses: Address[] }>(
      `${environment.API_URL}/addresses`,
      {withCredentials: true}
    );
  }
  deleteAddress(id: number): Observable<{ success: boolean }> {
    return this.httpClient.delete<{ success: boolean }>(
      `${environment.API_URL}/addresses/${id}`,
      {withCredentials: true}
    );
  }
}
