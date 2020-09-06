import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.scss']
})
export class ChangePwdComponent implements OnInit {

  newPwd: FormGroup;
  message = '';
  toggle = false;

  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) { }

  ngOnInit() {
    this.newPwd = this.fb.group({
      pwd: ['', [Validators.required]],
      newPwd1: ['', [Validators.required, Validators.minLength(8)]],
      newPwd2: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  changePwd() {
    const pwd = this.newPwd.controls.pwd.value;
    if (this.newPwd.controls.newPwd1.value === this.newPwd.controls.newPwd2.value) {
      const newPwd = this.newPwd.controls.newPwd2.value;
      this.userService.updateUserPwd(pwd, newPwd).subscribe((data) => {
        this.message = data;
      });
    } else {
      this.message = 'Les deux mots de passe doivent être identique.';
    }
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
