import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCharacterPipe, TextOmittedPipe, TrustHtmlPipe, TrustResourceUrlPipe } from './pipe';
import { STableComponent, ResultComponent } from './components';
import { NzResultModule, NzButtonModule } from 'ng-zorro-antd';


@NgModule({
  declarations: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    STableComponent,
    ResultComponent,
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
    STableComponent,
    ResultComponent
  ]
})
export class SharedModule { }
