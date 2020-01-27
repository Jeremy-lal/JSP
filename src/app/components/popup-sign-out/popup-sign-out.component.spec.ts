import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PopupSignOutComponent } from './popup-sign-out.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatDialogRef } from '@angular/material';

describe('PopupSignOutComponent', () => {
  let component: PopupSignOutComponent;
  let fixture: ComponentFixture<PopupSignOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupSignOutComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: MatDialogRef
        }
      ]
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
