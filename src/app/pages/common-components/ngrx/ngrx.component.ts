import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppStoreModule } from 'src/app/store/app-store.module';
import { addBook, BookType, delBook, increment, decrement, reset } from 'src/app/store/actions';
import { getBookList } from 'src/app/store/selectors/book.selector';
import { getCounter } from 'src/app/store/selectors';
@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.less']
})
export class NgrxComponent implements OnInit {

  public bookName: string;
  public author: string;
  public price: number;
  bookList = [];
  count: number;

  constructor(private store: Store<AppStoreModule>) {
    this.store.pipe(select('book' as any), select(getBookList)).subscribe(item => {
      this.bookList = item;
    });
    this.store.pipe(select('count' as any), select(getCounter)).subscribe(item => {
      console.log(item);
      this.count = item;
    });
  }

  ngOnInit() {

  }

  /**
   * commit
   */
  submit(): void {
    if (this.bookName && this.author && this.price) {
      this.store.dispatch(addBook({ book: { bookName: this.bookName, author: this.author, price: this.price, createAt: Date.now() } }));
      this.bookName = '';
      this.author = '';
      this.price = null;
    }
  }

  /**
   * 删除
   * @param book 
   */
  public delBook(book: BookType): void {
    this.store.dispatch(delBook({ book }));
  }

  /**
   * 加
   */
  increment() {
    this.store.dispatch(increment());
  }

  /**
   * 减
   */
  decrement() {
    this.store.dispatch(decrement());
  }

  /**
   * 重置
   */
  reset() {
    this.store.dispatch(reset());
  }
}
