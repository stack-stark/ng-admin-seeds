import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotLineComponent } from './g2plot-line.component';

const routes: Routes = [
  {
    path: '',
    component: G2plotLineComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotLineRoutingModule { }
