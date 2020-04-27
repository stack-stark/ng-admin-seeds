import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppStoreModule } from 'src/app/store/app-store.module';
import { addBook, BookType, delBook, increment, decrement, reset } from 'src/app/store/actions';
import { getBookList } from 'src/app/store/selectors/book.selector';
import { getCounter } from 'src/app/store/selectors';
@Component({
  selector: 'app-some',
  templateUrl: './some.component.html',
  styleUrls: ['./some.component.less']
})
export class SomeComponent {

  public bookName: string;
  public author: string;
  public price: number;
  bookList = [];
  count: number;

  constructor(private store: Store<AppStoreModule>) {
    this.store.pipe(select('book' as any), select(getBookList)).subscribe(item => {
      console.log(item, '当前的书籍');
      this.bookList = item;
    });
    this.store.pipe(select('count' as any), select(getCounter)).subscribe(item => {
      console.log(item);
      this.count = item;
    });
   }

  public submit(): void {
    if (this.bookName && this.author && this.price) {
      this.store.dispatch(addBook({ book: { bookName: this.bookName, author: this.author, price: this.price, createAt: Date.now() } }));
      this.bookName = '';
      this.author = '';
      this.price = null;
    }
  }

  public delBook(book: BookType): void {
    this.store.dispatch(delBook({ book }));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
