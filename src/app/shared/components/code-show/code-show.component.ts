import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stark-code-show',
  templateUrl: './code-show.component.html',
  styleUrls: ['./code-show.component.less']
})
export class CodeShowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  code = `import { HighlightModule } from 'ngx-highlightjs';
 
  @NgModule({
    imports: [
      HighlightModule
    ]
  })
  export class AppModule { }`
}
