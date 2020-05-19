import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { G2plotBarComponent } from './g2plot-bar.component';
import { G2plotBarRoutingModule } from './g2plot-bar-routing.module';
import { SharedModule } from 'src/app/shared';


@NgModule({
  declarations: [G2plotBarComponent],
  imports: [
    CommonModule,
    G2plotBarRoutingModule,
    SharedModule
  ]
})
export class G2plotBarModule { }
