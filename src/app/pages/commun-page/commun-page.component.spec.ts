import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
import { ResponseComponent } from './../../components/response/response.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CommunPageComponent } from './commun-page.component';
import { NavBarTopComponent } from '../../components/nav-bar-top/nav-bar-top.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { OpenCommentFromComponent } from '../../components/open-comment-from/open-comment-from.component';
import { MatCardModule, MatDialogModule, MatMenuModule } from '@angular/material';

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
    fixture = TestBed.createComponent(CommunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
