import {Book} from './book';

export class  OrderDetail {
  id: number;
  book: Book;
  quantity: number;
  reviewed: number;
  constructor(od: any) {
    this.id = od.id || 0;
    this.book = od.book || new Book({});
    this.quantity = od.quantity || 0;
    this.reviewed = od.reviewed || 0;
  }
}
