import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRouterModule } from './app-routing.module';

import { AppComponent } from './ozma-portal-app';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRouterModule,
    HttpClientModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
