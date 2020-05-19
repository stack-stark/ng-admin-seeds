import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'area',
    loadChildren: () => import('./g2plot-area/g2plot-area.module').then((mod) => mod.G2plotAreaModule)
  },
  {
    path: 'bar',
    loadChildren: () => import('./g2plot-bar/g2plot-bar.module').then((mod) => mod.G2plotBarModule)
  },
  {
    path: 'column',
    loadChildren: () => import('./g2plot-column/g2plot-column.module').then((mod) => mod.G2plotColumnModule)
  },
  {
    path: 'gauge',
    loadChildren: () => import('./g2plot-gauge/g2plot-gauge.module').then((mod) => mod.G2plotGaugeModule)
  },
  {
    path: 'line',
    loadChildren: () => import('./g2plot-line/g2plot-line.module').then((mod) => mod.G2plotLineModule)
  },
  {
    path: 'pie',
    loadChildren: () => import('./g2plot-pie/g2plot-pie.module').then((mod) => mod.G2plotPieModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class G2plotRoutingModule { }
