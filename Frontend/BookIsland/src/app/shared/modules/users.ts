import {Address} from './address';
import {Cart} from './cart';
import {Order} from './order';

export interface  User {
  id: number;
  username: string;
  password: string;
  role: string;
  phone: number;
  addresses: Address[];
  shoppingCart: Cart[];
  orders: Order[];
  rentOrders: [];
}
