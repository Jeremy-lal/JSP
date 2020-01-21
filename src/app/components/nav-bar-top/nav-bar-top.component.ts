import { Router } from '@angular/router';
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

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  logOut() {
    localStorage.removeItem('JWT-TOKEN');
    this.userService.currentUser = null;
    this.router.navigateByUrl('/');
  }

}
