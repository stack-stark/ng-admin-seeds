import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.less']
})
export class TodoListComponent implements OnInit {

  public list: Array<Object> = [];

  constructor(private todoService: TodoListService) { }

  ngOnInit(): void {
    this.list = this.todoService.mockData();
  }

  /**
   * 控制台打印数据
   * @param data
   */
  public printData(data: object) {
    console.log(data);
  }

}
