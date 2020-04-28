import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultPagesRoutingModule } from './result-pages-routing.module';
import { ResultErrorComponent } from './result-error.component';
import { NzResultModule } from 'ng-zorro-antd';
import { ForbiddenComponent } from './forbidden.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  declarations: [ResultErrorComponent, ForbiddenComponent, NotFoundComponent],
  imports: [
    CommonModule,
    ResultPagesRoutingModule,
    NzResultModule
  ]
})
export class ResultPagesModule { }
