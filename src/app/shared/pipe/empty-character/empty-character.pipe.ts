import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emptyCharacter'
})
export class EmptyCharacterPipe implements PipeTransform {
  /**
   * 内容为null/空处理
   * @param value
   */
  transform(value: any): any {
    const val = value;
    if (val == null || val.length === 0 || val === 'null') {
      return '-';
    } else {
      const reVal = val.toString().replace(/^\s*|\s*$/g, '');
      if (reVal.length === 0) {
        return '-';
      } else {
        return value;
      }
    }
  }

}
