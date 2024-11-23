import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './Views/upload/upload.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { QRComponent } from './Views/qr/qr.component';
import { NavbarComponent } from './Views/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    QRComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
