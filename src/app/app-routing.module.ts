import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './layout/desktop/desktop.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/index/welcome' },
  {
    path: 'error',
    loadChildren: () => import('./pages/result-pages/result-pages.module').then((mod) => mod.ResultPagesModule)
  },
  {
    path: 'index',
    component: DesktopComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
