import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewNoteComponent } from './form-new-note.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('FormNewNoteComponent', () => {
  let component: FormNewNoteComponent;
  let fixture: ComponentFixture<FormNewNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewNoteComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule
      ]
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
