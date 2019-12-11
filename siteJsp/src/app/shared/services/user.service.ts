import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorage } from '@ngx-pwa/local-storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/api/users/';
  toUpdate = false;
  currentUser: User;
  id = 1;

  // localStorage.setItem('currentUser', JSON.stringify(this.currentUser));


constructor(private http: HttpClient) { }

getCurrentUser(id): Observable < User > {
  return this.http.get<User>(UserService.URL + id);
}

getAllUsers(): Observable < User[] > {
  return this.http.get<User[]>(UserService.URL);
}

getjsp1(): Observable < User[] > {
  return this.http.get<User[]>(UserService.URL + 'role/jsp1');
}

getjsp2(): Observable < User[] > {
  return this.http.get<User[]>(UserService.URL + 'role/jsp2');
}

getjsp3(): Observable < User[] > {
  return this.http.get<User[]>(UserService.URL + 'role/jsp3');
}

getjsp4(): Observable < User[] > {
  return this.http.get<User[]>(UserService.URL + 'role/jsp4');
}

getAdmin(): Observable < User[] > {
  return this.http.get<User[]>(UserService.URL + 'role/admin');
}

createUser(newUser) {
  return this.http.post(UserService.URL, newUser);
}

updateUser(newUser) {
  return this.http.put(UserService.URL, newUser);
}

deleteUser(id) {
  return this.http.delete(UserService.URL + id);
}

}
