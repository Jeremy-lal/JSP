import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-form-new-user',
  templateUrl: './form-new-user.component.html',
  styleUrls: ['./form-new-user.component.scss']
})
export class FormNewUserComponent implements OnInit {

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



  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  submit() {
    console.log(this.userForm.value);
  }

}
