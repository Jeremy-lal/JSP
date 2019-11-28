import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierPageComponent } from './modifier-page.component';

describe('ModifierPageComponent', () => {
  let component: ModifierPageComponent;
  let fixture: ComponentFixture<ModifierPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifierPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
