import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stark-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.less']
})
export class ResultComponent implements OnInit {

  constructor() { }

  @Input() subTitle: string;
  @Input() title: string;
  @Input() nuxtLink: string;
  @Input() nuxtTitle = '返回首页';
  @Input() status: string;

  ngOnInit(): void {
  }

}
