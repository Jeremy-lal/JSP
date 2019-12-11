import { UserService } from './../../shared/services/user.service';
import { User } from 'src/app/shared/models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.scss']
})
export class NavBarTopComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

}
