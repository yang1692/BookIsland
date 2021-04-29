import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomStyleModule} from './shared/modules/custom-style/custom-style.module';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { AccountComponent } from './account/account.component';
import { BooksComponent } from './books/books.component';
import { BookOverviewComponent } from './books/book-overview/book-overview.component';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckOrdersComponent } from './check-orders/check-orders.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { HomeComponent } from './home/home.component';
import { SecondHeaderComponent } from './second-header/second-header.component';
import { BookFilterPipe } from './shared/pipes/book-filter.pipe';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { AddressEditComponent } from './account/address-edit/address-edit.component';
import {MatGoogleMapsAutocompleteModule} from '@angular-material-extensions/google-maps-autocomplete';
import {AgmCoreModule} from '@agm/core';
import {MatStepperModule} from '@angular/material/stepper';
import { AddressAddComponent } from './account/address-add/address-add.component';
import { BookSorterPipe } from './shared/pipes/book-sorter.pipe';
import { OrderDetailsComponent } from './check-orders/order-details/order-details.component';
import { ReviewEditComponent } from './check-orders/order-details/review-edit/review-edit.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { AdvancedSearchComponent } from './advanced-search/advanced-search.component';
import { AddBookComponent } from './admin/add-book/add-book.component';
import { AuthorComponent } from './author/author.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    AccountComponent,
    BooksComponent,
    BookOverviewComponent,
    BookDetailComponent,
    CartComponent,
    CheckoutComponent,
    CheckOrdersComponent,
    HomeComponent,
    SecondHeaderComponent,
    BookFilterPipe,
    AddressEditComponent,
    AddressAddComponent,
    BookSorterPipe,
    OrderDetailsComponent,
    ReviewEditComponent,
    StarRatingComponent,
    AdvancedSearchComponent,
    AddBookComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    // before Angular 4.3, HttpClientModule is called HttpModule, service is called HttpService
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomStyleModule,
    MatStepperModule,
    MatPaginatorModule,
    MatCheckboxModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDgLhUmJszMbq2MfzYDLrZpw7VKhZvw7zc',
      libraries: ['places']
    }),
    MatGoogleMapsAutocompleteModule
  ],
  providers: [],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
