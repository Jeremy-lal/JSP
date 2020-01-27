import { PopupSignOutComponent } from './../popup-sign-out/popup-sign-out.component';
import { UserService } from './../../shared/services/user.service';
import { User } from '../../shared/models/user';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-nav-bar-top',
  templateUrl: './nav-bar-top.component.html',
  styleUrls: ['./nav-bar-top.component.scss']
})
export class NavBarTopComponent implements OnInit {

  currentUser: User;

  constructor(private userService: UserService,  public dialog: MatDialog) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;
  }

  logOut() {
    const dialogRef = this.dialog.open(PopupSignOutComponent, {
      width: '550px',
    });
  }

}
