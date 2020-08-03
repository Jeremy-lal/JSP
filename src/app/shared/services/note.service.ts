import { UserService } from './user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.get<Note[]>(NoteService.URL + id, {headers});
  }

  addNote(note: Note) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return  this.http.post(NoteService.URL, note, {headers});
  }

  updateNote(note: Note) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    const id = note.id;
    return this.http.put(NoteService.URL + id, note, {headers});
  }

  deleteNote(id: number) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.userService.token });
    return this.http.delete(NoteService.URL + id, {headers});
  }
}

