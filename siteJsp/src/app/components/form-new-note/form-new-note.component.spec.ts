import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewNoteComponent } from './form-new-note.component';

describe('FormNewNoteComponent', () => {
  let component: FormNewNoteComponent;
  let fixture: ComponentFixture<FormNewNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
