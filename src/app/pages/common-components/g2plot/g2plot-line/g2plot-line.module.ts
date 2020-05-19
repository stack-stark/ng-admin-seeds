import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotLineComponent } from './g2plot-line.component';
import { G2plotLineRoutingModule } from './g2plot-line-routing.module';

import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [G2plotLineComponent],
  imports: [
    CommonModule,
    G2plotLineRoutingModule,
    SharedModule
  ]
})
export class G2plotLineModule { }
