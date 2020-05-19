import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotPieComponent } from './g2plot-pie.component';

const routes: Routes = [
  {
    path: '',
    component: G2plotPieComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotPieRoutingModule { }
