import {AfterContentChecked, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {BooksService} from '../shared/services/books.service';
import {Book} from '../shared/modules/book';
import {Cart} from '../shared/modules/cart';
import {CartService} from '../shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit{
  constructor(
    public auth: AuthService,
    public bs: BooksService,
    public cs: CartService
  ) {
  }
  backUp = this.auth.user?.shoppingCart;
  ngOnInit(): void {
  }
  updateCart(): void {
    this.cs.updateCart().subscribe();
  }
  deleteItem(c: Cart): void {
    c.quantity  = 0;
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  test(index: number): void {
    this.cs.subtotal = 0;
    this.auth.user?.shoppingCart.forEach((value: Cart) => {
      this.cs.subtotal += value.checked === 1 ? value.quantity * value.book.sale_price : 0;
    });
  }
  updateSubtotal(index: number): void {
    // @ts-ignore
    const money = this.auth.user?.shoppingCart[index].book.sale_price * this.auth.user?.shoppingCart[index].quantity;
    if (this.auth.user?.shoppingCart[index].checked === 1) {
      this.cs.subtotal += -money;
      // @ts-ignore
      this.auth.user?.shoppingCart[index].checked = 0;
    }
    else {
      this.cs.subtotal += money;
      // @ts-ignore
      this.auth.user?.shoppingCart[index].checked = 1;
    }
    this.cs.subtotal = Number.parseFloat(this.cs.subtotal.toFixed(2));
  }
}
