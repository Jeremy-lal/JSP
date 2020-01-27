import { Note } from 'src/app/shared/models/note';
import { FormNewNoteComponent } from './../form-new-note/form-new-note.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/shared/services/note.service';
import { UserService } from 'src/app/shared/services/user.service';
import { MatDialog } from '@angular/material';
import { User } from 'src/app/shared/models/user';
import { FormNewUserComponent } from '../form-new-user/form-new-user.component';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  @Input() pers: User;

  constructor(private userService: UserService, public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit() {
  }

  openNoteForm(userId) {
    this.noteService.toUpdate = false;
    const dialogRef = this.dialog.open(FormNewNoteComponent, {
      width: '550px',
      data: userId
    });
  }


  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }

  updateUser(user) {
    this.userService.toUpdate = true;
    const dialogRef = this.dialog.open(FormNewUserComponent, {
      width: '70%',
      data: user
    });

  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe();
  }
}
