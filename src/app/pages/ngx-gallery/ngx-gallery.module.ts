import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxGalleryComponent } from './ngx-gallery.component';
import { NgxGalleryRoutingModule } from './ngx-gallery-routing.module';



@NgModule({
  declarations: [NgxGalleryComponent],
  imports: [
    CommonModule,
    NgxGalleryRoutingModule
  ]
})
export class NgxGalleryModule { }
