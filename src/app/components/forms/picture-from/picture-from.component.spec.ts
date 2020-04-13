import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PictureFromComponent } from './picture-from.component';

describe('PictureFromComponent', () => {
  let component: PictureFromComponent;
  let fixture: ComponentFixture<PictureFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PictureFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PictureFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
