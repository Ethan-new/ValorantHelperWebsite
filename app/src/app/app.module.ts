import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { XyzComponent } from './xyz/xyz.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { SovahavenComponent } from './sovahaven/sovahaven.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { YouTubePlayerModule } from "@angular/youtube-player";
import { SovaiceboxComponent } from './sovaicebox/sovaicebox.component';


@NgModule({
  declarations: [
    AppComponent,
    XyzComponent,
    NavBarComponent,
    HomeComponent,
    FooterComponent,
    SovahavenComponent,
    SovaiceboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    MDBBootstrapModule.forRoot(),
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
