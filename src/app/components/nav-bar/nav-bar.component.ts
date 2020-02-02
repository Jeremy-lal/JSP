import { User } from '../../shared/models/user';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

}
