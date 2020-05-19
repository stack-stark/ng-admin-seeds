import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotAreaComponent } from './g2plot-area.component';
const routes: Routes = [
  {
    path: '',
    component: G2plotAreaComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotRoutingModule { }
