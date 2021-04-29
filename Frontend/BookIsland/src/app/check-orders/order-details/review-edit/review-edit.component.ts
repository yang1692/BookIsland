import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
import {Address} from '../../../shared/modules/address';
import {OrderDetail} from '../../../shared/modules/orderDetail';
import {OrderDetailService} from '../../../shared/services/order-detail.service';
import {NgForm} from '@angular/forms';
import {Review} from '../../../shared/modules/review';
import {AuthService} from '../../../shared/services/auth.service';

@Component({
  selector: 'app-review-edit',
  templateUrl: './review-edit.component.html',
  styleUrls: ['./review-edit.component.scss']
})
export class ReviewEditComponent implements OnInit {
  rate = 5;
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  constructor(
    public dialogRef: MatDialogRef<ReviewEditComponent>,
    private ods: OrderDetailService,
    private auth: AuthService,
    @Inject(MAT_DIALOG_DATA) public data: OrderDetail
  ) {
  }
  invokeEvent(place: object): void {
    this.setAddress.emit(place);
  }
  ngOnInit(): void {

  }
  childDataHandler(dataFromChild: number): void {
    this.rate = dataFromChild;
  }
  updateReview(reviewForm: NgForm): void {
    const username = this.auth.user?.username.slice(0, 1) + '****' + this.auth.user?.username.slice(5);
    const review = new Review({
      review: reviewForm.value.review,
      book_id: this.data.book.id,
      username: username,
      rate: this.rate
    });
    this.ods.updateReview(review)
      .subscribe(res => {
        if (res.success){
          this.ods.makeReviewed(this.data.id)
            .subscribe(res2 => {
              if (res2.success){
                this.data.reviewed = 1;
                this.dialogRef.close();
              }
            });
        }
      });
  }
}
