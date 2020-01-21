import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewUserComponent } from './form-new-user.component';

describe('FormNewUserComponent', () => {
  let component: FormNewUserComponent;
  let fixture: ComponentFixture<FormNewUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNewUserComponent ],
      imports: [ReactiveFormsModule, MatDialogModule, HttpClientTestingModule ],
      providers: [
      {
        provide: MatDialogRef,
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
