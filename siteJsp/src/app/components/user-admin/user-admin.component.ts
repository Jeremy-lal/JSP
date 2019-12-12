import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/shared/services/note.service';
import { UserService } from 'src/app/shared/services/user.service';
import { MatDialog } from '@angular/material';
import { FormNewUserComponent } from 'src/app/components/form-new-user/form-new-user.component';
import { User } from 'src/app/shared/models/user';


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

  openNoteForm() {
    this.noteService.toUpdate = false;
    const dialogRef = this.dialog.open(FormNewUserComponent, {
      width: '550px',
    });
  }



  deleteUser(id: number) {
    this.userService.deleteUser(id).subscribe();
  }
}
