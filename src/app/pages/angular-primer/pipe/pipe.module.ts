import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeComponent } from './pipe.component';
import { PipeRoutingModule } from './pipe-routing.module';



@NgModule({
  declarations: [PipeComponent],
  imports: [
    CommonModule,
    PipeRoutingModule
  ]
})
export class PipeModule { }
