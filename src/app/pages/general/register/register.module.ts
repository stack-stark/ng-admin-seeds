import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule, NzInputModule, NzGridModule, NzCheckboxModule, NzIconModule, NzSelectModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterRoutingModule } from './register-routing.module';


@NgModule({
  declarations: [RegisterComponent],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzCheckboxModule,
    NzSelectModule
  ]
})
export class RegisterModule { }
