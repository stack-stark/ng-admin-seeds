import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forbidden',
  template: `
    <app-result [status]="'403'" [title]="'403'" [subTitle]="'Sorry, you are not authorized to access this page.'">
    </app-result>
    `
})
export class ForbiddenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
