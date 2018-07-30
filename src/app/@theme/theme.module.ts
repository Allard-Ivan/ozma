import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './components';

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
    CommonModule,
    MaterialModule
  ],
  exports: [...COMPONENTS, MaterialModule],
  declarations: [...COMPONENTS]
})
export class ThemeModule { }
