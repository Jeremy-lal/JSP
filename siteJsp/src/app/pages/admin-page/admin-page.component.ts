import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormNewUserComponent } from 'src/app/components/form-new-user/form-new-user.component';
import { NoteService } from 'src/app/shared/services/note.service';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog, private noteService: NoteService) { }

  listjsp1: User[];
  listjsp2: User[];
  listjsp3: User[];
  listjsp4: User[];
  listadmin: User[];
  4;

  ngOnInit() {
    this.userService.getjsp1().subscribe((jsp1: User[]) => this.listjsp1 = jsp1);
    this.userService.getjsp2().subscribe((jsp2: User[]) => this.listjsp2 = jsp2);
    this.userService.getjsp3().subscribe((jsp3: User[]) => this.listjsp3 = jsp3);
    this.userService.getjsp4().subscribe((jsp4: User[]) => this.listjsp4 = jsp4);
    this.userService.getAdmin().subscribe((admin: User[]) => this.listadmin = admin);
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

  deleteUser(id: number) {
    // this.userService.deleteUser.subscribe(id);
  }

}
