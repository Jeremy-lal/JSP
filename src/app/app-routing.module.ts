import { ConversationsComponent } from './pages/conversations/conversations.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { AuthGuard } from './core/auth.guard';
import { AdminGuard } from './core/admin.guard';
import { Page404Component } from './pages/page404/page404.component';


const routes: Routes = [
  { path: '', component: AcceuilPageComponent },
  { path: 'login', component: ConnexionPageComponent },
  { path: 'conversation', component: ConversationsComponent, canActivate: [AuthGuard] },
  { path: 'profil', component: ProfilPageComponent, canActivate: [AuthGuard] },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: '**', component: Page404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
