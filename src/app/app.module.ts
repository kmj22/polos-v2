import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {SlickCarouselModule} from "ngx-slick-carousel";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
