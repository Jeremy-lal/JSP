import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TchatResponseComponent } from './tchat-response.component';

describe('TchatResponseComponent', () => {
  let component: TchatResponseComponent;
  let fixture: ComponentFixture<TchatResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TchatResponseComponent ]
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
