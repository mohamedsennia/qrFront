import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadComponent } from './Views/upload/upload.component';
import { QRComponent } from './Views/qr/qr.component';

const routes: Routes = [{path:"",pathMatch:"full",redirectTo:"/upload"},
  {path:"upload",component:UploadComponent},
  {path:"QR",component:QRComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
