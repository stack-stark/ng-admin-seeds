import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotGaugeComponent } from './g2plot-gauge.component';
import { G2plotGaugeRoutingModule } from './g2plot-gauge-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [G2plotGaugeComponent],
  imports: [
    CommonModule,
    G2plotGaugeRoutingModule,
    SharedModule
  ]
})
export class G2plotGaugeModule { }
