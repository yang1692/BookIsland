import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../../shared/services/author.service';
import {Author} from '../../shared/modules/author';
import {NgForm} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {switchMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-manage-author',
  templateUrl: './manage-author.component.html',
  styleUrls: ['./manage-author.component.scss']
})
export class ManageAuthorComponent implements OnInit {
  author = new Author({});
  name: string | null = '';
  constructor(
    private aus: AuthorService,
    private router: Router,
    private ar: ActivatedRoute
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
          this.author = author === null ? new Author(
            {name: this.name === 'new' ?  '' : this.name}) : author;
        },
        err => console.log(err),
        () => console.log('CompleteDetail!')
      );
  }
  manageAuthor(manageAuthorForm: NgForm): void {
    this.aus.addOrUpdateAuthor(this.author)
      .subscribe(res => {
        if (res.success){
          this.router.navigate(['/author', this.author.name]);
        }
        else {
          console.log(res);
        }
      });
  }
}
