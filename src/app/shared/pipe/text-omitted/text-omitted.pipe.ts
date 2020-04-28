import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textOmitted'
})
export class TextOmittedPipe implements PipeTransform {
  /**
   * 字符/文本省略
   * @param value 文本值
   * @param length 大于这个程度就省略
   */
  transform(value: string, length: number): any {
    if (value && value.length > length) {
      return value.substring(0, length) + '...';
    } else {
      return value;
    }
  }

}
