import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule, NzInputModule, NzGridModule, NzCheckboxModule, NzIconModule } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    NzFormModule,
    NzButtonModule,
    NzInputModule,
    FormsModule,
    ReactiveFormsModule,
    NzGridModule,
    NzCheckboxModule
  ]
})
export class LoginModule { }
