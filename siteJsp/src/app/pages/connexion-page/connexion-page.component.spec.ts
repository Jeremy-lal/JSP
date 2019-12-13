import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { MatCardTitle, MatCardHeader, MatCardContent, MatCardActions, MatCard, MatInputModule } from '@angular/material';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionPageComponent } from './connexion-page.component';
import { ObserversModule } from '@angular/cdk/observers';

describe('ConnexionPageComponent', () => {
  let component: ConnexionPageComponent;
  let fixture: ComponentFixture<ConnexionPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ConnexionPageComponent
       ],
       imports: [
         FormsModule,
         MatCardModule,
         ObserversModule,
         RouterTestingModule,
         HttpClientTestingModule,
         MatInputModule,
         BrowserAnimationsModule
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnexionPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
