import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.html',
  styleUrls: ['./faq.scss']
})
export class Faq implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [MatButtonModule, RouterModule.forChild([{path: '', component: Faq}])],
  declarations: [Faq]
})
export class FaqModule {}
