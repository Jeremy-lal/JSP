import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceuilPageComponent } from './acceuil-page.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AcceuilPageComponent', () => {
  let component: AcceuilPageComponent;
  let fixture: ComponentFixture<AcceuilPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceuilPageComponent ],
      imports: [RouterTestingModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceuilPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
