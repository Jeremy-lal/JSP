import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Note } from './../models/note';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  static noteUrl = 'url';

  toUpdate = false;

  constructor(private http: HttpClient, private userService: UserService) { }

  addNote(note: Note) {
    note.userId = this.userService.currentUser.id;
    return  this.http.post(NoteService.noteUrl, note);
  }

  updateWildEvent(note: Note) {
    const id = note.id;
    return this.http.put(NoteService.noteUrl + id, note);
  }

  deleteNote(note: Note) {
    return this.http.delete(NoteService.noteUrl + note.id);
  }
}

