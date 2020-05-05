import { Component, OnInit } from '@angular/core';
import { TemplateSyntaxService } from './template-syntax.service';
import { MockList } from './mock-data.interface';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.less'],
  providers: [NzMessageService]
})
export class TemplateSyntaxComponent implements OnInit {

  public list: Array<MockList> = [];

  constructor(
    private tempService: TemplateSyntaxService,
    private message: NzMessageService
  ) { }

  ngOnInit(): void {
    this.list = this.tempService.getMockData();
  }

  /**
   * 触发显示事件
   * @param data
   */
  public printData(data: MockList) {
    this.message.info(`触发了显示事件,触发id为:${data.id}`);
  }

  /**
   * 删除
   * @param item
   */
  public deleteData(item: MockList) {
    this.list = this.list.filter((it) => it.id !== item.id);
  }
}
