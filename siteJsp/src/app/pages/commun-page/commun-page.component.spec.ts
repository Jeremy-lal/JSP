import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunPageComponent } from './commun-page.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { OpenCommentFromComponent } from 'src/app/components/open-comment-from/open-comment-from.component';
import { MatCardModule, MatDialogModule } from '@angular/material';

describe('CommunPageComponent', () => {
  let component: CommunPageComponent;
  let fixture: ComponentFixture<CommunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        CommunPageComponent,
        NavBarTopComponent,
        NavBarComponent,
        OpenCommentFromComponent,
        CommentComponent
      ],
      imports: [
        MatCardModule,
        HttpClientTestingModule,
        MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
