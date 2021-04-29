import { Component, OnInit } from '@angular/core';
import {Book} from '../../shared/modules/book';
import {ActivatedRoute, Router} from '@angular/router';
import {BooksService} from '../../shared/services/books.service';
import {CartService} from '../../shared/services/cart.service';
import {AuthService} from '../../shared/services/auth.service';
import {Cart} from '../../shared/modules/cart';
import {switchMap} from 'rxjs/operators';
import {Review} from '../../shared/modules/review';
import {OrderDetailService} from '../../shared/services/order-detail.service';
import {PageEvent} from '@angular/material/paginator';


@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss']
})
export class BookDetailComponent implements OnInit {
  book = new Book({});
  id = 0;
  option = 0;
  quantity = 1;
  day = 14;
  reviews: Review[] = [];
  rate = 0;
  lowValue = 0;
  highValue = 8;
  constructor(
    private ar: ActivatedRoute,
    public bs: BooksService,
    private router: Router,
    private cs: CartService,
    public auth: AuthService,
    private ods: OrderDetailService
  ) { }
  decreaseQty(): void {
    this.quantity > 0 && this.quantity--;
  }
  increaseQty(): void {
    this.quantity < this.book!.sales_in_stock && this.quantity++;

  }
  checkQty(): void {
    this.quantity = this.quantity < this.book!.sales_in_stock ? this.quantity : this.book!.sales_in_stock;
  }
  addToCart(): void {
    const existedItem = this.auth.user?.shoppingCart.find((b: Cart) => b.book.id === this.book?.id);
    if (existedItem){
      existedItem.quantity += this.quantity;
      this.router.navigate(['/cart']);
      return;
    }
    const newCart = new Cart({
      user_id: this.auth.user?.id,
      book: this.book,
      quantity: this.quantity
    });
    this.auth.user?.shoppingCart.push(newCart);
    this.router.navigate(['/cart']);
  }
  ngOnInit(): void {
    this.id = +this.ar.snapshot.params.id;
    this.ar.paramMap.pipe(switchMap(params => {
        const id = params.get('id');
        this.id = id ? +id : 0;
        return this.bs.getBook(this.id);
      }))
      .subscribe(
        book => {
          this.book = book || new Book({});
          this.quantity = this.book.sales_in_stock > 0 ? 1 : 0;
          this.ods.getReviews(book?.id || -1)
            .subscribe(res => {
              this.reviews = res.sort((a, b) => new Date(a.review_date).getTime() - new Date(b.review_date).getTime());
              this.rate = 0;
              res.forEach( r => {
                this.rate += r.rate;
              });
              this.rate /= res.length;
            });
        },
        err => console.log(err),
        () => console.log('CompleteDetail!')
      );
  }
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
