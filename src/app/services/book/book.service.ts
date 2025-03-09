import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Book {
  id: number
  title: string
  author: string
  publication_year: number
  genre: string[]
  price: number
  description: string
  cover_image: string
}

@Injectable({
  providedIn: 'root'
})
export class BookService {

  getAllBooks() {
    return of<Book[]>(books);
  }

}

export const books: Book[] = [
  {
    "id": 2,
    "title": "Wings of fire",
    "author": "George Orwell",
    "publication_year": 1949,
    "genre": ["Dystopian", "Fiction"],
    "price": 950,
    "description": "A dystopian novel exploring themes of totalitarianism and surveillance.",
    "cover_image": "https://fakeimg.pl/667x1000/333333"
  },
  {
    "id": 3,
    "title": "Pride and Prejudice",
    "author": "Jane Austen",
    "publication_year": 1813,
    "genre": ["Romance", "Classic"],
    "price": 850,
    "description": "A romantic story of manners and marriage in early 19th-century England.",
    "cover_image": "https://fakeimg.pl/667x1000/ff99cc"
  },
  {
    "id": 4,
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publication_year": 1925,
    "genre": ["Tragedy", "Fiction"],
    "price": 1200,
    "description": "A critique of the American Dream during the Jazz Age.",
    "cover_image": "https://fakeimg.pl/667x1000/ffd700"
  },
  {
    "id": 5,
    "title": "Moby Dick",
    "author": "Herman Melville",
    "publication_year": 1851,
    "genre": ["Adventure", "Classic"],
    "price": 1100,
    "description": "An epic tale of obsession and revenge against a white whale.",
    "cover_image": "https://fakeimg.pl/667x1000/3366ff"
  },
  {
    "id": 6,
    "title": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "publication_year": 1951,
    "genre": ["Coming-of-age", "Fiction"],
    "price": 880,
    "description": "A story of teenage alienation and rebellion in New York City.",
    "cover_image": "https://fakeimg.pl/667x1000/009933"
  },
  {
    "id": 7,
    "title": "Brave New World",
    "author": "Aldous Huxley",
    "publication_year": 1932,
    "genre": ["Dystopian", "Science Fiction"],
    "price": 990,
    "description": "A futuristic vision of a genetically engineered society.",
    "cover_image": "https://fakeimg.pl/667x1000/cc0000"
  },
  {
    "id": 8,
    "title": "Frankenstein",
    "author": "Mary Shelley",
    "publication_year": 1818,
    "genre": ["Gothic", "Horror"],
    "price": 920,
    "description": "A groundbreaking work about creation and responsibility.",
    "cover_image": "https://fakeimg.pl/667x1000/660099"
  },
  {
    "id": 9,
    "title": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "publication_year": 1937,
    "genre": ["Fantasy", "Adventure"],
    "price": 1300,
    "description": "A whimsical journey to reclaim a dragon-guarded treasure.",
    "cover_image": "https://fakeimg.pl/667x1000/996633"
  },
  {
    "id": 10,
    "title": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "publication_year": 1866,
    "genre": ["Psychological", "Fiction"],
    "price": 1050,
    "description": "A deep dive into morality and guilt after a murder.",
    "cover_image": "https://fakeimg.pl/667x1000/000066"
  },
  {
    "id": 11,
    "title": "Wuthering Heights",
    "author": "Emily Brontë",
    "publication_year": 1847,
    "genre": ["Gothic", "Romance"],
    "price": 890,
    "description": "A turbulent tale of love and revenge on the Yorkshire moors.",
    "cover_image": "https://fakeimg.pl/667x1000/990000"
  }
]