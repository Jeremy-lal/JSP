import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';
import { FormNewUserComponent } from './components/form-new-user/form-new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNewNoteComponent } from './components/form-new-note/form-new-note.component';
import { MatInputModule, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { Page404Component } from './pages/page404/page404.component';
import { ResponseComponent } from './components/response/response.component';
import { PopupSignOutComponent } from './components/popup-sign-out/popup-sign-out.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { MessageComponent } from './components/message/message.component';
import { ConversationsComponent } from './pages/conversations/conversations.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfilPageComponent,
    AdminPageComponent,
    AcceuilPageComponent,
    FooterComponent,
    ConnexionPageComponent,
    FormNewUserComponent,
    FormNewNoteComponent,
    CommentFormComponent,
    UserAdminComponent,
    Page404Component,
    ResponseComponent,
    PopupSignOutComponent,
    SidemenuComponent,
    TchatComponent,
    MessageComponent,
    ConversationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatStepperModule,
    MatMenuModule,
    MatSelectModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {}},
              { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [CommentFormComponent, FormNewUserComponent, FormNewNoteComponent, PopupSignOutComponent]
})
export class AppModule { }





































