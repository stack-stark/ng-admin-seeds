import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectLogComponent } from './project-log.component';

const routes: Routes = [
    {path: '', component: ProjectLogComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectLogRoutingModule { }
