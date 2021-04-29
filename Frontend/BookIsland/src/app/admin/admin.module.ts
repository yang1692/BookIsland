import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageAuthorComponent } from './manage-author/manage-author.component';
import {CustomStyleModule} from '../shared/modules/custom-style/custom-style.module';
import {AddBookComponent} from './add-book/add-book.component';
import {FormsModule} from '@angular/forms';
import { ManageOrdersComponent } from './manage-orders/manage-orders.component';
import {AuthorComponent} from '../author/author.component';
import {OrderFilterPipe} from '../shared/pipes/order-filter.pipe';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: 'manageBook/:id',
        component: AddBookComponent
      },
      {
        path: 'manageAuthor/:name',
        component: ManageAuthorComponent
      },
      {
        path: 'manageOrders',
        component: ManageOrdersComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    AdminComponent,
    ManageAuthorComponent,
    ManageOrdersComponent,
    OrderFilterPipe],
  imports: [
    CommonModule,
    CustomStyleModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class AdminModule { }
