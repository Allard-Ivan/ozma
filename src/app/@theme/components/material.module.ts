import { NgModule } from '@angular/core';

import {
        MatButtonModule,
        MatIconModule,
        MatCheckboxModule,
        MatInputModule,
        MatFormFieldModule,
        MatAutocompleteModule
} from '@angular/material';

import {
  MatToolbarModule
} from '@angular/material/toolbar';

import {
  MatSelectModule
} from '@angular/material/select';

const MODULES = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatToolbarModule,
  MatSelectModule
];

@NgModule({
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class MaterialModule { }
