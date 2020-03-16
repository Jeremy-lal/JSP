import { FormNewNoteComponent } from './../form-new-note/form-new-note.component';
import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from '../../shared/services/note.service';
import { UserService } from '../../shared/services/user.service';
import { MatDialog } from '@angular/material';
import { User } from '../../shared/models/user';
import { FormNewUserComponent } from '../form-new-user/form-new-user.component';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.scss']
})
export class UserAdminComponent implements OnInit {

  @Input() pers: User;
  URL = 'http://localhost:3000/picture';

  images;

  constructor(private http: HttpClient, private userService: UserService, public dialog: MatDialog, private noteService: NoteService) { }

  ngOnInit() {
  }

  selectImage(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.images = file;
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('picture', this.images);

    this.http.post<any>(this.URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
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
