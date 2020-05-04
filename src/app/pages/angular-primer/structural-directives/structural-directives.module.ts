import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuralDirectivesComponent } from './structural-directives.component';
import { StructuralDirectivesRoutingModule } from './structural-directives-routing.module';



@NgModule({
  declarations: [StructuralDirectivesComponent],
  imports: [
    CommonModule,
    StructuralDirectivesRoutingModule
  ]
})
export class StructuralDirectivesModule { }
