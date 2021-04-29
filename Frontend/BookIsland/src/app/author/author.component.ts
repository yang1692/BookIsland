import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Book} from '../shared/modules/book';
import {Author} from '../shared/modules/author';
import {AuthorService} from '../shared/services/author.service';
import {BooksService} from '../shared/services/books.service';
import {PageEvent} from '@angular/material/paginator';
import {AuthService} from '../shared/services/auth.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
  filter = '';
  lowValue = 0;
  highValue = 4;
  name: string | null = '';
  author: Author = new Author({});
  constructor(
    private ar: ActivatedRoute,
    private aus: AuthorService,
    public bs: BooksService,
    public auth: AuthService
  ) { }

  ngOnInit(): void {
    this.name = this.ar.snapshot.params.name;
    this.ar.paramMap.pipe(switchMap(params => {
      const name = params.get('name');
      this.name = name;
      return this.aus.getAuthor(this.name);
    }))
      .subscribe(
        author => {
          if (author === null){
            this.author = new Author({name: this.name});
          }
          else {
            this.author = author;
          }
          this.filter = JSON.stringify(new Book({author: this.name}));
        },
        err => console.log(err),
        () => console.log('CompleteDetail!')
      );
  }
  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
