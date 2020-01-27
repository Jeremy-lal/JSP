import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { QuestionPageComponent } from './question-page.component';
import { NavBarTopComponent } from '../../components/nav-bar-top/nav-bar-top.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { OpenCommentFromComponent } from '../../components/open-comment-from/open-comment-from.component';
import { MatDialogModule } from '@angular/material';
import { ResponseComponent } from '../../components/response/response.component';
import { RouterTestingModule } from '@angular/router/testing';

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
        CommentComponent,
        ResponseComponent

      ],
      imports: [
        MatCardModule,
        HttpClientTestingModule,
        MatDialogModule,
        MatIconModule,
        MatMenuModule,
        RouterTestingModule

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
