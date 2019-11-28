import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsp1PageComponent } from './jsp1-page.component';

describe('Jsp1PageComponent', () => {
  let component: Jsp1PageComponent;
  let fixture: ComponentFixture<Jsp1PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jsp1PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsp1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
