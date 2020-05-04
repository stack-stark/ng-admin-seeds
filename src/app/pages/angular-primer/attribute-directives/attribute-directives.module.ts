import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttributeDirectivesComponent } from './attribute-directives.component';
import { AttributeDirectivesRoutingModule } from './attribute-directives-routing.module';



@NgModule({
  declarations: [AttributeDirectivesComponent],
  imports: [
    CommonModule,
    AttributeDirectivesRoutingModule
  ]
})
export class AttributeDirectivesModule { }
