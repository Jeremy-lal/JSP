import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunPageComponent } from './commun-page.component';

describe('CommunPageComponent', () => {
  let component: CommunPageComponent;
  let fixture: ComponentFixture<CommunPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
