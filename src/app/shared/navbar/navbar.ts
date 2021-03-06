import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { ThemePickerModule } from '../theme-picker/theme-picker';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss']
})
export class Navbar {

  constructor() { }

}

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    RouterModule,
    ThemePickerModule
  ],
  exports: [Navbar],
  declarations: [Navbar]
})
export class NavbarModule {}
