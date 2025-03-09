import { Component, input, OnInit } from '@angular/core';
import { Book } from '../../../services/book/book.service';

@Component({
  selector: 'app-book-card',
  standalone: true,
  imports: [],
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit {

  book = input.required<Book>();
  ngOnInit() {
  }

}
