import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotBarComponent } from './g2plot-bar.component';
const routes: Routes = [
  {
    path: '',
    component: G2plotBarComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotBarRoutingModule { }
