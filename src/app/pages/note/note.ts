import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.html',
  styleUrls: ['./note.scss']
})
export class Note implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, RouterModule.forChild([{path: '', component: Note}])],
  declarations: [Note]
})
export class NoteModule {}
