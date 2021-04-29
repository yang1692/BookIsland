import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../modules/author';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {
  constructor(
    private httpClient: HttpClient
  ) { }
  getAuthor(name: string | null): Observable< Author | null> {
    return this.httpClient.get<Author | null>(
      `${environment.API_URL}/authors/${name}`,
      {withCredentials: true}
    );
  }
  addOrUpdateAuthor(author: Author): Observable<{ success: boolean }> {
    return this.httpClient.put<{ success: boolean }>(
      `${environment.API_URL}/authors`,
      author,
      {withCredentials: true}
    );
  }
}
