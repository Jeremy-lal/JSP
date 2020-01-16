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

  imgArray = [
    '../../../assets/jsp1.jpeg',
    '../../../assets/jsp2.jpg',
    '../../../assets/jsp3.jpg',
];

  indexPicture: number;

  constructor(private route: Router, private userService: UserService) { }

  ngOnInit() {
    this.indexPicture = Math.floor(Math.random() * (this.imgArray.length));
  }

  login() {
    this.userService.getCurrentUser(1).subscribe(data => {
      this.userService.currentUser = data[0];
      this.route.navigateByUrl('/commun');
    });
  }


}
