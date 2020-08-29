import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

// pages
import { ProfilPageComponent } from './pages/profil-page/profil-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { AcceuilPageComponent } from './pages/acceuil-page/acceuil-page.component';
import { ConnexionPageComponent } from './pages/connexion-page/connexion-page.component';
import { Page404Component } from './pages/page404/page404.component';
import { ConversationsComponent } from './pages/conversations/conversations.component';

// components
import { FormNewUserComponent } from './components/forms/form-new-user/form-new-user.component';
import { FormNewNoteComponent } from './components/forms/form-new-note/form-new-note.component';
import { CommentFormComponent } from './components/forms/comment-form/comment-form.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import { PopupSignOutComponent } from './components/popup-sign-out/popup-sign-out.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { MessageComponent } from './components/message/message.component';
import { TchatResponseComponent } from './components/tchat-response/tchat-response.component';

// material
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatInputModule, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';
import { ScrollDirective } from './shared/directives/scroll.directive';
import {MatSidenavModule} from '@angular/material/sidenav';
import { PictureFromComponent } from './components/forms/picture-from/picture-from.component';
import { ChangePwdComponent } from './pages/change-pwd/change-pwd.component';
import { ResponseFormComponent } from './components/forms/response-form/response-form.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    ProfilPageComponent,
    AdminPageComponent,
    AcceuilPageComponent,
    ConnexionPageComponent,
    FormNewUserComponent,
    FormNewNoteComponent,
    CommentFormComponent,
    UserAdminComponent,
    Page404Component,
    PopupSignOutComponent,
    SidemenuComponent,
    TchatComponent,
    MessageComponent,
    ConversationsComponent,
    ScrollDirective,
    ResponseFormComponent,
    TchatResponseComponent,
    PictureFromComponent,
    ChangePwdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDialogModule,
    MatExpansionModule,
    MatStepperModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule
  ],
  providers: [{ provide: MatDialogRef, useValue: {}},
              { provide: MAT_DIALOG_DATA, useValue: {} },
  ],
  bootstrap: [AppComponent],
  entryComponents: [CommentFormComponent, FormNewUserComponent, FormNewNoteComponent, PopupSignOutComponent, PictureFromComponent]
})
export class AppModule { }





































