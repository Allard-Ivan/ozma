import { Component, OnInit, NgModule } from '@angular/core';
import { SvgViewerModule } from '../../shared/svg-viewer/svg-viewer';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.html',
  styleUrls: ['./homepage.scss']
})
export class Homepage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [SvgViewerModule, MatButtonModule, RouterModule.forChild([{path: '', component: Homepage}])],
  declarations: [Homepage]
})
export class HomepageModule {}
