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

const MODULES = [
  MatButtonModule,
  MatIconModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatToolbarModule
];

@NgModule({
  exports: [
    ...MODULES
  ],
  declarations: []
})
export class MaterialModule { }
