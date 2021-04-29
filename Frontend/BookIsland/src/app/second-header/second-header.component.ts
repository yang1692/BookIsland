import { Component, OnInit } from '@angular/core';
import {BooksService} from '../shared/services/books.service';

@Component({
  selector: 'app-second-header',
  templateUrl: './second-header.component.html',
  styleUrls: ['./second-header.component.scss']
})
export class SecondHeaderComponent implements OnInit {
  filter = '';
  constructor(
    public bs: BooksService
  ) { }

  ngOnInit(): void {
  }

}
