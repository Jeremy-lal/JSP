import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.scss']
})
export class FormNewUserComponent implements OnInit {

  isLinear = false;
  currentUser: User;
  user = new User();

  userForm = this.fb.group({

    firstname: [''],
    lastname: [''],

    birthday: [''],
    tel: [''],
    email: [''],
    status: [''],
    imgUrl: [''],

    username: [''],
    pwd: [''],

    adress: this.fb.group({
      street: [''],
      postcode: [''],
      city: ['']
    })
  });



  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FormNewUserComponent>, private userService: UserService) { }

  ngOnInit() {
      this.currentUser = this.userService.currentUser;
  }

  submit() {
    console.log(this.userForm.value);
  }
  sendUser(): void {
    const userToPost = this.userForm.value;
    this.userService.createUser(userToPost).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
  }

}
