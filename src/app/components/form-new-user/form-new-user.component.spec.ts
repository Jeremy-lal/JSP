import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef, MatStepperModule, MAT_DIALOG_DATA } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormNewUserComponent } from './form-new-user.component';

describe('FormNewUserComponent', () => {
  let component: FormNewUserComponent;
  let fixture: ComponentFixture<FormNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormNewUserComponent],
      imports: [ReactiveFormsModule, MatDialogModule, HttpClientTestingModule, MatStepperModule, MatSelectModule, BrowserAnimationsModule],
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
    fixture = TestBed.createComponent(FormNewUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
