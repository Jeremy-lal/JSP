import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionPageComponent } from './question-page.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { OpenCommentFromComponent } from 'src/app/components/open-comment-from/open-comment-from.component';
import { MatDialogModule } from '@angular/material';

describe('QuestionPageComponent', () => {
  let component: QuestionPageComponent;
  let fixture: ComponentFixture<QuestionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuestionPageComponent,
        NavBarTopComponent,
        NavBarComponent,
        OpenCommentFromComponent,
        CommentComponent
      ],
      imports: [
        MatCardModule,
        HttpClientTestingModule,
        MatDialogModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
