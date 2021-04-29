import {OrderDetail} from './orderDetail';

export class  Order {
  id: number;
  status: number;
  order_date: Date;
  name: string;
  phone: string;
  zip: string;
  state: string;
  address: string;
  subtotal: number;
  purchases: OrderDetail[];
  constructor(order: any) {
    this.id = order.id || -1;
    this.status = order.status || -1;
    this.order_date = order.order_date || new Date();
    this.name = order.name || '';
    this.phone = order.phone || '';
    this.zip = order.zip || '';
    this.state = order.state || '';
    this.address = order.address || '';
    this.subtotal = order.subtotal || -1;
    this.purchases = order.purchases || [];
  }
}
