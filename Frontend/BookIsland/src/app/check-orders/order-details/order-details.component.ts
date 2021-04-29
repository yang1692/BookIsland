import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../shared/modules/order';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';
import {CartService} from '../../shared/services/cart.service';
import {AuthService} from '../../shared/services/auth.service';
import {OrderService} from '../../shared/services/order.service';
import {MatDialog} from '@angular/material/dialog';
import {ReviewEditComponent} from './review-edit/review-edit.component';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  id = 0;
  order: Order = new Order({});
  constructor(
    private ar: ActivatedRoute,
    public os: OrderService,
    private router: Router,
    private cs: CartService,
    private auth: AuthService,
    public dialog: MatDialog
  ) {
    this.id = +this.ar.snapshot.params.id;
    this.ar.paramMap.pipe(switchMap(params => {
      const id = params.get('id');
      this.id = id ? +id : 0;
      return this.os.getOrder(this.id);
    }))
      .subscribe(
        order => {
          this.order = order || new Order({});
          this.order.purchases.sort((a, b) => a.reviewed - b.reviewed);
          },
        err => console.log(err),
        () => console.log('CompleteDetail!')
      );
  }
  trackByIndex(index: number, obj: any): any {
    return index;
  }
  ngOnInit(): void {
  }
  openEditReviewDialog(index: number): void {

    const dialogRef = this.dialog.open(ReviewEditComponent, {
      width: '800px',
      data: this.order.purchases[index]
    });
    dialogRef.afterClosed().subscribe(() => {
      location.reload();
    });
  }
}
