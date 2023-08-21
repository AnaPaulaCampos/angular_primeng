import { Component, OnInit } from '@angular/core';
import { LivrosService, Book } from './book.service';

@Component({
  selector: 'app-book-data',
  templateUrl: './book-data.component.html',
  styleUrls: ['./book-data.component.css']
})
export class LivrosComponent implements OnInit {

  books: Book[];

  constructor(private bookService: LivrosService) { }

  ngOnInit() {
    this.bookService.getLivros().
      then(books => this.books = books);
  }

  onRowEditInit(book: Book) {
    console.log('Row edit initialized');
  }

  onRowEditSave(book: Book) {
    console.log('Row edit saved');
  }

  onRowEditCancel(book: Book, index: number) {
    console.log('Row edit cancelled');
  }

}
