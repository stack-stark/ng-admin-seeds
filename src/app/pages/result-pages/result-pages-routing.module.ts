import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResultErrorComponent } from './result-error.component';
import { NotFoundComponent } from './not-found.component';
import { ForbiddenComponent } from './forbidden.component';

const routes: Routes = [
  {path: '500', component: ResultErrorComponent},
  {path: '404', component: NotFoundComponent},
  {path: '403', component: ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultPagesRoutingModule { }
