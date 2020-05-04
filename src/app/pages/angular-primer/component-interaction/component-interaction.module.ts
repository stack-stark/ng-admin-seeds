import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentInteractionComponent } from './component-interaction.component';
import { ComponentInteractionRoutingModule } from './component-interaction-routing.module';


@NgModule({
  declarations: [ComponentInteractionComponent],
  imports: [
    CommonModule,
    ComponentInteractionRoutingModule
  ]
})
export class ComponentInteractionModule { }
