import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser = {
    id: 1,
    firstname: 'Sébastien',
    lastname: 'De Marco',
    birthday:  '01/01/1995',
    tel: '06-20-46-04-49',
    email: 'sebleboss@gmail.com',
    status: 'sperAdmin',
    adress: '11 rue de la chenillette 33700 Mérignac',
    imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/1656021_10203296925362795_1343939831_n.jpg?_nc_cat=101&_nc_ohc=bNQWW5Zz27wAQkQDLTHBTVhNLZ_2aeZKBvNlD5Y6Tg3s1gjZoMAL5X6Pg&_nc_ht=scontent-cdt1-1.xx&oh=ac9a28e981590cffad5d7a803e089465&oe=5E82F6FA'
  };
  constructor() { }
}
