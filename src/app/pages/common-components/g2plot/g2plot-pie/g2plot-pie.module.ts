import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotPieComponent } from './g2plot-pie.component';
import { G2plotPieRoutingModule } from './g2plot-pie-routing.module';

import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [G2plotPieComponent],
  imports: [
    CommonModule,
    G2plotPieRoutingModule,
    SharedModule
  ]
})
export class G2plotPieModule { }
