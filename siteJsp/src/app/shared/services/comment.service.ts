import { Comment } from './../models/comment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  commentsCommun: Comment[] = [
    {
      id: 1,
      user: {
        id: 1,
        firstname: 'Sébastien',
        lastname: 'Demarco',
        birthday:  '01/01/1995',
        tel: '06-20-46-04-49',
        email: 'sebleboss@gmail.com',
        status: 'sperAdmin',
        adress: '11 rue de la chenillette 33700 Mérignac',
        imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/1656021_10203296925362795_1343939831_n.jpg?_nc_cat=101&_nc_ohc=bNQWW5Zz27wAQkQDLTHBTVhNLZ_2aeZKBvNlD5Y6Tg3s1gjZoMAL5X6Pg&_nc_ht=scontent-cdt1-1.xx&oh=ac9a28e981590cffad5d7a803e089465&oe=5E82F6FA'
      },
      date: new Date(),
      title: 'Cross',
      content: 'Le cross départemental est le 11 novembre.  Pensez à prendre vos affaire de sport',
      grp: 'commun'
    },
    {
      id: 2,
      user: {
        id: 1,
        firstname: 'Sébastien',
        lastname: 'De Marco',
        birthday:  '01/01/1995',
        tel: '06-20-46-04-49',
        email: 'sebleboss@gmail.com',
        status: 'sperAdmin',
        adress: '11 rue de la chenillette 33700 Mérignac',
        imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t1.0-9/1656021_10203296925362795_1343939831_n.jpg?_nc_cat=101&_nc_ohc=bNQWW5Zz27wAQkQDLTHBTVhNLZ_2aeZKBvNlD5Y6Tg3s1gjZoMAL5X6Pg&_nc_ht=scontent-cdt1-1.xx&oh=ac9a28e981590cffad5d7a803e089465&oe=5E82F6FA'
      },
      date: new Date(),
      title: 'Gouter',
      content: 'Gouter de groupe mercredi prochain, chacun emmenne quelque chose svp ! ',
      grp: 'commun'
    },
    {
      id: 3,
      user: {
        id: 2,
        firstname: 'Aurélie',
        lastname: 'Simonet',
        birthday:  '01/01/1999',
        tel: '06-20-50-12-26',
        email: 'vivelabiere@gmail.com',
        status: 'jsp1',
        adress: '11 rue du pub 33700 Mérignac',
        imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/s960x960/20369751_1255002984622776_1387746616269569954_o.jpg?_nc_cat=107&_nc_ohc=Uz0t1zpZD8YAQmeMvttUCrMGYWOkHKlTK6c3nMkpp9D2mf7FNVSymQIZA&_nc_ht=scontent-cdt1-1.xx&oh=d43c09d2a0ba5ffa0289bfecdd087e41&oe=5E895C1D'
      },
      date: new Date(),
      title: 'Lorem',
      grp: 'commun',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis architecto eius quod vitae assumenda, nesciunt aut dolor, quis, aliquam voluptas unde veritatis repudiandae fugit omnis atque expedita nam harum'
    },
    {
      id: 3,
      user: {
        id: 2,
        firstname: 'Aurélie',
        lastname: 'Simonet',
        birthday:  '01/01/1999',
        tel: '06-20-50-12-26',
        email: 'vivelabiere@gmail.com',
        status: 'Admin',
        adress: '11 rue du pub 33700 Mérignac',
        imgUrl: 'https://scontent-cdt1-1.xx.fbcdn.net/v/t31.0-8/s960x960/20369751_1255002984622776_1387746616269569954_o.jpg?_nc_cat=107&_nc_ohc=Uz0t1zpZD8YAQmeMvttUCrMGYWOkHKlTK6c3nMkpp9D2mf7FNVSymQIZA&_nc_ht=scontent-cdt1-1.xx&oh=d43c09d2a0ba5ffa0289bfecdd087e41&oe=5E895C1D'
      },
      date: new Date(),
      title: 'Lorem',
      grp: 'commun',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit debitis architecto eius quod vitae assumenda, nesciunt aut dolor, quis, aliquam voluptas unde veritatis repudiandae fugit omnis atque expedita nam harum'
    }
  ];

  constructor() { }

  getCommunComment() {
    return this.commentsCommun;
  }
}
