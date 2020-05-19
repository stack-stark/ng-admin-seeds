import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotAreaComponent } from './g2plot-area.component';
import { G2plotRoutingModule } from '../g2plot-routing.module';
import { SharedModule } from 'src/app/shared';
@NgModule({
  declarations: [G2plotAreaComponent],
  imports: [
    CommonModule,
    G2plotRoutingModule,
    SharedModule
  ]
})
export class G2plotAreaModule { }
