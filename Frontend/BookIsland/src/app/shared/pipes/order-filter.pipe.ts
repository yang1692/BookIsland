import { Pipe, PipeTransform } from '@angular/core';
import {Order} from '../modules/order';

@Pipe({
  name: 'orderFilter'
})
export class OrderFilterPipe implements PipeTransform {

  transform(value: Order[], filter: string): Order[] {
    return value.filter( value1 =>  value1.id.toString().includes(filter));
  }

}
