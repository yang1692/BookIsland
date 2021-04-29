import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {environment} from '../../environments/environment';
import {OrderService} from '../shared/services/order.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-check-orders',
  templateUrl: './check-orders.component.html',
  styleUrls: ['./check-orders.component.scss']
})
export class CheckOrdersComponent implements OnInit {
  status = environment.ORDER_STATUS;
  constructor(
    public auth: AuthService,
    private os: OrderService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
  }
  cancelOrder(id: number): void {
    if (confirm('Are you sure to cancel this order?')){
      this.os.cancelOrder(id)
        .subscribe(res => {
          if (res.success){
            location.reload();
          }
          else{
            this.snackBar.open('Something went wrong.', 'Dismiss');
          }
        });
    }
  }
}
