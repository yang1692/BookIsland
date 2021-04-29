import { Component, OnInit } from '@angular/core';
import {BooksService} from '../shared/services/books.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  lowValue = 0;
  highValue = 8;
  constructor(
    public bs: BooksService
  ) { }
  ngOnInit(): void {
  }
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    console.log(this.bs.books.length);
    return event;
  }

}
