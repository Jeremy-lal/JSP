import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponseFormComponent } from './../forms/response-form/response-form.component';
import { MessageComponent } from './../message/message.component';
import { TchatResponseComponent } from './../tchat-response/tchat-response.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatComponent } from './tchat.component';
import { MAT_DIALOG_DATA } from '@angular/material';

describe('TchatComponent', () => {
  let component: TchatComponent;
  let fixture: ComponentFixture<TchatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatComponent, TchatResponseComponent, MessageComponent, ResponseFormComponent ],
      imports: [MatSidenavModule, ReactiveFormsModule, HttpClientTestingModule, BrowserAnimationsModule],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
