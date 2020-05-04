import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DomOperationComponent } from './dom-operation.component';

const routes: Routes = [
  { path: '', component: DomOperationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomOperationRoutingModule { }
