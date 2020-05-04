import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-error',
  template: `
    <stark-result [status]="'500'" [title]="'500'" [subTitle]="'Sorry, there is an error on server.'">
    </stark-result>
  `
})
export class ServerErrorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
