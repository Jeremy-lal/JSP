import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ResponseFormComponent } from './../../components/forms/response-form/response-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageComponent } from './../../components/message/message.component';
import { TchatResponseComponent } from './../../components/tchat-response/tchat-response.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule, MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { CommentFormComponent } from './../../components/forms/comment-form/comment-form.component';
import { TchatComponent } from './../../components/tchat/tchat.component';
import { SidemenuComponent } from './../../components/sidemenu/sidemenu.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversationsComponent } from './conversations.component';

describe('ConversationsComponent', () => {
  let component: ConversationsComponent;
  let fixture: ComponentFixture<ConversationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConversationsComponent, SidemenuComponent, TchatComponent,
        CommentFormComponent, TchatResponseComponent, MessageComponent, ResponseFormComponent ],
      imports: [ MatMenuModule, MatSidenavModule, ReactiveFormsModule, HttpClientTestingModule ,
        MatDialogModule, RouterTestingModule, BrowserAnimationsModule],
        providers : [
          { provide: MatDialogRef, useValue: {} },
          { provide: MAT_DIALOG_DATA, useValue: {} },
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
