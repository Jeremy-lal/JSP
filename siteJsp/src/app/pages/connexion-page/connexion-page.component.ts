import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit {

  signInForm: FormGroup;

  imgArray = [
    '../../../assets/jsp1.jpeg',
    '../../../assets/jsp2.jpg',
    '../../../assets/jsp3.jpg',
];

  indexPicture: number;

  constructor(private route: Router, private userService: UserService, private router: Router,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.indexPicture = Math.floor(Math.random() * (this.imgArray.length));

    this.signInForm = this.fb.group({
      username: ['', [Validators.required]],
      pwd: ['', [Validators.required]]
    });
  }

  login() {
    this.userService.connexion(this.signInForm.value).subscribe(() => {
      this.router.navigateByUrl('/commun');
    });
  }



}
