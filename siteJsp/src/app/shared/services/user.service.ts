import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/api/users/';
  toUpdate = false;
  currentUser: User;
  id = 1;

  constructor(private http: HttpClient) { }

  getCurrentUser(id): Observable<User> {
    return this.http.get<User>(UserService.URL + id);
  }

  getAllUsers() {
    this.http.get(UserService.URL);
  }

  getjsp1() {
    this.http.get(UserService.URL + 'role/jsp1' );
  }

  getjsp2() {
    this.http.get(UserService.URL + 'role/jsp2' );
  }

  getjsp3() {
    this.http.get(UserService.URL + 'role/jsp3' );
  }

  getjsp4() {
    this.http.get(UserService.URL + 'role/jsp4' );
  }

  getAdmin() {
    this.http.get(UserService.URL + 'role/admin' );
  }

  createUser(newUser) {
    return this.http.post(UserService.URL, newUser);
  }

  updateUser(newUser) {
    this.http.put(UserService.URL, newUser);
  }

  deleteUser(id) {
    this.http.delete(UserService.URL + id);
  }

}
