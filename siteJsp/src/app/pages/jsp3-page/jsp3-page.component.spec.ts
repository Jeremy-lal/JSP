import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Jsp3PageComponent } from './jsp3-page.component';

describe('Jsp3PageComponent', () => {
  let component: Jsp3PageComponent;
  let fixture: ComponentFixture<Jsp3PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Jsp3PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Jsp3PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
