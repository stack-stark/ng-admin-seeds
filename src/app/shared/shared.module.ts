import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyCharacterPipe, TextOmittedPipe, TrustHtmlPipe, TrustResourceUrlPipe } from './pipe';
import { STableComponent } from './components';


@NgModule({
  declarations: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    STableComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    EmptyCharacterPipe,
    TextOmittedPipe,
    TrustHtmlPipe,
    TrustResourceUrlPipe,
    STableComponent
  ]
})
export class SharedModule { }
