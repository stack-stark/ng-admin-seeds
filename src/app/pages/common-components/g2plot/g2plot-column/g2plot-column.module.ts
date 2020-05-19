import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotColumnComponent } from './g2plot-column.component';
import { G2plotColumnRoutingModule } from './g2plot-column-routing.module';
import { SharedModule } from 'src/app/shared';

@NgModule({
  declarations: [G2plotColumnComponent],
  imports: [
    CommonModule,
    G2plotColumnRoutingModule,
    SharedModule
  ]
})
export class G2plotColumnModule { }
