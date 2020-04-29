import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './layout/desktop/desktop.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index/welcome' },
  {
    path: 'error',
    loadChildren: () => import('./pages/result-pages/result-pages.module').then((mod) => mod.ResultPagesModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then((mod) => mod.LoginModule)
  },
  {
    path: 'index',
    component: DesktopComponent,
    canActivate: [AuthGuard],
    children: [
      {
        canActivateChild: [AuthGuard],
        path: '',
        children: [
          {
            path: 'welcome',
            loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
          },
          {
            path: 'some',
            loadChildren: () => import('./pages/some/some.module').then((mod) => mod.SomeModule)
          },
          {
            path: 'todo',
            loadChildren: () => import('./pages/todo/todo.module').then((mod) => mod.TodoModule)
          },
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
