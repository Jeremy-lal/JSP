import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
        HttpClientTestingModule,
        MatDialogModule,
      ],
      providers: [
        {
          provide: MatDialogRef
        },
        {
          provide: MAT_DIALOG_DATA
        }
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
