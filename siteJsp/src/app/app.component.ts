import { UserService } from 'src/app/shared/services/user.service';
import { Component, ɵConsole } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'siteJsp';

  constructor(private userService: UserService) { ///// mettre avec form de connecxon
    // this.userService.connexion('inco.inco', 'inconnu1 ').subscribe((token: string) => {
    // });
  }
}
