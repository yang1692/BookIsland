import {Component, Input, OnInit} from '@angular/core';
import {Book} from '../../shared/modules/book';

@Component({
  selector: 'app-book-overview',
  templateUrl: './book-overview.component.html',
  styleUrls: ['./book-overview.component.scss']
})
export class BookOverviewComponent implements OnInit {
  @Input()
  book: Book | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
