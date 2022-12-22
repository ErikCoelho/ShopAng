import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthService implements CanActivate {
    constructor(private router: Router) {
    }

    canActivate() {
        const token = localStorage.getItem('shop.token');
        if (!token) {
            this.router.navigate(['/login']);
            return false;
        }

        return true;
    }
}