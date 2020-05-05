import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { listData } from './mock-data';
import { MockList } from './mock-data.interface';

@Injectable({
  providedIn: 'root'
})
export class TemplateSyntaxService {

  constructor(
    private http: HttpClient
  ) { }

  /**
   * mock数据
   */
  public getMockData(): Array<MockList> {
    return listData;
  }
}
