import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-advanced-search',
  templateUrl: './advanced-search.component.html',
  styleUrls: ['./advanced-search.component.scss']
})
export class AdvancedSearchComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  advancedSearch(form: NgForm): void{
    const book = {
      name: form.value.name,
      author: form.value.author,
      isbn: form.value.isbn,
      language: form.value.language,
      publisher: form.value.publisher,
      type: form.value.type
    };
    this.router.navigate(['/books', JSON.stringify(book)]);
  }
}
