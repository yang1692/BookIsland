import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AccountComponent} from './account/account.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {AdminGuard} from './shared/guards/admin.guard';
import {BooksComponent} from './books/books.component';
import {BookDetailComponent} from './books/book-detail/book-detail.component';
import {CartComponent} from './cart/cart.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {CheckOrdersComponent} from './check-orders/check-orders.component';
import {HomeComponent} from './home/home.component';
import {CartGuard} from './shared/guards/cart.guard';
import {OrderDetailsComponent} from './check-orders/order-details/order-details.component';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';
import {AuthorComponent} from './author/author.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register', // match anything
    component: RegisterComponent
  },
  {
    path: 'cart', // match anything
    component: CartComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'checkOrders', // match anything
    component: CheckOrdersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'order-detail/:id',
    component: OrderDetailsComponent
  },
  {
    path: 'checkout', // match anything
    component: CheckoutComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    // starting from angular 8:
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard],
    canActivate: [AdminGuard]
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'books/:filter',
    component: BooksComponent
  },
  {
    path: 'advanced-search',
    component: AdvancedSearchComponent
  },
  {
    path: 'author/:name',
    component: AuthorComponent
  },
  {
    path: 'book-detail/:id',
    component: BookDetailComponent
  },
  {
    path: '**', // match anything
    redirectTo: '/home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
