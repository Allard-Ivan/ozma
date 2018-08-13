import { Component, OnInit, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material';

@Component({
  selector: 'app-note-book',
  templateUrl: './note-book.html',
  styleUrls: ['./note-book.scss']
})
export class NoteBook implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}


@NgModule({
  imports: [MatButtonModule, RouterModule.forChild([{path: '', component: NoteBook}])],
  declarations: [NoteBook]
})
export class NoteBookModule {}