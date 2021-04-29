import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../shared/services/auth.service';
import {Location} from '@angular/common';
import {CartService} from '../shared/services/cart.service';
import {MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private location: Location,
    private cs: CartService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }
  submit(loginForm: NgForm): void{

    this.auth.login(loginForm.value)
      .subscribe(res => {
        if (res.success){
          this.auth.user = res.user;
          this.cs.subtotal = 0;
          this.auth.user?.shoppingCart.forEach(value => {
            this.cs.subtotal += value.checked === 1 ? value.quantity * value.book.sale_price : 0;
          });
          this.location.back();
        }
        else{
          this.snackBar.open('Invalid Username or Password!', 'Dismiss', {
            duration: 2000,
          });
        }
      });
  }
}
