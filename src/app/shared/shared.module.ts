import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCharacterPipe, TextOmittedPipe, TrustHtmlPipe, TrustResourceUrlPipe } from './pipe';
import { SuperTableComponent, ResultComponent, CodeShowComponent } from './components';
import { NzResultModule, NzButtonModule } from 'ng-zorro-antd';
import { ExplainTipComponent } from './components/explain-tip/explain-tip.component';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';
import {
  G2plotBarDirective,
  G2plotLineDirective,
  G2plotAreaDirective,
  G2plotColumnDirective,
  G2plotPieDirective,
  G2plotGaugeDirective
} from './directives';
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
    G2plotBarDirective,
    G2plotLineDirective,
    G2plotAreaDirective,
    G2plotColumnDirective,
    G2plotPieDirective,
    G2plotGaugeDirective,
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
    CodeShowComponent,
    G2plotBarDirective,
    G2plotLineDirective,
    G2plotAreaDirective,
    G2plotColumnDirective,
    G2plotPieDirective,
    G2plotGaugeDirective,
  ]
})
export class SharedModule { }
