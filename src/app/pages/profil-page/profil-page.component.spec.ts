import { MatDialogModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavBarTopComponent } from './../../components/nav-bar-top/nav-bar-top.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilPageComponent } from './profil-page.component';

describe('ProfilPageComponent', () => {
  let component: ProfilPageComponent;
  let fixture: ComponentFixture<ProfilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProfilPageComponent,
        NavBarTopComponent],
      imports: [HttpClientTestingModule, MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
