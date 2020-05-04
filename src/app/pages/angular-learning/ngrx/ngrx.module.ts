import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class NgrxModule { }
