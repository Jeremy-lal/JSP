import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil-page',
  templateUrl: './acceuil-page.component.html',
  styleUrls: ['./acceuil-page.component.scss']
})
export class AcceuilPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToHome() {
    this.route.navigateByUrl('/login');
  }
}
