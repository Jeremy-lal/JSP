import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormNewUserComponent } from '../../components/forms/form-new-user/form-new-user.component';
import { UsersByGoups } from 'src/app/shared/models/usersByGroups';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor(private userService: UserService, public dialog: MatDialog, private router: Router) { }

  users: UsersByGoups;
  toggle = false;

  ngOnInit() {
    this.getUsersByGroup();
  }

  openUserForm(): void {
    this.userService.toUpdate = false;
    const dialogRef = this.dialog.open(FormNewUserComponent, {
      width: '70%',
    });
    dialogRef.afterClosed().subscribe(() => {
      this.getUsersByGroup();
    });
  }

  getUsersByGroup() {
    this.userService.getAllUsersByGroups().subscribe((data) => this.users = data);
  }

  reloadData(bool: boolean) {
    this.getUsersByGroup();
  }

  toggleSideMenu($event) {
    const sideNav = document.getElementById('sideMenu');
    if (this.toggle === false ) {
      sideNav.classList.add('toggleSide');
    } else {
      sideNav.classList.remove('toggleSide');
    }
    this.toggle = !this.toggle;
  }
}
