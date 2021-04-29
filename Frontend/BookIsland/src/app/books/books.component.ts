import {AfterViewChecked, Component, Input, OnChanges, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, PageEvent} from '@angular/material/paginator';
import {ActivatedRoute} from '@angular/router';
import {BooksService} from '../shared/services/books.service';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  lowValue = 0;
  highValue = 8;
  @Input()
  filter = 'all';
  @ViewChild('paginator')
  paginator!: MatPaginator;
  constructor(
    public bs: BooksService,
    private ar: ActivatedRoute
  ) { }
  ngOnInit(): void {
    this.ar.paramMap.pipe(switchMap(params => {
      this.filter = params.get('filter') || 'all';
      return new Observable((observer) => {
        observer.next(this.filter);
        // When the consumer unsubscribes, clean up data ready for next subscription.
        return {
          unsubscribe(): void {}
        };
      });
    }))
      .subscribe(
      params => {
        this.paginator && this.paginator.firstPage();
      },
      err => console.log(err),
      );
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
