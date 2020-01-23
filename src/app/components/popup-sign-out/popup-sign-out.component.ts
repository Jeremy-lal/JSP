import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-popup-sign-out',
  templateUrl: './popup-sign-out.component.html',
  styleUrls: ['./popup-sign-out.component.scss']
})
export class PopupSignOutComponent implements OnInit {

  constructor(private userService: UserService, private router: Router, public dialogRef: MatDialogRef<PopupSignOutComponent>) { }

  ngOnInit() {
  }

  logOut() {
    localStorage.removeItem('JWT-TOKEN');
    this.userService.currentUser = null;
    this.router.navigateByUrl('/');
    this.dialogRef.close();
  }

  cancel() {
    this.dialogRef.close();
  }

}
