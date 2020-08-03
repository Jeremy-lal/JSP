import { UsersByGoups } from './../models/usersByGroups';
import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/users/';
  static URL_AUTH = 'http://localhost:3000/auth/';

  toUpdate = false;
  token: string;
  currentUser: User;

  constructor(private http: HttpClient) { }


  setToken(token: string) {
    this.token = token;
  }

  getCurrentUser(): Observable<User> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.get<User>(UserService.URL + 'user/me', { headers }).pipe(
      tap((user: User) => {
        this.currentUser = user;
      }));
  }

  authenticate(): Observable<boolean> {
    return this.getCurrentUser().pipe(
      map((user: User) => (user != null && user.id != null)));
  }

  connexion(user: User) {
    return this.http.post(UserService.URL_AUTH + 'signin', user, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.currentUser = response.body;
        return response.body;
      }));
  }

  getAllUsers(): Observable<User[]> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.get<User[]>(UserService.URL, {headers});
  }

  getAllUsersByGroups(): Observable<UsersByGoups> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.get<UsersByGoups>(UserService.URL + 'groups', {headers});
  }

  getUsersByGroup(grp: string): Observable<User[]> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.get<User[]>(UserService.URL + 'role/' + grp, {headers} );
  }

  createUser(newUser) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.post(UserService.URL_AUTH + 'signup', newUser, {headers});
  }

  updateUser(userToUpdate: User) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    const id = userToUpdate.id;
    delete userToUpdate.note;
    return this.http.put(UserService.URL + id, userToUpdate, {headers});
  }

  updateUserPicture(userToUpdate: User) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    const id = userToUpdate.id;
    return this.http.put(UserService.URL + 'picture/' + id, userToUpdate, {headers});
  }

  updateUserPwd(password: string, newPassword: string): Observable<string> {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    const params = {
      user: this.currentUser,
      pwd: password,
      newPwd: newPassword
    };
    return this.http.put<string>(UserService.URL_AUTH + 'pwd', params, {headers});
  }

  deleteUser(id) {
    const headers = new HttpHeaders({ Authorization: 'Bearer ' + this.token });
    return this.http.delete(UserService.URL + id, {headers});
  }

}
