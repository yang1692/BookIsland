import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CartService} from '../shared/services/cart.service';
import {Cart} from '../shared/modules/cart';
import {Router} from '@angular/router';
import {AddressEditComponent} from '../account/address-edit/address-edit.component';
import {MatDialog} from '@angular/material/dialog';
import {AddressAddComponent} from '../account/address-add/address-add.component';
import {OrderService} from '../shared/services/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  visaUrl = 'https://media-exp1.licdn.com/dms/image/C4D0BAQHW9Vyrl6r5ZA/company-logo_200_200/0/1519856212168?e=2159024400&v=beta&t=hJx0T-S3PY62u60prT4SLjF5fHDWHv6edrfjPJnSgGE';
  constructor(
    public auth: AuthService,
    private fb: FormBuilder,
    public cs: CartService,
    private router: Router,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.firstFormGroup = this.fb.group({
      firstCtrl: [this.auth.user?.addresses.length === 0 ? '' : '0', Validators.required]
    });
    this.secondFormGroup = this.fb.group({
      secondCtrl: ['0000000000000000', Validators.required]
    });
  }

  trackByIndex(index: number, obj: any): any {
    return index;
  }
  placeOrder(): void {
    if (this.auth.user?.addresses[this.firstFormGroup.value.firstCtrl] !== undefined) {
       this.cs.submitOrder(this.auth.user?.addresses[this.firstFormGroup.value.firstCtrl].id)
        .subscribe(res => {
          if (res.success){
            console.log(res);
            this.auth.user?.shoppingCart.forEach(
              (value: Cart) => {
                value.quantity = value.checked ? 0 : value.quantity;
              });
            this.router.navigate(['/checkOrders'])
              .then(() => {
                window.location.reload();
              });
            this.cs.subtotal = 0;
          }
          else{
            this.snackBar.open(res.message, 'Dismiss', {duration:6000});
          }
        });
    }
    else { throw new Error('Invalid Address!'); }
  }
  openEditDialog(index: number): void {
    const dialogRef = this.dialog.open(AddressEditComponent, {
      width: '800px',
      data: this.auth.user?.addresses[index]
    });
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }
  openAddDialog(): void {
    const dialogRef = this.dialog.open(AddressAddComponent, {
      width: '800px'
    });
    dialogRef.afterClosed().subscribe(result => {
      location.reload();
    });
  }
}
