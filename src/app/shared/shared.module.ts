import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCharacterPipe, TextOmittedPipe, TrustHtmlPipe, TrustResourceUrlPipe } from './pipe';
import { SuperTableComponent, ResultComponent, CodeShowComponent } from './components';
import { NzResultModule, NzButtonModule } from 'ng-zorro-antd';
import { ExplainTipComponent } from './components/explain-tip/explain-tip.component';
import { HighlightModule, HIGHLIGHT_OPTIONS  } from 'ngx-highlightjs';
export function getHighlightLanguages() {
  return {
    typescript: () => import('highlight.js/lib/languages/typescript'),
    css: () => import('highlight.js/lib/languages/css'),
    xml: () => import('highlight.js/lib/languages/xml'),
  };
}

@NgModule({
  declarations: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    ResultComponent,
    CodeShowComponent,
    SuperTableComponent,
    ExplainTipComponent,
  ],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        languages: getHighlightLanguages()
      }
    }
  ],
  exports: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    ResultComponent,
    SuperTableComponent,
    CodeShowComponent
  ],
 
})
export class SharedModule { }
