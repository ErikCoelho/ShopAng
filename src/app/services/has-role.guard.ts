import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class HasRoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router,) { }

  canActivate(
    route: ActivatedRouteSnapshot,

  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isAuthorized = this.authService.user?.role.includes(route.data['role']);

    if (!isAuthorized) {
      this.router.navigateByUrl("/unauthorized");
    }

    return isAuthorized || false;
  }

}
