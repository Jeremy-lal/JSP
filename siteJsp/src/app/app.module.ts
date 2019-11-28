import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommunPageComponent } from './pages/commun-page/commun-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { Jsp1PageComponent } from './pages/jsp1-page/jsp1-page.component';
import { Jsp2PageComponent } from './pages/jsp2-page/jsp2-page.component';
import { Jsp3PageComponent } from './pages/jsp3-page/jsp3-page.component';
import { Jsp4PageComponent } from './pages/jsp4-page/jsp4-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ModifierPageComponent } from './pages/modifier-page/modifier-page.component';
import { AddNoteComponent } from './pages/add-note/add-note.component';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavBarTopComponent } from './components/nav-bar-top/nav-bar-top.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent,
    CommunPageComponent,
    QuestionPageComponent,
    Jsp1PageComponent,
    Jsp2PageComponent,
    Jsp3PageComponent,
    Jsp4PageComponent,
    ProfilPageComponent,
    AdminPageComponent,
    ModifierPageComponent,
    AddNoteComponent,
    AcceuilPageComponent,
    NavBarComponent,
    FooterComponent,
    NavBarTopComponent,
    ConnexionPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
