import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import { NzDividerModule, NzTableModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { HighlightModule, HIGHLIGHT_OPTIONS  } from 'ngx-highlightjs';
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}
@NgModule({
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    NzDividerModule,
    NzTableModule,
    HighlightModule
  ],
  declarations: [WelcomeComponent],
  exports: [WelcomeComponent],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
})
export class WelcomeModule { }
