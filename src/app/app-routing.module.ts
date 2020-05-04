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
        ]
      },
      {
        canActivateChild: [AuthGuard],
        path: 'angular-primer',
        children: [
          {
            path: 'todo-list',
            loadChildren: () => import('./pages/angular-primer/todo-list/todo-list.module').then((mod) => mod.TodoListModule)
          },
          {
            path: 'pipe',
            loadChildren: () => import('./pages/angular-primer/pipe/pipe.module').then((mod) => mod.PipeModule)
          },
          {
            path: 'attribute-directives',
            loadChildren: () => import('./pages/angular-primer/attribute-directives/attribute-directives.module')
              .then((mod) => mod.AttributeDirectivesModule)
          },
          {
            path: 'component-interaction',
            loadChildren: () => import('./pages/angular-primer/component-interaction/component-interaction.module')
              .then((mod) => mod.ComponentInteractionModule)
          },
          {
            path: 'dom-operation',
            loadChildren: () => import('./pages/angular-primer/dom-operation/dom-operation.module').then((mod) => mod.DomOperationModule)
          },
          {
            path: 'dynamic-component',
            loadChildren: () => import('./pages/angular-primer/dynamic-component/dynamic-component.module')
              .then((mod) => mod.DynamicComponentModule)
          },
          {
            path: 'structural-directives',
            loadChildren: () => import('./pages/angular-primer/structural-directives/structural-directives.module')
              .then((mod) => mod.StructuralDirectivesModule)
          },
        ]
      },
      {
        canActivateChild: [AuthGuard],
        path: 'common-components',
        children: [
          {
            path: 'ngrx',
            loadChildren: () => import('./pages/common-components/ngrx/ngrx.module').then((mod) => mod.NgrxModule)
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
