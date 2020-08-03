import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ResponseFormComponent } from './../forms/response-form/response-form.component';
import { MessageComponent } from './../message/message.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatResponseComponent } from './tchat-response.component';

describe('TchatResponseComponent', () => {
  let component: TchatResponseComponent;
  let fixture: ComponentFixture<TchatResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatResponseComponent, MessageComponent, ResponseFormComponent ],
      imports: [ ReactiveFormsModule, HttpClientTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TchatResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
