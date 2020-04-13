import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureFromComponent } from './picture-from.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

describe('PictureFromComponent', () => {
  let component: PictureFromComponent;
  let fixture: ComponentFixture<PictureFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureFromComponent ],
      imports: [HttpClientTestingModule],
      providers : [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
