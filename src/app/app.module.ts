import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-routing.module';
import { NavbarModule } from './shared/navbar';

import { AppComponent } from './ozma-portal-app';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRouterModule,
    NavbarModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
