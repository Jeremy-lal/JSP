import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentFormComponent } from './comment-form.component';
import { MatSelectModule, MAT_DIALOG_DATA } from '@angular/material';

describe('CommentFormComponent', () => {
  let component: CommentFormComponent;
  let fixture: ComponentFixture<CommentFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentFormComponent,
      ],
      imports: [
        ReactiveFormsModule,
        MatDialogModule,
        HttpClientTestingModule,
        MatSelectModule,
        RouterTestingModule,
        BrowserAnimationsModule
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
    fixture = TestBed.createComponent(CommentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
