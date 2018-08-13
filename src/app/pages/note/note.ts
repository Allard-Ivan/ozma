import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';

import { NoteDetail } from '../note-detail/note-detail';

@Component({
  selector: 'app-note',
  templateUrl: './note.html',
  styleUrls: ['./note.scss']
})
export class Note implements OnInit {

  bb: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  foo() {
    this.router.navigateByUrl('/note/note-book');
    this.bb = false;
    // document.getElementById('note-book-fimg').style['opacity'] = '0';
    // document.getElementById('note-book-bimg').style['opacity'] = '1';
    // document.getElementById('note-fimg').style['opacity'] = '1';
    // document.getElementById('note-bimg').style['opacity'] = '0';
    
  }

  bar() {
    this.router.navigateByUrl('/note');
    this.bb = true;
    // document.getElementById('note-fimg').style['opacity'] = '0';
    // document.getElementById('note-bimg').style['opacity'] = '1';
    // document.getElementById('note-book-fimg').style['opacity'] = '1';
    // document.getElementById('note-book-bimg').style['opacity'] = '0';
  }

}

const routes: Routes = [
  {
    path: '',
    component: Note,
    children: [ 
      { path: '', component: NoteDetail},
      {
        path: 'note-book',
        loadChildren: './../note-book/note-book#NoteBookModule'
      },
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [MatButtonModule, MatSidenavModule, MatCardModule, CKEditorModule, FormsModule,
    RouterModule.forChild(routes)],
  declarations: [Note, NoteDetail]
})
export class NoteModule {}
