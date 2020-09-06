import { FormNewNoteComponent } from '../forms/form-new-note/form-new-note.component';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from '../../shared/services/note.service';
import { UserService } from '../../shared/services/user.service';
import { MatDialog } from '@angular/material';
import { User } from '../../shared/models/user';
import { FormNewUserComponent } from '../forms/form-new-user/form-new-user.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  @Input() pers: User;
  @Output() reloadData = new EventEmitter<boolean>();

  constructor(private userService: UserService, public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit() {
  }

  openNoteForm(userId) {
    this.noteService.toUpdate = false;
    const dialogRef = this.dialog.open(FormNewNoteComponent, {
      width: '550px',
      data: userId
    });
    dialogRef.afterClosed().subscribe(result => {
      this.reloadData.emit(true);
    });
  }


  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe(() => {
      this.reloadData.emit(true);
    });
  }

  updateUser(user) {
    this.userService.toUpdate = true;
    const dialogRef = this.dialog.open(FormNewUserComponent, {
      width: '70%',
      data: user
    });
    dialogRef.afterClosed().subscribe(() => {
      this.reloadData.emit(true);
    });

  }

  deleteNote(id: number) {
    this.noteService.deleteNote(id).subscribe();
  }
}
