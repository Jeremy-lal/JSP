import { UserService } from './user.service';
import { HttpClient } from '@angular/common/http';
import { Note } from './../models/note';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  static URL = 'http://localhost:3000/notes/';

  toUpdate = false;

  constructor(private http: HttpClient, private userService: UserService) { }

  getUserNote(id: number) {
    return this.http.get<Note[]>(NoteService.URL + id);
  }

  addNote(note: Note) {
    note.userId = this.userService.currentUser.id;
    return  this.http.post(NoteService.URL, note);
  }

  updateNote(note: Note) {
    const id = note.id;
    return this.http.put(NoteService.URL + id, note);
  }

  deleteNote(note: Note) {
    return this.http.delete(NoteService.URL + note.id);
  }
}

