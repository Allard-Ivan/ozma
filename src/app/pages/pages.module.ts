import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from './../@theme/theme.module';
import { SvgViewerModule } from './../shared/svg-viewer/svg-viewer';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const PAGE_COMPONENT = [
  PagesComponent,
  DashboardComponent
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
    SvgViewerModule
  ],
  declarations: [...PAGE_COMPONENT]
})
export class PagesModule { }
