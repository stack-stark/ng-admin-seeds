import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
  <app-result [status]="'404'" [title]="'404'" [subTitle]="'Sorry, the page you visited does not exist.'">
  </app-result>
`
})
export class NotFoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
