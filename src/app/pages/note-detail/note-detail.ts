import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.html',
  styleUrls: ['./note-detail.scss']
})
export class NoteDetail implements OnInit {
  ckeditorContent = "";
  constructor() { }
  config={
    filebrowserBrowseUrl :"&&&&&",
    filebrowserUploadUrl :"&&&",
    height: 747
  };
  ngOnInit() {
  }

}
