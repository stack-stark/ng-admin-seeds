import { Component, OnInit } from '@angular/core';
import { packageInfo } from './package-info';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.less']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  packageInfo = packageInfo;

  ngOnInit() {
  }

}
