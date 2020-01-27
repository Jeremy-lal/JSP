import { RouterTestingModule } from '@angular/router/testing';
import { MatMenuModule } from '@angular/material/menu';
import { CommentComponent } from './../../components/comment/comment.component';
import { OpenCommentFromComponent } from './../../components/open-comment-from/open-comment-from.component';
import { NavBarComponent } from './../../components/nav-bar/nav-bar.component';
import { NavBarTopComponent } from './../../components/nav-bar-top/nav-bar-top.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Jsp1PageComponent } from './jsp1-page.component';
import { MatCardModule, MatDialogModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResponseComponent } from '../../components/response/response.component';

describe('Jsp1PageComponent', () => {
  let component: Jsp1PageComponent;
  let fixture: ComponentFixture<Jsp1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Jsp1PageComponent,
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
        ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsp1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
