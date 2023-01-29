import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
      const bredecodedTokenmat = this.authService.getDecodedToken(this.authService.getToken());
      if (route.data['roles'][0] && route.data['roles'][0].indexOf(bredecodedTokenmat.roles) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}