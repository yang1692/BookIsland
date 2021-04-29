import { Pipe, PipeTransform } from '@angular/core';
import {Book} from '../modules/book';
import {environment} from '../../../environments/environment';

@Pipe({
  name: 'bookFilter'
})
export class BookFilterPipe implements PipeTransform {

  transform(value: Book[], filter: string): Book[] {
    try {
      const book = JSON.parse(filter);
      return value.filter(b =>
        b.type.toLowerCase().includes(book.type.toLowerCase()) && b.isbn.toLowerCase().includes(book.isbn.toLowerCase()) &&
        b.language.toLowerCase().includes(book.language.toLowerCase()) && b.name.toLowerCase().includes(book.name.toLowerCase()) &&
        b.author.toLowerCase().includes(book.author.toLowerCase()) && b.publisher.toLowerCase().includes(book.publisher.toLowerCase())
      );
    }
    catch (e){
      filter = filter.toLowerCase();
      if (filter === 'all') {
        return value;
      }
      if (environment.BOOK_TYPES.some( t => t.name === filter)) {
        return value.filter(b => b.type === filter);
      }
      else{
        return value.filter(b =>
          b.type.toLowerCase().includes(filter) || b.isbn.toLowerCase().includes(filter) ||
          b.language.toLowerCase().includes(filter) || b.name.toLowerCase().includes(filter) ||
          b.author.toLowerCase().includes(filter) || b.publisher.toLowerCase().includes(filter)
        );
      }
    }
  }

}
