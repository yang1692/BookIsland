import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {CartService} from './shared/services/cart.service';
import {NavigationStart, Router} from '@angular/router';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy, OnInit{
  title = 'BookIsland';
  invalidUrls = ['/checkout', '/register', '/login', '/admin', '/cart', '/checkOrders', '/account', '/advanced-search'];
  re = new RegExp('(/book-detail/|/order-detail/|/admin/)([0-9]|[a-z]|(A-Z))*|(/author/\w*)');
  types = environment.BOOK_TYPES;
  constructor(private cs: CartService,
              public router: Router) {
    window.addEventListener('beforeunload', event => {
      this.cs.updateCart().subscribe();
    });
  }
  async ngOnDestroy(): Promise<void> {
    await this.cs.updateCart().subscribe();
  }

  ngOnInit(): void {
  }
}
