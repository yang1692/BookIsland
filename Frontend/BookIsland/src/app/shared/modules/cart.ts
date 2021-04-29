import {Book} from './book';

export class Cart{
  id: number;
  // tslint:disable-next-line:variable-name
  user_id: number;
  book: Book;
  quantity: number;
  checked: number;
  constructor(cart: any) {
    {
      this.id = cart.id || -1;
      this.user_id = cart.user_id || -1;
      this.quantity = cart.quantity || 0;
      this.book = cart.book || '';
      this.checked = cart.checked || 0;
    }
  }
}
