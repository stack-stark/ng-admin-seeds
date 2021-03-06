import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPagesRoutingModule } from './result-pages-routing.module';
import { ServerErrorComponent } from './server-error.component';
import { ForbiddenComponent } from './forbidden.component';
import { NotFoundComponent } from './not-found.component';
import { ErrorFeedbackComponent } from './error-feedback.component';
import { SharedModule } from 'src/app/shared';
import { NzResultModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ServerErrorComponent, ForbiddenComponent, NotFoundComponent, ErrorFeedbackComponent],
  imports: [
    CommonModule,
    ResultPagesRoutingModule,
    SharedModule
  ]
})
export class ResultPagesModule { }
