import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCharacterPipe, TextOmittedPipe, TrustHtmlPipe, TrustResourceUrlPipe } from './pipe';
import { SuperTableComponent, ResultComponent, CodeShowComponent } from './components';
import { NzResultModule, NzButtonModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    ResultComponent,
    CodeShowComponent,
    SuperTableComponent,
  ],
  imports: [
    CommonModule,
    NzResultModule,
    NzButtonModule
  ],
  exports: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    ResultComponent,
    SuperTableComponent,
    CodeShowComponent
  ]
})
export class SharedModule { }
