import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotGaugeComponent } from './g2plot-gauge.component';

const routes: Routes = [
  {
    path: '',
    component: G2plotGaugeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotGaugeRoutingModule { }
