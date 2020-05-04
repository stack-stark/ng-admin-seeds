import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './layout/desktop/desktop.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index/welcome' },
  {
    path: 'login',
    loadChildren: () => import('./pages/general/login/login.module').then((mod) => mod.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/general/register/register.module').then((mod) => mod.RegisterModule)
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
            path: 'error',
            loadChildren: () => import('./pages/general/result-pages/result-pages.module').then((mod) => mod.ResultPagesModule)
          },
          {
            path: 'todo-list',
            loadChildren: () => import('./pages/angular-learning/todo-list/todo-list.module').then((mod) => mod.TodoListModule)
          },
          {
            path: 'ngrx',
            loadChildren: () => import('./pages/angular-learning/ngrx/ngrx.module').then((mod) => mod.NgrxModule)
          },
          {
            path: 'ngx-gallery',
            loadChildren: () => import('./pages/common-components/ngx-gallery/ngx-gallery.module').then((mod) => mod.NgxGalleryModule)
          },
          {
            path: 'g2plot',
            loadChildren: () => import('./pages/common-components/g2plot/g2plot.module').then((mod) => mod.G2plotModule)
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
