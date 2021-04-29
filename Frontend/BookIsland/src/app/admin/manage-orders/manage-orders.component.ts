import { Component, OnInit } from '@angular/core';
import {OrderService} from '../../shared/services/order.service';
import {Order} from '../../shared/modules/order';
import {environment} from '../../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.scss']
})
export class ManageOrdersComponent implements OnInit {
  status = environment.ORDER_STATUS;
  filter = '';
  constructor(
    private os: OrderService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }
  orders: Order[] = [];
  ngOnInit(): void {
    this.os.getUndeliveredOrders()
      .subscribe(res => {
        this.orders = res;
      });
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  deliveredOrder(id: number): void {
    this.os.deliveredOrder(id)
      .subscribe(res => {
        if (res.success){
          // @ts-ignore
          this.orders.find(value => value.id === id).status = 2;
          this.snackBar.open('Success.', 'Dismiss', {duration: 6000});
        }
        else{
          this.snackBar.open('Something went wrong.', 'Dismiss');
        }
      });
  }
}
