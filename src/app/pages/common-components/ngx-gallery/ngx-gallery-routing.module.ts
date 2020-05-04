
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgxGalleryComponent } from './ngx-gallery.component';

const routes: Routes = [
  { path: '', component: NgxGalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NgxGalleryRoutingModule { }
