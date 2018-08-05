import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Note } from './note';

describe('NoteComponent', () => {
  let component: Note;
  let fixture: ComponentFixture<Note>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Note ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Note);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
