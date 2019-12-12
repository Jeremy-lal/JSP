import { UserService } from './../../shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-connexion-page',
  templateUrl: './connexion-page.component.html',
  styleUrls: ['./connexion-page.component.scss']
})
export class ConnexionPageComponent implements OnInit {

  username: string;
  password: string;

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
  }

  login() {
    this.userService.getCurrentUser(3).subscribe(data => {
      this.userService.currentUser = data[0];
      this.route.navigateByUrl('/commun');
    });
  }


}
