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
    AddNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
