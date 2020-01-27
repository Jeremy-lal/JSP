import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule, MatMenuModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAdminComponent } from './user-admin.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('UserAdminComponent', () => {
  let component: UserAdminComponent;
  let fixture: ComponentFixture<UserAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserAdminComponent],
      imports: [
        HttpClientTestingModule,
        MatDialogModule,
        ReactiveFormsModule,
        MatExpansionModule,
        MatIconModule,
        MatMenuModule]
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

