import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenCommentFromComponent } from './open-comment-from.component';

describe('OpenCommentFromComponent', () => {
  let component: OpenCommentFromComponent;
  let fixture: ComponentFixture<OpenCommentFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenCommentFromComponent ]
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
