import { Component, OnInit, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CKEditorModule } from 'ng2-ckeditor';

import { NoteDetail } from '../note-detail/note-detail';

@Component({
  selector: 'app-note',
  templateUrl: './note.html',
  styleUrls: ['./note.scss']
})
export class Note implements OnInit {

  imgSwitchFlag: boolean = true;

  constructor(private router: Router) { }

  ngOnInit() {
    // 防止在笔记本标签页刷新时，图片显隐失误
    if (this.router.url.indexOf('note-book') !== -1) {
      this.imgSwitchFlag = false;
    }
  }

  gotoNoteBook() {
    this.imgSwitchFlag = false;
    this.router.navigateByUrl('/note/note-book');
  }

  gotoNote() {
    this.imgSwitchFlag = true;
    this.router.navigateByUrl('/note');
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
  imports: [CommonModule, MatButtonModule, MatSidenavModule, MatCardModule, CKEditorModule, FormsModule,
    RouterModule.forChild(routes)],
  declarations: [Note, NoteDetail]
})
export class NoteModule {}
