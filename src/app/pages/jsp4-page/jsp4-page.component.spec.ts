import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsp4PageComponent } from './jsp4-page.component';
import { NavBarTopComponent } from 'src/app/components/nav-bar-top/nav-bar-top.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { OpenCommentFromComponent } from 'src/app/components/open-comment-from/open-comment-from.component';
import { MatCardModule, MatDialogModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Jsp4PageComponent', () => {
  let component: Jsp4PageComponent;
  let fixture: ComponentFixture<Jsp4PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Jsp4PageComponent,
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
    fixture = TestBed.createComponent(Jsp4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
