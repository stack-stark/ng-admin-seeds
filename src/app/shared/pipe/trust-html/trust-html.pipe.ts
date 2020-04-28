import { Pipe, PipeTransform } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';

@Pipe({
  name: 'trust-html'
})
export class TrustHtmlPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer) {
  }

  /**
   * 可信任html处理
   * @param style
   */
  transform(html: string) {
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }

}
