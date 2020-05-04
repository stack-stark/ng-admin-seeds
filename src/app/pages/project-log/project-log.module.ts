import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectLogComponent } from './project-log.component';
import { ProjectLogRoutingModule } from './project-log.routing.module';



@NgModule({
  declarations: [ProjectLogComponent],
  imports: [
    CommonModule,
    ProjectLogRoutingModule
  ]
})
export class ProjectLogModule { }
