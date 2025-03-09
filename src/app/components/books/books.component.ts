import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { Book, BookService } from '../../services/book/book.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { HttpErrorResponse } from '@angular/common/http';
import { BookCardComponent } from "./book-card/book-card.component";
import { BooksFilterComponent } from "./books-filter/books-filter.component";
import { min } from 'rxjs';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [BookCardComponent, BooksFilterComponent],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  private bookService = inject(BookService);
  private destroyRef = inject(DestroyRef);
  originalBooks: Book[] = [];
  filteredBooks: Book[] = [];
  ngOnInit() {
    this.bookService.getAllBooks()
      .pipe(
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe({
        next: (res) => {
          this.originalBooks = res;
          this.filteredBooks = this.originalBooks;
        },
        error: (error: HttpErrorResponse)  => {

        }
      })
  }

  applyFilter(filterObj: {min: number, max: number}) {
    this.filteredBooks = this.filteredBooks.filter((book) => {
      return book.price >= filterObj.min && book.price <= filterObj.max;
    })
  }

  reset() {
    this.filteredBooks = this.originalBooks;
  }

}
