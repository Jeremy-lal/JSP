import { PictureFromComponent } from './../../components/forms/picture-from/picture-from.component';
import { NoteService } from './../../shared/services/note.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { Note } from '../../shared/models/note';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {

  currentUser: User;
  notecurrentUser: Note[];
  toggle = false;

  constructor(private userService: UserService, private noteService: NoteService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
    if (this.currentUser) {
      this.noteService.getUserNote(this.currentUser.id).subscribe((data) => {
        this.notecurrentUser = data;
      });
    }
  }

  openPictureForm() {
    this.dialog.open(PictureFromComponent, {
      data: this.currentUser
    });
  }

  toggleSideMenu($event) {
    const sideNav = document.getElementById('sideMenu');
    if (this.toggle === false ) {
      sideNav.classList.add('toggleSide');
    } else {
      sideNav.classList.remove('toggleSide');
    }
    this.toggle = !this.toggle;
  }

}
