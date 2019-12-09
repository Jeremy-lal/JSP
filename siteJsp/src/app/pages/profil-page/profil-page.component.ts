import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-profil-page',
  templateUrl: './profil-page.component.html',
  styleUrls: ['./profil-page.component.scss']
})
export class ProfilPageComponent implements OnInit {

  currentUser: User;
  constructor(private userService: UserService) { }

  ngOnInit() {
      this.currentUser =  this.userService.currentUser;
      console.log(this.currentUser);
  }

}
