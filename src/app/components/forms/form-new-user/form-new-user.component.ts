import { UserService } from '../../../shared/services/user.service';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from '../../../shared/models/user';
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
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    birthday: ['', Validators.required],
    tel: ['', [Validators.required, Validators.minLength(10)]],
    email: ['', Validators.required],
    status: ['', Validators.required],
    username: ['', Validators.required],
    pwd: ['', [Validators.required, Validators.minLength(10)]],
    adress: ['', Validators.required]
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
    }
  }

  sendUser(): void {
    const userToPost: User = this.userForm.value;
    userToPost.imgURL = 'default.png';
    this.userService.createUser(userToPost).subscribe();
    this.dialogRef.close();
  }

  updateUser(): void {
    const userToUpdate: User = this.userForm.value;
    userToUpdate.id = this.userToUpdate.id;

    this.userService.updateUser(userToUpdate).subscribe();
    this.dialogRef.close();
    this.userService.toUpdate = false;
  }

}
