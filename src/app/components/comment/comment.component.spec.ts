import { RouterTestingModule } from '@angular/router/testing';
import { OpenCommentFromComponent } from './../open-comment-from/open-comment-from.component';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommentComponent } from './comment.component';
import { MatCardModule, MatDialogModule, MAT_DIALOG_DATA } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';

describe('CommentComponent', () => {
  let component: CommentComponent;
  let fixture: ComponentFixture<CommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommentComponent,
        OpenCommentFromComponent
      ],
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        MatCardModule,
        HttpClientTestingModule,
        ObserversModule,
        MatMenuModule,
        MatIconModule,
        MatDialogModule,
        RouterTestingModule
      ],
      providers: [
        {
          provide: MAT_DIALOG_DATA
        }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should work : commentClickId', () => {
    component.commentClickId(2);
    expect(component.commentClick).toEqual(2);
  });
});
