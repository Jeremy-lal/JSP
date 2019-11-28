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

  constructor(private route: Router) { }

  ngOnInit() {
  }


  login() {
    this.route.navigateByUrl('/commun');
  }


}
