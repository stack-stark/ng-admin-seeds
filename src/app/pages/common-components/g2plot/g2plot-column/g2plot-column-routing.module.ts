import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotColumnComponent } from './g2plot-column.component';

const routes: Routes = [
  {
    path: '',
    component: G2plotColumnComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotColumnRoutingModule { }
