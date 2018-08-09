import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetail } from '../note-detail/note-detail';

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

const routes: Routes = [
  {
    path: '',
    component: Note,
    children: [ 
      { path: '', component: NoteDetail}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatCardModule,
    RouterModule.forChild(routes)],
  declarations: [Note, NoteDetail]
})
export class NoteModule {}
