import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ServerErrorComponent } from './server-error.component';
import { NotFoundComponent } from './not-found.component';
import { ForbiddenComponent } from './forbidden.component';
import { ErrorFeedbackComponent } from './error-feedback.component';

const routes: Routes = [
  {path: '500', component: ServerErrorComponent},
  {path: '404', component: NotFoundComponent},
  {path: '403', component: ForbiddenComponent},
  {path: 'error-feedback', component: ErrorFeedbackComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResultPagesRoutingModule { }
