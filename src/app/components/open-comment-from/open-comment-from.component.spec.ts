import { MatDialog, MatDialogModule } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCommentFromComponent } from './open-comment-from.component';

describe('OpenCommentFromComponent', () => {
  let component: OpenCommentFromComponent;
  let fixture: ComponentFixture<OpenCommentFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        OpenCommentFromComponent,
      ],
      imports: [
        HttpClientTestingModule,
        MatDialogModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenCommentFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
