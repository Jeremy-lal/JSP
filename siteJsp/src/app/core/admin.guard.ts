import { UserService } from 'src/app/shared/services/user.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private userService: UserService, private router: Router) {}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const token = this.userService.currentUser.status;
      if (token === 'Admin' || token === 'superAdmin') {
        return true;
      } else {
        this.router.navigate(['/commun']);
        return false;
      }
  }

}
