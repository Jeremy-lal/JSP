import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsp4PageComponent } from './jsp4-page.component';

describe('Jsp4PageComponent', () => {
  let component: Jsp4PageComponent;
  let fixture: ComponentFixture<Jsp4PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jsp4PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsp4PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
