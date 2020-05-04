import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotComponent } from './g2plot.component';
import { G2plotRoutingModule } from './g2plot-routing.module';



@NgModule({
  declarations: [G2plotComponent],
  imports: [
    CommonModule,
    G2plotRoutingModule
  ]
})
export class G2plotModule { }
