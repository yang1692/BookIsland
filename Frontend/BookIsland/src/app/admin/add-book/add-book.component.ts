import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {BooksService} from '../../shared/services/books.service';
import {Book} from '../../shared/modules/book';
import {environment} from '../../../environments/environment';
import {Location} from '@angular/common';
import {MatSnackBar} from '@angular/material/snack-bar';
import {switchMap} from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {
  types = environment.BOOK_TYPES;
  langs = environment.LANG;
  book = new Book({});
  id = 0;
  constructor(
    private ar: ActivatedRoute,
    private bs: BooksService,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.ar.snapshot.params.id;
    this.ar.paramMap.pipe(switchMap(params => {
      const id = params.get('id');
      this.id = id ? +id : 0;
      return this.bs.getBook(this.id);
    }))
      .subscribe(
        book => {
          this.book = book || new Book({});
        },
        err => console.log(err),
        () => console.log('CompleteDetail!')
      );
  }

  addBook(form: NgForm): void{
    this.bs.addBook(this.book)
      .subscribe(res => {
        if (res.success === true){
          this.bs.getBooks()
            .subscribe(res2 => {
              this.bs.books = res2;
            });
          form.reset();
          if (this.book.id === -1){
            this.snackBar.open('Successfully add the book!', 'Dismiss', {duration: 6000});
          }
          else {
            this.router.navigate(['/book-detail', this.book.id]);
          }
        }
        else{
          console.log(res);
        }
      });
  }
}
