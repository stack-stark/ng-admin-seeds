import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private data = [
    { id: 'a002', name: 'jack', age: 20, create_time: 1553245902 },
    { id: 'a003', name: 'jack2', age: 21, create_time: 1553245902 },
    { id: 'a005', name: 'jack3', age: 22, create_time: 1553245902 },
    { id: 'a006', name: 'jack4', age: 23, create_time: 1553245902 },
    { id: 'a007', name: 'jack5', age: 24, create_time: 1553245902 }
  ];
  constructor(
    private http: HttpClient
  ) { }

  /**
   * mock数据
   */
  public mockData() {
    return this.data;
  }

}
