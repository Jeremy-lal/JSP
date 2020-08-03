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
  // currentUser: User =
  //   {
  //     id: 2,
  //     firstname: 'Jeremy',
  //     lastname: 'Lalait',
  //     birthday: new Date(),
  //     tel: '0620460443',
  //     email: 'jlalait33700@gmail.com',
  //     adress: {
  //       street: 'bjbhjbjhbj',
  //       postcode: 33700,
  //       city: 'string'
  //     },
  //     status: 'superAdmin',
  //     username: 'j.lalait',
  //     pwd: '$argon2i$v=19$m=4096,t=3,p=1$on5LhE4QZI4DvNmtmyD2vw$aJ7WNcKXyEUSCcUhnCFI7ne3CnvAB9r+yymdD4QPZWw',
  //     imgURL: 'https://image.shutterstock.com/image-vector/admin-stamp-watermark-scratched-style-260nw-1138728377.jpg',
  //     note: []
  //   };

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
    return this.http.get<User[]>(UserService.URL);
  }

  getAllUsersByGroups(): Observable<UsersByGoups> {
    return this.http.get<UsersByGoups>(UserService.URL + 'groups');
  }

  getUsersByGroup(grp: string): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL + 'role/' + grp );
  }

  createUser(newUser) {
    return this.http.post(UserService.URL_AUTH + 'signup', newUser);
  }

  updateUser(userToUpdate: User) {
    const id = userToUpdate.id;
    delete userToUpdate.note;
    return this.http.put(UserService.URL + id, userToUpdate);
  }

  updateUserPicture(userToUpdate: User) {
    const id = userToUpdate.id;
    return this.http.put(UserService.URL + 'picture/' + id, userToUpdate);
  }

  updateUserPwd(password: string, newPassword: string): Observable<string> {
    const params = {
      user: this.currentUser,
      pwd: password,
      newPwd: newPassword
    };
    return this.http.put<string>(UserService.URL_AUTH + 'pwd', params);
  }

  deleteUser(id) {
    return this.http.delete(UserService.URL + id);
  }

}
