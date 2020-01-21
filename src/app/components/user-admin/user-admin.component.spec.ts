import { MatDialogModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminComponent } from './user-admin.component';

describe('UserAdminComponent', () => {
  let component: UserAdminComponent;
  let fixture: ComponentFixture<UserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAdminComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  afterEach(() => {
    fixture.destroy();
  });

});

