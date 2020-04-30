import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { G2plotComponent } from './g2plot.component';

const routes: Routes = [
  { path: '', component: G2plotComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotRoutingModule { }
