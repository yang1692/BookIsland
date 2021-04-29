import {Book} from './book';

export class  Review {
  id: number;
  book_id: number;
  username: string;
  review: string;
  rate: number;
  review_date: Date;
  constructor(od: any) {
    this.id = od.id || -1;
    this.book_id = od.book_id || 0;
    this.username = od.username || 'Anonymous user';
    this.review = od.review || 'The buyer did not evaluated in detail and the system default a praise automatically.';
    this.rate = od.rate || 5;
    this.review_date = od.review_date || new Date();
  }
}
