import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateSyntaxComponent } from './template-syntax.component';
import { TemplateSyntaxRoutingModule } from './template-syntax-routing.module';
import { NzListModule, NzPopconfirmModule, NzDividerModule, NzAlertModule } from 'ng-zorro-antd';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [TemplateSyntaxComponent],
  imports: [
    CommonModule,
    TemplateSyntaxRoutingModule,
    NzListModule,
    NzPopconfirmModule,
    NzDividerModule,
    NzAlertModule,
    SharedModule
  ]
})
export class TemplateSyntaxModule { }
