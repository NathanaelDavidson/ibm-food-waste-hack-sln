import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild {
  constructor(private auth: AuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const user = this.auth.getCurrentUser();
    if (!user) {
      return true;
    } else if (user.type === 'buyer') {
      return this.router.parseUrl('/buyers');
    } else if (user.type === 'seller') {
      return this.router.parseUrl('/sellers');
    }
    return false;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const user = this.auth.getCurrentUser();
      if (!user) {
        return true;
      } else if (user.type === 'buyer') {
        return this.router.parseUrl('/buyers');
      } else if (user.type === 'seller') {
        return this.router.parseUrl('/sellers');
      }
      return false;
  }
}
