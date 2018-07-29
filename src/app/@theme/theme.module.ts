import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  FooterComponent,
  HeaderComponent
} from './components';

import { DefaultLayoutComponent } from './layouts';

const COMPONENTS = [
  FooterComponent,
  HeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [...COMPONENTS],
  declarations: [...COMPONENTS]
})
export class ThemeModule { }
