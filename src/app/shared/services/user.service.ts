import { User } from './../models/user';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  static URL = 'http://localhost:3000/users/';
  static URL_AUTH = 'http://localhost:3000/auth/';

  toUpdate = false;
  // currentUser: User;
  currentUser: User =
    {
      id: 21,
      firstname: 'Jeremy',
      lastname: 'Lalait',
      birthday: new Date(),
      tel: '0620460443',
      email: 'jlalait33700@gmail.com',
      adress: {
        street: 'bjbhjbjhbj',
        postcode: 33700,
        city: 'string'
      },
      status: 'superAdmin',
      username: 'j.lalait',
      pwd: '$argon2i$v=19$m=4096,t=3,p=1$on5LhE4QZI4DvNmtmyD2vw$aJ7WNcKXyEUSCcUhnCFI7ne3CnvAB9r+yymdD4QPZWw',
      imgURL: 'https://image.shutterstock.com/image-vector/admin-stamp-watermark-scratched-style-260nw-1138728377.jpg',
      note: []
    };

  constructor(private http: HttpClient) { }


  public getMe() {
    return this.http.get(UserService.URL + 'user/me').pipe(
      tap((user: User) => {
        this.currentUser = user;
      })
    );
  }

  public isLogged(): Observable<boolean> {
    return this.getMe().pipe(
      map((user: User) => {
        return (user != null);
      }
      ));
  }


  public connexion(user: User) {
    return this.http.post(UserService.URL_AUTH + 'signin', user, { observe: 'response' }).pipe(
      tap((response: HttpResponse<any>) => {
        const token = response.headers.get('JWT-TOKEN');
        localStorage.setItem('JWT-TOKEN', token);
        this.currentUser = response.body;
        console.log(this.currentUser);
        return response.body;
      }));
  }

  getCurrentUser(id): Observable<User> {
    return this.http.get<User>(UserService.URL + id);
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL);
  }

  getUsersByGroup(grp: string): Observable<User[]> {
    return this.http.get<User[]>(UserService.URL + 'role/' + grp );
  }

  createUser(newUser) {
    return this.http.post(UserService.URL_AUTH + 'signup', newUser);
  }

  updateUser(userToUpdate) {
    const id = userToUpdate.id;
    return this.http.put(UserService.URL + id, userToUpdate);
  }

  deleteUser(id) {
    return this.http.delete(UserService.URL + id);
  }

}
