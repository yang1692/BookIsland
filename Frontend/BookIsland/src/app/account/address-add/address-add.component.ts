import { Component, OnInit } from '@angular/core';
import {AddressService} from '../../shared/services/address.service';
import {NgForm} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {Address} from '../../shared/modules/address';

@Component({
  selector: 'app-address-add',
  templateUrl: './address-add.component.html',
  styleUrls: ['./address-add.component.scss']
})
export class AddressAddComponent implements OnInit {

  constructor(
    private as: AddressService,
    public dialogRef: MatDialogRef<AddressAddComponent>
  ) { }

  ngOnInit(): void {
  }
  addAddress(addForm: NgForm): void {
    const a: Address = new Address(
      {
        receiver_name: addForm.value.receiverName,
        phone: addForm.value.phone,
        state: addForm.value.address.address_components[5].short_name,
        zip: addForm.value.address.address_components[7].short_name,
        address: addForm.value.address.formatted_address
      }
    );
    this.as.addAddress(a).subscribe(res => {
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
}
