import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../modules/book';

@Pipe({
  name: 'bookSorter'
})
export class BookSorterPipe implements PipeTransform {

  transform(value: Book[]): Book[] {
    return value.sort((a, b) => b.sales - a.sales);
  }

}
