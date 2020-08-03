import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatMenuModule, MatDialogModule } from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { SidemenuComponent } from './../../components/sidemenu/sidemenu.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwdComponent } from './change-pwd.component';

describe('ChangePwdComponent', () => {
  let component: ChangePwdComponent;
  let fixture: ComponentFixture<ChangePwdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwdComponent, SidemenuComponent ],
      imports: [ReactiveFormsModule, MatMenuModule, HttpClientTestingModule, RouterTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
