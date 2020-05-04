import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomOperationComponent } from './dom-operation.component';
import { DomOperationRoutingModule } from './dom-operation-routing.module';



@NgModule({
  declarations: [DomOperationComponent],
  imports: [
    CommonModule,
    DomOperationRoutingModule
  ]
})
export class DomOperationModule { }
