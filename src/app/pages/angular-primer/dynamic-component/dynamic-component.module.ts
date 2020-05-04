import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicComponentComponent } from './dynamic-component.component';
import { DynamicComponentRoutingModule } from './dynamic-component-routing.module';



@NgModule({
  declarations: [DynamicComponentComponent],
  imports: [
    CommonModule,
    DynamicComponentRoutingModule
  ]
})
export class DynamicComponentModule { }
