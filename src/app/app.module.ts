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
import { HttpClientModule } from '@angular/common/http';
import { CommentComponent } from './components/comment/comment.component';
import { FormNewUserComponent } from './components/form-new-user/form-new-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormNewNoteComponent } from './components/form-new-note/form-new-note.component';
import { MatInputModule, MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { OpenCommentFromComponent } from './components/open-comment-from/open-comment-from.component';
import { UserAdminComponent } from './components/user-admin/user-admin.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatStepperModule} from '@angular/material/stepper';
import { Page404Component } from './pages/page404/page404.component';
import { ResponseComponent } from './components/response/response.component';
import { PopupSignOutComponent } from './components/popup-sign-out/popup-sign-out.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';



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
    AcceuilPageComponent,
    NavBarComponent,
    FooterComponent,
    NavBarTopComponent,
    ConnexionPageComponent,
    CommentComponent,
    FormNewUserComponent,
    FormNewNoteComponent,
    CommentFormComponent,
    OpenCommentFromComponent,
    UserAdminComponent,
    Page404Component,
    ResponseComponent,
    PopupSignOutComponent
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





































