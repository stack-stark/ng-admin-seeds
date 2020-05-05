import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Bar } from '@antv/g2plot';

@Component({
  selector: 'app-g2plot',
  templateUrl: './g2plot.component.html',
  styleUrls: ['./g2plot.component.less']
})
export class G2plotComponent implements OnInit {

 data = [
    { year: '1951 年', sales: 38 },
    { year: '1952 年', sales: 52 },
    { year: '1956 年', sales: 61 },
    { year: '1957 年', sales: 145 },
    { year: '1958 年', sales: 48 },
  ];

  options =  {
    data: this.data,
    xField: 'sales',
    yField: 'year',
    colorField: 'year',
    // width: 200,
    // height: 200
  };


  constructor() {
  
  }

  ngOnInit(): void {
  }
}
