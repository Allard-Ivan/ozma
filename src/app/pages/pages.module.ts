import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';

import { PagesComponent } from './pages.component';
import { Homepage } from './homepage/homepage';

const PAGE_COMPONENT = [
  PagesComponent,
  Homepage
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    ThemeModule,
  ],
  declarations: [...PAGE_COMPONENT]
})
export class PagesModule { }
