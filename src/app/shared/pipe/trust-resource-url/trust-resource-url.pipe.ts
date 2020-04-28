import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'trustResourceUrl'
})
export class TrustResourceUrlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  /**
   * 可信任资源url处理
   * @param url
   */
  transform(url: string) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

}
