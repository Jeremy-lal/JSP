import { CommentComponent } from './../../components/comment/comment.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Jsp2PageComponent } from './jsp2-page.component';
import { NavBarTopComponent } from '../../components/nav-bar-top/nav-bar-top.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { OpenCommentFromComponent } from '../../components/open-comment-from/open-comment-from.component';
import { MatCardModule, MatDialogModule, MatIconModule, MatMenuModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResponseComponent } from '../../components/response/response.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Jsp2PageComponent', () => {
  let component: Jsp2PageComponent;
  let fixture: ComponentFixture<Jsp2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Jsp2PageComponent,
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
    fixture = TestBed.createComponent(Jsp2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
