import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from '../../shared/models/user';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

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

    firstname: [''], lastname: [''], birthday: [''], tel: [''], email: [''], status: [''], imgURL: [''],
    username: [''], pwd: [''], adress: ['']
  });



  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<FormNewUserComponent>, public userService: UserService,
              @Inject(MAT_DIALOG_DATA) public userToUpdate: User) { }

  ngOnInit() {
    this.currentUser = this.userService.currentUser;

    if (this.userService.toUpdate === true) {
      this.userForm.controls.firstname.setValue(this.userToUpdate.firstname);
      this.userForm.controls.lastname.setValue(this.userToUpdate.lastname);
      this.userForm.controls.username.setValue(this.userToUpdate.username);
      this.userForm.controls.adress.setValue(this.userToUpdate.adress);
      this.userForm.controls.birthday.setValue(this.userToUpdate.birthday);
      this.userForm.controls.tel.setValue(this.userToUpdate.tel);
      this.userForm.controls.email.setValue(this.userToUpdate.email);
      this.userForm.controls.pwd.setValue(this.userToUpdate.pwd);
      this.userForm.controls.status.setValue(this.userToUpdate.status);
      this.userForm.controls.imgURL.setValue(this.userToUpdate.imgURL);
    }
  }

  sendUser(): void {
    const userToPost = this.userForm.value;
    this.userService.createUser(userToPost).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
  }

  updateUser(): void {
    const userToUpdate: User = this.userForm.value;
    userToUpdate.id = this.userToUpdate.id;

    this.userService.updateUser(userToUpdate).subscribe((eventPosted) => {
      console.log(eventPosted);
    });
    this.dialogRef.close();
    this.userService.toUpdate = false;
  }

}
