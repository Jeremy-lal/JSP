import { NoteService } from './../../shared/services/note.service';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/user';
import { Note } from '../../shared/models/note';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {

  currentUser: User;
  notecurrentUser: Note[];

  constructor(private userService: UserService, private noteService: NoteService) { }

  ngOnInit() {
    this.userService.isLogged();
    this.currentUser = this.userService.currentUser;
    console.log(this.currentUser);
    this.noteService.getUserNote(this.currentUser.id).subscribe((data) => {
      this.notecurrentUser = data;
    });
  }

}
