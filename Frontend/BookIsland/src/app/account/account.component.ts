import { Component, OnInit } from '@angular/core';
import {AuthService} from '../shared/services/auth.service';
import {AddressEditComponent} from './address-edit/address-edit.component';
import {AddressAddComponent} from './address-add/address-add.component';
import {MatDialog} from '@angular/material/dialog';
import {AddressService} from '../shared/services/address.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  constructor(
    public auth: AuthService,
    public dialog: MatDialog,
    private as: AddressService
  ) { }

  ngOnInit(): void {
  }
  trackByIndex(index: number, obj: any): any {
    return index;
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
  deleteAddress(id: number): void {
    this.as.deleteAddress(id)
      .subscribe(res => {
        if (res.success){
          location.reload();
        }
      });
  }
}
