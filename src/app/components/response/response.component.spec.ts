import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResponseComponent } from './response.component';
import { MatMenuModule, MatDialogModule } from '@angular/material';

describe('ResponseComponent', () => {
  let component: ResponseComponent;
  let fixture: ComponentFixture<ResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponseComponent ],
      imports: [MatCardModule, MatMenuModule, MatIconModule, HttpClientTestingModule, MatDialogModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
