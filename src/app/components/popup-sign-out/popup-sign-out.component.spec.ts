import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupSignOutComponent } from './popup-sign-out.component';

describe('PopupSignOutComponent', () => {
  let component: PopupSignOutComponent;
  let fixture: ComponentFixture<PopupSignOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSignOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupSignOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
