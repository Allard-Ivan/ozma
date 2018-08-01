import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './components';

import {
  FooterComponent,
} from './components';

const COMPONENTS = [
  FooterComponent,
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
