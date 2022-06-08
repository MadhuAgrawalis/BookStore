import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
//import { Observable } from 'rxjs';
import { AuthguradServiceService} from './authgurad-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate {
  constructor(private auth: AuthguradServiceService, private router: Router) {

  }
  canActivate() :boolean
    {
      if (!this.auth.isLoggedIn()) {
        this.router.navigateByUrl('/login-signup');
  }
  return this.auth.isLoggedIn();
}
}
