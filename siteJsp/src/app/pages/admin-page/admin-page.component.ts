import { NoteService } from './../../shared/note.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormNewUserComponent } from 'src/app/components/form-new-user/form-new-user.component';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit() {
  }
  openUserForm(): void {
    this.userService.toUpdate = false;
    const dialogRef = this.dialog.open(FormNewUserComponent, {
      width: '550px',
    });

  }

  openNoteForm() {
    this.noteService.toUpdate = false;
    const dialogRef = this.dialog.open(FormNewUserComponent, {
      width: '550px',
    });
  }
}
