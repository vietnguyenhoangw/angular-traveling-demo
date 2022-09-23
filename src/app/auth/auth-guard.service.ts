import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { pagesLink } from '../app-routing.module';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthService, public router: Router) {}

  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigateByUrl(pagesLink.loginPage);
      return false;
    }
    return true;
  }
}
