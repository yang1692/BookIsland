import {Component, EventEmitter, Inject, Input, Output, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {NgForm} from '@angular/forms';
import {Address} from '../../shared/modules/address';
import PlaceResult = google.maps.places.PlaceResult;
import {AddressService} from '../../shared/services/address.service';
import {Router} from '@angular/router';
import {AuthService} from '../../shared/services/auth.service';
@Component({
  selector: 'app-address-edit',
  templateUrl: 'address-edit.component.html',
  styleUrls: ['address-edit.component.scss']
})
export class AddressEditComponent {
  @Output() setAddress: EventEmitter<any> = new EventEmitter();
  constructor(
    private as: AddressService,
    private auth: AuthService,
    public dialogRef: MatDialogRef<AddressEditComponent>,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: Address) {}
  async updateAddress(loginForm: NgForm): Promise<void>{
    const a: Address = new Address(
      {
        id: this.data.id,
        receiver_name: loginForm.value.receiverName,
        phone: loginForm.value.phone,
        state: loginForm.value.address.address_components[5].short_name,
        zip: loginForm.value.address.address_components[7].short_name,
        address: loginForm.value.address.formatted_address
      }
    );
    this.as.update(a).subscribe(res => {
      if (res.success) {
        this.as.getAddress()
          .subscribe(res2 => {
            if (res2.success) {
              // @ts-ignore
              this.auth.user?.addresses = res2.addresses;
            }
          });
        this.dialogRef.close();
      }
    });
  }
  invokeEvent(place: object): void {
    this.setAddress.emit(place);
  }

}
