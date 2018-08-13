import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteBook } from './note-book';

describe('NoteBookComponent', () => {
  let component: NoteBook;
  let fixture: ComponentFixture<NoteBook>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteBook ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteBook);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
