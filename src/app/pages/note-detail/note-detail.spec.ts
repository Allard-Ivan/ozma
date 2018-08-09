import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetail } from './note-detail';

describe('NoteDetailComponent', () => {
  let component: NoteDetail;
  let fixture: ComponentFixture<NoteDetail>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteDetail ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
