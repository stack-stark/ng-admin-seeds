import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'stark-explain-tip',
  templateUrl: './explain-tip.component.html',
  styleUrls: ['./explain-tip.component.less']
})
export class ExplainTipComponent implements OnInit {
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
