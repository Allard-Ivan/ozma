import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'note-detail',
  templateUrl: './note-detail.html',
  styleUrls: ['./note-detail.scss']
})
export class NoteDetail implements OnInit {
  ckeditorContent = "";

  config: any ={
    filebrowserBrowseUrl :"&&&&&",
    filebrowserUploadUrl :"&&&",
  };

  constructor() { }

  ngOnInit() {
    this.config.height = window.screen.height - 300;
  }

}
