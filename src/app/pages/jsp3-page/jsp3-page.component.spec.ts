import { MatMenuModule } from '@angular/material/menu';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Jsp3PageComponent } from './jsp3-page.component';
import { NavBarTopComponent } from '../../components/nav-bar-top/nav-bar-top.component';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { CommentComponent } from '../../components/comment/comment.component';
import { OpenCommentFromComponent } from 'src/app/components/open-comment-from/open-comment-from.component';
import { MatCardModule, MatDialogModule, MatIconModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResponseComponent } from '../../components/response/response.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('Jsp3PageComponent', () => {
  let component: Jsp3PageComponent;
  let fixture: ComponentFixture<Jsp3PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Jsp3PageComponent,
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
    fixture = TestBed.createComponent(Jsp3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
