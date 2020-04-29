import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPagesRoutingModule } from './result-pages-routing.module';
import { ServerErrorComponent } from './server-error.component';
import { NzResultModule, NzButtonModule } from 'ng-zorro-antd';
import { ForbiddenComponent } from './forbidden.component';
import { NotFoundComponent } from './not-found.component';
import { ErrorFeedbackComponent } from './error-feedback.component';

@NgModule({
  declarations: [ServerErrorComponent, ForbiddenComponent, NotFoundComponent, ErrorFeedbackComponent],
  imports: [
    CommonModule,
    ResultPagesRoutingModule,
    NzResultModule,
    NzButtonModule
  ]
})
export class ResultPagesModule { }
