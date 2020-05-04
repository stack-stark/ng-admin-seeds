import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { FormsModule } from '@angular/forms';
import { NgrxRoutingModule } from './ngrx-routing.module';



@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgrxRoutingModule
  ]
})
export class NgrxModule { }
