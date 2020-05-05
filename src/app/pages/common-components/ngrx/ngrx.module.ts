import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgrxComponent } from './ngrx.component';
import { FormsModule } from '@angular/forms';
import { NgrxRoutingModule } from './ngrx-routing.module';
import { NzTableModule, NzPopconfirmModule, NzInputModule, NzButtonModule, NzGridModule, NzDividerModule   } from 'ng-zorro-antd';

@NgModule({
  declarations: [NgrxComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgrxRoutingModule,
    NzTableModule,
    NzPopconfirmModule,
    NzInputModule,
    NzButtonModule,
    NzGridModule,
    NzDividerModule
  ]
})
export class NgrxModule { }
