import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsp2PageComponent } from './jsp2-page.component';

describe('Jsp2PageComponent', () => {
  let component: Jsp2PageComponent;
  let fixture: ComponentFixture<Jsp2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jsp2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsp2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
