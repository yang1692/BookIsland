import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {Book} from '../modules/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  books: Book[] = [];
  constructor(
    private httpClient: HttpClient
  ) {
    this.getBooks()
      .subscribe(res => {
        this.books = res;
      });
  }
  getBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(
      `${environment.API_URL}/books`
    );
  }
  getBook(id: number): Observable<Book | null> {
    return this.httpClient.get<Book | null>( `${environment.API_URL}/books/${id}`);
  }

  filterBook(filter: string | null): Book[] {
    if (filter === 'all') {
      return this.books;
    }
    return this.books.filter(b => b.type === filter);
  }
  addBook(book: Book): Observable<{ success: boolean }> {
    return this.httpClient.put<{ success: boolean }>(
      `${environment.API_URL}/books`,
      book,
      {withCredentials: true}
    );
  }
}
