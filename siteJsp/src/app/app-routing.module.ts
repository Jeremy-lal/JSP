import { AddNoteComponent } from './pages/add-note/add-note.component';
import { ModifierPageComponent } from './pages/modifier-page/modifier-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { Jsp4PageComponent } from './pages/jsp4-page/jsp4-page.component';
import { Jsp3PageComponent } from './pages/jsp3-page/jsp3-page.component';
import { Jsp2PageComponent } from './pages/jsp2-page/jsp2-page.component';
import { Jsp1PageComponent } from './pages/jsp1-page/jsp1-page.component';
import { QuestionPageComponent } from './pages/question-page/question-page.component';
import { CommunPageComponent } from './pages/commun-page/commun-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';


const routes: Routes = [
  { path: '', component: AcceuilPageComponent },
  { path: 'login', component: ConnexionPageComponent },
  { path: 'commun', component: CommunPageComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'jsp1', component: Jsp1PageComponent },
  { path: 'jsp2', component: Jsp2PageComponent },
  { path: 'jsp3', component: Jsp3PageComponent },
  { path: 'jsp4', component: Jsp4PageComponent },
  { path: 'profil', component: ProfilPageComponent },
  { path: 'admin', component: AdminPageComponent },
  { path: 'modifier', component: ModifierPageComponent },
  { path: 'note', component: AddNoteComponent  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
